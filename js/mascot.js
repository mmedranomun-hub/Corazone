// Cora, la mascota de Corazone: un corazón anatómico-simpático en SVG plano.
// Puro (devuelve strings SVG, sin DOM) → testeable en Node. Colores vía tokens de css/fx.css.

export const MOODS = {
  happy: 'Cora sonríe',
  cheer: 'Cora celebra con los brazos arriba',
  sad: 'Cora está triste',
  think: 'Cora está pensando',
  fire: 'Cora está en racha',
  sleep: 'Cora duerme',
};

// Cuerpo: corazón regordete, ligeramente inclinado como el real (ápex a la izquierda del dibujo).
const BODY = 'M58 108 C40 100 18 84 15 63 C12 44 24 31 39 31 C48 31 55 36 60 42 C65 36 73 31 82 31 C98 31 108 45 105 63 C102 83 80 99 58 108 Z';
// Sombra inferior derecha (ventrículo) para dar volumen.
const SHADE = 'M105 63 C102 83 80 99 58 108 C70 96 90 82 96 60 C98 52 97 45 94 40 C101 45 106 53 105 63 Z';

// Vasos que salen por arriba, a modo de "pelo".
function vessels() {
  return `
  <g class="cora-vessels" stroke-linecap="round" fill="none">
    <path class="cora-vein-s" d="M86 42 V18" stroke-width="11"/>
    <ellipse class="cora-vein-end" cx="86" cy="17" rx="5.5" ry="2.6"/>
    <path class="cora-pulm-s" d="M68 40 C68 28 72 22 80 20" stroke-width="11"/>
    <ellipse class="cora-pulm-end" cx="81" cy="20" rx="2.6" ry="5.5"/>
    <path class="cora-aorta-s" d="M54 40 V22 C54 10 36 8 32 20 V26" stroke-width="12"/>
    <ellipse class="cora-aorta-end" cx="32" cy="27" rx="6" ry="2.8"/>
    <path class="cora-shine-s" d="M50 20 C48 15 42 14 39 17" stroke-width="2.5"/>
  </g>`;
}

function eyes(mood) {
  if (mood === 'cheer') {
    return `<g class="cora-line" fill="none" stroke-width="4" stroke-linecap="round">
      <path d="M33 62 Q40 53 47 62"/><path d="M71 62 Q78 53 85 62"/></g>`;
  }
  if (mood === 'sleep') {
    return `<g class="cora-line" fill="none" stroke-width="3.5" stroke-linecap="round">
      <path d="M33 61 Q40 67 47 61"/><path d="M71 61 Q78 67 85 61"/></g>`;
  }
  // Ojos abiertos: esclera blanca, pupila grande y brillo.
  const look = { think: [3, -4], sad: [0, 3], fire: [1, 0] }[mood] || [0, 0];
  const eye = (cx) => `
    <ellipse class="cora-eye" cx="${cx}" cy="60" rx="10" ry="11.5"/>
    <ellipse class="cora-pupil" cx="${cx + look[0]}" cy="${61 + look[1]}" rx="6" ry="7"/>
    <circle class="cora-glint" cx="${cx + look[0] + 2.2}" cy="${58 + look[1]}" r="2.4"/>
    <circle class="cora-glint" cx="${cx + look[0] - 2}" cy="${64 + look[1]}" r="1"/>`;
  let brows = '';
  if (mood === 'sad') brows = '<path d="M31 47 L46 43"/><path d="M89 47 L74 43"/>';
  if (mood === 'fire') brows = '<path d="M31 44 L46 49"/><path d="M89 44 L74 49"/>';
  if (mood === 'think') brows = '<path d="M31 46 Q38 41 46 45"/><path d="M73 43 Q80 39 88 42"/>';
  return eye(40) + eye(78) +
    (brows ? `<g class="cora-line" fill="none" stroke-width="3.2" stroke-linecap="round">${brows}</g>` : '');
}

function mouth(mood) {
  switch (mood) {
    case 'cheer':
      return `<path class="cora-mouth" d="M48 72 Q59 92 70 72 Z"/>
        <path class="cora-tongue" d="M53 81 Q59 77 65 81 Q63 87 59 87 Q55 87 53 81 Z"/>`;
    case 'sad':
      return '<path class="cora-line" d="M51 81 Q59 74 67 81" fill="none" stroke-width="3.5" stroke-linecap="round"/>';
    case 'think':
      return '<path class="cora-line" d="M53 79 Q60 76 66 80" fill="none" stroke-width="3.5" stroke-linecap="round"/>';
    case 'sleep':
      return '<ellipse class="cora-mouth" cx="59" cy="80" rx="3.5" ry="4"/>';
    case 'fire':
      return `<path class="cora-mouth" d="M49 74 Q59 87 69 74 Z"/>
        <path class="cora-teeth" d="M51 74.5 H67 Q66 77 64.5 78 H53.5 Q52 77 51 74.5 Z"/>`;
    default: // happy
      return `<path class="cora-mouth" d="M50 74 Q59 88 68 74 Z"/>
        <path class="cora-tongue" d="M54 80 Q59 77 64 80 Q62 84.5 59 84.5 Q56 84.5 54 80 Z"/>`;
  }
}

