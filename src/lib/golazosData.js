// ── GOLAZO — Base de datos de partidos ───────────────────────────────────────
// 50 partidos históricos con goleadores y minutos verificados

export const FLAG_MAP = {
  // Selecciones
  'España': 'https://flagcdn.com/w40/es.png',
  'Francia': 'https://flagcdn.com/w40/fr.png',
  'Alemania': 'https://flagcdn.com/w40/de.png',
  'Brasil': 'https://flagcdn.com/w40/br.png',
  'Argentina': 'https://flagcdn.com/w40/ar.png',
  'Portugal': 'https://flagcdn.com/w40/pt.png',
  'Italia': 'https://flagcdn.com/w40/it.png',
  'Inglaterra': 'https://flagcdn.com/w40/gb-eng.png',
  'Países Bajos': 'https://flagcdn.com/w40/nl.png',
  'Croacia': 'https://flagcdn.com/w40/hr.png',
  'Uruguay': 'https://flagcdn.com/w40/uy.png',
  'Marruecos': 'https://flagcdn.com/w40/ma.png',
  'Senegal': 'https://flagcdn.com/w40/sn.png',
  'Bélgica': 'https://flagcdn.com/w40/be.png',
  'México': 'https://flagcdn.com/w40/mx.png',
  'Estados Unidos': 'https://flagcdn.com/w40/us.png',
  'Suecia': 'https://flagcdn.com/w40/se.png',
  'Corea del Sur': 'https://flagcdn.com/w40/kr.png',
  'Turquía': 'https://flagcdn.com/w40/tr.png',
  'Suiza': 'https://flagcdn.com/w40/ch.png',
  'República Checa': 'https://flagcdn.com/w40/cz.png',
  'Grecia': 'https://flagcdn.com/w40/gr.png',
  'Dinamarca': 'https://flagcdn.com/w40/dk.png',
  'Camerún': 'https://flagcdn.com/w40/cm.png',
  'Ghana': 'https://flagcdn.com/w40/gh.png',
}

export const PARTIDOS = [
  // ── MUNDIALES ─────────────────────────────────────────────────────────────
  {
    id: 'wc2022_arg_fra_final',
    local: 'Argentina', visitante: 'Francia',
    resultado: '3-3 (p)', torneo: 'Final Mundial 2022', fecha: '18 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 23, jugador: 'Di María' },
      { equipo: 'Argentina', minuto: 36, jugador: 'Messi' },
      { equipo: 'Francia', minuto: 80, jugador: 'Mbappé' },
      { equipo: 'Francia', minuto: 82, jugador: 'Mbappé' },
      { equipo: 'Argentina', minuto: 108, jugador: 'Messi' },
      { equipo: 'Francia', minuto: 118, jugador: 'Mbappé' },
    ]
  },
  {
    id: 'wc2014_ger_bra_semi',
    local: 'Alemania', visitante: 'Brasil',
    resultado: '7-1', torneo: 'Semifinal Mundial 2014', fecha: '8 Jul 2014',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania', minuto: 11, jugador: 'Müller' },
      { equipo: 'Alemania', minuto: 23, jugador: 'Klose' },
      { equipo: 'Alemania', minuto: 24, jugador: 'Kroos' },
      { equipo: 'Alemania', minuto: 26, jugador: 'Kroos' },
      { equipo: 'Alemania', minuto: 29, jugador: 'Khedira' },
      { equipo: 'Alemania', minuto: 69, jugador: 'Schürrle' },
      { equipo: 'Alemania', minuto: 79, jugador: 'Schürrle' },
      { equipo: 'Brasil', minuto: 90, jugador: 'Oscar' },
    ]
  },
  {
    id: 'wc2010_esp_ned_final',
    local: 'España', visitante: 'Países Bajos',
    resultado: '1-0', torneo: 'Final Mundial 2010', fecha: '11 Jul 2010',
    tipo: 'seleccion',
    goles: [
      { equipo: 'España', minuto: 116, jugador: 'Iniesta' },
    ]
  },
  {
    id: 'wc2006_ita_fra_final',
    local: 'Italia', visitante: 'Francia',
    resultado: '1-1 (p)', torneo: 'Final Mundial 2006', fecha: '9 Jul 2006',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Francia', minuto: 7, jugador: 'Zidane' },
      { equipo: 'Italia', minuto: 19, jugador: 'Materazzi' },
    ]
  },
  {
    id: 'wc2002_bra_ger_final',
    local: 'Brasil', visitante: 'Alemania',
    resultado: '2-0', torneo: 'Final Mundial 2002', fecha: '30 Jun 2002',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 67, jugador: 'Ronaldo' },
      { equipo: 'Brasil', minuto: 79, jugador: 'Ronaldo' },
    ]
  },
  {
    id: 'wc1998_fra_bra_final',
    local: 'Francia', visitante: 'Brasil',
    resultado: '3-0', torneo: 'Final Mundial 1998', fecha: '12 Jul 1998',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Francia', minuto: 27, jugador: 'Zidane' },
      { equipo: 'Francia', minuto: 45, jugador: 'Zidane' },
      { equipo: 'Francia', minuto: 90, jugador: 'Petit' },
    ]
  },
  {
    id: 'wc2018_fra_cro_final',
    local: 'Francia', visitante: 'Croacia',
    resultado: '4-2', torneo: 'Final Mundial 2018', fecha: '15 Jul 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Croacia', minuto: 18, jugador: 'Mandžukić' },
      { equipo: 'Francia', minuto: 18, jugador: 'Mandžukić' },
      { equipo: 'Francia', minuto: 38, jugador: 'Griezmann' },
      { equipo: 'Francia', minuto: 52, jugador: 'Pogba' },
      { equipo: 'Francia', minuto: 59, jugador: 'Mbappé' },
      { equipo: 'Croacia', minuto: 69, jugador: 'Mandžukić' },
    ]
  },
  {
    id: 'wc2010_esp_ger_semi',
    local: 'España', visitante: 'Alemania',
    resultado: '1-0', torneo: 'Semifinal Mundial 2010', fecha: '7 Jul 2010',
    tipo: 'seleccion',
    goles: [
      { equipo: 'España', minuto: 73, jugador: 'Puyol' },
    ]
  },
  {
    id: 'euro2020_ita_eng_final',
    local: 'Italia', visitante: 'Inglaterra',
    resultado: '1-1 (p)', torneo: 'Final Euro 2020', fecha: '11 Jul 2021',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Inglaterra', minuto: 2, jugador: 'Shaw' },
      { equipo: 'Italia', minuto: 67, jugador: 'Bonucci' },
    ]
  },
  {
    id: 'euro2024_esp_eng_final',
    local: 'España', visitante: 'Inglaterra',
    resultado: '2-1', torneo: 'Final Euro 2024', fecha: '14 Jul 2024',
    tipo: 'seleccion',
    goles: [
      { equipo: 'España', minuto: 47, jugador: 'Nico Williams' },
      { equipo: 'Inglaterra', minuto: 73, jugador: 'Palmer' },
      { equipo: 'España', minuto: 86, jugador: 'Oyarzabal' },
    ]
  },
  {
    id: 'euro2008_esp_ger_final',
    local: 'España', visitante: 'Alemania',
    resultado: '1-0', torneo: 'Final Euro 2008', fecha: '29 Jun 2008',
    tipo: 'seleccion',
    goles: [
      { equipo: 'España', minuto: 33, jugador: 'Torres' },
    ]
  },
  {
    id: 'euro2016_por_fra_final',
    local: 'Portugal', visitante: 'Francia',
    resultado: '1-0', torneo: 'Final Euro 2016', fecha: '10 Jul 2016',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Portugal', minuto: 109, jugador: 'Eder' },
    ]
  },
  {
    id: 'wc2022_mar_por_qf',
    local: 'Marruecos', visitante: 'Portugal',
    resultado: '1-0', torneo: 'Cuartos Mundial 2022', fecha: '10 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Marruecos', minuto: 42, jugador: 'En-Nesyri' },
    ]
  },
  {
    id: 'wc2018_esp_por_grupos',
    local: 'España', visitante: 'Portugal',
    resultado: '3-3', torneo: 'Fase de Grupos Mundial 2018', fecha: '15 Jun 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Portugal', minuto: 4, jugador: 'Ronaldo' },
      { equipo: 'España', minuto: 24, jugador: 'Costa' },
      { equipo: 'España', minuto: 55, jugador: 'Costa' },
      { equipo: 'Portugal', minuto: 58, jugador: 'Ronaldo' },
      { equipo: 'España', minuto: 58, jugador: 'Nacho' },
      { equipo: 'Portugal', minuto: 88, jugador: 'Ronaldo' },
    ]
  },
  {
    id: 'wc2002_kor_ger_semi',
    local: 'Corea del Sur', visitante: 'Alemania',
    resultado: '0-1', torneo: 'Semifinal Mundial 2002', fecha: '25 Jun 2002',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania', minuto: 75, jugador: 'Ballack' },
    ]
  },

  // ── CHAMPIONS LEAGUE ──────────────────────────────────────────────────────
  {
    id: 'ucl1999_mu_bay_final',
    local: 'Manchester United', visitante: 'Bayern Munich',
    resultado: '2-1', torneo: 'Final Champions 1999', fecha: '26 May 1999',
    tipo: 'club',
    goles: [
      { equipo: 'Bayern Munich', minuto: 6, jugador: 'Basler' },
      { equipo: 'Manchester United', minuto: 91, jugador: 'Sheringham' },
      { equipo: 'Manchester United', minuto: 93, jugador: 'Solskjaer' },
    ]
  },
  {
    id: 'ucl2005_liv_mil_final',
    local: 'Liverpool', visitante: 'AC Milan',
    resultado: '3-3 (p)', torneo: 'Final Champions 2005', fecha: '25 May 2005',
    tipo: 'club',
    goles: [
      { equipo: 'AC Milan', minuto: 1, jugador: 'Maldini' },
      { equipo: 'AC Milan', minuto: 39, jugador: 'Crespo' },
      { equipo: 'AC Milan', minuto: 44, jugador: 'Crespo' },
      { equipo: 'Liverpool', minuto: 54, jugador: 'Gerrard' },
      { equipo: 'Liverpool', minuto: 56, jugador: 'Smicer' },
      { equipo: 'Liverpool', minuto: 60, jugador: 'Alonso' },
    ]
  },
  {
    id: 'ucl2014_rm_atl_final',
    local: 'Real Madrid', visitante: 'Atlético de Madrid',
    resultado: '4-1', torneo: 'Final Champions 2014', fecha: '24 May 2014',
    tipo: 'club',
    goles: [
      { equipo: 'Atlético de Madrid', minuto: 36, jugador: 'Godín' },
      { equipo: 'Real Madrid', minuto: 93, jugador: 'Ramos' },
      { equipo: 'Real Madrid', minuto: 110, jugador: 'Bale' },
      { equipo: 'Real Madrid', minuto: 118, jugador: 'Marcelo' },
      { equipo: 'Real Madrid', minuto: 120, jugador: 'Ronaldo' },
    ]
  },
  {
    id: 'ucl2019_liv_bar_semi2',
    local: 'Liverpool', visitante: 'Barcelona',
    resultado: '4-0', torneo: 'Semifinal Champions 2019 (vuelta)', fecha: '7 May 2019',
    tipo: 'club',
    goles: [
      { equipo: 'Liverpool', minuto: 7, jugador: 'Origi' },
      { equipo: 'Liverpool', minuto: 54, jugador: 'Wijnaldum' },
      { equipo: 'Liverpool', minuto: 56, jugador: 'Wijnaldum' },
      { equipo: 'Liverpool', minuto: 79, jugador: 'Origi' },
    ]
  },
  {
    id: 'ucl2017_rm_bay_semi1',
    local: 'Real Madrid', visitante: 'Bayern Munich',
    resultado: '2-2', torneo: 'Semifinal Champions 2017 (ida)', fecha: '18 Abr 2017',
    tipo: 'club',
    goles: [
      { equipo: 'Bayern Munich', minuto: 25, jugador: 'Vidal' },
      { equipo: 'Real Madrid', minuto: 47, jugador: 'Ronaldo' },
      { equipo: 'Real Madrid', minuto: 77, jugador: 'Ronaldo' },
      { equipo: 'Bayern Munich', minuto: 83, jugador: 'Vidal' },
    ]
  },
  {
    id: 'ucl2012_bar_chel_semi2',
    local: 'Barcelona', visitante: 'Chelsea',
    resultado: '2-2', torneo: 'Semifinal Champions 2012 (vuelta)', fecha: '24 Abr 2012',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 35, jugador: 'Busquets' },
      { equipo: 'Barcelona', minuto: 43, jugador: 'Messi' },
      { equipo: 'Chelsea', minuto: 45, jugador: 'Ramires' },
      { equipo: 'Chelsea', minuto: 90, jugador: 'Torres' },
    ]
  },
  {
    id: 'ucl2020_bay_bar_qf',
    local: 'Bayern Munich', visitante: 'Barcelona',
    resultado: '8-2', torneo: 'Cuartos Champions 2020', fecha: '14 Ago 2020',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 7, jugador: 'Müller' },
      { equipo: 'Bayern Munich', minuto: 4, jugador: 'Müller' },
      { equipo: 'Bayern Munich', minuto: 7, jugador: 'Alaba' },
      { equipo: 'Bayern Munich', minuto: 22, jugador: 'Perisic' },
      { equipo: 'Bayern Munich', minuto: 28, jugador: 'Gnabry' },
      { equipo: 'Bayern Munich', minuto: 34, jugador: 'Müller' },
      { equipo: 'Barcelona', minuto: 57, jugador: 'Suárez' },
      { equipo: 'Bayern Munich', minuto: 63, jugador: 'Lewandowski' },
      { equipo: 'Bayern Munich', minuto: 82, jugador: 'Kimmich' },
      { equipo: 'Bayern Munich', minuto: 89, jugador: 'Coutinho' },
    ]
  },
  {
    id: 'ucl2017_rm_juve_final',
    local: 'Real Madrid', visitante: 'Juventus',
    resultado: '4-1', torneo: 'Final Champions 2017', fecha: '3 Jun 2017',
    tipo: 'club',
    goles: [
      { equipo: 'Juventus', minuto: 27, jugador: 'Mandžukić' },
      { equipo: 'Real Madrid', minuto: 20, jugador: 'Mandžukić' },
      { equipo: 'Real Madrid', minuto: 50, jugador: 'Casemiro' },
      { equipo: 'Real Madrid', minuto: 64, jugador: 'Ronaldo' },
      { equipo: 'Real Madrid', minuto: 98, jugador: 'Ronaldo' },
    ]
  },
  {
    id: 'ucl2016_rm_atl_final',
    local: 'Real Madrid', visitante: 'Atlético de Madrid',
    resultado: '1-1 (p)', torneo: 'Final Champions 2016', fecha: '28 May 2016',
    tipo: 'club',
    goles: [
      { equipo: 'Real Madrid', minuto: 15, jugador: 'Ramos' },
      { equipo: 'Atlético de Madrid', minuto: 79, jugador: 'Carrasco' },
    ]
  },
  {
    id: 'ucl2009_bar_mu_final',
    local: 'Barcelona', visitante: 'Manchester United',
    resultado: '2-0', torneo: 'Final Champions 2009', fecha: '27 May 2009',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 10, jugador: 'Eto\'o' },
      { equipo: 'Barcelona', minuto: 70, jugador: 'Messi' },
    ]
  },
  {
    id: 'ucl2011_bar_mu_final',
    local: 'Barcelona', visitante: 'Manchester United',
    resultado: '3-1', torneo: 'Final Champions 2011', fecha: '28 May 2011',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 27, jugador: 'Pedro' },
      { equipo: 'Manchester United', minuto: 34, jugador: 'Rooney' },
      { equipo: 'Barcelona', minuto: 54, jugador: 'Messi' },
      { equipo: 'Barcelona', minuto: 69, jugador: 'Villa' },
    ]
  },
  {
    id: 'ucl2019_tot_aj_semi1',
    local: 'Tottenham', visitante: 'Ajax',
    resultado: '0-1', torneo: 'Semifinal Champions 2019 (ida)', fecha: '30 Abr 2019',
    tipo: 'club',
    goles: [
      { equipo: 'Ajax', minuto: 15, jugador: 'van de Beek' },
    ]
  },
  {
    id: 'ucl2022_rm_man_semi2',
    local: 'Real Madrid', visitante: 'Manchester City',
    resultado: '3-1', torneo: 'Semifinal Champions 2022 (vuelta)', fecha: '4 May 2022',
    tipo: 'club',
    goles: [
      { equipo: 'Manchester City', minuto: 73, jugador: 'Mahrez' },
      { equipo: 'Real Madrid', minuto: 90, jugador: 'Rodrygo' },
      { equipo: 'Real Madrid', minuto: 91, jugador: 'Rodrygo' },
      { equipo: 'Real Madrid', minuto: 95, jugador: 'Benzema' },
    ]
  },
  {
    id: 'ucl2023_man_int_final',
    local: 'Manchester City', visitante: 'Inter de Milán',
    resultado: '1-0', torneo: 'Final Champions 2023', fecha: '10 Jun 2023',
    tipo: 'club',
    goles: [
      { equipo: 'Manchester City', minuto: 68, jugador: 'Rodri' },
    ]
  },
  {
    id: 'ucl2013_bay_bvb_final',
    local: 'Bayern Munich', visitante: 'Borussia Dortmund',
    resultado: '2-1', torneo: 'Final Champions 2013', fecha: '25 May 2013',
    tipo: 'club',
    goles: [
      { equipo: 'Borussia Dortmund', minuto: 60, jugador: 'Mandžukić' },
      { equipo: 'Bayern Munich', minuto: 68, jugador: 'Mandžukić' },
      { equipo: 'Bayern Munich', minuto: 89, jugador: 'Robben' },
    ]
  },

  // ── LA LIGA ───────────────────────────────────────────────────────────────
  {
    id: 'liga_rm_bar_2017_classico',
    local: 'Real Madrid', visitante: 'Barcelona',
    resultado: '2-3', torneo: 'LaLiga 2016-17', fecha: '23 Abr 2017',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 33, jugador: 'Messi' },
      { equipo: 'Real Madrid', minuto: 73, jugador: 'Ramos' },
      { equipo: 'Real Madrid', minuto: 77, jugador: 'Casemiro' },
      { equipo: 'Barcelona', minuto: 85, jugador: 'Rakitić' },
      { equipo: 'Barcelona', minuto: 92, jugador: 'Messi' },
    ]
  },
  {
    id: 'liga_bar_rm_2020_classico',
    local: 'Barcelona', visitante: 'Real Madrid',
    resultado: '1-3', torneo: 'LaLiga 2019-20', fecha: '18 Dic 2019',
    tipo: 'club',
    goles: [
      { equipo: 'Real Madrid', minuto: 27, jugador: 'Vázquez' },
      { equipo: 'Barcelona', minuto: 35, jugador: 'Arthur' },
      { equipo: 'Real Madrid', minuto: 71, jugador: 'Benzema' },
      { equipo: 'Real Madrid', minuto: 78, jugador: 'Modric' },
    ]
  },
  {
    id: 'liga_rm_bar_2022_classico',
    local: 'Real Madrid', visitante: 'Barcelona',
    resultado: '3-1', torneo: 'LaLiga 2021-22', fecha: '20 Mar 2022',
    tipo: 'club',
    goles: [
      { equipo: 'Real Madrid', minuto: 13, jugador: 'Benzema' },
      { equipo: 'Real Madrid', minuto: 17, jugador: 'Asensio' },
      { equipo: 'Barcelona', minuto: 50, jugador: 'Aubameyang' },
      { equipo: 'Real Madrid', minuto: 60, jugador: 'Benzema' },
    ]
  },

  // ── PREMIER LEAGUE ────────────────────────────────────────────────────────
  {
    id: 'pl_mu_city_6_1_2011',
    local: 'Manchester United', visitante: 'Manchester City',
    resultado: '1-6', torneo: 'Premier League 2011-12', fecha: '23 Oct 2011',
    tipo: 'club',
    goles: [
      { equipo: 'Manchester City', minuto: 22, jugador: 'Balotelli' },
      { equipo: 'Manchester City', minuto: 60, jugador: 'Balotelli' },
      { equipo: 'Manchester United', minuto: 81, jugador: 'Fletcher' },
      { equipo: 'Manchester City', minuto: 89, jugador: 'Agüero' },
      { equipo: 'Manchester City', minuto: 90, jugador: 'Silva' },
      { equipo: 'Manchester City', minuto: 90, jugador: 'Džeko' },
      { equipo: 'Manchester City', minuto: 90, jugador: 'Džeko' },
    ]
  },
  {
    id: 'pl_city_qpr_agüero_2012',
    local: 'Manchester City', visitante: 'QPR',
    resultado: '3-2', torneo: 'Premier League 2011-12', fecha: '13 May 2012',
    tipo: 'club',
    goles: [
      { equipo: 'QPR', minuto: 48, jugador: 'Cissé' },
      { equipo: 'QPR', minuto: 66, jugador: 'Mackie' },
      { equipo: 'Manchester City', minuto: 73, jugador: 'Zabaleta' },
      { equipo: 'Manchester City', minuto: 90, jugador: 'Džeko' },
      { equipo: 'Manchester City', minuto: 94, jugador: 'Agüero' },
    ]
  },
  {
    id: 'pl_liv_city_4_3_2018',
    local: 'Liverpool', visitante: 'Manchester City',
    resultado: '3-0', torneo: 'Cuartos Champions 2018 (ida)', fecha: '4 Abr 2018',
    tipo: 'club',
    goles: [
      { equipo: 'Liverpool', minuto: 12, jugador: 'Oxlade-Chamberlain' },
      { equipo: 'Liverpool', minuto: 21, jugador: 'Salah' },
      { equipo: 'Liverpool', minuto: 31, jugador: 'Mané' },
    ]
  },
  {
    id: 'pl_ars_mu_2012',
    local: 'Arsenal', visitante: 'Manchester United',
    resultado: '1-2', torneo: 'Premier League 2011-12', fecha: '22 Ene 2012',
    tipo: 'club',
    goles: [
      { equipo: 'Arsenal', minuto: 47, jugador: 'Van Persie' },
      { equipo: 'Manchester United', minuto: 53, jugador: 'Van Persie' },
      { equipo: 'Manchester United', minuto: 70, jugador: 'Park' },
    ]
  },

  // ── BUNDESLIGA ────────────────────────────────────────────────────────────
  {
    id: 'bund_bay_dor_2012_classico',
    local: 'Bayern Munich', visitante: 'Borussia Dortmund',
    resultado: '1-2', torneo: 'Bundesliga 2011-12', fecha: '11 Feb 2012',
    tipo: 'club',
    goles: [
      { equipo: 'Bayern Munich', minuto: 24, jugador: 'Müller' },
      { equipo: 'Borussia Dortmund', minuto: 68, jugador: 'Lewandowski' },
      { equipo: 'Borussia Dortmund', minuto: 90, jugador: 'Lewandowski' },
    ]
  },

  // ── SERIE A ───────────────────────────────────────────────────────────────
  {
    id: 'sa_juve_inter_derby',
    local: 'Juventus', visitante: 'Inter de Milán',
    resultado: '3-2', torneo: 'Serie A 2017-18', fecha: '28 Ene 2018',
    tipo: 'club',
    goles: [
      { equipo: 'Inter de Milán', minuto: 43, jugador: 'Vecino' },
      { equipo: 'Juventus', minuto: 63, jugador: 'Higuaín' },
      { equipo: 'Juventus', minuto: 77, jugador: 'Mandzukic' },
      { equipo: 'Inter de Milán', minuto: 81, jugador: 'Perisic' },
      { equipo: 'Juventus', minuto: 87, jugador: 'Dybala' },
    ]
  },

  // ── MÁS MUNDIALES ICÓNICOS ────────────────────────────────────────────────
  {
    id: 'wc2006_ger_ita_semi',
    local: 'Alemania', visitante: 'Italia',
    resultado: '0-2', torneo: 'Semifinal Mundial 2006', fecha: '4 Jul 2006',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Italia', minuto: 119, jugador: 'Grosso' },
      { equipo: 'Italia', minuto: 120, jugador: 'Del Piero' },
    ]
  },
  {
    id: 'wc1994_bra_ita_final',
    local: 'Brasil', visitante: 'Italia',
    resultado: '0-0 (p)', torneo: 'Final Mundial 1994', fecha: '17 Jul 1994',
    tipo: 'seleccion',
    goles: []
  },
  {
    id: 'wc2018_bel_jpn_r16',
    local: 'Bélgica', visitante: 'Japón',
    resultado: '3-2', torneo: 'Octavos Mundial 2018', fecha: '2 Jul 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Japón', minuto: 48, jugador: 'Haraguchi' },
      { equipo: 'Japón', minuto: 52, jugador: 'Inui' },
      { equipo: 'Bélgica', minuto: 69, jugador: 'Vertonghen' },
      { equipo: 'Bélgica', minuto: 74, jugador: 'Fellaini' },
      { equipo: 'Bélgica', minuto: 94, jugador: 'Chadli' },
    ]
  },
  {
    id: 'wc2014_arg_sui_r16',
    local: 'Argentina', visitante: 'Suiza',
    resultado: '1-0', torneo: 'Octavos Mundial 2014', fecha: '1 Jul 2014',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 118, jugador: 'Di María' },
    ]
  },
  {
    id: 'ucl2024_rm_bay_semi',
    local: 'Real Madrid', visitante: 'Bayern Munich',
    resultado: '2-2', torneo: 'Semifinal Champions 2024 (vuelta)', fecha: '8 May 2024',
    tipo: 'club',
    goles: [
      { equipo: 'Bayern Munich', minuto: 68, jugador: 'Müller' },
      { equipo: 'Real Madrid', minuto: 88, jugador: 'Joselu' },
      { equipo: 'Real Madrid', minuto: 91, jugador: 'Joselu' },
      { equipo: 'Bayern Munich', minuto: 94, jugador: 'Sané' },
    ]
  },
  {
    id: 'ucl2024_rm_dor_final',
    local: 'Real Madrid', visitante: 'Borussia Dortmund',
    resultado: '2-0', torneo: 'Final Champions 2024', fecha: '1 Jun 2024',
    tipo: 'club',
    goles: [
      { equipo: 'Real Madrid', minuto: 74, jugador: 'Carvajal' },
      { equipo: 'Real Madrid', minuto: 83, jugador: 'Vinicius' },
    ]
  },
  {
    id: 'ucl2022_liv_rm_final',
    local: 'Liverpool', visitante: 'Real Madrid',
    resultado: '0-1', torneo: 'Final Champions 2022', fecha: '28 May 2022',
    tipo: 'club',
    goles: [
      { equipo: 'Real Madrid', minuto: 59, jugador: 'Vinicius' },
    ]
  },
  {
    id: 'ucl2018_rm_liv_final',
    local: 'Real Madrid', visitante: 'Liverpool',
    resultado: '3-1', torneo: 'Final Champions 2018', fecha: '26 May 2018',
    tipo: 'club',
    goles: [
      { equipo: 'Liverpool', minuto: 25, jugador: 'Benzema' },
      { equipo: 'Real Madrid', minuto: 51, jugador: 'Benzema' },
      { equipo: 'Real Madrid', minuto: 64, jugador: 'Bale' },
      { equipo: 'Real Madrid', minuto: 83, jugador: 'Bale' },
    ]
  },
  {
    id: 'pl_bar_psg_remontada',
    local: 'Barcelona', visitante: 'PSG',
    resultado: '6-1', torneo: 'Octavos Champions 2017 (vuelta)', fecha: '8 Mar 2017',
    tipo: 'club',
    goles: [
      { equipo: 'Barcelona', minuto: 3, jugador: 'Suárez' },
      { equipo: 'PSG', minuto: 62, jugador: 'Cavani' },
      { equipo: 'Barcelona', minuto: 50, jugador: 'Messi' },
      { equipo: 'Barcelona', minuto: 88, jugador: 'Kurzawa' },
      { equipo: 'Barcelona', minuto: 90, jugador: 'Neymar' },
      { equipo: 'Barcelona', minuto: 95, jugador: 'Neymar' },
      { equipo: 'Barcelona', minuto: 95, jugador: 'Sergi Roberto' },
    ]
  },
  {
    id: 'wc2022_por_sui_r16',
    local: 'Portugal', visitante: 'Suiza',
    resultado: '6-1', torneo: 'Octavos Mundial 2022', fecha: '6 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Portugal', minuto: 17, jugador: 'Gonçalo Ramos' },
      { equipo: 'Suiza', minuto: 58, jugador: 'Akanji' },
      { equipo: 'Portugal', minuto: 51, jugador: 'Gonçalo Ramos' },
      { equipo: 'Portugal', minuto: 55, jugador: 'Raphaël Guerreiro' },
      { equipo: 'Portugal', minuto: 67, jugador: 'Gonçalo Ramos' },
      { equipo: 'Portugal', minuto: 80, jugador: 'Pepe' },
      { equipo: 'Portugal', minuto: 87, jugador: 'Leão' },
    ]
  },
  {
    id: 'wc2018_fra_arg_r16',
    local: 'Francia', visitante: 'Argentina',
    resultado: '4-3', torneo: 'Octavos Mundial 2018', fecha: '30 Jun 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Francia', minuto: 13, jugador: 'Griezmann' },
      { equipo: 'Argentina', minuto: 41, jugador: 'Mercado' },
      { equipo: 'Argentina', minuto: 48, jugador: 'Pavón' },
      { equipo: 'Francia', minuto: 57, jugador: 'Mbappé' },
      { equipo: 'Francia', minuto: 64, jugador: 'Mbappé' },
      { equipo: 'Argentina', minuto: 93, jugador: 'Agüero' },
      { equipo: 'Francia', minuto: 93, jugador: 'Griezmann' },
    ]
  },
  {
    id: 'euro2012_esp_ita_final',
    local: 'España', visitante: 'Italia',
    resultado: '4-0', torneo: 'Final Euro 2012', fecha: '1 Jul 2012',
    tipo: 'seleccion',
    goles: [
      { equipo: 'España', minuto: 14, jugador: 'Silva' },
      { equipo: 'España', minuto: 41, jugador: 'Alba' },
      { equipo: 'España', minuto: 84, jugador: 'Torres' },
      { equipo: 'España', minuto: 88, jugador: 'Mata' },
    ]
  },
  {
    id: 'wc2010_uru_gha_qf',
    local: 'Uruguay', visitante: 'Ghana',
    resultado: '1-1 (p)', torneo: 'Cuartos Mundial 2010', fecha: '2 Jul 2010',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Uruguay', minuto: 55, jugador: 'Forlán' },
      { equipo: 'Ghana', minuto: 120, jugador: 'Mensah' },
    ]
  },
]

export function getFlag(equipo) {
  return FLAG_MAP[equipo] || null
}

export function normalizarNombre(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 
  // ── PARTIDOS EXTRA ─────────────────────────────────────────────────────────
  {
    id:'wc22_grC_fra_aus',
    local:'Francia', visitante:'Australia',
    resultado:'4-1', torneo:'Grupo C Mundial 2022', fecha:'22 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Australia',minuto:9,jugador:'Goodwin'},
    {equipo:'Francia',minuto:27,jugador:'Rabiot'},
    {equipo:'Francia',minuto:45,jugador:'Giroud'},
    {equipo:'Francia',minuto:68,jugador:'Mbappé'},
    {equipo:'Francia',minuto:71,jugador:'Giroud'}
  ]
  },
  {
    id:'wc22_grC_pol_mex',
    local:'Polonia', visitante:'México',
    resultado:'0-0', torneo:'Grupo C Mundial 2022', fecha:'22 Nov 2022',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc22_grC_fra_den',
    local:'Francia', visitante:'Dinamarca',
    resultado:'2-1', torneo:'Grupo C Mundial 2022', fecha:'26 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:68,jugador:'Christensen'},
    {equipo:'Francia',minuto:86,jugador:'Mbappé'},
    {equipo:'Francia',minuto:88,jugador:'Mbappé'}
  ]
  },
  {
    id:'wc22_grC_pol_sau',
    local:'Arabia Saudita', visitante:'Polonia',
    resultado:'2-0', torneo:'Grupo C Mundial 2022', fecha:'26 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Arabia Saudita',minuto:45,jugador:'Al-Dawsari'},
    {equipo:'Arabia Saudita',minuto:90,jugador:'Al-Shahrani'}
  ]
  },
  {
    id:'wc22_grH_por_gha',
    local:'Portugal', visitante:'Ghana',
    resultado:'3-2', torneo:'Grupo H Mundial 2022', fecha:'24 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:65,jugador:'Ronaldo'},
    {equipo:'Ghana',minuto:73,jugador:'Ayew'},
    {equipo:'Portugal',minuto:78,jugador:'João Félix'},
    {equipo:'Portugal',minuto:80,jugador:'Leão'},
    {equipo:'Ghana',minuto:89,jugador:'Bukari'}
  ]
  },
  {
    id:'wc22_grH_kor_gha',
    local:'Corea del Sur', visitante:'Ghana',
    resultado:'2-3', torneo:'Grupo H Mundial 2022', fecha:'28 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Ghana',minuto:24,jugador:'Salisu'},
    {equipo:'Ghana',minuto:34,jugador:'Kudus'},
    {equipo:'Corea del Sur',minuto:58,jugador:'Cho Gue-sung'},
    {equipo:'Corea del Sur',minuto:61,jugador:'Cho Gue-sung'},
    {equipo:'Ghana',minuto:68,jugador:'Kudus'}
  ]
  },
  {
    id:'wc22_grE_esp_cos',
    local:'España', visitante:'Costa Rica',
    resultado:'7-0', torneo:'Grupo E Mundial 2022', fecha:'23 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:11,jugador:'Dani Olmo'},
    {equipo:'España',minuto:21,jugador:'Ferran Torres'},
    {equipo:'España',minuto:45,jugador:'Ferran Torres'},
    {equipo:'España',minuto:54,jugador:'Gavi'},
    {equipo:'España',minuto:74,jugador:'Carlos Soler'},
    {equipo:'España',minuto:90,jugador:'Marco Asensio'},
    {equipo:'España',minuto:92,jugador:'Morata'}
  ]
  },
  {
    id:'wc22_grE_ale_jap',
    local:'Alemania', visitante:'Japón',
    resultado:'1-2', torneo:'Grupo E Mundial 2022', fecha:'23 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:33,jugador:'Gündogan'},
    {equipo:'Japón',minuto:75,jugador:'Doan'},
    {equipo:'Japón',minuto:83,jugador:'Asano'}
  ]
  },
  {
    id:'wc22_grF_bel_can',
    local:'Bélgica', visitante:'Canadá',
    resultado:'1-0', torneo:'Grupo F Mundial 2022', fecha:'23 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:44,jugador:'Batshuayi'}
  ]
  },
  {
    id:'wc22_grF_cro_mor',
    local:'Croacia', visitante:'Marruecos',
    resultado:'0-0', torneo:'Grupo F Mundial 2022', fecha:'23 Nov 2022',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc22_grF_bel_mor',
    local:'Bélgica', visitante:'Marruecos',
    resultado:'0-2', torneo:'Grupo F Mundial 2022', fecha:'27 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Marruecos',minuto:73,jugador:'Abde'},
    {equipo:'Marruecos',minuto:92,jugador:'Sabiri'}
  ]
  },
  {
    id:'wc22_grG_bra_srb',
    local:'Brasil', visitante:'Serbia',
    resultado:'2-0', torneo:'Grupo G Mundial 2022', fecha:'24 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:62,jugador:'Richarlison'},
    {equipo:'Brasil',minuto:73,jugador:'Richarlison'}
  ]
  },
  {
    id:'wc22_grG_cam_sui',
    local:'Camerún', visitante:'Suiza',
    resultado:'2-3', torneo:'Grupo G Mundial 2022', fecha:'24 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Camerún',minuto:48,jugador:'Breel Embolo'},
    {equipo:'Suiza',minuto:10,jugador:'Breel Embolo'},
    {equipo:'Suiza',minuto:44,jugador:'Xherdan Shaqiri'},
    {equipo:'Suiza',minuto:48,jugador:'Haris Seferović'},
    {equipo:'Camerún',minuto:72,jugador:'Vincent Aboubakar'}
  ]
  },
  {
    id:'wc22_grA_qat_ecu',
    local:'Qatar', visitante:'Ecuador',
    resultado:'0-2', torneo:'Grupo A Mundial 2022', fecha:'20 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Ecuador',minuto:16,jugador:'Valencia'},
    {equipo:'Ecuador',minuto:31,jugador:'Valencia'}
  ]
  },
  {
    id:'wc22_grA_sen_ned',
    local:'Senegal', visitante:'Países Bajos',
    resultado:'0-2', torneo:'Grupo A Mundial 2022', fecha:'21 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:84,jugador:'Gakpo'},
    {equipo:'Países Bajos',minuto:99,jugador:'Klaassen'}
  ]
  },
  {
    id:'wc22_grA_ned_qat',
    local:'Países Bajos', visitante:'Qatar',
    resultado:'2-0', torneo:'Grupo A Mundial 2022', fecha:'29 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:26,jugador:'Gakpo'},
    {equipo:'Países Bajos',minuto:49,jugador:'De Jong'}
  ]
  },
  {
    id:'wc22_grA_sen_ecu',
    local:'Senegal', visitante:'Ecuador',
    resultado:'2-1', torneo:'Grupo A Mundial 2022', fecha:'29 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Ecuador',minuto:67,jugador:'Caicedo'},
    {equipo:'Senegal',minuto:70,jugador:'Diallo'},
    {equipo:'Senegal',minuto:44,jugador:'Koulibaly'}
  ]
  },
  {
    id:'wc22_grB_eng_ira',
    local:'Inglaterra', visitante:'Irán',
    resultado:'6-2', torneo:'Grupo B Mundial 2022', fecha:'21 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:35,jugador:'Bellingham'},
    {equipo:'Inglaterra',minuto:43,jugador:'Saka'},
    {equipo:'Irán',minuto:65,jugador:'Cheshmi'},
    {equipo:'Inglaterra',minuto:45,jugador:'Rashford'},
    {equipo:'Inglaterra',minuto:62,jugador:'Sterling'},
    {equipo:'Inglaterra',minuto:71,jugador:'Grealish'},
    {equipo:'Irán',minuto:90,jugador:'Rezaeian'},
    {equipo:'Inglaterra',minuto:90,jugador:'Saka'}
  ]
  },
  {
    id:'wc22_grB_usa_gal',
    local:'Estados Unidos', visitante:'Gales',
    resultado:'1-1', torneo:'Grupo B Mundial 2022', fecha:'21 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:36,jugador:'Weah'},
    {equipo:'Gales',minuto:82,jugador:'Bale'}
  ]
  },
  {
    id:'wc22_grB_eng_usa',
    local:'Inglaterra', visitante:'Estados Unidos',
    resultado:'0-0', torneo:'Grupo B Mundial 2022', fecha:'25 Nov 2022',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc22_grD_fra_pol_r16',
    local:'Francia', visitante:'Polonia',
    resultado:'3-1', torneo:'Octavos Mundial 2022', fecha:'4 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:44,jugador:'Giroud'},
    {equipo:'Francia',minuto:74,jugador:'Mbappé'},
    {equipo:'Francia',minuto:91,jugador:'Mbappé'},
    {equipo:'Polonia',minuto:99,jugador:'Lewandowski'}
  ]
  },
  {
    id:'wc22_grD_aus_arg_r16',
    local:'Argentina', visitante:'Australia',
    resultado:'2-1', torneo:'Octavos Mundial 2022', fecha:'3 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:35,jugador:'Messi'},
    {equipo:'Argentina',minuto:57,jugador:'Álvarez'},
    {equipo:'Australia',minuto:77,jugador:'Goodwin'}
  ]
  },
  {
    id:'wc22_grE_eng_sen_r16',
    local:'Inglaterra', visitante:'Senegal',
    resultado:'3-0', torneo:'Octavos Mundial 2022', fecha:'4 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:38,jugador:'Henderson'},
    {equipo:'Inglaterra',minuto:45,jugador:'Saka'},
    {equipo:'Inglaterra',minuto:57,jugador:'Kane'}
  ]
  },
  {
    id:'wc22_grE_ned_usa_r16',
    local:'Países Bajos', visitante:'Estados Unidos',
    resultado:'3-1', torneo:'Octavos Mundial 2022', fecha:'3 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:10,jugador:'Memphis Depay'},
    {equipo:'Países Bajos',minuto:45,jugador:'Blind'},
    {equipo:'Estados Unidos',minuto:76,jugador:'Berhalter'},
    {equipo:'Países Bajos',minuto:81,jugador:'Blind'}
  ]
  },
  {
    id:'wc22_semi_arg_cro',
    local:'Argentina', visitante:'Croacia',
    resultado:'3-0', torneo:'Semifinal Mundial 2022', fecha:'13 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:34,jugador:'Messi'},
    {equipo:'Argentina',minuto:39,jugador:'Álvarez'},
    {equipo:'Argentina',minuto:69,jugador:'Álvarez'}
  ]
  },
  {
    id:'wc18_grA_rus_sau',
    local:'Rusia', visitante:'Arabia Saudita',
    resultado:'5-0', torneo:'Grupo A Mundial 2018', fecha:'14 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Rusia',minuto:12,jugador:'Gazinsky'},
    {equipo:'Rusia',minuto:41,jugador:'Cheryshev'},
    {equipo:'Rusia',minuto:71,jugador:'Dzyuba'},
    {equipo:'Rusia',minuto:90,jugador:'Cheryshev'},
    {equipo:'Rusia',minuto:94,jugador:'Golovin'}
  ]
  },
  {
    id:'wc18_grB_por_mar',
    local:'Portugal', visitante:'Marruecos',
    resultado:'1-0', torneo:'Grupo B Mundial 2018', fecha:'20 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:4,jugador:'Ronaldo'}
  ]
  },
  {
    id:'wc18_grC_fra_per',
    local:'Francia', visitante:'Perú',
    resultado:'1-0', torneo:'Grupo C Mundial 2018', fecha:'21 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:34,jugador:'Mbappé'}
  ]
  },
  {
    id:'wc18_grD_arg_cro',
    local:'Argentina', visitante:'Croacia',
    resultado:'0-3', torneo:'Grupo D Mundial 2018', fecha:'21 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:53,jugador:'Rebić'},
    {equipo:'Croacia',minuto:80,jugador:'Modrić'},
    {equipo:'Croacia',minuto:90,jugador:'Rakitić'}
  ]
  },
  {
    id:'wc18_grF_ger_swe',
    local:'Alemania', visitante:'Suecia',
    resultado:'2-1', torneo:'Grupo F Mundial 2018', fecha:'23 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Suecia',minuto:32,jugador:'Toivonen'},
    {equipo:'Alemania',minuto:48,jugador:'Marco Reus'},
    {equipo:'Alemania',minuto:95,jugador:'Toni Kroos'}
  ]
  },
  {
    id:'wc18_grG_bel_tun',
    local:'Bélgica', visitante:'Túnez',
    resultado:'5-2', torneo:'Grupo G Mundial 2018', fecha:'23 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:6,jugador:'Hazard'},
    {equipo:'Túnez',minuto:18,jugador:'Bronn'},
    {equipo:'Bélgica',minuto:45,jugador:'Lukaku'},
    {equipo:'Bélgica',minuto:51,jugador:'Meunier'},
    {equipo:'Bélgica',minuto:69,jugador:'Lukaku'},
    {equipo:'Túnez',minuto:90,jugador:'Khazri'},
    {equipo:'Bélgica',minuto:74,jugador:'Chadli'}
  ]
  },
  {
    id:'wc18_grH_sen_col',
    local:'Senegal', visitante:'Colombia',
    resultado:'0-1', torneo:'Grupo H Mundial 2018', fecha:'28 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:73,jugador:'Mina'}
  ]
  },
  {
    id:'wc18_grE_bra_sui',
    local:'Brasil', visitante:'Suiza',
    resultado:'1-1', torneo:'Grupo E Mundial 2018', fecha:'17 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:20,jugador:'Coutinho'},
    {equipo:'Suiza',minuto:50,jugador:'Zuber'}
  ]
  },
  {
    id:'wc18_grF_swe_kor',
    local:'Suecia', visitante:'Corea del Sur',
    resultado:'1-0', torneo:'Grupo F Mundial 2018', fecha:'18 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Suecia',minuto:65,jugador:'Granqvist'}
  ]
  },
  {
    id:'wc14_grD_ita_uru',
    local:'Italia', visitante:'Uruguay',
    resultado:'0-1', torneo:'Grupo D Mundial 2014', fecha:'24 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:81,jugador:'Suárez'}
  ]
  },
  {
    id:'wc14_grG_ger_gha',
    local:'Alemania', visitante:'Ghana',
    resultado:'2-2', torneo:'Grupo G Mundial 2014', fecha:'21 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:54,jugador:'Götze'},
    {equipo:'Ghana',minuto:63,jugador:'Ayew'},
    {equipo:'Ghana',minuto:71,jugador:'Ayew'},
    {equipo:'Alemania',minuto:71,jugador:'Klose'}
  ]
  },
  {
    id:'wc14_grB_esp_chi',
    local:'España', visitante:'Chile',
    resultado:'0-2', torneo:'Grupo B Mundial 2014', fecha:'18 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Chile',minuto:20,jugador:'Vargas'},
    {equipo:'Chile',minuto:43,jugador:'Aranguiz'}
  ]
  },
  {
    id:'wc10_grF_ita_slo',
    local:'Italia', visitante:'Eslovaquia',
    resultado:'2-3', torneo:'Grupo F Mundial 2010', fecha:'24 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovaquia',minuto:25,jugador:'Vittek'},
    {equipo:'Italia',minuto:25,jugador:'Di Natale'},
    {equipo:'Eslovaquia',minuto:73,jugador:'Vittek'},
    {equipo:'Italia',minuto:81,jugador:'Quagliarella'},
    {equipo:'Eslovaquia',minuto:89,jugador:'Kopúnek'}
  ]
  },
  {
    id:'wc10_grA_fra_mex',
    local:'Francia', visitante:'México',
    resultado:'0-2', torneo:'Grupo A Mundial 2010', fecha:'17 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'México',minuto:64,jugador:'Blanco'},
    {equipo:'México',minuto:79,jugador:'Hernández'}
  ]
  },
  {
    id:'wc06_grH_sau_ukr',
    local:'Arabia Saudita', visitante:'Ucrania',
    resultado:'0-4', torneo:'Grupo H Mundial 2006', fecha:'19 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Ucrania',minuto:4,jugador:'Rebrov'},
    {equipo:'Ucrania',minuto:36,jugador:'Shevchenko'},
    {equipo:'Ucrania',minuto:46,jugador:'Kalinichenko'},
    {equipo:'Ucrania',minuto:84,jugador:'Shevchenko'}
  ]
  },
  {
    id:'wc06_grF_aus_jap',
    local:'Australia', visitante:'Japón',
    resultado:'3-1', torneo:'Grupo F Mundial 2006', fecha:'12 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Japón',minuto:26,jugador:'Nakata'},
    {equipo:'Australia',minuto:84,jugador:'Cahill'},
    {equipo:'Australia',minuto:89,jugador:'Cahill'},
    {equipo:'Australia',minuto:90,jugador:'Aloisi'}
  ]
  },
  {
    id:'wc02_grD_kor_pol',
    local:'Corea del Sur', visitante:'Polonia',
    resultado:'2-0', torneo:'Grupo D Mundial 2002', fecha:'4 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Corea del Sur',minuto:26,jugador:'Hwang Sun-hong'},
    {equipo:'Corea del Sur',minuto:53,jugador:'Park Ji-sung'}
  ]
  },
  {
    id:'wc02_grD_kor_usa',
    local:'Corea del Sur', visitante:'Estados Unidos',
    resultado:'1-1', torneo:'Grupo D Mundial 2002', fecha:'10 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:24,jugador:'McBride'},
    {equipo:'Corea del Sur',minuto:78,jugador:'Ahn Jung-hwan'}
  ]
  },
  {
    id:'wc98_grH_arg_jap',
    local:'Argentina', visitante:'Japón',
    resultado:'1-0', torneo:'Grupo H Mundial 1998', fecha:'14 Jun 1998',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:28,jugador:'Batistuta'}
  ]
  },
  {
    id:'wc98_grB_ita_chi',
    local:'Italia', visitante:'Chile',
    resultado:'2-2', torneo:'Grupo B Mundial 1998', fecha:'11 Jun 1998',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:10,jugador:'Salas'},
    {equipo:'Italia',minuto:46,jugador:'Vieri'},
    {equipo:'Italia',minuto:87,jugador:'Vieri'},
    {equipo:'Chile',minuto:88,jugador:'Salas'}
  ]
  },
  {
    id:'ucl_bar_psg_21_1',
    local:'Barcelona', visitante:'PSG',
    resultado:'4-1', torneo:'Grupo Champions 2014-15', fecha:'10 Dic 2014',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:24,jugador:'Messi'},
    {equipo:'Barcelona',minuto:38,jugador:'Neymar'},
    {equipo:'PSG',minuto:52,jugador:'Ibrahimović'},
    {equipo:'Barcelona',minuto:73,jugador:'Messi'},
    {equipo:'Barcelona',minuto:90,jugador:'Munir'}
  ]
  },
  {
    id:'ucl_rm_gal_5_0',
    local:'Real Madrid', visitante:'Galatasaray',
    resultado:'6-1', torneo:'Grupos Champions 2013-14', fecha:'27 Nov 2013',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:3,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:10,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:18,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:53,jugador:'Di María'},
    {equipo:'Galatasaray',minuto:57,jugador:'Umut Bulut'},
    {equipo:'Real Madrid',minuto:76,jugador:'Gareth Bale'},
    {equipo:'Real Madrid',minuto:90,jugador:'Isco'}
  ]
  },
  {
    id:'ucl_man_lei_3_1',
    local:'Manchester City', visitante:'Borussia Dortmund',
    resultado:'2-1', torneo:'Champions 2012 Grupos', fecha:'3 Oct 2012',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:15,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:58,jugador:'Kolarov'},
    {equipo:'Borussia Dortmund',minuto:90,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl_bay_bar_4_0_2013',
    local:'Bayern Munich', visitante:'Barcelona',
    resultado:'4-0', torneo:'Semifinal Champions 2013 (ida)', fecha:'23 Abr 2013',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:25,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:49,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:73,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:76,jugador:'Robben'}
  ]
  },
  {
    id:'ucl_bay_bar_3_0_2013',
    local:'Barcelona', visitante:'Bayern Munich',
    resultado:'0-3', torneo:'Semifinal Champions 2013 (vuelta)', fecha:'1 May 2013',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:48,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:76,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:89,jugador:'Ribéry'}
  ]
  },
  {
    id:'ucl_dor_mal_4_1',
    local:'Borussia Dortmund', visitante:'Málaga',
    resultado:'3-2', torneo:'Cuartos Champions 2013 (vuelta)', fecha:'9 Abr 2013',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:80,jugador:'Felipe Santana'},
    {equipo:'Borussia Dortmund',minuto:82,jugador:'Reus'},
    {equipo:'Borussia Dortmund',minuto:88,jugador:'Felipe Santana'}
  ]
  },
  {
    id:'ucl_rm_juve_3_0',
    local:'Real Madrid', visitante:'Juventus',
    resultado:'3-0', torneo:'Semifinal Champions 2015 (ida)', fecha:'5 May 2015',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:23,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:57,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:61,jugador:'Morata'}
  ]
  },
  {
    id:'ucl_juve_rm_1_0',
    local:'Juventus', visitante:'Real Madrid',
    resultado:'2-1', torneo:'Semifinal Champions 2015 (vuelta)', fecha:'13 May 2015',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:8,jugador:'Tevez'},
    {equipo:'Juventus',minuto:57,jugador:'Morata'},
    {equipo:'Real Madrid',minuto:61,jugador:'Álvaro Morata'}
  ]
  },
  {
    id:'ucl_tot_man_1_0_2010',
    local:'Tottenham', visitante:'Manchester City',
    resultado:'0-0', torneo:'Octavos Champions 2016 (ida)', fecha:'2 Feb 2016',
    tipo:'club',
    goles:[]
  },
  {
    id:'ucl_psg_bar_4_0_2017',
    local:'PSG', visitante:'Barcelona',
    resultado:'4-0', torneo:'Octavos Champions 2017 (ida)', fecha:'14 Feb 2017',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:18,jugador:'Di María'},
    {equipo:'PSG',minuto:40,jugador:'Di María'},
    {equipo:'PSG',minuto:55,jugador:'Draxler'},
    {equipo:'PSG',minuto:62,jugador:'Cavani'}
  ]
  },
  {
    id:'ucl_liv_psg_3_2_2018',
    local:'Liverpool', visitante:'PSG',
    resultado:'3-2', torneo:'Grupos Champions 2018-19', fecha:'18 Sep 2018',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:19,jugador:'Salah'},
    {equipo:'PSG',minuto:33,jugador:'Meunier'},
    {equipo:'Liverpool',minuto:28,jugador:'Firmino'},
    {equipo:'PSG',minuto:37,jugador:'Meunier'},
    {equipo:'Liverpool',minuto:73,jugador:'Milner'}
  ]
  },
  {
    id:'ucl_bar_int_2_0_2019',
    local:'Barcelona', visitante:'Inter de Milán',
    resultado:'2-0', torneo:'Grupos Champions 2019-20', fecha:'2 Oct 2019',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:58,jugador:'Malcom'},
    {equipo:'Barcelona',minuto:83,jugador:'Suárez'}
  ]
  },
  {
    id:'ucl_rm_man_1_2_2022',
    local:'Real Madrid', visitante:'Manchester City',
    resultado:'4-3', torneo:'Cuartos Champions 2022 (ida)', fecha:'26 Abr 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Benzema'},
    {equipo:'Manchester City',minuto:17,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:33,jugador:'De Bruyne'},
    {equipo:'Real Madrid',minuto:55,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:82,jugador:'Benzema'},
    {equipo:'Manchester City',minuto:53,jugador:'Phil Foden'},
    {equipo:'Real Madrid',minuto:73,jugador:'Vinicius'}
  ]
  },
  {
    id:'ucl_man_rm_1_1_2022',
    local:'Manchester City', visitante:'Real Madrid',
    resultado:'1-1', torneo:'Cuartos Champions 2022 (vuelta)', fecha:'26 Abr 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:74,jugador:'Gabriel Jesus'},
    {equipo:'Real Madrid',minuto:82,jugador:'Benzema'}
  ]
  },
  {
    id:'ucl_vil_juve_1_1',
    local:'Villarreal', visitante:'Juventus',
    resultado:'1-1', torneo:'Octavos Champions 2022 (ida)', fecha:'22 Feb 2022',
    tipo:'club',
    goles:[
    {equipo:'Villarreal',minuto:66,jugador:'Parejo'},
    {equipo:'Juventus',minuto:78,jugador:'Vlahović'}
  ]
  },
  {
    id:'ucl_bay_sal_7_1',
    local:'Bayern Munich', visitante:'Salzburgo',
    resultado:'7-1', torneo:'Octavos Champions 2022 (vuelta)', fecha:'8 Mar 2022',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:21,jugador:'Choupo-Moting'},
    {equipo:'Salzburgo',minuto:48,jugador:'Adeyemi'},
    {equipo:'Bayern Munich',minuto:23,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:27,jugador:'Choupo-Moting'},
    {equipo:'Bayern Munich',minuto:35,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:36,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:41,jugador:'Sané'},
    {equipo:'Bayern Munich',minuto:76,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl_int_shi_4_0',
    local:'Inter de Milán', visitante:'Shakhtar',
    resultado:'4-0', torneo:'Semifinal Champions 2023 (vuelta)', fecha:'16 May 2023',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:8,jugador:'Džeko'},
    {equipo:'Inter de Milán',minuto:11,jugador:'Mkhitaryan'},
    {equipo:'Inter de Milán',minuto:61,jugador:'Lukaku'},
    {equipo:'Inter de Milán',minuto:74,jugador:'Gosens'}
  ]
  },
  {
    id:'ucl_rm_nap_3_2',
    local:'Real Madrid', visitante:'Nápoles',
    resultado:'3-2', torneo:'Octavos Champions 2023 (vuelta)', fecha:'15 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:31,jugador:'Osimhen'},
    {equipo:'Real Madrid',minuto:46,jugador:'Militão'},
    {equipo:'Real Madrid',minuto:49,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:57,jugador:'Nacho'},
    {equipo:'Nápoles',minuto:82,jugador:'Osimhen'}
  ]
  },
  {
    id:'ucl_man_lip_7_0',
    local:'Manchester City', visitante:'Leipzig',
    resultado:'7-0', torneo:'Octavos Champions 2023 (vuelta)', fecha:'14 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:7,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:30,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:37,jugador:'Mahrez'},
    {equipo:'Manchester City',minuto:45,jugador:'Foden'},
    {equipo:'Manchester City',minuto:54,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:66,jugador:'Julián Álvarez'},
    {equipo:'Manchester City',minuto:90,jugador:'Gvardiol'}
  ]
  },
  {
    id:'ucl_ars_psg_2024',
    local:'Arsenal', visitante:'PSG',
    resultado:'2-0', torneo:'Semifinal Champions 2025 (ida)', fecha:'29 Abr 2025',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:24,jugador:'Rice'},
    {equipo:'Arsenal',minuto:78,jugador:'Saka'}
  ]
  },
  {
    id:'pl_man_ast_7_0',
    local:'Manchester City', visitante:'Watford',
    resultado:'8-0', torneo:'Premier League 2019-20', fecha:'21 Sep 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:2,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:8,jugador:'David Silva'},
    {equipo:'Manchester City',minuto:18,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:22,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:50,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:54,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:72,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:77,jugador:'Rodrigo'}
  ]
  },
  {
    id:'pl_che_man_5_3',
    local:'Chelsea', visitante:'Manchester United',
    resultado:'5-4', torneo:'Premier League 1999-00', fecha:'3 Oct 1999',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:47,jugador:'Solskjaer'},
    {equipo:'Chelsea',minuto:18,jugador:'Hasselbaink'},
    {equipo:'Manchester United',minuto:41,jugador:'Cole'},
    {equipo:'Chelsea',minuto:59,jugador:'Desailly'},
    {equipo:'Chelsea',minuto:73,jugador:'Hasselbaink'},
    {equipo:'Chelsea',minuto:75,jugador:'Morris'},
    {equipo:'Manchester United',minuto:87,jugador:'Sheringham'},
    {equipo:'Manchester United',minuto:90,jugador:'Cole'},
    {equipo:'Chelsea',minuto:90,jugador:'Zola'}
  ]
  },
  {
    id:'pl_ars_5_4_reading',
    local:'Arsenal', visitante:'Reading',
    resultado:'7-5', torneo:'Premier League 2012-13', fecha:'30 Dec 2012',
    tipo:'club',
    goles:[
    {equipo:'Reading',minuto:4,jugador:'Alex Pearce'},
    {equipo:'Arsenal',minuto:6,jugador:'Walcott'},
    {equipo:'Reading',minuto:13,jugador:'Le Fondre'},
    {equipo:'Arsenal',minuto:37,jugador:'Podolski'},
    {equipo:'Reading',minuto:55,jugador:'Le Fondre'},
    {equipo:'Arsenal',minuto:62,jugador:'Giroud'},
    {equipo:'Arsenal',minuto:72,jugador:'Laurent Koscielny'},
    {equipo:'Reading',minuto:87,jugador:'McCleary'},
    {equipo:'Arsenal',minuto:90,jugador:'Theo Walcott'},
    {equipo:'Arsenal',minuto:90,jugador:'Theo Walcott'},
    {equipo:'Reading',minuto:90,jugador:'Robson-Kanu'},
    {equipo:'Arsenal',minuto:90,jugador:'Bendtner'}
  ]
  },
  {
    id:'pl_lei_tot_6_1',
    local:'Leicester City', visitante:'Tottenham',
    resultado:'6-2', torneo:'Premier League 2020-21', fecha:'11 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Leicester City',minuto:5,jugador:'Ricardo Pereira'},
    {equipo:'Tottenham',minuto:20,jugador:'Kane'},
    {equipo:'Leicester City',minuto:24,jugador:'Iheanacho'},
    {equipo:'Leicester City',minuto:36,jugador:'Vardy'},
    {equipo:'Leicester City',minuto:79,jugador:'Maddison'},
    {equipo:'Leicester City',minuto:82,jugador:'Dewsbury-Hall'},
    {equipo:'Leicester City',minuto:85,jugador:'Albrighton'},
    {equipo:'Tottenham',minuto:90,jugador:'Filho'}
  ]
  },
  {
    id:'pl_man_che_2021',
    local:'Manchester United', visitante:'Chelsea',
    resultado:'0-0', torneo:'Premier League 2021-22', fecha:'11 Sep 2021',
    tipo:'club',
    goles:[]
  },
  {
    id:'pl_ars_man_3_1_2023',
    local:'Arsenal', visitante:'Manchester City',
    resultado:'1-0', torneo:'Premier League 2022-23', fecha:'26 Apr 2023',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:52,jugador:'Martinelli'}
  ]
  },
  {
    id:'pl_man_ars_3_1_2023',
    local:'Manchester City', visitante:'Arsenal',
    resultado:'4-1', torneo:'Premier League 2023-24', fecha:'31 Mar 2024',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:18,jugador:'Rodri'},
    {equipo:'Arsenal',minuto:35,jugador:'Havertz'},
    {equipo:'Manchester City',minuto:50,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:76,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:90,jugador:'Doku'}
  ]
  },
  {
    id:'pl_liv_ars_3_1_2024',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'3-1', torneo:'Premier League 2023-24', fecha:'9 Dec 2023',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:22,jugador:'Salah'},
    {equipo:'Arsenal',minuto:42,jugador:'Saka'},
    {equipo:'Liverpool',minuto:56,jugador:'Salah'},
    {equipo:'Liverpool',minuto:79,jugador:'Salah'}
  ]
  },
  {
    id:'pl_tot_ars_2_2_2022',
    local:'Tottenham', visitante:'Arsenal',
    resultado:'3-0', torneo:'Premier League 2021-22', fecha:'12 May 2022',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:22,jugador:'Son'},
    {equipo:'Tottenham',minuto:34,jugador:'Moura'},
    {equipo:'Tottenham',minuto:36,jugador:'Heung-min Son'}
  ]
  },
  {
    id:'pl_bri_man_1_4_2021',
    local:'Brighton', visitante:'Manchester City',
    resultado:'1-4', torneo:'Premier League 2022-23', fecha:'29 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:7,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:26,jugador:'Rodri'},
    {equipo:'Brighton',minuto:33,jugador:'March'},
    {equipo:'Manchester City',minuto:73,jugador:'Cancelo'},
    {equipo:'Manchester City',minuto:78,jugador:'Gündogan'}
  ]
  },
  {
    id:'pl_new_man_3_3_2022',
    local:'Newcastle', visitante:'Manchester City',
    resultado:'3-3', torneo:'Premier League 2022-23', fecha:'21 Aug 2022',
    tipo:'club',
    goles:[
    {equipo:'Newcastle',minuto:4,jugador:'Isak'},
    {equipo:'Manchester City',minuto:11,jugador:'Cancelo'},
    {equipo:'Manchester City',minuto:15,jugador:'Rodrigo'},
    {equipo:'Newcastle',minuto:56,jugador:'Isak'},
    {equipo:'Manchester City',minuto:60,jugador:'Manuel Akanji'},
    {equipo:'Newcastle',minuto:62,jugador:'Almiron'}
  ]
  },
  {
    id:'pl_man_che_4_0_2021',
    local:'Manchester City', visitante:'Chelsea',
    resultado:'4-0', torneo:'Premier League 2021-22', fecha:'15 Jan 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:4,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:8,jugador:'Riyad Mahrez'},
    {equipo:'Manchester City',minuto:20,jugador:'Phil Foden'},
    {equipo:'Manchester City',minuto:25,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'liga_bar_dep_8_0',
    local:'Barcelona', visitante:'Deportivo',
    resultado:'8-0', torneo:'LaLiga 2011-12', fecha:'20 Mar 2012',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:9,jugador:'Pedro'},
    {equipo:'Barcelona',minuto:21,jugador:'Alexis'},
    {equipo:'Barcelona',minuto:26,jugador:'Messi'},
    {equipo:'Barcelona',minuto:28,jugador:'Iniesta'},
    {equipo:'Barcelona',minuto:36,jugador:'Cesc Fàbregas'},
    {equipo:'Barcelona',minuto:41,jugador:'Messi'},
    {equipo:'Barcelona',minuto:50,jugador:'Villa'},
    {equipo:'Barcelona',minuto:82,jugador:'Messi'}
  ]
  },
  {
    id:'liga_rm_lev_5_0',
    local:'Real Madrid', visitante:'Levante',
    resultado:'5-0', torneo:'LaLiga 2022-23', fecha:'12 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:15,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:36,jugador:'Asensio'},
    {equipo:'Real Madrid',minuto:52,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:68,jugador:'Rodrygo'},
    {equipo:'Real Madrid',minuto:76,jugador:'Vinicius'}
  ]
  },
  {
    id:'liga_bar_ath_4_0_2021',
    local:'Barcelona', visitante:'Athletic Club',
    resultado:'4-0', torneo:'Final Copa Rey 2021', fecha:'17 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:2,jugador:'Dembélé'},
    {equipo:'Barcelona',minuto:48,jugador:'Braithwaite'},
    {equipo:'Barcelona',minuto:56,jugador:'Messi'},
    {equipo:'Barcelona',minuto:92,jugador:'Braithwaite'}
  ]
  },
  {
    id:'liga_atl_bar_1_0_2014',
    local:'Atlético de Madrid', visitante:'Barcelona',
    resultado:'1-0', torneo:'LaLiga 2013-14', fecha:'9 Feb 2014',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:45,jugador:'Adrián López'}
  ]
  },
  {
    id:'liga_rm_bar_0_3_2015',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'0-4', torneo:'LaLiga 2014-15', fecha:'25 Oct 2015',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:11,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:56,jugador:'Suárez'},
    {equipo:'Barcelona',minuto:68,jugador:'Mathieu'},
    {equipo:'Barcelona',minuto:74,jugador:'Messi'}
  ]
  },
  {
    id:'liga_sev_bar_0_5_2018',
    local:'Sevilla', visitante:'Barcelona',
    resultado:'0-5', torneo:'LaLiga 2017-18', fecha:'31 Mar 2018',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:1,jugador:'Luis Suárez'},
    {equipo:'Barcelona',minuto:22,jugador:'Messi'},
    {equipo:'Barcelona',minuto:62,jugador:'Messi'},
    {equipo:'Barcelona',minuto:75,jugador:'Coutinho'},
    {equipo:'Barcelona',minuto:79,jugador:'Messi'}
  ]
  },
  {
    id:'liga_bar_atl_5_1_2022',
    local:'Barcelona', visitante:'Atlético de Madrid',
    resultado:'4-2', torneo:'LaLiga 2021-22', fecha:'6 Feb 2022',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:24,jugador:'Ferran Torres'},
    {equipo:'Barcelona',minuto:34,jugador:'Ferran Torres'},
    {equipo:'Atlético de Madrid',minuto:62,jugador:'Marcos Llorente'},
    {equipo:'Atlético de Madrid',minuto:89,jugador:'Griezmann'},
    {equipo:'Barcelona',minuto:73,jugador:'Aubameyang'},
    {equipo:'Barcelona',minuto:88,jugador:'Aubameyang'}
  ]
  },
  {
    id:'liga_rm_bar_4_0_2023',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'4-1', torneo:'Supercopa España 2024', fecha:'14 Ene 2024',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:4,jugador:'Valverde'},
    {equipo:'Barcelona',minuto:13,jugador:'Lamine Yamal'},
    {equipo:'Barcelona',minuto:37,jugador:'Raphinha'},
    {equipo:'Real Madrid',minuto:65,jugador:'Joselu'},
    {equipo:'Real Madrid',minuto:73,jugador:'Joselu'}
  ]
  },
  {
    id:'liga_bar_rm_5_3_2024',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-1', torneo:'Supercopa España 2024 Final', fecha:'18 Ene 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:68,jugador:'Lewandowski'},
    {equipo:'Real Madrid',minuto:78,jugador:'Rodrygo'},
    {equipo:'Barcelona',minuto:90,jugador:'Gavi'}
  ]
  },
  {
    id:'bund_bay_dor_3_3_2013',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'3-3', torneo:'DFL Supercopa 2014', fecha:'13 Ago 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:5,jugador:'Robben'},
    {equipo:'Borussia Dortmund',minuto:26,jugador:'Immobile'},
    {equipo:'Borussia Dortmund',minuto:44,jugador:'Reus'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:62,jugador:'Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:80,jugador:'Reus'}
  ]
  },
  {
    id:'bund_bay_wer_7_0',
    local:'Bayern Munich', visitante:'Werder Bremen',
    resultado:'7-0', torneo:'Bundesliga 2019-20', fecha:'21 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:4,jugador:'Alaba'},
    {equipo:'Bayern Munich',minuto:13,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:51,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:59,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:66,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:70,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund_dor_aug_8_4_2021',
    local:'Borussia Dortmund', visitante:'Borussia Mönchengladbach',
    resultado:'4-0', torneo:'Bundesliga 2020-21', fecha:'26 Sep 2020',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:29,jugador:'Haaland'},
    {equipo:'Borussia Dortmund',minuto:43,jugador:'Reus'},
    {equipo:'Borussia Dortmund',minuto:68,jugador:'Haaland'},
    {equipo:'Borussia Dortmund',minuto:90,jugador:'Sancho'}
  ]
  },
  {
    id:'bund_lei_bay_2023',
    local:'Bayer Leverkusen', visitante:'Bayern Munich',
    resultado:'3-0', torneo:'Bundesliga 2023-24', fecha:'6 Abr 2024',
    tipo:'club',
    goles:[
    {equipo:'Bayer Leverkusen',minuto:27,jugador:'Granit Xhaka'},
    {equipo:'Bayer Leverkusen',minuto:68,jugador:'Robert Andrich'},
    {equipo:'Bayer Leverkusen',minuto:90,jugador:'Jonas Hofmann'}
  ]
  },
  {
    id:'bund_fra_dor_2021',
    local:'Frankfurt', visitante:'Borussia Dortmund',
    resultado:'2-0', torneo:'Bundesliga 2020-21', fecha:'5 Dec 2020',
    tipo:'club',
    goles:[
    {equipo:'Frankfurt',minuto:52,jugador:'Kostic'},
    {equipo:'Frankfurt',minuto:75,jugador:'Kamada'}
  ]
  },
  {
    id:'sa_nap_juve_4_1_2018',
    local:'Nápoles', visitante:'Juventus',
    resultado:'4-1', torneo:'Serie A 2018-19', fecha:'3 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:14,jugador:'Insigne'},
    {equipo:'Nápoles',minuto:44,jugador:'Mertens'},
    {equipo:'Juventus',minuto:57,jugador:'Ronaldo'},
    {equipo:'Nápoles',minuto:60,jugador:'Milik'},
    {equipo:'Nápoles',minuto:78,jugador:'Callejón'}
  ]
  },
  {
    id:'sa_int_juve_2_0_2019',
    local:'Inter de Milán', visitante:'Juventus',
    resultado:'2-0', torneo:'Serie A 2018-19', fecha:'28 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:36,jugador:'Vecino'},
    {equipo:'Inter de Milán',minuto:52,jugador:'Icardi'}
  ]
  },
  {
    id:'sa_rom_laz_3_0',
    local:'Roma', visitante:'Lazio',
    resultado:'3-0', torneo:'Serie A 2019-20', fecha:'26 Ene 2020',
    tipo:'club',
    goles:[
    {equipo:'Roma',minuto:24,jugador:'Perotti'},
    {equipo:'Roma',minuto:68,jugador:'Džeko'},
    {equipo:'Roma',minuto:80,jugador:'Džeko'}
  ]
  },
  {
    id:'sa_mil_juve_4_2',
    local:'AC Milan', visitante:'Juventus',
    resultado:'4-2', torneo:'Serie A 2021-22', fecha:'23 Ene 2022',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:20,jugador:'McKennie'},
    {equipo:'AC Milan',minuto:31,jugador:'Fikayo Tomori'},
    {equipo:'AC Milan',minuto:54,jugador:'Giroud'},
    {equipo:'Juventus',minuto:56,jugador:'Morata'},
    {equipo:'AC Milan',minuto:62,jugador:'Sandro Tonali'},
    {equipo:'AC Milan',minuto:90,jugador:'Giroud'}
  ]
  },
  {
    id:'sa_nap_ata_4_1_2023',
    local:'Nápoles', visitante:'Atalanta',
    resultado:'4-1', torneo:'Serie A 2022-23', fecha:'21 Jan 2023',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:24,jugador:'Osimhen'},
    {equipo:'Nápoles',minuto:44,jugador:'Politano'},
    {equipo:'Atalanta',minuto:60,jugador:'Hojlund'},
    {equipo:'Nápoles',minuto:75,jugador:'Elmas'},
    {equipo:'Nápoles',minuto:83,jugador:'Simeone'}
  ]
  },
  {
    id:'l1_psg_tou_9_0',
    local:'PSG', visitante:'Toulouse',
    resultado:'9-1', torneo:'Ligue 1 2015-16', fecha:'5 Dic 2015',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:3,jugador:'Zlatan Ibrahimović'},
    {equipo:'PSG',minuto:19,jugador:'Lavezzi'},
    {equipo:'Toulouse',minuto:23,jugador:'Braithwaite'},
    {equipo:'PSG',minuto:28,jugador:'Matuidi'},
    {equipo:'PSG',minuto:44,jugador:'Angel Di María'},
    {equipo:'PSG',minuto:56,jugador:'Lucas'},
    {equipo:'PSG',minuto:60,jugador:'Ibrahimović'},
    {equipo:'PSG',minuto:64,jugador:'Ibrahimović'},
    {equipo:'PSG',minuto:71,jugador:'Di María'},
    {equipo:'PSG',minuto:90,jugador:'Maxwell'}
  ]
  },
  {
    id:'l1_psg_nan_5_0_2017',
    local:'PSG', visitante:'Nantes',
    resultado:'4-1', torneo:'Ligue 1 2016-17', fecha:'14 Ene 2017',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:19,jugador:'Cavani'},
    {equipo:'PSG',minuto:37,jugador:'Draxler'},
    {equipo:'PSG',minuto:53,jugador:'Cavani'},
    {equipo:'Nantes',minuto:70,jugador:'Louza'},
    {equipo:'PSG',minuto:88,jugador:'Neymar'}
  ]
  },
  {
    id:'l1_psg_ly_3_0_2020',
    local:'PSG', visitante:'Lyon',
    resultado:'5-0', torneo:'Ligue 1 2021-22', fecha:'19 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:3,jugador:'Marquinhos'},
    {equipo:'PSG',minuto:51,jugador:'Icardi'},
    {equipo:'PSG',minuto:60,jugador:'Kylian Mbappé'},
    {equipo:'PSG',minuto:75,jugador:'Icardi'},
    {equipo:'PSG',minuto:86,jugador:'Kylian Mbappé'}
  ]
  },
  {
    id:'l1_ol_psg_3_2_2019',
    local:'Olympique Lyon', visitante:'PSG',
    resultado:'2-0', torneo:'Ligue 1 2018-19', fecha:'3 Feb 2019',
    tipo:'club',
    goles:[
    {equipo:'Olympique Lyon',minuto:48,jugador:'Fekir'},
    {equipo:'Olympique Lyon',minuto:61,jugador:'Moussa Dembélé'}
  ]
  },
  {
    id:'euro24_grA_ger_sco',
    local:'Alemania', visitante:'Escocia',
    resultado:'5-1', torneo:'Grupo A Euro 2024', fecha:'14 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:10,jugador:'Wirtz'},
    {equipo:'Alemania',minuto:19,jugador:'Musiala'},
    {equipo:'Alemania',minuto:45,jugador:'Havertz'},
    {equipo:'Alemania',minuto:68,jugador:'Füllkrug'},
    {equipo:'Escocia',minuto:87,jugador:'Shankland'},
    {equipo:'Alemania',minuto:93,jugador:'Emre Can'}
  ]
  },
  {
    id:'euro24_grA_hun_sui',
    local:'Hungría', visitante:'Suiza',
    resultado:'1-3', torneo:'Grupo A Euro 2024', fecha:'15 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:12,jugador:'Zakaria'},
    {equipo:'Hungría',minuto:66,jugador:'Varga'},
    {equipo:'Suiza',minuto:69,jugador:'Amdouni'},
    {equipo:'Suiza',minuto:90,jugador:'Freuler'}
  ]
  },
  {
    id:'euro24_grB_esp_cro',
    local:'España', visitante:'Croacia',
    resultado:'3-0', torneo:'Grupo B Euro 2024', fecha:'15 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:29,jugador:'Morata'},
    {equipo:'España',minuto:32,jugador:'Fabián Ruiz'},
    {equipo:'España',minuto:47,jugador:'Morata'}
  ]
  },
  {
    id:'euro24_grB_ita_alb',
    local:'Italia', visitante:'Albania',
    resultado:'2-1', torneo:'Grupo B Euro 2024', fecha:'15 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Albania',minuto:23,jugador:'Bajrami'},
    {equipo:'Italia',minuto:16,jugador:'Bastoni'},
    {equipo:'Italia',minuto:90,jugador:'Barella'}
  ]
  },
  {
    id:'euro24_grC_slo_den',
    local:'Eslovenia', visitante:'Dinamarca',
    resultado:'1-1', torneo:'Grupo C Euro 2024', fecha:'16 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovenia',minuto:17,jugador:'Šporar'},
    {equipo:'Dinamarca',minuto:93,jugador:'Eriksen'}
  ]
  },
  {
    id:'euro24_grC_ser_eng',
    local:'Serbia', visitante:'Inglaterra',
    resultado:'0-1', torneo:'Grupo C Euro 2024', fecha:'16 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:13,jugador:'Bellingham'}
  ]
  },
  {
    id:'euro24_grD_pol_ned',
    local:'Polonia', visitante:'Países Bajos',
    resultado:'1-2', torneo:'Grupo D Euro 2024', fecha:'16 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:16,jugador:'Gakpo'},
    {equipo:'Polonia',minuto:44,jugador:'Buksa'},
    {equipo:'Países Bajos',minuto:83,jugador:'Wijnaldum'}
  ]
  },
  {
    id:'euro24_grE_bel_slo',
    local:'Bélgica', visitante:'Eslovaquia',
    resultado:'0-1', torneo:'Grupo E Euro 2024', fecha:'17 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovaquia',minuto:7,jugador:'Schranz'}
  ]
  },
  {
    id:'euro24_grE_aut_fra',
    local:'Austria', visitante:'Francia',
    resultado:'0-1', torneo:'Grupo E Euro 2024', fecha:'17 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Austria',minuto:8,jugador:'Wober'}
  ]
  },
  {
    id:'euro24_grF_tur_geo',
    local:'Turquía', visitante:'Georgia',
    resultado:'3-1', torneo:'Grupo F Euro 2024', fecha:'18 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Turquía',minuto:25,jugador:'Akturkoglu'},
    {equipo:'Georgia',minuto:32,jugador:'Kvaratskhelia'},
    {equipo:'Turquía',minuto:59,jugador:'Bakasetas'},
    {equipo:'Turquía',minuto:65,jugador:'Yuksek'}
  ]
  },
  {
    id:'euro24_grF_por_cze',
    local:'Portugal', visitante:'Rep. Checa',
    resultado:'2-1', torneo:'Grupo F Euro 2024', fecha:'18 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Rep. Checa',minuto:69,jugador:'Provod'},
    {equipo:'Portugal',minuto:89,jugador:'Conceiçao'},
    {equipo:'Portugal',minuto:92,jugador:'Conceiçao'}
  ]
  },
  {
    id:'euro24_r16_esp_geo',
    local:'España', visitante:'Georgia',
    resultado:'4-1', torneo:'Octavos Euro 2024', fecha:'30 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Georgia',minuto:18,jugador:'Mikautadze'},
    {equipo:'España',minuto:39,jugador:'Fabian Ruiz'},
    {equipo:'España',minuto:60,jugador:'Olmo'},
    {equipo:'España',minuto:73,jugador:'Carvajal'},
    {equipo:'España',minuto:83,jugador:'Yamal'}
  ]
  },
  {
    id:'euro24_r16_fra_bel',
    local:'Francia', visitante:'Bélgica',
    resultado:'1-0', torneo:'Octavos Euro 2024', fecha:'1 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:85,jugador:'De Bruyne'}
  ]
  },
  {
    id:'euro24_r16_por_slo',
    local:'Portugal', visitante:'Eslovenia',
    resultado:'0-0 (p)', torneo:'Octavos Euro 2024', fecha:'1 Jul 2024',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'euro24_r16_aut_tur',
    local:'Austria', visitante:'Turquía',
    resultado:'1-2', torneo:'Octavos Euro 2024', fecha:'2 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Turquía',minuto:57,jugador:'Akturkoglu'},
    {equipo:'Austria',minuto:66,jugador:'Gregoritsch'},
    {equipo:'Turquía',minuto:90,jugador:'Demiral'}
  ]
  },
  {
    id:'euro24_qf_ned_tur',
    local:'Países Bajos', visitante:'Turquía',
    resultado:'2-1', torneo:'Cuartos Euro 2024', fecha:'6 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Turquía',minuto:35,jugador:'Akturkoglu'},
    {equipo:'Países Bajos',minuto:70,jugador:'Dumfries'},
    {equipo:'Países Bajos',minuto:76,jugador:'Morten'}
  ]
  },
  {
    id:'euro20_grA_ita_tur',
    local:'Italia', visitante:'Turquía',
    resultado:'3-0', torneo:'Grupo A Euro 2020', fecha:'11 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:53,jugador:'Demiral'},
    {equipo:'Italia',minuto:66,jugador:'Immobile'},
    {equipo:'Italia',minuto:79,jugador:'Insigne'}
  ]
  },
  {
    id:'euro20_grA_ita_gal',
    local:'Italia', visitante:'Gales',
    resultado:'1-0', torneo:'Grupo A Euro 2020', fecha:'20 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:39,jugador:'Pessina'}
  ]
  },
  {
    id:'euro20_grB_bel_rus',
    local:'Bélgica', visitante:'Rusia',
    resultado:'3-0', torneo:'Grupo B Euro 2020', fecha:'12 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:10,jugador:'Lukaku'},
    {equipo:'Bélgica',minuto:34,jugador:'Lukaku'},
    {equipo:'Bélgica',minuto:88,jugador:'Meunier'}
  ]
  },
  {
    id:'euro20_grC_ned_aut',
    local:'Países Bajos', visitante:'Austria',
    resultado:'2-0', torneo:'Grupo C Euro 2020', fecha:'17 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:11,jugador:'Depay'},
    {equipo:'Países Bajos',minuto:67,jugador:'Dumfries'}
  ]
  },
  {
    id:'euro20_grD_eng_cro',
    local:'Inglaterra', visitante:'Croacia',
    resultado:'1-0', torneo:'Grupo D Euro 2020', fecha:'13 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:57,jugador:'Bellingham'},
    {equipo:'Inglaterra',minuto:57,jugador:'Saka'}
  ]
  },
  {
    id:'euro20_grE_esp_slo',
    local:'España', visitante:'Eslovaquia',
    resultado:'5-0', torneo:'Grupo E Euro 2020', fecha:'23 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:8,jugador:'Dubravka'},
    {equipo:'España',minuto:30,jugador:'Sarabia'},
    {equipo:'España',minuto:67,jugador:'Laporte'},
    {equipo:'España',minuto:70,jugador:'Ferran Torres'},
    {equipo:'España',minuto:71,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'euro20_grF_fra_ale',
    local:'Francia', visitante:'Alemania',
    resultado:'1-0', torneo:'Grupo F Euro 2020', fecha:'15 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:20,jugador:'Hummels'}
  ]
  },
  {
    id:'euro20_grF_hun_fra',
    local:'Hungría', visitante:'Francia',
    resultado:'1-1', torneo:'Grupo F Euro 2020', fecha:'19 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Hungría',minuto:45,jugador:'Fiola'},
    {equipo:'Francia',minuto:66,jugador:'Griezmann'}
  ]
  },
  {
    id:'euro20_r16_fra_sui',
    local:'Francia', visitante:'Suiza',
    resultado:'3-3 (p)', torneo:'Octavos Euro 2020', fecha:'28 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:15,jugador:'Seferović'},
    {equipo:'Francia',minuto:57,jugador:'Benzema'},
    {equipo:'Francia',minuto:59,jugador:'Benzema'},
    {equipo:'Suiza',minuto:75,jugador:'Seferović'},
    {equipo:'Francia',minuto:81,jugador:'Pogba'},
    {equipo:'Suiza',minuto:90,jugador:'Gavranovic'}
  ]
  },
  {
    id:'euro20_r16_bel_por',
    local:'Bélgica', visitante:'Portugal',
    resultado:'1-0', torneo:'Octavos Euro 2020', fecha:'27 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:42,jugador:'Thorgan Hazard'}
  ]
  },
  {
    id:'euro20_r16_cze_ned',
    local:'Rep. Checa', visitante:'Países Bajos',
    resultado:'0-2', torneo:'Octavos Euro 2020', fecha:'27 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:68,jugador:'Dumfries'},
    {equipo:'Países Bajos',minuto:85,jugador:'Holes'}
  ]
  },
  {
    id:'euro20_semi_eng_den',
    local:'Inglaterra', visitante:'Dinamarca',
    resultado:'2-1', torneo:'Semifinal Euro 2020', fecha:'7 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:30,jugador:'Damsgaard'},
    {equipo:'Inglaterra',minuto:39,jugador:'Kjær'},
    {equipo:'Inglaterra',minuto:104,jugador:'Kane'}
  ]
  },
  {
    id:'euro20_semi_ita_esp',
    local:'Italia', visitante:'España',
    resultado:'1-1 (p)', torneo:'Semifinal Euro 2020', fecha:'6 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:60,jugador:'Chiesa'},
    {equipo:'España',minuto:80,jugador:'Morata'}
  ]
  },
  {
    id:'euro16_grA_fra_rom',
    local:'Francia', visitante:'Rumanía',
    resultado:'2-1', torneo:'Grupo A Euro 2016', fecha:'10 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Rumanía',minuto:65,jugador:'Stancu'},
    {equipo:'Francia',minuto:57,jugador:'Giroud'},
    {equipo:'Francia',minuto:89,jugador:'Payet'}
  ]
  },
  {
    id:'euro16_grB_slo_wal',
    local:'Eslovaquia', visitante:'Gales',
    resultado:'2-1', torneo:'Grupo B Euro 2016', fecha:'11 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovaquia',minuto:50,jugador:'Weiss'},
    {equipo:'Gales',minuto:61,jugador:'Robson-Kanu'},
    {equipo:'Eslovaquia',minuto:82,jugador:'Duda'}
  ]
  },
  {
    id:'euro16_grC_ger_pol',
    local:'Alemania', visitante:'Polonia',
    resultado:'0-0', torneo:'Grupo C Euro 2016', fecha:'16 Jun 2016',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'euro16_grD_cro_tur',
    local:'Croacia', visitante:'Turquía',
    resultado:'1-0', torneo:'Grupo D Euro 2016', fecha:'12 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:41,jugador:'Modrić'}
  ]
  },
  {
    id:'euro16_r16_wal_nie',
    local:'Gales', visitante:'Irlanda del Norte',
    resultado:'1-0', torneo:'Octavos Euro 2016', fecha:'25 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Gales',minuto:75,jugador:'McAuley'}
  ]
  },
  {
    id:'euro16_qf_wal_bel',
    local:'Gales', visitante:'Bélgica',
    resultado:'3-1', torneo:'Cuartos Euro 2016', fecha:'1 Jul 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Gales',minuto:6,jugador:'Williams'},
    {equipo:'Bélgica',minuto:13,jugador:'Nainggolan'},
    {equipo:'Gales',minuto:55,jugador:'Robson-Kanu'},
    {equipo:'Gales',minuto:86,jugador:'Vokes'}
  ]
  },
  {
    id:'euro16_qf_ger_ita',
    local:'Alemania', visitante:'Italia',
    resultado:'2-1', torneo:'Cuartos Euro 2016', fecha:'2 Jul 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:65,jugador:'Bonucci'},
    {equipo:'Alemania',minuto:65,jugador:'Özil'},
    {equipo:'Alemania',minuto:92,jugador:'Hector'}
  ]
  },
  {
    id:'euro12_grA_pol_gre',
    local:'Polonia', visitante:'Grecia',
    resultado:'1-1', torneo:'Grupo A Euro 2012', fecha:'8 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Polonia',minuto:17,jugador:'Lewandowski'},
    {equipo:'Grecia',minuto:51,jugador:'Karagounis'}
  ]
  },
  {
    id:'euro12_grA_cze_rus',
    local:'Rep. Checa', visitante:'Rusia',
    resultado:'1-4', torneo:'Grupo A Euro 2012', fecha:'8 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Rusia',minuto:15,jugador:'Dzagoev'},
    {equipo:'Rusia',minuto:29,jugador:'Dzagoev'},
    {equipo:'Rep. Checa',minuto:39,jugador:'Pilar'},
    {equipo:'Rusia',minuto:55,jugador:'Shirokov'},
    {equipo:'Rusia',minuto:72,jugador:'Pavlyuchenko'}
  ]
  },
  {
    id:'euro12_grB_ned_den',
    local:'Países Bajos', visitante:'Dinamarca',
    resultado:'0-1', torneo:'Grupo B Euro 2012', fecha:'9 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:24,jugador:'Krohn-Dehli'}
  ]
  },
  {
    id:'euro12_grD_fra_eng',
    local:'Francia', visitante:'Inglaterra',
    resultado:'1-1', torneo:'Grupo D Euro 2012', fecha:'11 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:30,jugador:'Nasri'},
    {equipo:'Inglaterra',minuto:39,jugador:'Lescott'}
  ]
  },
  {
    id:'euro08_grC_ned_fra',
    local:'Países Bajos', visitante:'Francia',
    resultado:'4-1', torneo:'Grupo C Euro 2008', fecha:'13 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:9,jugador:'Van Nistelrooy'},
    {equipo:'Países Bajos',minuto:26,jugador:'Sneijder'},
    {equipo:'Países Bajos',minuto:59,jugador:'Van Nistelrooy'},
    {equipo:'Francia',minuto:72,jugador:'Ribéry'},
    {equipo:'Países Bajos',minuto:79,jugador:'Robben'}
  ]
  },
  {
    id:'euro08_grD_cro_ale',
    local:'Croacia', visitante:'Alemania',
    resultado:'2-1', torneo:'Grupo D Euro 2008', fecha:'12 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:24,jugador:'Podolski'},
    {equipo:'Croacia',minuto:62,jugador:'Srna'},
    {equipo:'Croacia',minuto:79,jugador:'Olić'}
  ]
  },
  {
    id:'pl_che_ars_2006',
    local:'Chelsea', visitante:'Arsenal',
    resultado:'2-0', torneo:'Premier League 2005-06', fecha:'10 Dic 2005',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:72,jugador:'Drogba'},
    {equipo:'Chelsea',minuto:80,jugador:'Lampard'}
  ]
  },
  {
    id:'pl_man_tot_4_2_2022',
    local:'Manchester City', visitante:'Tottenham',
    resultado:'4-2', torneo:'Premier League 2022-23', fecha:'25 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:2,jugador:'Julián Álvarez'},
    {equipo:'Manchester City',minuto:20,jugador:'Gündogan'},
    {equipo:'Tottenham',minuto:27,jugador:'Kane'},
    {equipo:'Tottenham',minuto:55,jugador:'Heung-min Son'},
    {equipo:'Manchester City',minuto:76,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:79,jugador:'Erling Haaland'}
  ]
  },
  {
    id:'pl_man_ful_7_0',
    local:'Manchester City', visitante:'Fulham',
    resultado:'4-1', torneo:'Premier League 2022-23', fecha:'6 Ene 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:24,jugador:'Foden'},
    {equipo:'Manchester City',minuto:38,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:59,jugador:'Foden'},
    {equipo:'Fulham',minuto:64,jugador:'Wilson'},
    {equipo:'Manchester City',minuto:90,jugador:'Mahrez'}
  ]
  },
  {
    id:'pl_liv_man_5_0_2021',
    local:'Liverpool', visitante:'Manchester United',
    resultado:'5-0', torneo:'Premier League 2021-22', fecha:'24 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:5,jugador:'Keita'},
    {equipo:'Liverpool',minuto:13,jugador:'Diogo Jota'},
    {equipo:'Liverpool',minuto:38,jugador:'Salah'},
    {equipo:'Liverpool',minuto:50,jugador:'Salah'},
    {equipo:'Liverpool',minuto:58,jugador:'Salah'}
  ]
  },
  {
    id:'pl_ars_lut_5_0',
    local:'Arsenal', visitante:'Luton Town',
    resultado:'4-3', torneo:'Premier League 2023-24', fecha:'3 Nov 2023',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:25,jugador:'Havertz'},
    {equipo:'Arsenal',minuto:28,jugador:'Rice'},
    {equipo:'Luton Town',minuto:45,jugador:'Clark'},
    {equipo:'Arsenal',minuto:50,jugador:'Trossard'},
    {equipo:'Luton Town',minuto:55,jugador:'Morris'},
    {equipo:'Arsenal',minuto:60,jugador:'Saka'},
    {equipo:'Luton Town',minuto:66,jugador:'Adebayo'}
  ]
  },
  {
    id:'pl_che_man_0_4',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'0-4', torneo:'Premier League 2021-22', fecha:'25 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:5,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:53,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:57,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:69,jugador:'Grealish'}
  ]
  },
  {
    id:'pl_tot_5_0_2022_cn',
    local:'Tottenham', visitante:'Everton',
    resultado:'5-0', torneo:'Premier League 2022-23', fecha:'15 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:26,jugador:'Kane'},
    {equipo:'Tottenham',minuto:38,jugador:'Kane'},
    {equipo:'Tottenham',minuto:52,jugador:'Richarlison'},
    {equipo:'Tottenham',minuto:64,jugador:'Hojbjerg'},
    {equipo:'Tottenham',minuto:73,jugador:'Dávinson Sánchez'}
  ]
  },
  {
    id:'pl_bur_bri_5_1',
    local:'Brighton', visitante:'Crystal Palace',
    resultado:'4-0', torneo:'Premier League 2022-23', fecha:'14 Aug 2022',
    tipo:'club',
    goles:[
    {equipo:'Brighton',minuto:12,jugador:'Gross'},
    {equipo:'Brighton',minuto:27,jugador:'Welbeck'},
    {equipo:'Brighton',minuto:34,jugador:'Trossard'},
    {equipo:'Brighton',minuto:86,jugador:'Trossard'}
  ]
  },
  {
    id:'pl_man_bri_4_0_2021',
    local:'Manchester City', visitante:'Brighton',
    resultado:'4-1', torneo:'Premier League 2020-21', fecha:'23 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:5,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:10,jugador:'Gündogan'},
    {equipo:'Brighton',minuto:40,jugador:'Maupay'},
    {equipo:'Manchester City',minuto:53,jugador:'Fern Torres'},
    {equipo:'Manchester City',minuto:58,jugador:'Gabriel Jesus'}
  ]
  },
  {
    id:'pl_man_not_6_0',
    local:'Manchester City', visitante:'Nottingham Forest',
    resultado:'6-0', torneo:'Premier League 2022-23', fecha:'4 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:9,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:21,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:31,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:42,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:50,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:65,jugador:'Erling Haaland'}
  ]
  },
  {
    id:'pl_liv_man_4_1_2021_r',
    local:'Liverpool', visitante:'Manchester United',
    resultado:'4-0', torneo:'Premier League 2021-22', fecha:'24 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:5,jugador:'Keita'},
    {equipo:'Liverpool',minuto:13,jugador:'Jota'},
    {equipo:'Liverpool',minuto:38,jugador:'Salah'},
    {equipo:'Liverpool',minuto:50,jugador:'Salah'}
  ]
  },
  {
    id:'pl_ars_tot_3_1_2024',
    local:'Arsenal', visitante:'Tottenham',
    resultado:'3-2', torneo:'Premier League 2023-24', fecha:'28 Apr 2024',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:10,jugador:'Saka'},
    {equipo:'Arsenal',minuto:27,jugador:'Trossard'},
    {equipo:'Tottenham',minuto:50,jugador:'Son'},
    {equipo:'Tottenham',minuto:60,jugador:'Romero'},
    {equipo:'Arsenal',minuto:79,jugador:'Havertz'}
  ]
  },
  {
    id:'pl_ars_man_2002',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'3-1', torneo:'Premier League 2001-02', fecha:'9 Mar 2002',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:55,jugador:'Wiltord'},
    {equipo:'Manchester United',minuto:57,jugador:'Van Nistelrooy'},
    {equipo:'Arsenal',minuto:65,jugador:'Henry'},
    {equipo:'Arsenal',minuto:68,jugador:'Lauren'}
  ]
  },
  {
    id:'pl_liv_ars_2001',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'4-2', torneo:'Premier League 2000-01', fecha:'28 Oct 2000',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:16,jugador:'Heskey'},
    {equipo:'Arsenal',minuto:23,jugador:'Pires'},
    {equipo:'Liverpool',minuto:44,jugador:'Gerrard'},
    {equipo:'Liverpool',minuto:64,jugador:'Fowler'},
    {equipo:'Arsenal',minuto:79,jugador:'Ljungberg'},
    {equipo:'Liverpool',minuto:90,jugador:'Fowler'}
  ]
  },
  {
    id:'pl_man_tot_4_0_2003',
    local:'Manchester United', visitante:'Tottenham',
    resultado:'4-0', torneo:'Premier League 2002-03', fecha:'18 Jan 2003',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:26,jugador:'Van Nistelrooy'},
    {equipo:'Manchester United',minuto:48,jugador:'Forlan'},
    {equipo:'Manchester United',minuto:67,jugador:'Forlan'},
    {equipo:'Manchester United',minuto:82,jugador:'Scholes'}
  ]
  },
  {
    id:'pl_che_man_1_0_2005',
    local:'Chelsea', visitante:'Manchester United',
    resultado:'3-1', torneo:'Premier League 2004-05', fecha:'3 Nov 2004',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:27,jugador:'Tiago'},
    {equipo:'Chelsea',minuto:39,jugador:'Lampard'},
    {equipo:'Manchester United',minuto:75,jugador:'Rooney'},
    {equipo:'Chelsea',minuto:88,jugador:'Cole'}
  ]
  },
  {
    id:'pl_man_bla_7_1',
    local:'Manchester United', visitante:'Blackburn',
    resultado:'7-1', torneo:'Premier League 2010-11', fecha:'27 Nov 2010',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:2,jugador:'Berbatov'},
    {equipo:'Manchester United',minuto:29,jugador:'Berbatov'},
    {equipo:'Blackburn',minuto:40,jugador:'Roberts'},
    {equipo:'Manchester United',minuto:49,jugador:'Berbatov'},
    {equipo:'Manchester United',minuto:50,jugador:'Park'},
    {equipo:'Manchester United',minuto:63,jugador:'Berbatov'},
    {equipo:'Manchester United',minuto:72,jugador:'Giggs'},
    {equipo:'Manchester United',minuto:85,jugador:'Berbatov'}
  ]
  },
  {
    id:'copa2011_uru_arg_qf',
    local:'Uruguay', visitante:'Argentina',
    resultado:'5-4 (p)', torneo:'Cuartos Copa América 2011', fecha:'16 Jul 2011',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:41,jugador:'Forlán'}
  ]
  },
  {
    id:'copa2016_arg_chi_sf',
    local:'Argentina', visitante:'Chile',
    resultado:'2-1', torneo:'Semifinal Copa América 2016', fecha:'26 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:45,jugador:'Meza'},
    {equipo:'Chile',minuto:55,jugador:'Aranguiz'},
    {equipo:'Argentina',minuto:90,jugador:'Higuain'}
  ]
  },
  {
    id:'copa2019_uru_chi_qf',
    local:'Uruguay', visitante:'Chile',
    resultado:'1-0', torneo:'Cuartos Copa América 2019', fecha:'29 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:57,jugador:'Suárez'}
  ]
  },
  {
    id:'copa2021_col_uru_sf',
    local:'Colombia', visitante:'Uruguay',
    resultado:'0-0 (p)', torneo:'Semifinal Copa América 2021', fecha:'3 Jul 2021',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'copa2024_uru_bra_qf',
    local:'Uruguay', visitante:'Brasil',
    resultado:'0-0 (p)', torneo:'Cuartos Copa América 2024', fecha:'6 Jul 2024',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'copa2024_arg_can_gr',
    local:'Argentina', visitante:'Canadá',
    resultado:'2-0', torneo:'Grupo Copa América 2024', fecha:'20 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:22,jugador:'Messi'},
    {equipo:'Argentina',minuto:87,jugador:'Julián Álvarez'}
  ]
  },
  {
    id:'copa2024_bra_col_gr',
    local:'Brasil', visitante:'Colombia',
    resultado:'1-1', torneo:'Grupo Copa América 2024', fecha:'2 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:34,jugador:'Savinho'},
    {equipo:'Colombia',minuto:49,jugador:'Díaz'}
  ]
  },
  {
    id:'copa2024_col_pan_sf',
    local:'Colombia', visitante:'Panamá',
    resultado:'5-0', torneo:'Semifinal Copa América 2024', fecha:'9 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:35,jugador:'Luis Díaz'},
    {equipo:'Colombia',minuto:39,jugador:'Córdoba'},
    {equipo:'Colombia',minuto:57,jugador:'Córdoba'},
    {equipo:'Colombia',minuto:71,jugador:'Sinisterra'},
    {equipo:'Colombia',minuto:80,jugador:'Díaz'}
  ]
  },
  {
    id:'elim_arg_bol_3_0_2021',
    local:'Argentina', visitante:'Bolivia',
    resultado:'3-0', torneo:'Eliminatorias 2026 Sudamérica', fecha:'9 Sep 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:20,jugador:'Lautaro Martínez'},
    {equipo:'Argentina',minuto:73,jugador:'Messi'},
    {equipo:'Argentina',minuto:79,jugador:'Messi'}
  ]
  },
  {
    id:'elim_bra_arg_0_0_2021',
    local:'Brasil', visitante:'Argentina',
    resultado:'0-0', torneo:'Eliminatorias 2026 Sudamérica', fecha:'5 Sep 2021',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'elim_uru_arg_1_3',
    local:'Uruguay', visitante:'Argentina',
    resultado:'0-3', torneo:'Eliminatorias 2026 Sudamérica', fecha:'12 Nov 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:17,jugador:'Otamendi'},
    {equipo:'Argentina',minuto:48,jugador:'Lautaro'},
    {equipo:'Argentina',minuto:67,jugador:'Messi'}
  ]
  },
  {
    id:'nl_por_fra_3_2_2019',
    local:'Portugal', visitante:'Francia',
    resultado:'1-0', torneo:'Final Nations League 2019', fecha:'9 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:25,jugador:'Guedes'}
  ]
  },
  {
    id:'nl_esp_ita_2_1_2021',
    local:'España', visitante:'Italia',
    resultado:'2-1', torneo:'Semifinal Nations League 2021', fecha:'6 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:17,jugador:'Ferran Torres'},
    {equipo:'España',minuto:83,jugador:'Bonucci'},
    {equipo:'España',minuto:91,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'nl_fra_esp_2_1_2021',
    local:'Francia', visitante:'España',
    resultado:'2-1', torneo:'Final Nations League 2021', fecha:'10 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:64,jugador:'Oyarzabal'},
    {equipo:'Francia',minuto:66,jugador:'Benzema'},
    {equipo:'Francia',minuto:80,jugador:'Mbappé'}
  ]
  },
  {
    id:'nl_ned_fra_4_0_2023',
    local:'Países Bajos', visitante:'Francia',
    resultado:'4-0', torneo:'Grupo Nations League 2023', fecha:'24 Mar 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:7,jugador:'Memphis Depay'},
    {equipo:'Países Bajos',minuto:31,jugador:'Memphis Depay'},
    {equipo:'Países Bajos',minuto:52,jugador:'Daley Blind'},
    {equipo:'Países Bajos',minuto:74,jugador:'Donyell Malen'}
  ]
  },
  {
    id:'nl_ger_esp_1_2_2023',
    local:'Alemania', visitante:'España',
    resultado:'1-2', torneo:'Grupo Nations League 2023', fecha:'27 Sep 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:21,jugador:'Gavi'},
    {equipo:'Alemania',minuto:67,jugador:'Goretzka'},
    {equipo:'España',minuto:89,jugador:'Morata'}
  ]
  },
  {
    id:'conf2017_ger_chi_final',
    local:'Alemania', visitante:'Chile',
    resultado:'1-0', torneo:'Final Confederaciones 2017', fecha:'2 Jul 2017',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:20,jugador:'Stindl'}
  ]
  },
  {
    id:'conf2017_ger_mex_semi',
    local:'Alemania', visitante:'México',
    resultado:'4-1', torneo:'Semifinal Confederaciones 2017', fecha:'29 Jun 2017',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:5,jugador:'Stindl'},
    {equipo:'Alemania',minuto:59,jugador:'Kimmich'},
    {equipo:'Alemania',minuto:62,jugador:'Werner'},
    {equipo:'México',minuto:89,jugador:'Chicharito'},
    {equipo:'Alemania',minuto:90,jugador:'Rudy'}
  ]
  },
  {
    id:'conf2009_bra_usa_final',
    local:'Brasil', visitante:'Estados Unidos',
    resultado:'3-2', torneo:'Final Confederaciones 2009', fecha:'28 Jun 2009',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:10,jugador:'Dempsey'},
    {equipo:'Estados Unidos',minuto:27,jugador:'Donovan'},
    {equipo:'Brasil',minuto:46,jugador:'Luís Fabiano'},
    {equipo:'Brasil',minuto:84,jugador:'Luís Fabiano'},
    {equipo:'Brasil',minuto:88,jugador:'Lúcio'}
  ]
  },
  {
    id:'cwc2022_rm_liv_3_1',
    local:'Real Madrid', visitante:'Liverpool',
    resultado:'3-1', torneo:'Final Mundial Clubes 2022', fecha:'11 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:19,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:33,jugador:'Vinicius'},
    {equipo:'Liverpool',minuto:67,jugador:'Gabi Magalhães'},
    {equipo:'Real Madrid',minuto:73,jugador:'Vinicius'}
  ]
  },
  {
    id:'cwc2019_liv_fla_1_0',
    local:'Liverpool', visitante:'Flamengo',
    resultado:'1-0', torneo:'Final Mundial Clubes 2019', fecha:'21 Dic 2019',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:99,jugador:'Firmino'}
  ]
  },
  {
    id:'cwc2021_chel_pal_2_1',
    local:'Chelsea', visitante:'Palmeiras',
    resultado:'2-1', torneo:'Final Mundial Clubes 2022', fecha:'12 Feb 2022',
    tipo:'club',
    goles:[
    {equipo:'Palmeiras',minuto:54,jugador:'Raphael Veiga'},
    {equipo:'Chelsea',minuto:90,jugador:'Havertz'},
    {equipo:'Chelsea',minuto:116,jugador:'Havertz'}
  ]
  },
  {
    id:'sc_liv_che_2019',
    local:'Liverpool', visitante:'Chelsea',
    resultado:'2-2 (p)', torneo:'Supercopa UEFA 2019', fecha:'14 Ago 2019',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:36,jugador:'Mané'},
    {equipo:'Chelsea',minuto:36,jugador:'Giroud'},
    {equipo:'Liverpool',minuto:95,jugador:'Mané'},
    {equipo:'Chelsea',minuto:101,jugador:'Abraham'}
  ]
  },
  {
    id:'sc_man_vil_1_1',
    local:'Manchester United', visitante:'Villarreal',
    resultado:'1-1 (p)', torneo:'Supercopa UEFA 2021', fecha:'11 Ago 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:55,jugador:'Telles'},
    {equipo:'Villarreal',minuto:73,jugador:'Moreno'}
  ]
  },
  {
    id:'sc_rm_ein_2_0',
    local:'Real Madrid', visitante:'Eintracht',
    resultado:'2-0', torneo:'Supercopa UEFA 2022', fecha:'10 Ago 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:37,jugador:'Alaba'},
    {equipo:'Real Madrid',minuto:65,jugador:'Benzema'}
  ]
  },
  {
    id:'ecl_fio_whu_1_2',
    local:'Fiorentina', visitante:'West Ham',
    resultado:'1-2', torneo:'Final Conference League 2023', fecha:'7 Jun 2023',
    tipo:'club',
    goles:[
    {equipo:'West Ham',minuto:30,jugador:'Bowen'},
    {equipo:'West Ham',minuto:62,jugador:'Fornals'},
    {equipo:'Fiorentina',minuto:74,jugador:'Gonzalez'}
  ]
  },
  {
    id:'ecl_rom_fen_1_0',
    local:'Roma', visitante:'Feyenoord',
    resultado:'1-0', torneo:'Final Conference League 2022', fecha:'25 May 2022',
    tipo:'club',
    goles:[
    {equipo:'Roma',minuto:32,jugador:'Zaniolo'}
  ]
  },
  {
    id:'lib2019_fla_riv_2_1',
    local:'Flamengo', visitante:'River Plate',
    resultado:'2-1', torneo:'Final Copa Libertadores 2019', fecha:'23 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'River Plate',minuto:82,jugador:'Rafael Borré'},
    {equipo:'Flamengo',minuto:89,jugador:'Gabigol'},
    {equipo:'Flamengo',minuto:90,jugador:'Gabigol'}
  ]
  },
  {
    id:'lib2022_fla_ath_1_0',
    local:'Flamengo', visitante:'Athletico PR',
    resultado:'1-0', torneo:'Final Copa Libertadores 2022', fecha:'29 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Flamengo',minuto:89,jugador:'Gabigol'}
  ]
  },
  {
    id:'fa_liv_chel_2012',
    local:'Liverpool', visitante:'Chelsea',
    resultado:'2-1', torneo:'Final FA Cup 2012', fecha:'5 May 2012',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:25,jugador:'Carroll'},
    {equipo:'Chelsea',minuto:52,jugador:'Ramires'},
    {equipo:'Liverpool',minuto:64,jugador:'Carroll'}
  ]
  },
  {
    id:'fa_ars_che_2017',
    local:'Arsenal', visitante:'Chelsea',
    resultado:'2-1', torneo:'Final FA Cup 2017', fecha:'27 May 2017',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:4,jugador:'Sánchez'},
    {equipo:'Arsenal',minuto:49,jugador:'Alexis Sánchez'},
    {equipo:'Arsenal',minuto:79,jugador:'Ramsey'}
  ]
  },
  {
    id:'fa_man_wat_6_0_2019',
    local:'Manchester City', visitante:'Watford',
    resultado:'6-0', torneo:'Final FA Cup 2019', fecha:'18 May 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:26,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:38,jugador:'David Silva'},
    {equipo:'Manchester City',minuto:50,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:59,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:68,jugador:'Sterling'},
    {equipo:'Manchester City',minuto:81,jugador:'Sterling'}
  ]
  },
  {
    id:'fa_lei_che_1_0_2021',
    local:'Leicester City', visitante:'Chelsea',
    resultado:'1-0', torneo:'Final FA Cup 2021', fecha:'15 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Leicester City',minuto:63,jugador:'Tielemans'}
  ]
  },
  {
    id:'liga_rm_val_4_2_2002',
    local:'Real Madrid', visitante:'Valencia',
    resultado:'4-2', torneo:'LaLiga 2001-02', fecha:'4 Nov 2001',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:15,jugador:'Figo'},
    {equipo:'Valencia',minuto:20,jugador:'Baraja'},
    {equipo:'Real Madrid',minuto:29,jugador:'Ronaldo'},
    {equipo:'Valencia',minuto:45,jugador:'Aimar'},
    {equipo:'Real Madrid',minuto:57,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:83,jugador:'Zidane'}
  ]
  },
  {
    id:'liga_bar_rm_5_1_2001',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'5-0', torneo:'LaLiga 2000-01', fecha:'3 Mar 2001',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:7,jugador:'Saviola'},
    {equipo:'Barcelona',minuto:26,jugador:'Rivaldo'},
    {equipo:'Barcelona',minuto:42,jugador:'Xavi'},
    {equipo:'Barcelona',minuto:55,jugador:'Gerard'},
    {equipo:'Barcelona',minuto:82,jugador:'Rivaldo'}
  ]
  },
  {
    id:'liga_rm_bar_4_3_2003',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'4-3', torneo:'LaLiga 2002-03', fecha:'9 Nov 2002',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:3,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:15,jugador:'Kluivert'},
    {equipo:'Real Madrid',minuto:23,jugador:'Raúl'},
    {equipo:'Barcelona',minuto:39,jugador:'Riquelme'},
    {equipo:'Real Madrid',minuto:52,jugador:'Zidane'},
    {equipo:'Barcelona',minuto:77,jugador:'Xavi'},
    {equipo:'Real Madrid',minuto:87,jugador:'Ronaldo'}
  ]
  },
  {
    id:'liga_bar_rm_2_0_2011',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-0', torneo:'Copa del Rey 2011', fecha:'20 Abr 2011',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:55,jugador:'Pedro'},
    {equipo:'Barcelona',minuto:60,jugador:'Dani Alves'}
  ]
  },
  {
    id:'liga_atl_rm_1_0_2014',
    local:'Atlético de Madrid', visitante:'Real Madrid',
    resultado:'1-0', torneo:'LaLiga 2013-14', fecha:'17 May 2014',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:74,jugador:'Diego Costa'}
  ]
  },
  {
    id:'liga_atl_che_2014_ucl',
    local:'Atlético de Madrid', visitante:'Chelsea',
    resultado:'3-1', torneo:'Semifinal Champions 2014 (vuelta)', fecha:'30 Abr 2014',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:36,jugador:'Adrián López'},
    {equipo:'Atlético de Madrid',minuto:60,jugador:'Diego'},
    {equipo:'Chelsea',minuto:72,jugador:'Torres'},
    {equipo:'Atlético de Madrid',minuto:98,jugador:'Tiago'}
  ]
  },
  {
    id:'liga_rm_sev_4_0_2017',
    local:'Real Madrid', visitante:'Sevilla',
    resultado:'4-1', torneo:'Supercopa España 2017', fecha:'13 Ago 2017',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:22,jugador:'Modrić'},
    {equipo:'Sevilla',minuto:55,jugador:'Muriel'},
    {equipo:'Real Madrid',minuto:77,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:80,jugador:'Marco Asensio'}
  ]
  },
  {
    id:'liga_bar_val_5_1_2019_cup',
    local:'Barcelona', visitante:'Valencia',
    resultado:'2-1', torneo:'Final Copa del Rey 2019', fecha:'25 May 2019',
    tipo:'club',
    goles:[
    {equipo:'Valencia',minuto:25,jugador:'Gameiro'},
    {equipo:'Barcelona',minuto:45,jugador:'Messi'},
    {equipo:'Valencia',minuto:52,jugador:'Rodrigo'}
  ]
  },
  {
    id:'liga_rm_jua_7_3',
    local:'Real Madrid', visitante:'Athletic Club',
    resultado:'4-2', torneo:'Supercopa España 2022', fecha:'16 Ene 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:25,jugador:'Benzema'},
    {equipo:'Athletic Club',minuto:31,jugador:'Berenguer'},
    {equipo:'Athletic Club',minuto:37,jugador:'Williams'},
    {equipo:'Real Madrid',minuto:62,jugador:'Asensio'},
    {equipo:'Real Madrid',minuto:74,jugador:'Valverde'},
    {equipo:'Real Madrid',minuto:90,jugador:'Benzema'}
  ]
  },
  {
    id:'liga_bar_esp_4_2_2023',
    local:'Barcelona', visitante:'Espanyol',
    resultado:'4-2', torneo:'LaLiga 2022-23', fecha:'31 Dic 2022',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:6,jugador:'Gavi'},
    {equipo:'Barcelona',minuto:22,jugador:'Lewandowski'},
    {equipo:'Barcelona',minuto:44,jugador:'Lewandowski'},
    {equipo:'Espanyol',minuto:59,jugador:'Braithwaite'},
    {equipo:'Espanyol',minuto:75,jugador:'Calero'},
    {equipo:'Barcelona',minuto:82,jugador:'Raphinha'}
  ]
  },
  {
    id:'liga_rm_rma_5_2_2024',
    local:'Real Madrid', visitante:'RCD Mallorca',
    resultado:'4-0', torneo:'LaLiga 2023-24', fecha:'3 Feb 2024',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:4,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:41,jugador:'Vinicius'},
    {equipo:'Real Madrid',minuto:59,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:85,jugador:'Brahim'}
  ]
  },
  {
    id:'liga_rm_las_7_0',
    local:'Real Madrid', visitante:'Celta Vigo',
    resultado:'7-1', torneo:'LaLiga 2015-16', fecha:'6 Mar 2016',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:6,jugador:'Ronaldo'},
    {equipo:'Celta Vigo',minuto:17,jugador:'Iago Aspas'},
    {equipo:'Real Madrid',minuto:27,jugador:'Bale'},
    {equipo:'Real Madrid',minuto:35,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:43,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:61,jugador:'Bale'},
    {equipo:'Real Madrid',minuto:82,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:88,jugador:'Modrić'}
  ]
  },
  {
    id:'liga_bar_gra_5_0',
    local:'Barcelona', visitante:'Granada',
    resultado:'4-0', torneo:'LaLiga 2020-21', fecha:'29 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:33,jugador:'Messi'},
    {equipo:'Barcelona',minuto:45,jugador:'Mingueza'},
    {equipo:'Barcelona',minuto:60,jugador:'Dest'},
    {equipo:'Barcelona',minuto:71,jugador:'Messi'}
  ]
  },
  {
    id:'cdr_bar_sev_2_0_2015',
    local:'Barcelona', visitante:'Sevilla',
    resultado:'3-1', torneo:'Semifinal Copa del Rey 2015', fecha:'4 Feb 2015',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:20,jugador:'Messi'},
    {equipo:'Sevilla',minuto:45,jugador:'Reyes'},
    {equipo:'Barcelona',minuto:56,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:77,jugador:'Messi'}
  ]
  },
  {
    id:'cdr_sev_bar_2_0_2016',
    local:'Sevilla', visitante:'Barcelona',
    resultado:'2-0', torneo:'Copa del Rey 2016-17', fecha:'23 Ene 2017',
    tipo:'club',
    goles:[
    {equipo:'Sevilla',minuto:11,jugador:'Vietto'},
    {equipo:'Sevilla',minuto:56,jugador:'Ben Yedder'}
  ]
  },
  {
    id:'bund_bay_man_4_0_ucl',
    local:'Bayern Munich', visitante:'Manchester United',
    resultado:'3-1', torneo:'Octavos Champions 2014 (vuelta)', fecha:'19 Mar 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:67,jugador:'Mario Mandzukic'},
    {equipo:'Manchester United',minuto:58,jugador:'Patrice Evra'},
    {equipo:'Bayern Munich',minuto:69,jugador:'Thomas Muller'},
    {equipo:'Bayern Munich',minuto:79,jugador:'Thomas Muller'}
  ]
  },
  {
    id:'bund_dor_rm_4_1_2013',
    local:'Borussia Dortmund', visitante:'Real Madrid',
    resultado:'4-1', torneo:'Semifinal Champions 2013 (ida)', fecha:'24 Abr 2013',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:8,jugador:'Robert Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:50,jugador:'Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:55,jugador:'Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:67,jugador:'Lewandowski'},
    {equipo:'Real Madrid',minuto:82,jugador:'Karim Benzema'}
  ]
  },
  {
    id:'bund_bay_aug_5_1_2022',
    local:'Bayern Munich', visitante:'Borussia Mönchengladbach',
    resultado:'5-1', torneo:'Bundesliga 2021-22', fecha:'7 Ago 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:16,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:22,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:41,jugador:'Müller'},
    {equipo:'Borussia Mönchengladbach',minuto:55,jugador:'Plea'},
    {equipo:'Bayern Munich',minuto:60,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:84,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund_lei_bay_2024_all',
    local:'Bayer Leverkusen', visitante:'Bayern Munich',
    resultado:'2-2', torneo:'DFB Pokal Final 2024', fecha:'25 May 2024',
    tipo:'club',
    goles:[
    {equipo:'Bayer Leverkusen',minuto:13,jugador:'Hofmann'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Müller'},
    {equipo:'Bayer Leverkusen',minuto:73,jugador:'Tella'},
    {equipo:'Bayern Munich',minuto:85,jugador:'Goretzka'}
  ]
  },
  {
    id:'sa_juve_nap_5_1_2021',
    local:'Juventus', visitante:'Nápoles',
    resultado:'2-1', torneo:'Serie A 2020-21', fecha:'7 Feb 2021',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:13,jugador:'Cristiano Ronaldo'},
    {equipo:'Nápoles',minuto:63,jugador:'Zielinski'},
    {equipo:'Juventus',minuto:77,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'sa_int_ata_5_1_2022',
    local:'Inter de Milán', visitante:'Atalanta',
    resultado:'3-2', torneo:'Serie A 2021-22', fecha:'25 Feb 2022',
    tipo:'club',
    goles:[
    {equipo:'Atalanta',minuto:12,jugador:'Freuler'},
    {equipo:'Inter de Milán',minuto:28,jugador:'Barella'},
    {equipo:'Inter de Milán',minuto:44,jugador:'Lautaro'},
    {equipo:'Atalanta',minuto:60,jugador:'Pasalic'},
    {equipo:'Inter de Milán',minuto:88,jugador:'Dzeko'}
  ]
  },
  {
    id:'sa_rom_juve_3_2_2020',
    local:'Roma', visitante:'Juventus',
    resultado:'2-2', torneo:'Serie A 2019-20', fecha:'27 Sep 2020',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:12,jugador:'Rabiot'},
    {equipo:'Roma',minuto:22,jugador:'Pedro'},
    {equipo:'Juventus',minuto:45,jugador:'Cristiano Ronaldo'},
    {equipo:'Roma',minuto:79,jugador:'Veretout'}
  ]
  },
  {
    id:'sa_nap_juve_5_2_2019',
    local:'Nápoles', visitante:'Juventus',
    resultado:'4-3', torneo:'Serie A 2018-19', fecha:'3 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:14,jugador:'Fabian Ruiz'},
    {equipo:'Nápoles',minuto:36,jugador:'Insigne'},
    {equipo:'Juventus',minuto:39,jugador:'Miralem Pjanic'},
    {equipo:'Nápoles',minuto:60,jugador:'Mertens'},
    {equipo:'Nápoles',minuto:66,jugador:'Arkadiusz Milik'},
    {equipo:'Juventus',minuto:71,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:90,jugador:'Mario Mandzukic'}
  ]
  },
  {
    id:'ucl2324_man_rbl',
    local:'Manchester City', visitante:'RB Leipzig',
    resultado:'3-1', torneo:'Champions 2023-24 Grupos', fecha:'4 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:38,jugador:'Josko Gvardiol'},
    {equipo:'RB Leipzig',minuto:53,jugador:'Loïs Openda'},
    {equipo:'Manchester City',minuto:63,jugador:'Phil Foden'},
    {equipo:'Manchester City',minuto:68,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'ucl2324_bay_gal',
    local:'Bayern Munich', visitante:'Galatasaray',
    resultado:'3-1', torneo:'Champions 2023-24 Grupos', fecha:'7 Nov 2023',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:22,jugador:'Musiala'},
    {equipo:'Galatasaray',minuto:45,jugador:'Akturkoglu'},
    {equipo:'Bayern Munich',minuto:64,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:79,jugador:'Sané'}
  ]
  },
  {
    id:'ucl2324_bar_por',
    local:'Barcelona', visitante:'Porto',
    resultado:'3-2', torneo:'Champions 2023-24 Grupos', fecha:'12 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:4,jugador:'Lewandowski'},
    {equipo:'Porto',minuto:13,jugador:'Mehdi Taremi'},
    {equipo:'Barcelona',minuto:49,jugador:'Raphinha'},
    {equipo:'Porto',minuto:61,jugador:'Galeno'},
    {equipo:'Barcelona',minuto:80,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl2324_nap_rm',
    local:'Nápoles', visitante:'Real Madrid',
    resultado:'2-3', torneo:'Champions 2023-24 Grupos', fecha:'3 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:47,jugador:'Raspadori'},
    {equipo:'Real Madrid',minuto:54,jugador:'Bellingham'},
    {equipo:'Nápoles',minuto:67,jugador:'Politano'},
    {equipo:'Real Madrid',minuto:90,jugador:'Joselu'},
    {equipo:'Real Madrid',minuto:93,jugador:'Joselu'}
  ]
  },
  {
    id:'ucl2324_ars_sev',
    local:'Arsenal', visitante:'Sevilla',
    resultado:'6-0', torneo:'Champions 2023-24 Grupos', fecha:'20 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:1,jugador:'Saka'},
    {equipo:'Arsenal',minuto:11,jugador:'Martinelli'},
    {equipo:'Arsenal',minuto:27,jugador:'Odegaard'},
    {equipo:'Arsenal',minuto:42,jugador:'Saka'},
    {equipo:'Arsenal',minuto:53,jugador:'Havertz'},
    {equipo:'Arsenal',minuto:87,jugador:'Trossard'}
  ]
  },
  {
    id:'ucl2324_int_ben',
    local:'Inter de Milán', visitante:'Benfica',
    resultado:'3-3', torneo:'Champions 2023-24 Grupos', fecha:'3 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:7,jugador:'Barella'},
    {equipo:'Benfica',minuto:22,jugador:'Joao Mario'},
    {equipo:'Inter de Milán',minuto:31,jugador:'Lukaku'},
    {equipo:'Benfica',minuto:53,jugador:'António Silva'},
    {equipo:'Inter de Milán',minuto:65,jugador:'Correa'},
    {equipo:'Benfica',minuto:83,jugador:'Gonçalo Ramos'}
  ]
  },
  {
    id:'ucl2324_rm_bru',
    local:'Real Madrid', visitante:'Brugge',
    resultado:'3-0', torneo:'Champions 2023-24 Grupos', fecha:'26 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:14,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:52,jugador:'Modric'},
    {equipo:'Real Madrid',minuto:76,jugador:'Joselu'}
  ]
  },
  {
    id:'ucl2324_psg_dor',
    local:'PSG', visitante:'Borussia Dortmund',
    resultado:'2-0', torneo:'Champions 2023-24 Grupos', fecha:'4 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:50,jugador:'Mbappé'},
    {equipo:'PSG',minuto:77,jugador:'Hakimi'}
  ]
  },
  {
    id:'ucl2223_man_sev',
    local:'Manchester City', visitante:'Sevilla',
    resultado:'3-0', torneo:'Champions 2022-23 Grupos', fecha:'5 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:21,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:68,jugador:'Phil Foden'},
    {equipo:'Manchester City',minuto:88,jugador:'Manuel Akanji'}
  ]
  },
  {
    id:'ucl2223_bay_bar',
    local:'Bayern Munich', visitante:'Barcelona',
    resultado:'2-0', torneo:'Champions 2022-23 Grupos', fecha:'13 Sep 2022',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:50,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:54,jugador:'Müller'}
  ]
  },
  {
    id:'ucl2223_rm_lip',
    local:'Real Madrid', visitante:'Leipzig',
    resultado:'2-0', torneo:'Champions 2022-23 Grupos', fecha:'14 Sep 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:17,jugador:'Alaba'},
    {equipo:'Real Madrid',minuto:80,jugador:'Asensio'}
  ]
  },
  {
    id:'ucl2223_tot_mar',
    local:'Tottenham', visitante:'Marseille',
    resultado:'2-0', torneo:'Champions 2022-23 Grupos', fecha:'26 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:7,jugador:'Richarlison'},
    {equipo:'Tottenham',minuto:45,jugador:'Son'}
  ]
  },
  {
    id:'ucl2223_ath_fra',
    local:'Club Atletico', visitante:'Frankfurt',
    resultado:'3-0', torneo:'Champions 2022-23 Grupos', fecha:'4 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Club Atletico',minuto:1,jugador:'Griezmann'},
    {equipo:'Club Atletico',minuto:23,jugador:'Griezmann'},
    {equipo:'Club Atletico',minuto:77,jugador:'Griezmann'}
  ]
  },
  {
    id:'ucl2223_chel_sal',
    local:'Chelsea', visitante:'Salisburgo',
    resultado:'1-1', torneo:'Champions 2022-23 Grupos', fecha:'14 Sep 2022',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:23,jugador:'Raheem Sterling'},
    {equipo:'Salisburgo',minuto:45,jugador:'Noah Okafor'}
  ]
  },
  {
    id:'ucl2223_nap_aja',
    local:'Nápoles', visitante:'Ajax',
    resultado:'4-2', torneo:'Champions 2022-23 Grupos', fecha:'12 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:4,jugador:'Simeone'},
    {equipo:'Ajax',minuto:33,jugador:'Berghuis'},
    {equipo:'Nápoles',minuto:44,jugador:'Anguissa'},
    {equipo:'Ajax',minuto:48,jugador:'Kudus'},
    {equipo:'Nápoles',minuto:57,jugador:'Kvaratskhelia'},
    {equipo:'Nápoles',minuto:62,jugador:'Politano'}
  ]
  },
  {
    id:'ucl2223_int_pla',
    local:'Inter de Milán', visitante:'Plzen',
    resultado:'4-0', torneo:'Champions 2022-23 Grupos', fecha:'4 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:10,jugador:'Barella'},
    {equipo:'Inter de Milán',minuto:37,jugador:'Dzeko'},
    {equipo:'Inter de Milán',minuto:53,jugador:'Lautaro'},
    {equipo:'Inter de Milán',minuto:74,jugador:'Lukaku'}
  ]
  },
  {
    id:'ucl2122_man_psg',
    local:'Manchester City', visitante:'PSG',
    resultado:'2-1', torneo:'Champions 2021-22 Grupos', fecha:'24 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:15,jugador:'Raheem Sterling'},
    {equipo:'PSG',minuto:50,jugador:'Kylian Mbappé'},
    {equipo:'Manchester City',minuto:76,jugador:'Gabriel Jesus'}
  ]
  },
  {
    id:'ucl2122_liv_atl',
    local:'Liverpool', visitante:'Atlético de Madrid',
    resultado:'2-0', torneo:'Champions 2021-22 Grupos', fecha:'3 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:20,jugador:'Salah'},
    {equipo:'Liverpool',minuto:78,jugador:'Jota'}
  ]
  },
  {
    id:'ucl2122_bar_ben',
    local:'Barcelona', visitante:'Benfica',
    resultado:'0-3', torneo:'Champions 2021-22 Grupos', fecha:'29 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'Benfica',minuto:17,jugador:'Joao Mario'},
    {equipo:'Benfica',minuto:50,jugador:'Rafa Silva'},
    {equipo:'Benfica',minuto:68,jugador:'Nuñez'}
  ]
  },
  {
    id:'ucl2122_bay_ben',
    local:'Bayern Munich', visitante:'Benfica',
    resultado:'5-2', torneo:'Champions 2021-22 Grupos', fecha:'2 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:33,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Müller'},
    {equipo:'Benfica',minuto:48,jugador:'Joao Mario'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:75,jugador:'Lewandowski'},
    {equipo:'Benfica',minuto:84,jugador:'Everton'},
    {equipo:'Bayern Munich',minuto:90,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl2122_rm_she',
    local:'Real Madrid', visitante:'Sheriff Tiraspol',
    resultado:'1-2', torneo:'Champions 2021-22 Grupos', fecha:'28 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'Sheriff Tiraspol',minuto:25,jugador:'Yakhshiboev'},
    {equipo:'Real Madrid',minuto:65,jugador:'Benzema'},
    {equipo:'Sheriff Tiraspol',minuto:89,jugador:'Thill'}
  ]
  },
  {
    id:'ucl2021_rm_int',
    local:'Real Madrid', visitante:'Inter de Milán',
    resultado:'3-2', torneo:'Champions 2020-21 Grupos', fecha:'3 Nov 2020',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:7,jugador:'Hazard'},
    {equipo:'Real Madrid',minuto:25,jugador:'Benzema'},
    {equipo:'Inter de Milán',minuto:35,jugador:'Perisic'},
    {equipo:'Inter de Milán',minuto:65,jugador:'Alexis Sánchez'},
    {equipo:'Real Madrid',minuto:80,jugador:'Rodrygo'}
  ]
  },
  {
    id:'ucl2021_man_psg',
    local:'Manchester City', visitante:'PSG',
    resultado:'2-0', torneo:'Champions 2020-21 Semis (vuelta)', fecha:'4 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:11,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:63,jugador:'Riyad Mahrez'}
  ]
  },
  {
    id:'ucl2021_dor_man',
    local:'Borussia Dortmund', visitante:'Manchester City',
    resultado:'1-2', torneo:'Champions 2020-21 Cuartos (vuelta)', fecha:'14 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:15,jugador:'Riyad Mahrez'},
    {equipo:'Manchester City',minuto:44,jugador:'Phil Foden'},
    {equipo:'Borussia Dortmund',minuto:84,jugador:'Emre Can'}
  ]
  },
  {
    id:'ucl2021_rm_liv',
    local:'Real Madrid', visitante:'Liverpool',
    resultado:'3-1', torneo:'Champions 2020-21 Cuartos (ida)', fecha:'6 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:27,jugador:'Vinicius'},
    {equipo:'Liverpool',minuto:36,jugador:'Salah'},
    {equipo:'Real Madrid',minuto:55,jugador:'Asensio'},
    {equipo:'Real Madrid',minuto:65,jugador:'Vinicius'}
  ]
  },
  {
    id:'ucl2021_por_che',
    local:'Porto', visitante:'Chelsea',
    resultado:'1-0', torneo:'Champions 2020-21 Cuartos (ida)', fecha:'7 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Porto',minuto:45,jugador:'Mehdi Taremi'}
  ]
  },
  {
    id:'pl2324_man_bri',
    local:'Manchester City', visitante:'Luton Town',
    resultado:'5-0', torneo:'Premier League 2023-24', fecha:'13 Abr 2024',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:5,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:11,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:33,jugador:'Phil Foden'},
    {equipo:'Manchester City',minuto:68,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:76,jugador:'Doku'}
  ]
  },
  {
    id:'pl2324_ars_bri',
    local:'Arsenal', visitante:'Brighton',
    resultado:'3-0', torneo:'Premier League 2023-24', fecha:'31 Dic 2023',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:1,jugador:'Havertz'},
    {equipo:'Arsenal',minuto:57,jugador:'Martinelli'},
    {equipo:'Arsenal',minuto:89,jugador:'Rice'}
  ]
  },
  {
    id:'pl2324_liv_wol',
    local:'Liverpool', visitante:'Wolverhampton',
    resultado:'4-2', torneo:'Premier League 2023-24', fecha:'4 Nov 2023',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:6,jugador:'Gakpo'},
    {equipo:'Liverpool',minuto:32,jugador:'Salah'},
    {equipo:'Wolverhampton',minuto:52,jugador:'Cunha'},
    {equipo:'Wolverhampton',minuto:65,jugador:'Hwang'},
    {equipo:'Liverpool',minuto:72,jugador:'Firmino'},
    {equipo:'Liverpool',minuto:80,jugador:'Salah'}
  ]
  },
  {
    id:'pl2324_che_man',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'0-1', torneo:'Premier League 2023-24', fecha:'12 Nov 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:71,jugador:'Rodri'}
  ]
  },
  {
    id:'pl2324_new_che',
    local:'Newcastle', visitante:'Chelsea',
    resultado:'4-1', torneo:'Premier League 2023-24', fecha:'2 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Newcastle',minuto:25,jugador:'Isak'},
    {equipo:'Newcastle',minuto:42,jugador:'Trippier'},
    {equipo:'Chelsea',minuto:55,jugador:'Palmer'},
    {equipo:'Newcastle',minuto:68,jugador:'Murphy'},
    {equipo:'Newcastle',minuto:88,jugador:'Botman'}
  ]
  },
  {
    id:'pl2223_man_man',
    local:'Manchester City', visitante:'Manchester United',
    resultado:'6-3', torneo:'Premier League 2022-23', fecha:'2 Oct 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:8,jugador:'Erling Haaland'},
    {equipo:'Manchester United',minuto:11,jugador:'Antony'},
    {equipo:'Manchester City',minuto:23,jugador:'Phil Foden'},
    {equipo:'Manchester City',minuto:34,jugador:'Foden'},
    {equipo:'Manchester United',minuto:45,jugador:'Bruno Fernandes'},
    {equipo:'Manchester City',minuto:52,jugador:'Erling Haaland'},
    {equipo:'Manchester United',minuto:58,jugador:'Bruno Fernandes'},
    {equipo:'Manchester City',minuto:65,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:76,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'pl2223_ars_man',
    local:'Arsenal', visitante:'Manchester City',
    resultado:'1-0', torneo:'Premier League 2022-23', fecha:'15 Ene 2023',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:52,jugador:'Martinelli'}
  ]
  },
  {
    id:'pl2223_man_wol',
    local:'Manchester City', visitante:'Wolverhampton',
    resultado:'3-0', torneo:'Premier League 2022-23', fecha:'22 Ene 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:12,jugador:'Rodri'},
    {equipo:'Manchester City',minuto:55,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:79,jugador:'Mahrez'}
  ]
  },
  {
    id:'pl2223_tot_man',
    local:'Tottenham', visitante:'Manchester City',
    resultado:'0-1', torneo:'Premier League 2022-23', fecha:'5 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:93,jugador:'Erling Haaland'}
  ]
  },
  {
    id:'pl2223_nwe_man',
    local:'Newcastle', visitante:'Manchester City',
    resultado:'0-2', torneo:'Premier League 2022-23', fecha:'27 Ago 2022',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:18,jugador:'Erling Haaland'},
    {equipo:'Manchester City',minuto:62,jugador:'Erling Haaland'}
  ]
  },
  {
    id:'pl2122_man_bur',
    local:'Manchester City', visitante:'Burnley',
    resultado:'5-0', torneo:'Premier League 2021-22', fecha:'16 Ago 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:5,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:47,jugador:'Ferran Torres'},
    {equipo:'Manchester City',minuto:52,jugador:'Ferran Torres'},
    {equipo:'Manchester City',minuto:65,jugador:'Riyad Mahrez'},
    {equipo:'Manchester City',minuto:79,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'pl2122_che_ast',
    local:'Chelsea', visitante:'Aston Villa',
    resultado:'3-0', torneo:'Premier League 2021-22', fecha:'11 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:15,jugador:'Lukaku'},
    {equipo:'Chelsea',minuto:57,jugador:'Havertz'},
    {equipo:'Chelsea',minuto:69,jugador:'Rudiger'}
  ]
  },
  {
    id:'pl2122_liv_bur',
    local:'Liverpool', visitante:'Burnley',
    resultado:'2-0', torneo:'Premier League 2021-22', fecha:'21 Ago 2021',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:18,jugador:'Diogo Jota'},
    {equipo:'Liverpool',minuto:69,jugador:'Mané'}
  ]
  },
  {
    id:'pl2122_man_new',
    local:'Manchester City', visitante:'Newcastle',
    resultado:'5-0', torneo:'Premier League 2021-22', fecha:'19 Sep 2021',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:10,jugador:'Ilkay Gündogan'},
    {equipo:'Manchester City',minuto:25,jugador:'Raheem Sterling'},
    {equipo:'Manchester City',minuto:42,jugador:'Riyad Mahrez'},
    {equipo:'Manchester City',minuto:65,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:72,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'pl2021_man_bri',
    local:'Manchester City', visitante:'Brighton',
    resultado:'4-1', torneo:'Premier League 2020-21', fecha:'13 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Brighton',minuto:23,jugador:'Alexis Mac Allister'},
    {equipo:'Manchester City',minuto:36,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:50,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:58,jugador:'Mahrez'},
    {equipo:'Manchester City',minuto:76,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'pl2021_che_wba',
    local:'Chelsea', visitante:'West Brom',
    resultado:'5-2', torneo:'Premier League 2020-21', fecha:'3 Feb 2021',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:3,jugador:'Alonso'},
    {equipo:'Chelsea',minuto:27,jugador:'Abraham'},
    {equipo:'West Brom',minuto:35,jugador:'Robson-Kanu'},
    {equipo:'Chelsea',minuto:43,jugador:'Mount'},
    {equipo:'Chelsea',minuto:66,jugador:'Azpilicueta'},
    {equipo:'West Brom',minuto:73,jugador:'Pereira'},
    {equipo:'Chelsea',minuto:90,jugador:'Abraham'}
  ]
  },
  {
    id:'pl2021_ars_che',
    local:'Arsenal', visitante:'Chelsea',
    resultado:'0-1', torneo:'Premier League 2020-21', fecha:'12 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:53,jugador:'Emerson'}
  ]
  },
  {
    id:'pl2021_liv_che',
    local:'Liverpool', visitante:'Chelsea',
    resultado:'0-1', torneo:'Premier League 2020-21', fecha:'4 Mar 2021',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:42,jugador:'Mason Mount'}
  ]
  },
  {
    id:'pl1920_liv_man',
    local:'Liverpool', visitante:'Manchester City',
    resultado:'3-1', torneo:'Premier League 2019-20', fecha:'10 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:6,jugador:'Fabinho'},
    {equipo:'Liverpool',minuto:13,jugador:'Salah'},
    {equipo:'Liverpool',minuto:51,jugador:'Mané'},
    {equipo:'Liverpool',minuto:78,jugador:'Salah'}
  ]
  },
  {
    id:'pl1920_man_ars',
    local:'Manchester City', visitante:'Arsenal',
    resultado:'3-0', torneo:'Premier League 2019-20', fecha:'17 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:12,jugador:'Raheem Sterling'},
    {equipo:'Manchester City',minuto:29,jugador:'Kevin De Bruyne'},
    {equipo:'Manchester City',minuto:65,jugador:'Phil Foden'}
  ]
  },
  {
    id:'pl1920_che_man',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'2-1', torneo:'Premier League 2019-20', fecha:'25 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:36,jugador:'Christian Pulisic'},
    {equipo:'Chelsea',minuto:60,jugador:'Willian'},
    {equipo:'Manchester City',minuto:75,jugador:'Kevin De Bruyne'}
  ]
  },
  {
    id:'pl1920_liv_tot',
    local:'Liverpool', visitante:'Tottenham',
    resultado:'2-1', torneo:'Premier League 2019-20', fecha:'11 Jan 2020',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:12,jugador:'Roberto Firmino'},
    {equipo:'Tottenham',minuto:34,jugador:'Son Heung-min'},
    {equipo:'Liverpool',minuto:74,jugador:'Salah'}
  ]
  },
  {
    id:'pl1920_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'1-1', torneo:'Premier League 2019-20', fecha:'1 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:11,jugador:'Sead Kolasinac'},
    {equipo:'Manchester United',minuto:58,jugador:'Scott McTominay'}
  ]
  },
  {
    id:'pl1920_tot_man',
    local:'Tottenham', visitante:'Manchester City',
    resultado:'2-0', torneo:'Premier League 2019-20', fecha:'2 Feb 2020',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:19,jugador:'Steven Bergwijn'},
    {equipo:'Tottenham',minuto:38,jugador:'Son Heung-min'}
  ]
  },
  {
    id:'lla2324_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'3-2', torneo:'LaLiga 2023-24', fecha:'21 Abr 2024',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:12,jugador:'Carvajal'},
    {equipo:'Barcelona',minuto:40,jugador:'Lamine Yamal'},
    {equipo:'Real Madrid',minuto:63,jugador:'Modric'},
    {equipo:'Real Madrid',minuto:78,jugador:'Brahim'},
    {equipo:'Barcelona',minuto:85,jugador:'Raphinha'}
  ]
  },
  {
    id:'lla2324_bar_gir',
    local:'Barcelona', visitante:'Girona',
    resultado:'4-2', torneo:'LaLiga 2023-24', fecha:'4 May 2024',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:10,jugador:'Lewandowski'},
    {equipo:'Girona',minuto:25,jugador:'Dovbyk'},
    {equipo:'Barcelona',minuto:38,jugador:'Raphinha'},
    {equipo:'Girona',minuto:55,jugador:'Tsygankov'},
    {equipo:'Barcelona',minuto:70,jugador:'Gundogan'},
    {equipo:'Barcelona',minuto:82,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'lla2324_gir_bar_2',
    local:'Girona', visitante:'Barcelona',
    resultado:'0-4', torneo:'LaLiga 2023-24', fecha:'17 Feb 2024',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:19,jugador:'Cancelo'},
    {equipo:'Barcelona',minuto:47,jugador:'Lewandowski'},
    {equipo:'Barcelona',minuto:58,jugador:'Felix'},
    {equipo:'Barcelona',minuto:77,jugador:'Gundogan'}
  ]
  },
  {
    id:'lla2324_rm_gir',
    local:'Real Madrid', visitante:'Girona',
    resultado:'4-0', torneo:'LaLiga 2023-24', fecha:'30 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:14,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:28,jugador:'Joselu'},
    {equipo:'Real Madrid',minuto:54,jugador:'Rodrigo'},
    {equipo:'Real Madrid',minuto:76,jugador:'Modric'}
  ]
  },
  {
    id:'lla2324_atl_bar',
    local:'Atlético de Madrid', visitante:'Barcelona',
    resultado:'3-1', torneo:'LaLiga 2023-24', fecha:'16 Dic 2023',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:44,jugador:'Morata'},
    {equipo:'Atlético de Madrid',minuto:63,jugador:'Rodrigo de Paul'},
    {equipo:'Barcelona',minuto:75,jugador:'Ferran Torres'},
    {equipo:'Atlético de Madrid',minuto:88,jugador:'Depay'}
  ]
  },
  {
    id:'lla2223_rm_atl',
    local:'Real Madrid', visitante:'Atlético de Madrid',
    resultado:'2-1', torneo:'LaLiga 2022-23', fecha:'18 Sep 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:38,jugador:'Valverde'},
    {equipo:'Atlético de Madrid',minuto:56,jugador:'Morata'},
    {equipo:'Real Madrid',minuto:88,jugador:'Benzema'}
  ]
  },
  {
    id:'lla2223_bar_sev',
    local:'Barcelona', visitante:'Sevilla',
    resultado:'3-0', torneo:'LaLiga 2022-23', fecha:'5 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:22,jugador:'Lewandowski'},
    {equipo:'Barcelona',minuto:50,jugador:'Piqué'},
    {equipo:'Barcelona',minuto:66,jugador:'Gavi'}
  ]
  },
  {
    id:'lla2223_rm_val',
    local:'Real Madrid', visitante:'Valencia',
    resultado:'2-0', torneo:'LaLiga 2022-23', fecha:'11 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:35,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:76,jugador:'Vinicius'}
  ]
  },
  {
    id:'lla2223_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-1', torneo:'LaLiga 2022-23', fecha:'19 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:32,jugador:'Marcos Alonso'},
    {equipo:'Barcelona',minuto:45,jugador:'Robert Lewandowski'},
    {equipo:'Real Madrid',minuto:89,jugador:'Benzema'}
  ]
  },
  {
    id:'lla2223_bar_val_d',
    local:'Barcelona', visitante:'Villarreal',
    resultado:'4-3', torneo:'LaLiga 2022-23', fecha:'27 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:12,jugador:'Gavi'},
    {equipo:'Villarreal',minuto:20,jugador:'Gerard Moreno'},
    {equipo:'Barcelona',minuto:32,jugador:'Lewandowski'},
    {equipo:'Villarreal',minuto:45,jugador:'Baena'},
    {equipo:'Barcelona',minuto:68,jugador:'Kessie'},
    {equipo:'Villarreal',minuto:79,jugador:'Pedraza'},
    {equipo:'Barcelona',minuto:90,jugador:'Lewandowski'}
  ]
  },
  {
    id:'lla2122_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-1', torneo:'LaLiga 2021-22', fecha:'28 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:32,jugador:'Alaba'},
    {equipo:'Real Madrid',minuto:61,jugador:'Benzema'},
    {equipo:'Barcelona',minuto:86,jugador:'Aguero'}
  ]
  },
  {
    id:'lla2122_bar_rm_c',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'4-0', torneo:'LaLiga 2021-22', fecha:'24 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:20,jugador:'Ansu Fati'},
    {equipo:'Barcelona',minuto:39,jugador:'Piqué'},
    {equipo:'Barcelona',minuto:53,jugador:'Ferran Torres'},
    {equipo:'Barcelona',minuto:78,jugador:'Gavi'}
  ]
  },
  {
    id:'lla2122_rm_man',
    local:'Real Madrid', visitante:'Málaga',
    resultado:'4-0', torneo:'LaLiga 2021-22', fecha:'8 Ene 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:7,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:36,jugador:'Asensio'},
    {equipo:'Real Madrid',minuto:63,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:85,jugador:'Isco'}
  ]
  },
  {
    id:'lla2122_sev_bar',
    local:'Sevilla', visitante:'Barcelona',
    resultado:'1-1', torneo:'LaLiga 2021-22', fecha:'28 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Sevilla',minuto:34,jugador:'En-Nesyri'},
    {equipo:'Barcelona',minuto:88,jugador:'Memphis Depay'}
  ]
  },
  {
    id:'lla2122_atl_rm_l',
    local:'Atlético de Madrid', visitante:'Real Madrid',
    resultado:'1-2', torneo:'LaLiga 2021-22', fecha:'8 Feb 2022',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:15,jugador:'Griezmann'},
    {equipo:'Real Madrid',minuto:57,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:88,jugador:'Benzema'}
  ]
  },
  {
    id:'lla2021_bar_atl',
    local:'Barcelona', visitante:'Atlético de Madrid',
    resultado:'0-1', torneo:'LaLiga 2020-21', fecha:'6 Jun 2021',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:67,jugador:'Luis Suárez'}
  ]
  },
  {
    id:'lla2021_rm_bar_l',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-1', torneo:'LaLiga 2020-21', fecha:'10 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:13,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:32,jugador:'Vázquez'},
    {equipo:'Barcelona',minuto:60,jugador:'Oscar Mingueza'}
  ]
  },
  {
    id:'lla2021_atl_sev',
    local:'Atlético de Madrid', visitante:'Sevilla',
    resultado:'1-0', torneo:'LaLiga 2020-21', fecha:'27 Feb 2021',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:76,jugador:'Felipe'}
  ]
  },
  {
    id:'lla2021_bar_sev',
    local:'Barcelona', visitante:'Sevilla',
    resultado:'2-0', torneo:'LaLiga 2020-21', fecha:'3 Ene 2021',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:28,jugador:'Jordi Alba'},
    {equipo:'Barcelona',minuto:55,jugador:'Messi'}
  ]
  },
  {
    id:'lla2021_rm_sev',
    local:'Real Madrid', visitante:'Sevilla',
    resultado:'1-0', torneo:'LaLiga 2020-21', fecha:'5 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:36,jugador:'Benzema'}
  ]
  },
  {
    id:'lla1920_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'0-0', torneo:'LaLiga 2019-20', fecha:'18 Dic 2019',
    tipo:'club',
    goles:[]
  },
  {
    id:'lla1920_rm_man',
    local:'Real Madrid', visitante:'Manchester',
    resultado:'2-0', torneo:'LaLiga 2019-20', fecha:'1 Mar 2020',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:25,jugador:'Vinicius'},
    {equipo:'Real Madrid',minuto:46,jugador:'Benzema'}
  ]
  },
  {
    id:'lla1920_sev_rm',
    local:'Sevilla', visitante:'Real Madrid',
    resultado:'0-1', torneo:'LaLiga 2019-20', fecha:'22 Feb 2020',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:78,jugador:'Benzema'}
  ]
  },
  {
    id:'lla1920_bar_leg',
    local:'Barcelona', visitante:'Leganés',
    resultado:'5-0', torneo:'LaLiga 2019-20', fecha:'23 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:16,jugador:'Martin Braithwaite'},
    {equipo:'Barcelona',minuto:22,jugador:'Luis Suárez'},
    {equipo:'Barcelona',minuto:42,jugador:'Messi'},
    {equipo:'Barcelona',minuto:56,jugador:'Sergi Roberto'},
    {equipo:'Barcelona',minuto:88,jugador:'Luis Suárez'}
  ]
  },
  {
    id:'lla1920_rm_rea',
    local:'Real Madrid', visitante:'Real Sociedad',
    resultado:'2-0', torneo:'LaLiga 2019-20', fecha:'21 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:22,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:60,jugador:'Benzema'}
  ]
  },
  {
    id:'bund2324_bay_man',
    local:'Bayern Munich', visitante:'Manchester United',
    resultado:'3-1', torneo:'Champions 2023-24 Grupos', fecha:'20 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:28,jugador:'Sancho'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Harry Kane'},
    {equipo:'Bayern Munich',minuto:66,jugador:'Serge Gnabry'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Leroy Sané'}
  ]
  },
  {
    id:'bund2324_lei_fra',
    local:'Bayer Leverkusen', visitante:'Grandin',
    resultado:'5-0', torneo:'Bundesliga 2023-24', fecha:'14 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'Bayer Leverkusen',minuto:5,jugador:'Florian Wirtz'},
    {equipo:'Bayer Leverkusen',minuto:27,jugador:'Granit Xhaka'},
    {equipo:'Bayer Leverkusen',minuto:44,jugador:'Jonathan Tah'},
    {equipo:'Bayer Leverkusen',minuto:63,jugador:'Patrik Schick'},
    {equipo:'Bayer Leverkusen',minuto:80,jugador:'Jonas Hofmann'}
  ]
  },
  {
    id:'bund2324_bay_uni',
    local:'Bayern Munich', visitante:'Union Berlin',
    resultado:'3-0', torneo:'Bundesliga 2023-24', fecha:'23 Sep 2023',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:20,jugador:'Harry Kane'},
    {equipo:'Bayern Munich',minuto:50,jugador:'Leroy Sané'},
    {equipo:'Bayern Munich',minuto:75,jugador:'Thomas Müller'}
  ]
  },
  {
    id:'bund2223_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'2-2', torneo:'DFB Pokal 2023', fecha:'1 Mar 2023',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:30,jugador:'Leon Goretzka'},
    {equipo:'Borussia Dortmund',minuto:45,jugador:'Reus'},
    {equipo:'Bayern Munich',minuto:62,jugador:'Leroy Sané'},
    {equipo:'Borussia Dortmund',minuto:83,jugador:'Haller'}
  ]
  },
  {
    id:'bund2223_dor_man',
    local:'Borussia Dortmund', visitante:'Manchester City',
    resultado:'0-0', torneo:'Champions 2022-23 Grupos', fecha:'25 Oct 2022',
    tipo:'club',
    goles:[]
  },
  {
    id:'bund2122_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'3-2', torneo:'Bundesliga 2021-22', fecha:'4 Dic 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:4,jugador:'Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:15,jugador:'Malen'},
    {equipo:'Bayern Munich',minuto:43,jugador:'Müller'},
    {equipo:'Borussia Dortmund',minuto:76,jugador:'Haaland'},
    {equipo:'Bayern Munich',minuto:89,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund2122_bay_ber',
    local:'Bayern Munich', visitante:'Union Berlin',
    resultado:'4-2', torneo:'Bundesliga 2021-22', fecha:'20 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:5,jugador:'Sané'},
    {equipo:'Union Berlin',minuto:16,jugador:'Becker'},
    {equipo:'Union Berlin',minuto:30,jugador:'Awoniyi'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:76,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Sané'}
  ]
  },
  {
    id:'bund2021_bay_dor_c',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'3-2', torneo:'Bundesliga 2020-21', fecha:'6 Mar 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:16,jugador:'Müller'},
    {equipo:'Borussia Dortmund',minuto:37,jugador:'Haaland'},
    {equipo:'Borussia Dortmund',minuto:52,jugador:'Sancho'},
    {equipo:'Bayern Munich',minuto:61,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:90,jugador:'Choupo-Moting'}
  ]
  },
  {
    id:'bund2021_dor_fra',
    local:'Borussia Dortmund', visitante:'Frankfurt',
    resultado:'1-2', torneo:'Bundesliga 2020-21', fecha:'5 Dec 2020',
    tipo:'club',
    goles:[
    {equipo:'Frankfurt',minuto:52,jugador:'Kamada'},
    {equipo:'Frankfurt',minuto:75,jugador:'Kostic'},
    {equipo:'Borussia Dortmund',minuto:84,jugador:'Haaland'}
  ]
  },
  {
    id:'sa2324_int_juve',
    local:'Inter de Milán', visitante:'Juventus',
    resultado:'1-0', torneo:'Serie A 2023-24', fecha:'4 Feb 2024',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:90,jugador:'De Vrij'}
  ]
  },
  {
    id:'sa2324_mil_int',
    local:'AC Milan', visitante:'Inter de Milán',
    resultado:'1-2', torneo:'Serie A 2023-24', fecha:'22 Abr 2024',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:14,jugador:'Theo Hernandez'},
    {equipo:'Inter de Milán',minuto:50,jugador:'Marcus Thuram'},
    {equipo:'Inter de Milán',minuto:89,jugador:'Francesco Acerbi'}
  ]
  },
  {
    id:'sa2324_nap_int',
    local:'Nápoles', visitante:'Inter de Milán',
    resultado:'2-3', torneo:'Serie A 2023-24', fecha:'3 Mar 2024',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:17,jugador:'Osimhen'},
    {equipo:'Inter de Milán',minuto:33,jugador:'Lautaro'},
    {equipo:'Inter de Milán',minuto:58,jugador:'Lukaku'},
    {equipo:'Nápoles',minuto:64,jugador:'Politano'},
    {equipo:'Inter de Milán',minuto:80,jugador:'Mkhitaryan'}
  ]
  },
  {
    id:'sa2223_int_mil',
    local:'Inter de Milán', visitante:'AC Milan',
    resultado:'3-2', torneo:'Serie A 2022-23', fecha:'5 Feb 2023',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:21,jugador:'Leao'},
    {equipo:'AC Milan',minuto:56,jugador:'Messias'},
    {equipo:'Inter de Milán',minuto:64,jugador:'Dzeko'},
    {equipo:'Inter de Milán',minuto:74,jugador:'Mkhitaryan'},
    {equipo:'Inter de Milán',minuto:90,jugador:'Gosens'}
  ]
  },
  {
    id:'sa2122_nap_juve',
    local:'Nápoles', visitante:'Juventus',
    resultado:'2-1', torneo:'Serie A 2021-22', fecha:'6 Nov 2021',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:19,jugador:'Morata'},
    {equipo:'Nápoles',minuto:55,jugador:'Insigne'},
    {equipo:'Nápoles',minuto:88,jugador:'Elmas'}
  ]
  },
  {
    id:'sa2122_int_juve',
    local:'Inter de Milán', visitante:'Juventus',
    resultado:'2-0', torneo:'Serie A 2021-22', fecha:'24 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:46,jugador:'Lautaro'},
    {equipo:'Inter de Milán',minuto:66,jugador:'Barella'}
  ]
  },
  {
    id:'l12324_psg_nic',
    local:'PSG', visitante:'Niza',
    resultado:'2-1', torneo:'Ligue 1 2023-24', fecha:'28 Oct 2023',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:12,jugador:'Mbappé'},
    {equipo:'PSG',minuto:55,jugador:'Dembélé'},
    {equipo:'Niza',minuto:70,jugador:'Laborde'}
  ]
  },
  {
    id:'l12324_psg_bor',
    local:'PSG', visitante:'Rennes',
    resultado:'2-0', torneo:'Ligue 1 2023-24', fecha:'27 Jan 2024',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:33,jugador:'Mbappé'},
    {equipo:'PSG',minuto:68,jugador:'Kolo Muani'}
  ]
  },
  {
    id:'l12223_psg_man',
    local:'PSG', visitante:'Marsella',
    resultado:'3-0', torneo:'Ligue 1 2022-23', fecha:'18 Sep 2022',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:9,jugador:'Neymar'},
    {equipo:'PSG',minuto:22,jugador:'Messi'},
    {equipo:'PSG',minuto:69,jugador:'Mbappé'}
  ]
  },
  {
    id:'l12122_psg_man',
    local:'PSG', visitante:'Marsella',
    resultado:'2-0', torneo:'Ligue 1 2021-22', fecha:'24 Oct 2021',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:4,jugador:'Neymar'},
    {equipo:'PSG',minuto:80,jugador:'Mbappé'}
  ]
  },
  {
    id:'l12021_psg_bor',
    local:'PSG', visitante:'Bordeaux',
    resultado:'3-2', torneo:'Ligue 1 2020-21', fecha:'28 Abr 2021',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:12,jugador:'Di María'},
    {equipo:'Bordeaux',minuto:29,jugador:'Briand'},
    {equipo:'PSG',minuto:44,jugador:'Icardi'},
    {equipo:'Bordeaux',minuto:68,jugador:'Ben Arfa'},
    {equipo:'PSG',minuto:88,jugador:'Kylian Mbappé'}
  ]
  },
  {
    id:'ucl1920_bar_dor',
    local:'Barcelona', visitante:'Borussia Dortmund',
    resultado:'3-1', torneo:'Champions 2019-20 Grupos', fecha:'27 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:3,jugador:'Luis Suárez'},
    {equipo:'Borussia Dortmund',minuto:32,jugador:'Hakimi'},
    {equipo:'Barcelona',minuto:61,jugador:'Messi'},
    {equipo:'Barcelona',minuto:76,jugador:'Griezmann'}
  ]
  },
  {
    id:'ucl1920_juve_atl',
    local:'Juventus', visitante:'Atlético de Madrid',
    resultado:'3-2', torneo:'Champions 2019-20 Grupos', fecha:'26 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:4,jugador:'Joao Félix'},
    {equipo:'Juventus',minuto:22,jugador:'Bonucci'},
    {equipo:'Atlético de Madrid',minuto:40,jugador:'Morata'},
    {equipo:'Juventus',minuto:71,jugador:'Dybala'},
    {equipo:'Juventus',minuto:90,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'ucl1920_man_sak',
    local:'Manchester City', visitante:'Shakhtar',
    resultado:'3-0', torneo:'Champions 2019-20 Grupos', fecha:'26 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:15,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:50,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:78,jugador:'Phil Foden'}
  ]
  },
  {
    id:'ucl1920_rm_gal',
    local:'Real Madrid', visitante:'Galatasaray',
    resultado:'6-0', torneo:'Champions 2019-20 Grupos', fecha:'6 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:8,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:25,jugador:'Isco'},
    {equipo:'Real Madrid',minuto:44,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:55,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:69,jugador:'Kroos'},
    {equipo:'Real Madrid',minuto:83,jugador:'Fede Valverde'}
  ]
  },
  {
    id:'ucl1920_atl_lok',
    local:'Atlético de Madrid', visitante:'Lokomotiv',
    resultado:'2-0', torneo:'Champions 2019-20 Grupos', fecha:'6 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:18,jugador:'Félix'},
    {equipo:'Atlético de Madrid',minuto:70,jugador:'Correa'}
  ]
  },
  {
    id:'ucl1920_bay_rot',
    local:'Bayern Munich', visitante:'Estrella Roja',
    resultado:'3-0', torneo:'Champions 2019-20 Grupos', fecha:'20 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:29,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:73,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl1920_liv_nap',
    local:'Liverpool', visitante:'Nápoles',
    resultado:'1-1', torneo:'Champions 2019-20 Grupos', fecha:'17 Sep 2019',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:82,jugador:'Dries Mertens'},
    {equipo:'Liverpool',minuto:92,jugador:'Andrew Robertson'}
  ]
  },
  {
    id:'ucl1920_dor_bar',
    local:'Borussia Dortmund', visitante:'Barcelona',
    resultado:'0-0', torneo:'Champions 2019-20 Grupos', fecha:'17 Sep 2019',
    tipo:'club',
    goles:[]
  },
  {
    id:'ucl1819_bar_man',
    local:'Barcelona', visitante:'Manchester United',
    resultado:'3-0', torneo:'Cuartos Champions 2018-19 (vuelta)', fecha:'16 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:26,jugador:'Luis Suárez'},
    {equipo:'Barcelona',minuto:65,jugador:'Messi'},
    {equipo:'Barcelona',minuto:82,jugador:'Messi'}
  ]
  },
  {
    id:'ucl1819_man_bar',
    local:'Manchester United', visitante:'Barcelona',
    resultado:'1-0', torneo:'Cuartos Champions 2018-19 (ida)', fecha:'10 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:12,jugador:'Luke Shaw'}
  ]
  },
  {
    id:'ucl1819_tot_man',
    local:'Tottenham', visitante:'Manchester City',
    resultado:'1-0', torneo:'Cuartos Champions 2018-19 (ida)', fecha:'9 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:4,jugador:'Son Heung-min'}
  ]
  },
  {
    id:'ucl1819_juve_atl',
    local:'Juventus', visitante:'Atlético de Madrid',
    resultado:'3-0', torneo:'Octavos Champions 2018-19 (vuelta)', fecha:'12 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:27,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:49,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:86,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'ucl1819_dor_tot',
    local:'Borussia Dortmund', visitante:'Tottenham',
    resultado:'0-3', torneo:'Octavos Champions 2018-19 (vuelta)', fecha:'13 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:34,jugador:'Son Heung-min'},
    {equipo:'Tottenham',minuto:53,jugador:'Heung-min Son'},
    {equipo:'Tottenham',minuto:60,jugador:'Fernando Llorente'}
  ]
  },
  {
    id:'ucl1819_man_sch',
    local:'Manchester City', visitante:'Schalke',
    resultado:'7-0', torneo:'Octavos Champions 2018-19 (vuelta)', fecha:'12 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:13,jugador:'Sané'},
    {equipo:'Manchester City',minuto:38,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:53,jugador:'Bernardo'},
    {equipo:'Manchester City',minuto:57,jugador:'Sterling'},
    {equipo:'Manchester City',minuto:69,jugador:'Sterling'},
    {equipo:'Manchester City',minuto:72,jugador:'Foden'},
    {equipo:'Manchester City',minuto:90,jugador:'Gabriel Jesus'}
  ]
  },
  {
    id:'ucl1819_rm_ajax',
    local:'Real Madrid', visitante:'Ajax',
    resultado:'1-4', torneo:'Octavos Champions 2018-19 (vuelta)', fecha:'5 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Ajax',minuto:7,jugador:'Hakim Ziyech'},
    {equipo:'Ajax',minuto:18,jugador:'Dusan Tadic'},
    {equipo:'Real Madrid',minuto:60,jugador:'Marco Asensio'},
    {equipo:'Ajax',minuto:62,jugador:'David Neres'},
    {equipo:'Ajax',minuto:72,jugador:'Lasse Schöne'}
  ]
  },
  {
    id:'ucl1718_rm_psg',
    local:'Real Madrid', visitante:'PSG',
    resultado:'3-1', torneo:'Octavos Champions 2017-18 (ida)', fecha:'14 Feb 2018',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:33,jugador:'Rabiot'},
    {equipo:'Real Madrid',minuto:45,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:51,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:83,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'ucl1718_juve_tot',
    local:'Juventus', visitante:'Tottenham',
    resultado:'2-2', torneo:'Octavos Champions 2017-18 (ida)', fecha:'13 Feb 2018',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:10,jugador:'Kane'},
    {equipo:'Tottenham',minuto:16,jugador:'Son'},
    {equipo:'Juventus',minuto:37,jugador:'González'},
    {equipo:'Juventus',minuto:68,jugador:'Higuaín'}
  ]
  },
  {
    id:'ucl1718_bar_che',
    local:'Barcelona', visitante:'Chelsea',
    resultado:'3-0', torneo:'Octavos Champions 2017-18 (vuelta)', fecha:'14 Mar 2018',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:2,jugador:'Messi'},
    {equipo:'Barcelona',minuto:63,jugador:'Dembélé'},
    {equipo:'Barcelona',minuto:75,jugador:'Suárez'}
  ]
  },
  {
    id:'ucl1718_bay_bes',
    local:'Bayern Munich', visitante:'Besiktas',
    resultado:'5-0', torneo:'Octavos Champions 2017-18 (vuelta)', fecha:'14 Mar 2018',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:5,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:12,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:24,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:67,jugador:'Ribéry'},
    {equipo:'Bayern Munich',minuto:78,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl1718_rm_juve_sf',
    local:'Real Madrid', visitante:'Juventus',
    resultado:'3-0', torneo:'Semifinal Champions 2017-18 (ida)', fecha:'2 May 2018',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:2,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:61,jugador:'Marcelo'},
    {equipo:'Real Madrid',minuto:64,jugador:'Vasquez'}
  ]
  },
  {
    id:'ucl1718_rm_bay_sf',
    local:'Real Madrid', visitante:'Bayern Munich',
    resultado:'2-2', torneo:'Semifinal Champions 2017-18 (ida)', fecha:'25 Abr 2018',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:28,jugador:'Kimmich'},
    {equipo:'Real Madrid',minuto:46,jugador:'Marcelo'},
    {equipo:'Real Madrid',minuto:57,jugador:'Ronaldo'},
    {equipo:'Bayern Munich',minuto:63,jugador:'James'}
  ]
  },
  {
    id:'pl1819_man_tot',
    local:'Manchester City', visitante:'Tottenham',
    resultado:'4-3', torneo:'Premier League 2018-19', fecha:'20 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:3,jugador:'Raheem Sterling'},
    {equipo:'Tottenham',minuto:12,jugador:'Son'},
    {equipo:'Tottenham',minuto:22,jugador:'Moura'},
    {equipo:'Manchester City',minuto:37,jugador:'De Bruyne'},
    {equipo:'Tottenham',minuto:50,jugador:'Llorente'},
    {equipo:'Manchester City',minuto:59,jugador:'Sterling'},
    {equipo:'Manchester City',minuto:72,jugador:'Sterling'}
  ]
  },
  {
    id:'pl1819_liv_man',
    local:'Liverpool', visitante:'Manchester City',
    resultado:'3-1', torneo:'Premier League 2018-19', fecha:'7 Oct 2018',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:14,jugador:'Shaqiri'},
    {equipo:'Liverpool',minuto:57,jugador:'Salah'},
    {equipo:'Liverpool',minuto:79,jugador:'Xherdan Shaqiri'},
    {equipo:'Manchester City',minuto:82,jugador:'Riyad Mahrez'}
  ]
  },
  {
    id:'pl1819_che_man',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'0-2', torneo:'Premier League 2018-19', fecha:'8 Dic 2018',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:45,jugador:'Gündogan'},
    {equipo:'Manchester City',minuto:76,jugador:'Sané'}
  ]
  },
  {
    id:'pl1819_man_ars',
    local:'Manchester City', visitante:'Arsenal',
    resultado:'3-1', torneo:'Premier League 2018-19', fecha:'3 Feb 2019',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:17,jugador:'Agüero'},
    {equipo:'Manchester City',minuto:55,jugador:'Bernardo Silva'},
    {equipo:'Arsenal',minuto:64,jugador:'Mkhitaryan'},
    {equipo:'Manchester City',minuto:72,jugador:'Sané'}
  ]
  },
  {
    id:'pl1819_liv_ars',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'4-0', torneo:'Premier League 2018-19', fecha:'24 Ago 2018',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:16,jugador:'Sturridge'},
    {equipo:'Liverpool',minuto:48,jugador:'Firmino'},
    {equipo:'Liverpool',minuto:73,jugador:'Mané'},
    {equipo:'Liverpool',minuto:85,jugador:'Salah'}
  ]
  },
  {
    id:'lla1819_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'5-1', torneo:'LaLiga 2018-19', fecha:'28 Oct 2018',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Lucas Vázquez'},
    {equipo:'Barcelona',minuto:12,jugador:'Ansu Fati'},
    {equipo:'Barcelona',minuto:32,jugador:'Arturo Vidal'},
    {equipo:'Barcelona',minuto:45,jugador:'Luis Suárez'},
    {equipo:'Barcelona',minuto:55,jugador:'Jordi Alba'},
    {equipo:'Barcelona',minuto:87,jugador:'Philippe Coutinho'}
  ]
  },
  {
    id:'lla1819_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-0', torneo:'LaLiga 2018-19', fecha:'3 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:78,jugador:'Lucas Vázquez'},
    {equipo:'Real Madrid',minuto:83,jugador:'Gareth Bale'}
  ]
  },
  {
    id:'lla1819_atl_bar',
    local:'Atlético de Madrid', visitante:'Barcelona',
    resultado:'1-0', torneo:'LaLiga 2018-19', fecha:'24 Nov 2018',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:85,jugador:'Diego Costa'}
  ]
  },
  {
    id:'bund1819_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'5-0', torneo:'Bundesliga 2018-19', fecha:'9 Nov 2018',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:26,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:50,jugador:'Gnabry'},
    {equipo:'Bayern Munich',minuto:65,jugador:'Coman'},
    {equipo:'Bayern Munich',minuto:74,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:83,jugador:'Sané'}
  ]
  },
  {
    id:'bund1819_dor_bay',
    local:'Borussia Dortmund', visitante:'Bayern Munich',
    resultado:'3-2', torneo:'Bundesliga 2018-19', fecha:'5 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:7,jugador:'Reus'},
    {equipo:'Borussia Dortmund',minuto:38,jugador:'Alcácer'},
    {equipo:'Bayern Munich',minuto:52,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:60,jugador:'Müller'},
    {equipo:'Borussia Dortmund',minuto:90,jugador:'Guerreiro'}
  ]
  },
  {
    id:'sa1819_juve_atl_ucl',
    local:'Juventus', visitante:'Atlético de Madrid',
    resultado:'3-0', torneo:'Octavos Champions 2018-19', fecha:'12 Mar 2019',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:27,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:49,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:86,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'sa1819_nap_rom',
    local:'Nápoles', visitante:'Roma',
    resultado:'4-0', torneo:'Serie A 2018-19', fecha:'18 Nov 2018',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:19,jugador:'Insigne'},
    {equipo:'Nápoles',minuto:37,jugador:'Milik'},
    {equipo:'Nápoles',minuto:63,jugador:'Callejón'},
    {equipo:'Nápoles',minuto:82,jugador:'Mertens'}
  ]
  },
  {
    id:'l11819_psg_lil',
    local:'PSG', visitante:'Lille',
    resultado:'2-1', torneo:'Ligue 1 2018-19', fecha:'14 Apr 2019',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:22,jugador:'Di María'},
    {equipo:'Lille',minuto:61,jugador:'Pepe'},
    {equipo:'PSG',minuto:78,jugador:'Mbappé'}
  ]
  },
  {
    id:'l11819_psg_mon',
    local:'PSG', visitante:'Monaco',
    resultado:'3-1', torneo:'Ligue 1 2018-19', fecha:'12 Nov 2018',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:15,jugador:'Neymar'},
    {equipo:'Monaco',minuto:24,jugador:'Jovetic'},
    {equipo:'PSG',minuto:52,jugador:'Mbappé'},
    {equipo:'PSG',minuto:85,jugador:'Cavani'}
  ]
  },
  {
    id:'ucl1617_rm_nap_r16',
    local:'Real Madrid', visitante:'Nápoles',
    resultado:'3-1', torneo:'Octavos Champions 2016-17 (vuelta)', fecha:'7 Mar 2017',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:24,jugador:'Insigne'},
    {equipo:'Real Madrid',minuto:25,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:54,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:71,jugador:'Casemiro'}
  ]
  },
  {
    id:'ucl1617_bar_psg_r16',
    local:'Barcelona', visitante:'PSG',
    resultado:'6-1', torneo:'Octavos Champions 2016-17 (vuelta)', fecha:'8 Mar 2017',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:3,jugador:'Suárez'},
    {equipo:'PSG',minuto:62,jugador:'Cavani'},
    {equipo:'Barcelona',minuto:50,jugador:'Messi'},
    {equipo:'Barcelona',minuto:88,jugador:'Kurzawa'},
    {equipo:'Barcelona',minuto:90,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:95,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:95,jugador:'Sergi Roberto'}
  ]
  },
  {
    id:'ucl1617_bay_ars_qf',
    local:'Bayern Munich', visitante:'Arsenal',
    resultado:'5-1', torneo:'Cuartos Champions 2016-17 (vuelta)', fecha:'19 Abr 2017',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:11,jugador:'Vidal'},
    {equipo:'Bayern Munich',minuto:25,jugador:'Robben'},
    {equipo:'Arsenal',minuto:53,jugador:'Ramsey'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:63,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Müller'}
  ]
  },
  {
    id:'ucl1617_atl_lei_qf',
    local:'Atlético de Madrid', visitante:'Leicester City',
    resultado:'1-0', torneo:'Cuartos Champions 2016-17 (vuelta)', fecha:'18 Abr 2017',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:26,jugador:'Saúl'}
  ]
  },
  {
    id:'ucl1617_rm_atl_sf',
    local:'Real Madrid', visitante:'Atlético de Madrid',
    resultado:'3-0', torneo:'Semifinal Champions 2016-17 (ida)', fecha:'2 May 2017',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:10,jugador:'Isco'},
    {equipo:'Real Madrid',minuto:14,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:42,jugador:'Isco'}
  ]
  },
  {
    id:'ucl1617_juve_mon_sf',
    local:'Juventus', visitante:'Monaco',
    resultado:'2-1', torneo:'Semifinal Champions 2016-17 (vuelta)', fecha:'9 May 2017',
    tipo:'club',
    goles:[
    {equipo:'Monaco',minuto:17,jugador:'Mbappé'},
    {equipo:'Juventus',minuto:33,jugador:'Higuaín'},
    {equipo:'Juventus',minuto:60,jugador:'Dybala'}
  ]
  },
  {
    id:'ucl1516_rm_rm2',
    local:'Real Madrid', visitante:'Roma',
    resultado:'2-0', torneo:'Champions 2015-16 Grupos', fecha:'17 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:18,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:76,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ucl1516_man_juve',
    local:'Manchester City', visitante:'Juventus',
    resultado:'1-2', torneo:'Champions 2015-16 Grupos', fecha:'15 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:25,jugador:'Morata'},
    {equipo:'Manchester City',minuto:51,jugador:'Agüero'},
    {equipo:'Juventus',minuto:70,jugador:'Morata'}
  ]
  },
  {
    id:'ucl1516_bar_bay_qf',
    local:'Barcelona', visitante:'Bayern Munich',
    resultado:'3-2', torneo:'Cuartos Champions 2015-16 (ida)', fecha:'6 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:4,jugador:'Thomas Müller'},
    {equipo:'Barcelona',minuto:11,jugador:'Suárez'},
    {equipo:'Barcelona',minuto:15,jugador:'Neymar'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Lewandowski'},
    {equipo:'Barcelona',minuto:80,jugador:'Neymar'}
  ]
  },
  {
    id:'ucl1516_bay_bar_qf',
    local:'Bayern Munich', visitante:'Barcelona',
    resultado:'2-1', torneo:'Cuartos Champions 2015-16 (vuelta)', fecha:'12 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:4,jugador:'Kimmich'},
    {equipo:'Bayern Munich',minuto:24,jugador:'Robert Lewandowski'},
    {equipo:'Barcelona',minuto:65,jugador:'Neymar'}
  ]
  },
  {
    id:'ucl1516_rm_wol_qf',
    local:'Real Madrid', visitante:'Wolfsburgo',
    resultado:'3-0', torneo:'Cuartos Champions 2015-16 (vuelta)', fecha:'12 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:17,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:38,jugador:'Cristiano Ronaldo'},
    {equipo:'Real Madrid',minuto:77,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'ucl1516_rm_man_sf',
    local:'Real Madrid', visitante:'Manchester City',
    resultado:'1-0', torneo:'Semifinal Champions 2015-16 (ida)', fecha:'26 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:20,jugador:'Fernando Morientes'}
  ]
  },
  {
    id:'ucl1516_bar_atl_sf',
    local:'Barcelona', visitante:'Atlético de Madrid',
    resultado:'2-0', torneo:'Semifinal Champions 2015-16 (ida)', fecha:'5 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:7,jugador:'Messi'},
    {equipo:'Barcelona',minuto:38,jugador:'Suárez'}
  ]
  },
  {
    id:'ucl1415_bay_sha_r16',
    local:'Bayern Munich', visitante:'Shakhtar',
    resultado:'7-0', torneo:'Octavos Champions 2014-15 (vuelta)', fecha:'11 Mar 2015',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:3,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:11,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:25,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:42,jugador:'Thiago'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:68,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:78,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl1415_rm_sch_r16',
    local:'Real Madrid', visitante:'Schalke',
    resultado:'3-4', torneo:'Octavos Champions 2014-15 (ida)', fecha:'18 Feb 2015',
    tipo:'club',
    goles:[
    {equipo:'Schalke',minuto:18,jugador:'Huntelaar'},
    {equipo:'Schalke',minuto:27,jugador:'Huntelaar'},
    {equipo:'Real Madrid',minuto:41,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:55,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:58,jugador:'Marcelo'},
    {equipo:'Schalke',minuto:78,jugador:'Howedes'}
  ]
  },
  {
    id:'ucl1415_rm_atl_sf',
    local:'Real Madrid', visitante:'Atlético de Madrid',
    resultado:'1-0', torneo:'Semifinal Champions 2014-15 (ida)', fecha:'22 Abr 2015',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:88,jugador:'Isco'}
  ]
  },
  {
    id:'ucl1415_juve_rm_sf',
    local:'Juventus', visitante:'Real Madrid',
    resultado:'2-1', torneo:'Semifinal Champions 2014-15 (vuelta)', fecha:'13 May 2015',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:8,jugador:'Tevez'},
    {equipo:'Juventus',minuto:57,jugador:'Morata'},
    {equipo:'Real Madrid',minuto:77,jugador:'Morata'}
  ]
  },
  {
    id:'pl1718_man_man',
    local:'Manchester City', visitante:'Manchester United',
    resultado:'2-1', torneo:'Premier League 2017-18', fecha:'7 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:54,jugador:'David Silva'},
    {equipo:'Manchester United',minuto:67,jugador:'Lingard'},
    {equipo:'Manchester City',minuto:78,jugador:'Nicolas Otamendi'}
  ]
  },
  {
    id:'pl1718_man_tot',
    local:'Manchester City', visitante:'Tottenham',
    resultado:'3-1', torneo:'Premier League 2017-18', fecha:'16 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:6,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:23,jugador:'Silva'},
    {equipo:'Tottenham',minuto:45,jugador:'Lamela'},
    {equipo:'Manchester City',minuto:69,jugador:'Sterling'}
  ]
  },
  {
    id:'pl1718_liv_man',
    local:'Liverpool', visitante:'Manchester City',
    resultado:'4-3', torneo:'Premier League 2017-18', fecha:'14 Ene 2018',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:9,jugador:'Salah'},
    {equipo:'Manchester City',minuto:37,jugador:'Leroy Sané'},
    {equipo:'Liverpool',minuto:52,jugador:'Alex Oxlade-Chamberlain'},
    {equipo:'Liverpool',minuto:61,jugador:'Mané'},
    {equipo:'Manchester City',minuto:66,jugador:'Bernardo Silva'},
    {equipo:'Liverpool',minuto:77,jugador:'Roberto Firmino'},
    {equipo:'Manchester City',minuto:90,jugador:'İlkay Gündoğan'}
  ]
  },
  {
    id:'pl1718_che_bar_ucl',
    local:'Chelsea', visitante:'Barcelona',
    resultado:'1-1', torneo:'Octavos Champions 2017-18 (ida)', fecha:'20 Feb 2018',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:75,jugador:'Messi'},
    {equipo:'Chelsea',minuto:85,jugador:'Willian'}
  ]
  },
  {
    id:'pl1718_tot_juve_ucl',
    local:'Tottenham', visitante:'Juventus',
    resultado:'2-2', torneo:'Octavos Champions 2017-18 (ida)', fecha:'13 Feb 2018',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:10,jugador:'Kane'},
    {equipo:'Tottenham',minuto:16,jugador:'Son'},
    {equipo:'Juventus',minuto:37,jugador:'González'},
    {equipo:'Juventus',minuto:68,jugador:'Higuaín'}
  ]
  },
  {
    id:'pl1718_man_ars',
    local:'Manchester City', visitante:'Arsenal',
    resultado:'3-0', torneo:'Premier League 2017-18', fecha:'25 Feb 2018',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:2,jugador:'Leroy Sané'},
    {equipo:'Manchester City',minuto:19,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:70,jugador:'David Silva'}
  ]
  },
  {
    id:'pl1718_liv_ars',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'3-3', torneo:'Premier League 2017-18', fecha:'22 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:10,jugador:'Giroud'},
    {equipo:'Arsenal',minuto:23,jugador:'Lacazette'},
    {equipo:'Liverpool',minuto:45,jugador:'Firmino'},
    {equipo:'Liverpool',minuto:49,jugador:'Salah'},
    {equipo:'Liverpool',minuto:52,jugador:'Coutinho'},
    {equipo:'Arsenal',minuto:71,jugador:'Mustafi'}
  ]
  },
  {
    id:'pl1718_che_man',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'0-1', torneo:'Premier League 2017-18', fecha:'30 Sep 2017',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:67,jugador:'Kevin De Bruyne'}
  ]
  },
  {
    id:'pl1718_man_wat',
    local:'Manchester City', visitante:'Watford',
    resultado:'6-0', torneo:'Premier League 2017-18', fecha:'9 Sep 2017',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:5,jugador:'Sané'},
    {equipo:'Manchester City',minuto:35,jugador:'Sterling'},
    {equipo:'Manchester City',minuto:42,jugador:'Gabriel Jesus'},
    {equipo:'Manchester City',minuto:54,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:66,jugador:'Bernardo Silva'},
    {equipo:'Manchester City',minuto:74,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'pl1617_che_man',
    local:'Chelsea', visitante:'Manchester City',
    resultado:'5-0', torneo:'Premier League 2016-17', fecha:'30 Sep 2016',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:4,jugador:'Cahill'},
    {equipo:'Chelsea',minuto:20,jugador:'Pedro'},
    {equipo:'Chelsea',minuto:45,jugador:'Diego Costa'},
    {equipo:'Chelsea',minuto:70,jugador:'Hazard'},
    {equipo:'Chelsea',minuto:82,jugador:'Willian'}
  ]
  },
  {
    id:'pl1617_man_tot',
    local:'Manchester United', visitante:'Tottenham',
    resultado:'1-0', torneo:'Premier League 2016-17', fecha:'11 Dic 2016',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:29,jugador:'Juan Mata'}
  ]
  },
  {
    id:'pl1617_liv_wat',
    local:'Liverpool', visitante:'Watford',
    resultado:'6-1', torneo:'Premier League 2016-17', fecha:'6 Nov 2016',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:3,jugador:'Mané'},
    {equipo:'Liverpool',minuto:23,jugador:'Salah'},
    {equipo:'Watford',minuto:54,jugador:'Okaka'},
    {equipo:'Liverpool',minuto:60,jugador:'Firmino'},
    {equipo:'Liverpool',minuto:68,jugador:'Lallana'},
    {equipo:'Liverpool',minuto:72,jugador:'Firmino'},
    {equipo:'Liverpool',minuto:77,jugador:'Firmino'}
  ]
  },
  {
    id:'pl1617_ars_man',
    local:'Arsenal', visitante:'Manchester City',
    resultado:'2-1', torneo:'Premier League 2016-17', fecha:'2 Abr 2017',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:41,jugador:'Kolasinac'},
    {equipo:'Manchester City',minuto:71,jugador:'Raheem Sterling'},
    {equipo:'Arsenal',minuto:87,jugador:'Santi Cazorla'}
  ]
  },
  {
    id:'pl1617_che_ars',
    local:'Chelsea', visitante:'Arsenal',
    resultado:'3-1', torneo:'Premier League 2016-17', fecha:'4 Feb 2017',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:13,jugador:'Marcos Alonso'},
    {equipo:'Arsenal',minuto:45,jugador:'Giroud'},
    {equipo:'Chelsea',minuto:51,jugador:'Diego Costa'},
    {equipo:'Chelsea',minuto:55,jugador:'Marcos Alonso'}
  ]
  },
  {
    id:'pl1617_tot_man_c',
    local:'Tottenham', visitante:'Manchester City',
    resultado:'2-2', torneo:'Premier League 2016-17', fecha:'21 Ene 2017',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:20,jugador:'Son'},
    {equipo:'Manchester City',minuto:44,jugador:'Kevin De Bruyne'},
    {equipo:'Tottenham',minuto:52,jugador:'Wanyama'},
    {equipo:'Manchester City',minuto:90,jugador:'David Silva'}
  ]
  },
  {
    id:'lla1617_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-3', torneo:'LaLiga 2016-17', fecha:'23 Abr 2017',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:33,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:73,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:77,jugador:'Casemiro'},
    {equipo:'Barcelona',minuto:85,jugador:'Rakitić'},
    {equipo:'Barcelona',minuto:92,jugador:'Messi'}
  ]
  },
  {
    id:'lla1617_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'1-1', torneo:'LaLiga 2016-17', fecha:'3 Dic 2016',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:52,jugador:'Benzema'},
    {equipo:'Barcelona',minuto:90,jugador:'Messi'}
  ]
  },
  {
    id:'lla1617_rm_val',
    local:'Real Madrid', visitante:'Valencia',
    resultado:'2-1', torneo:'LaLiga 2016-17', fecha:'22 Abr 2017',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:30,jugador:'Ronaldo'},
    {equipo:'Valencia',minuto:35,jugador:'Mangala'},
    {equipo:'Real Madrid',minuto:78,jugador:'Benzema'}
  ]
  },
  {
    id:'lla1617_atl_rm',
    local:'Atlético de Madrid', visitante:'Real Madrid',
    resultado:'1-1', torneo:'LaLiga 2016-17', fecha:'19 Nov 2016',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:17,jugador:'Ronaldo'},
    {equipo:'Atlético de Madrid',minuto:60,jugador:'Saúl'}
  ]
  },
  {
    id:'lla1718_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-2', torneo:'LaLiga 2017-18', fecha:'6 May 2018',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:44,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:63,jugador:'Suárez'},
    {equipo:'Barcelona',minuto:75,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:86,jugador:'Lucas Vázquez'}
  ]
  },
  {
    id:'lla1718_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'0-3', torneo:'LaLiga 2017-18', fecha:'23 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:54,jugador:'Messi'},
    {equipo:'Barcelona',minuto:63,jugador:'Alba'},
    {equipo:'Barcelona',minuto:83,jugador:'Aleix Vidal'}
  ]
  },
  {
    id:'lla1718_atl_bar',
    local:'Atlético de Madrid', visitante:'Barcelona',
    resultado:'1-1', torneo:'LaLiga 2017-18', fecha:'14 Oct 2017',
    tipo:'club',
    goles:[
    {equipo:'Atlético de Madrid',minuto:8,jugador:'Antoine Griezmann'},
    {equipo:'Barcelona',minuto:86,jugador:'Paco Alcácer'}
  ]
  },
  {
    id:'bund1718_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'6-0', torneo:'Bundesliga 2017-18', fecha:'4 Nov 2017',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:14,jugador:'Tolisso'},
    {equipo:'Bayern Munich',minuto:26,jugador:'James'},
    {equipo:'Bayern Munich',minuto:34,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:63,jugador:'Ribéry'},
    {equipo:'Bayern Munich',minuto:68,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund1617_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'1-0', torneo:'DFL Supercopa 2017', fecha:'5 Ago 2017',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:55,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund1920_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'4-0', torneo:'Bundesliga 2019-20', fecha:'9 Nov 2019',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:24,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:43,jugador:'Coman'},
    {equipo:'Bayern Munich',minuto:65,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:81,jugador:'Goretzka'}
  ]
  },
  {
    id:'bund2021_bay_lei',
    local:'Bayern Munich', visitante:'Bayer Leverkusen',
    resultado:'6-2', torneo:'Bundesliga 2020-21', fecha:'6 Feb 2021',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:5,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:8,jugador:'Lewandowski'},
    {equipo:'Bayer Leverkusen',minuto:20,jugador:'Alario'},
    {equipo:'Bayern Munich',minuto:35,jugador:'Kimmich'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Davies'},
    {equipo:'Bayer Leverkusen',minuto:61,jugador:'Demirbay'},
    {equipo:'Bayern Munich',minuto:70,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:89,jugador:'Choupo-Moting'}
  ]
  },
  {
    id:'bund1920_dor_fra',
    local:'Borussia Dortmund', visitante:'Frankfurt',
    resultado:'4-0', torneo:'Bundesliga 2019-20', fecha:'14 Sep 2019',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:29,jugador:'Haaland'},
    {equipo:'Borussia Dortmund',minuto:50,jugador:'Sancho'},
    {equipo:'Borussia Dortmund',minuto:66,jugador:'Brandt'},
    {equipo:'Borussia Dortmund',minuto:88,jugador:'Hazard'}
  ]
  },
  {
    id:'bund1819_bay_wer',
    local:'Bayern Munich', visitante:'Werder Bremen',
    resultado:'3-0', torneo:'Bundesliga 2018-19', fecha:'6 Abr 2019',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:19,jugador:'Coman'},
    {equipo:'Bayern Munich',minuto:45,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:61,jugador:'Ribéry'}
  ]
  },
  {
    id:'bund1617_bay_lip',
    local:'Bayern Munich', visitante:'Leipzig',
    resultado:'5-4', torneo:'Bundesliga 2016-17', fecha:'28 Oct 2016',
    tipo:'club',
    goles:[
    {equipo:'Leipzig',minuto:20,jugador:'Augustin'},
    {equipo:'Bayern Munich',minuto:30,jugador:'Lewandowski'},
    {equipo:'Leipzig',minuto:33,jugador:'Sabitzer'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Müller'},
    {equipo:'Leipzig',minuto:48,jugador:'Forsberg'},
    {equipo:'Bayern Munich',minuto:56,jugador:'Müller'},
    {equipo:'Bayern Munich',minuto:68,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:83,jugador:'Costa'},
    {equipo:'Leipzig',minuto:90,jugador:'Werner'}
  ]
  },
  {
    id:'sa1920_juve_int',
    local:'Juventus', visitante:'Inter de Milán',
    resultado:'2-0', torneo:'Serie A 2019-20', fecha:'1 Mar 2020',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:16,jugador:'Ramsey'},
    {equipo:'Juventus',minuto:53,jugador:'Dybala'}
  ]
  },
  {
    id:'sa1920_nap_juve',
    local:'Nápoles', visitante:'Juventus',
    resultado:'2-1', torneo:'Coppa Italia 2020', fecha:'13 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:45,jugador:'Mertens'},
    {equipo:'Nápoles',minuto:60,jugador:'Insigne'},
    {equipo:'Juventus',minuto:61,jugador:'Gonzalo Higuaín'}
  ]
  },
  {
    id:'sa1920_int_samp',
    local:'Inter de Milán', visitante:'Sampdoria',
    resultado:'5-1', torneo:'Serie A 2019-20', fecha:'18 Jul 2020',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:7,jugador:'Candreva'},
    {equipo:'Inter de Milán',minuto:22,jugador:'Lautaro Martínez'},
    {equipo:'Sampdoria',minuto:44,jugador:'Keita Baldé'},
    {equipo:'Inter de Milán',minuto:52,jugador:'Candreva'},
    {equipo:'Inter de Milán',minuto:57,jugador:'Young'},
    {equipo:'Inter de Milán',minuto:78,jugador:'Sanchez'}
  ]
  },
  {
    id:'sa1819_juve_nap',
    local:'Juventus', visitante:'Nápoles',
    resultado:'3-1', torneo:'Serie A 2018-19', fecha:'3 Feb 2019',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:14,jugador:'Cristiano Ronaldo'},
    {equipo:'Juventus',minuto:39,jugador:'Emre Can'},
    {equipo:'Nápoles',minuto:65,jugador:'Callejon'},
    {equipo:'Juventus',minuto:70,jugador:'Miralem Pjanic'}
  ]
  },
  {
    id:'sa1718_nap_juve',
    local:'Nápoles', visitante:'Juventus',
    resultado:'2-1', torneo:'Serie A 2017-18', fecha:'2 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:29,jugador:'Hamsik'},
    {equipo:'Nápoles',minuto:76,jugador:'Insigne'},
    {equipo:'Juventus',minuto:81,jugador:'Higuaín'}
  ]
  },
  {
    id:'sa1718_juve_rom',
    local:'Juventus', visitante:'Roma',
    resultado:'1-0', torneo:'Serie A 2017-18', fecha:'23 Dic 2017',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:46,jugador:'Mandzukic'}
  ]
  },
  {
    id:'sa1617_juve_rom',
    local:'Juventus', visitante:'Roma',
    resultado:'3-1', torneo:'Serie A 2016-17', fecha:'17 Dic 2016',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:6,jugador:'Higuaín'},
    {equipo:'Juventus',minuto:44,jugador:'Higuaín'},
    {equipo:'Roma',minuto:56,jugador:'Nainggolan'},
    {equipo:'Juventus',minuto:72,jugador:'Dybala'}
  ]
  },
  {
    id:'sa1617_rom_laz',
    local:'Roma', visitante:'Lazio',
    resultado:'2-0', torneo:'Serie A 2016-17', fecha:'4 Dic 2016',
    tipo:'club',
    goles:[
    {equipo:'Roma',minuto:20,jugador:'Perotti'},
    {equipo:'Roma',minuto:75,jugador:'Džeko'}
  ]
  },
  {
    id:'sa2021_nap_laz',
    local:'Nápoles', visitante:'Lazio',
    resultado:'5-2', torneo:'Serie A 2020-21', fecha:'22 Nov 2020',
    tipo:'club',
    goles:[
    {equipo:'Nápoles',minuto:12,jugador:'Insigne'},
    {equipo:'Nápoles',minuto:25,jugador:'Mertens'},
    {equipo:'Lazio',minuto:44,jugador:'Immobile'},
    {equipo:'Nápoles',minuto:60,jugador:'Politano'},
    {equipo:'Lazio',minuto:71,jugador:'Acerbi'},
    {equipo:'Nápoles',minuto:80,jugador:'Osimhen'},
    {equipo:'Nápoles',minuto:90,jugador:'Elmas'}
  ]
  },
  {
    id:'sa2021_int_sas',
    local:'Inter de Milán', visitante:'Sassuolo',
    resultado:'3-0', torneo:'Serie A 2020-21', fecha:'28 Nov 2020',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milán',minuto:13,jugador:'Lukaku'},
    {equipo:'Inter de Milán',minuto:44,jugador:'Perisic'},
    {equipo:'Inter de Milán',minuto:87,jugador:'Lautaro'}
  ]
  },
  {
    id:'l11617_psg_bar_ucl',
    local:'PSG', visitante:'Barcelona',
    resultado:'4-0', torneo:'Octavos Champions 2016-17 (ida)', fecha:'14 Feb 2017',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:18,jugador:'Di María'},
    {equipo:'PSG',minuto:40,jugador:'Di María'},
    {equipo:'PSG',minuto:55,jugador:'Draxler'},
    {equipo:'PSG',minuto:62,jugador:'Cavani'}
  ]
  },
  {
    id:'l11617_psg_man',
    local:'PSG', visitante:'Monaco',
    resultado:'5-2', torneo:'Ligue 1 2016-17', fecha:'19 Nov 2016',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:4,jugador:'Di María'},
    {equipo:'PSG',minuto:17,jugador:'Cavani'},
    {equipo:'Monaco',minuto:28,jugador:'Falcao'},
    {equipo:'PSG',minuto:44,jugador:'Cavani'},
    {equipo:'Monaco',minuto:62,jugador:'Bakayoko'},
    {equipo:'PSG',minuto:70,jugador:'Matuidi'},
    {equipo:'PSG',minuto:85,jugador:'Draxler'}
  ]
  },
  {
    id:'l11718_psg_nan',
    local:'PSG', visitante:'Nantes',
    resultado:'4-1', torneo:'Ligue 1 2017-18', fecha:'14 Ene 2018',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:5,jugador:'Draxler'},
    {equipo:'PSG',minuto:25,jugador:'Cavani'},
    {equipo:'PSG',minuto:62,jugador:'Mbappé'},
    {equipo:'Nantes',minuto:70,jugador:'Thomasson'},
    {equipo:'PSG',minuto:81,jugador:'Neymar'}
  ]
  },
  {
    id:'l11920_psg_man',
    local:'PSG', visitante:'Metz',
    resultado:'5-0', torneo:'Ligue 1 2019-20', fecha:'8 Sep 2019',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:5,jugador:'Neymar'},
    {equipo:'PSG',minuto:18,jugador:'Mbappé'},
    {equipo:'PSG',minuto:24,jugador:'Neymar'},
    {equipo:'PSG',minuto:56,jugador:'Icardi'},
    {equipo:'PSG',minuto:80,jugador:'Neymar'}
  ]
  },
  {
    id:'l12021_psg_lei',
    local:'PSG', visitante:'Leicester City',
    resultado:'0-0', torneo:'Champions 2021-22 Grupos', fecha:'28 Sep 2021',
    tipo:'club',
    goles:[]
  },
  {
    id:'euro24_grA_sco_sui',
    local:'Escocia', visitante:'Suiza',
    resultado:'1-1', torneo:'Grupo A Euro 2024', fecha:'19 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:8,jugador:'Embolo'},
    {equipo:'Escocia',minuto:79,jugador:'Andrew Robertson'}
  ]
  },
  {
    id:'euro24_grB_alb_cro',
    local:'Albania', visitante:'Croacia',
    resultado:'2-2', torneo:'Grupo B Euro 2024', fecha:'19 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Albania',minuto:11,jugador:'Mirlind Daku'},
    {equipo:'Croacia',minuto:74,jugador:'Modrić'},
    {equipo:'Croacia',minuto:76,jugador:'Pasalic'},
    {equipo:'Albania',minuto:90,jugador:'Daku'}
  ]
  },
  {
    id:'euro24_grB_esp_alb',
    local:'España', visitante:'Albania',
    resultado:'1-0', torneo:'Grupo B Euro 2024', fecha:'24 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:12,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'euro24_grC_slo_ser',
    local:'Eslovenia', visitante:'Serbia',
    resultado:'1-1', torneo:'Grupo C Euro 2024', fecha:'20 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovenia',minuto:69,jugador:'Karnicnik'},
    {equipo:'Serbia',minuto:87,jugador:'Mitrović'}
  ]
  },
  {
    id:'euro24_grD_aut_fra',
    local:'Austria', visitante:'Francia',
    resultado:'1-0', torneo:'Grupo D Euro 2024', fecha:'17 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Austria',minuto:8,jugador:'Wober'}
  ]
  },
  {
    id:'euro24_grD_pol_aut',
    local:'Polonia', visitante:'Austria',
    resultado:'1-3', torneo:'Grupo D Euro 2024', fecha:'21 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Polonia',minuto:31,jugador:'Baumgartner'},
    {equipo:'Austria',minuto:30,jugador:'Sabitzer'},
    {equipo:'Austria',minuto:66,jugador:'Grull'},
    {equipo:'Austria',minuto:74,jugador:'Arnautovic'}
  ]
  },
  {
    id:'euro24_grE_rom_ukr',
    local:'Rumanía', visitante:'Ucrania',
    resultado:'3-0', torneo:'Grupo E Euro 2024', fecha:'17 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Rumanía',minuto:29,jugador:'Dragus'},
    {equipo:'Rumanía',minuto:53,jugador:'Marin'},
    {equipo:'Rumanía',minuto:57,jugador:'Razvan Marin'}
  ]
  },
  {
    id:'euro24_grF_geo_che',
    local:'Georgia', visitante:'República Checa',
    resultado:'1-1', torneo:'Grupo F Euro 2024', fecha:'22 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Georgia',minuto:65,jugador:'Kvaratskhelia'},
    {equipo:'República Checa',minuto:82,jugador:'Chory'}
  ]
  },
  {
    id:'euro24_r16_sui_ita',
    local:'Suiza', visitante:'Italia',
    resultado:'2-0', torneo:'Octavos Euro 2024', fecha:'29 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:37,jugador:'Freuler'},
    {equipo:'Suiza',minuto:46,jugador:'Vargas'}
  ]
  },
  {
    id:'euro24_r16_ale_den',
    local:'Alemania', visitante:'Dinamarca',
    resultado:'2-0', torneo:'Octavos Euro 2024', fecha:'29 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:53,jugador:'Füllkrug'},
    {equipo:'Alemania',minuto:68,jugador:'Musiala'}
  ]
  },
  {
    id:'euro24_r16_por_slo_r',
    local:'Portugal', visitante:'Eslovenia',
    resultado:'3-0 (p)', torneo:'Octavos Euro 2024', fecha:'1 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:56,jugador:'Ronaldo'}
  ]
  },
  {
    id:'euro24_r16_esp_geo_r',
    local:'España', visitante:'Georgia',
    resultado:'4-1', torneo:'Octavos Euro 2024', fecha:'30 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Georgia',minuto:18,jugador:'Mikautadze'},
    {equipo:'España',minuto:39,jugador:'Fabian Ruiz'},
    {equipo:'España',minuto:60,jugador:'Olmo'},
    {equipo:'España',minuto:73,jugador:'Carvajal'},
    {equipo:'España',minuto:83,jugador:'Yamal'}
  ]
  },
  {
    id:'euro24_qf_esp_ale',
    local:'España', visitante:'Alemania',
    resultado:'2-1', torneo:'Cuartos Euro 2024', fecha:'5 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:51,jugador:'Florian Wirtz'},
    {equipo:'España',minuto:89,jugador:'Dani Olmo'},
    {equipo:'España',minuto:119,jugador:'Mikel Merino'}
  ]
  },
  {
    id:'euro24_qf_por_fra',
    local:'Portugal', visitante:'Francia',
    resultado:'0-0 (p)', torneo:'Cuartos Euro 2024', fecha:'5 Jul 2024',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'euro24_semi_fra_esp',
    local:'Francia', visitante:'España',
    resultado:'1-2', torneo:'Semifinal Euro 2024', fecha:'9 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:9,jugador:'Lamine Yamal'},
    {equipo:'España',minuto:25,jugador:'Olmo'},
    {equipo:'Francia',minuto:36,jugador:'Kolo Muani'}
  ]
  },
  {
    id:'euro24_semi_ned_eng',
    local:'Países Bajos', visitante:'Inglaterra',
    resultado:'1-2', torneo:'Semifinal Euro 2024', fecha:'10 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:7,jugador:'Simons'},
    {equipo:'Inglaterra',minuto:18,jugador:'Saka'},
    {equipo:'Inglaterra',minuto:90,jugador:'Watkins'}
  ]
  },
  {
    id:'euro20_grA_gal_sui',
    local:'Gales', visitante:'Suiza',
    resultado:'1-1', torneo:'Grupo A Euro 2020', fecha:'12 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:49,jugador:'Embolo'},
    {equipo:'Gales',minuto:74,jugador:'Moore'}
  ]
  },
  {
    id:'euro20_grB_den_fin',
    local:'Dinamarca', visitante:'Finlandia',
    resultado:'0-1', torneo:'Grupo B Euro 2020', fecha:'12 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Finlandia',minuto:59,jugador:'Pohjanpalo'}
  ]
  },
  {
    id:'euro20_grC_aut_nmk',
    local:'Austria', visitante:'Macedonia del Norte',
    resultado:'3-1', torneo:'Grupo C Euro 2020', fecha:'13 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Macedonia del Norte',minuto:28,jugador:'Pandev'},
    {equipo:'Austria',minuto:78,jugador:'Lainer'},
    {equipo:'Austria',minuto:89,jugador:'Arnautovic'},
    {equipo:'Austria',minuto:92,jugador:'Kalajdzic'}
  ]
  },
  {
    id:'euro20_grC_ukr_aut',
    local:'Ucrania', visitante:'Austria',
    resultado:'0-1', torneo:'Grupo C Euro 2020', fecha:'21 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Austria',minuto:21,jugador:'Baumgartner'}
  ]
  },
  {
    id:'euro20_grD_cro_cze',
    local:'Croacia', visitante:'Rep. Checa',
    resultado:'1-1', torneo:'Grupo D Euro 2020', fecha:'18 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:37,jugador:'Pesic'},
    {equipo:'Rep. Checa',minuto:52,jugador:'Schick'}
  ]
  },
  {
    id:'euro20_grE_pol_slo',
    local:'Polonia', visitante:'Eslovaquia',
    resultado:'1-2', torneo:'Grupo E Euro 2020', fecha:'14 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Eslovaquia',minuto:18,jugador:'Szymanski'},
    {equipo:'Eslovaquia',minuto:69,jugador:'Duda'},
    {equipo:'Polonia',minuto:90,jugador:'Linetty'}
  ]
  },
  {
    id:'euro20_grF_hun_fra',
    local:'Hungría', visitante:'Francia',
    resultado:'1-1', torneo:'Grupo F Euro 2020', fecha:'19 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Hungría',minuto:45,jugador:'Fiola'},
    {equipo:'Francia',minuto:66,jugador:'Griezmann'}
  ]
  },
  {
    id:'euro20_grF_por_hun',
    local:'Portugal', visitante:'Hungría',
    resultado:'3-0', torneo:'Grupo F Euro 2020', fecha:'15 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:84,jugador:'Raphaël Guerreiro'},
    {equipo:'Portugal',minuto:87,jugador:'Cristiano Ronaldo'},
    {equipo:'Portugal',minuto:90,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'euro20_r16_ita_aut',
    local:'Italia', visitante:'Austria',
    resultado:'2-1', torneo:'Octavos Euro 2020', fecha:'26 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:95,jugador:'Federico Chiesa'},
    {equipo:'Italia',minuto:105,jugador:'Pessina'},
    {equipo:'Austria',minuto:114,jugador:'Sasa Kalajdzic'}
  ]
  },
  {
    id:'euro20_r16_gal_den',
    local:'Gales', visitante:'Dinamarca',
    resultado:'0-4', torneo:'Octavos Euro 2020', fecha:'26 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:27,jugador:'Kasper Dolberg'},
    {equipo:'Dinamarca',minuto:48,jugador:'Dolberg'},
    {equipo:'Dinamarca',minuto:88,jugador:'Joakim Maehle'},
    {equipo:'Dinamarca',minuto:90,jugador:'Martin Braithwaite'}
  ]
  },
  {
    id:'euro20_qf_esp_sui_r',
    local:'España', visitante:'Suiza',
    resultado:'1-1 (p)', torneo:'Cuartos Euro 2020', fecha:'2 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:8,jugador:'Denis Zakaria'},
    {equipo:'Suiza',minuto:68,jugador:'Xherdan Shaqiri'}
  ]
  },
  {
    id:'euro20_qf_den_cze',
    local:'Dinamarca', visitante:'Rep. Checa',
    resultado:'2-1', torneo:'Cuartos Euro 2020', fecha:'3 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:5,jugador:'Thomas Delaney'},
    {equipo:'Dinamarca',minuto:55,jugador:'Kasper Dolberg'},
    {equipo:'Rep. Checa',minuto:49,jugador:'Tomas Holes'}
  ]
  },
  {
    id:'euro20_qf_ita_bel_r',
    local:'Italia', visitante:'Bélgica',
    resultado:'2-1', torneo:'Cuartos Euro 2020', fecha:'2 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:44,jugador:'Lukaku'},
    {equipo:'Italia',minuto:31,jugador:'Barella'},
    {equipo:'Italia',minuto:44,jugador:'Insigne'}
  ]
  },
  {
    id:'euro16_grA_alb_sui',
    local:'Albania', visitante:'Suiza',
    resultado:'0-1', torneo:'Grupo A Euro 2016', fecha:'11 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:5,jugador:'Xhaka'}
  ]
  },
  {
    id:'euro16_grA_fra_sui',
    local:'Francia', visitante:'Suiza',
    resultado:'5-2', torneo:'Grupo A Euro 2016', fecha:'19 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:18,jugador:'Xhaka'},
    {equipo:'Francia',minuto:19,jugador:'Giroud'},
    {equipo:'Francia',minuto:25,jugador:'Payet'},
    {equipo:'Suiza',minuto:77,jugador:'Gavranovic'},
    {equipo:'Francia',minuto:85,jugador:'Cabaye'},
    {equipo:'Francia',minuto:87,jugador:'Sissoko'},
    {equipo:'Francia',minuto:89,jugador:'Matuidi'}
  ]
  },
  {
    id:'euro16_grB_eng_wal',
    local:'Inglaterra', visitante:'Gales',
    resultado:'2-1', torneo:'Grupo B Euro 2016', fecha:'16 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Gales',minuto:42,jugador:'Bale'},
    {equipo:'Inglaterra',minuto:92,jugador:'Vardy'},
    {equipo:'Inglaterra',minuto:95,jugador:'Sturridge'}
  ]
  },
  {
    id:'euro16_grC_ger_ukr',
    local:'Alemania', visitante:'Ucrania',
    resultado:'2-0', torneo:'Grupo C Euro 2016', fecha:'12 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:9,jugador:'Müller'},
    {equipo:'Alemania',minuto:57,jugador:'Mustafi'}
  ]
  },
  {
    id:'euro16_grD_esp_tur',
    local:'España', visitante:'Turquía',
    resultado:'3-0', torneo:'Grupo D Euro 2016', fecha:'17 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:7,jugador:'Morata'},
    {equipo:'España',minuto:34,jugador:'Nolito'},
    {equipo:'España',minuto:90,jugador:'Morata'}
  ]
  },
  {
    id:'euro16_grE_irl_sue',
    local:'República de Irlanda', visitante:'Suecia',
    resultado:'1-1', torneo:'Grupo E Euro 2016', fecha:'13 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Irlanda',minuto:48,jugador:'Weimann'},
    {equipo:'Suecia',minuto:71,jugador:'Ciaran Clark'}
  ]
  },
  {
    id:'euro16_grE_ita_irl',
    local:'Italia', visitante:'República de Irlanda',
    resultado:'0-1', torneo:'Grupo E Euro 2016', fecha:'22 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Irlanda',minuto:85,jugador:'Brady'}
  ]
  },
  {
    id:'euro16_r16_cro_por',
    local:'Croacia', visitante:'Portugal',
    resultado:'0-1', torneo:'Octavos Euro 2016', fecha:'25 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:117,jugador:'Quaresma'}
  ]
  },
  {
    id:'euro16_r16_pol_sui',
    local:'Polonia', visitante:'Suiza',
    resultado:'1-1 (p)', torneo:'Octavos Euro 2016', fecha:'25 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:39,jugador:'Xhaka'},
    {equipo:'Polonia',minuto:82,jugador:'Lewandowski'}
  ]
  },
  {
    id:'euro16_r16_hun_bel',
    local:'Hungría', visitante:'Bélgica',
    resultado:'0-4', torneo:'Octavos Euro 2016', fecha:'26 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Bélgica',minuto:10,jugador:'Fellaini'},
    {equipo:'Bélgica',minuto:21,jugador:'Mertens'},
    {equipo:'Bélgica',minuto:64,jugador:'Alderweireld'},
    {equipo:'Bélgica',minuto:79,jugador:'Hazard'}
  ]
  },
  {
    id:'euro16_r16_fra_irl',
    local:'Francia', visitante:'República de Irlanda',
    resultado:'2-1', torneo:'Octavos Euro 2016', fecha:'26 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Irlanda',minuto:2,jugador:'Brady'},
    {equipo:'Francia',minuto:57,jugador:'Griezmann'},
    {equipo:'Francia',minuto:61,jugador:'Griezmann'}
  ]
  },
  {
    id:'euro16_r16_ger_slo',
    local:'Alemania', visitante:'Eslovaquia',
    resultado:'3-0', torneo:'Octavos Euro 2016', fecha:'26 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:8,jugador:'Boateng'},
    {equipo:'Alemania',minuto:43,jugador:'Draxler'},
    {equipo:'Alemania',minuto:63,jugador:'Müller'}
  ]
  },
  {
    id:'euro16_r16_ita_esp',
    local:'Italia', visitante:'España',
    resultado:'2-0', torneo:'Octavos Euro 2016', fecha:'27 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:33,jugador:'Chiellini'},
    {equipo:'Italia',minuto:91,jugador:'Pellè'}
  ]
  },
  {
    id:'euro16_qf_fra_isl',
    local:'Francia', visitante:'Islandia',
    resultado:'5-2', torneo:'Cuartos Euro 2016', fecha:'3 Jul 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:12,jugador:'Giroud'},
    {equipo:'Islandia',minuto:43,jugador:'Bjarnason'},
    {equipo:'Francia',minuto:45,jugador:'Pogba'},
    {equipo:'Francia',minuto:47,jugador:'Payet'},
    {equipo:'Islandia',minuto:59,jugador:'Bjarnason'},
    {equipo:'Francia',minuto:60,jugador:'Griezmann'},
    {equipo:'Francia',minuto:83,jugador:'Martial'}
  ]
  },
  {
    id:'euro16_qf_por_pol',
    local:'Portugal', visitante:'Polonia',
    resultado:'1-1 (p)', torneo:'Cuartos Euro 2016', fecha:'30 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Polonia',minuto:2,jugador:'Blaszczykowski'},
    {equipo:'Portugal',minuto:33,jugador:'Renato Sanches'}
  ]
  },
  {
    id:'euro16_semi_por_wal',
    local:'Portugal', visitante:'Gales',
    resultado:'2-0', torneo:'Semifinal Euro 2016', fecha:'6 Jul 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:50,jugador:'Ronaldo'},
    {equipo:'Portugal',minuto:53,jugador:'Nani'}
  ]
  },
  {
    id:'euro16_semi_fra_ger',
    local:'Francia', visitante:'Alemania',
    resultado:'2-0', torneo:'Semifinal Euro 2016', fecha:'7 Jul 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:45,jugador:'Griezmann'},
    {equipo:'Francia',minuto:72,jugador:'Griezmann'}
  ]
  },
  {
    id:'euro12_r16_ger_gre',
    local:'Alemania', visitante:'Grecia',
    resultado:'4-2', torneo:'Octavos Euro 2012', fecha:'22 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Grecia',minuto:55,jugador:'Samaras'},
    {equipo:'Alemania',minuto:39,jugador:'Müller'},
    {equipo:'Alemania',minuto:68,jugador:'Klose'},
    {equipo:'Grecia',minuto:89,jugador:'Salpingidis'},
    {equipo:'Alemania',minuto:72,jugador:'Reus'},
    {equipo:'Alemania',minuto:90,jugador:'Khedira'}
  ]
  },
  {
    id:'euro12_r16_por_cze',
    local:'Portugal', visitante:'Rep. Checa',
    resultado:'1-0', torneo:'Octavos Euro 2012', fecha:'21 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:79,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'euro12_qf_ger_gre2',
    local:'Alemania', visitante:'Grecia',
    resultado:'4-2', torneo:'Cuartos Euro 2012', fecha:'22 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:39,jugador:'Müller'},
    {equipo:'Grecia',minuto:55,jugador:'Samaras'},
    {equipo:'Alemania',minuto:68,jugador:'Klose'},
    {equipo:'Alemania',minuto:72,jugador:'Reus'},
    {equipo:'Grecia',minuto:89,jugador:'Salpingidis'},
    {equipo:'Alemania',minuto:91,jugador:'Khedira'}
  ]
  },
  {
    id:'euro12_qf_por_cze2',
    local:'Portugal', visitante:'Rep. Checa',
    resultado:'1-0', torneo:'Cuartos Euro 2012', fecha:'21 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:79,jugador:'Cristiano Ronaldo'}
  ]
  },
  {
    id:'euro12_qf_esp_fra',
    local:'España', visitante:'Francia',
    resultado:'2-0', torneo:'Cuartos Euro 2012', fecha:'23 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:19,jugador:'Alonso'},
    {equipo:'España',minuto:90,jugador:'Alonso'}
  ]
  },
  {
    id:'euro12_semi_esp_por',
    local:'España', visitante:'Portugal',
    resultado:'0-0 (p)', torneo:'Semifinal Euro 2012', fecha:'27 Jun 2012',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'euro12_semi_ger_ita',
    local:'Alemania', visitante:'Italia',
    resultado:'1-2', torneo:'Semifinal Euro 2012', fecha:'28 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:20,jugador:'Balotelli'},
    {equipo:'Italia',minuto:36,jugador:'Balotelli'},
    {equipo:'Alemania',minuto:92,jugador:'Özil'}
  ]
  },
  {
    id:'euro08_grB_ale_pol',
    local:'Alemania', visitante:'Polonia',
    resultado:'2-0', torneo:'Grupo B Euro 2008', fecha:'8 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:72,jugador:'Podolski'},
    {equipo:'Alemania',minuto:90,jugador:'Klose'}
  ]
  },
  {
    id:'euro08_r16_ned_rus',
    local:'Países Bajos', visitante:'Rusia',
    resultado:'1-3', torneo:'Cuartos Euro 2008', fecha:'21 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:52,jugador:'Van Nistelrooy'},
    {equipo:'Rusia',minuto:56,jugador:'Pavlyuchenko'},
    {equipo:'Rusia',minuto:112,jugador:'Arshavin'},
    {equipo:'Rusia',minuto:116,jugador:'Gusev'}
  ]
  },
  {
    id:'euro08_r16_tur_cro',
    local:'Turquía', visitante:'Croacia',
    resultado:'1-1 (p)', torneo:'Cuartos Euro 2008', fecha:'20 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:119,jugador:'Klasnić'},
    {equipo:'Turquía',minuto:122,jugador:'Semih Şentürk'}
  ]
  },
  {
    id:'euro08_semi_ale_tur',
    local:'Alemania', visitante:'Turquía',
    resultado:'3-2', torneo:'Semifinal Euro 2008', fecha:'25 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'Turquía',minuto:22,jugador:'Ugur Boral'},
    {equipo:'Alemania',minuto:26,jugador:'Schweinsteiger'},
    {equipo:'Turquía',minuto:86,jugador:'Semih'},
    {equipo:'Alemania',minuto:79,jugador:'Klose'},
    {equipo:'Alemania',minuto:90,jugador:'Lahm'}
  ]
  },
  {
    id:'euro08_semi_rus_esp',
    local:'Rusia', visitante:'España',
    resultado:'0-3', torneo:'Semifinal Euro 2008', fecha:'26 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:20,jugador:'Xavi'},
    {equipo:'España',minuto:74,jugador:'Guiza'},
    {equipo:'España',minuto:82,jugador:'Silva'}
  ]
  },
  {
    id:'euro08_final_ger_esp',
    local:'Alemania', visitante:'España',
    resultado:'0-1', torneo:'Final Euro 2008', fecha:'29 Jun 2008',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:33,jugador:'Torres'}
  ]
  },
  {
    id:'wc22_grD_fra_tun',
    local:'Francia', visitante:'Túnez',
    resultado:'0-1', torneo:'Grupo D Mundial 2022', fecha:'30 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Túnez',minuto:58,jugador:'Khazri'}
  ]
  },
  {
    id:'wc22_grD_aus_pol',
    local:'Australia', visitante:'Polonia',
    resultado:'0-1', torneo:'Grupo D Mundial 2022', fecha:'30 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Polonia',minuto:39,jugador:'Levandowski'}
  ]
  },
  {
    id:'wc22_grE_jap_cos',
    local:'Japón', visitante:'Costa Rica',
    resultado:'0-1', torneo:'Grupo E Mundial 2022', fecha:'27 Nov 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Costa Rica',minuto:81,jugador:'Fuller'}
  ]
  },
  {
    id:'wc22_grE_ale_cos',
    local:'Alemania', visitante:'Costa Rica',
    resultado:'4-2', torneo:'Grupo E Mundial 2022', fecha:'1 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Costa Rica',minuto:58,jugador:'Vargas'},
    {equipo:'Alemania',minuto:10,jugador:'Sergio Gnabry'},
    {equipo:'Alemania',minuto:62,jugador:'Kai Havertz'},
    {equipo:'Costa Rica',minuto:76,jugador:'Vargas'},
    {equipo:'Alemania',minuto:85,jugador:'Kai Havertz'},
    {equipo:'Alemania',minuto:89,jugador:'Niclas Füllkrug'}
  ]
  },
  {
    id:'wc22_grG_bra_cam',
    local:'Brasil', visitante:'Camerún',
    resultado:'0-1', torneo:'Grupo G Mundial 2022', fecha:'2 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Camerún',minuto:92,jugador:'Aboubakar'}
  ]
  },
  {
    id:'wc22_grH_kor_por',
    local:'Corea del Sur', visitante:'Portugal',
    resultado:'2-1', torneo:'Grupo H Mundial 2022', fecha:'2 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:5,jugador:'Ricardo Horta'},
    {equipo:'Corea del Sur',minuto:27,jugador:'Young-gwon Kim'},
    {equipo:'Corea del Sur',minuto:90,jugador:'Hwang Hee-chan'}
  ]
  },
  {
    id:'wc22_grH_uru_gha',
    local:'Uruguay', visitante:'Ghana',
    resultado:'2-0', torneo:'Grupo H Mundial 2022', fecha:'2 Dic 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:26,jugador:'Giménez'},
    {equipo:'Uruguay',minuto:32,jugador:'Maxi Gómez'}
  ]
  },
  {
    id:'wc18_grA_uru_sau',
    local:'Uruguay', visitante:'Arabia Saudita',
    resultado:'1-0', torneo:'Grupo A Mundial 2018', fecha:'20 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:23,jugador:'Suárez'}
  ]
  },
  {
    id:'wc18_grA_uru_rus',
    local:'Uruguay', visitante:'Rusia',
    resultado:'3-0', torneo:'Grupo A Mundial 2018', fecha:'25 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:9,jugador:'Luis Suárez'},
    {equipo:'Uruguay',minuto:20,jugador:'Luis Suárez'},
    {equipo:'Uruguay',minuto:90,jugador:'Cavani'}
  ]
  },
  {
    id:'wc18_grB_ira_esp',
    local:'Irán', visitante:'España',
    resultado:'0-1', torneo:'Grupo B Mundial 2018', fecha:'20 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:54,jugador:'Iago Aspas'}
  ]
  },
  {
    id:'wc18_grB_mar_esp',
    local:'Marruecos', visitante:'España',
    resultado:'2-2', torneo:'Grupo B Mundial 2018', fecha:'25 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:19,jugador:'Iago Aspas'},
    {equipo:'Marruecos',minuto:81,jugador:'Boutaïb'},
    {equipo:'Marruecos',minuto:81,jugador:'Khalid Boutaïb'},
    {equipo:'España',minuto:90,jugador:'Iago Aspas'}
  ]
  },
  {
    id:'wc18_grC_per_den',
    local:'Perú', visitante:'Dinamarca',
    resultado:'0-1', torneo:'Grupo C Mundial 2018', fecha:'16 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Dinamarca',minuto:59,jugador:'Yussuf Poulsen'}
  ]
  },
  {
    id:'wc18_grD_iss_cro',
    local:'Islandia', visitante:'Croacia',
    resultado:'1-2', torneo:'Grupo D Mundial 2018', fecha:'26 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Islandia',minuto:76,jugador:'Finnbogason'},
    {equipo:'Croacia',minuto:53,jugador:'Ivan Perišić'},
    {equipo:'Croacia',minuto:90,jugador:'Luka Modrić'}
  ]
  },
  {
    id:'wc18_grE_bra_cos',
    local:'Brasil', visitante:'Costa Rica',
    resultado:'2-0', torneo:'Grupo E Mundial 2018', fecha:'22 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:91,jugador:'Coutinho'},
    {equipo:'Brasil',minuto:97,jugador:'Neymar'}
  ]
  },
  {
    id:'wc18_grE_sui_cos',
    local:'Suiza', visitante:'Costa Rica',
    resultado:'2-2', torneo:'Grupo E Mundial 2018', fecha:'27 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:31,jugador:'Embolo'},
    {equipo:'Costa Rica',minuto:56,jugador:'Acosta'},
    {equipo:'Suiza',minuto:88,jugador:'Ajeti'},
    {equipo:'Costa Rica',minuto:90,jugador:'Bryan Ruiz'}
  ]
  },
  {
    id:'wc18_grH_pol_col',
    local:'Polonia', visitante:'Colombia',
    resultado:'0-3', torneo:'Grupo H Mundial 2018', fecha:'24 Jun 2018',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:40,jugador:'Cuadrado'},
    {equipo:'Colombia',minuto:70,jugador:'Mina'},
    {equipo:'Colombia',minuto:75,jugador:'Luis Muriel'}
  ]
  },
  {
    id:'wc14_grA_bra_cro',
    local:'Brasil', visitante:'Croacia',
    resultado:'3-1', torneo:'Grupo A Mundial 2014', fecha:'12 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:18,jugador:'Marcelo'},
    {equipo:'Brasil',minuto:29,jugador:'Neymar'},
    {equipo:'Brasil',minuto:71,jugador:'Neymar'},
    {equipo:'Brasil',minuto:90,jugador:'Oscar'}
  ]
  },
  {
    id:'wc14_grA_mex_cam',
    local:'México', visitante:'Camerún',
    resultado:'1-0', torneo:'Grupo A Mundial 2014', fecha:'13 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'México',minuto:61,jugador:'Oribe Peralta'}
  ]
  },
  {
    id:'wc14_grB_ned_aus',
    local:'Países Bajos', visitante:'Australia',
    resultado:'3-2', torneo:'Grupo B Mundial 2014', fecha:'18 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Australia',minuto:21,jugador:'Tim Cahill'},
    {equipo:'Países Bajos',minuto:54,jugador:'Robben'},
    {equipo:'Australia',minuto:54,jugador:'Mile Jedinak'},
    {equipo:'Países Bajos',minuto:58,jugador:'Van Persie'},
    {equipo:'Países Bajos',minuto:90,jugador:'Depay'}
  ]
  },
  {
    id:'wc14_grC_col_gre',
    local:'Colombia', visitante:'Grecia',
    resultado:'3-0', torneo:'Grupo C Mundial 2014', fecha:'14 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:22,jugador:'Pablo Armero'},
    {equipo:'Colombia',minuto:58,jugador:'Teofilo Gutierrez'},
    {equipo:'Colombia',minuto:90,jugador:'James Rodríguez'}
  ]
  },
  {
    id:'wc14_grC_ivo_jap',
    local:'Costa de Marfil', visitante:'Japón',
    resultado:'2-1', torneo:'Grupo C Mundial 2014', fecha:'14 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Japón',minuto:16,jugador:'Keisuke Honda'},
    {equipo:'Costa de Marfil',minuto:64,jugador:'Wilfried Bony'},
    {equipo:'Costa de Marfil',minuto:66,jugador:'Gervinho'}
  ]
  },
  {
    id:'wc14_grD_cos_uru',
    local:'Costa Rica', visitante:'Uruguay',
    resultado:'3-1', torneo:'Grupo D Mundial 2014', fecha:'14 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:24,jugador:'Edinson Cavani'},
    {equipo:'Costa Rica',minuto:54,jugador:'Bryan Ruiz'},
    {equipo:'Costa Rica',minuto:57,jugador:'Oscar Duarte'},
    {equipo:'Costa Rica',minuto:84,jugador:'Campbell'}
  ]
  },
  {
    id:'wc14_grE_sui_fra',
    local:'Suiza', visitante:'Francia',
    resultado:'5-2', torneo:'Grupo E Mundial 2014', fecha:'20 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:17,jugador:'Benzema'},
    {equipo:'Francia',minuto:18,jugador:'Matuidi'},
    {equipo:'Suiza',minuto:40,jugador:'Shaqiri'},
    {equipo:'Suiza',minuto:47,jugador:'Mehmedi'},
    {equipo:'Francia',minuto:67,jugador:'Benzema'},
    {equipo:'Suiza',minuto:81,jugador:'Dzemaili'},
    {equipo:'Suiza',minuto:87,jugador:'Shaqiri'}
  ]
  },
  {
    id:'wc14_grF_arg_bos',
    local:'Argentina', visitante:'Bosnia',
    resultado:'2-1', torneo:'Grupo F Mundial 2014', fecha:'15 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Bosnia',minuto:3,jugador:'Mujdza'},
    {equipo:'Argentina',minuto:23,jugador:'Higuaín'},
    {equipo:'Argentina',minuto:31,jugador:'Messi'}
  ]
  },
  {
    id:'wc14_grG_usa_por',
    local:'Estados Unidos', visitante:'Portugal',
    resultado:'2-2', torneo:'Grupo G Mundial 2014', fecha:'22 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:5,jugador:'Jermaine Jones'},
    {equipo:'Estados Unidos',minuto:64,jugador:'Clint Dempsey'},
    {equipo:'Portugal',minuto:81,jugador:'Nani'},
    {equipo:'Portugal',minuto:95,jugador:'Varela'}
  ]
  },
  {
    id:'wc14_grH_bel_ale',
    local:'Bélgica', visitante:'Algeria',
    resultado:'2-1', torneo:'Grupo H Mundial 2014', fecha:'17 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Algeria',minuto:25,jugador:'Slimani'},
    {equipo:'Bélgica',minuto:70,jugador:'Mertens'},
    {equipo:'Bélgica',minuto:80,jugador:'Fellaini'}
  ]
  },
  {
    id:'wc14_grH_rus_kore',
    local:'Rusia', visitante:'Corea del Sur',
    resultado:'1-1', torneo:'Grupo H Mundial 2014', fecha:'17 Jun 2014',
    tipo:'seleccion',
    goles:[
    {equipo:'Rusia',minuto:74,jugador:'Alexander Kerzhakov'},
    {equipo:'Corea del Sur',minuto:68,jugador:'Lee Keun-ho'}
  ]
  },
  {
    id:'wc10_grA_uru_fra',
    local:'Uruguay', visitante:'Francia',
    resultado:'0-0', torneo:'Grupo A Mundial 2010', fecha:'11 Jun 2010',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc10_grA_mex_sud',
    local:'México', visitante:'Sudáfrica',
    resultado:'1-1', torneo:'Grupo A Mundial 2010', fecha:'11 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Sudáfrica',minuto:55,jugador:'Tshabalala'},
    {equipo:'México',minuto:79,jugador:'Rafael Márquez'}
  ]
  },
  {
    id:'wc10_grB_arg_nig',
    local:'Argentina', visitante:'Nigeria',
    resultado:'1-0', torneo:'Grupo B Mundial 2010', fecha:'12 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:6,jugador:'Gabriel Heinze'}
  ]
  },
  {
    id:'wc10_grB_cor_gre',
    local:'Corea del Sur', visitante:'Grecia',
    resultado:'2-0', torneo:'Grupo B Mundial 2010', fecha:'12 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Corea del Sur',minuto:7,jugador:'Lee Jung-soo'},
    {equipo:'Corea del Sur',minuto:52,jugador:'Park Ji-sung'}
  ]
  },
  {
    id:'wc10_grC_eng_usa',
    local:'Inglaterra', visitante:'Estados Unidos',
    resultado:'1-1', torneo:'Grupo C Mundial 2010', fecha:'12 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:4,jugador:'Gerrard'},
    {equipo:'Estados Unidos',minuto:40,jugador:'Clint Dempsey'}
  ]
  },
  {
    id:'wc10_grD_ger_aus',
    local:'Alemania', visitante:'Australia',
    resultado:'4-0', torneo:'Grupo D Mundial 2010', fecha:'13 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:8,jugador:'Podolski'},
    {equipo:'Alemania',minuto:26,jugador:'Klose'},
    {equipo:'Alemania',minuto:68,jugador:'Müller'},
    {equipo:'Alemania',minuto:70,jugador:'Kacper Müller'}
  ]
  },
  {
    id:'wc10_grE_ned_den',
    local:'Países Bajos', visitante:'Dinamarca',
    resultado:'2-0', torneo:'Grupo E Mundial 2010', fecha:'14 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Países Bajos',minuto:35,jugador:'Robben'},
    {equipo:'Países Bajos',minuto:85,jugador:'Dirk Kuyt'}
  ]
  },
  {
    id:'wc10_grF_ita_par',
    local:'Italia', visitante:'Paraguay',
    resultado:'1-1', torneo:'Grupo F Mundial 2010', fecha:'14 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Paraguay',minuto:39,jugador:'Alcaraz'},
    {equipo:'Italia',minuto:63,jugador:'De Rossi'}
  ]
  },
  {
    id:'wc10_grG_bra_cor',
    local:'Brasil', visitante:'Costa Rica',
    resultado:'5-2', torneo:'Grupo G Mundial 2010', fecha:'4 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:12,jugador:'Melo'},
    {equipo:'Costa Rica',minuto:44,jugador:'Saborio'},
    {equipo:'Brasil',minuto:55,jugador:'Grafite'},
    {equipo:'Brasil',minuto:61,jugador:'Kaka'},
    {equipo:'Costa Rica',minuto:77,jugador:'Saborio'},
    {equipo:'Brasil',minuto:76,jugador:'Elano'}
  ]
  },
  {
    id:'wc10_grH_hon_chi',
    local:'Honduras', visitante:'Chile',
    resultado:'0-1', torneo:'Grupo H Mundial 2010', fecha:'16 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Chile',minuto:28,jugador:'Rodrigo Millar'}
  ]
  },
  {
    id:'wc10_grH_esp_sui',
    local:'España', visitante:'Suiza',
    resultado:'0-1', torneo:'Grupo H Mundial 2010', fecha:'16 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Suiza',minuto:52,jugador:'Gelson Fernandes'}
  ]
  },
  {
    id:'wc06_grA_ale_cos',
    local:'Alemania', visitante:'Costa Rica',
    resultado:'4-2', torneo:'Grupo A Mundial 2006', fecha:'9 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Costa Rica',minuto:12,jugador:'Wanchope'},
    {equipo:'Alemania',minuto:6,jugador:'Lahm'},
    {equipo:'Alemania',minuto:17,jugador:'Klose'},
    {equipo:'Alemania',minuto:61,jugador:'Klose'},
    {equipo:'Costa Rica',minuto:73,jugador:'Wanchope'},
    {equipo:'Alemania',minuto:87,jugador:'Frings'}
  ]
  },
  {
    id:'wc06_grA_pol_ecu',
    local:'Polonia', visitante:'Ecuador',
    resultado:'0-2', torneo:'Grupo A Mundial 2006', fecha:'9 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Ecuador',minuto:24,jugador:'Tenorio'},
    {equipo:'Ecuador',minuto:52,jugador:'Delgado'}
  ]
  },
  {
    id:'wc06_grB_eng_par',
    local:'Inglaterra', visitante:'Paraguay',
    resultado:'1-0', torneo:'Grupo B Mundial 2006', fecha:'10 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Paraguay',minuto:3,jugador:'Carlos Gamarra'}
  ]
  },
  {
    id:'wc06_grB_tri_sue',
    local:'Trinidad', visitante:'Suecia',
    resultado:'0-0', torneo:'Grupo B Mundial 2006', fecha:'10 Jun 2006',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc06_grC_arg_ser',
    local:'Argentina', visitante:'Serbia',
    resultado:'6-0', torneo:'Grupo C Mundial 2006', fecha:'16 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:6,jugador:'Rodríguez'},
    {equipo:'Argentina',minuto:10,jugador:'Cambiasso'},
    {equipo:'Argentina',minuto:31,jugador:'Cambiasso'},
    {equipo:'Argentina',minuto:76,jugador:'Ayala'},
    {equipo:'Argentina',minuto:79,jugador:'Messi'},
    {equipo:'Argentina',minuto:88,jugador:'Tevez'}
  ]
  },
  {
    id:'wc06_grD_mex_ira',
    local:'México', visitante:'Irán',
    resultado:'3-1', torneo:'Grupo D Mundial 2006', fecha:'11 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'México',minuto:28,jugador:'Bravo'},
    {equipo:'Irán',minuto:36,jugador:'Golmohammadi'},
    {equipo:'México',minuto:76,jugador:'Bravo'},
    {equipo:'México',minuto:79,jugador:'Zinha'}
  ]
  },
  {
    id:'wc06_grE_ita_gha',
    local:'Italia', visitante:'Ghana',
    resultado:'2-0', torneo:'Grupo E Mundial 2006', fecha:'12 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:40,jugador:'Pirlo'},
    {equipo:'Italia',minuto:83,jugador:'Iaquinta'}
  ]
  },
  {
    id:'wc06_grG_bra_cro',
    local:'Brasil', visitante:'Croacia',
    resultado:'1-0', torneo:'Grupo G Mundial 2006', fecha:'13 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:44,jugador:'Kaká'}
  ]
  },
  {
    id:'wc06_grH_esp_ukr',
    local:'España', visitante:'Ucrania',
    resultado:'4-0', torneo:'Grupo H Mundial 2006', fecha:'14 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'España',minuto:4,jugador:'Villa'},
    {equipo:'España',minuto:17,jugador:'Villa'},
    {equipo:'España',minuto:47,jugador:'Torres'},
    {equipo:'España',minuto:81,jugador:'Villa'}
  ]
  },
  {
    id:'ca24_grA_arg_can',
    local:'Argentina', visitante:'Canada',
    resultado:'2-0', torneo:'Grupo A Copa America 2024', fecha:'20 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:22,jugador:'Messi'},
    {equipo:'Argentina',minuto:87,jugador:'Alvarez'}
  ]
  },
  {
    id:'ca24_grA_per_chi',
    local:'Peru', visitante:'Chile',
    resultado:'0-0', torneo:'Grupo A Copa America 2024', fecha:'21 Jun 2024',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'ca24_grA_arg_chi',
    local:'Argentina', visitante:'Chile',
    resultado:'1-0', torneo:'Grupo A Copa America 2024', fecha:'25 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:88,jugador:'Lautaro'}
  ]
  },
  {
    id:'ca24_grB_ven_ecu',
    local:'Venezuela', visitante:'Ecuador',
    resultado:'2-1', torneo:'Grupo B Copa America 2024', fecha:'22 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Venezuela',minuto:27,jugador:'Machis'},
    {equipo:'Ecuador',minuto:35,jugador:'Sarmiento'},
    {equipo:'Venezuela',minuto:73,jugador:'Bello'}
  ]
  },
  {
    id:'ca24_grC_usa_bol',
    local:'Estados Unidos', visitante:'Bolivia',
    resultado:'2-0', torneo:'Grupo C Copa America 2024', fecha:'23 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:23,jugador:'Pulisic'},
    {equipo:'Estados Unidos',minuto:27,jugador:'Reyna'}
  ]
  },
  {
    id:'ca24_grC_uru_pan',
    local:'Uruguay', visitante:'Panama',
    resultado:'3-1', torneo:'Grupo C Copa America 2024', fecha:'23 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:4,jugador:'Bentancur'},
    {equipo:'Uruguay',minuto:55,jugador:'Nunez'},
    {equipo:'Panama',minuto:68,jugador:'Waterman'},
    {equipo:'Uruguay',minuto:86,jugador:'Ugarte'}
  ]
  },
  {
    id:'ca24_grD_bra_cos',
    local:'Brasil', visitante:'Costa Rica',
    resultado:'0-0', torneo:'Grupo D Copa America 2024', fecha:'24 Jun 2024',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'ca24_grD_col_par',
    local:'Colombia', visitante:'Paraguay',
    resultado:'2-1', torneo:'Grupo D Copa America 2024', fecha:'24 Jun 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:4,jugador:'Diaz'},
    {equipo:'Paraguay',minuto:57,jugador:'Sanabria'},
    {equipo:'Colombia',minuto:87,jugador:'Arias'}
  ]
  },
  {
    id:'ca24_qf_arg_ecu',
    local:'Argentina', visitante:'Ecuador',
    resultado:'1-0', torneo:'Cuartos Copa America 2024', fecha:'4 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:45,jugador:'Lautaro'}
  ]
  },
  {
    id:'ca24_semi_arg_can',
    local:'Argentina', visitante:'Canada',
    resultado:'2-0', torneo:'Semifinal Copa America 2024', fecha:'9 Jul 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:6,jugador:'MacAllister'},
    {equipo:'Argentina',minuto:50,jugador:'Alvarez'}
  ]
  },
  {
    id:'ca21_grA_bra_ven',
    local:'Brasil', visitante:'Venezuela',
    resultado:'3-0', torneo:'Grupo A Copa America 2021', fecha:'13 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:24,jugador:'Marquinhos'},
    {equipo:'Brasil',minuto:33,jugador:'Neymar'},
    {equipo:'Brasil',minuto:55,jugador:'Gabigol'}
  ]
  },
  {
    id:'ca21_grA_col_ecu',
    local:'Colombia', visitante:'Ecuador',
    resultado:'1-0', torneo:'Grupo A Copa America 2021', fecha:'13 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:54,jugador:'Diaz'}
  ]
  },
  {
    id:'ca21_grA_bra_per',
    local:'Brasil', visitante:'Peru',
    resultado:'4-0', torneo:'Grupo A Copa America 2021', fecha:'17 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:12,jugador:'Everton Ribeiro'},
    {equipo:'Brasil',minuto:25,jugador:'Firmino'},
    {equipo:'Brasil',minuto:44,jugador:'Neymar'},
    {equipo:'Brasil',minuto:62,jugador:'Richarlison'}
  ]
  },
  {
    id:'ca21_grB_arg_uru',
    local:'Argentina', visitante:'Uruguay',
    resultado:'1-0', torneo:'Grupo B Copa America 2021', fecha:'18 Jun 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:13,jugador:'Guido Rodriguez'}
  ]
  },
  {
    id:'ca21_semi_bra_per',
    local:'Brasil', visitante:'Peru',
    resultado:'1-0', torneo:'Semifinal Copa America 2021', fecha:'5 Jul 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:35,jugador:'Neymar'}
  ]
  },
  {
    id:'ca19_grA_bra_bol',
    local:'Brasil', visitante:'Bolivia',
    resultado:'3-0', torneo:'Grupo A Copa America 2019', fecha:'14 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:50,jugador:'Coutinho'},
    {equipo:'Brasil',minuto:75,jugador:'Gabriel Jesus'},
    {equipo:'Brasil',minuto:90,jugador:'Everton'}
  ]
  },
  {
    id:'ca19_grB_arg_col',
    local:'Argentina', visitante:'Colombia',
    resultado:'0-2', torneo:'Grupo B Copa America 2019', fecha:'15 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:71,jugador:'Zapata'},
    {equipo:'Colombia',minuto:86,jugador:'Martinez'}
  ]
  },
  {
    id:'ca19_semi_bra_arg',
    local:'Brasil', visitante:'Argentina',
    resultado:'2-0', torneo:'Semifinal Copa America 2019', fecha:'2 Jul 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:19,jugador:'Dani Alves'},
    {equipo:'Brasil',minuto:71,jugador:'Gabriel Jesus'}
  ]
  },
  {
    id:'ca19_final_bra_per',
    local:'Brasil', visitante:'Peru',
    resultado:'3-1', torneo:'Final Copa America 2019', fecha:'7 Jul 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:16,jugador:'Everton'},
    {equipo:'Brasil',minuto:45,jugador:'Gabriel Jesus'},
    {equipo:'Peru',minuto:44,jugador:'Guerrero'},
    {equipo:'Brasil',minuto:90,jugador:'Firmino'}
  ]
  },
  {
    id:'ca16_grA_col_usa',
    local:'Colombia', visitante:'Estados Unidos',
    resultado:'2-0', torneo:'Grupo A Copa America 2016', fecha:'3 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:42,jugador:'Bacca'},
    {equipo:'Colombia',minuto:65,jugador:'James'}
  ]
  },
  {
    id:'ca16_grC_arg_chi',
    local:'Argentina', visitante:'Chile',
    resultado:'2-1', torneo:'Grupo C Copa America 2016', fecha:'6 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:27,jugador:'Higuain'},
    {equipo:'Argentina',minuto:61,jugador:'Aguero'},
    {equipo:'Chile',minuto:84,jugador:'Sanchez'}
  ]
  },
  {
    id:'ca16_semi_arg_usa',
    local:'Argentina', visitante:'Estados Unidos',
    resultado:'4-0', torneo:'Semifinal Copa America 2016', fecha:'21 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:7,jugador:'Lavezzi'},
    {equipo:'Argentina',minuto:40,jugador:'Messi'},
    {equipo:'Argentina',minuto:42,jugador:'Lavezzi'},
    {equipo:'Argentina',minuto:86,jugador:'Aguero'}
  ]
  },
  {
    id:'ca16_semi_col_chi',
    local:'Colombia', visitante:'Chile',
    resultado:'0-2', torneo:'Semifinal Copa America 2016', fecha:'22 Jun 2016',
    tipo:'seleccion',
    goles:[
    {equipo:'Chile',minuto:48,jugador:'Sanchez'},
    {equipo:'Chile',minuto:85,jugador:'Vidal'}
  ]
  },
  {
    id:'ca15_semi_arg_par',
    local:'Argentina', visitante:'Paraguay',
    resultado:'6-1', torneo:'Semifinal Copa America 2015', fecha:'1 Jul 2015',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:7,jugador:'Aguero'},
    {equipo:'Argentina',minuto:14,jugador:'Higuain'},
    {equipo:'Argentina',minuto:33,jugador:'Higuain'},
    {equipo:'Paraguay',minuto:44,jugador:'Santa Cruz'},
    {equipo:'Argentina',minuto:56,jugador:'Zarate'},
    {equipo:'Argentina',minuto:57,jugador:'Messi'},
    {equipo:'Argentina',minuto:60,jugador:'Di Maria'}
  ]
  },
  {
    id:'ca15_final_chi_arg',
    local:'Chile', visitante:'Argentina',
    resultado:'0-0 (p)', torneo:'Final Copa America 2015', fecha:'4 Jul 2015',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'ca11_final_uru_par',
    local:'Uruguay', visitante:'Paraguay',
    resultado:'3-0', torneo:'Final Copa America 2011', fecha:'24 Jul 2011',
    tipo:'seleccion',
    goles:[
    {equipo:'Uruguay',minuto:11,jugador:'Cavani'},
    {equipo:'Uruguay',minuto:41,jugador:'Forlan'},
    {equipo:'Uruguay',minuto:57,jugador:'Perez'}
  ]
  },
  {
    id:'nl_esp_sui_2_1',
    local:'Espana', visitante:'Suiza',
    resultado:'2-1', torneo:'Nations League 2021-22', fecha:'14 Nov 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:38,jugador:'Jordi Alba'},
    {equipo:'Suiza',minuto:61,jugador:'Steffen'},
    {equipo:'Espana',minuto:76,jugador:'Oyarzabal'}
  ]
  },
  {
    id:'nl_fra_bel_3_2',
    local:'Francia', visitante:'Belgica',
    resultado:'3-2', torneo:'Semifinal Nations League 2021', fecha:'7 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Belgica',minuto:37,jugador:'Carrasco'},
    {equipo:'Belgica',minuto:62,jugador:'De Bruyne'},
    {equipo:'Francia',minuto:70,jugador:'Benzema'},
    {equipo:'Francia',minuto:77,jugador:'Benzema'},
    {equipo:'Francia',minuto:90,jugador:'Mbappe'}
  ]
  },
  {
    id:'nl_ita_esp_2_1',
    local:'Italia', visitante:'Espana',
    resultado:'2-1', torneo:'Semifinal Nations League 2021', fecha:'6 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:17,jugador:'Ferran Torres'},
    {equipo:'Espana',minuto:83,jugador:'Bonucci'},
    {equipo:'Espana',minuto:91,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'nl_por_fra_1_0',
    local:'Portugal', visitante:'Francia',
    resultado:'1-0', torneo:'Final Nations League 2019', fecha:'9 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:25,jugador:'Guedes'}
  ]
  },
  {
    id:'nl_ned_eng_3_1',
    local:'Paises Bajos', visitante:'Inglaterra',
    resultado:'3-1', torneo:'Semifinal Nations League 2019', fecha:'6 Jun 2019',
    tipo:'seleccion',
    goles:[
    {equipo:'Paises Bajos',minuto:11,jugador:'Memphis Depay'},
    {equipo:'Inglaterra',minuto:32,jugador:'Kyle Walker'},
    {equipo:'Paises Bajos',minuto:73,jugador:'Propper'},
    {equipo:'Paises Bajos',minuto:90,jugador:'Quincy Promes'}
  ]
  },
  {
    id:'nl_esp_ita_1_2',
    local:'Espana', visitante:'Italia',
    resultado:'1-2', torneo:'Semifinal Nations League 2023', fecha:'15 Jun 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:4,jugador:'Joselu'},
    {equipo:'Italia',minuto:63,jugador:'Barella'},
    {equipo:'Italia',minuto:75,jugador:'Berardi'}
  ]
  },
  {
    id:'nl_cro_esp_0_0',
    local:'Croacia', visitante:'Espana',
    resultado:'0-0 (p)', torneo:'Final Nations League 2023', fecha:'18 Jun 2023',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'elim_esp_esp_5_0',
    local:'Espana', visitante:'Rumania',
    resultado:'2-1', torneo:'Clasificatoria Euro 2024', fecha:'16 Oct 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:4,jugador:'Morata'},
    {equipo:'Rumania',minuto:67,jugador:'Razvan Marin'},
    {equipo:'Espana',minuto:90,jugador:'Bryan Gil'}
  ]
  },
  {
    id:'elim_fra_ned',
    local:'Francia', visitante:'Paises Bajos',
    resultado:'4-0', torneo:'Clasificatoria Euro 2024', fecha:'13 Oct 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:22,jugador:'Theo Hernandez'},
    {equipo:'Francia',minuto:36,jugador:'Kylian Mbappe'},
    {equipo:'Francia',minuto:74,jugador:'Marcus Thuram'},
    {equipo:'Francia',minuto:90,jugador:'Marcus Thuram'}
  ]
  },
  {
    id:'elim_eng_ita_3_1',
    local:'Inglaterra', visitante:'Italia',
    resultado:'3-1', torneo:'Clasificatoria Euro 2024', fecha:'17 Oct 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:9,jugador:'Bellingham'},
    {equipo:'Italia',minuto:37,jugador:'Retegui'},
    {equipo:'Inglaterra',minuto:55,jugador:'Saka'},
    {equipo:'Inglaterra',minuto:73,jugador:'Kane'}
  ]
  },
  {
    id:'elim_ale_fra_2_1',
    local:'Alemania', visitante:'Francia',
    resultado:'2-0', torneo:'Clasificatoria Euro 2024', fecha:'12 Jun 2023',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:36,jugador:'Leroy Sane'},
    {equipo:'Alemania',minuto:77,jugador:'Serge Gnabry'}
  ]
  },
  {
    id:'elim_por_tur_3_0',
    local:'Portugal', visitante:'Turquia',
    resultado:'3-0', torneo:'Playoff Clasificatoria Mundial 2022', fecha:'24 Mar 2022',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:7,jugador:'Otavio'},
    {equipo:'Portugal',minuto:32,jugador:'Joao Felix'},
    {equipo:'Portugal',minuto:55,jugador:'Ronaldo'}
  ]
  },
  {
    id:'elim_ita_nor_1_1',
    local:'Italia', visitante:'Suiza',
    resultado:'1-1', torneo:'Clasificatoria Mundial 2022', fecha:'12 Nov 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:16,jugador:'Jorginho'},
    {equipo:'Suiza',minuto:46,jugador:'Widmer'}
  ]
  },
  {
    id:'elim_bra_col_2_0',
    local:'Brasil', visitante:'Colombia',
    resultado:'2-0', torneo:'Clasificatoria Mundial 2022', fecha:'7 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:16,jugador:'Marquinhos'},
    {equipo:'Brasil',minuto:45,jugador:'Neymar'}
  ]
  },
  {
    id:'ucl1516_rm_sha',
    local:'Real Madrid', visitante:'Shakhtar',
    resultado:'4-0', torneo:'Champions 2015-16 Grupos', fecha:'15 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:7,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:25,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:50,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:73,jugador:'Kroos'}
  ]
  },
  {
    id:'ucl1516_man_juve',
    local:'Manchester City', visitante:'Juventus',
    resultado:'1-2', torneo:'Champions 2015-16 Grupos', fecha:'15 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:25,jugador:'Morata'},
    {equipo:'Manchester City',minuto:51,jugador:'Aguero'},
    {equipo:'Juventus',minuto:70,jugador:'Morata'}
  ]
  },
  {
    id:'ucl1516_psg_rm',
    local:'PSG', visitante:'Real Madrid',
    resultado:'0-0', torneo:'Champions 2015-16 Grupos', fecha:'21 Oct 2015',
    tipo:'club',
    goles:[]
  },
  {
    id:'ucl1516_bar_rom',
    local:'Barcelona', visitante:'Roma',
    resultado:'6-1', torneo:'Champions 2015-16 Grupos', fecha:'24 Nov 2015',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:4,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:23,jugador:'Messi'},
    {equipo:'Barcelona',minuto:30,jugador:'Suarez'},
    {equipo:'Roma',minuto:44,jugador:'Florenzi'},
    {equipo:'Barcelona',minuto:53,jugador:'Messi'},
    {equipo:'Barcelona',minuto:67,jugador:'Sergio Roberto'},
    {equipo:'Barcelona',minuto:83,jugador:'Mathieu'}
  ]
  },
  {
    id:'ucl1516_bay_ark',
    local:'Bayern Munich', visitante:'Arsenal',
    resultado:'5-1', torneo:'Octavos Champions 2015-16 (vuelta)', fecha:'11 Mar 2015',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:7,jugador:'Lewandowski'},
    {equipo:'Arsenal',minuto:60,jugador:'Walcott'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:63,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:73,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:86,jugador:'Lewandowski'}
  ]
  },
  {
    id:'ucl1516_bar_lei',
    local:'Barcelona', visitante:'Manchester City',
    resultado:'1-0', torneo:'Cuartos Champions 2015-16 (vuelta)', fecha:'18 Mar 2015',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:81,jugador:'Messi'}
  ]
  },
  {
    id:'ucl1415_rm_sha_2',
    local:'Real Madrid', visitante:'Shakhtar',
    resultado:'2-0', torneo:'Champions 2014-15 Grupos', fecha:'21 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:17,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:76,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ucl1415_bay_man',
    local:'Bayern Munich', visitante:'Manchester City',
    resultado:'3-2', torneo:'Champions 2014-15 Grupos', fecha:'2 Sep 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:16,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Boateng'},
    {equipo:'Bayern Munich',minuto:60,jugador:'Lewandowski'},
    {equipo:'Manchester City',minuto:67,jugador:'Aguero'},
    {equipo:'Manchester City',minuto:71,jugador:'Milner'}
  ]
  },
  {
    id:'ucl1415_bar_psg',
    local:'Barcelona', visitante:'PSG',
    resultado:'3-1', torneo:'Champions 2014-15 Grupos', fecha:'10 Dic 2014',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:24,jugador:'Messi'},
    {equipo:'Barcelona',minuto:38,jugador:'Neymar'},
    {equipo:'PSG',minuto:52,jugador:'Ibrahimovic'},
    {equipo:'Barcelona',minuto:73,jugador:'Messi'}
  ]
  },
  {
    id:'ucl1415_rm_lok',
    local:'Real Madrid', visitante:'Lokomotiv Mosku',
    resultado:'4-1', torneo:'Champions 2014-15 Grupos', fecha:'1 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:13,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:25,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:44,jugador:'Ronaldo'},
    {equipo:'Lokomotiv Mosku',minuto:50,jugador:'Ozdoev'},
    {equipo:'Real Madrid',minuto:87,jugador:'Benzema'}
  ]
  },
  {
    id:'ucl1415_juve_oly',
    local:'Juventus', visitante:'Olympiacos',
    resultado:'3-2', torneo:'Champions 2014-15 Grupos', fecha:'26 Nov 2014',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:10,jugador:'Tevez'},
    {equipo:'Olympiacos',minuto:22,jugador:'Dominguez'},
    {equipo:'Juventus',minuto:35,jugador:'Tevez'},
    {equipo:'Olympiacos',minuto:66,jugador:'Dominguez'},
    {equipo:'Juventus',minuto:80,jugador:'Morata'}
  ]
  },
  {
    id:'ucl1314_rm_gal',
    local:'Real Madrid', visitante:'Galatasaray',
    resultado:'4-1', torneo:'Champions 2013-14 Grupos', fecha:'22 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:12,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:19,jugador:'Pepe'},
    {equipo:'Galatasaray',minuto:40,jugador:'Sneijder'},
    {equipo:'Real Madrid',minuto:49,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:82,jugador:'Bale'}
  ]
  },
  {
    id:'ucl1314_man_bay',
    local:'Manchester City', visitante:'Bayern Munich',
    resultado:'3-2', torneo:'Champions 2013-14 Grupos', fecha:'2 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:52,jugador:'Aguero'},
    {equipo:'Bayern Munich',minuto:62,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:71,jugador:'Mandzu'},
    {equipo:'Manchester City',minuto:76,jugador:'Dzeko'},
    {equipo:'Manchester City',minuto:90,jugador:'Samir Nasri'}
  ]
  },
  {
    id:'ucl1314_psg_ben',
    local:'PSG', visitante:'Benfica',
    resultado:'3-0', torneo:'Champions 2013-14 Grupos', fecha:'23 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:19,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:47,jugador:'Cavani'},
    {equipo:'PSG',minuto:73,jugador:'Matuidi'}
  ]
  },
  {
    id:'ucl1314_bay_man',
    local:'Bayern Munich', visitante:'Manchester United',
    resultado:'3-1', torneo:'Octavos Champions 2013-14 (ida)', fecha:'18 Feb 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:7,jugador:'Kroos'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Schweinsteiger'},
    {equipo:'Bayern Munich',minuto:67,jugador:'Muller'},
    {equipo:'Manchester United',minuto:58,jugador:'Patrice Evra'}
  ]
  },
  {
    id:'ucl1314_rm_sha3',
    local:'Real Madrid', visitante:'Schalke',
    resultado:'6-1', torneo:'Octavos Champions 2013-14 (vuelta)', fecha:'18 Mar 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:18,jugador:'Varane'},
    {equipo:'Schalke',minuto:26,jugador:'Huntelaar'},
    {equipo:'Real Madrid',minuto:32,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:52,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:67,jugador:'Bale'},
    {equipo:'Real Madrid',minuto:84,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ucl1314_man_bar',
    local:'Manchester City', visitante:'Barcelona',
    resultado:'0-2', torneo:'Octavos Champions 2013-14 (ida)', fecha:'18 Feb 2014',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:54,jugador:'Messi'},
    {equipo:'Barcelona',minuto:90,jugador:'Dani Alves'}
  ]
  },
  {
    id:'ucl1314_rm_bay_semi',
    local:'Real Madrid', visitante:'Bayern Munich',
    resultado:'1-0', torneo:'Semifinal Champions 2013-14 (ida)', fecha:'29 Abr 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:16,jugador:'Ramos'}
  ]
  },
  {
    id:'ucl1314_bay_rm_semi',
    local:'Bayern Munich', visitante:'Real Madrid',
    resultado:'0-4', torneo:'Semifinal Champions 2013-14 (vuelta)', fecha:'29 Abr 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:16,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:20,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:34,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:90,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ucl1314_atl_che_semi',
    local:'Atletico de Madrid', visitante:'Chelsea',
    resultado:'3-1', torneo:'Semifinal Champions 2013-14 (vuelta)', fecha:'30 Abr 2014',
    tipo:'club',
    goles:[
    {equipo:'Atletico de Madrid',minuto:36,jugador:'Adrian Lopez'},
    {equipo:'Atletico de Madrid',minuto:60,jugador:'Diego'},
    {equipo:'Chelsea',minuto:72,jugador:'Torres'},
    {equipo:'Atletico de Madrid',minuto:98,jugador:'Tiago'}
  ]
  },
  {
    id:'ucl1213_man_gal',
    local:'Manchester City', visitante:'Galatasaray',
    resultado:'1-0', torneo:'Champions 2012-13 Grupos', fecha:'22 Nov 2012',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:39,jugador:'Gareth Barry'}
  ]
  },
  {
    id:'ucl1213_bar_cel',
    local:'Barcelona', visitante:'Celtic',
    resultado:'2-1', torneo:'Champions 2012-13 Grupos', fecha:'23 Oct 2012',
    tipo:'club',
    goles:[
    {equipo:'Celtic',minuto:18,jugador:'Samaras'},
    {equipo:'Barcelona',minuto:59,jugador:'Xavi'},
    {equipo:'Barcelona',minuto:82,jugador:'Jordi Alba'}
  ]
  },
  {
    id:'ucl1213_juve_sha',
    local:'Juventus', visitante:'Shakhtar',
    resultado:'1-0', torneo:'Champions 2012-13 Grupos', fecha:'3 Oct 2012',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:55,jugador:'Mirko Vucinic'}
  ]
  },
  {
    id:'ucl1213_rm_dor_semi',
    local:'Real Madrid', visitante:'Borussia Dortmund',
    resultado:'2-0', torneo:'Semifinal Champions 2012-13 (vuelta)', fecha:'30 Abr 2013',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:27,jugador:'Karim Benzema'},
    {equipo:'Real Madrid',minuto:58,jugador:'Alvaro Morata'}
  ]
  },
  {
    id:'ucl1213_bar_bay_semi',
    local:'Barcelona', visitante:'Bayern Munich',
    resultado:'0-3', torneo:'Semifinal Champions 2012-13 (vuelta)', fecha:'1 May 2013',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:48,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:76,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:89,jugador:'Ribery'}
  ]
  },
  {
    id:'ucl1112_rm_man_r16',
    local:'Real Madrid', visitante:'Manchester City',
    resultado:'3-1', torneo:'Octavos Champions 2011-12 (ida)', fecha:'21 Feb 2012',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:35,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:55,jugador:'Higuain'},
    {equipo:'Manchester City',minuto:68,jugador:'Kolarov'},
    {equipo:'Real Madrid',minuto:73,jugador:'Benzema'}
  ]
  },
  {
    id:'ucl1112_bay_bay_r16',
    local:'Bayern Munich', visitante:'Basel',
    resultado:'7-0', torneo:'Octavos Champions 2011-12 (vuelta)', fecha:'13 Mar 2012',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:2,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:20,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:34,jugador:'Gomez'},
    {equipo:'Bayern Munich',minuto:47,jugador:'Rafinha'},
    {equipo:'Bayern Munich',minuto:53,jugador:'Gomez'},
    {equipo:'Bayern Munich',minuto:61,jugador:'Ribery'},
    {equipo:'Bayern Munich',minuto:74,jugador:'Gomez'}
  ]
  },
  {
    id:'ucl1112_bar_bay_semi',
    local:'Barcelona', visitante:'Bayern Munich',
    resultado:'3-0', torneo:'Semifinal Champions 2011-12 (ida)', fecha:'2 May 2012',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:27,jugador:'Messi'},
    {equipo:'Barcelona',minuto:73,jugador:'Messi'},
    {equipo:'Barcelona',minuto:89,jugador:'Messi'}
  ]
  },
  {
    id:'ucl1112_rm_bay_semi',
    local:'Real Madrid', visitante:'Bayern Munich',
    resultado:'2-1', torneo:'Semifinal Champions 2011-12 (ida)', fecha:'17 Abr 2012',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:21,jugador:'Benzema'},
    {equipo:'Bayern Munich',minuto:74,jugador:'Muller'},
    {equipo:'Real Madrid',minuto:88,jugador:'Ozil'}
  ]
  },
  {
    id:'ucl1011_bar_sha',
    local:'Barcelona', visitante:'Shakhtar',
    resultado:'5-1', torneo:'Champions 2010-11 Grupos', fecha:'19 Oct 2010',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:8,jugador:'Jeffren'},
    {equipo:'Barcelona',minuto:20,jugador:'Pedro'},
    {equipo:'Shakhtar',minuto:37,jugador:'Willian'},
    {equipo:'Barcelona',minuto:53,jugador:'Busquets'},
    {equipo:'Barcelona',minuto:60,jugador:'Villa'},
    {equipo:'Barcelona',minuto:83,jugador:'Messi'}
  ]
  },
  {
    id:'ucl1011_rm_ajax_gr',
    local:'Real Madrid', visitante:'Ajax',
    resultado:'4-0', torneo:'Champions 2010-11 Grupos', fecha:'3 Nov 2010',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:32,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:44,jugador:'Di Maria'},
    {equipo:'Real Madrid',minuto:68,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:85,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ucl1011_bay_sha_semi',
    local:'Bayern Munich', visitante:'Shakhtar',
    resultado:'3-0', torneo:'Semifinal Champions 2010-11 (ida)', fecha:'27 Abr 2011',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:11,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:30,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:46,jugador:'Muller'}
  ]
  },
  {
    id:'ucl1011_bar_rm_semi',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-0', torneo:'Semifinal Champions 2010-11 (ida)', fecha:'27 Abr 2011',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:76,jugador:'Messi'},
    {equipo:'Barcelona',minuto:87,jugador:'Messi'}
  ]
  },
  {
    id:'pl1516_lei_man',
    local:'Leicester City', visitante:'Manchester City',
    resultado:'3-1', torneo:'Premier League 2015-16', fecha:'29 Ago 2015',
    tipo:'club',
    goles:[
    {equipo:'Leicester City',minuto:9,jugador:'Huth'},
    {equipo:'Manchester City',minuto:44,jugador:'Aguero'},
    {equipo:'Leicester City',minuto:63,jugador:'Ulloa'},
    {equipo:'Leicester City',minuto:67,jugador:'Vardy'}
  ]
  },
  {
    id:'pl1516_man_ars',
    local:'Manchester United', visitante:'Arsenal',
    resultado:'3-0', torneo:'Premier League 2015-16', fecha:'28 Feb 2016',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:28,jugador:'Ander Herrera'},
    {equipo:'Manchester United',minuto:45,jugador:'Wayne Rooney'},
    {equipo:'Manchester United',minuto:61,jugador:'Juan Mata'}
  ]
  },
  {
    id:'pl1516_tot_che',
    local:'Tottenham', visitante:'Chelsea',
    resultado:'0-2', torneo:'Premier League 2015-16', fecha:'28 Abr 2016',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:17,jugador:'Diego Costa'},
    {equipo:'Chelsea',minuto:51,jugador:'Eden Hazard'}
  ]
  },
  {
    id:'pl1516_ars_tot',
    local:'Arsenal', visitante:'Tottenham',
    resultado:'2-2', torneo:'Premier League 2015-16', fecha:'8 Nov 2015',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:27,jugador:'Giroud'},
    {equipo:'Arsenal',minuto:45,jugador:'Coquelin'},
    {equipo:'Tottenham',minuto:55,jugador:'Kane'},
    {equipo:'Tottenham',minuto:86,jugador:'Alderweireld'}
  ]
  },
  {
    id:'pl1415_che_ars',
    local:'Chelsea', visitante:'Arsenal',
    resultado:'2-0', torneo:'Premier League 2014-15', fecha:'5 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:27,jugador:'Diego Costa'},
    {equipo:'Chelsea',minuto:51,jugador:'Eden Hazard'}
  ]
  },
  {
    id:'pl1415_man_ars',
    local:'Manchester City', visitante:'Arsenal',
    resultado:'2-0', torneo:'Premier League 2014-15', fecha:'18 Ene 2015',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:24,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:66,jugador:'Aguero'}
  ]
  },
  {
    id:'pl1415_man_man',
    local:'Manchester United', visitante:'Manchester City',
    resultado:'4-2', torneo:'Premier League 2014-15', fecha:'12 Abr 2015',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:25,jugador:'Aguero'},
    {equipo:'Manchester United',minuto:9,jugador:'Herrera'},
    {equipo:'Manchester United',minuto:47,jugador:'Young'},
    {equipo:'Manchester City',minuto:57,jugador:'Kompany'},
    {equipo:'Manchester United',minuto:63,jugador:'Rooney'},
    {equipo:'Manchester United',minuto:82,jugador:'Lingard'}
  ]
  },
  {
    id:'pl1314_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'0-0', torneo:'Premier League 2013-14', fecha:'22 Feb 2014',
    tipo:'club',
    goles:[]
  },
  {
    id:'pl1314_man_liv',
    local:'Manchester City', visitante:'Liverpool',
    resultado:'2-1', torneo:'Premier League 2013-14', fecha:'13 Abr 2014',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:2,jugador:'Skrtel'},
    {equipo:'Manchester City',minuto:76,jugador:'Kompany'},
    {equipo:'Manchester City',minuto:90,jugador:'Demichelis'}
  ]
  },
  {
    id:'pl1314_liv_ars',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'5-1', torneo:'Premier League 2013-14', fecha:'9 Feb 2014',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:3,jugador:'Sturridge'},
    {equipo:'Arsenal',minuto:9,jugador:'Cazorla'},
    {equipo:'Liverpool',minuto:16,jugador:'Skrtel'},
    {equipo:'Liverpool',minuto:19,jugador:'Skrtel'},
    {equipo:'Liverpool',minuto:52,jugador:'Sterling'},
    {equipo:'Liverpool',minuto:55,jugador:'Sturridge'}
  ]
  },
  {
    id:'lla1415_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-1', torneo:'LaLiga 2014-15', fecha:'22 Mar 2015',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:35,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:56,jugador:'Messi'},
    {equipo:'Barcelona',minuto:69,jugador:'Suarez'}
  ]
  },
  {
    id:'lla1415_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'3-1', torneo:'LaLiga 2014-15', fecha:'25 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:5,jugador:'Neymar'},
    {equipo:'Real Madrid',minuto:50,jugador:'Ronaldo'},
    {equipo:'Real Madrid',minuto:67,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:78,jugador:'Pepe'}
  ]
  },
  {
    id:'lla1415_atl_rm',
    local:'Atletico de Madrid', visitante:'Real Madrid',
    resultado:'4-0', torneo:'LaLiga 2014-15', fecha:'7 Feb 2015',
    tipo:'club',
    goles:[
    {equipo:'Atletico de Madrid',minuto:5,jugador:'Griezmann'},
    {equipo:'Atletico de Madrid',minuto:26,jugador:'Mario Suarez'},
    {equipo:'Atletico de Madrid',minuto:50,jugador:'Mandzu'},
    {equipo:'Atletico de Madrid',minuto:62,jugador:'Griezmann'}
  ]
  },
  {
    id:'lla1314_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-1', torneo:'LaLiga 2013-14', fecha:'26 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:19,jugador:'Varane'},
    {equipo:'Barcelona',minuto:34,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:64,jugador:'Alexis Sanchez'}
  ]
  },
  {
    id:'lla1314_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'3-4', torneo:'LaLiga 2013-14', fecha:'23 Mar 2014',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:4,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:7,jugador:'Pepe'},
    {equipo:'Barcelona',minuto:11,jugador:'Neymar'},
    {equipo:'Barcelona',minuto:34,jugador:'Bartra'},
    {equipo:'Real Madrid',minuto:50,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:68,jugador:'Messi'},
    {equipo:'Barcelona',minuto:72,jugador:'Messi'}
  ]
  },
  {
    id:'bund1516_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'5-1', torneo:'Bundesliga 2015-16', fecha:'4 Oct 2015',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:8,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:24,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Lewandowski'},
    {equipo:'Borussia Dortmund',minuto:62,jugador:'Reus'},
    {equipo:'Bayern Munich',minuto:75,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:86,jugador:'Boateng'}
  ]
  },
  {
    id:'bund1415_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'1-0', torneo:'Bundesliga 2014-15', fecha:'1 Nov 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:88,jugador:'Muller'}
  ]
  },
  {
    id:'bund1314_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'3-0', torneo:'Bundesliga 2013-14', fecha:'1 Feb 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:14,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:52,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:82,jugador:'Muller'}
  ]
  },
  {
    id:'sa1516_juve_int',
    local:'Juventus', visitante:'Inter de Milan',
    resultado:'2-0', torneo:'Serie A 2015-16', fecha:'28 Feb 2016',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:35,jugador:'Dybala'},
    {equipo:'Juventus',minuto:72,jugador:'Morata'}
  ]
  },
  {
    id:'sa1516_rom_juve',
    local:'Roma', visitante:'Juventus',
    resultado:'1-0', torneo:'Serie A 2015-16', fecha:'11 Oct 2015',
    tipo:'club',
    goles:[
    {equipo:'Roma',minuto:59,jugador:'Pjanic'}
  ]
  },
  {
    id:'sa1415_juve_rom',
    local:'Juventus', visitante:'Roma',
    resultado:'3-2', torneo:'Serie A 2014-15', fecha:'5 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:24,jugador:'Tevez'},
    {equipo:'Roma',minuto:38,jugador:'Gervinho'},
    {equipo:'Juventus',minuto:56,jugador:'Tevez'},
    {equipo:'Roma',minuto:78,jugador:'Florenzi'},
    {equipo:'Juventus',minuto:90,jugador:'Morata'}
  ]
  },
  {
    id:'l11516_psg_oly',
    local:'PSG', visitante:'Olympique Lyon',
    resultado:'5-1', torneo:'Ligue 1 2015-16', fecha:'13 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:9,jugador:'Ibrahimovic'},
    {equipo:'Olympique Lyon',minuto:17,jugador:'Lacazette'},
    {equipo:'PSG',minuto:34,jugador:'Cavani'},
    {equipo:'PSG',minuto:55,jugador:'Rabiot'},
    {equipo:'PSG',minuto:68,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:84,jugador:'Lucas'}
  ]
  },
  {
    id:'l11415_psg_man',
    local:'PSG', visitante:'Marseille',
    resultado:'2-0', torneo:'Ligue 1 2014-15', fecha:'26 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:22,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:67,jugador:'Cavani'}
  ]
  },
  {
    id:'ucl2425_rm_dor',
    local:'Real Madrid', visitante:'Borussia Dortmund',
    resultado:'5-2', torneo:'Champions 2024-25 Grupos', fecha:'22 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Vinicius'},
    {equipo:'Real Madrid',minuto:23,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:44,jugador:'Mbappe'},
    {equipo:'Borussia Dortmund',minuto:57,jugador:'Guirassy'},
    {equipo:'Real Madrid',minuto:68,jugador:'Vinicius'},
    {equipo:'Borussia Dortmund',minuto:78,jugador:'Adeyemi'},
    {equipo:'Real Madrid',minuto:90,jugador:'Mbappe'}
  ]
  },
  {
    id:'ucl2425_bar_bay',
    local:'Barcelona', visitante:'Bayern Munich',
    resultado:'4-1', torneo:'Champions 2024-25 Grupos', fecha:'23 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:9,jugador:'Raphinha'},
    {equipo:'Barcelona',minuto:28,jugador:'Robert Lewandowski'},
    {equipo:'Bayern Munich',minuto:45,jugador:'Harry Kane'},
    {equipo:'Barcelona',minuto:55,jugador:'Raphinha'},
    {equipo:'Barcelona',minuto:70,jugador:'Gavi'}
  ]
  },
  {
    id:'ucl2425_man_int',
    local:'Manchester City', visitante:'Inter de Milan',
    resultado:'3-1', torneo:'Champions 2024-25 Grupos', fecha:'22 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:15,jugador:'De Bruyne'},
    {equipo:'Inter de Milan',minuto:33,jugador:'Lautaro'},
    {equipo:'Manchester City',minuto:56,jugador:'Foden'},
    {equipo:'Manchester City',minuto:79,jugador:'Haaland'}
  ]
  },
  {
    id:'ucl2425_ars_sha',
    local:'Arsenal', visitante:'Shakhtar',
    resultado:'1-0', torneo:'Champions 2024-25 Grupos', fecha:'2 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:68,jugador:'Saka'}
  ]
  },
  {
    id:'ucl2425_liv_atl',
    local:'Liverpool', visitante:'Atletico de Madrid',
    resultado:'1-0', torneo:'Champions 2024-25 Grupos', fecha:'4 Dic 2024',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:22,jugador:'Salah'}
  ]
  },
  {
    id:'ucl2425_juve_man',
    local:'Juventus', visitante:'Manchester City',
    resultado:'2-0', torneo:'Champions 2024-25 Grupos', fecha:'11 Dic 2024',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:17,jugador:'Weah'},
    {equipo:'Juventus',minuto:65,jugador:'Cambiaso'}
  ]
  },
  {
    id:'ucl2425_mila_estrella',
    local:'AC Milan', visitante:'Estrella Roja',
    resultado:'2-1', torneo:'Champions 2024-25 Grupos', fecha:'19 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:28,jugador:'Reijnders'},
    {equipo:'Estrella Roja',minuto:51,jugador:'Bukari'},
    {equipo:'AC Milan',minuto:87,jugador:'Leao'}
  ]
  },
  {
    id:'ucl2425_por_ars',
    local:'Porto', visitante:'Arsenal',
    resultado:'0-0', torneo:'Champions 2024-25 Grupos', fecha:'22 Oct 2024',
    tipo:'club',
    goles:[]
  },
  {
    id:'ucl2425_nap_gal',
    local:'Napoles', visitante:'Galatasaray',
    resultado:'0-0', torneo:'Champions 2024-25 Grupos', fecha:'3 Oct 2024',
    tipo:'club',
    goles:[]
  },
  {
    id:'ucl2425_psg_gir',
    local:'PSG', visitante:'Girona',
    resultado:'1-0', torneo:'Champions 2024-25 Grupos', fecha:'18 Sep 2024',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:45,jugador:'Dembele'}
  ]
  },
  {
    id:'ucl2425_manz_rm_r16',
    local:'Manchester City', visitante:'Real Madrid',
    resultado:'2-3', torneo:'Champions 2024-25 Octavos', fecha:'11 Feb 2025',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:34,jugador:'Bellingham'},
    {equipo:'Manchester City',minuto:56,jugador:'De Bruyne'},
    {equipo:'Real Madrid',minuto:71,jugador:'Vinicius'},
    {equipo:'Manchester City',minuto:79,jugador:'Haaland'},
    {equipo:'Real Madrid',minuto:93,jugador:'Mbappe'}
  ]
  },
  {
    id:'ucl2425_bar_ben',
    local:'Barcelona', visitante:'Benfica',
    resultado:'5-4', torneo:'Champions 2024-25 Grupos', fecha:'5 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:2,jugador:'Raphinha'},
    {equipo:'Benfica',minuto:14,jugador:'Di Maria'},
    {equipo:'Barcelona',minuto:27,jugador:'Ferran Torres'},
    {equipo:'Benfica',minuto:35,jugador:'Pavlidis'},
    {equipo:'Barcelona',minuto:56,jugador:'Yamal'},
    {equipo:'Benfica',minuto:65,jugador:'Pavlidis'},
    {equipo:'Barcelona',minuto:79,jugador:'Lewandowski'},
    {equipo:'Benfica',minuto:83,jugador:'Di Maria'},
    {equipo:'Barcelona',minuto:90,jugador:'Raphinha'}
  ]
  },
  {
    id:'ucl2425_bvb_cel',
    local:'Borussia Dortmund', visitante:'Celtic',
    resultado:'7-1', torneo:'Champions 2024-25 Grupos', fecha:'1 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:18,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:25,jugador:'Brandt'},
    {equipo:'Celtic',minuto:33,jugador:'Hatate'},
    {equipo:'Borussia Dortmund',minuto:41,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:53,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:64,jugador:'Reus'},
    {equipo:'Borussia Dortmund',minuto:77,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:88,jugador:'Adeyemi'}
  ]
  },
  {
    id:'ucl2425_ars_psg_r16',
    local:'Arsenal', visitante:'PSG',
    resultado:'0-1', torneo:'Champions 2024-25 Octavos', fecha:'11 Mar 2025',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:45,jugador:'Dembele'}
  ]
  },
  {
    id:'ucl2425_rm_man_r16_v',
    local:'Real Madrid', visitante:'Manchester City',
    resultado:'1-3', torneo:'Champions 2024-25 Octavos', fecha:'18 Feb 2025',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:29,jugador:'Gvardiol'},
    {equipo:'Real Madrid',minuto:56,jugador:'Bellingham'},
    {equipo:'Manchester City',minuto:68,jugador:'Haaland'},
    {equipo:'Manchester City',minuto:81,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'ucl2425_bar_ben2',
    local:'Barcelona', visitante:'Benfica',
    resultado:'4-5', torneo:'Champions 2024-25 Octavos', fecha:'19 Mar 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:3,jugador:'Raphinha'},
    {equipo:'Benfica',minuto:17,jugador:'Pavlidis'},
    {equipo:'Barcelona',minuto:34,jugador:'Yamal'},
    {equipo:'Benfica',minuto:50,jugador:'Di Maria'},
    {equipo:'Barcelona',minuto:61,jugador:'Lewandowski'},
    {equipo:'Benfica',minuto:72,jugador:'Pavlidis'},
    {equipo:'Barcelona',minuto:81,jugador:'Pedri'},
    {equipo:'Benfica',minuto:85,jugador:'Pavlidis'},
    {equipo:'Benfica',minuto:90,jugador:'Aursnes'}
  ]
  },
  {
    id:'ucl2425_bar_dor',
    local:'Barcelona', visitante:'Borussia Dortmund',
    resultado:'4-0', torneo:'Semifinal Champions 2025 (ida)', fecha:'29 Abr 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:5,jugador:'Yamal'},
    {equipo:'Barcelona',minuto:22,jugador:'Raphinha'},
    {equipo:'Barcelona',minuto:55,jugador:'Olmo'},
    {equipo:'Barcelona',minuto:81,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'ucl2425_ars_rm',
    local:'Arsenal', visitante:'Real Madrid',
    resultado:'1-2', torneo:'Cuartos Champions 2025 (vuelta)', fecha:'15 Abr 2025',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:24,jugador:'Vinicius'},
    {equipo:'Arsenal',minuto:71,jugador:'Trossard'},
    {equipo:'Real Madrid',minuto:82,jugador:'Mbappe'}
  ]
  },
  {
    id:'ucl2425_inter_bay_semi',
    local:'Inter de Milan', visitante:'Bayern Munich',
    resultado:'1-0', torneo:'Semifinal Champions 2025 (vuelta)', fecha:'6 May 2025',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:53,jugador:'Lautaro'}
  ]
  },
  {
    id:'ucl2425_bar_rm_semi',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'3-2', torneo:'Semifinal Champions 2025 (vuelta)', fecha:'14 May 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:15,jugador:'Raphinha'},
    {equipo:'Real Madrid',minuto:33,jugador:'Bellingham'},
    {equipo:'Barcelona',minuto:50,jugador:'Lewandowski'},
    {equipo:'Real Madrid',minuto:70,jugador:'Vinicius'},
    {equipo:'Barcelona',minuto:89,jugador:'Pedri'}
  ]
  },
  {
    id:'ucl2425_final_bar_int',
    local:'Barcelona', visitante:'Inter de Milan',
    resultado:'3-1', torneo:'Final Champions 2025', fecha:'31 May 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:12,jugador:'Yamal'},
    {equipo:'Barcelona',minuto:38,jugador:'Lewandowski'},
    {equipo:'Inter de Milan',minuto:55,jugador:'Lautaro'},
    {equipo:'Barcelona',minuto:80,jugador:'Raphinha'}
  ]
  },
  {
    id:'pl2425_liv_man',
    local:'Liverpool', visitante:'Manchester United',
    resultado:'3-0', torneo:'Premier League 2024-25', fecha:'5 Ene 2025',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:15,jugador:'Salah'},
    {equipo:'Liverpool',minuto:44,jugador:'Gakpo'},
    {equipo:'Liverpool',minuto:73,jugador:'Diaz'}
  ]
  },
  {
    id:'pl2425_man_bri',
    local:'Manchester City', visitante:'Brighton',
    resultado:'2-1', torneo:'Premier League 2024-25', fecha:'25 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:18,jugador:'Haaland'},
    {equipo:'Brighton',minuto:45,jugador:'Minteh'},
    {equipo:'Manchester City',minuto:78,jugador:'Bernardo Silva'}
  ]
  },
  {
    id:'pl2425_ars_liv',
    local:'Arsenal', visitante:'Liverpool',
    resultado:'2-2', torneo:'Premier League 2024-25', fecha:'27 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:17,jugador:'Martinelli'},
    {equipo:'Liverpool',minuto:45,jugador:'Salah'},
    {equipo:'Liverpool',minuto:65,jugador:'Gakpo'},
    {equipo:'Arsenal',minuto:88,jugador:'Saka'}
  ]
  },
  {
    id:'pl2425_che_ars',
    local:'Chelsea', visitante:'Arsenal',
    resultado:'1-1', torneo:'Premier League 2024-25', fecha:'10 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:22,jugador:'Rice'},
    {equipo:'Chelsea',minuto:75,jugador:'Palmer'}
  ]
  },
  {
    id:'pl2425_tot_che',
    local:'Tottenham', visitante:'Chelsea',
    resultado:'4-3', torneo:'Premier League 2024-25', fecha:'8 Dic 2024',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:3,jugador:'Kulusevski'},
    {equipo:'Chelsea',minuto:25,jugador:'Palmer'},
    {equipo:'Tottenham',minuto:38,jugador:'Son'},
    {equipo:'Chelsea',minuto:50,jugador:'Jackson'},
    {equipo:'Tottenham',minuto:68,jugador:'Bergvall'},
    {equipo:'Chelsea',minuto:77,jugador:'Mudryk'},
    {equipo:'Tottenham',minuto:90,jugador:'Bentancur'}
  ]
  },
  {
    id:'pl2425_man_new',
    local:'Manchester City', visitante:'Newcastle',
    resultado:'3-3', torneo:'Premier League 2024-25', fecha:'18 Ene 2025',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:12,jugador:'Haaland'},
    {equipo:'Newcastle',minuto:27,jugador:'Isak'},
    {equipo:'Newcastle',minuto:40,jugador:'Guimaraes'},
    {equipo:'Manchester City',minuto:55,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:78,jugador:'Gundogan'},
    {equipo:'Newcastle',minuto:90,jugador:'Barnes'}
  ]
  },
  {
    id:'pl2425_liv_ars',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'1-0', torneo:'Premier League 2024-25', fecha:'23 Feb 2025',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:67,jugador:'Salah'}
  ]
  },
  {
    id:'lla2425_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'4-0', torneo:'LaLiga 2024-25', fecha:'26 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:12,jugador:'Mbappe'},
    {equipo:'Real Madrid',minuto:27,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:55,jugador:'Vinicius'},
    {equipo:'Real Madrid',minuto:78,jugador:'Rodrygo'}
  ]
  },
  {
    id:'lla2425_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'5-2', torneo:'LaLiga 2024-25', fecha:'12 Abr 2025',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:8,jugador:'Yamal'},
    {equipo:'Barcelona',minuto:24,jugador:'Lewandowski'},
    {equipo:'Real Madrid',minuto:40,jugador:'Mbappe'},
    {equipo:'Barcelona',minuto:55,jugador:'Raphinha'},
    {equipo:'Real Madrid',minuto:67,jugador:'Bellingham'},
    {equipo:'Barcelona',minuto:78,jugador:'Ferran Torres'},
    {equipo:'Barcelona',minuto:90,jugador:'Dani Olmo'}
  ]
  },
  {
    id:'lla2425_atl_rm',
    local:'Atletico de Madrid', visitante:'Real Madrid',
    resultado:'2-1', torneo:'LaLiga 2024-25', fecha:'29 Sep 2024',
    tipo:'club',
    goles:[
    {equipo:'Atletico de Madrid',minuto:22,jugador:'Griezmann'},
    {equipo:'Real Madrid',minuto:50,jugador:'Bellingham'},
    {equipo:'Atletico de Madrid',minuto:85,jugador:'Sorloth'}
  ]
  },
  {
    id:'lla2425_bar_atl',
    local:'Barcelona', visitante:'Atletico de Madrid',
    resultado:'3-2', torneo:'LaLiga 2024-25', fecha:'20 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:12,jugador:'Lewandowski'},
    {equipo:'Atletico de Madrid',minuto:35,jugador:'Sorloth'},
    {equipo:'Barcelona',minuto:50,jugador:'Raphinha'},
    {equipo:'Atletico de Madrid',minuto:65,jugador:'Griezmann'},
    {equipo:'Barcelona',minuto:90,jugador:'Gavi'}
  ]
  },
  {
    id:'bund2425_bay_dor',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'4-0', torneo:'Bundesliga 2024-25', fecha:'2 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:9,jugador:'Harry Kane'},
    {equipo:'Bayern Munich',minuto:27,jugador:'Sane'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:78,jugador:'Kane'}
  ]
  },
  {
    id:'bund2425_lei_bay',
    local:'Bayer Leverkusen', visitante:'Bayern Munich',
    resultado:'1-0', torneo:'Bundesliga 2024-25', fecha:'8 Mar 2025',
    tipo:'club',
    goles:[
    {equipo:'Bayer Leverkusen',minuto:62,jugador:'Wirtz'}
  ]
  },
  {
    id:'bund2425_dor_sc',
    local:'Borussia Dortmund', visitante:'Schalke',
    resultado:'4-0', torneo:'Bundesliga 2024-25', fecha:'18 Jan 2025',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:5,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:28,jugador:'Adeyemi'},
    {equipo:'Borussia Dortmund',minuto:57,jugador:'Brandt'},
    {equipo:'Borussia Dortmund',minuto:82,jugador:'Guirassy'}
  ]
  },
  {
    id:'sa2425_int_juve',
    local:'Inter de Milan', visitante:'Juventus',
    resultado:'2-0', torneo:'Serie A 2024-25', fecha:'27 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:13,jugador:'Lautaro'},
    {equipo:'Inter de Milan',minuto:55,jugador:'Thuram'}
  ]
  },
  {
    id:'sa2425_nap_atl',
    local:'Napoles', visitante:'Atalanta',
    resultado:'3-0', torneo:'Serie A 2024-25', fecha:'3 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Napoles',minuto:22,jugador:'Lukaku'},
    {equipo:'Napoles',minuto:45,jugador:'Politano'},
    {equipo:'Napoles',minuto:78,jugador:'Raspadori'}
  ]
  },
  {
    id:'sa2425_mil_int',
    local:'AC Milan', visitante:'Inter de Milan',
    resultado:'1-2', torneo:'Serie A 2024-25', fecha:'22 Sep 2024',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:34,jugador:'Leao'},
    {equipo:'Inter de Milan',minuto:50,jugador:'Thuram'},
    {equipo:'Inter de Milan',minuto:75,jugador:'Lautaro'}
  ]
  },
  {
    id:'l12425_psg_mon',
    local:'PSG', visitante:'Monaco',
    resultado:'4-2', torneo:'Ligue 1 2024-25', fecha:'19 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:7,jugador:'Dembele'},
    {equipo:'Monaco',minuto:24,jugador:'Ben Yedder'},
    {equipo:'PSG',minuto:35,jugador:'Mbappe'},
    {equipo:'Monaco',minuto:55,jugador:'Golovin'},
    {equipo:'PSG',minuto:78,jugador:'Doue'},
    {equipo:'PSG',minuto:90,jugador:'Kolo Muani'}
  ]
  },
  {
    id:'l12425_psg_ly',
    local:'PSG', visitante:'Lyon',
    resultado:'3-1', torneo:'Ligue 1 2024-25', fecha:'7 Dic 2024',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:12,jugador:'Doue'},
    {equipo:'PSG',minuto:34,jugador:'Ramos'},
    {equipo:'Lyon',minuto:55,jugador:'Lacazette'},
    {equipo:'PSG',minuto:80,jugador:'Kolo Muani'}
  ]
  },
  {
    id:'ucl2425_dor_rm',
    local:'Borussia Dortmund', visitante:'Real Madrid',
    resultado:'2-0', torneo:'Champions 2024-25 Grupos', fecha:'17 Sep 2024',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:3,jugador:'Guirassy'},
    {equipo:'Borussia Dortmund',minuto:55,jugador:'Brandt'}
  ]
  },
  {
    id:'ucl2425_man_int2',
    local:'Manchester City', visitante:'Estrella Roja',
    resultado:'3-0', torneo:'Champions 2024-25 Grupos', fecha:'23 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:20,jugador:'De Bruyne'},
    {equipo:'Manchester City',minuto:44,jugador:'Haaland'},
    {equipo:'Manchester City',minuto:67,jugador:'Gundogan'}
  ]
  },
  {
    id:'ucl2425_liv_bay',
    local:'Liverpool', visitante:'Bayern Munich',
    resultado:'2-0', torneo:'Champions 2024-25 Grupos', fecha:'2 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:33,jugador:'Salah'},
    {equipo:'Liverpool',minuto:75,jugador:'Diaz'}
  ]
  },
  {
    id:'ucl2425_psg_atl',
    local:'PSG', visitante:'Atletico de Madrid',
    resultado:'1-2', torneo:'Champions 2024-25 Grupos', fecha:'6 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:22,jugador:'Dembele'},
    {equipo:'Atletico de Madrid',minuto:55,jugador:'Griezmann'},
    {equipo:'Atletico de Madrid',minuto:88,jugador:'Sorloth'}
  ]
  },
  {
    id:'ucl2425_bay_ben',
    local:'Bayern Munich', visitante:'Benfica',
    resultado:'1-0', torneo:'Champions 2024-25 Grupos', fecha:'5 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:57,jugador:'Kane'}
  ]
  },
  {
    id:'ucl2425_int_lei',
    local:'Inter de Milan', visitante:'Leipzig',
    resultado:'1-0', torneo:'Champions 2024-25 Grupos', fecha:'23 Oct 2024',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:44,jugador:'Lautaro'}
  ]
  },
  {
    id:'ucl2425_atl_sla',
    local:'Atletico de Madrid', visitante:'Slavia Praga',
    resultado:'4-0', torneo:'Champions 2024-25 Grupos', fecha:'19 Nov 2024',
    tipo:'club',
    goles:[
    {equipo:'Atletico de Madrid',minuto:11,jugador:'Sorloth'},
    {equipo:'Atletico de Madrid',minuto:28,jugador:'Griezmann'},
    {equipo:'Atletico de Madrid',minuto:55,jugador:'Morata'},
    {equipo:'Atletico de Madrid',minuto:78,jugador:'Lino'}
  ]
  },
  {
    id:'ucl2425_rm_bur',
    local:'Real Madrid', visitante:'Borussia Dortmund',
    resultado:'3-2', torneo:'Champions 2024-25 Grupos', fecha:'11 Dic 2024',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:7,jugador:'Guirassy'},
    {equipo:'Real Madrid',minuto:22,jugador:'Vinicius'},
    {equipo:'Borussia Dortmund',minuto:45,jugador:'Adeyemi'},
    {equipo:'Real Madrid',minuto:62,jugador:'Bellingham'},
    {equipo:'Real Madrid',minuto:89,jugador:'Mbappe'}
  ]
  },
  {
    id:'pl1516_lei_tot',
    local:'Leicester City', visitante:'Tottenham',
    resultado:'2-2', torneo:'Premier League 2015-16', fecha:'13 Dic 2015',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:35,jugador:'Kane'},
    {equipo:'Leicester City',minuto:44,jugador:'Vardy'},
    {equipo:'Leicester City',minuto:79,jugador:'Vardy'},
    {equipo:'Tottenham',minuto:83,jugador:'Eriksen'}
  ]
  },
  {
    id:'pl1516_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'3-0', torneo:'Premier League 2015-16', fecha:'2 Oct 2015',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:12,jugador:'Cazorla'},
    {equipo:'Arsenal',minuto:27,jugador:'Walcott'},
    {equipo:'Arsenal',minuto:71,jugador:'Walcott'}
  ]
  },
  {
    id:'pl1516_man_che',
    local:'Manchester City', visitante:'Chelsea',
    resultado:'3-0', torneo:'Premier League 2015-16', fecha:'3 Sep 2015',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:33,jugador:'Silva'},
    {equipo:'Manchester City',minuto:49,jugador:'Aguero'},
    {equipo:'Manchester City',minuto:67,jugador:'Aguero'}
  ]
  },
  {
    id:'pl1516_tot_ars',
    local:'Tottenham', visitante:'Arsenal',
    resultado:'2-1', torneo:'Premier League 2015-16', fecha:'5 Mar 2016',
    tipo:'club',
    goles:[
    {equipo:'Tottenham',minuto:36,jugador:'Kane'},
    {equipo:'Arsenal',minuto:55,jugador:'Monreal'},
    {equipo:'Tottenham',minuto:89,jugador:'Kane'}
  ]
  },
  {
    id:'pl1415_ars_man2',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'2-1', torneo:'Premier League 2014-15', fecha:'22 Nov 2014',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:24,jugador:'Rooney'},
    {equipo:'Arsenal',minuto:54,jugador:'Giroud'},
    {equipo:'Arsenal',minuto:76,jugador:'Alexis Sanchez'}
  ]
  },
  {
    id:'pl1415_tot_che',
    local:'Tottenham', visitante:'Chelsea',
    resultado:'0-1', torneo:'Premier League 2014-15', fecha:'1 Ene 2015',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:48,jugador:'Diego Costa'}
  ]
  },
  {
    id:'pl1314_man_tot',
    local:'Manchester City', visitante:'Tottenham',
    resultado:'6-0', torneo:'Premier League 2013-14', fecha:'24 Nov 2013',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:10,jugador:'Aguero'},
    {equipo:'Manchester City',minuto:17,jugador:'Silva'},
    {equipo:'Manchester City',minuto:25,jugador:'Negredo'},
    {equipo:'Manchester City',minuto:50,jugador:'Negredo'},
    {equipo:'Manchester City',minuto:62,jugador:'Toure'},
    {equipo:'Manchester City',minuto:88,jugador:'Negredo'}
  ]
  },
  {
    id:'pl1314_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'2-0', torneo:'Premier League 2013-14', fecha:'12 Nov 2013',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:51,jugador:'Ramsey'},
    {equipo:'Arsenal',minuto:79,jugador:'Aaron Ramsey'}
  ]
  },
  {
    id:'lla1314_rm_bar_2',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'0-1', torneo:'LaLiga 2013-14', fecha:'26 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:19,jugador:'Neymar'}
  ]
  },
  {
    id:'lla1314_atl_rm',
    local:'Atletico de Madrid', visitante:'Real Madrid',
    resultado:'2-2', torneo:'LaLiga 2013-14', fecha:'28 Sep 2013',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:37,jugador:'Benzema'},
    {equipo:'Real Madrid',minuto:73,jugador:'Di Maria'},
    {equipo:'Atletico de Madrid',minuto:60,jugador:'Arda Turan'},
    {equipo:'Atletico de Madrid',minuto:89,jugador:'Miranda'}
  ]
  },
  {
    id:'lla1213_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-2', torneo:'LaLiga 2012-13', fecha:'7 Oct 2012',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:23,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:44,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:82,jugador:'Pedro'},
    {equipo:'Barcelona',minuto:90,jugador:'Messi'}
  ]
  },
  {
    id:'lla1213_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-1', torneo:'LaLiga 2012-13', fecha:'26 Feb 2013',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:5,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:55,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:88,jugador:'Villa'}
  ]
  },
  {
    id:'bund1617_bay_hof',
    local:'Bayern Munich', visitante:'Hoffenheim',
    resultado:'4-2', torneo:'Bundesliga 2016-17', fecha:'16 Mar 2017',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:5,jugador:'Lewandowski'},
    {equipo:'Hoffenheim',minuto:22,jugador:'Kramaric'},
    {equipo:'Bayern Munich',minuto:35,jugador:'Thiago'},
    {equipo:'Bayern Munich',minuto:58,jugador:'Robben'},
    {equipo:'Hoffenheim',minuto:75,jugador:'Grifo'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Muller'}
  ]
  },
  {
    id:'bund1617_dor_lei',
    local:'Borussia Dortmund', visitante:'Bayer Leverkusen',
    resultado:'2-1', torneo:'Bundesliga 2016-17', fecha:'14 Jan 2017',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:11,jugador:'Aubameyang'},
    {equipo:'Bayer Leverkusen',minuto:34,jugador:'Kiesling'},
    {equipo:'Borussia Dortmund',minuto:78,jugador:'Schurrle'}
  ]
  },
  {
    id:'bund1516_bay_man',
    local:'Bayern Munich', visitante:'Werder Bremen',
    resultado:'5-0', torneo:'Bundesliga 2015-16', fecha:'22 Aug 2015',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:1,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:16,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:45,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:63,jugador:'Coman'},
    {equipo:'Bayern Munich',minuto:77,jugador:'Gotze'}
  ]
  },
  {
    id:'bund1415_bay_sch',
    local:'Bayern Munich', visitante:'Schalke',
    resultado:'6-0', torneo:'Bundesliga 2014-15', fecha:'4 Oct 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:17,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:30,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:45,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:60,jugador:'Gotze'},
    {equipo:'Bayern Munich',minuto:70,jugador:'Lewandowski'}
  ]
  },
  {
    id:'bund1314_bay_ham',
    local:'Bayern Munich', visitante:'Hamburgo',
    resultado:'9-2', torneo:'Bundesliga 2013-14', fecha:'26 Mar 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:2,jugador:'Dante'},
    {equipo:'Bayern Munich',minuto:7,jugador:'Gomez'},
    {equipo:'Bayern Munich',minuto:25,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:30,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:37,jugador:'Kroos'},
    {equipo:'Hamburgo',minuto:49,jugador:'Van der Vaart'},
    {equipo:'Bayern Munich',minuto:56,jugador:'Gomez'},
    {equipo:'Bayern Munich',minuto:63,jugador:'Gomez'},
    {equipo:'Hamburgo',minuto:79,jugador:'Marcell Jansen'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Thiago'},
    {equipo:'Bayern Munich',minuto:89,jugador:'Gomez'}
  ]
  },
  {
    id:'sa1617_juve_rom2',
    local:'Juventus', visitante:'Roma',
    resultado:'2-0', torneo:'Serie A 2016-17', fecha:'24 Feb 2017',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:18,jugador:'Dybala'},
    {equipo:'Juventus',minuto:75,jugador:'Higuain'}
  ]
  },
  {
    id:'sa1617_nap_juve',
    local:'Napoles', visitante:'Juventus',
    resultado:'3-1', torneo:'Serie A 2016-17', fecha:'2 Apr 2017',
    tipo:'club',
    goles:[
    {equipo:'Napoles',minuto:17,jugador:'Mertens'},
    {equipo:'Napoles',minuto:53,jugador:'Callejon'},
    {equipo:'Juventus',minuto:72,jugador:'Bonucci'},
    {equipo:'Napoles',minuto:83,jugador:'Insigne'}
  ]
  },
  {
    id:'sa1516_juve_rom2',
    local:'Juventus', visitante:'Roma',
    resultado:'3-0', torneo:'Serie A 2015-16', fecha:'17 Jan 2016',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:16,jugador:'Dybala'},
    {equipo:'Juventus',minuto:55,jugador:'Higuain'},
    {equipo:'Juventus',minuto:71,jugador:'Mandzukic'}
  ]
  },
  {
    id:'sa1516_nap_rom',
    local:'Napoles', visitante:'Roma',
    resultado:'2-1', torneo:'Serie A 2015-16', fecha:'29 Nov 2015',
    tipo:'club',
    goles:[
    {equipo:'Roma',minuto:9,jugador:'Salah'},
    {equipo:'Napoles',minuto:45,jugador:'Mertens'},
    {equipo:'Napoles',minuto:78,jugador:'Callejon'}
  ]
  },
  {
    id:'l11617_psg_nie',
    local:'PSG', visitante:'Niza',
    resultado:'3-0', torneo:'Ligue 1 2016-17', fecha:'4 Mar 2017',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:12,jugador:'Cavani'},
    {equipo:'PSG',minuto:55,jugador:'Draxler'},
    {equipo:'PSG',minuto:82,jugador:'Matuidi'}
  ]
  },
  {
    id:'l11617_psg_guingamp',
    local:'PSG', visitante:'Guingamp',
    resultado:'4-2', torneo:'Ligue 1 2016-17', fecha:'26 Nov 2016',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:9,jugador:'Draxler'},
    {equipo:'PSG',minuto:25,jugador:'Ibrahimovic'},
    {equipo:'Guingamp',minuto:44,jugador:'Briand'},
    {equipo:'PSG',minuto:52,jugador:'Cavani'},
    {equipo:'Guingamp',minuto:66,jugador:'Beauvue'},
    {equipo:'PSG',minuto:78,jugador:'Verratti'}
  ]
  },
  {
    id:'l11718_psg_tro',
    local:'PSG', visitante:'Troyes',
    resultado:'6-1', torneo:'Ligue 1 2017-18', fecha:'29 Oct 2017',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:5,jugador:'Neymar'},
    {equipo:'PSG',minuto:17,jugador:'Cavani'},
    {equipo:'PSG',minuto:25,jugador:'Mbapppe'},
    {equipo:'Troyes',minuto:38,jugador:'Kebe'},
    {equipo:'PSG',minuto:56,jugador:'Neymar'},
    {equipo:'PSG',minuto:74,jugador:'Cavani'},
    {equipo:'PSG',minuto:88,jugador:'Mbapppe'}
  ]
  },
  {
    id:'nl2324_esp_cro',
    local:'Espana', visitante:'Croacia',
    resultado:'3-0', torneo:'Nations League 2024', fecha:'8 Sep 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:18,jugador:'Oyarzabal'},
    {equipo:'Espana',minuto:44,jugador:'Zubimendi'},
    {equipo:'Espana',minuto:78,jugador:'Ferran Torres'}
  ]
  },
  {
    id:'nl2324_fra_bel',
    local:'Francia', visitante:'Belgica',
    resultado:'2-0', torneo:'Nations League 2024', fecha:'7 Sep 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:40,jugador:'Mbappe'},
    {equipo:'Francia',minuto:73,jugador:'Coman'}
  ]
  },
  {
    id:'nl2324_ale_ned',
    local:'Alemania', visitante:'Paises Bajos',
    resultado:'0-2', torneo:'Nations League 2024', fecha:'10 Sep 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Paises Bajos',minuto:34,jugador:'Gakpo'},
    {equipo:'Paises Bajos',minuto:67,jugador:'Depay'}
  ]
  },
  {
    id:'nl2324_por_pol',
    local:'Portugal', visitante:'Polonia',
    resultado:'3-1', torneo:'Nations League 2024', fecha:'5 Sep 2024',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:17,jugador:'Ronaldo'},
    {equipo:'Portugal',minuto:44,jugador:'Neto'},
    {equipo:'Polonia',minuto:65,jugador:'Lewandowski'},
    {equipo:'Portugal',minuto:88,jugador:'Joao Felix'}
  ]
  },
  {
    id:'nl2122_fra_esp',
    local:'Francia', visitante:'Espana',
    resultado:'2-1', torneo:'Nations League 2021-22', fecha:'10 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:64,jugador:'Oyarzabal'},
    {equipo:'Francia',minuto:66,jugador:'Benzema'},
    {equipo:'Francia',minuto:80,jugador:'Mbappe'}
  ]
  },
  {
    id:'nl2122_bel_fra',
    local:'Belgica', visitante:'Francia',
    resultado:'2-3', torneo:'Semifinal Nations League 2021', fecha:'7 Oct 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Belgica',minuto:37,jugador:'Carrasco'},
    {equipo:'Francia',minuto:62,jugador:'Benzema'},
    {equipo:'Belgica',minuto:68,jugador:'De Bruyne'},
    {equipo:'Francia',minuto:69,jugador:'Benzema'},
    {equipo:'Francia',minuto:90,jugador:'Mbappe'}
  ]
  },
  {
    id:'nl2021_ned_ita',
    local:'Paises Bajos', visitante:'Italia',
    resultado:'0-2', torneo:'Nations League 2020-21', fecha:'14 Oct 2020',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:16,jugador:'Barella'},
    {equipo:'Italia',minuto:84,jugador:'El Shaarawy'}
  ]
  },
  {
    id:'wcq_bel_gre_2001',
    local:'Bélgica', visitante:'Grecia',
    resultado:'4-1', torneo:'Clasificatoria Mundial 2002', fecha:'28 Mar 2001',
    tipo:'seleccion',
    goles:[
    {equipo:'Belgica',minuto:12,jugador:'Wilmots'},
    {equipo:'Belgica',minuto:35,jugador:'Vanderhaeghe'},
    {equipo:'Belgica',minuto:67,jugador:'Nilis'},
    {equipo:'Grecia',minuto:75,jugador:'Nikolaidis'},
    {equipo:'Belgica',minuto:88,jugador:'Wilmots'}
  ]
  },
  {
    id:'wcq_por_and_7_0',
    local:'Portugal', visitante:'Andorra',
    resultado:'7-0', torneo:'Clasificatoria Mundial 2022', fecha:'24 Mar 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Portugal',minuto:1,jugador:'Ronaldo'},
    {equipo:'Portugal',minuto:17,jugador:'Ruben Dias'},
    {equipo:'Portugal',minuto:26,jugador:'Ronaldo'},
    {equipo:'Portugal',minuto:44,jugador:'Marcos'},
    {equipo:'Portugal',minuto:55,jugador:'Joao Felix'},
    {equipo:'Portugal',minuto:60,jugador:'Ronaldo'},
    {equipo:'Portugal',minuto:75,jugador:'Ronaldo'}
  ]
  },
  {
    id:'wcq_fra_kaz_8_0',
    local:'Francia', visitante:'Kazajistan',
    resultado:'8-0', torneo:'Clasificatoria Mundial 2022', fecha:'13 Nov 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:4,jugador:'Theo Hernandez'},
    {equipo:'Francia',minuto:8,jugador:'Benzema'},
    {equipo:'Francia',minuto:22,jugador:'Benzema'},
    {equipo:'Francia',minuto:33,jugador:'Benzema'},
    {equipo:'Francia',minuto:44,jugador:'Benzema'},
    {equipo:'Francia',minuto:55,jugador:'Griezmann'},
    {equipo:'Francia',minuto:67,jugador:'Mbappe'},
    {equipo:'Francia',minuto:88,jugador:'Mbappe'}
  ]
  },
  {
    id:'wcq_esp_rom_2021',
    local:'Espana', visitante:'Kosovo',
    resultado:'2-0', torneo:'Clasificatoria Mundial 2022', fecha:'31 Mar 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:14,jugador:'Jose Gaya'},
    {equipo:'Espana',minuto:64,jugador:'Laporte'}
  ]
  },
  {
    id:'wcq_ita_sui_0_0',
    local:'Italia', visitante:'Suiza',
    resultado:'1-1', torneo:'Clasificatoria Mundial 2022', fecha:'12 Nov 2021',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:16,jugador:'Jorginho'},
    {equipo:'Suiza',minuto:46,jugador:'Widmer'}
  ]
  },
  {
    id:'cdr_sev_bar_2022',
    local:'Real Betis', visitante:'Rayo Vallecano',
    resultado:'1-0', torneo:'Copa del Rey 2022 Final', fecha:'23 Abr 2022',
    tipo:'club',
    goles:[
    {equipo:'Real Betis',minuto:86,jugador:'Tello'}
  ]
  },
  {
    id:'cdr_rm_osasuna_2023',
    local:'Real Madrid', visitante:'Osasuna',
    resultado:'2-1', torneo:'Copa del Rey 2023 Final', fecha:'6 May 2023',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:33,jugador:'Rodrigo'},
    {equipo:'Osasuna',minuto:45,jugador:'Budimir'},
    {equipo:'Real Madrid',minuto:75,jugador:'Asensio'}
  ]
  },
  {
    id:'cdr_atl_rm_1_0',
    local:'Atletico de Madrid', visitante:'Real Madrid',
    resultado:'0-0 (p)', torneo:'Copa del Rey 2021 Semifinal', fecha:'10 Feb 2021',
    tipo:'club',
    goles:[]
  },
  {
    id:'sc_rm_atl_2020',
    local:'Real Madrid', visitante:'Atletico de Madrid',
    resultado:'2-0', torneo:'Supercopa Espana 2020 Final', fecha:'12 Ene 2020',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:38,jugador:'Mendy'},
    {equipo:'Real Madrid',minuto:88,jugador:'Courtois'}
  ]
  },
  {
    id:'sc_bar_rm_3_2_2021_r',
    local:'Real Madrid', visitante:'Athletic Club',
    resultado:'0-1', torneo:'Supercopa Espana 2021 SF', fecha:'14 Ene 2021',
    tipo:'club',
    goles:[
    {equipo:'Athletic Club',minuto:40,jugador:'Raul Garcia'}
  ]
  },
  {
    id:'sc_ath_bar_2021_f',
    local:'Athletic Club', visitante:'Barcelona',
    resultado:'1-3', torneo:'Supercopa Espana 2021 Final', fecha:'17 Ene 2021',
    tipo:'club',
    goles:[
    {equipo:'Athletic Club',minuto:9,jugador:'Asier Villalibre'},
    {equipo:'Barcelona',minuto:27,jugador:'Griezmann'},
    {equipo:'Barcelona',minuto:51,jugador:'De Jong'},
    {equipo:'Barcelona',minuto:66,jugador:'Dembele'}
  ]
  },
  {
    id:'dfb_bay_dor_4_2',
    local:'Bayern Munich', visitante:'Borussia Dortmund',
    resultado:'3-2', torneo:'DFB Pokal Final 2021', fecha:'13 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Borussia Dortmund',minuto:43,jugador:'Sancho'},
    {equipo:'Borussia Dortmund',minuto:55,jugador:'Haaland'},
    {equipo:'Bayern Munich',minuto:59,jugador:'Sule'},
    {equipo:'Bayern Munich',minuto:72,jugador:'Roca'},
    {equipo:'Bayern Munich',minuto:90,jugador:'Choupo-Moting'}
  ]
  },
  {
    id:'dfb_rm_fra_2023',
    local:'Bayer Leverkusen', visitante:'Kaiserslautern',
    resultado:'0-0 (p)', torneo:'DFB Pokal Final 2023 SF', fecha:'19 Abr 2023',
    tipo:'club',
    goles:[]
  },
  {
    id:'dfb_bay_lei_4_0',
    local:'Bayern Munich', visitante:'Eintracht Frankfurt',
    resultado:'3-0', torneo:'DFB Pokal Final 2018', fecha:'19 May 2018',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:24,jugador:'James'},
    {equipo:'Bayern Munich',minuto:65,jugador:'Ribery'},
    {equipo:'Bayern Munich',minuto:90,jugador:'Muller'}
  ]
  },
  {
    id:'ci_juve_int_2021',
    local:'Juventus', visitante:'Atalanta',
    resultado:'1-2', torneo:'Coppa Italia Final 2021', fecha:'19 May 2021',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:76,jugador:'Kulusevski'},
    {equipo:'Atalanta',minuto:78,jugador:'Pessina'},
    {equipo:'Atalanta',minuto:91,jugador:'Malinovskiy'}
  ]
  },
  {
    id:'ci_nap_juve_2020',
    local:'Napoles', visitante:'Juventus',
    resultado:'4-2 (p)', torneo:'Coppa Italia Final 2020', fecha:'17 Jun 2020',
    tipo:'club',
    goles:[
    {equipo:'Napoles',minuto:45,jugador:'Mertens'},
    {equipo:'Juventus',minuto:61,jugador:'Ronaldo'}
  ]
  },
  {
    id:'ci_rom_nap_2014',
    local:'Napoles', visitante:'Fiorentina',
    resultado:'3-1', torneo:'Coppa Italia Final 2014', fecha:'3 May 2014',
    tipo:'club',
    goles:[
    {equipo:'Napoles',minuto:35,jugador:'Hamsik'},
    {equipo:'Napoles',minuto:52,jugador:'Inler'},
    {equipo:'Fiorentina',minuto:75,jugador:'Gonzalo Rodriguez'},
    {equipo:'Napoles',minuto:85,jugador:'Mertens'}
  ]
  },
  {
    id:'cf_psg_mon_2021',
    local:'PSG', visitante:'Monaco',
    resultado:'2-0', torneo:'Coupe de France Final 2021', fecha:'19 May 2021',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:22,jugador:'Verratti'},
    {equipo:'PSG',minuto:81,jugador:'Kylian Mbappe'}
  ]
  },
  {
    id:'cf_psg_ren_2022',
    local:'PSG', visitante:'Niza',
    resultado:'1-0', torneo:'Coupe de France Final 2022', fecha:'7 May 2022',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:45,jugador:'Mbapppe'}
  ]
  },
  {
    id:'pl2002_ars_che',
    local:'Arsenal', visitante:'Chelsea',
    resultado:'3-1', torneo:'Premier League 2001-02', fecha:'18 Nov 2001',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:11,jugador:'Henry'},
    {equipo:'Arsenal',minuto:34,jugador:'Ljungberg'},
    {equipo:'Chelsea',minuto:56,jugador:'Gudjohnsen'},
    {equipo:'Arsenal',minuto:75,jugador:'Pires'}
  ]
  },
  {
    id:'pl2002_man_ars',
    local:'Manchester United', visitante:'Arsenal',
    resultado:'1-0', torneo:'Premier League 2002-03', fecha:'21 Apr 2003',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:80,jugador:'Ruud van Nistelrooy'}
  ]
  },
  {
    id:'pl2004_man_ars',
    local:'Manchester United', visitante:'Arsenal',
    resultado:'2-0', torneo:'Premier League 2003-04', fecha:'21 Feb 2004',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:19,jugador:'Neville'},
    {equipo:'Manchester United',minuto:55,jugador:'Ronaldo'}
  ]
  },
  {
    id:'pl2005_che_ars',
    local:'Chelsea', visitante:'Arsenal',
    resultado:'4-2', torneo:'Premier League 2004-05', fecha:'12 Dic 2004',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:28,jugador:'Henry'},
    {equipo:'Chelsea',minuto:35,jugador:'Terry'},
    {equipo:'Arsenal',minuto:47,jugador:'Bergkamp'},
    {equipo:'Chelsea',minuto:69,jugador:'Duff'},
    {equipo:'Chelsea',minuto:74,jugador:'Kezman'},
    {equipo:'Chelsea',minuto:84,jugador:'Gudjohnsen'}
  ]
  },
  {
    id:'pl2005_man_ars',
    local:'Manchester United', visitante:'Arsenal',
    resultado:'4-2', torneo:'FA Community Shield 2003', fecha:'10 Ago 2003',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:18,jugador:'Henry'},
    {equipo:'Manchester United',minuto:60,jugador:'Silvestre'},
    {equipo:'Manchester United',minuto:72,jugador:'Ronaldo'},
    {equipo:'Arsenal',minuto:83,jugador:'Ljungberg'},
    {equipo:'Manchester United',minuto:88,jugador:'Van Nistelrooy'},
    {equipo:'Manchester United',minuto:90,jugador:'Saha'}
  ]
  },
  {
    id:'pl2006_che_man',
    local:'Chelsea', visitante:'Manchester United',
    resultado:'5-4', torneo:'Premier League 2005-06', fecha:'2 Mar 2006',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:18,jugador:'Joe Cole'},
    {equipo:'Manchester United',minuto:28,jugador:'Rooney'},
    {equipo:'Manchester United',minuto:39,jugador:'Rooney'},
    {equipo:'Chelsea',minuto:48,jugador:'Robben'},
    {equipo:'Manchester United',minuto:54,jugador:'Saha'},
    {equipo:'Chelsea',minuto:67,jugador:'Lampard'},
    {equipo:'Manchester United',minuto:72,jugador:'Van Nistelrooy'},
    {equipo:'Chelsea',minuto:81,jugador:'Gudjohnsen'},
    {equipo:'Chelsea',minuto:90,jugador:'Duff'}
  ]
  },
  {
    id:'pl2007_man_che',
    local:'Manchester United', visitante:'Chelsea',
    resultado:'2-2', torneo:'Premier League 2006-07', fecha:'10 Sep 2006',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:38,jugador:'Fletcher'},
    {equipo:'Manchester United',minuto:42,jugador:'Saha'},
    {equipo:'Chelsea',minuto:56,jugador:'Shevchenko'},
    {equipo:'Chelsea',minuto:78,jugador:'Shevchenko'}
  ]
  },
  {
    id:'pl2008_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'2-2', torneo:'Premier League 2007-08', fecha:'9 Nov 2007',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:48,jugador:'Gallas'},
    {equipo:'Arsenal',minuto:51,jugador:'Fabregas'},
    {equipo:'Manchester United',minuto:75,jugador:'Ronaldo'},
    {equipo:'Manchester United',minuto:82,jugador:'Tevez'}
  ]
  },
  {
    id:'pl2009_che_man',
    local:'Chelsea', visitante:'Manchester United',
    resultado:'3-0', torneo:'Premier League 2008-09', fecha:'25 Oct 2008',
    tipo:'club',
    goles:[
    {equipo:'Chelsea',minuto:28,jugador:'Joe Cole'},
    {equipo:'Chelsea',minuto:50,jugador:'Lampard'},
    {equipo:'Chelsea',minuto:80,jugador:'Drogba'}
  ]
  },
  {
    id:'pl2009_man_ars',
    local:'Manchester United', visitante:'Arsenal',
    resultado:'4-0', torneo:'Premier League 2008-09', fecha:'29 Ago 2008',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:3,jugador:'Ronaldo'},
    {equipo:'Manchester United',minuto:27,jugador:'Tevez'},
    {equipo:'Manchester United',minuto:46,jugador:'Rooney'},
    {equipo:'Manchester United',minuto:59,jugador:'Tevez'}
  ]
  },
  {
    id:'pl2010_man_por',
    local:'Manchester United', visitante:'Portsmouth',
    resultado:'4-1', torneo:'FA Cup 2010 SF', fecha:'17 Abr 2010',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:15,jugador:'Nani'},
    {equipo:'Manchester United',minuto:44,jugador:'Rafael'},
    {equipo:'Portsmouth',minuto:55,jugador:'O\'Hara'},
    {equipo:'Manchester United',minuto:62,jugador:'Rooney'},
    {equipo:'Manchester United',minuto:82,jugador:'Gibson'}
  ]
  },
  {
    id:'lla2002_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-0', torneo:'LaLiga 2001-02', fecha:'20 Ene 2002',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:10,jugador:'Zidane'},
    {equipo:'Real Madrid',minuto:73,jugador:'Raul'}
  ]
  },
  {
    id:'lla2003_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'3-2', torneo:'LaLiga 2002-03', fecha:'16 Nov 2002',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:5,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:26,jugador:'Xavi'},
    {equipo:'Real Madrid',minuto:36,jugador:'Zidane'},
    {equipo:'Barcelona',minuto:55,jugador:'Saviola'},
    {equipo:'Real Madrid',minuto:80,jugador:'Ronaldo'}
  ]
  },
  {
    id:'lla2004_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'3-0', torneo:'LaLiga 2003-04', fecha:'20 Nov 2004',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:14,jugador:'Eto\'o'},
    {equipo:'Barcelona',minuto:39,jugador:'Ronaldinho'},
    {equipo:'Barcelona',minuto:71,jugador:'Ronaldinho'}
  ]
  },
  {
    id:'lla2005_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'3-0', torneo:'LaLiga 2004-05', fecha:'6 Mar 2005',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:11,jugador:'Owen'},
    {equipo:'Real Madrid',minuto:39,jugador:'Zidane'},
    {equipo:'Real Madrid',minuto:64,jugador:'Casillas'}
  ]
  },
  {
    id:'lla2006_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'2-0', torneo:'LaLiga 2005-06', fecha:'26 Feb 2006',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:27,jugador:'Eto\'o'},
    {equipo:'Barcelona',minuto:77,jugador:'Ronaldinho'}
  ]
  },
  {
    id:'lla2007_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-0', torneo:'LaLiga 2006-07', fecha:'22 Oct 2006',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:27,jugador:'Raul'},
    {equipo:'Real Madrid',minuto:88,jugador:'Van Nistelrooy'}
  ]
  },
  {
    id:'lla2007_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'3-3', torneo:'LaLiga 2006-07', fecha:'10 Mar 2007',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:5,jugador:'Van Nistelrooy'},
    {equipo:'Barcelona',minuto:22,jugador:'Messi'},
    {equipo:'Real Madrid',minuto:33,jugador:'Ronaldo'},
    {equipo:'Barcelona',minuto:44,jugador:'Eto\'o'},
    {equipo:'Real Madrid',minuto:55,jugador:'Higuain'},
    {equipo:'Barcelona',minuto:87,jugador:'Ronaldinho'}
  ]
  },
  {
    id:'lla2008_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'1-0', torneo:'LaLiga 2007-08', fecha:'2 Dic 2007',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:14,jugador:'Raul'}
  ]
  },
  {
    id:'lla2008_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'0-1', torneo:'LaLiga 2007-08', fecha:'6 Abr 2008',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:72,jugador:'Marcelo'}
  ]
  },
  {
    id:'lla2009_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'2-6', torneo:'LaLiga 2008-09', fecha:'2 May 2009',
    tipo:'club',
    goles:[
    {equipo:'Real Madrid',minuto:14,jugador:'Ramos'},
    {equipo:'Real Madrid',minuto:73,jugador:'Higuain'},
    {equipo:'Barcelona',minuto:6,jugador:'Henry'},
    {equipo:'Barcelona',minuto:18,jugador:'Puyol'},
    {equipo:'Barcelona',minuto:19,jugador:'Messi'},
    {equipo:'Barcelona',minuto:22,jugador:'Xavi'},
    {equipo:'Barcelona',minuto:55,jugador:'Messi'},
    {equipo:'Barcelona',minuto:73,jugador:'Messi'}
  ]
  },
  {
    id:'lla2010_rm_bar',
    local:'Real Madrid', visitante:'Barcelona',
    resultado:'0-2', torneo:'LaLiga 2009-10', fecha:'10 Abr 2010',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:18,jugador:'Pedro'},
    {equipo:'Barcelona',minuto:55,jugador:'Messi'}
  ]
  },
  {
    id:'lla2010_bar_rm',
    local:'Barcelona', visitante:'Real Madrid',
    resultado:'5-0', torneo:'LaLiga 2010-11', fecha:'29 Nov 2010',
    tipo:'club',
    goles:[
    {equipo:'Barcelona',minuto:10,jugador:'Xavi'},
    {equipo:'Barcelona',minuto:18,jugador:'Pedro'},
    {equipo:'Barcelona',minuto:55,jugador:'Villa'},
    {equipo:'Barcelona',minuto:57,jugador:'Villa'},
    {equipo:'Barcelona',minuto:90,jugador:'Jeffren'}
  ]
  },
  {
    id:'bund2011_bay_man',
    local:'Bayern Munich', visitante:'Hannover',
    resultado:'5-0', torneo:'Bundesliga 2010-11', fecha:'23 Abr 2011',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:3,jugador:'Mueller'},
    {equipo:'Bayern Munich',minuto:14,jugador:'Robben'},
    {equipo:'Bayern Munich',minuto:28,jugador:'Mueller'},
    {equipo:'Bayern Munich',minuto:45,jugador:'Mueller'},
    {equipo:'Bayern Munich',minuto:80,jugador:'Klose'}
  ]
  },
  {
    id:'bund2012_bay_aug',
    local:'Bayern Munich', visitante:'Augsburg',
    resultado:'3-2', torneo:'Bundesliga 2011-12', fecha:'28 Jan 2012',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:4,jugador:'Robben'},
    {equipo:'Augsburg',minuto:22,jugador:'Altintop'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Mueller'},
    {equipo:'Augsburg',minuto:75,jugador:'Baier'},
    {equipo:'Bayern Munich',minuto:88,jugador:'Gomez'}
  ]
  },
  {
    id:'bund2015_bay_aug',
    local:'Bayern Munich', visitante:'Mainz',
    resultado:'4-1', torneo:'Bundesliga 2014-15', fecha:'5 Nov 2014',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:11,jugador:'Gotze'},
    {equipo:'Bayern Munich',minuto:27,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:44,jugador:'Muller'},
    {equipo:'Mainz',minuto:67,jugador:'Yunus Malli'},
    {equipo:'Bayern Munich',minuto:85,jugador:'Lewandowski'}
  ]
  },
  {
    id:'sa2002_juve_rom',
    local:'Juventus', visitante:'Roma',
    resultado:'1-0', torneo:'Serie A 2001-02', fecha:'17 Feb 2002',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:55,jugador:'Del Piero'}
  ]
  },
  {
    id:'sa2004_ac_juve',
    local:'AC Milan', visitante:'Juventus',
    resultado:'2-1', torneo:'Serie A 2003-04', fecha:'13 Mar 2004',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:18,jugador:'Shevchenko'},
    {equipo:'Juventus',minuto:40,jugador:'Trezeguet'},
    {equipo:'AC Milan',minuto:75,jugador:'Inzaghi'}
  ]
  },
  {
    id:'sa2006_juve_int',
    local:'Juventus', visitante:'Inter de Milan',
    resultado:'2-0', torneo:'Serie A 2005-06', fecha:'28 Jan 2006',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:33,jugador:'Trezeguet'},
    {equipo:'Juventus',minuto:77,jugador:'Del Piero'}
  ]
  },
  {
    id:'sa2007_int_rom',
    local:'Inter de Milan', visitante:'Roma',
    resultado:'3-1', torneo:'Serie A 2006-07', fecha:'4 Feb 2007',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:15,jugador:'Ibrahimovic'},
    {equipo:'Roma',minuto:38,jugador:'Totti'},
    {equipo:'Inter de Milan',minuto:55,jugador:'Maicon'},
    {equipo:'Inter de Milan',minuto:78,jugador:'Ibrahimovic'}
  ]
  },
  {
    id:'sa2009_int_juve',
    local:'Inter de Milan', visitante:'Juventus',
    resultado:'2-2', torneo:'Serie A 2008-09', fecha:'8 Mar 2009',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:21,jugador:'Ibrahimovic'},
    {equipo:'Juventus',minuto:44,jugador:'Del Piero'},
    {equipo:'Juventus',minuto:55,jugador:'Trezeguet'},
    {equipo:'Inter de Milan',minuto:88,jugador:'Cambiasso'}
  ]
  },
  {
    id:'sa2011_mil_int',
    local:'AC Milan', visitante:'Inter de Milan',
    resultado:'3-0', torneo:'Serie A 2010-11', fecha:'14 Abr 2011',
    tipo:'club',
    goles:[
    {equipo:'AC Milan',minuto:15,jugador:'Ibrahimovic'},
    {equipo:'AC Milan',minuto:45,jugador:'Pato'},
    {equipo:'AC Milan',minuto:72,jugador:'Ibrahimovic'}
  ]
  },
  {
    id:'pl2007_liv_ars',
    local:'Liverpool', visitante:'Arsenal',
    resultado:'4-1', torneo:'Premier League 2006-07', fecha:'28 Oct 2006',
    tipo:'club',
    goles:[
    {equipo:'Liverpool',minuto:14,jugador:'Bellamy'},
    {equipo:'Arsenal',minuto:27,jugador:'Fabregas'},
    {equipo:'Liverpool',minuto:34,jugador:'Crouch'},
    {equipo:'Liverpool',minuto:57,jugador:'Gerrard'},
    {equipo:'Liverpool',minuto:82,jugador:'Bellamy'}
  ]
  },
  {
    id:'pl2008_man_che',
    local:'Manchester United', visitante:'Chelsea',
    resultado:'2-0', torneo:'Premier League 2007-08', fecha:'10 May 2008',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:26,jugador:'Rooney'},
    {equipo:'Manchester United',minuto:55,jugador:'Ronaldo'}
  ]
  },
  {
    id:'pl2010_man_man',
    local:'Manchester City', visitante:'Manchester United',
    resultado:'0-1', torneo:'Premier League 2009-10', fecha:'5 Feb 2010',
    tipo:'club',
    goles:[
    {equipo:'Manchester United',minuto:3,jugador:'Wayne Rooney'}
  ]
  },
  {
    id:'pl2011_ars_man',
    local:'Arsenal', visitante:'Manchester United',
    resultado:'1-0', torneo:'Premier League 2010-11', fecha:'28 Ago 2010',
    tipo:'club',
    goles:[
    {equipo:'Arsenal',minuto:55,jugador:'Fabregas'}
  ]
  },
  {
    id:'pl2012_man_man',
    local:'Manchester United', visitante:'Manchester City',
    resultado:'1-6', torneo:'Premier League 2011-12', fecha:'23 Oct 2011',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:22,jugador:'Balotelli'},
    {equipo:'Manchester City',minuto:60,jugador:'Balotelli'},
    {equipo:'Manchester United',minuto:81,jugador:'Fletcher'},
    {equipo:'Manchester City',minuto:89,jugador:'Aguero'},
    {equipo:'Manchester City',minuto:90,jugador:'Silva'},
    {equipo:'Manchester City',minuto:90,jugador:'Dzeko'},
    {equipo:'Manchester City',minuto:90,jugador:'Dzeko'}
  ]
  },
  {
    id:'pl2013_man_man',
    local:'Manchester United', visitante:'Manchester City',
    resultado:'3-2', torneo:'Premier League 2012-13', fecha:'22 Sep 2012',
    tipo:'club',
    goles:[
    {equipo:'Manchester City',minuto:3,jugador:'Aguero'},
    {equipo:'Manchester United',minuto:16,jugador:'Rafael'},
    {equipo:'Manchester United',minuto:23,jugador:'Robin van Persie'},
    {equipo:'Manchester City',minuto:57,jugador:'Barry'},
    {equipo:'Manchester United',minuto:82,jugador:'Robin van Persie'}
  ]
  },
  {
    id:'sa2012_int_juve',
    local:'Inter de Milan', visitante:'Juventus',
    resultado:'3-1', torneo:'Serie A 2011-12', fecha:'15 Jan 2012',
    tipo:'club',
    goles:[
    {equipo:'Inter de Milan',minuto:18,jugador:'Sneijder'},
    {equipo:'Inter de Milan',minuto:45,jugador:'Milito'},
    {equipo:'Juventus',minuto:55,jugador:'Pirlo'},
    {equipo:'Inter de Milan',minuto:77,jugador:'Milito'}
  ]
  },
  {
    id:'sa2013_juve_int',
    local:'Juventus', visitante:'Inter de Milan',
    resultado:'3-1', torneo:'Serie A 2012-13', fecha:'3 Feb 2013',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:17,jugador:'Tevez'},
    {equipo:'Juventus',minuto:33,jugador:'Giovinco'},
    {equipo:'Inter de Milan',minuto:55,jugador:'Palacio'},
    {equipo:'Juventus',minuto:80,jugador:'Matri'}
  ]
  },
  {
    id:'sa2014_juve_rom',
    local:'Juventus', visitante:'Roma',
    resultado:'3-0', torneo:'Serie A 2013-14', fecha:'5 Oct 2013',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:12,jugador:'Tevez'},
    {equipo:'Juventus',minuto:45,jugador:'Llorente'},
    {equipo:'Juventus',minuto:67,jugador:'Quagliarella'}
  ]
  },
  {
    id:'sa2015_juve_nap',
    local:'Juventus', visitante:'Napoles',
    resultado:'3-0', torneo:'Serie A 2014-15', fecha:'18 Jan 2015',
    tipo:'club',
    goles:[
    {equipo:'Juventus',minuto:27,jugador:'Tevez'},
    {equipo:'Juventus',minuto:44,jugador:'Llorente'},
    {equipo:'Juventus',minuto:65,jugador:'Marchisio'}
  ]
  },
  {
    id:'bund2013_bay_sch',
    local:'Bayern Munich', visitante:'Schalke',
    resultado:'5-0', torneo:'DFB Pokal SF 2013', fecha:'16 Abr 2013',
    tipo:'club',
    goles:[
    {equipo:'Bayern Munich',minuto:3,jugador:'Muller'},
    {equipo:'Bayern Munich',minuto:22,jugador:'Ribery'},
    {equipo:'Bayern Munich',minuto:36,jugador:'Lewandowski'},
    {equipo:'Bayern Munich',minuto:55,jugador:'Gomez'},
    {equipo:'Bayern Munich',minuto:72,jugador:'Shaqiri'}
  ]
  },
  {
    id:'l12011_psg_ol',
    local:'PSG', visitante:'Olympique Lyon',
    resultado:'4-1', torneo:'Ligue 1 2010-11', fecha:'9 Mar 2011',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:14,jugador:'Hoarau'},
    {equipo:'Olympique Lyon',minuto:25,jugador:'Lisandro'},
    {equipo:'PSG',minuto:55,jugador:'Rothen'},
    {equipo:'PSG',minuto:70,jugador:'Gameiro'},
    {equipo:'PSG',minuto:88,jugador:'Hoarau'}
  ]
  },
  {
    id:'l12012_psg_bor',
    local:'PSG', visitante:'Bordeaux',
    resultado:'4-0', torneo:'Ligue 1 2011-12', fecha:'28 Ago 2011',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:17,jugador:'Jallet'},
    {equipo:'PSG',minuto:33,jugador:'Menez'},
    {equipo:'PSG',minuto:57,jugador:'Nene'},
    {equipo:'PSG',minuto:75,jugador:'Menez'}
  ]
  },
  {
    id:'l12013_psg_man',
    local:'PSG', visitante:'Marseille',
    resultado:'2-2', torneo:'Ligue 1 2012-13', fecha:'25 Nov 2012',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:4,jugador:'Ibrahimovic'},
    {equipo:'Marseille',minuto:27,jugador:'Valbuena'},
    {equipo:'PSG',minuto:55,jugador:'Cavani'},
    {equipo:'Marseille',minuto:88,jugador:'Eto\'o'}
  ]
  },
  {
    id:'l12014_psg_ol',
    local:'PSG', visitante:'Lyon',
    resultado:'4-0', torneo:'Ligue 1 2013-14', fecha:'21 Sep 2013',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:11,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:34,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:55,jugador:'Cavani'},
    {equipo:'PSG',minuto:77,jugador:'Ibrahimovic'}
  ]
  },
  {
    id:'l12015_psg_mar',
    local:'PSG', visitante:'Marseille',
    resultado:'5-1', torneo:'Coupe de la Ligue 2015 Final', fecha:'11 Abr 2015',
    tipo:'club',
    goles:[
    {equipo:'PSG',minuto:5,jugador:'Ibrahimovic'},
    {equipo:'Marseille',minuto:18,jugador:'Payet'},
    {equipo:'PSG',minuto:27,jugador:'Cavani'},
    {equipo:'PSG',minuto:44,jugador:'Lucas'},
    {equipo:'PSG',minuto:67,jugador:'Ibrahimovic'},
    {equipo:'PSG',minuto:83,jugador:'Ibrahimovic'}
  ]
  },
  {
    id:'euro12_grA_ukr_sue',
    local:'Ucrania', visitante:'Suecia',
    resultado:'2-1', torneo:'Grupo D Euro 2012', fecha:'11 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Ucrania',minuto:54,jugador:'Shevchenko'},
    {equipo:'Ucrania',minuto:62,jugador:'Shevchenko'},
    {equipo:'Suecia',minuto:70,jugador:'Ibrahimovic'}
  ]
  },
  {
    id:'euro12_grB_ger_por',
    local:'Alemania', visitante:'Portugal',
    resultado:'1-0', torneo:'Grupo B Euro 2012', fecha:'9 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:12,jugador:'Muller'}
  ]
  },
  {
    id:'euro12_grC_esp_irl',
    local:'Espana', visitante:'Rep. de Irlanda',
    resultado:'4-0', torneo:'Grupo C Euro 2012', fecha:'14 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:4,jugador:'Torres'},
    {equipo:'Espana',minuto:49,jugador:'Torres'},
    {equipo:'Espana',minuto:83,jugador:'Silva'},
    {equipo:'Espana',minuto:88,jugador:'Mata'}
  ]
  },
  {
    id:'euro12_grD_eng_ukr',
    local:'Inglaterra', visitante:'Ucrania',
    resultado:'1-0', torneo:'Grupo D Euro 2012', fecha:'19 Jun 2012',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:48,jugador:'Rooney'}
  ]
  },
  {
    id:'ca11_grA_col_cos_r',
    local:'Colombia', visitante:'Bolivia',
    resultado:'2-0', torneo:'Grupo A Copa America 2011', fecha:'4 Jul 2011',
    tipo:'seleccion',
    goles:[
    {equipo:'Colombia',minuto:25,jugador:'Radamel Falcao'},
    {equipo:'Colombia',minuto:77,jugador:'Jairo Arboleda'}
  ]
  },
  {
    id:'ca11_grB_par_ven',
    local:'Paraguay', visitante:'Venezuela',
    resultado:'0-0', torneo:'Grupo B Copa America 2011', fecha:'8 Jul 2011',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'ca11_grC_bra_ecu',
    local:'Brasil', visitante:'Ecuador',
    resultado:'4-2', torneo:'Grupo C Copa America 2011', fecha:'8 Jul 2011',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:20,jugador:'Neymar'},
    {equipo:'Ecuador',minuto:24,jugador:'Benitez'},
    {equipo:'Brasil',minuto:34,jugador:'Andre Santos'},
    {equipo:'Ecuador',minuto:55,jugador:'Benitez'},
    {equipo:'Brasil',minuto:65,jugador:'Elias'},
    {equipo:'Brasil',minuto:88,jugador:'Alexandre Pato'}
  ]
  },
  {
    id:'wc10_grG_bra_ivo',
    local:'Brasil', visitante:'Costa de Marfil',
    resultado:'3-1', torneo:'Grupo G Mundial 2010', fecha:'20 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Costa de Marfil',minuto:79,jugador:'Drogba'},
    {equipo:'Brasil',minuto:25,jugador:'Luis Fabiano'},
    {equipo:'Brasil',minuto:50,jugador:'Luis Fabiano'},
    {equipo:'Brasil',minuto:88,jugador:'Elano'}
  ]
  },
  {
    id:'wc10_grG_por_bra',
    local:'Portugal', visitante:'Brasil',
    resultado:'0-0', torneo:'Grupo G Mundial 2010', fecha:'25 Jun 2010',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc10_r16_esp_por',
    local:'Espana', visitante:'Portugal',
    resultado:'1-0', torneo:'Octavos Mundial 2010', fecha:'29 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Espana',minuto:63,jugador:'Villa'}
  ]
  },
  {
    id:'wc10_r16_bra_chi',
    local:'Brasil', visitante:'Chile',
    resultado:'3-0', torneo:'Octavos Mundial 2010', fecha:'28 Jun 2010',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:35,jugador:'Juan'},
    {equipo:'Brasil',minuto:59,jugador:'Luis Fabiano'},
    {equipo:'Brasil',minuto:76,jugador:'Robinho'}
  ]
  },
  {
    id:'wc06_r16_bra_gha',
    local:'Brasil', visitante:'Ghana',
    resultado:'3-0', torneo:'Octavos Mundial 2006', fecha:'27 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:5,jugador:'Ronaldo'},
    {equipo:'Brasil',minuto:45,jugador:'Adriano'},
    {equipo:'Brasil',minuto:84,jugador:'Ze Roberto'}
  ]
  },
  {
    id:'wc06_r16_arg_mex',
    local:'Argentina', visitante:'Mexico',
    resultado:'2-1', torneo:'Octavos Mundial 2006', fecha:'24 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:6,jugador:'Crespo'},
    {equipo:'Mexico',minuto:76,jugador:'Marquez'},
    {equipo:'Argentina',minuto:98,jugador:'Rodriguez'}
  ]
  },
  {
    id:'wc06_qf_ita_ukr',
    local:'Italia', visitante:'Ucrania',
    resultado:'3-0', torneo:'Cuartos Mundial 2006', fecha:'29 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:3,jugador:'Zambrotta'},
    {equipo:'Italia',minuto:59,jugador:'Toni'},
    {equipo:'Italia',minuto:69,jugador:'Toni'}
  ]
  },
  {
    id:'wc06_qf_arg_ale',
    local:'Argentina', visitante:'Alemania',
    resultado:'1-1 (p)', torneo:'Cuartos Mundial 2006', fecha:'30 Jun 2006',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:80,jugador:'Klose'},
    {equipo:'Argentina',minuto:48,jugador:'Ayala'}
  ]
  },
  {
    id:'wc02_grE_ger_sau',
    local:'Alemania', visitante:'Arabia Saudita',
    resultado:'8-0', torneo:'Grupo E Mundial 2002', fecha:'1 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania',minuto:20,jugador:'Klose'},
    {equipo:'Alemania',minuto:25,jugador:'Klose'},
    {equipo:'Alemania',minuto:40,jugador:'Ballack'},
    {equipo:'Alemania',minuto:45,jugador:'Klose'},
    {equipo:'Alemania',minuto:50,jugador:'Bode'},
    {equipo:'Alemania',minuto:70,jugador:'Bode'},
    {equipo:'Alemania',minuto:84,jugador:'Schneider'},
    {equipo:'Alemania',minuto:88,jugador:'Jancker'}
  ]
  },
  {
    id:'wc02_grF_kor_usa',
    local:'Corea del Sur', visitante:'Estados Unidos',
    resultado:'1-1', torneo:'Grupo D Mundial 2002', fecha:'10 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Estados Unidos',minuto:24,jugador:'McBride'},
    {equipo:'Corea del Sur',minuto:78,jugador:'Ahn Jung-hwan'}
  ]
  },
  {
    id:'wc02_r16_bel_bra',
    local:'Brasil', visitante:'Belgica',
    resultado:'2-0', torneo:'Octavos Mundial 2002', fecha:'17 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:67,jugador:'Rivaldo'},
    {equipo:'Brasil',minuto:87,jugador:'Ronaldo'}
  ]
  },
  {
    id:'wc02_qf_bra_eng',
    local:'Brasil', visitante:'Inglaterra',
    resultado:'2-1', torneo:'Cuartos Mundial 2002', fecha:'21 Jun 2002',
    tipo:'seleccion',
    goles:[
    {equipo:'Inglaterra',minuto:23,jugador:'Owen'},
    {equipo:'Brasil',minuto:45,jugador:'Rivaldo'},
    {equipo:'Brasil',minuto:50,jugador:'Ronaldinho'}
  ]
  },
  {
    id:'wc98_r16_fra_par',
    local:'Francia', visitante:'Paraguay',
    resultado:'1-0', torneo:'Octavos Mundial 1998', fecha:'28 Jun 1998',
    tipo:'seleccion',
    goles:[
    {equipo:'Francia',minuto:114,jugador:'Blanc'}
  ]
  },
  {
    id:'wc98_qf_cro_ale',
    local:'Croacia', visitante:'Alemania',
    resultado:'3-0', torneo:'Cuartos Mundial 1998', fecha:'4 Jul 1998',
    tipo:'seleccion',
    goles:[
    {equipo:'Croacia',minuto:45,jugador:'Jeremies'},
    {equipo:'Croacia',minuto:80,jugador:'Suker'},
    {equipo:'Croacia',minuto:85,jugador:'Suker'}
  ]
  },
  {
    id:'wc94_qf_bra_ned',
    local:'Brasil', visitante:'Paises Bajos',
    resultado:'3-2', torneo:'Cuartos Mundial 1994', fecha:'9 Jul 1994',
    tipo:'seleccion',
    goles:[
    {equipo:'Brasil',minuto:52,jugador:'Romario'},
    {equipo:'Brasil',minuto:62,jugador:'Bebeto'},
    {equipo:'Paises Bajos',minuto:64,jugador:'Bergkamp'},
    {equipo:'Paises Bajos',minuto:77,jugador:'Winter'},
    {equipo:'Brasil',minuto:80,jugador:'Branco'}
  ]
  },
  {
    id:'wc94_semi_ita_bul',
    local:'Italia', visitante:'Bulgaria',
    resultado:'2-1', torneo:'Semifinal Mundial 1994', fecha:'13 Jul 1994',
    tipo:'seleccion',
    goles:[
    {equipo:'Bulgaria',minuto:21,jugador:'Stoichkov'},
    {equipo:'Italia',minuto:26,jugador:'Baggio'},
    {equipo:'Italia',minuto:65,jugador:'Baggio'}
  ]
  },
  {
    id:'wc90_qf_ita_irl',
    local:'Italia', visitante:'Irlanda',
    resultado:'1-0', torneo:'Cuartos Mundial 1990', fecha:'30 Jun 1990',
    tipo:'seleccion',
    goles:[
    {equipo:'Italia',minuto:38,jugador:'Schillaci'}
  ]
  },
  {
    id:'wc90_qf_arg_yug',
    local:'Argentina', visitante:'Yugoslavia',
    resultado:'0-0 (p)', torneo:'Cuartos Mundial 1990', fecha:'30 Jun 1990',
    tipo:'seleccion',
    goles:[]
  },
  {
    id:'wc86_semi_arg_bel',
    local:'Argentina', visitante:'Belgica',
    resultado:'2-0', torneo:'Semifinal Mundial 1986', fecha:'25 Jun 1986',
    tipo:'seleccion',
    goles:[
    {equipo:'Argentina',minuto:34,jugador:'Maradona'},
    {equipo:'Argentina',minuto:51,jugador:'Burruchaga'}
  ]
  },
  {
    id:'wc86_semi_fra_ale',
    local:'Francia', visitante:'Alemania Occ.',
    resultado:'0-2', torneo:'Semifinal Mundial 1986', fecha:'25 Jun 1986',
    tipo:'seleccion',
    goles:[
    {equipo:'Alemania Occ.',minuto:9,jugador:'Breiter'},
    {equipo:'Alemania Occ.',minuto:55,jugador:'Voller'}
  ]
  },

  // ── BLOQUES ADICIONALES ──────────────────────────────────────────────────────
{
    id: 'wc1970_bra_ita_final',
    local: 'Brasil', visitante: 'Italia',
    resultado: '4-1', torneo: 'Final Mundial 1970', fecha: '21 Jun 1970',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 18, jugador: 'Pelé' },
      { equipo: 'Italia', minuto: 37, jugador: 'Boninsegna' },
      { equipo: 'Brasil', minuto: 66, jugador: 'Gérson' },
      { equipo: 'Brasil', minuto: 71, jugador: 'Jairzinho' },
      { equipo: 'Brasil', minuto: 86, jugador: 'Alberto' },
    ]
  },
{
    id: 'wc1986_arg_eng_qf',
    local: 'Argentina', visitante: 'Inglaterra',
    resultado: '2-1', torneo: 'Cuartos Mundial 1986', fecha: '22 Jun 1986',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 51, jugador: 'Maradona' },
      { equipo: 'Argentina', minuto: 55, jugador: 'Maradona' },
      { equipo: 'Inglaterra', minuto: 81, jugador: 'Lineker' },
    ]
  },
{
    id: 'wc1986_arg_wger_final',
    local: 'Argentina', visitante: 'Alemania Occ.',
    resultado: '3-2', torneo: 'Final Mundial 1986', fecha: '29 Jun 1986',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 23, jugador: 'Brown' },
      { equipo: 'Argentina', minuto: 55, jugador: 'Valdano' },
      { equipo: 'Alemania Occ.', minuto: 74, jugador: 'Rummenigge' },
      { equipo: 'Alemania Occ.', minuto: 81, jugador: 'Völler' },
      { equipo: 'Argentina', minuto: 83, jugador: 'Burruchaga' },
    ]
  },
{
    id: 'wc1982_ita_bra_grupos',
    local: 'Italia', visitante: 'Brasil',
    resultado: '3-2', torneo: 'Segunda fase Mundial 1982', fecha: '5 Jul 1982',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 5, jugador: 'Sócrates' },
      { equipo: 'Italia', minuto: 25, jugador: 'Rossi' },
      { equipo: 'Brasil', minuto: 68, jugador: 'Falcão' },
      { equipo: 'Italia', minuto: 69, jugador: 'Rossi' },
      { equipo: 'Italia', minuto: 74, jugador: 'Rossi' },
    ]
  },
{
    id: 'wc1982_ita_wger_final',
    local: 'Italia', visitante: 'Alemania Occ.',
    resultado: '3-1', torneo: 'Final Mundial 1982', fecha: '11 Jul 1982',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania Occ.', minuto: 83, jugador: 'Breitner' },
      { equipo: 'Italia', minuto: 57, jugador: 'Rossi' },
      { equipo: 'Italia', minuto: 69, jugador: 'Tardelli' },
      { equipo: 'Italia', minuto: 81, jugador: 'Altobelli' },
    ]
  },
{
    id: 'wc1974_wger_ned_final',
    local: 'Alemania Occ.', visitante: 'Países Bajos',
    resultado: '2-1', torneo: 'Final Mundial 1974', fecha: '7 Jul 1974',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Países Bajos', minuto: 2, jugador: 'Neeskens' },
      { equipo: 'Alemania Occ.', minuto: 25, jugador: 'Breitner' },
      { equipo: 'Alemania Occ.', minuto: 43, jugador: 'Müller' },
    ]
  },
{
    id: 'wc1966_eng_wger_final',
    local: 'Inglaterra', visitante: 'Alemania Occ.',
    resultado: '4-2', torneo: 'Final Mundial 1966', fecha: '30 Jul 1966',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania Occ.', minuto: 12, jugador: 'Haller' },
      { equipo: 'Inglaterra', minuto: 18, jugador: 'Hurst' },
      { equipo: 'Inglaterra', minuto: 78, jugador: 'Peters' },
      { equipo: 'Alemania Occ.', minuto: 90, jugador: 'Weber' },
      { equipo: 'Inglaterra', minuto: 101, jugador: 'Hurst' },
      { equipo: 'Inglaterra', minuto: 120, jugador: 'Hurst' },
    ]
  },
{
    id: 'wc1990_wger_arg_final',
    local: 'Alemania Occ.', visitante: 'Argentina',
    resultado: '1-0', torneo: 'Final Mundial 1990', fecha: '8 Jul 1990',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania Occ.', minuto: 85, jugador: 'Brehme' },
    ]
  },
{
    id: 'wc1978_arg_ned_final',
    local: 'Argentina', visitante: 'Países Bajos',
    resultado: '3-1', torneo: 'Final Mundial 1978', fecha: '25 Jun 1978',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 38, jugador: 'Kempes' },
      { equipo: 'Países Bajos', minuto: 82, jugador: 'Nanninga' },
      { equipo: 'Argentina', minuto: 105, jugador: 'Kempes' },
      { equipo: 'Argentina', minuto: 115, jugador: 'Bertoni' },
    ]
  },
{
    id: 'wc1958_bra_sue_final',
    local: 'Brasil', visitante: 'Suecia',
    resultado: '5-2', torneo: 'Final Mundial 1958', fecha: '29 Jun 1958',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Suecia', minuto: 4, jugador: 'Liedholm' },
      { equipo: 'Brasil', minuto: 9, jugador: 'Vavá' },
      { equipo: 'Brasil', minuto: 32, jugador: 'Vavá' },
      { equipo: 'Brasil', minuto: 55, jugador: 'Pelé' },
      { equipo: 'Suecia', minuto: 80, jugador: 'Simonsson' },
      { equipo: 'Brasil', minuto: 68, jugador: 'Zagallo' },
      { equipo: 'Brasil', minuto: 90, jugador: 'Pelé' },
    ]
  },
{
    id: 'wc2002_ger_bra_final_2',
    local: 'Alemania', visitante: 'Brasil',
    resultado: '0-2', torneo: 'Final Mundial 2002', fecha: '30 Jun 2002',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 67, jugador: 'Ronaldo' },
      { equipo: 'Brasil', minuto: 79, jugador: 'Ronaldo' },
    ]
  },
{
    id: 'wc2014_ger_fra_qf',
    local: 'Alemania', visitante: 'Francia',
    resultado: '1-0', torneo: 'Cuartos Mundial 2014', fecha: '4 Jul 2014',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Alemania', minuto: 13, jugador: 'Hummels' },
    ]
  },
{
    id: 'wc2014_ned_arg_semi',
    local: 'Países Bajos', visitante: 'Argentina',
    resultado: '0-0 (p)', torneo: 'Semifinal Mundial 2014', fecha: '9 Jul 2014',
    tipo: 'seleccion',
    goles: []
  },
{
    id: 'wc2010_uru_gha_qf_2',
    local: 'Uruguay', visitante: 'Ghana',
    resultado: '1-1 (p)', torneo: 'Cuartos Mundial 2010', fecha: '2 Jul 2010',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Uruguay', minuto: 55, jugador: 'Forlán' },
      { equipo: 'Ghana', minuto: 120, jugador: 'Mensah' },
    ]
  },
{
    id: 'wc2006_por_eng_qf',
    local: 'Portugal', visitante: 'Inglaterra',
    resultado: '0-0 (p)', torneo: 'Cuartos Mundial 2006', fecha: '1 Jul 2006',
    tipo: 'seleccion',
    goles: []
  },
{
    id: 'wc2018_cro_arg_grupos',
    local: 'Croacia', visitante: 'Argentina',
    resultado: '3-0', torneo: 'Fase Grupos Mundial 2018', fecha: '21 Jun 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Croacia', minuto: 53, jugador: 'Rebić' },
      { equipo: 'Croacia', minuto: 80, jugador: 'Modrić' },
      { equipo: 'Croacia', minuto: 90, jugador: 'Rakitić' },
    ]
  },
{
    id: 'wc2018_bel_bra_qf',
    local: 'Bélgica', visitante: 'Brasil',
    resultado: '2-1', torneo: 'Cuartos Mundial 2018', fecha: '6 Jul 2018',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 13, jugador: 'Fernandinho' },
      { equipo: 'Bélgica', minuto: 31, jugador: 'De Bruyne' },
      { equipo: 'Bélgica', minuto: 44, jugador: 'Chadli' },
    ]
  },
{
    id: 'wc2022_bra_cro_qf',
    local: 'Brasil', visitante: 'Croacia',
    resultado: '1-1 (p)', torneo: 'Cuartos Mundial 2022', fecha: '9 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Brasil', minuto: 105, jugador: 'Neymar' },
      { equipo: 'Croacia', minuto: 117, jugador: 'Pašalić' },
    ]
  },
{
    id: 'wc2022_arg_ned_qf',
    local: 'Argentina', visitante: 'Países Bajos',
    resultado: '2-2 (p)', torneo: 'Cuartos Mundial 2022', fecha: '9 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Argentina', minuto: 35, jugador: 'Nahuel Molina' },
      { equipo: 'Argentina', minuto: 73, jugador: 'Messi' },
      { equipo: 'Países Bajos', minuto: 83, jugador: 'Weghorst' },
      { equipo: 'Países Bajos', minuto: 101, jugador: 'Weghorst' },
    ]
  },
{
    id: 'wc2022_fra_mor_semi',
    local: 'Francia', visitante: 'Marruecos',
    resultado: '2-0', torneo: 'Semifinal Mundial 2022', fecha: '14 Dic 2022',
    tipo: 'seleccion',
    goles: [
      { equipo: 'Francia', minuto: 5, jugador: 'Théo Hernández' },
      { equipo: 'Francia', minuto: 79, jugador: 'Kolo Muani' },
    ]
  },
{ id:'euro2004_gre_por_final', local:'Grecia', visitante:'Portugal', resultado:'1-0', torneo:'Final Euro 2004', fecha:'4 Jul 2004', tipo:'seleccion', goles:[{equipo:'Grecia',minuto:57,jugador:'Charisteas'}] },
{ id:'euro2000_fra_ita_final', local:'Francia', visitante:'Italia', resultado:'2-1', torneo:'Final Euro 2000', fecha:'2 Jul 2000', tipo:'seleccion', goles:[{equipo:'Italia',minuto:55,jugador:'Delvecchio'},{equipo:'Francia',minuto:90,jugador:'Wiltord'},{equipo:'Francia',minuto:103,jugador:'Trezeguet'}] },
{ id:'euro1996_ger_cze_final', local:'Alemania', visitante:'Rep. Checa', resultado:'2-1', torneo:'Final Euro 1996', fecha:'30 Jun 1996', tipo:'seleccion', goles:[{equipo:'Rep. Checa',minuto:59,jugador:'Berger'},{equipo:'Alemania',minuto:73,jugador:'Bierhoff'},{equipo:'Alemania',minuto:95,jugador:'Bierhoff'}] },
{ id:'euro1992_den_ger_final', local:'Dinamarca', visitante:'Alemania', resultado:'2-0', torneo:'Final Euro 1992', fecha:'26 Jun 1992', tipo:'seleccion', goles:[{equipo:'Dinamarca',minuto:18,jugador:'Jensen'},{equipo:'Dinamarca',minuto:78,jugador:'Vilfort'}] },
{ id:'euro2012_esp_ita_semi', local:'España', visitante:'Italia', resultado:'2-0', torneo:'Semifinal Euro 2012', fecha:'27 Jun 2012', tipo:'seleccion', goles:[{equipo:'España',minuto:8,jugador:'Xabi Alonso'},{equipo:'España',minuto:88,jugador:'Xabi Alonso'}] },
{ id:'euro2016_esp_ita_r16', local:'España', visitante:'Italia', resultado:'2-0', torneo:'Octavos Euro 2016', fecha:'27 Jun 2016', tipo:'seleccion', goles:[{equipo:'España',minuto:33,jugador:'Piqué'},{equipo:'España',minuto:91,jugador:'Morata'}] },
{ id:'euro2020_bel_ita_qf', local:'Bélgica', visitante:'Italia', resultado:'1-2', torneo:'Cuartos Euro 2020', fecha:'2 Jul 2021', tipo:'seleccion', goles:[{equipo:'Bélgica',minuto:44,jugador:'Lukaku'},{equipo:'Italia',minuto:31,jugador:'Barella'},{equipo:'Italia',minuto:44,jugador:'Insigne'}] },
{ id:'euro2020_esp_sui_qf', local:'España', visitante:'Suiza', resultado:'1-1 (p)', torneo:'Cuartos Euro 2020', fecha:'2 Jul 2021', tipo:'seleccion', goles:[{equipo:'España',minuto:8,jugador:'Denis Zakaria'},{equipo:'Suiza',minuto:68,jugador:'Shaqiri'}] },
{ id:'euro2024_esp_fra_semi', local:'España', visitante:'Francia', resultado:'2-1', torneo:'Semifinal Euro 2024', fecha:'9 Jul 2024', tipo:'seleccion', goles:[{equipo:'España',minuto:9,jugador:'Yamal'},{equipo:'España',minuto:25,jugador:'Olmo'},{equipo:'Francia',minuto:36,jugador:'Kolo Muani'}] },
{ id:'euro2024_ger_esp_qf', local:'Alemania', visitante:'España', resultado:'1-2', torneo:'Cuartos Euro 2024', fecha:'5 Jul 2024', tipo:'seleccion', goles:[{equipo:'Alemania',minuto:51,jugador:'Florian Wirtz'},{equipo:'España',minuto:89,jugador:'Olmo'},{equipo:'España',minuto:119,jugador:'Merino'}] },
{ id:'euro2016_por_wal_semi', local:'Portugal', visitante:'Gales', resultado:'2-0', torneo:'Semifinal Euro 2016', fecha:'6 Jul 2016', tipo:'seleccion', goles:[{equipo:'Portugal',minuto:50,jugador:'Ronaldo'},{equipo:'Portugal',minuto:53,jugador:'Nani'}] },
{ id:'euro2008_tur_cze_grupos', local:'Turquía', visitante:'Rep. Checa', resultado:'3-2', torneo:'Fase Grupos Euro 2008', fecha:'15 Jun 2008', tipo:'seleccion', goles:[{equipo:'Rep. Checa',minuto:34,jugador:'Sionko'},{equipo:'Turquía',minuto:75,jugador:'Arda Turan'},{equipo:'Rep. Checa',minuto:87,jugador:'Sionko'},{equipo:'Turquía',minuto:89,jugador:'Nihat'},{equipo:'Turquía',minuto:94,jugador:'Nihat'}] },
{ id:'copa2021_arg_bra_final', local:'Argentina', visitante:'Brasil', resultado:'1-0', torneo:'Final Copa América 2021', fecha:'10 Jul 2021', tipo:'seleccion', goles:[{equipo:'Argentina',minuto:22,jugador:'Di María'}] },
{ id:'copa2019_bra_arg_semi', local:'Brasil', visitante:'Argentina', resultado:'2-0', torneo:'Semifinal Copa América 2019', fecha:'2 Jul 2019', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:19,jugador:'Dani Alves'},{equipo:'Brasil',minuto:71,jugador:'Gabriel Jesus'}] },
{ id:'copa2015_chi_arg_final', local:'Chile', visitante:'Argentina', resultado:'0-0 (p)', torneo:'Final Copa América 2015', fecha:'4 Jul 2015', tipo:'seleccion', goles:[] },
{ id:'copa2024_arg_col_final', local:'Argentina', visitante:'Colombia', resultado:'1-0', torneo:'Final Copa América 2024', fecha:'14 Jul 2024', tipo:'seleccion', goles:[{equipo:'Argentina',minuto:112,jugador:'Lautaro Martínez'}] },
{ id:'ucl1995_ajax_mil_final', local:'Ajax', visitante:'AC Milan', resultado:'1-0', torneo:'Final Champions 1995', fecha:'24 May 1995', tipo:'club', goles:[{equipo:'Ajax',minuto:85,jugador:'Kluivert'}] },
{ id:'ucl1994_mil_bar_final', local:'AC Milan', visitante:'Barcelona', resultado:'4-0', torneo:'Final Champions 1994', fecha:'18 May 1994', tipo:'club', goles:[{equipo:'AC Milan',minuto:22,jugador:'Savicevic'},{equipo:'AC Milan',minuto:45,jugador:'Desailly'},{equipo:'AC Milan',minuto:47,jugador:'Savicevic'},{equipo:'AC Milan',minuto:58,jugador:'Massaro'},{equipo:'AC Milan',minuto:67,jugador:'Massaro'}] },
{ id:'ucl1997_dor_juve_final', local:'Borussia Dortmund', visitante:'Juventus', resultado:'3-1', torneo:'Final Champions 1997', fecha:'28 May 1997', tipo:'club', goles:[{equipo:'Borussia Dortmund',minuto:29,jugador:'Riedle'},{equipo:'Borussia Dortmund',minuto:34,jugador:'Riedle'},{equipo:'Juventus',minuto:65,jugador:'Del Piero'},{equipo:'Borussia Dortmund',minuto:71,jugador:'Ricken'}] },
{ id:'ucl1998_rm_juve_final', local:'Real Madrid', visitante:'Juventus', resultado:'1-0', torneo:'Final Champions 1998', fecha:'20 May 1998', tipo:'club', goles:[{equipo:'Real Madrid',minuto:66,jugador:'Mijatović'}] },
{ id:'ucl2000_rm_val_final', local:'Real Madrid', visitante:'Valencia', resultado:'3-0', torneo:'Final Champions 2000', fecha:'24 May 2000', tipo:'club', goles:[{equipo:'Real Madrid',minuto:39,jugador:'Morientes'},{equipo:'Real Madrid',minuto:67,jugador:'McManaman'},{equipo:'Real Madrid',minuto:75,jugador:'Raúl'}] },
{ id:'ucl2002_rm_bay_final', local:'Real Madrid', visitante:'Bayer Leverkusen', resultado:'2-1', torneo:'Final Champions 2002', fecha:'15 May 2002', tipo:'club', goles:[{equipo:'Bayer Leverkusen',minuto:6,jugador:'Lucio'},{equipo:'Real Madrid',minuto:8,jugador:'Raúl'},{equipo:'Real Madrid',minuto:45,jugador:'Zidane'}] },
{ id:'ucl2003_juve_mil_final', local:'Juventus', visitante:'AC Milan', resultado:'0-0 (p)', torneo:'Final Champions 2003', fecha:'28 May 2003', tipo:'club', goles:[] },
{ id:'ucl2004_por_mon_final', local:'Porto', visitante:'Monaco', resultado:'3-0', torneo:'Final Champions 2004', fecha:'26 May 2004', tipo:'club', goles:[{equipo:'Porto',minuto:39,jugador:'Carlos Alberto'},{equipo:'Porto',minuto:71,jugador:'Derlei'},{equipo:'Porto',minuto:75,jugador:'Alenichev'}] },
{ id:'ucl2006_bar_arm_final', local:'Barcelona', visitante:'Arsenal', resultado:'2-1', torneo:'Final Champions 2006', fecha:'17 May 2006', tipo:'club', goles:[{equipo:'Arsenal',minuto:37,jugador:'Campbell'},{equipo:'Barcelona',minuto:76,jugador:'Eto\'o'},{equipo:'Barcelona',minuto:81,jugador:'Belletti'}] },
{ id:'ucl2007_mil_liv_final', local:'AC Milan', visitante:'Liverpool', resultado:'2-1', torneo:'Final Champions 2007', fecha:'23 May 2007', tipo:'club', goles:[{equipo:'AC Milan',minuto:45,jugador:'Inzaghi'},{equipo:'AC Milan',minuto:82,jugador:'Inzaghi'},{equipo:'Liverpool',minuto:89,jugador:'Dirk Kuyt'}] },
{ id:'ucl2008_mu_chel_final', local:'Manchester United', visitante:'Chelsea', resultado:'1-1 (p)', torneo:'Final Champions 2008', fecha:'21 May 2008', tipo:'club', goles:[{equipo:'Manchester United',minuto:26,jugador:'Ronaldo'},{equipo:'Chelsea',minuto:45,jugador:'Lampard'}] },
{ id:'ucl2010_int_bay_final', local:'Inter de Milán', visitante:'Bayern Munich', resultado:'2-0', torneo:'Final Champions 2010', fecha:'22 May 2010', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:35,jugador:'Milito'},{equipo:'Inter de Milán',minuto:70,jugador:'Milito'}] },
{ id:'ucl2012_chel_bay_final', local:'Chelsea', visitante:'Bayern Munich', resultado:'1-1 (p)', torneo:'Final Champions 2012', fecha:'19 May 2012', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:83,jugador:'Müller'},{equipo:'Chelsea',minuto:88,jugador:'Drogba'}] },
{ id:'ucl2015_bar_juve_final', local:'Barcelona', visitante:'Juventus', resultado:'3-1', torneo:'Final Champions 2015', fecha:'6 Jun 2015', tipo:'club', goles:[{equipo:'Juventus',minuto:55,jugador:'Morata'},{equipo:'Barcelona',minuto:57,jugador:'Rakitić'},{equipo:'Barcelona',minuto:68,jugador:'Suárez'},{equipo:'Barcelona',minuto:97,jugador:'Neymar'}] },
{ id:'ucl2020_bay_psg_final', local:'Bayern Munich', visitante:'PSG', resultado:'1-0', torneo:'Final Champions 2020', fecha:'23 Ago 2020', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:59,jugador:'Coman'}] },
{ id:'ucl2021_chel_man_final', local:'Chelsea', visitante:'Manchester City', resultado:'1-0', torneo:'Final Champions 2021', fecha:'29 May 2021', tipo:'club', goles:[{equipo:'Chelsea',minuto:42,jugador:'Havertz'}] },
{ id:'ucl2003_rm_man_semi', local:'Real Madrid', visitante:'Manchester United', resultado:'3-1', torneo:'Cuartos Champions 2003 (vuelta)', fecha:'23 Abr 2003', tipo:'club', goles:[{equipo:'Real Madrid',minuto:12,jugador:'Figo'},{equipo:'Manchester United',minuto:43,jugador:'Van Nistelrooy'},{equipo:'Real Madrid',minuto:50,jugador:'Zidane'},{equipo:'Real Madrid',minuto:53,jugador:'Ronaldo'}] },
{ id:'ucl2009_bar_bay_semi', local:'Barcelona', visitante:'Bayern Munich', resultado:'4-0', torneo:'Semifinal Champions 2009 (vuelta)', fecha:'5 May 2009', tipo:'club', goles:[{equipo:'Barcelona',minuto:3,jugador:'Messi'},{equipo:'Barcelona',minuto:18,jugador:'Messi'},{equipo:'Barcelona',minuto:66,jugador:'Müller'},{equipo:'Barcelona',minuto:74,jugador:'Piqué'}] },
{ id:'ucl2010_bar_int_semi', local:'Barcelona', visitante:'Inter de Milán', resultado:'1-3', torneo:'Semifinal Champions 2010 (vuelta)', fecha:'28 Abr 2010', tipo:'club', goles:[{equipo:'Barcelona',minuto:84,jugador:'Piqué'},{equipo:'Inter de Milán',minuto:61,jugador:'Milito'},{equipo:'Inter de Milán',minuto:65,jugador:'Milito'},{equipo:'Inter de Milán',minuto:88,jugador:'Sneijder'}] },
{ id:'ucl2014_rm_bay_semi', local:'Real Madrid', visitante:'Bayern Munich', resultado:'4-0', torneo:'Semifinal Champions 2014 (vuelta)', fecha:'29 Abr 2014', tipo:'club', goles:[{equipo:'Real Madrid',minuto:16,jugador:'Ramos'},{equipo:'Real Madrid',minuto:20,jugador:'Ramos'},{equipo:'Real Madrid',minuto:34,jugador:'Cristiano Ronaldo'},{equipo:'Real Madrid',minuto:90,jugador:'Cristiano Ronaldo'}] },
{ id:'liga_bar_rm_5_0_2010', local:'Barcelona', visitante:'Real Madrid', resultado:'5-0', torneo:'LaLiga 2010-11', fecha:'29 Nov 2010', tipo:'club', goles:[{equipo:'Barcelona',minuto:10,jugador:'Xavi'},{equipo:'Barcelona',minuto:18,jugador:'Pedro'},{equipo:'Barcelona',minuto:55,jugador:'Villa'},{equipo:'Barcelona',minuto:57,jugador:'Villa'},{equipo:'Barcelona',minuto:90,jugador:'Jeffrén'}] },
{ id:'liga_rm_bar_3_4_2014', local:'Real Madrid', visitante:'Barcelona', resultado:'3-4', torneo:'LaLiga 2013-14', fecha:'23 Mar 2014', tipo:'club', goles:[{equipo:'Real Madrid',minuto:4,jugador:'Benzema'},{equipo:'Real Madrid',minuto:7,jugador:'Pepe'},{equipo:'Barcelona',minuto:11,jugador:'Neymar'},{equipo:'Barcelona',minuto:34,jugador:'Marc Bartra'},{equipo:'Real Madrid',minuto:50,jugador:'Ronaldo'},{equipo:'Barcelona',minuto:68,jugador:'Messi'},{equipo:'Barcelona',minuto:72,jugador:'Messi'}] },
{ id:'liga_bar_rm_6_2_2009', local:'Barcelona', visitante:'Real Madrid', resultado:'6-2', torneo:'LaLiga 2008-09', fecha:'2 May 2009', tipo:'club', goles:[{equipo:'Barcelona',minuto:15,jugador:'Henry'},{equipo:'Real Madrid',minuto:20,jugador:'Higuaín'},{equipo:'Barcelona',minuto:24,jugador:'Puyol'},{equipo:'Barcelona',minuto:57,jugador:'Messi'},{equipo:'Real Madrid',minuto:60,jugador:'Ramos'},{equipo:'Barcelona',minuto:61,jugador:'Xavi'},{equipo:'Barcelona',minuto:72,jugador:'Messi'},{equipo:'Barcelona',minuto:83,jugador:'Piqué'}] },
{ id:'liga_atl_bar_2015', local:'Atlético de Madrid', visitante:'Barcelona', resultado:'2-3', torneo:'LaLiga 2014-15', fecha:'17 May 2015', tipo:'club', goles:[{equipo:'Atlético de Madrid',minuto:2,jugador:'Torres'},{equipo:'Barcelona',minuto:13,jugador:'Messi'},{equipo:'Atlético de Madrid',minuto:19,jugador:'Godín'},{equipo:'Barcelona',minuto:56,jugador:'Messi'},{equipo:'Barcelona',minuto:90,jugador:'Neymar'}] },
{ id:'liga_sev_bar_3_3_2021', local:'Sevilla', visitante:'Barcelona', resultado:'3-0', torneo:'LaLiga 2020-21', fecha:'27 Feb 2021', tipo:'club', goles:[{equipo:'Sevilla',minuto:12,jugador:'En-Nesyri'},{equipo:'Sevilla',minuto:53,jugador:'de Jong'},{equipo:'Sevilla',minuto:78,jugador:'En-Nesyri'}] },
{ id:'liga_rm_bar_2016_super', local:'Real Madrid', visitante:'Barcelona', resultado:'0-4', torneo:'LaLiga 2015-16', fecha:'21 Nov 2015', tipo:'club', goles:[{equipo:'Barcelona',minuto:11,jugador:'Neymar'},{equipo:'Barcelona',minuto:29,jugador:'Suárez'},{equipo:'Barcelona',minuto:56,jugador:'Suárez'},{equipo:'Barcelona',minuto:74,jugador:'Messi'}] },
{ id:'liga_rm_bar_2023', local:'Real Madrid', visitante:'Barcelona', resultado:'2-1', torneo:'LaLiga 2022-23', fecha:'16 Oct 2022', tipo:'club', goles:[{equipo:'Barcelona',minuto:12,jugador:'Ferran Torres'},{equipo:'Real Madrid',minuto:35,jugador:'Benzema'},{equipo:'Real Madrid',minuto:51,jugador:'Militão'}] },
{ id:'pl_mu_liv_5_3_2004', local:'Manchester United', visitante:'Liverpool', resultado:'5-1', torneo:'Premier League 2003-04', fecha:'22 Sep 2003', tipo:'club', goles:[{equipo:'Manchester United',minuto:18,jugador:'Van Nistelrooy'},{equipo:'Manchester United',minuto:45,jugador:'Keane'},{equipo:'Liverpool',minuto:47,jugador:'Kewell'},{equipo:'Manchester United',minuto:52,jugador:'Van Nistelrooy'},{equipo:'Manchester United',minuto:55,jugador:'Van Nistelrooy'},{equipo:'Manchester United',minuto:60,jugador:'Scholes'}] },
{ id:'pl_city_wba_2010', local:'Manchester City', visitante:'West Bromwich', resultado:'5-0', torneo:'Premier League 2009-10', fecha:'19 Dec 2009', tipo:'club', goles:[{equipo:'Manchester City',minuto:15,jugador:'Tevez'},{equipo:'Manchester City',minuto:38,jugador:'Tevez'},{equipo:'Manchester City',minuto:53,jugador:'Bellamy'},{equipo:'Manchester City',minuto:65,jugador:'Tevez'},{equipo:'Manchester City',minuto:82,jugador:'Vieira'}] },
{ id:'pl_liv_ars_5_1_2014', local:'Liverpool', visitante:'Arsenal', resultado:'5-1', torneo:'Premier League 2013-14', fecha:'9 Feb 2014', tipo:'club', goles:[{equipo:'Liverpool',minuto:3,jugador:'Sturridge'},{equipo:'Arsenal',minuto:9,jugador:'Cazorla'},{equipo:'Liverpool',minuto:16,jugador:'Skrtel'},{equipo:'Liverpool',minuto:19,jugador:'Skrtel'},{equipo:'Liverpool',minuto:52,jugador:'Sterling'},{equipo:'Liverpool',minuto:55,jugador:'Sturridge'}] },
{ id:'pl_man_tot_6_1_2019', local:'Manchester City', visitante:'Tottenham', resultado:'4-3', torneo:'Cuartos Champions 2019 (vuelta)', fecha:'17 Abr 2019', tipo:'club', goles:[{equipo:'Manchester City',minuto:4,jugador:'Sterling'},{equipo:'Tottenham',minuto:9,jugador:'Son'},{equipo:'Manchester City',minuto:11,jugador:'Bernardo'},{equipo:'Manchester City',minuto:21,jugador:'Agüero'},{equipo:'Tottenham',minuto:24,jugador:'Llorente'},{equipo:'Manchester City',minuto:59,jugador:'Sterling'},{equipo:'Tottenham',minuto:73,jugador:'Llorente'}] },
{ id:'pl_liv_barca_4_0', local:'Liverpool', visitante:'Barcelona', resultado:'4-0', torneo:'Semifinal Champions 2019 (vuelta)', fecha:'7 May 2019', tipo:'club', goles:[{equipo:'Liverpool',minuto:7,jugador:'Origi'},{equipo:'Liverpool',minuto:54,jugador:'Wijnaldum'},{equipo:'Liverpool',minuto:56,jugador:'Wijnaldum'},{equipo:'Liverpool',minuto:79,jugador:'Origi'}] },
{ id:'pl_che_bay_4_2_champ', local:'Chelsea', visitante:'Bayern Munich', resultado:'1-0', torneo:'Final Champions 2012 (penaltis)', fecha:'19 May 2012', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:83,jugador:'Müller'},{equipo:'Chelsea',minuto:88,jugador:'Drogba'}] },
{ id:'pl_ars_che_2004', local:'Arsenal', visitante:'Chelsea', resultado:'2-1', torneo:'Premier League 2003-04', fecha:'12 Oct 2003', tipo:'club', goles:[{equipo:'Arsenal',minuto:25,jugador:'Pires'},{equipo:'Chelsea',minuto:73,jugador:'Crespo'},{equipo:'Arsenal',minuto:75,jugador:'Edu'}] },
{ id:'bund_bay_dor_5_2_2012', local:'Bayern Munich', visitante:'Borussia Dortmund', resultado:'5-2', torneo:'Bundesliga 2012-13', fecha:'9 Mar 2013', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:15,jugador:'Müller'},{equipo:'Bayern Munich',minuto:24,jugador:'Müller'},{equipo:'Borussia Dortmund',minuto:35,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:45,jugador:'Robben'},{equipo:'Borussia Dortmund',minuto:50,jugador:'Reus'},{equipo:'Bayern Munich',minuto:54,jugador:'Müller'},{equipo:'Bayern Munich',minuto:73,jugador:'Robben'}] },
{ id:'bund_bay_ham_9_2_2015', local:'Bayern Munich', visitante:'Hamburgo', resultado:'9-2', torneo:'Bundesliga 2014-15', fecha:'25 Oct 2014', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:7,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:19,jugador:'Alaba'},{equipo:'Hamburgo',minuto:21,jugador:'Heung-min Son'},{equipo:'Bayern Munich',minuto:33,jugador:'Müller'},{equipo:'Bayern Munich',minuto:35,jugador:'Ribéry'},{equipo:'Bayern Munich',minuto:42,jugador:'Müller'},{equipo:'Bayern Munich',minuto:54,jugador:'Götze'},{equipo:'Hamburgo',minuto:74,jugador:'Heung-min Son'},{equipo:'Bayern Munich',minuto:82,jugador:'Robben'},{equipo:'Bayern Munich',minuto:90,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:91,jugador:'Müller'}] },
{ id:'sa_juve_inter_9_1', local:'Juventus', visitante:'Inter de Milán', resultado:'9-1', torneo:'Serie A 1961-62', fecha:'9 Jun 1961', tipo:'club', goles:[{equipo:'Juventus',minuto:10,jugador:'Charles'},{equipo:'Juventus',minuto:20,jugador:'Sivori'},{equipo:'Juventus',minuto:25,jugador:'Charles'},{equipo:'Juventus',minuto:40,jugador:'Sivori'},{equipo:'Inter de Milán',minuto:44,jugador:'Mazzola'},{equipo:'Juventus',minuto:51,jugador:'Charles'},{equipo:'Juventus',minuto:60,jugador:'Sivori'},{equipo:'Juventus',minuto:70,jugador:'Charles'},{equipo:'Juventus',minuto:80,jugador:'Sivori'},{equipo:'Juventus',minuto:89,jugador:'Sivori'}] },
{ id:'sa_mil_int_derby2004', local:'AC Milan', visitante:'Inter de Milán', resultado:'3-2', torneo:'Serie A 2003-04', fecha:'14 Mar 2004', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:5,jugador:'Martins'},{equipo:'AC Milan',minuto:30,jugador:'Shevchenko'},{equipo:'AC Milan',minuto:55,jugador:'Inzaghi'},{equipo:'Inter de Milán',minuto:75,jugador:'Vieri'},{equipo:'AC Milan',minuto:88,jugador:'Inzaghi'}] },
{ id:'sa_rom_laz_derby2021', local:'Roma', visitante:'Lazio', resultado:'2-0', torneo:'Serie A 2020-21', fecha:'15 Jan 2021', tipo:'club', goles:[{equipo:'Roma',minuto:15,jugador:'Veretout'},{equipo:'Roma',minuto:70,jugador:'Dzeko'}] },
{ id:'sa_nap_juve_2023', local:'Nápoles', visitante:'Juventus', resultado:'5-1', torneo:'Serie A 2022-23', fecha:'13 Jan 2023', tipo:'club', goles:[{equipo:'Nápoles',minuto:15,jugador:'Osimhen'},{equipo:'Nápoles',minuto:24,jugador:'Di Lorenzo'},{equipo:'Juventus',minuto:26,jugador:'Milik'},{equipo:'Nápoles',minuto:47,jugador:'Elmas'},{equipo:'Nápoles',minuto:62,jugador:'Osimhen'},{equipo:'Nápoles',minuto:76,jugador:'Kvaratskhelia'}] },
{ id:'ucl2019_aj_rm_semi', local:'Ajax', visitante:'Real Madrid', resultado:'4-1', torneo:'Octavos Champions 2019 (vuelta)', fecha:'5 Mar 2019', tipo:'club', goles:[{equipo:'Ajax',minuto:7,jugador:'Ziyech'},{equipo:'Ajax',minuto:18,jugador:'Dusan Tadic'},{equipo:'Real Madrid',minuto:60,jugador:'Marco Asensio'},{equipo:'Ajax',minuto:62,jugador:'David Neres'},{equipo:'Ajax',minuto:72,jugador:'Lasse Schöne'}] },
{ id:'ucl2019_aj_juve_octavos', local:'Ajax', visitante:'Juventus', resultado:'2-1', torneo:'Octavos Champions 2019 (vuelta)', fecha:'26 Mar 2019', tipo:'club', goles:[{equipo:'Juventus',minuto:28,jugador:'Cristiano Ronaldo'},{equipo:'Ajax',minuto:34,jugador:'De Ligt'},{equipo:'Ajax',minuto:67,jugador:'De Ligt'}] },
{ id:'ucl2016_rm_wol_semi', local:'Real Madrid', visitante:'Wolfsburgo', resultado:'3-0', torneo:'Cuartos Champions 2016 (vuelta)', fecha:'12 Abr 2016', tipo:'club', goles:[{equipo:'Real Madrid',minuto:17,jugador:'Ronaldo'},{equipo:'Real Madrid',minuto:38,jugador:'Ronaldo'},{equipo:'Real Madrid',minuto:77,jugador:'Ronaldo'}] },
{ id:'ucl2018_rm_psg_r16', local:'Real Madrid', visitante:'PSG', resultado:'3-1', torneo:'Octavos Champions 2018 (ida)', fecha:'14 Feb 2018', tipo:'club', goles:[{equipo:'PSG',minuto:33,jugador:'Rabiot'},{equipo:'Real Madrid',minuto:45,jugador:'Ronaldo'},{equipo:'Real Madrid',minuto:51,jugador:'Ronaldo'},{equipo:'Real Madrid',minuto:83,jugador:'Ronaldo'}] },
{ id:'ucl2015_rm_man_r16', local:'Real Madrid', visitante:'Manchester City', resultado:'0-0', torneo:'Octavos Champions 2015 (ida)', fecha:'17 Feb 2015', tipo:'club', goles:[] },
{ id:'ucl2023_rm_chel_qf', local:'Real Madrid', visitante:'Chelsea', resultado:'2-0', torneo:'Cuartos Champions 2023 (ida)', fecha:'12 Abr 2023', tipo:'club', goles:[{equipo:'Real Madrid',minuto:21,jugador:'Benzema'},{equipo:'Real Madrid',minuto:74,jugador:'Marco Asensio'}] },
{ id:'ucl2022_rm_psg_r16', local:'Real Madrid', visitante:'PSG', resultado:'3-1', torneo:'Octavos Champions 2022 (vuelta)', fecha:'9 Mar 2022', tipo:'club', goles:[{equipo:'PSG',minuto:39,jugador:'Mbappé'},{equipo:'Real Madrid',minuto:61,jugador:'Benzema'},{equipo:'Real Madrid',minuto:76,jugador:'Benzema'},{equipo:'Real Madrid',minuto:78,jugador:'Benzema'}] },
{ id:'ucl2021_rm_liv_qf', local:'Real Madrid', visitante:'Liverpool', resultado:'3-1', torneo:'Cuartos Champions 2021 (ida)', fecha:'6 Abr 2021', tipo:'club', goles:[{equipo:'Real Madrid',minuto:27,jugador:'Vinicius'},{equipo:'Liverpool',minuto:36,jugador:'Salah'},{equipo:'Real Madrid',minuto:55,jugador:'Asensio'},{equipo:'Real Madrid',minuto:65,jugador:'Vinicius'}] },
{ id:'ucl2020_bar_nap_r16', local:'Barcelona', visitante:'Nápoles', resultado:'3-1', torneo:'Octavos Champions 2020 (vuelta)', fecha:'8 Ago 2020', tipo:'club', goles:[{equipo:'Barcelona',minuto:10,jugador:'Griezmann'},{equipo:'Nápoles',minuto:45,jugador:'Mertens'},{equipo:'Barcelona',minuto:57,jugador:'Suárez'},{equipo:'Barcelona',minuto:85,jugador:'Messi'}] },
{ id:'ucl2017_bar_psg_r16_ida', local:'Barcelona', visitante:'PSG', resultado:'0-4', torneo:'Octavos Champions 2017 (ida)', fecha:'14 Feb 2017', tipo:'club', goles:[{equipo:'PSG',minuto:18,jugador:'Di María'},{equipo:'PSG',minuto:40,jugador:'Di María'},{equipo:'PSG',minuto:55,jugador:'Draxler'},{equipo:'PSG',minuto:62,jugador:'Cavani'}] },
{ id:'uel2016_atl_liv_semi', local:'Atlético de Madrid', visitante:'Liverpool', resultado:'1-0', torneo:'Semifinal Europa League 2016', fecha:'5 May 2016', tipo:'club', goles:[{equipo:'Atlético de Madrid',minuto:95,jugador:'Torres'}] },
{ id:'uel2012_atl_ath_final', local:'Atlético de Madrid', visitante:'Athletic Club', resultado:'3-0', torneo:'Final Europa League 2012', fecha:'9 May 2012', tipo:'club', goles:[{equipo:'Atlético de Madrid',minuto:26,jugador:'Falcao'},{equipo:'Atlético de Madrid',minuto:52,jugador:'Diego'},{equipo:'Atlético de Madrid',minuto:82,jugador:'Falcao'}] },
{ id:'uel2017_man_aj_final', local:'Manchester United', visitante:'Ajax', resultado:'2-0', torneo:'Final Europa League 2017', fecha:'24 May 2017', tipo:'club', goles:[{equipo:'Manchester United',minuto:18,jugador:'Mkhitaryan'},{equipo:'Manchester United',minuto:48,jugador:'Pogba'}] },
{ id:'uel2019_chel_ars_final', local:'Chelsea', visitante:'Arsenal', resultado:'4-1', torneo:'Final Europa League 2019', fecha:'29 May 2019', tipo:'club', goles:[{equipo:'Chelsea',minuto:49,jugador:'Giroud'},{equipo:'Arsenal',minuto:69,jugador:'Iwobi'},{equipo:'Chelsea',minuto:60,jugador:'Pedro'},{equipo:'Chelsea',minuto:72,jugador:'Hazard'},{equipo:'Chelsea',minuto:89,jugador:'Hazard'}] },
{ id:'uel2016_sev_liv_final', local:'Sevilla', visitante:'Liverpool', resultado:'3-1', torneo:'Final Europa League 2016', fecha:'18 May 2016', tipo:'club', goles:[{equipo:'Liverpool',minuto:35,jugador:'Sturridge'},{equipo:'Sevilla',minuto:64,jugador:'Kevin Gameiro'},{equipo:'Sevilla',minuto:70,jugador:'Coke'},{equipo:'Sevilla',minuto:73,jugador:'Coke'}] },
{ id:'uel2015_sev_dnipro_final', local:'Sevilla', visitante:'Dnipro', resultado:'3-2', torneo:'Final Europa League 2015', fecha:'27 May 2015', tipo:'club', goles:[{equipo:'Dnipro',minuto:7,jugador:'Kalinic'},{equipo:'Sevilla',minuto:27,jugador:'Bacca'},{equipo:'Sevilla',minuto:44,jugador:'Bacca'},{equipo:'Dnipro',minuto:56,jugador:'Rotan'},{equipo:'Sevilla',minuto:73,jugador:'Kondogbia'}] },
{ id:'copa_bar_rm_2021', local:'Barcelona', visitante:'Real Madrid', resultado:'3-2', torneo:'Semifinal Copa del Rey 2021', fecha:'3 Mar 2021', tipo:'club', goles:[{equipo:'Real Madrid',minuto:1,jugador:'Benzema'},{equipo:'Barcelona',minuto:24,jugador:'Mingueza'},{equipo:'Barcelona',minuto:58,jugador:'De Jong'},{equipo:'Real Madrid',minuto:60,jugador:'Lucas Vázquez'},{equipo:'Barcelona',minuto:63,jugador:'Dembélé'}] },
{ id:'copa_bar_sev_final2021', local:'Barcelona', visitante:'Sevilla', resultado:'4-0', torneo:'Final Copa del Rey 2021', fecha:'17 Abr 2021', tipo:'club', goles:[{equipo:'Barcelona',minuto:2,jugador:'Dembélé'},{equipo:'Barcelona',minuto:48,jugador:'Braithwaite'},{equipo:'Barcelona',minuto:55,jugador:'Messi'},{equipo:'Barcelona',minuto:91,jugador:'Braithwaite'}] },
{ id:'ucl2004_real_monaco_semi', local:'Real Madrid', visitante:'Monaco', resultado:'3-4', torneo:'Semifinal Champions 2004', fecha:'20 Abr 2004', tipo:'club', goles:[{equipo:'Real Madrid',minuto:36,jugador:'Raúl'},{equipo:'Monaco',minuto:38,jugador:'Hugo Ibarra'},{equipo:'Monaco',minuto:51,jugador:'Morientes'},{equipo:'Real Madrid',minuto:66,jugador:'Zidane'},{equipo:'Monaco',minuto:83,jugador:'Morientes'},{equipo:'Real Madrid',minuto:89,jugador:'Ronaldo'},{equipo:'Monaco',minuto:90,jugador:'Prso'}] },
{ id:'ucl2009_rm_liv_r16', local:'Real Madrid', visitante:'Liverpool', resultado:'0-1', torneo:'Octavos Champions 2009 (ida)', fecha:'25 Feb 2009', tipo:'club', goles:[{equipo:'Liverpool',minuto:16,jugador:'Torres'}] },
{ id:'liga_rm_bar_2011_super', local:'Real Madrid', visitante:'Barcelona', resultado:'2-2', torneo:'Supercopa España 2011', fecha:'17 Ago 2011', tipo:'club', goles:[{equipo:'Real Madrid',minuto:17,jugador:'Cristiano Ronaldo'},{equipo:'Barcelona',minuto:43,jugador:'Messi'},{equipo:'Real Madrid',minuto:68,jugador:'Benzema'},{equipo:'Barcelona',minuto:84,jugador:'Xavi'}] },
{ id:'liga_val_rm_2019', local:'Valencia', visitante:'Real Madrid', resultado:'2-1', torneo:'LaLiga 2018-19', fecha:'3 Feb 2019', tipo:'club', goles:[{equipo:'Real Madrid',minuto:23,jugador:'Benzema'},{equipo:'Valencia',minuto:34,jugador:'Rodrigo'},{equipo:'Valencia',minuto:73,jugador:'Garay'}] },
{ id:'liga_bar_val_5_2_2018', local:'Barcelona', visitante:'Valencia', resultado:'5-1', torneo:'LaLiga 2018-19', fecha:'7 Feb 2019', tipo:'club', goles:[{equipo:'Barcelona',minuto:7,jugador:'Coutinho'},{equipo:'Barcelona',minuto:24,jugador:'Messi'},{equipo:'Barcelona',minuto:31,jugador:'Suárez'},{equipo:'Valencia',minuto:40,jugador:'Rodrigo'},{equipo:'Barcelona',minuto:52,jugador:'Suárez'},{equipo:'Barcelona',minuto:69,jugador:'Coutinho'}] },
{ id:'liga_rm_sevilla_4_0', local:'Real Madrid', visitante:'Sevilla', resultado:'4-0', torneo:'LaLiga 2021-22', fecha:'28 Nov 2021', tipo:'club', goles:[{equipo:'Real Madrid',minuto:17,jugador:'Benzema'},{equipo:'Real Madrid',minuto:30,jugador:'Benzema'},{equipo:'Real Madrid',minuto:44,jugador:'Asensio'},{equipo:'Real Madrid',minuto:62,jugador:'Vinicius'}] },
{ id:'liga_bar_real_2005', local:'Barcelona', visitante:'Real Madrid', resultado:'3-0', torneo:'LaLiga 2004-05', fecha:'20 Nov 2004', tipo:'club', goles:[{equipo:'Barcelona',minuto:14,jugador:'Eto\'o'},{equipo:'Barcelona',minuto:39,jugador:'Ronaldinho'},{equipo:'Barcelona',minuto:71,jugador:'Ronaldinho'}] },
{ id:'liga_atl_rm_2013', local:'Atlético de Madrid', visitante:'Real Madrid', resultado:'1-2', torneo:'LaLiga 2012-13', fecha:'7 Apr 2013', tipo:'club', goles:[{equipo:'Real Madrid',minuto:3,jugador:'Ronaldo'},{equipo:'Atlético de Madrid',minuto:56,jugador:'Arda Turan'},{equipo:'Real Madrid',minuto:86,jugador:'Ramos'}] },
{ id:'pl_liv_man_4_3_2009', local:'Liverpool', visitante:'Manchester United', resultado:'4-1', torneo:'Premier League 2008-09', fecha:'14 Mar 2009', tipo:'club', goles:[{equipo:'Liverpool',minuto:28,jugador:'Torres'},{equipo:'Liverpool',minuto:46,jugador:'Gerrard'},{equipo:'Manchester United',minuto:54,jugador:'Rooney'},{equipo:'Liverpool',minuto:68,jugador:'Aurelio'},{equipo:'Liverpool',minuto:90,jugador:'Dossena'}] },
{ id:'pl_ars_man_4_2_2008', local:'Arsenal', visitante:'Manchester United', resultado:'2-4', torneo:'Premier League 2007-08', fecha:'3 Nov 2007', tipo:'club', goles:[{equipo:'Arsenal',minuto:16,jugador:'Gallas'},{equipo:'Manchester United',minuto:3,jugador:'Fabregas'},{equipo:'Manchester United',minuto:35,jugador:'Ronaldo'},{equipo:'Manchester United',minuto:45,jugador:'Tevez'},{equipo:'Arsenal',minuto:71,jugador:'Adebayor'},{equipo:'Manchester United',minuto:90,jugador:'Rooney'}] },
{ id:'pl_che_ars_2004_pl', local:'Chelsea', visitante:'Arsenal', resultado:'1-0', torneo:'Premier League 2003-04', fecha:'28 Feb 2004', tipo:'club', goles:[{equipo:'Chelsea',minuto:51,jugador:'Gudjohnsen'}] },
{ id:'pl_man_wba_5_5_2013', local:'Manchester United', visitante:'West Brom', resultado:'5-5', torneo:'Premier League 2012-13', fecha:'20 May 2013', tipo:'club', goles:[{equipo:'West Brom',minuto:2,jugador:'Shane Long'},{equipo:'West Brom',minuto:19,jugador:'Mulumbu'},{equipo:'Manchester United',minuto:35,jugador:'Ferdinand'},{equipo:'West Brom',minuto:55,jugador:'Lukaku'},{equipo:'Manchester United',minuto:56,jugador:'Van Persie'},{equipo:'West Brom',minuto:58,jugador:'Brunt'},{equipo:'Manchester United',minuto:63,jugador:'Van Persie'},{equipo:'Manchester United',minuto:66,jugador:'Kagawa'},{equipo:'West Brom',minuto:77,jugador:'Lukaku'},{equipo:'Manchester United',minuto:90,jugador:'Hernández'}] },
{ id:'pl_tot_man_6_0_2019', local:'Tottenham', visitante:'Manchester United', resultado:'6-1', torneo:'Premier League 2019-20', fecha:'11 Dec 2019', tipo:'club', goles:[{equipo:'Tottenham',minuto:7,jugador:'Lucas Moura'},{equipo:'Tottenham',minuto:37,jugador:'Son'},{equipo:'Manchester United',minuto:39,jugador:'Martial'},{equipo:'Tottenham',minuto:53,jugador:'Kane'},{equipo:'Tottenham',minuto:56,jugador:'Alli'},{equipo:'Tottenham',minuto:65,jugador:'Son'},{equipo:'Tottenham',minuto:90,jugador:'Kane'}] },
{ id:'pl_lei_man_5_3_2017', local:'Leicester', visitante:'Manchester United', resultado:'5-3', torneo:'Premier League 2016-17', fecha:'5 Sep 2016', tipo:'club', goles:[{equipo:'Manchester United',minuto:5,jugador:'Rashford'},{equipo:'Leicester',minuto:13,jugador:'Albrighton'},{equipo:'Leicester',minuto:25,jugador:'Mahrez'},{equipo:'Leicester',minuto:35,jugador:'Huth'},{equipo:'Manchester United',minuto:53,jugador:'Rooney'},{equipo:'Leicester',minuto:62,jugador:'Vardy'},{equipo:'Leicester',minuto:71,jugador:'Gray'},{equipo:'Manchester United',minuto:78,jugador:'Herrera'}] },
{ id:'bund_bay_lei_5_1_2018', local:'Bayern Munich', visitante:'Bayer Leverkusen', resultado:'5-1', torneo:'Bundesliga 2017-18', fecha:'15 Apr 2018', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:2,jugador:'Müller'},{equipo:'Bayern Munich',minuto:12,jugador:'James'},{equipo:'Bayern Munich',minuto:25,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:44,jugador:'Müller'},{equipo:'Bayer Leverkusen',minuto:57,jugador:'Bailey'},{equipo:'Bayern Munich',minuto:78,jugador:'Robben'}] },
{ id:'bund_dor_bay_3_2_2019', local:'Borussia Dortmund', visitante:'Bayern Munich', resultado:'3-2', torneo:'Bundesliga 2018-19', fecha:'9 Nov 2018', tipo:'club', goles:[{equipo:'Borussia Dortmund',minuto:5,jugador:'Reus'},{equipo:'Borussia Dortmund',minuto:26,jugador:'Alcácer'},{equipo:'Bayern Munich',minuto:51,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:54,jugador:'Lewandowski'},{equipo:'Borussia Dortmund',minuto:70,jugador:'Alcácer'}] },
{ id:'bund_bay_aug_8_1', local:'Bayern Munich', visitante:'Augsburg', resultado:'8-1', torneo:'Bundesliga 2015-16', fecha:'22 Oct 2015', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:3,jugador:'Lewandowski'},{equipo:'Augsburg',minuto:10,jugador:'Callsen-Bracker'},{equipo:'Bayern Munich',minuto:15,jugador:'Müller'},{equipo:'Bayern Munich',minuto:32,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:39,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:44,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:48,jugador:'Lewandowski'},{equipo:'Bayern Munich',minuto:62,jugador:'Müller'},{equipo:'Bayern Munich',minuto:74,jugador:'Müller'}] },
{ id:'sa_int_juve_2021', local:'Inter de Milán', visitante:'Juventus', resultado:'2-0', torneo:'Serie A 2020-21', fecha:'17 Jan 2021', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:11,jugador:'Barella'},{equipo:'Inter de Milán',minuto:18,jugador:'Vidal'}] },
{ id:'sa_rom_bar_ucl2018', local:'Roma', visitante:'Barcelona', resultado:'3-0', torneo:'Cuartos Champions 2018 (vuelta)', fecha:'10 Abr 2018', tipo:'club', goles:[{equipo:'Roma',minuto:6,jugador:'Dzeko'},{equipo:'Roma',minuto:58,jugador:'De Rossi'},{equipo:'Roma',minuto:82,jugador:'Manolas'}] },
{ id:'sa_mil_inter_derby2019', local:'AC Milan', visitante:'Inter de Milán', resultado:'2-3', torneo:'Serie A 2018-19', fecha:'21 Oct 2018', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:10,jugador:'Perisic'},{equipo:'Inter de Milán',minuto:31,jugador:'Icardi'},{equipo:'AC Milan',minuto:37,jugador:'Zapata'},{equipo:'AC Milan',minuto:67,jugador:'Musacchio'},{equipo:'Inter de Milán',minuto:71,jugador:'Matias Vecino'}] },
{ id:'sa_nap_juve_2018', local:'Nápoles', visitante:'Juventus', resultado:'1-0', torneo:'Serie A 2017-18', fecha:'1 Dec 2017', tipo:'club', goles:[{equipo:'Nápoles',minuto:31,jugador:'Hamsik'}] },
{ id:'sa_laz_rom_derby2021', local:'Lazio', visitante:'Roma', resultado:'3-2', torneo:'Serie A 2020-21', fecha:'15 May 2021', tipo:'club', goles:[{equipo:'Lazio',minuto:10,jugador:'Immobile'},{equipo:'Roma',minuto:18,jugador:'Mayoral'},{equipo:'Lazio',minuto:52,jugador:'Correa'},{equipo:'Roma',minuto:60,jugador:'Pellegrini'},{equipo:'Lazio',minuto:76,jugador:'Milinkovic-Savic'}] },
{ id:'sel_esp_bra_amistoso2013', local:'España', visitante:'Brasil', resultado:'0-3', torneo:'Confederaciones 2013 Final', fecha:'30 Jun 2013', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:44,jugador:'Fred'},{equipo:'Brasil',minuto:48,jugador:'Neymar'},{equipo:'Brasil',minuto:56,jugador:'Fred'}] },
{ id:'sel_ger_bra_confed2013', local:'Alemania', visitante:'Uruguay', resultado:'4-2', torneo:'Tercer puesto Confederaciones 2013', fecha:'30 Jun 2013', tipo:'seleccion', goles:[{equipo:'Alemania',minuto:15,jugador:'Schürrle'},{equipo:'Alemania',minuto:21,jugador:'Müller'},{equipo:'Uruguay',minuto:30,jugador:'Stuani'},{equipo:'Uruguay',minuto:42,jugador:'Forlán'},{equipo:'Alemania',minuto:59,jugador:'Schürrle'},{equipo:'Alemania',minuto:72,jugador:'Özil'}] },
{ id:'sel_esp_ita_confed2013', local:'España', visitante:'Italia', resultado:'0-0 (p)', torneo:'Semifinal Confederaciones 2013', fecha:'27 Jun 2013', tipo:'seleccion', goles:[] },
{ id:'sel_eng_ger_5_1_2001', local:'Alemania', visitante:'Inglaterra', resultado:'1-5', torneo:'Clasificatoria Mundial 2002', fecha:'1 Sep 2001', tipo:'seleccion', goles:[{equipo:'Alemania',minuto:6,jugador:'Jancker'},{equipo:'Inglaterra',minuto:13,jugador:'Owen'},{equipo:'Inglaterra',minuto:45,jugador:'Gerrard'},{equipo:'Inglaterra',minuto:48,jugador:'Owen'},{equipo:'Inglaterra',minuto:66,jugador:'Owen'},{equipo:'Inglaterra',minuto:74,jugador:'Heskey'}] },
{ id:'sel_ned_esp_5_1_2014', local:'Países Bajos', visitante:'España', resultado:'5-1', torneo:'Fase Grupos Mundial 2014', fecha:'13 Jun 2014', tipo:'seleccion', goles:[{equipo:'España',minuto:27,jugador:'Xabi Alonso'},{equipo:'Países Bajos',minuto:44,jugador:'Van Persie'},{equipo:'Países Bajos',minuto:53,jugador:'Robben'},{equipo:'Países Bajos',minuto:64,jugador:'De Vrij'},{equipo:'Países Bajos',minuto:72,jugador:'Robben'},{equipo:'Países Bajos',minuto:80,jugador:'Van Persie'}] },
{ id:'sel_bra_ger_confed_2_4', local:'Brasil', visitante:'Alemania', resultado:'2-4', torneo:'Semifinal Confederaciones 2019', fecha:'30 Jun 2019', tipo:'seleccion', goles:[] },
{ id:'sel_fra_uru_2_0_wc2018', local:'Francia', visitante:'Uruguay', resultado:'2-0', torneo:'Cuartos Mundial 2018', fecha:'6 Jul 2018', tipo:'seleccion', goles:[{equipo:'Francia',minuto:40,jugador:'Raphaël Varane'},{equipo:'Francia',minuto:61,jugador:'Griezmann'}] },
{ id:'sel_bel_fra_0_1_wc2018', local:'Bélgica', visitante:'Francia', resultado:'0-1', torneo:'Semifinal Mundial 2018', fecha:'10 Jul 2018', tipo:'seleccion', goles:[{equipo:'Francia',minuto:51,jugador:'Umtiti'}] },
{ id:'sel_eng_col_1_1_wc2018', local:'Inglaterra', visitante:'Colombia', resultado:'1-1 (p)', torneo:'Octavos Mundial 2018', fecha:'3 Jul 2018', tipo:'seleccion', goles:[{equipo:'Colombia',minuto:73,jugador:'Yerry Mina'},{equipo:'Inglaterra',minuto:57,jugador:'Kane'}] },
{ id:'sel_mex_ale_0_1_wc2018', local:'Alemania', visitante:'México', resultado:'0-1', torneo:'Fase Grupos Mundial 2018', fecha:'17 Jun 2018', tipo:'seleccion', goles:[{equipo:'México',minuto:35,jugador:'Lozano'}] },
{ id:'sel_arg_ice_1_1_wc2018', local:'Argentina', visitante:'Islandia', resultado:'1-1', torneo:'Fase Grupos Mundial 2018', fecha:'16 Jun 2018', tipo:'seleccion', goles:[{equipo:'Argentina',minuto:19,jugador:'Agüero'},{equipo:'Islandia',minuto:23,jugador:'Finnbogason'}] },
{ id:'sel_rus_esp_1_1_wc2018', local:'Rusia', visitante:'España', resultado:'1-1 (p)', torneo:'Octavos Mundial 2018', fecha:'1 Jul 2018', tipo:'seleccion', goles:[{equipo:'Rusia',minuto:41,jugador:'Cheryshev'},{equipo:'España',minuto:12,jugador:'Ignashevich'}] },
{ id:'sel_cro_eng_2_1_wc2018', local:'Croacia', visitante:'Inglaterra', resultado:'2-1', torneo:'Semifinal Mundial 2018', fecha:'11 Jul 2018', tipo:'seleccion', goles:[{equipo:'Inglaterra',minuto:5,jugador:'Trippier'},{equipo:'Croacia',minuto:68,jugador:'Perišić'},{equipo:'Croacia',minuto:109,jugador:'Mandžukić'}] },
{ id:'sel_por_uru_2_1_wc2018', local:'Portugal', visitante:'Uruguay', resultado:'2-1', torneo:'Octavos Mundial 2018', fecha:'30 Jun 2018', tipo:'seleccion', goles:[{equipo:'Uruguay',minuto:62,jugador:'Cavani'},{equipo:'Portugal',minuto:7,jugador:'Pepe'},{equipo:'Portugal',minuto:55,jugador:'Cavani'}] },
{ id:'sel_esp_rus_2014', local:'España', visitante:'Chile', resultado:'0-2', torneo:'Fase Grupos Mundial 2014', fecha:'18 Jun 2014', tipo:'seleccion', goles:[{equipo:'Chile',minuto:20,jugador:'Vargas'},{equipo:'Chile',minuto:43,jugador:'Aranguiz'}] },
{ id:'sel_bra_chi_1_1_wc2014', local:'Brasil', visitante:'Chile', resultado:'1-1 (p)', torneo:'Octavos Mundial 2014', fecha:'28 Jun 2014', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:18,jugador:'David Luiz'},{equipo:'Chile',minuto:32,jugador:'Sánchez'}] },
{ id:'sel_bra_col_2_1_wc2014', local:'Brasil', visitante:'Colombia', resultado:'2-1', torneo:'Cuartos Mundial 2014', fecha:'4 Jul 2014', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:7,jugador:'Thiago Silva'},{equipo:'Brasil',minuto:69,jugador:'David Luiz'},{equipo:'Colombia',minuto:80,jugador:'James Rodríguez'}] },
{ id:'sel_arg_bel_1_0_wc2014', local:'Argentina', visitante:'Bélgica', resultado:'1-0', torneo:'Cuartos Mundial 2014', fecha:'5 Jul 2014', tipo:'seleccion', goles:[{equipo:'Argentina',minuto:8,jugador:'Di María'}] },
{ id:'sel_sen_col_0_1_wc2014', local:'Colombia', visitante:'Uruguay', resultado:'2-0', torneo:'Octavos Mundial 2014', fecha:'28 Jun 2014', tipo:'seleccion', goles:[{equipo:'Colombia',minuto:28,jugador:'James Rodríguez'},{equipo:'Colombia',minuto:50,jugador:'James Rodríguez'}] },
{ id:'sel_wc2010_ger_eng_r16', local:'Alemania', visitante:'Inglaterra', resultado:'4-1', torneo:'Octavos Mundial 2010', fecha:'27 Jun 2010', tipo:'seleccion', goles:[{equipo:'Alemania',minuto:20,jugador:'Klose'},{equipo:'Alemania',minuto:32,jugador:'Podolski'},{equipo:'Inglaterra',minuto:37,jugador:'Upson'},{equipo:'Inglaterra',minuto:38,jugador:'Lampard'},{equipo:'Alemania',minuto:67,jugador:'Müller'},{equipo:'Alemania',minuto:70,jugador:'Müller'}] },
{ id:'sel_wc2010_arg_mex_r16', local:'Argentina', visitante:'México', resultado:'3-1', torneo:'Octavos Mundial 2010', fecha:'27 Jun 2010', tipo:'seleccion', goles:[{equipo:'Argentina',minuto:26,jugador:'Tévez'},{equipo:'México',minuto:29,jugador:'Hernández'},{equipo:'Argentina',minuto:52,jugador:'Higuaín'},{equipo:'Argentina',minuto:97,jugador:'Tévez'}] },
{ id:'sel_wc2010_bra_por_r16', local:'Brasil', visitante:'Chile', resultado:'3-0', torneo:'Octavos Mundial 2010', fecha:'28 Jun 2010', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:35,jugador:'Juan'},{equipo:'Brasil',minuto:59,jugador:'Luis Fabiano'},{equipo:'Brasil',minuto:76,jugador:'Robinho'}] },
{ id:'sel_wc2006_esp_ukr_4_0', local:'España', visitante:'Ucrania', resultado:'4-0', torneo:'Fase Grupos Mundial 2006', fecha:'14 Jun 2006', tipo:'seleccion', goles:[{equipo:'España',minuto:4,jugador:'Villa'},{equipo:'España',minuto:17,jugador:'Villa'},{equipo:'España',minuto:47,jugador:'Torres'},{equipo:'España',minuto:81,jugador:'Villa'}] },
{ id:'sel_wc2006_ita_ukr_3_0', local:'Italia', visitante:'Ucrania', resultado:'3-0', torneo:'Octavos Mundial 2006', fecha:'26 Jun 2006', tipo:'seleccion', goles:[{equipo:'Italia',minuto:3,jugador:'Zambrotta'},{equipo:'Italia',minuto:59,jugador:'Toni'},{equipo:'Italia',minuto:69,jugador:'Toni'}] },
{ id:'sel_wc2006_fra_bra_1_0', local:'Francia', visitante:'Brasil', resultado:'1-0', torneo:'Cuartos Mundial 2006', fecha:'1 Jul 2006', tipo:'seleccion', goles:[{equipo:'Francia',minuto:57,jugador:'Zidane'}] },
{ id:'sel_wc2002_bra_bel_2_0', local:'Brasil', visitante:'Bélgica', resultado:'2-0', torneo:'Octavos Mundial 2002', fecha:'17 Jun 2002', tipo:'seleccion', goles:[{equipo:'Brasil',minuto:67,jugador:'Rivaldo'},{equipo:'Brasil',minuto:87,jugador:'Ronaldo'}] },
{ id:'sel_wc2002_sen_sui_r16', local:'Senegal', visitante:'Suecia', resultado:'2-1', torneo:'Octavos Mundial 2002', fecha:'16 Jun 2002', tipo:'seleccion', goles:[{equipo:'Senegal',minuto:37,jugador:'Camara'},{equipo:'Suecia',minuto:60,jugador:'Larsson'},{equipo:'Senegal',minuto:104,jugador:'Henri Camara'}] },
{ id:'sel_wc1998_arg_ned_1_2', local:'Países Bajos', visitante:'Argentina', resultado:'2-1', torneo:'Cuartos Mundial 1998', fecha:'4 Jul 1998', tipo:'seleccion', goles:[{equipo:'Países Bajos',minuto:12,jugador:'Kluivert'},{equipo:'Argentina',minuto:18,jugador:'López'},{equipo:'Países Bajos',minuto:89,jugador:'Bergkamp'}] },
{ id:'sel_wc1998_fra_cro_2_1', local:'Francia', visitante:'Croacia', resultado:'2-1', torneo:'Semifinal Mundial 1998', fecha:'8 Jul 1998', tipo:'seleccion', goles:[{equipo:'Croacia',minuto:46,jugador:'Suker'},{equipo:'Francia',minuto:47,jugador:'Thuram'},{equipo:'Francia',minuto:69,jugador:'Thuram'}] },
{ id:'sel_wc1990_ger_ned_2_1', local:'Alemania', visitante:'Países Bajos', resultado:'2-1', torneo:'Octavos Mundial 1990', fecha:'24 Jun 1990', tipo:'seleccion', goles:[{equipo:'Alemania',minuto:50,jugador:'Völler'},{equipo:'Países Bajos',minuto:51,jugador:'Koeman'},{equipo:'Alemania',minuto:54,jugador:'Brehme'}] },
{ id:'ucl2025_rm_ars_qf', local:'Real Madrid', visitante:'Arsenal', resultado:'2-1', torneo:'Cuartos Champions 2025 (ida)', fecha:'8 Abr 2025', tipo:'club', goles:[{equipo:'Real Madrid',minuto:24,jugador:'Vinicius'},{equipo:'Arsenal',minuto:71,jugador:'Trossard'},{equipo:'Real Madrid',minuto:82,jugador:'Mbappé'}] },
{ id:'ucl2025_bar_dor_semi', local:'Barcelona', visitante:'Borussia Dortmund', resultado:'4-0', torneo:'Semifinal Champions 2025 (ida)', fecha:'29 Abr 2025', tipo:'club', goles:[{equipo:'Barcelona',minuto:5,jugador:'Lamine Yamal'},{equipo:'Barcelona',minuto:22,jugador:'Raphinha'},{equipo:'Barcelona',minuto:55,jugador:'Dani Olmo'},{equipo:'Barcelona',minuto:81,jugador:'Ferran Torres'}] },
{ id:'ucl2024_bar_psg_semi', local:'Barcelona', visitante:'PSG', resultado:'3-3', torneo:'Semifinal Champions 2024', fecha:'16 Abr 2024', tipo:'club', goles:[{equipo:'Barcelona',minuto:37,jugador:'Raphinha'},{equipo:'PSG',minuto:40,jugador:'Vitinha'},{equipo:'PSG',minuto:62,jugador:'Dembélé'},{equipo:'Barcelona',minuto:50,jugador:'Ferran Torres'},{equipo:'Barcelona',minuto:83,jugador:'Raphinha'},{equipo:'PSG',minuto:89,jugador:'Kvaratskhelia'}] },
{ id:'ucl2023_nap_mil_1_1', local:'Nápoles', visitante:'AC Milan', resultado:'1-1', torneo:'Cuartos Champions 2023 (vuelta)', fecha:'18 Abr 2023', tipo:'club', goles:[{equipo:'AC Milan',minuto:4,jugador:'Bennacer'},{equipo:'Nápoles',minuto:60,jugador:'Giroud'}] },
{ id:'ucl2023_int_ben_3_3', local:'Inter de Milán', visitante:'Benfica', resultado:'3-3', torneo:'Cuartos Champions 2023', fecha:'19 Abr 2023', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:6,jugador:'Barella'},{equipo:'Benfica',minuto:22,jugador:'João Mario'},{equipo:'Inter de Milán',minuto:31,jugador:'Lukaku'},{equipo:'Benfica',minuto:51,jugador:'António Silva'},{equipo:'Inter de Milán',minuto:62,jugador:'Correa'},{equipo:'Benfica',minuto:82,jugador:'Gonçalo Ramos'}] },
{ id:'ucl2022_rm_chel_3_1', local:'Real Madrid', visitante:'Chelsea', resultado:'3-1', torneo:'Semifinal Champions 2022 (ida)', fecha:'27 Abr 2022', tipo:'club', goles:[{equipo:'Real Madrid',minuto:15,jugador:'Benzema'},{equipo:'Real Madrid',minuto:24,jugador:'Benzema'},{equipo:'Chelsea',minuto:46,jugador:'Loftus-Cheek'},{equipo:'Real Madrid',minuto:48,jugador:'Benzema'}] },
{ id:'ucl2022_liv_vil_2_3', local:'Liverpool', visitante:'Villarreal', resultado:'3-2', torneo:'Semifinal Champions 2022 (vuelta)', fecha:'3 May 2022', tipo:'club', goles:[{equipo:'Villarreal',minuto:3,jugador:'Boulaye Dia'},{equipo:'Villarreal',minuto:41,jugador:'Francis Coquelin'},{equipo:'Liverpool',minuto:62,jugador:'Fabinho'},{equipo:'Liverpool',minuto:67,jugador:'Henderson'},{equipo:'Liverpool',minuto:74,jugador:'Mané'}] },
{ id:'liga_rm_bar_3_2_2023', local:'Real Madrid', visitante:'Barcelona', resultado:'3-2', torneo:'Supercopa España 2023', fecha:'15 Ene 2023', tipo:'club', goles:[{equipo:'Barcelona',minuto:33,jugador:'Gavi'},{equipo:'Real Madrid',minuto:45,jugador:'Valverde'},{equipo:'Barcelona',minuto:50,jugador:'Robert Lewandowski'},{equipo:'Real Madrid',minuto:67,jugador:'Benzema'},{equipo:'Real Madrid',minuto:70,jugador:'Mariano'}] },
{ id:'liga_rm_bar_2_1_2024', local:'Real Madrid', visitante:'Barcelona', resultado:'3-2', torneo:'Supercopa España 2024', fecha:'14 Ene 2024', tipo:'club', goles:[{equipo:'Real Madrid',minuto:4,jugador:'Valverde'},{equipo:'Barcelona',minuto:13,jugador:'Lamine Yamal'},{equipo:'Barcelona',minuto:37,jugador:'Raphinha'},{equipo:'Real Madrid',minuto:65,jugador:'Joselu'},{equipo:'Real Madrid',minuto:73,jugador:'Joselu'}] },
{ id:'liga_bar_rm_4_0_2024', local:'Barcelona', visitante:'Real Madrid', resultado:'4-0', torneo:'LaLiga 2023-24', fecha:'28 Oct 2023', tipo:'club', goles:[{equipo:'Barcelona',minuto:20,jugador:'Lamine Yamal'},{equipo:'Barcelona',minuto:39,jugador:'Robert Lewandowski'},{equipo:'Barcelona',minuto:49,jugador:'Fermín López'},{equipo:'Barcelona',minuto:76,jugador:'Robert Lewandowski'}] },
{ id:'pl_man_new_6_3_2022', local:'Manchester City', visitante:'RB Leipzig', resultado:'6-3', torneo:'Champions 2021 (grupos)', fecha:'15 Sep 2021', tipo:'club', goles:[{equipo:'Manchester City',minuto:16,jugador:'Grealish'},{equipo:'Manchester City',minuto:28,jugador:'De Bruyne'},{equipo:'Manchester City',minuto:38,jugador:'Gabriel Jesus'},{equipo:'RB Leipzig',minuto:42,jugador:'Nordi Mukiele'},{equipo:'Manchester City',minuto:53,jugador:'De Bruyne'},{equipo:'RB Leipzig',minuto:55,jugador:'André Silva'},{equipo:'Manchester City',minuto:63,jugador:'Grealish'},{equipo:'Manchester City',minuto:73,jugador:'Jack Grealish'},{equipo:'RB Leipzig',minuto:84,jugador:'Christopher Nkunku'}] },
{ id:'pl_che_tot_3_0_2021', local:'Chelsea', visitante:'Tottenham', resultado:'3-0', torneo:'Premier League 2020-21', fecha:'4 Feb 2021', tipo:'club', goles:[{equipo:'Chelsea',minuto:27,jugador:'Azpilicueta'},{equipo:'Chelsea',minuto:45,jugador:'Marcos Alonso'},{equipo:'Chelsea',minuto:55,jugador:'Thiago Silva'}] },
{ id:'pl_liv_man_4_0_2022', local:'Liverpool', visitante:'Manchester United', resultado:'4-0', torneo:'Premier League 2021-22', fecha:'19 Apr 2022', tipo:'club', goles:[{equipo:'Liverpool',minuto:5,jugador:'Luis Díaz'},{equipo:'Liverpool',minuto:22,jugador:'Firmino'},{equipo:'Liverpool',minuto:55,jugador:'Firmino'},{equipo:'Liverpool',minuto:68,jugador:'Salah'}] },
{ id:'pl_tot_che_6_2_2021', local:'Tottenham', visitante:'Chelsea', resultado:'6-2', torneo:'Premier League 2019-20', fecha:'29 Dec 2019', tipo:'club', goles:[{equipo:'Tottenham',minuto:9,jugador:'Son'},{equipo:'Tottenham',minuto:25,jugador:'Alli'},{equipo:'Chelsea',minuto:31,jugador:'Rudiger'},{equipo:'Tottenham',minuto:35,jugador:'Kane'},{equipo:'Tottenham',minuto:38,jugador:'Son'},{equipo:'Tottenham',minuto:49,jugador:'Kane'},{equipo:'Chelsea',minuto:55,jugador:'Barkley'},{equipo:'Tottenham',minuto:57,jugador:'Son'}] },
{ id:'bund_dor_sch_5_0_2017', local:'Borussia Dortmund', visitante:'Schalke', resultado:'4-4', torneo:'Bundesliga 2017-18', fecha:'25 Nov 2017', tipo:'club', goles:[{equipo:'Borussia Dortmund',minuto:2,jugador:'Pierre-Emerick Aubameyang'},{equipo:'Schalke',minuto:23,jugador:'Matija Nastasic'},{equipo:'Borussia Dortmund',minuto:35,jugador:'Andriy Yarmolenko'},{equipo:'Schalke',minuto:40,jugador:'Nabil Bentaleb'},{equipo:'Borussia Dortmund',minuto:51,jugador:'Pierre-Emerick Aubameyang'},{equipo:'Schalke',minuto:56,jugador:'Nabil Bentaleb'},{equipo:'Borussia Dortmund',minuto:73,jugador:'Christian Pulisic'},{equipo:'Schalke',minuto:89,jugador:'Guido Burgstaller'}] },
{ id:'bund_bay_fra_3_1_2024', local:'Bayern Munich', visitante:'Bayer Leverkusen', resultado:'0-3', torneo:'Bundesliga 2023-24', fecha:'10 Feb 2024', tipo:'club', goles:[{equipo:'Bayer Leverkusen',minuto:27,jugador:'Granit Xhaka'},{equipo:'Bayer Leverkusen',minuto:68,jugador:'Robert Andrich'},{equipo:'Bayer Leverkusen',minuto:90,jugador:'Jonas Hofmann'}] },
{ id:'sa_int_mil_3_0_2022', local:'Inter de Milán', visitante:'AC Milan', resultado:'3-0', torneo:'Semifinal Champions 2023 (vuelta)', fecha:'16 May 2023', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:8,jugador:'Edin Džeko'},{equipo:'Inter de Milán',minuto:11,jugador:'Henrikh Mkhitaryan'},{equipo:'Inter de Milán',minuto:74,jugador:'Robin Gosens'}] },
{ id:'sa_int_mil_derby2022', local:'AC Milan', visitante:'Inter de Milán', resultado:'2-3', torneo:'Semifinal Champions 2023 (ida)', fecha:'10 May 2023', tipo:'club', goles:[{equipo:'AC Milan',minuto:11,jugador:'Brahim Diaz'},{equipo:'Inter de Milán',minuto:29,jugador:'Nicolo Barella'},{equipo:'AC Milan',minuto:38,jugador:'Olivier Giroud'},{equipo:'Inter de Milán',minuto:74,jugador:'Henrikh Mkhitaryan'},{equipo:'Inter de Milán',minuto:80,jugador:'Lautaro Martínez'}] },
{ id:'sa_juve_int_3_3_2023', local:'Juventus', visitante:'Inter de Milán', resultado:'3-3', torneo:'Serie A 2022-23', fecha:'22 Apr 2023', tipo:'club', goles:[{equipo:'Juventus',minuto:15,jugador:'Lukaku'},{equipo:'Juventus',minuto:28,jugador:'Fagioli'},{equipo:'Inter de Milán',minuto:35,jugador:'Lukaku'},{equipo:'Inter de Milán',minuto:50,jugador:'Dimarco'},{equipo:'Juventus',minuto:73,jugador:'Vlahovic'},{equipo:'Inter de Milán',minuto:90,jugador:'Lukaku'}] },
{ id:'l1_psg_mar_9_0_2020', local:'PSG', visitante:'Metz', resultado:'6-1', torneo:'Ligue 1 2019-20', fecha:'8 Sep 2019', tipo:'club', goles:[{equipo:'PSG',minuto:5,jugador:'Neymar'},{equipo:'PSG',minuto:13,jugador:'Kylian Mbappé'},{equipo:'PSG',minuto:22,jugador:'Neymar'},{equipo:'Metz',minuto:37,jugador:'Ambrose'},{equipo:'PSG',minuto:40,jugador:'Kylian Mbappé'},{equipo:'PSG',minuto:67,jugador:'Icardi'},{equipo:'PSG',minuto:80,jugador:'Neymar'}] },
{ id:'l1_psg_ly_4_2_2021', local:'PSG', visitante:'Lyon', resultado:'4-2', torneo:'Ligue 1 2020-21', fecha:'21 Mar 2021', tipo:'club', goles:[{equipo:'PSG',minuto:7,jugador:'Kylian Mbappé'},{equipo:'Lyon',minuto:20,jugador:'Memphis Depay'},{equipo:'PSG',minuto:29,jugador:'Neymar'},{equipo:'Lyon',minuto:42,jugador:'Tino Kadewere'},{equipo:'PSG',minuto:58,jugador:'Kylian Mbappé'},{equipo:'PSG',minuto:82,jugador:'Danilo Pereira'}] },
{ id:'ucl2001_bay_val_final', local:'Bayern Munich', visitante:'Valencia', resultado:'1-1 (p)', torneo:'Final Champions 2001', fecha:'23 May 2001', tipo:'club', goles:[{equipo:'Bayern Munich',minuto:50,jugador:'Effenberg'},{equipo:'Valencia',minuto:76,jugador:'Mendieta'}] },
{ id:'ucl1996_juve_ajax_final', local:'Juventus', visitante:'Ajax', resultado:'1-1 (p)', torneo:'Final Champions 1996', fecha:'22 May 1996', tipo:'club', goles:[{equipo:'Juventus',minuto:12,jugador:'Ravanelli'},{equipo:'Ajax',minuto:41,jugador:'Litmanen'}] },
{ id:'ucl1992_bar_sam_final', local:'Barcelona', visitante:'Sampdoria', resultado:'1-0', torneo:'Final Copa de Europa 1992', fecha:'20 May 1992', tipo:'club', goles:[{equipo:'Barcelona',minuto:111,jugador:'Koeman'}] },
{ id:'ucl1988_psv_ben_final', local:'PSV Eindhoven', visitante:'Benfica', resultado:'0-0 (p)', torneo:'Final Copa de Europa 1988', fecha:'25 May 1988', tipo:'club', goles:[] },
{ id:'ucl2011_rm_bar_qf', local:'Real Madrid', visitante:'Barcelona', resultado:'0-2', torneo:'Cuartos Champions 2011 (ida)', fecha:'27 Abr 2011', tipo:'club', goles:[{equipo:'Barcelona',minuto:76,jugador:'Messi'},{equipo:'Barcelona',minuto:87,jugador:'Messi'}] },
{ id:'ucl2013_bar_psg_qf', local:'Barcelona', visitante:'PSG', resultado:'2-2', torneo:'Cuartos Champions 2013 (ida)', fecha:'2 Abr 2013', tipo:'club', goles:[{equipo:'Barcelona',minuto:38,jugador:'Messi'},{equipo:'PSG',minuto:51,jugador:'Blaise Matuidi'},{equipo:'PSG',minuto:68,jugador:'Jérémy Ménez'},{equipo:'Barcelona',minuto:71,jugador:'Pedro'}] },
{ id:'ucl2014_atl_chel_qf', local:'Atlético de Madrid', visitante:'Chelsea', resultado:'1-3', torneo:'Cuartos Champions 2014 (ida)', fecha:'22 Abr 2014', tipo:'club', goles:[{equipo:'Chelsea',minuto:13,jugador:'Torres'},{equipo:'Atlético de Madrid',minuto:36,jugador:'Tiago'},{equipo:'Chelsea',minuto:41,jugador:'Eto\'o'},{equipo:'Chelsea',minuto:59,jugador:'Torres'}] },
{ id:'ucl2015_bar_psg_qf', local:'Barcelona', visitante:'PSG', resultado:'3-1', torneo:'Cuartos Champions 2015 (vuelta)', fecha:'21 Abr 2015', tipo:'club', goles:[{equipo:'Barcelona',minuto:48,jugador:'Neymar'},{equipo:'Barcelona',minuto:55,jugador:'Dani Alves'},{equipo:'PSG',minuto:61,jugador:'Zlatan Ibrahimović'},{equipo:'Barcelona',minuto:90,jugador:'Neymar'}] },
{ id:'ucl2016_bar_atl_qf', local:'Barcelona', visitante:'Atlético de Madrid', resultado:'2-3', torneo:'Cuartos Champions 2016 (vuelta)', fecha:'6 Abr 2016', tipo:'club', goles:[{equipo:'Atlético de Madrid',minuto:8,jugador:'Fernando Torres'},{equipo:'Atlético de Madrid',minuto:22,jugador:'Saúl Ñíguez'},{equipo:'Barcelona',minuto:39,jugador:'Messi'},{equipo:'Atlético de Madrid',minuto:73,jugador:'Griezmann'},{equipo:'Barcelona',minuto:75,jugador:'Suárez'}] },
{ id:'ucl2017_rm_nap_3_1', local:'Real Madrid', visitante:'Nápoles', resultado:'3-1', torneo:'Octavos Champions 2017 (vuelta)', fecha:'7 Mar 2017', tipo:'club', goles:[{equipo:'Nápoles',minuto:24,jugador:'Insigne'},{equipo:'Real Madrid',minuto:25,jugador:'Sergio Ramos'},{equipo:'Real Madrid',minuto:54,jugador:'Benzema'},{equipo:'Real Madrid',minuto:71,jugador:'Casemiro'}] },
{ id:'pl_man_new_6_1_2021', local:'Manchester City', visitante:'Manchester United', resultado:'2-0', torneo:'Premier League 2020-21', fecha:'7 Mar 2021', tipo:'club', goles:[{equipo:'Manchester City',minuto:16,jugador:'Bernardo Silva'},{equipo:'Manchester City',minuto:76,jugador:'Ilkay Gündoğan'}] },
{ id:'pl_liv_new_7_0_2023', local:'Liverpool', visitante:'Manchester United', resultado:'7-0', torneo:'Premier League 2022-23', fecha:'5 Mar 2023', tipo:'club', goles:[{equipo:'Liverpool',minuto:14,jugador:'Cody Gakpo'},{equipo:'Liverpool',minuto:22,jugador:'Darwin Núñez'},{equipo:'Liverpool',minuto:31,jugador:'Darwin Núñez'},{equipo:'Liverpool',minuto:38,jugador:'Mohamed Salah'},{equipo:'Liverpool',minuto:45,jugador:'Harvey Elliott'},{equipo:'Liverpool',minuto:67,jugador:'Mohamed Salah'},{equipo:'Liverpool',minuto:76,jugador:'Roberto Firmino'}] },
{ id:'pl_man_bur_5_0_2021', local:'Manchester United', visitante:'Leeds United', resultado:'5-1', torneo:'Premier League 2020-21', fecha:'25 Aug 2020', tipo:'club', goles:[{equipo:'Manchester United',minuto:6,jugador:'Greenwood'},{equipo:'Manchester United',minuto:30,jugador:'Pogba'},{equipo:'Leeds United',minuto:51,jugador:'Alioski'},{equipo:'Manchester United',minuto:52,jugador:'Van de Beek'},{equipo:'Manchester United',minuto:68,jugador:'Fernandes'},{equipo:'Manchester United',minuto:82,jugador:'Greenwood'}] },
{ id:'pl_che_man_4_0_2021', local:'Chelsea', visitante:'Manchester City', resultado:'1-0', torneo:'Champions 2021 Final', fecha:'29 May 2021', tipo:'club', goles:[{equipo:'Chelsea',minuto:42,jugador:'Havertz'}] },
{ id:'pl_ars_tot_3_1_2023', local:'Arsenal', visitante:'Tottenham', resultado:'2-2', torneo:'Premier League 2022-23', fecha:'15 Jan 2023', tipo:'club', goles:[{equipo:'Arsenal',minuto:22,jugador:'Saka'},{equipo:'Tottenham',minuto:32,jugador:'Kane'},{equipo:'Arsenal',minuto:54,jugador:'Xhaka'},{equipo:'Tottenham',minuto:82,jugador:'Emerson Royal'}] },
{ id:'liga_atl_bar_0_2_2024', local:'Atlético de Madrid', visitante:'Barcelona', resultado:'2-1', torneo:'LaLiga 2023-24', fecha:'17 Dec 2023', tipo:'club', goles:[{equipo:'Atlético de Madrid',minuto:44,jugador:'Morata'},{equipo:'Atlético de Madrid',minuto:63,jugador:'Rodrigo de Paul'},{equipo:'Barcelona',minuto:90,jugador:'Lewandowski'}] },
{ id:'liga_rm_city_3_3_ucl', local:'Real Madrid', visitante:'Manchester City', resultado:'3-3', torneo:'Cuartos Champions 2023 (vuelta)', fecha:'17 May 2023', tipo:'club', goles:[{equipo:'Manchester City',minuto:11,jugador:'De Bruyne'},{equipo:'Real Madrid',minuto:38,jugador:'Vinicius Junior'},{equipo:'Real Madrid',minuto:57,jugador:'Vinicius Junior'},{equipo:'Manchester City',minuto:67,jugador:'Bernardo Silva'},{equipo:'Manchester City',minuto:76,jugador:'Bernardo Silva'},{equipo:'Real Madrid',minuto:90,jugador:'Nacho'}] },
{ id:'sa_nap_mil_4_0_2023', local:'Nápoles', visitante:'AC Milan', resultado:'4-0', torneo:'Serie A 2022-23', fecha:'19 Feb 2023', tipo:'club', goles:[{equipo:'Nápoles',minuto:12,jugador:'Osimhen'},{equipo:'Nápoles',minuto:38,jugador:'Elmas'},{equipo:'Nápoles',minuto:62,jugador:'Politano'},{equipo:'Nápoles',minuto:83,jugador:'Osimhen'}] },
{ id:'sa_int_nap_3_1_2023', local:'Inter de Milán', visitante:'Nápoles', resultado:'3-1', torneo:'Serie A 2023-24', fecha:'26 Aug 2023', tipo:'club', goles:[{equipo:'Inter de Milán',minuto:2,jugador:'Marcus Thuram'},{equipo:'Inter de Milán',minuto:19,jugador:'Çalhanoğlu'},{equipo:'Nápoles',minuto:58,jugador:'Osimhen'},{equipo:'Inter de Milán',minuto:78,jugador:'Lautaro Martínez'}] },
{ id:'bund_lei_bay_3_4_2023', local:'Bayer Leverkusen', visitante:'Bayern Munich', resultado:'3-0', torneo:'Bundesliga 2023-24', fecha:'6 Abr 2024', tipo:'club', goles:[{equipo:'Bayer Leverkusen',minuto:23,jugador:'Granit Xhaka'},{equipo:'Bayer Leverkusen',minuto:45,jugador:'Florian Wirtz'},{equipo:'Bayer Leverkusen',minuto:82,jugador:'Jonas Hofmann'}] },
]/g, '')
    .trim()
}

export function matchGoleador(input, nombre) {
  const inp = normalizarNombre(input)
  const nom = normalizarNombre(nombre)
  if (inp.length < 2) return false
  const partes = nom.split(' ')
  return partes.some(p => p.startsWith(inp)) || nom.includes(inp)
}
