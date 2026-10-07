// Pestaña Aprender: ruta de lecciones, selector de cursos y guía de unidad.
import { COURSES, courseById, lessonsOf } from '../data/courses.js';
import { getState, update, dueReviews } from '../storage.js';
import { shell, esc, currentCourse, go } from '../ui.js';
import { cora } from '../fx.js';

export function lessonStatus(course) {
  const { completed } = getState();
  const lessons = lessonsOf(course);
  const firstOpen = lessons.findIndex((l) => !completed[l.id]);
  return lessons.map((l, i) => ({ ...l, stars: completed[l.id] || 0, state: completed[l.id] ? 'done' : i === firstOpen ? 'current' : 'locked' }));
}

export const progressOf = (course) => {
  const st = lessonStatus(course);
  return Math.round((st.filter((l) => l.state === 'done').length / st.length) * 100);
};

const OFFSETS = [0, 55, 85, 55, 0, -55, -85, -55];

export function viewLearn(courseId) {
  const course = (courseId && courseById(courseId)) || currentCourse();
  if (course.id !== getState().course) update((s) => { s.course = course.id; });
  const status = lessonStatus(course);
  const reviews = dueReviews().length;
  let idx = 0;
  const units = course.units.map((u, ui) => {
    const unitLessons = status.filter((l) => l.unit.id === u.id);
    const unitDone = unitLessons.every((l) => l.state === 'done');
    const nodes = unitLessons.map((l, li) => {
      const off = OFFSETS[idx++ % 8];
      const inner = l.state === 'locked' ? '🔒' : l.state === 'done' ? '✓' : l.unit.lessons.length - 1 === li ? '📋' : '★';
      const isCur = l.state === 'current';
      return `
        <div class="node-row" style="--x:${off}px">
          ${isCur ? '<div class="bubble">EMPEZAR</div>' : ''}
          <button class="node ${l.state}" data-lesson="${l.id}" aria-label="${esc(l.title)}">${inner}</button>
          ${l.state === 'done' ? `<div class="stars">${'★'.repeat(l.stars)}${'☆'.repeat(3 - l.stars)}</div>` : ''}
          ${isCur ? `<div class="path-mascot" style="--side:${off >= 0 ? -1 : 1}">${cora('happy', 80)}</div>` : ''}
        </div>`;
    }).join('');
    return `
      <section class="unit">
        <div class="unit-head">
          <div><small>UNIDAD ${ui + 1}</small><h2>${esc(u.title)}</h2></div>
          <a class="guide-btn" href="#/guia/${u.id}" title="Guía de la unidad">📖<span>GUÍA</span></a>
        </div>
        <div class="path">${nodes}
          <div class="node-row" style="--x:0px"><div class="trophy ${unitDone ? 'won' : ''}">🏆</div></div>
        </div>
      </section>`;
  }).join('');
  shell(`
    ${reviews ? `<a class="review-chip" href="#/practicar/errores">🔁 Tienes ${reviews} pregunta${reviews > 1 ? 's' : ''} para repasar</a>` : ''}
    <div class="course" style="--accent:${course.color}">${units}</div>`, 'learn');

  document.querySelectorAll('.node').forEach((n) => n.addEventListener('click', () => openPopover(n, status.find((l) => l.id === n.dataset.lesson), status, course)));
  document.querySelector('.node.current')?.scrollIntoView({ block: 'center' });
}

// Tarjeta emergente al tocar un nodo (como en Duolingo)
function openPopover(node, l, status, course) {
  document.querySelector('.popover')?.remove();
  const inUnit = status.filter((x) => x.unit.id === l.unit.id);
  const n = inUnit.indexOf(l) + 1;
  const pop = document.createElement('div');
  pop.className = `popover pop-in ${l.state}`;
  pop.innerHTML = l.state === 'locked'
    ? `<b>${esc(l.title)}</b><p>Completa los niveles anteriores para desbloquear este</p><button class="btn" disabled>BLOQUEADO</button>`
    : `<b>${esc(l.title)}</b><p>Lección ${n} de ${inUnit.length}${l.case ? ' · Caso clínico' : ''}</p>
       <a class="btn ${l.state === 'done' ? 'gold' : 'white'}" href="#/leccion/${l.id}">${l.state === 'done' ? 'PRACTICAR +5 XP' : 'EMPEZAR +10 XP'}</a>`;
  node.parentElement.appendChild(pop);
  const close = (e) => { if (!pop.contains(e.target) && e.target !== node) { pop.remove(); document.removeEventListener('click', close, true); } };
  setTimeout(() => document.addEventListener('click', close, true));
}

export function viewCourses() {
  const cards = COURSES.map((c) => {
    const p = progressOf(c);
    return `
      <a class="course-card ${c.id === currentCourse().id ? 'sel' : ''}" href="#/curso/${c.id}" style="--accent:${c.color}">
        <div class="course-icon">${c.icon}</div>
        <div class="course-info">
          <h3>${esc(c.subtitle)}</h3>
          <div class="bar small"><div class="bar-fill" style="width:${p}%"></div></div>
          <small>${p}% completado · ${lessonsOf(c).length} lecciones</small>
        </div>
      </a>`;
  }).join('');
  shell(`<h1 class="page-title">Mis cursos</h1><section class="courses">${cards}</section>`, 'learn');
}

export async function viewGuide(unitId) {
  const course = COURSES.find((c) => c.units.some((u) => u.id === unitId));
  if (!course) return go('#/');
  const unit = course.units.find((u) => u.id === unitId);
  const guides = await import('../data/guides.js').then((m) => m.default).catch(() => ({}));
  const g = guides[unitId] || unit.guide;
  const body = g
    ? `<p class="lead">${esc(g.intro)}</p>${g.sections.map((s) => `
        <section class="guide-sec"><h2>${esc(s.title)}</h2><ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        ${s.tip ? `<div class="tip">${cora('think', 56)}<p>${esc(s.tip)}</p></div>` : ''}</section>`).join('')}`
    : '<p class="muted">Guía en preparación.</p>';
  shell(`
    <div class="guide" style="--accent:${course.color}">
      <a class="back" href="#/curso/${course.id}">← Volver</a>
      <small class="eyebrow">GUÍA · ${esc(course.subtitle)}</small>
      <h1>${esc(unit.title)}</h1>
      ${body}
      <a class="btn primary" href="#/curso/${course.id}">¡A practicar!</a>
    </div>`, 'learn');
}
