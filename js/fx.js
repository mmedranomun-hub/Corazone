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

// Vibración breve (móviles). Silenciosa si no hay API, con sonido apagado o movimiento reducido.
export function buzz(pattern = 30) {
  try {
    if (getState().sound === false || reduced()) return;
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') navigator.vibrate(pattern);
  } catch { /* sin vibración */ }
}

// --- Lógica pura de la lección (testeable) ---
// Precisión: aciertos sobre respuestas dadas (los reintentos cuentan), redondeada y en 0…100.
export function accuracy(correct, answered) {
  if (!answered || answered < 0) return 100;
  return Math.max(0, Math.min(100, Math.round((correct / answered) * 100)));
}

// Segundos → "m:ss" (o "h:mm:ss" si pasa de una hora).
export function fmtClock(s) {
  const t = Math.max(0, Math.round(Number(s) || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const ss = String(t % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}

// Combo visible a partir de 3 aciertos seguidos.
export const COMBO_MIN = 3;
export const comboLabel = (n) => (n >= COMBO_MIN ? `¡${n} seguidas!` : '');

// Titular del panel de feedback: elogio variado al acertar, frase de ánimo al fallar.
export const PRAISE = ['¡Genial!', '¡Así se hace!', '¡Excelente!', '¡Bien hecho!', '¡Perfecto!', '¡Correcto!', '¡Impresionante!'];
export const ENCOURAGE = ['¡Casi!', 'No pasa nada', '¡Uy! Casi lo tienes', 'Sigue intentándolo'];
export function feedbackTitle(ok, rnd = Math.random) {
  const list = ok ? PRAISE : ENCOURAGE;
  return list[Math.floor(rnd() * list.length) % list.length];
}

// Etiqueta de la tarjeta de tiempo/precisión en resultados (como Duolingo).
export const timeTag = (s) => (s < 60 ? 'VELOZ' : s < 120 ? 'RÁPIDO' : 'TIEMPO');
export const accTag = (a) => (a === 100 ? 'IMPRESIONANTE' : a >= 80 ? 'MUY BIEN' : 'PRECISIÓN');
