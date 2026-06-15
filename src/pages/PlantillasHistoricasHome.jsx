import { useNavigate } from 'react-router-dom'
import useSEO from '../hooks/useSEO.js'

export default function PlantillasHistoricasHome() {
  const nav = useNavigate()
  useSEO({
    title: 'Plantillas Históricas | Adivina los 11 titulares - JFEE',
    description: '¿Recuerdas los 11 más usados del Barça 2011 o el Madrid 2018? Adivina las plantillas históricas de Real Madrid, Barcelona, Bayern, Liverpool y más.',
    url: 'https://juegosdefutbolenespanol.vercel.app/plantillas'
  })

  return (
    <div style={{
      minHeight:'100vh',
      background:'linear-gradient(160deg,#0f0c1a,#1a1030,#0c1520)',
      fontFamily:'system-ui,sans-serif', color:'#e8e0f0',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      padding:24,
    }}>
      <button onClick={() => nav('/')} style={{ position:'absolute', top:20, left:20, background:'none', border:'none', color:'#6a5a8a', cursor:'pointer', fontSize:20 }}>←</button>

      <div style={{ textAlign:'center', marginBottom:48 }}>
        <div style={{ fontSize:52, marginBottom:10 }}>🏟️</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:46, letterSpacing:4, color:'#f59e0b', lineHeight:1 }}>PLANTILLAS</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:46, letterSpacing:4, color:'#e8e0f0', lineHeight:1 }}>HISTÓRICAS</div>
        <div style={{ fontSize:12, color:'#6a5a8a', marginTop:8, letterSpacing:1 }}>
          19 CLUBES + 14 SELECCIONES · 474 PLANTILLAS
        </div>
        <div style={{ fontSize:11, color:'#4a3a6a', marginTop:4, letterSpacing:1 }}>
          19 CLUBES HISTÓRICOS + ESPAÑA · FRANCIA · ALEMANIA · BRASIL · ARGENTINA · PORTUGAL · ITALIA · INGLATERRA · PAÍSES BAJOS · BÉLGICA · CROACIA · URUGUAY · MARRUECOS · SENEGAL
        </div>
      </div>

      <div style={{ width:'100%', maxWidth:360, display:'flex', flexDirection:'column', gap:14 }}>
        <button onClick={() => nav('/plantillas/individual')} style={{
          padding:'22px 24px', borderRadius:18,
          border:'1px solid rgba(245,158,11,0.3)',
          background:'rgba(245,158,11,0.08)',
          cursor:'pointer', textAlign:'left',
        }}>
          <div style={{ fontSize:28, marginBottom:6 }}>🧩</div>
          <div style={{ fontSize:20, fontWeight:900, color:'#f59e0b', marginBottom:4 }}>Individual</div>
          <div style={{ fontSize:13, color:'#6a5a8a', lineHeight:1.5 }}>Juega solo. Elige club o plantilla aleatoria. Adivina los 11 titulares.</div>
        </button>

        <button onClick={() => nav('/plantillas/online')} style={{
          padding:'22px 24px', borderRadius:18,
          border:'1px solid rgba(34,197,94,0.3)',
          background:'rgba(34,197,94,0.06)',
          cursor:'pointer', textAlign:'left',
        }}>
          <div style={{ fontSize:28, marginBottom:6 }}>🌐</div>
          <div style={{ fontSize:20, fontWeight:900, color:'#22c55e', marginBottom:4 }}>Online</div>
          <div style={{ fontSize:13, color:'#6a5a8a', lineHeight:1.5 }}>Juega con amigos. Todos compiten en la misma plantilla al mismo tiempo.</div>
        </button>
      </div>
    </div>
  )
}
