// Utilidades de interfaz compartidas por las vistas.
import { getState, dayKey } from './storage.js';
import { courseById } from './data/courses.js';
import { unclaimedQuests } from './game.js';

export const app = document.getElementById('app');
export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const go = (hash) => { location.hash = hash; };
export const currentCourse = () => courseById(getState().course) || courseById('ecg');

export function topbar() {
  const s = getState();
  const c = currentCourse();
  return `
    <header class="topbar">
      <a href="#/cursos" class="tb-course" title="Cambiar de curso">${c.icon}</a>
      <a href="#/racha" class="tb-stat ${s.lastDay === dayKey() ? 'lit' : 'dim'}" title="Racha">🔥 ${s.streak}</a>
      <a href="#/tienda" class="tb-stat gem" title="Gemas">💎 ${s.gems}</a>
      <a href="#/tienda" class="tb-stat heart" title="Vidas">❤️ ${s.hearts}</a>
    </header>`;
}

const NAV = [
  ['#/', '🏠', 'Aprender', 'learn'],
  ['#/practicar', '🏋️', 'Practicar', 'practice'],
  ['#/ligas', '🏆', 'Ligas', 'leagues'],
  ['#/misiones', '🎯', 'Misiones', 'quests'],
  ['#/perfil', '👤', 'Perfil', 'profile'],
];

export function bottomnav(active) {
  const dot = unclaimedQuests() ? '<i class="dot"></i>' : '';
  return `<nav class="bottomnav">${NAV.map(([h, i, l, k]) => `<a href="${h}" class="${active === k ? 'active' : ''}"><span>${i}${k === 'quests' ? dot : ''}</span>${l}</a>`).join('')}</nav>`;
}

export function shell(content, active) {
  app.innerHTML = `${topbar()}<main class="page">${content}</main>${bottomnav(active)}`;
  window.scrollTo(0, 0);
}

// Pantalla completa sin barras (onboarding, resultados…)
export function screen(content, cls = '') {
  app.innerHTML = `<div class="center-screen ${cls}">${content}</div>`;
  window.scrollTo(0, 0);
}

export function modal(html) {
  const el = document.createElement('div');
  el.className = 'modal-back';
  el.innerHTML = `<div class="sheet slide-up">${html}</div>`;
  el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) el.remove(); });
  document.body.appendChild(el);
  return el;
}

export const fmtTime = (ms) => {
  const h = Math.floor(ms / 36e5);
  return h >= 24 ? `${Math.floor(h / 24)} d` : h >= 1 ? `${h} h` : `${Math.max(1, Math.ceil(ms / 6e4))} min`;
};

export function applyTheme() {
  const t = getState().theme;
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
  else delete document.documentElement.dataset.theme;
}