function arms(mood) {
  const arm = (d) => `<path class="cora-arm" d="${d}" fill="none" stroke-width="7" stroke-linecap="round"/>`;
  const hand = (x, y) => `<circle class="cora-hand" cx="${x}" cy="${y}" r="5"/>`;
  switch (mood) {
    case 'cheer':
      return arm('M18 64 Q8 52 6 38') + hand(6, 36) + arm('M102 64 Q112 52 114 38') + hand(114, 36);
    case 'think':
      // Brazo derecho relajado (el de la barbilla va delante del cuerpo, ver THINK_HAND).
      return arm('M102 70 Q110 78 109 88') + hand(109, 89);
    case 'sad':
    case 'sleep':
      return arm('M19 72 Q12 80 13 90') + hand(13, 91) + arm('M101 72 Q108 80 107 90') + hand(107, 91);
    case 'fire':
      // Puño arriba a la derecha.
      return arm('M18 70 Q9 78 10 88') + hand(10, 89) + arm('M102 62 Q112 54 112 42') + hand(112, 40);
    default:
      return arm('M18 68 Q8 72 6 82') + hand(6, 83) + arm('M102 68 Q112 72 114 82') + hand(114, 83);
  }
}

function extras(mood) {
  switch (mood) {
    case 'sad':
      return '<path class="cora-tear" d="M86 70 Q82 77 82 80 A4 4 0 0 0 90 80 Q90 77 86 70 Z"/>';
    case 'think':
      return `<g class="cora-bubble"><circle cx="100" cy="30" r="3"/><circle cx="107" cy="20" r="4.5"/><circle cx="114" cy="8" r="6"/></g>`;
    case 'sleep':
      return `<g class="cora-zz" font-family="Nunito, system-ui, sans-serif" font-weight="900">
        <text x="94" y="38" font-size="12">z</text><text x="103" y="25" font-size="16">Z</text></g>`;
    case 'cheer':
      return `<g class="cora-spark">
        <path d="M20 18 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z"/>
        <path d="M104 12 l1.5 4.5 4.5 1.5 -4.5 1.5 -1.5 4.5 -1.5 -4.5 -4.5 -1.5 4.5 -1.5 Z"/>
        <circle cx="12" cy="44" r="2"/><circle cx="110" cy="54" r="2"/></g>`;
    default:
      return '';
  }
}

// Mano en la barbilla (mood 'think'), dibujada delante del cuerpo.
const THINK_HAND = `<path class="cora-arm" d="M19 72 Q16 96 47 90" fill="none" stroke-width="6.5" stroke-linecap="round"/>
  <circle class="cora-hand" cx="51" cy="88" r="5.5"/>`;

// Llama detrás del cuerpo (mood 'fire').
const FLAME = `<g class="cora-flame"><g transform="translate(60 114) scale(1.32) translate(-60 -112)">
  <path class="cora-flame-out" d="M60 112 C26 112 14 86 22 62 C26 74 32 78 36 78 C30 58 38 34 56 20 C54 36 62 44 70 46 C70 36 76 28 82 24 C84 40 100 50 100 76 C100 98 84 112 60 112 Z"/>
  <path class="cora-flame-in" d="M60 112 C40 112 30 98 34 82 C38 90 44 92 46 92 C44 80 50 68 60 60 C60 72 70 76 74 72 C76 80 88 86 86 98 C84 108 74 112 60 112 Z"/>
</g></g>`;

/**
 * Devuelve el SVG de Cora.
 * @param {keyof MOODS} mood
 * @param {{size?: number, beat?: boolean, label?: string, className?: string}} opts
 */
export function mascot(mood = 'happy', { size = 120, beat = false, label, className = '' } = {}) {
  if (!(mood in MOODS)) mood = 'happy';
  const cls = ['cora', `cora-${mood}`, beat ? 'beat' : '', className].filter(Boolean).join(' ');
  const viewBox = mood === 'fire' ? '-8 -16 136 136' : '0 0 120 120';
  return `<svg class="${cls}" viewBox="${viewBox}" width="${size}" height="${size}" role="img" aria-label="${label || MOODS[mood]}" xmlns="http://www.w3.org/2000/svg">
  ${mood === 'fire' ? FLAME : ''}
  <g class="cora-figure">
    ${vessels()}
    ${arms(mood)}
    <path class="cora-body" d="${BODY}"/>
    <path class="cora-shade" d="${SHADE}"/>
    <path class="cora-groove" d="M66 44 C70 62 68 84 60 104" fill="none" stroke-width="2.5" stroke-linecap="round"/>
    <path class="cora-shine" d="M24 52 C25 42 32 37 39 37" fill="none" stroke-width="4.5" stroke-linecap="round"/>
    <ellipse class="cora-cheek" cx="30" cy="75" rx="7" ry="4.5"/>
    <ellipse class="cora-cheek" cx="88" cy="75" rx="7" ry="4.5"/>
    ${eyes(mood)}
    ${mouth(mood)}
    ${mood === 'think' ? THINK_HAND : ''}
  </g>
  ${extras(mood)}
</svg>`;
}
