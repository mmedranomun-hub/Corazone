// Adaptador de efectos (mascota, sonido, confeti). Carga perezosa y tolerante a fallos.
import { getState } from './storage.js';

let M = null;
let S = null;
let C = null;

export async function loadFx() {
  [M, S, C] = await Promise.all(['./mascot.js', './sound.js', './confetti.js'].map((p) => import(p).catch(() => null)));
}

export const cora = (mood = 'happy', size = 120) => (M ? `<div class="cora-wrap">${M.mascot(mood, { size, beat: mood === 'happy' })}</div>` : `<div class="cora-wrap" style="font-size:${size * 0.6}px">🫀</div>`);

export function sfx(name) {
  if (getState().sound === false) return;
  try { S?.[`play${name}`]?.(); } catch { /* sin audio */ }
}

export function party() {
  try { C?.confetti(); } catch { /* sin animación */ }
}

const reduced = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

// Número que "sube" de from a to (pantalla de resultados, topbar, cofres).
export function countUp(el, to, { from = 0, dur = 900, fmt = (n) => n } = {}) {
  if (!el) return;
  if (reduced() || typeof requestAnimationFrame !== 'function' || from === to) { el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const step = (t) => {
    const k = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(Math.round(from + (to - from) * e));
    if (k < 1) requestAnimationFrame(step);
    else bump(el.closest('.tb-stat, .sb, .gem-total') || el);
  };
  el.textContent = fmt(from);
  requestAnimationFrame(step);
}

// Pequeño "salto" al cambiar un valor.
export function bump(el) {
  if (!el) return;
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

// Gemas que vuelan desde un elemento hacia otro (p. ej. el contador de la topbar).
export function flyGems(fromEl, toEl, n = 6) {
  if (!fromEl || reduced()) return Promise.resolve();
  const a = fromEl.getBoundingClientRect();
  const b = toEl ? toEl.getBoundingClientRect() : { left: innerWidth - 60, top: 10, width: 40, height: 30 };
  const dx = b.left + b.width / 2 - (a.left + a.width / 2);
  const dy = b.top + b.height / 2 - (a.top + a.height / 2);
  for (let i = 0; i < n; i++) {
    const g = document.createElement('span');
    g.className = 'fly-gem';
    g.textContent = '💎';
    g.style.cssText = `left:${a.left + a.width / 2}px;top:${a.top + a.height / 2}px;--dx:${dx}px;--dy:${dy}px;--sx:${(Math.random() - 0.5) * 80}px;--sy:${-20 - Math.random() * 50}px;animation-delay:${i * 60}ms`;
    document.body.appendChild(g);
    g.addEventListener('animationend', () => g.remove());
  }
  return new Promise((r) => setTimeout(r, 700 + n * 60));
}
