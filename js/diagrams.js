// Esquemas anatómicos en SVG (ilustración plana) para preguntas de "señala la estructura".
// renderDiagram(id, highlight) dibuja la parte `highlight` resaltada (clase `hl`) y el resto neutro.
// No se incluye texto que revele la respuesta. Puro, sin DOM → testeable en Node.

// Sector ecográfico con vértice arriba en (cx, cy)
function sector(cx, cy, r, deg) {
  const a = (deg * Math.PI) / 180;
  const x1 = cx - r * Math.sin(a), x2 = cx + r * Math.sin(a), y = cy + r * Math.cos(a);
  return `M${cx} ${cy} L${x1.toFixed(1)} ${y.toFixed(1)} A${r} ${r} 0 0 0 ${x2.toFixed(1)} ${y.toFixed(1)} Z`;
}

// Sector de anillo (segmento miocárdico). Ángulos en grados, 0 = derecha, sentido antihorario (arriba = 90).
function ring(cx, cy, r1, r2, a0, a1) {
  const P = (r, a) => {
    const t = (a * Math.PI) / 180;
    return `${(cx + r * Math.cos(t)).toFixed(1)} ${(cy - r * Math.sin(t)).toFixed(1)}`;
  };
  return `M${P(r2, a0)} A${r2} ${r2} 0 0 0 ${P(r2, a1)} L${P(r1, a1)} A${r1} ${r1} 0 0 1 ${P(r1, a0)} Z`;
}

// Cada elemento: [clase, parte|null, path d]
const CORONARY = [
  // aorta ascendente (seccionada) y raíz
  ['aorta-o', null, 'M164 104 L164 58 C164 34 182 22 214 22'],
  ['aorta-i', null, 'M164 104 L164 58 C164 34 182 22 214 22'],
  ['heart', null, 'M118 100 C68 110 44 160 50 210 C58 262 118 298 200 304 C250 306 288 302 300 284 C316 244 314 160 290 122 C272 96 222 90 190 96 Z'],
  ['aorta', null, 'M146 70 L182 70 L182 98 C182 110 174 116 164 116 C154 116 146 110 146 98 Z'],
  ['vessel', 'rca', 'M152 104 C120 108 88 128 76 166 C64 210 86 254 132 274 C148 280 162 284 176 286'],
  ['vessel thin', 'am', 'M70 196 C96 214 124 232 158 246'],
  ['vessel thin', 'pda', 'M176 286 C208 292 242 294 276 290'],
  ['vessel', 'lm', 'M178 102 L206 112'],
  ['vessel', 'lad', 'M206 112 C214 164 238 232 286 286'],
  ['vessel thin', 'diag', 'M214 144 C226 156 238 166 252 172 M226 190 C236 202 246 210 260 216'],
  ['vessel', 'cx', 'M206 112 C238 106 270 114 290 140 C300 156 304 176 304 196'],
  ['vessel thin', 'om', 'M282 128 C292 152 294 186 286 230'],
];

const A4C = [
  ['sector', null, sector(170, 8, 284, 36)],
  ['tissue', null, 'M170 38 C214 40 262 108 264 178 C272 226 262 276 222 282 L128 276 C90 272 78 228 84 176 C90 126 126 46 170 38 Z'],
  ['cavity', 'lv', 'M184 58 C206 64 238 118 246 176 L192 180 C188 124 186 86 184 58 Z'],
  ['cavity', 'rv', 'M160 74 C140 92 106 138 100 170 L158 168 C162 132 162 102 160 74 Z'],
  ['tissue', 'septum', 'M160 74 C162 102 162 132 158 168 L192 180 C188 124 186 86 184 58 C176 56 166 62 160 74 Z'],
  ['cavity', 'la', 'M194 192 L248 190 C258 222 248 262 222 266 C198 266 188 232 194 192 Z'],
  ['cavity', 'ra', 'M100 182 L158 180 C162 216 156 254 130 258 C106 258 92 222 100 182 Z'],
  // orificios auriculoventriculares (la tricúspide se inserta algo más apical que la mitral)
  ['cavity', null, 'M191 174 L246 172 L249 194 L193 194 Z'],
  ['cavity', null, 'M100 166 L159 164 L159 184 L100 184 Z'],
  ['valve', 'mv', 'M193 184 L205 158 M247 183 L235 157'],
  ['valve', 'tv', 'M101 174 L113 150 M159 173 L149 148'],
];

