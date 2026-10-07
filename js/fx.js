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
