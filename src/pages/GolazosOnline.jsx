import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { addPoints, getUserPoints } from '../lib/userPoints.js'
import XPWidget from './XPWidget.jsx'
import { PARTIDOS, getFlag, normalizarNombre } from '../lib/golazosData.js'

function matchGoleador(input, nombre) {
  if (!input || input.length < 2) return false
  const inp = normalizarNombre(input)
  const nom = normalizarNombre(nombre)
  if (nom.includes(inp)) return true
  const partsInp = inp.split(' ').filter(Boolean)
  const partsNom = nom.split(' ').filter(Boolean)
  return partsInp.every(pi => partsNom.some(pn => pn.startsWith(pi) || pn.includes(pi)))
}

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export default function GolazosOnline() {
  const nav = useNavigate()
  const [screen, setScreen] = useState('menu')
  const [myName, setMyName] = useState('')
  const [codigoInput, setCodigoInput] = useState('')
  const [session, setSession] = useState(null)
  const [myUid, setMyUid] = useState(null)
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sesionesGuardadas, setSesionesGuardadas] = useState([])
  const [user, setUser] = useState(null)
  const [totalXP, setTotalXP] = useState(0)
  const [lastGained, setLastGained] = useState(0)
  const [xpLoaded, setXpLoaded] = useState(false)
  const inputRef = useRef(null)
  const pollRef = useRef(null)
  const myUidRef = useRef(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      let uid = data.user?.id
      if (!uid) {
        uid = localStorage.getItem('anon_uid')
        if (!uid) { uid = 'anon_' + Math.random().toString(36).substring(2,12); localStorage.setItem('anon_uid', uid) }
      }
      setMyUid(uid); myUidRef.current = uid
      const name = data.user?.user_metadata?.full_name || data.user?.email?.split('@')[0] || ''
      if (name) setMyName(name)
      const u = data.user ?? null; setUser(u)
      if (u) getUserPoints(u.id).then(pts => { setTotalXP(pts); setXpLoaded(true) })
      else setXpLoaded(true)
    })
    setSesionesGuardadas(JSON.parse(localStorage.getItem('golazo_sesiones') || '[]'))
  }, [])

  useEffect(() => {
    if (feedback) { const t = setTimeout(() => setFeedback(null), 2000); return () => clearTimeout(t) }
  }, [feedback])

  const loadSession = useCallback(async (code) => {
    const c = code || session?.code
    if (!c) return
    const { data } = await supabase.from('golazo_sessions').select('*').eq('code', c).single()
    if (data) setSession(data)
  }, [session?.code])

  useEffect(() => {
    if (screen === 'sala' || screen === 'jugando') {
      pollRef.current = setInterval(() => loadSession(), 1500)
      return () => clearInterval(pollRef.current)
    }
  }, [screen, loadSession])

  useEffect(() => {
    if (!session) return
    if (session.estado === 'jugando' && screen === 'sala') setScreen('jugando')
    if (session.estado === 'esperando' && screen === 'jugando') setScreen('sala')
  }, [session?.estado])

  useEffect(() => {
    if (screen === 'jugando' && session?.estado === 'jugando') {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [screen, session?.estado])

  const upd = async (changes) => {
    if (!session) return
    await supabase.from('golazo_sessions').update(changes).eq('code', session.code)
  }

  const guardarLocal = (code, nombre, uid, esHost) => {
    const saved = JSON.parse(localStorage.getItem('golazo_sesiones') || '[]')
    const nuevas = [...saved.filter(s => s.code !== code), { code, nombre, uid, esHost }]
    localStorage.setItem('golazo_sesiones', JSON.stringify(nuevas))
    setSesionesGuardadas(nuevas)
  }
  const quitarLocal = (code) => {
    const nuevas = sesionesGuardadas.filter(s => s.code !== code)
    localStorage.setItem('golazo_sesiones', JSON.stringify(nuevas))
    setSesionesGuardadas(nuevas)
  }

  const crearSesion = async () => {
    if (!myName.trim()) { setError('Pon tu nombre'); return }
    setLoading(true); setError('')
    const code = generateCode()
    const { error: err } = await supabase.from('golazo_sessions').insert({
      code,
      creator_id: myUid,
      estado: 'esperando',
      jugadores: [{ id: myUid, nombre: myName.trim(), puntos: 0 }],
      partido: null,
      adivinados: {},
      historial: [],
    })
    if (err) { setError('Error: ' + err.message); setLoading(false); return }
    guardarLocal(code, myName.trim(), myUid, true)
    await loadSession(code)
    setScreen('sala')
    setLoading(false)
  }

  const unirse = async () => {
    if (!myName.trim()) { setError('Pon tu nombre'); return }
    if (!codigoInput.trim()) { setError('Pon el código'); return }
    setLoading(true); setError('')
    const code = codigoInput.toUpperCase()
    const { data: s } = await supabase.from('golazo_sessions').select('*').eq('code', code).single()
    if (!s) { setError('Sesión no encontrada'); setLoading(false); return }
    const jugadores = [...(s.jugadores || [])]
    const yaEsta = jugadores.find(j => j.id === myUid)
    if (!yaEsta) {
      jugadores.push({ id: myUid, nombre: myName.trim(), puntos: 0 })
      await supabase.from('golazo_sessions').update({ jugadores }).eq('code', code)
    }
    guardarLocal(code, myName.trim(), myUid, false)
    await loadSession(code)
    setScreen(s.estado === 'esperando' ? 'sala' : 'jugando')
    setLoading(false)
  }

  const volverASesion = async (s) => {
    setLoading(true)
    const { data } = await supabase.from('golazo_sessions').select('*').eq('code', s.code).single()
    if (!data) { setError('Sesión no encontrada'); quitarLocal(s.code); setLoading(false); return }
    setSession(data)
    setScreen(data.estado === 'esperando' ? 'sala' : 'jugando')
    setLoading(false)
  }

  const iniciarPartido = async (partidoId) => {
    const p = PARTIDOS.find(x => x.id === partidoId)
    if (!p) return
    await upd({
      estado: 'jugando',
      partido: p,
      adivinados: {},
    })
    setScreen('jugando')
  }

  const handleSubmit = async () => {
    const val = input.trim()
    if (!val || !session?.partido) return
    const { data: fresh } = await supabase.from('golazo_sessions').select('*').eq('code', session.code).single()
    if (!fresh || fresh.estado !== 'jugando') return

    const partido = fresh.partido
    const adiv = { ...(fresh.adivinados || {}) }
    const jugadores = fresh.jugadores

    // Buscar gol no adivinado que coincida
    let foundIdx = -1
    partido.goles.forEach((g, i) => {
      if (adiv[i] === undefined && matchGoleador(val, g.jugador)) foundIdx = i
    })

    setInput('')

    if (foundIdx === -1) {
      // Fallo — solo feedback local, sin pasar turno
      setFeedback({ type: 'fail', text: '❌ No marcó en este partido' })
      setTimeout(() => inputRef.current?.focus(), 50)
      return
    }

    // Acierto — reclamar el gol
    adiv[foundIdx] = myUidRef.current
    const jugadoresActualizados = jugadores.map(j =>
      j.id === myUidRef.current ? { ...j, puntos: (j.puntos || 0) + 15 } : j
    )

    // XP
    const { data: authData } = await supabase.auth.getUser()
    if (authData?.user?.id) {
      addPoints(authData.user.id, 15, 'golazo_online')
      setTotalXP(prev => prev + 15)
      setLastGained(15)
      setTimeout(() => setLastGained(0), 2500)
    }

    setFeedback({ type: 'ok', text: '✅ ¡' + partido.goles[foundIdx].jugador + '!' })

    // ¿Completados todos?
    const totalAdiv = Object.keys(adiv).length
    if (totalAdiv === partido.goles.length) {
      // Bonus al que complete el último
      const jugadoresConBonus = jugadoresActualizados.map(j =>
        j.id === myUidRef.current ? { ...j, puntos: (j.puntos || 0) + 5 } : j
      )
      const historial = [...(fresh.historial || []), {
        partido: partido.local + ' ' + partido.resultado + ' ' + partido.visitante,
        torneo: partido.torneo,
        ranking: [...jugadoresConBonus].sort((a,b) => b.puntos - a.puntos).map(j => ({ nombre: j.nombre, puntos: j.puntos }))
      }]
      await supabase.from('golazo_sessions').update({
        adivinados: adiv,
        jugadores: jugadoresConBonus,
        estado: 'fin_ronda',
        historial,
      }).eq('code', fresh.code)
    } else {
      await supabase.from('golazo_sessions').update({
        adivinados: adiv,
        jugadores: jugadoresActualizados,
      }).eq('code', fresh.code)
    }

    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const votarRendirse = async () => {
    const { data: fresh } = await supabase.from('golazo_sessions').select('*').eq('code', session.code).single()
    if (!fresh || fresh.estado !== 'jugando') return
    const partido = fresh.partido
    const jugadores = fresh.jugadores
    const historial = [...(fresh.historial || []), {
      partido: partido.local + ' ' + partido.resultado + ' ' + partido.visitante,
      torneo: partido.torneo,
      ranking: [...jugadores].sort((a,b) => b.puntos - a.puntos).map(j => ({ nombre: j.nombre, puntos: j.puntos }))
    }]
    await supabase.from('golazo_sessions').update({
      estado: 'fin_ronda',
      historial,
    }).eq('code', fresh.code)
  }

  const siguientePartido = async () => {
    const aleatorio = PARTIDOS[Math.floor(Math.random() * PARTIDOS.length)]
    await iniciarPartido(aleatorio.id)
  }

  const salir = () => { clearInterval(pollRef.current); setSession(null); setScreen('menu') }
  const abandonar = async () => {
    if (session) {
      const jugadores = session.jugadores.filter(j => j.id !== myUid)
      if (jugadores.length === 0) await supabase.from('golazo_sessions').delete().eq('code', session.code)
      else await upd({ jugadores })
      quitarLocal(session.code)
    }
    clearInterval(pollRef.current)
    setSession(null); setScreen('menu')
  }
  const eliminarSesion = async (code) => {
    await supabase.from('golazo_sessions').delete().eq('code', code)
    quitarLocal(code)
  }

  const esHost = session?.creator_id === myUid
  const partido = session?.partido
  const adiv = session?.adivinados || {}
  const finRonda = session?.estado === 'fin_ronda'
  const flagL = partido ? getFlag(partido.local) : null
  const flagV = partido ? getFlag(partido.visitante) : null

  const inp = { width:'100%', padding:'12px 16px', borderRadius:10, border:'1px solid rgba(245,158,11,0.3)', background:'rgba(245,158,11,0.06)', color:'#e8e0f0', fontSize:15, boxSizing:'border-box', outline:'none', marginBottom:10, fontFamily:'system-ui,sans-serif' }

  // ── MENÚ ──
  if (screen === 'menu') return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)', fontFamily:'system-ui,sans-serif', color:'#e8e0f0', position:'relative' }}>
      <button onClick={() => nav('/golazo')} style={{ position:'absolute', top:20, left:20, background:'none', border:'none', color:'#6a5a8a', cursor:'pointer', fontSize:20 }}>←</button>
      <div style={{ width:'100%', maxWidth:400, margin:'0 auto', padding:'60px 24px 24px' }}>
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <div style={{ fontSize:42, marginBottom:6 }}>🌐</div>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:34, color:'#22c55e', letterSpacing:4 }}>GOLAZO ONLINE</div>
          <div style={{ fontSize:12, color:'#6a5a8a', marginTop:6 }}>El que acierta primero se lleva el punto</div>
        </div>

        {sesionesGuardadas.length > 0 && (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:11, color:'#4a3a6a', letterSpacing:2, marginBottom:10, textTransform:'uppercase' }}>Tus partidas</div>
            {sesionesGuardadas.map(s => (
              <div key={s.code} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.15)', borderRadius:12, padding:'10px 14px', marginBottom:8 }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, color:'#22c55e', fontSize:16, letterSpacing:2 }}>{s.code}</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.3)' }}>{s.nombre} · {s.esHost ? 'Host' : 'Jugador'}</div>
                </div>
                <button onClick={() => volverASesion(s)} style={{ padding:'6px 14px', borderRadius:8, border:'none', background:'#22c55e', color:'#0a0a14', fontSize:13, fontWeight:700, cursor:'pointer' }}>Volver</button>
                <button onClick={() => s.esHost ? eliminarSesion(s.code) : quitarLocal(s.code)} style={{ padding:'6px 10px', borderRadius:8, border:'1px solid rgba(239,68,68,0.3)', background:'rgba(239,68,68,0.08)', color:'#f87171', fontSize:13, cursor:'pointer' }}>
                  {s.esHost ? '🗑️' : '✕'}
                </button>
              </div>
            ))}
          </div>
        )}

        {error && <div style={{ background:'rgba(239,68,68,0.15)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:10, padding:'10px 14px', marginBottom:14, color:'#fca5a5', fontSize:14 }}>{error}</div>}
        <div style={{ color:'rgba(255,255,255,0.5)', fontSize:13, marginBottom:6 }}>Tu nombre</div>
        <input style={inp} value={myName} onChange={e => setMyName(e.target.value)} placeholder="Tu nombre" />
        <button onClick={crearSesion} disabled={loading} style={{ width:'100%', padding:14, borderRadius:12, border:'none', background:'linear-gradient(135deg,#22c55e,#16a34a)', color:'#0a0a14', fontSize:15, fontWeight:900, cursor:'pointer', marginBottom:12, fontFamily:'system-ui,sans-serif' }}>
          {loading ? 'Cargando...' : '+ Crear partida'}
        </button>
        <div style={{ display:'flex', gap:8 }}>
          <input style={{ ...inp, marginBottom:0, flex:1 }} value={codigoInput} onChange={e => setCodigoInput(e.target.value.toUpperCase())} placeholder="Código" maxLength={6} />
          <button onClick={unirse} disabled={loading} style={{ padding:'12px 18px', borderRadius:10, border:'1px solid rgba(34,197,94,0.3)', background:'rgba(34,197,94,0.08)', color:'#22c55e', fontSize:14, fontWeight:700, cursor:'pointer', fontFamily:'system-ui,sans-serif' }}>Unirse</button>
        </div>
      </div>
    </div>
  )

  // ── SALA ──
  if (screen === 'sala' && session) return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)', fontFamily:'system-ui,sans-serif', color:'#e8e0f0', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div style={{ width:'100%', maxWidth:400, textAlign:'center' }}>
        <div style={{ fontSize:42, marginBottom:10 }}>⏳</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:'#22c55e', letterSpacing:4, marginBottom:6 }}>SALA DE ESPERA</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, color:'#22c55e', letterSpacing:8, marginBottom:4 }}>{session.code}</div>
        <div style={{ fontSize:12, color:'#6a5a8a', marginBottom:24 }}>Comparte este código con tus amigos</div>
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:14, padding:16, marginBottom:20, textAlign:'left' }}>
          <div style={{ fontSize:12, color:'#6a5a8a', marginBottom:10, letterSpacing:2 }}>JUGADORES ({session.jugadores?.length || 0})</div>
          {session.jugadores?.map(j => (
            <div key={j.id} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width:8, height:8, borderRadius:'50%', background: j.id===myUid?'#22c55e':'#f59e0b' }} />
              <span style={{ fontWeight:700, color:j.id===myUid?'#22c55e':'#e8e0f0' }}>{j.nombre}{j.id===myUid?' (tú)':''}</span>
              <span style={{ marginLeft:'auto', fontSize:11, color:'#6a5a8a' }}>{j.puntos||0} pts</span>
            </div>
          ))}
        </div>
        {esHost && (() => {
          const COMPETICIONES = [
            { key: 'mundial',    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/FIFA_World_Cup_2022_official_emblem.svg/150px-FIFA_World_Cup_2022_official_emblem.svg.png', nombre: 'Mundial',          match: t => t.includes('Mundial') },
            { key: 'champions',  img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/UEFA_Champions_League.svg/150px-UEFA_Champions_League.svg.png', nombre: 'Champions',        match: t => t.includes('Champions') },
            { key: 'eurocopa',   img: 'https://flagcdn.com/w40/eu.png', nombre: 'Eurocopa',         match: t => t.includes('Euro') },
            { key: 'laliga',     img: 'https://flagcdn.com/w40/es.png', nombre: 'LaLiga',           match: t => t.includes('LaLiga') },
            { key: 'premier',    img: 'https://flagcdn.com/w40/gb-eng.png', nombre: 'Premier',          match: t => t.includes('Premier') },
            { key: 'seriea',     img: 'https://flagcdn.com/w40/it.png', nombre: 'Serie A',          match: t => t.includes('Serie A') },
            { key: 'bundesliga', img: 'https://flagcdn.com/w40/de.png', nombre: 'Bundesliga',       match: t => t.includes('Bundesliga') },
          ]
          const disabled = (session.jugadores?.length||0) < 2
          return (
            <div style={{ marginBottom:10 }}>
              {disabled
                ? <div style={{ padding:14, borderRadius:12, background:'rgba(255,255,255,0.06)', color:'#4a4a6a', fontSize:14, fontWeight:700, marginBottom:10 }}>⏳ Esperando jugadores...</div>
                : <>
                  <div style={{ fontSize:11, color:'#6a5a8a', letterSpacing:2, textTransform:'uppercase', marginBottom:8 }}>Elige competición</div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
                    {COMPETICIONES.map(comp => (
                      <button key={comp.key} onClick={() => {
                        const lista = PARTIDOS.filter(p => comp.match(p.torneo))
                        if (!lista.length) return
                        const p = lista[Math.floor(Math.random() * lista.length)]
                        iniciarPartido(p.id)
                      }} style={{
                        padding:'12px 8px', borderRadius:12,
                        border:'1px solid rgba(34,197,94,0.2)',
                        background:'rgba(34,197,94,0.05)',
                        cursor:'pointer', textAlign:'center',
                        display:'flex', flexDirection:'column', alignItems:'center', gap:4,
                        transition:'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(34,197,94,0.5)'; e.currentTarget.style.background='rgba(34,197,94,0.1)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(34,197,94,0.2)'; e.currentTarget.style.background='rgba(34,197,94,0.05)' }}
                      >
                        <img src={comp.img} style={{ height:28, objectFit:'contain' }} onError={e => { e.target.style.display='none' }} />
                        <span style={{ fontSize:11, fontWeight:700, color:'#e8e0f0' }}>{comp.nombre}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => {
                    const p = PARTIDOS[Math.floor(Math.random() * PARTIDOS.length)]
                    iniciarPartido(p.id)
                  }} style={{
                    width:'100%', padding:12, borderRadius:12, border:'none',
                    background:'linear-gradient(135deg,#22c55e,#16a34a)',
                    color:'#0a0a14', fontSize:14, fontWeight:900, cursor:'pointer',
                    fontFamily:'system-ui,sans-serif',
                  }}>🎲 Aleatorio de todos</button>
                </>
              }
            </div>
          )
        })()}
        {!esHost && <div style={{ fontSize:13, color:'#6a5a8a', marginBottom:10 }}>Esperando al host...</div>}
        <button onClick={salir} style={{ width:'100%', padding:10, borderRadius:10, border:'1px solid rgba(255,255,255,0.08)', background:'none', color:'#6a5a8a', fontSize:13, cursor:'pointer', marginBottom:8, fontFamily:'system-ui,sans-serif' }}>← Salir al menú</button>
        <button onClick={abandonar} style={{ width:'100%', padding:10, borderRadius:10, border:'1px solid rgba(239,68,68,0.2)', background:'none', color:'#f87171', fontSize:12, cursor:'pointer', fontFamily:'system-ui,sans-serif' }}>Abandonar partida</button>
      </div>
    </div>
  )

  // ── JUGANDO ──
  if ((screen === 'jugando' || finRonda) && session && partido) {
    const totalAdiv = Object.keys(adiv).length
    const totalGoles = partido.goles.length

    return (
      <div style={{ minHeight:'100vh', background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)', fontFamily:'system-ui,sans-serif', color:'#e8e0f0', paddingBottom:80 }}>

        {/* Header */}
        <div style={{ background:'rgba(0,0,0,0.4)', borderBottom:'1px solid rgba(245,158,11,0.2)', padding:'12px 16px', display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap' }}>
              {flagL && <img src={flagL} style={{ height:16, borderRadius:2 }} />}
              <span style={{ fontSize:12, fontWeight:900, color:'#f59e0b' }}>{partido.local}</span>
              <span style={{ fontSize:12, fontWeight:900, color:'#e8e0f0' }}>{partido.resultado}</span>
              <span style={{ fontSize:12, fontWeight:900, color:'#f59e0b' }}>{partido.visitante}</span>
              {flagV && <img src={flagV} style={{ height:16, borderRadius:2 }} />}
            </div>
            <div style={{ fontSize:10, color:'#6a5a8a' }}>{partido.torneo}</div>
          </div>
          <div style={{ fontSize:11, color:'#6a5a8a' }}>
            <span style={{ color:'#f59e0b', fontWeight:700 }}>{session.code}</span>
          </div>
        </div>

        <div style={{ maxWidth:520, margin:'0 auto', padding:'14px 14px 0' }}>

          {/* Input — siempre visible para todos */}
          {!finRonda && (
            <div style={{ display:'flex', gap:8, marginBottom:12 }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key==='Enter' && handleSubmit()}
                placeholder="Nombre del goleador..."
                style={{ flex:1, padding:'11px 14px', borderRadius:12, border:'1px solid rgba(245,158,11,0.4)', background:'rgba(245,158,11,0.06)', color:'#e8e0f0', fontSize:14, outline:'none', fontFamily:'system-ui,sans-serif' }}
                autoComplete="off" autoCorrect="off" spellCheck={false}
              />
              <button onClick={handleSubmit} style={{ padding:'11px 16px', borderRadius:12, border:'none', background:'#f59e0b', color:'#0a0a14', fontSize:15, fontWeight:900, cursor:'pointer' }}>→</button>
              <button onClick={votarRendirse} style={{ background:'rgba(239,68,68,0.08)', color:'#f87171', border:'1px solid rgba(239,68,68,0.2)', borderRadius:12, padding:'11px 14px', fontSize:12, cursor:'pointer', whiteSpace:'nowrap' }}>🏳️</button>
            </div>
          )}

          {/* Feedback */}
          <div style={{ minHeight:36, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>
            {feedback && (
              <div style={{ fontSize:13, fontWeight:700, color:feedback.type==='ok'?'#22c55e':'#ef4444', background:(feedback.type==='ok'?'#22c55e':'#ef4444')+'18', padding:'6px 16px', borderRadius:20, border:'1px solid '+(feedback.type==='ok'?'#22c55e44':'#ef444444'), textAlign:'center' }}>
                {feedback.text}
              </div>
            )}
          </div>

          {/* Ranking */}
          <div style={{ display:'flex', gap:6, marginBottom:12, overflowX:'auto' }}>
            {[...session.jugadores].sort((a,b)=>(b.puntos||0)-(a.puntos||0)).map((j,i) => (
              <div key={j.id} style={{ flexShrink:0, padding:'6px 12px', borderRadius:10, background: j.id===myUid?'rgba(245,158,11,0.15)':'rgba(255,255,255,0.04)', border:'1px solid '+(j.id===myUid?'rgba(245,158,11,0.4)':'rgba(255,255,255,0.06)'), textAlign:'center' }}>
                <div style={{ fontSize:10, color:'#6a5a8a' }}>{'🥇🥈🥉'[i]||((i+1)+'º')}</div>
                <div style={{ fontSize:11, fontWeight:700, color:j.id===myUid?'#f59e0b':'#c8d8ea' }}>{j.nombre}{j.id===myUid?' (tú)':''}</div>
                <div style={{ fontSize:16, fontWeight:900, color:'#f59e0b' }}>{j.puntos||0}</div>
              </div>
            ))}
          </div>

          {/* Progreso */}
          <div style={{ fontSize:11, color:'#6a5a8a', textAlign:'center', marginBottom:6 }}>{totalAdiv}/{totalGoles} goleadores</div>
          <div style={{ height:4, borderRadius:2, background:'rgba(255,255,255,0.08)', overflow:'hidden', marginBottom:14 }}>
            <div style={{ height:'100%', width:(totalGoles > 0 ? (totalAdiv/totalGoles*100) : 0)+'%', background:'#f59e0b', borderRadius:2, transition:'width 0.4s' }} />
          </div>

          {/* Goles por equipo */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14 }}>
            {[partido.local, partido.visitante].map((equipo, ei) => {
              const golesEq = partido.goles.map((g,i)=>({...g,idx:i})).filter(g=>g.equipo===equipo)
              const flag = ei===0 ? flagL : flagV
              return (
                <div key={equipo}>
                  <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:6, paddingBottom:5, borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
                    {flag && <img src={flag} style={{ height:14, borderRadius:2 }} />}
                    <span style={{ fontSize:11, fontWeight:700, color:'#f59e0b' }}>{equipo}</span>
                  </div>
                  {golesEq.map(g => {
                    const adivinadorUid = adiv[g.idx]
                    const ok = adivinadorUid !== undefined
                    const esMio = adivinadorUid === myUid
                    const adivinadorNombre = ok ? session.jugadores.find(j=>j.id===adivinadorUid)?.nombre : null
                    const revealed = ok || finRonda
                    const noAdiv = finRonda && !ok
                    return (
                      <div key={g.idx} style={{
                        display:'flex', alignItems:'center', gap:6,
                        padding:'7px 8px', borderRadius:7, marginBottom:4,
                        background: esMio?'rgba(245,158,11,0.12)':ok?'rgba(34,197,94,0.07)':noAdiv?'rgba(239,68,68,0.06)':'rgba(255,255,255,0.03)',
                        border:'1px solid '+(esMio?'rgba(245,158,11,0.4)':ok?'rgba(34,197,94,0.2)':noAdiv?'rgba(239,68,68,0.2)':'rgba(255,255,255,0.06)'),
                      }}>
                        <span style={{ fontSize:9, color:'#6a5a8a', minWidth:20, fontWeight:700 }}>{g.minuto}'</span>
                        <div style={{ flex:1 }}>
                          {revealed
                            ? <div style={{ fontSize:11, fontWeight:ok?700:400, color:esMio?'#f59e0b':ok?'#86efac':noAdiv?'#fca5a5':'#e8e0f0' }}>
                                {g.jugador}
                                {adivinadorNombre && <span style={{ fontSize:9, color:'#6a5a8a', marginLeft:4 }}>({adivinadorNombre})</span>}
                              </div>
                            : <div style={{ color:'rgba(255,255,255,0.08)', letterSpacing:3, fontSize:9 }}>{'█'.repeat(Math.min(g.jugador.length,10))}</div>
                          }
                        </div>
                        {esMio && <span style={{ fontSize:11 }}>⭐</span>}
                        {ok && !esMio && <span style={{ fontSize:11 }}>✅</span>}
                        {noAdiv && <span style={{ fontSize:11 }}>❌</span>}
                      </div>
                    )
                  })}
                  {golesEq.length === 0 && <div style={{ fontSize:10, color:'#4a3a6a', padding:'6px 8px' }}>Sin goles</div>}
                </div>
              )
            })}
          </div>

          {/* Fin de ronda */}
          {finRonda && (
            <div style={{ background:'rgba(245,158,11,0.08)', border:'1px solid rgba(245,158,11,0.3)', borderRadius:14, padding:20, marginBottom:12, textAlign:'center' }}>
              <div style={{ fontSize:32, marginBottom:8 }}>🏆</div>
              <div style={{ fontSize:16, fontWeight:900, color:'#f59e0b', marginBottom:12 }}>¡Ronda completada!</div>
              {[...session.jugadores].sort((a,b)=>(b.puntos||0)-(a.puntos||0)).map((j,i) => (
                <div key={j.id} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:'1px solid rgba(255,255,255,0.05)', fontSize:13, color:j.id===myUid?'#f59e0b':'#e8e0f0' }}>
                  <span>{'🥇🥈🥉'[i]||((i+1)+'º')} {j.nombre}{j.id===myUid?' (tú)':''}</span>
                  <span style={{ fontWeight:900, color:'#f59e0b' }}>{j.puntos||0} pts</span>
                </div>
              ))}
              {esHost
                ? <button onClick={siguientePartido} style={{ width:'100%', marginTop:16, padding:13, borderRadius:12, border:'none', background:'linear-gradient(135deg,#f59e0b,#d97706)', color:'#0a0a14', fontSize:15, fontWeight:900, cursor:'pointer', fontFamily:'system-ui,sans-serif' }}>
                    ⚽ Siguiente partido
                  </button>
                : <div style={{ fontSize:13, color:'#6a5a8a', marginTop:12 }}>Esperando al host...</div>
              }
            </div>
          )}

          <div style={{ display:'flex', gap:8, marginTop:8 }}>
            <button onClick={salir} style={{ flex:1, padding:10, borderRadius:10, border:'1px solid rgba(255,255,255,0.08)', background:'none', color:'#6a5a8a', fontSize:12, cursor:'pointer', fontFamily:'system-ui,sans-serif' }}>← Menú</button>
            <button onClick={abandonar} style={{ flex:1, padding:10, borderRadius:10, border:'1px solid rgba(239,68,68,0.15)', background:'none', color:'#f87171', fontSize:12, cursor:'pointer', fontFamily:'system-ui,sans-serif' }}>Abandonar</button>
          </div>
        </div>

        {xpLoaded && <XPWidget user={user} totalXP={totalXP} lastGained={lastGained} />}
      </div>
    )
  }

  return null
}