const PLAX = [
  ['sector', null, sector(170, 8, 284, 36)],
  ['tissue', null, 'M60 58 C130 46 230 46 268 60 C300 72 324 90 326 120 L326 170 C326 232 304 262 254 264 L72 236 C30 226 26 74 60 58 Z'],
  ['cavity', 'rv', 'M70 72 C130 62 200 62 254 72 L254 94 C200 95 130 98 60 101 C56 88 60 78 70 72 Z'],
  ['tissue', 'septum', 'M60 104 C130 100 196 98 228 98 L228 112 C226 116 220 122 210 124 C180 124 120 126 62 130 C58 120 58 112 60 104 Z'],
  // VI con su tracto de salida hasta el anillo aórtico y el orificio mitral hacia la AI
  ['cavity', 'lv', 'M62 130 C120 126 180 124 210 124 C220 122 226 116 228 112 L228 160 L236 172 L236 210 C190 214 112 214 68 202 C40 192 40 142 62 130 Z'],
  ['cavity', 'ao', 'M228 112 C240 100 262 102 274 110 L320 108 L320 156 L274 158 C262 166 240 166 228 160 Z'],
  ['cavity', 'la', 'M236 172 C268 166 306 176 308 206 C312 240 276 254 250 248 C232 244 228 226 236 210 Z'],
  ['valve', 'av', 'M230 114 C242 122 252 130 258 136 M230 158 C242 150 252 142 258 136'],
  ['valve', 'mv', 'M230 162 L200 176 M236 210 L208 196'],
];

// PSAX a nivel de músculos papilares (vista desde el ápex: septo a la izquierda de la imagen)
const PSAX_C = [196, 156];
const PSAX = [
  ['tissue', null, 'M168 72.6 C92 54 36 112 38 156 C40 202 92 258 168 239.4 Z'],
  ['cavity', 'rv', 'M153.7 76.5 C98 66 54 116 56 156 C58 198 100 246 153.7 235.5 A90 90 0 0 1 153.7 76.5 Z'],
  ['tissue', 'ant', ring(...PSAX_C, 56, 88, 60, 120)],
  ['tissue', 'antsep', ring(...PSAX_C, 56, 88, 120, 180)],
  ['tissue', 'infsep', ring(...PSAX_C, 56, 88, 180, 240)],
  ['tissue', 'inf', ring(...PSAX_C, 56, 88, 240, 300)],
  ['tissue', 'inflat', ring(...PSAX_C, 56, 88, 300, 360)],
  ['tissue', 'antlat', ring(...PSAX_C, 56, 88, 0, 60)],
  ['cavity', null, `M${PSAX_C[0] - 56} ${PSAX_C[1]} A56 56 0 1 0 ${PSAX_C[0] + 56} ${PSAX_C[1]} A56 56 0 1 0 ${PSAX_C[0] - 56} ${PSAX_C[1]} Z`],
  // músculos papilares: anterolateral (~4 h) y posteromedial (~7-8 h)
  ['tissue', null, 'M234 170 C244 166 250 176 246 184 C240 192 228 188 228 180 C228 176 230 172 234 170 Z'],
  ['tissue', null, 'M166 186 C174 182 184 188 182 196 C180 204 168 204 164 198 C162 194 162 188 166 186 Z'],
];

// Ojo de buey (17 segmentos AHA): anterior arriba, septo a la izquierda, lateral a la derecha.
// Anillo externo = basal (6), medio = medio (6), interno = apical (4), centro = ápex (17).
const BE_C = [170, 150];
const SIX = [['ant', 60], ['antsep', 120], ['infsep', 180], ['inf', 240], ['inflat', 300], ['antlat', 0]];
const FOUR = [['ant', 45], ['sep', 135], ['inf', 225], ['lat', 315]];
const BULLSEYE = [
  ...SIX.map(([k, a]) => ['tissue', `b-${k}`, ring(...BE_C, 102, 136, a, a + 60)]),
  ...SIX.map(([k, a]) => ['tissue', `m-${k}`, ring(...BE_C, 66, 102, a, a + 60)]),
  ...FOUR.map(([k, a]) => ['tissue', `a-${k}`, ring(...BE_C, 30, 66, a, a + 90)]),
  ['tissue', 'apex', `M${BE_C[0] - 30} ${BE_C[1]} A30 30 0 1 0 ${BE_C[0] + 30} ${BE_C[1]} A30 30 0 1 0 ${BE_C[0] - 30} ${BE_C[1]} Z`],
];

// Sistema de conducción en un corte de 4 cámaras (frontal): AD arriba a la izquierda de la imagen.
const CONDUCTION = [
  ['heart', null, 'M96 52 C60 60 44 104 52 146 C58 196 92 250 150 290 C176 306 200 304 226 284 C278 240 304 186 300 132 C296 90 270 58 232 54 C206 50 186 62 170 74 C152 58 126 46 96 52 Z'],
  ['aorta', null, 'M88 20 L118 20 L118 62 L88 62 Z'], // vena cava superior
  ['cavity', null, 'M74 82 C90 66 128 66 152 84 L156 140 L80 142 C68 124 66 98 74 82 Z'], // AD
  ['cavity', null, 'M188 86 C210 70 254 70 274 92 C284 112 284 132 278 142 L188 140 Z'], // AI
  ['cavity', null, 'M80 156 L154 156 L156 260 C126 240 96 206 80 156 Z'], // VD
  ['cavity', null, 'M188 156 L280 156 C280 200 248 248 192 272 Z'], // VI
  ['vessel thin', 'internodal', 'M110 72 C118 96 130 120 150 142 M110 72 C140 74 170 78 196 90 M110 72 C112 104 126 128 150 142'],
  ['node', 'sa', 'M98 62 C108 56 122 60 124 70 C124 80 108 84 100 78 C94 74 94 66 98 62 Z'],
  ['node', 'av', 'M152 136 C160 130 174 134 174 142 C174 150 160 154 154 150 C148 146 148 140 152 136 Z'],
  ['vessel', 'his', 'M166 148 L170 168'],
  ['vessel', 'rb', 'M168 170 C164 200 158 234 150 264'],
  ['vessel', 'lb', 'M170 168 L182 184'],
  ['vessel thin', 'laf', 'M182 184 C204 184 236 176 262 170'],
  ['vessel thin', 'lpf', 'M182 184 C196 210 214 236 232 252'],
  ['vessel thin post', 'purkinje', 'M150 264 C162 280 178 284 192 272 M232 252 C244 236 262 214 270 190 M150 264 C128 246 108 222 94 194'],
];

