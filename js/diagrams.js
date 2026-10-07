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
  ['heart', null, 'M118 96 C70 104 42 160 52 214 C62 262 120 296 196 302 C246 306 290 296 304 276 C318 236 312 160 284 118 C262 92 214 86 186 92 Z'],
  ['aorta', null, 'M150 8 L194 8 L194 76 C194 92 186 100 172 100 C158 100 150 92 150 76 Z'],
  ['vessel', 'rca', 'M156 86 C126 92 96 108 78 140 C60 172 62 214 84 244 C104 270 140 284 176 286'],
  ['vessel thin', 'am', 'M66 198 C92 214 118 228 150 238'],
  ['vessel thin', 'pda', 'M176 286 C206 290 238 292 278 286'],
  ['vessel', 'lm', 'M188 86 L214 100'],
  ['vessel', 'lad', 'M214 100 C222 150 240 222 290 278'],
  ['vessel thin', 'diag', 'M222 142 C238 160 254 172 276 182 M232 194 C246 208 262 216 284 222'],
  ['vessel', 'cx', 'M214 100 C246 98 280 110 296 148 C304 168 304 188 300 206'],
  ['vessel thin', 'om', 'M286 124 C292 146 292 168 286 198 M300 178 C300 196 298 214 294 236'],
];

const A4C = [
  ['sector', null, sector(170, 8, 284, 36)],
  ['tissue', null, 'M170 38 C214 40 262 108 264 178 C272 226 262 276 222 282 L128 276 C90 272 78 228 84 176 C90 126 126 46 170 38 Z'],
  ['cavity', 'lv', 'M184 58 C206 64 238 118 246 176 L192 180 C188 124 186 86 184 58 Z'],
  ['cavity', 'rv', 'M160 74 C140 92 106 138 100 170 L158 168 C162 132 162 102 160 74 Z'],
  ['tissue', 'septum', 'M160 74 C162 102 162 132 158 168 L192 180 C188 124 186 86 184 58 C176 56 166 62 160 74 Z'],
  ['cavity', 'la', 'M194 192 L248 190 C258 222 248 262 222 266 C198 266 188 232 194 192 Z'],
  ['cavity', 'ra', 'M100 182 L158 180 C162 216 156 254 130 258 C106 258 92 222 100 182 Z'],
  ['valve', 'mv', 'M194 186 L205 160 M246 184 L234 158'],
  ['valve', 'tv', 'M102 176 L114 152 M157 174 L148 149'],
];

const PLAX = [
  ['sector', null, sector(170, 8, 284, 36)],
  ['tissue', null, 'M56 56 C130 44 220 46 262 60 L316 92 L322 170 C322 230 300 262 250 262 L60 238 C26 226 22 76 56 56 Z'],
  ['cavity', 'rv', 'M66 66 C130 56 210 56 250 70 L248 92 C190 94 120 96 58 100 C54 86 58 72 66 66 Z'],
  ['tissue', 'septum', 'M58 104 C120 100 186 98 220 102 L220 120 C180 118 118 120 60 126 C56 118 56 110 58 104 Z'],
  ['cavity', 'lv', 'M60 132 C118 126 176 124 218 126 L220 202 C176 210 112 212 66 200 C40 190 38 144 60 132 Z'],
  ['cavity', 'ao', 'M226 104 C250 96 290 98 318 102 L318 158 C290 162 252 166 226 160 C232 142 232 122 226 104 Z'],
  ['cavity', 'la', 'M232 178 C262 170 300 176 306 206 C310 238 274 252 248 246 C224 240 218 204 232 178 Z'],
  ['valve', 'av', 'M230 108 L252 130 M230 157 L252 134'],
  ['valve', 'mv', 'M224 164 L190 176 M224 206 L198 194'],
];

// PSAX a nivel de músculos papilares (vista desde el ápex: septo a la izquierda de la imagen)
const PSAX_C = [196, 156];
const PSAX = [
  ['tissue', null, 'M118 90 C80 104 50 150 64 196 C74 228 104 244 126 236 C112 214 108 190 110 156 C112 124 120 104 140 92 C132 88 124 88 118 90 Z'],
  ['cavity', 'rv', 'M124 102 C96 116 76 150 82 188 C86 210 100 224 114 226 C104 206 100 180 102 156 C104 130 112 112 124 102 Z'],
  ['tissue', 'ant', ring(...PSAX_C, 56, 88, 60, 120)],
  ['tissue', 'antsep', ring(...PSAX_C, 56, 88, 120, 180)],
  ['tissue', 'infsep', ring(...PSAX_C, 56, 88, 180, 240)],
  ['tissue', 'inf', ring(...PSAX_C, 56, 88, 240, 300)],
  ['tissue', 'inflat', ring(...PSAX_C, 56, 88, 300, 360)],
  ['tissue', 'antlat', ring(...PSAX_C, 56, 88, 0, 60)],
  ['cavity', null, `M${PSAX_C[0] - 56} ${PSAX_C[1]} A56 56 0 1 0 ${PSAX_C[0] + 56} ${PSAX_C[1]} A56 56 0 1 0 ${PSAX_C[0] - 56} ${PSAX_C[1]} Z`],
  ['tissue', null, 'M234 176 C244 172 250 182 246 190 C240 198 228 194 228 186 C228 182 230 178 234 176 Z'],
  ['tissue', null, 'M176 196 C184 192 194 198 192 206 C190 214 178 214 174 208 C172 204 172 198 176 196 Z'],
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
