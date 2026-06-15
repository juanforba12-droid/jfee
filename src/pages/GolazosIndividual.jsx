import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { addPoints, getUserPoints } from '../lib/userPoints.js'
import XPWidget from './XPWidget.jsx'
import { PARTIDOS, getFlag, matchGoleador } from '../lib/golazosData.js'

const TIPOS = ['todos', 'seleccion', 'club']

function PartidoCard({ p, onClick }) {
  const flagL = getFlag(p.local)
  const flagV = getFlag(p.visitante)
  return (
    <button onClick={onClick} style={{
      width:'100%', padding:'14px 16px', borderRadius:14,
      border:'1px solid rgba(245,158,11,0.2)',
      background:'rgba(245,158,11,0.05)',
      cursor:'pointer', textAlign:'left', marginBottom:8,
      display:'flex', alignItems:'center', gap:12,
      transition:'all 0.15s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor='rgba(245,158,11,0.5)'}
      onMouseLeave={e => e.currentTarget.style.borderColor='rgba(245,158,11,0.2)'}
    >
      <div style={{ flex:1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
          {flagL && <img src={flagL} style={{ height:16, borderRadius:2 }} />}
          <span style={{ fontWeight:700, fontSize:13, color:'#e8e0f0' }}>{p.local}</span>
          <span style={{ color:'#f59e0b', fontWeight:900, fontSize:14 }}>{p.resultado}</span>
          <span style={{ fontWeight:700, fontSize:13, color:'#e8e0f0' }}>{p.visitante}</span>
          {flagV && <img src={flagV} style={{ height:16, borderRadius:2 }} />}
        </div>
        <div style={{ fontSize:11, color:'#6a5a8a' }}>{p.torneo} · {p.fecha}</div>
      </div>
      <div style={{ fontSize:11, color:'#f59e0b', background:'rgba(245,158,11,0.1)', padding:'3px 10px', borderRadius:20, flexShrink:0 }}>
        {p.goles.length} goles
      </div>
    </button>
  )
}

export default function GolazosIndividual() {
  const nav = useNavigate()
  const [pantalla, setPantalla] = useState('selector') // selector | juego
  const [partido, setPartido] = useState(null)
  const [adivinados, setAdivinados] = useState(new Set())
  const [input, setInput] = useState('')
  const [shake, setShake] = useState(false)
  const [rendido, setRendido] = useState(false)
  const [flash, setFlash] = useState(null)
  const [filtro, setFiltro] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [user, setUser] = useState(null)
  const [totalXP, setTotalXP] = useState(0)
  const [lastGained, setLastGained] = useState(0)
  const [xpLoaded, setXpLoaded] = useState(false)
  const inputRef = useRef(null)

  // Guardar/restaurar partida en curso
  useEffect(() => {
    const saved = localStorage.getItem('golazo_individual')
    if (saved) {
      try {
        const { partidoId, adivinados: adv, rendido: rend } = JSON.parse(saved)
        const p = PARTIDOS.find(x => x.id === partidoId)
        if (p) {
          setPartido(p)
          setAdivinados(new Set(adv))
          setRendido(rend)
          setPantalla('juego')
        }
      } catch(e) {}
    }
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      const u = data?.user ?? null
      setUser(u)
      if (u) getUserPoints(u.id).then(pts => { setTotalXP(pts); setXpLoaded(true) })
      else setXpLoaded(true)
    })
  }, [])

  const grantXP = async (pts) => {
    if (!user || pts <= 0) return
    setTotalXP(prev => prev + pts)
    setLastGained(pts)
    await addPoints(user.id, pts, 'golazo_individual')
    setTimeout(() => setLastGained(0), 2500)
  }

  const iniciarPartido = (p) => {
    setPartido(p)
    setAdivinados(new Set())
    setInput('')
    setShake(false)
    setRendido(false)
    setFlash(null)
    setPantalla('juego')
    localStorage.setItem('golazo_individual', JSON.stringify({ partidoId: p.id, adivinados: [], rendido: false }))
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const saveProgress = useCallback((adv, rend) => {
    if (!partido) return
    localStorage.setItem('golazo_individual', JSON.stringify({
      partidoId: partido.id,
      adivinados: [...adv],
      rendido: rend
    }))
  }, [partido])

  const tryGuess = useCallback(() => {
    const val = input.trim()
    if (!val || rendido || !partido) return
    let found = -1
    partido.goles.forEach((g, i) => {
      if (!adivinados.has(i) && matchGoleador(val, g.jugador)) found = i
    })
    if (found !== -1) {
      const nuevos = new Set([...adivinados, found])
      setAdivinados(nuevos)
      setFlash(found)
      setTimeout(() => setFlash(null), 700)
      setInput('')
      grantXP(10)
      saveProgress(nuevos, false)
      // Bonus si completa todos
      if (nuevos.size === partido.goles.length) {
        setTimeout(() => grantXP(20), 500)
      }
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 450)
    }
  }, [input, adivinados, partido, rendido, saveProgress])

  const handleRendirse = () => {
    setRendido(true)
    saveProgress(adivinados, true)
  }

  const volver = () => {
    setPantalla('selector')
    localStorage.removeItem('golazo_individual')
  }

  const partidosFiltrados = PARTIDOS.filter(p => {
    if (filtro !== 'todos' && p.tipo !== filtro) return false
    if (busqueda) {
      const b = busqueda.toLowerCase()
      return p.local.toLowerCase().includes(b) || p.visitante.toLowerCase().includes(b) || p.torneo.toLowerCase().includes(b)
    }
    return true
  })

  const acabado = rendido || (partido && adivinados.size === partido.goles.length)
  const flagL = partido ? getFlag(partido.local) : null
  const flagV = partido ? getFlag(partido.visitante) : null

  // ── SELECTOR ──
  if (pantalla === 'selector') return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)', fontFamily:'system-ui,sans-serif', color:'#e8e0f0', paddingBottom:80 }}>
      <div style={{ position:'sticky', top:0, zIndex:10, background:'rgba(15,12,26,0.95)', backdropFilter:'blur(10px)', padding:'12px 16px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth:500, margin:'0 auto', display:'flex', alignItems:'center', gap:10 }}>
          <button onClick={() => nav('/golazo')} style={{ background:'none', border:'none', color:'#6a5a8a', cursor:'pointer', fontSize:20 }}>←</button>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:24, color:'#f59e0b', letterSpacing:3 }}>GOLAZO</div>
          <div style={{ flex:1 }} />
        </div>
      </div>

      <div style={{ maxWidth:500, margin:'0 auto', padding:'16px 16px' }}>
        {/* Filtros */}
        <div style={{ display:'flex', gap:8, marginBottom:12 }}>
          {[['todos','Todos'],['seleccion','🌍 Selecciones'],['club','🏟️ Clubes']].map(([k,l]) => (
            <button key={k} onClick={() => setFiltro(k)} style={{
              padding:'7px 14px', borderRadius:20, border:'none', cursor:'pointer',
              fontWeight:700, fontSize:12,
              background: filtro===k ? '#f59e0b' : 'rgba(255,255,255,0.06)',
              color: filtro===k ? '#0a0a14' : '#6a5a8a',
            }}>{l}</button>
          ))}
        </div>

        {/* Búsqueda */}
        <input
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          placeholder="Buscar partido, equipo o torneo..."
          style={{ width:'100%', padding:'10px 14px', borderRadius:12, border:'1px solid rgba(255,255,255,0.1)', background:'rgba(255,255,255,0.05)', color:'#e8e0f0', fontSize:14, outline:'none', boxSizing:'border-box', marginBottom:16, fontFamily:'system-ui,sans-serif' }}
        />

        {/* Lista partidos */}
        <div style={{ fontSize:11, color:'#4a3a6a', letterSpacing:2, marginBottom:10, textTransform:'uppercase' }}>
          {partidosFiltrados.length} partidos
        </div>
        {partidosFiltrados.map(p => (
          <PartidoCard key={p.id} p={p} onClick={() => iniciarPartido(p)} />
        ))}
      </div>
      {xpLoaded && <XPWidget user={user} totalXP={totalXP} lastGained={lastGained} />}
    </div>
  )

  // ── JUEGO ──
  return (
    <div style={{ minHeight:'100vh', background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)', fontFamily:'system-ui,sans-serif', color:'#e8e0f0', paddingBottom:80 }}>

      {/* Header */}
      <div style={{ background:'rgba(0,0,0,0.4)', borderBottom:'1px solid rgba(245,158,11,0.2)', padding:'12px 16px', display:'flex', alignItems:'center', gap:10 }}>
        <button onClick={volver} style={{ background:'none', border:'none', color:'#6a5a8a', cursor:'pointer', fontSize:20 }}>←</button>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap' }}>
            {flagL && <img src={flagL} style={{ height:18, borderRadius:2 }} />}
            <span style={{ fontSize:13, fontWeight:900, color:'#f59e0b' }}>{partido.local}</span>
            <span style={{ fontSize:13, fontWeight:900, color:'#e8e0f0' }}>{partido.resultado}</span>
            <span style={{ fontSize:13, fontWeight:900, color:'#f59e0b' }}>{partido.visitante}</span>
            {flagV && <img src={flagV} style={{ height:18, borderRadius:2 }} />}
          </div>
          <div style={{ fontSize:10, color:'#6a5a8a', marginTop:2 }}>{partido.torneo} · {partido.fecha}</div>
        </div>
        <div style={{ background:'rgba(245,158,11,0.15)', borderRadius:20, padding:'4px 14px', fontSize:13, fontWeight:900, color:'#f59e0b' }}>
          {adivinados.size}/{partido.goles.length}
        </div>
      </div>

      <div style={{ maxWidth:520, margin:'0 auto', padding:'16px 16px 0' }}>

        {/* Progreso */}
        <div style={{ height:5, background:'rgba(255,255,255,0.08)', borderRadius:99, overflow:'hidden', marginBottom:16 }}>
          <div style={{ height:'100%', width:`${partido.goles.length > 0 ? (adivinados.size/partido.goles.length*100) : 0}%`, background: acabado && !rendido ? '#10b981' : '#f59e0b', borderRadius:99, transition:'width 0.4s' }} />
        </div>

        {/* Input */}
        {!acabado && partido.goles.length > 0 && (
          <div style={{ display:'flex', gap:8, marginBottom:14 }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key==='Enter' && tryGuess()}
              placeholder="Nombre del goleador..."
              style={{ flex:1, padding:'12px 14px', borderRadius:12, border:`1px solid ${shake?'#ef4444':'rgba(255,255,255,0.1)'}`, background:'rgba(255,255,255,0.06)', color:'#e8e0f0', fontSize:15, outline:'none', fontFamily:'system-ui,sans-serif', animation:shake?'shake 0.45s':undefined }}
              autoComplete="off" autoCorrect="off" spellCheck={false}
            />
            <button onClick={tryGuess} style={{ border:'none', borderRadius:12, padding:'12px 18px', fontWeight:900, fontSize:15, cursor:'pointer', color:'#0a0a14', background:'#f59e0b' }}>→</button>
            <button onClick={handleRendirse} style={{ background:'rgba(255,255,255,0.06)', color:'#6a5a8a', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'12px 14px', fontSize:13, cursor:'pointer' }}>Rendirse</button>
          </div>
        )}

        {/* Banners */}
        {adivinados.size === partido.goles.length && partido.goles.length > 0 && (
          <div style={{ background:'rgba(16,185,129,0.12)', border:'1px solid rgba(16,185,129,0.3)', color:'#6ee7b7', borderRadius:12, padding:'12px 16px', textAlign:'center', fontWeight:700, fontSize:14, marginBottom:14 }}>
            🏆 ¡Todos los goleadores! {user && '+10 XP bonus'}
          </div>
        )}
        {rendido && (
          <div style={{ background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.25)', color:'#fca5a5', borderRadius:12, padding:'12px 16px', textAlign:'center', fontWeight:700, fontSize:14, marginBottom:14 }}>
            Rendido — {adivinados.size}/{partido.goles.length} acertados
          </div>
        )}
        {partido.goles.length === 0 && (
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#6a5a8a', borderRadius:12, padding:'16px', textAlign:'center', fontSize:13, marginBottom:14 }}>
            Sin goles (empate 0-0 o penaltis sin goles en el tiempo reglamentario)
          </div>
        )}

        {/* Columnas por equipo */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16 }}>
          {[partido.local, partido.visitante].map((equipo, ei) => {
            const golesEquipo = partido.goles.map((g, i) => ({ ...g, idx: i })).filter(g => g.equipo === equipo)
            const flag = ei === 0 ? flagL : flagV
            return (
              <div key={equipo}>
                <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:8, paddingBottom:6, borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
                  {flag && <img src={flag} style={{ height:16, borderRadius:2 }} />}
                  <span style={{ fontSize:12, fontWeight:700, color:'#f59e0b' }}>{equipo}</span>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                  {golesEquipo.map(g => {
                    const ok = adivinados.has(g.idx)
                    const rev = ok || acabado
                    const isNew = flash === g.idx
                    return (
                      <div key={g.idx} style={{
                        display:'flex', alignItems:'center', gap:8,
                        padding:'8px 10px', borderRadius:8,
                        border:`1px solid ${isNew?'#10b981':ok?'rgba(245,158,11,0.4)':acabado&&!ok?'rgba(239,68,68,0.3)':'rgba(255,255,255,0.07)'}`,
                        background: isNew?'rgba(16,185,129,0.1)':ok?'rgba(245,158,11,0.08)':acabado&&!ok?'rgba(239,68,68,0.08)':'rgba(255,255,255,0.03)',
                        transform:isNew?'scale(1.02)':'scale(1)',
                        transition:'all 0.2s',
                      }}>
                        <span style={{ fontSize:10, color:'#6a5a8a', minWidth:24, fontWeight:700 }}>{g.minuto}'</span>
                        {rev
                          ? <span style={{ fontSize:12, fontWeight:ok?700:400, color:ok?'#f59e0b':'#f87171', flex:1 }}>{g.jugador}</span>
                          : <span style={{ color:'rgba(255,255,255,0.1)', letterSpacing:3, fontSize:10, flex:1, userSelect:'none' }}>{'█'.repeat(Math.min(g.jugador.length,10))}</span>
                        }
                        {isNew && <span>✅</span>}
                      </div>
                    )
                  })}
                  {golesEquipo.length === 0 && (
                    <div style={{ fontSize:11, color:'#4a3a6a', padding:'8px 10px' }}>Sin goles</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Botones fin */}
        {acabado && (
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            <button onClick={() => {
              const mismoTipo = PARTIDOS.filter(p => p.tipo === partido.tipo && p.id !== partido.id)
              const aleatorio = mismoTipo[Math.floor(Math.random() * mismoTipo.length)]
              iniciarPartido(aleatorio || PARTIDOS[0])
            }} style={{ border:'none', borderRadius:12, padding:13, fontWeight:900, fontSize:14, cursor:'pointer', color:'#0a0a14', background:'#f59e0b', width:'100%' }}>
              🎲 Siguiente partido
            </button>
            <button onClick={volver} style={{ background:'rgba(255,255,255,0.06)', color:'#6a5a8a', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:11, fontSize:13, cursor:'pointer', width:'100%' }}>
              ← Volver al menú
            </button>
          </div>
        )}
      </div>

      {xpLoaded && <XPWidget user={user} totalXP={totalXP} lastGained={lastGained} />}
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}`}</style>
    </div>
  )
}