export const DIAGRAMS = {
  coronary: {
    name: 'Árbol coronario (visión anterior)',
    viewBox: '0 0 340 320',
    parts: {
      lm: 'Tronco común izquierdo',
      lad: 'Descendente anterior',
      diag: 'Diagonal',
      cx: 'Circunfleja',
      om: 'Marginal obtusa',
      rca: 'Coronaria derecha',
      pda: 'Descendente posterior',
      am: 'Marginal aguda',
    },
    els: CORONARY,
  },
  a4c: {
    name: 'Ecocardiograma: apical 4 cámaras',
    viewBox: '0 0 340 300',
    parts: {
      lv: 'Ventrículo izquierdo',
      rv: 'Ventrículo derecho',
      la: 'Aurícula izquierda',
      ra: 'Aurícula derecha',
      mv: 'Válvula mitral',
      tv: 'Válvula tricúspide',
      septum: 'Septo interventricular',
    },
    els: A4C,
  },
  plax: {
    name: 'Ecocardiograma: paraesternal eje largo',
    viewBox: '0 0 340 300',
    parts: {
      rv: 'Ventrículo derecho (tracto de salida)',
      lv: 'Ventrículo izquierdo',
      la: 'Aurícula izquierda',
      ao: 'Raíz aórtica',
      mv: 'Válvula mitral',
      av: 'Válvula aórtica',
      septum: 'Septo interventricular',
    },
    els: PLAX,
  },
  psax: {
    name: 'Ecocardiograma: paraesternal eje corto (papilares)',
    viewBox: '0 0 320 300',
    parts: {
      ant: 'Segmento anterior medio',
      antsep: 'Segmento anteroseptal medio',
      infsep: 'Segmento inferoseptal medio',
      inf: 'Segmento inferior medio',
      inflat: 'Segmento inferolateral medio',
      antlat: 'Segmento anterolateral medio',
      rv: 'Ventrículo derecho',
    },
    els: PSAX,
  },
  bullseye: {
    name: 'Modelo de 17 segmentos (ojo de buey)',
    viewBox: '0 0 340 300',
    parts: {
      'b-ant': 'Segmento anterior basal',
      'b-antsep': 'Segmento anteroseptal basal',
      'b-infsep': 'Segmento inferoseptal basal',
      'b-inf': 'Segmento inferior basal',
      'b-inflat': 'Segmento inferolateral basal',
      'b-antlat': 'Segmento anterolateral basal',
      'm-ant': 'Segmento anterior medio',
      'm-antsep': 'Segmento anteroseptal medio',
      'm-infsep': 'Segmento inferoseptal medio',
      'm-inf': 'Segmento inferior medio',
      'm-inflat': 'Segmento inferolateral medio',
      'm-antlat': 'Segmento anterolateral medio',
      'a-ant': 'Segmento anterior apical',
      'a-sep': 'Segmento septal apical',
      'a-inf': 'Segmento inferior apical',
      'a-lat': 'Segmento lateral apical',
      apex: 'Ápex (segmento 17)',
    },
    els: BULLSEYE,
  },
  conduction: {
    name: 'Sistema de conducción',
    viewBox: '0 0 340 320',
    parts: {
      sa: 'Nodo sinusal',
      internodal: 'Vías internodales',
      av: 'Nodo auriculoventricular',
      his: 'Haz de His',
      rb: 'Rama derecha',
      lb: 'Rama izquierda (tronco)',
      laf: 'Fascículo anterior izquierdo',
      lpf: 'Fascículo posterior izquierdo',
      purkinje: 'Red de Purkinje',
    },
    els: CONDUCTION,
  },
};

export function renderDiagram(id, highlight) {
  const def = DIAGRAMS[id];
  if (!def) throw new Error(`Diagrama desconocido: ${id}`);
  const draw = ([cls, part, d]) => `<path class="${cls}${part && part === highlight ? ' hl' : ''}"${part ? ` data-part="${part}"` : ''} d="${d}"/>`;
  // el resaltado se dibuja encima para que no lo tape otra estructura
  const base = def.els.filter(([, p]) => !p || p !== highlight).map(draw).join('');
  const top = def.els.filter(([, p]) => p && p === highlight).map(draw).join('');
  return `<svg class="diagram diagram-${id}" viewBox="${def.viewBox}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Esquema anatómico">${base}${top}</svg>`;
}
