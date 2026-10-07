// Confeti con elementos DOM animados por CSS (estilos en css/fx.css).
// Se autoelimina en ~2,5 s. No hace nada con prefers-reduced-motion o sin DOM.

const COLORS = ['--confetti-1', '--confetti-2', '--confetti-3', '--confetti-4', '--confetti-5'];
const DURATION = 2500;

/**
 * Lanza confeti sobre `container` (por defecto toda la pantalla).
 * @returns {() => void} función para retirarlo antes de tiempo (no-op si no se lanzó).
 */
export function confetti(container = globalThis.document?.body, { count = 80 } = {}) {
  const doc = globalThis.document;
  if (!doc || !container) return () => {};
  try {
    if (globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return () => {};
  } catch { /* ignorar */ }

  const layer = doc.createElement('div');
  layer.className = 'confetti-layer' + (container === doc.body ? '' : ' in-container');
  layer.setAttribute('aria-hidden', 'true');
  if (container !== doc.body && getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }
  const h = container === doc.body ? globalThis.innerHeight : container.clientHeight;

  const frag = doc.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const p = doc.createElement('i');
    p.className = 'confetti-piece' + (Math.random() < 0.3 ? ' round' : '');
    const s = p.style;
    s.left = `${Math.random() * 100}%`;
    s.setProperty('--c', `var(${COLORS[i % COLORS.length]})`);
    s.setProperty('--dx', `${(Math.random() - 0.5) * 160}px`);
    s.setProperty('--dy', `${h * (0.75 + Math.random() * 0.35)}px`);
    s.setProperty('--rot', `${(Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540)}deg`);
    s.setProperty('--d', `${1.6 + Math.random() * 0.7}s`);
    s.setProperty('--delay', `${Math.random() * 0.25}s`);
    const scale = 0.7 + Math.random() * 0.6;
    s.width = `${9 * scale}px`;
    s.height = `${(p.classList.contains('round') ? 9 : 14) * scale}px`;
    frag.appendChild(p);
  }
  layer.appendChild(frag);
  container.appendChild(layer);

  const remove = () => { clearTimeout(timer); layer.remove(); };
  const timer = setTimeout(remove, DURATION);
  return remove;
}
