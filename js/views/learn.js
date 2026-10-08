// Pestaña Aprender: ruta de lecciones, selector de cursos y guía de unidad.
import { COURSES, courseById, lessonsOf } from '../data/courses.js';
import { getState, update, dueReviews, LEGENDARY_PRICE, openPathChest, pathChestSlot } from '../storage.js';
import { legendaryFree, searchLessons, fold } from '../game.js';
import { shell, esc, currentCourse, go, modal, emptyState, skeleton, scrollBehavior } from '../ui.js';
import { cora, sfx, flyGems, countUp } from '../fx.js';
import { buyLegendary } from './lessonFlow.js';
import { isPremium, isPremiumUnit } from '../premium.js';

export function lessonStatus(course) {
  const { completed, legendary = {} } = getState();
  const lessons = lessonsOf(course);
  const firstOpen = lessons.findIndex((l) => !completed[l.id]);
  const pro = isPremium();
  // paywall: lección de una unidad Premium sin plan activo (se ve en la ruta, pero abre la pantalla Premium)
  return lessons.map((l, i) => ({ ...l, stars: completed[l.id] || 0, legendary: !!(completed[l.id] && legendary[l.id]), state: completed[l.id] ? 'done' : i === firstOpen ? 'current' : 'locked', paywall: !pro && isPremiumUnit(course, l.unit) }));
}

export const progressOf = (course) => {
  const st = lessonStatus(course);
  return Math.round((st.filter((l) => l.state === 'done').length / st.length) * 100);
};

const OFFSETS = [0, 55, 85, 55, 0, -55, -85, -55];
const UNITS_PER_SECTION = 4;
// Mascota decorando la ruta en las unidades sin nodo actual (de vez en cuando, como en Duolingo).
const DECO_MOODS = ['think', 'happy', 'think'];

export function viewLearn(courseId) {
  const course = (courseId && courseById(courseId)) || currentCourse();
  if (course.id !== getState().course) update((s) => { s.course = course.id; });
  const status = lessonStatus(course);
  const reviews = dueReviews().length;
  let idx = 0;
  const units = course.units.map((u, ui) => {
    const unitLessons = status.filter((l) => l.unit.id === u.id);
    const unitDone = unitLessons.every((l) => l.state === 'done');
    const unitLocked = unitLessons.every((l) => l.state === 'locked');
    const hasCur = unitLessons.some((l) => l.state === 'current');
    const doneN = unitLessons.filter((l) => l.state === 'done').length;
    const slot = pathChestSlot(unitLessons.length);
    const chestId = `${u.id}#mid`;
    const decoAt = !hasCur && ui % 2 === 1 && unitLessons.length >= 3 ? 1 : -1;
    const nodes = unitLessons.map((l, li) => {
      const off = OFFSETS[idx++ % 8];
      const inner = l.paywall && l.state !== 'done' ? '💎' : l.state === 'locked' ? '🔒' : l.legendary ? '👑' : l.state === 'done' ? '✓' : l.unit.lessons.length - 1 === li ? '📋' : '★';
      const isCur = l.state === 'current';
      return `
        <div class="node-row" style="--x:${off}px">
          ${isCur ? '<div class="bubble">EMPEZAR</div>' : ''}
          ${isCur ? `<span class="node-ring" style="--p:${Math.round((doneN / unitLessons.length) * 100)}" aria-hidden="true"></span>` : ''}<button class="node ${l.state} ${l.legendary ? 'legendary' : ''}" data-lesson="${l.id}" aria-haspopup="dialog" aria-label="${esc(l.title)}: ${l.state === 'locked' ? 'bloqueada' : l.state === 'done' ? `completada, ${l.stars} de 3 estrellas${l.legendary ? ', legendaria' : ''}` : 'siguiente lección'}"><span aria-hidden="true">${inner}</span></button>
          ${l.state === 'done' ? `<div class="stars" aria-hidden="true">${'★'.repeat(l.stars)}${'☆'.repeat(3 - l.stars)}</div>` : ''}
          ${isCur ? `<div class="path-mascot" style="--side:${off >= 0 ? -1 : 1}">${cora('happy', 80)}</div>` : ''}
          ${li === decoAt ? `<div class="path-mascot deco" aria-hidden="true" style="--side:${off >= 0 ? -1 : 1}">${cora(DECO_MOODS[ui % 3], 72)}</div>` : ''}
        </div>${li === slot ? chestRow(chestId, l.state === 'done', (off + OFFSETS[idx % 8]) / 2) : ''}`;
    }).join('');
    return `
      <section class="unit ${hasCur ? 'is-current' : ''}">
        <div class="unit-head">
          <div><small>SECCIÓN ${Math.floor(ui / UNITS_PER_SECTION) + 1}, UNIDAD ${ui + 1}${unitLessons[0]?.paywall ? ' · <a class="pro-tag" href="#/premium">💎 PREMIUM</a>' : ''}</small><h2>${esc(u.title)}</h2></div>
          <a class="guide-btn" href="#/guia/${u.id}" title="Guía de la unidad" aria-label="Guía de la unidad ${ui + 1}: ${esc(u.title)}"><span aria-hidden="true">📖</span><span>GUÍA</span></a>
          ${unitLocked && !unitLessons[0]?.paywall ? `<a class="jump-btn" href="#/prueba/${u.id}">⏩ ¿Ya lo sabes? <b>Haz la prueba</b></a>` : ''}
        </div>
        <div class="path">${nodes}
          <div class="node-row" style="--x:0px">${unitDone
            ? `<a class="trophy won" href="#/repaso-unidad/${u.id}" title="Repaso de unidad" aria-label="Repaso de la unidad ${ui + 1}">🏆</a><small class="trophy-label">REPASO DE UNIDAD</small>`
            : '<div class="trophy" role="img" aria-label="Trofeo de unidad (sin conseguir)">🏆</div>'}</div>
        </div>
      </section>`;
  }).join('');
  shell(`
    <a class="search-chip" href="#/buscar" aria-label="Buscar lecciones y casos"><span aria-hidden="true">🔍</span> Busca una lección o un caso…</a>
    ${reviews ? `<a class="review-chip" href="#/practicar/errores">🔁 Tienes ${reviews} pregunta${reviews > 1 ? 's' : ''} para repasar</a>` : ''}
    <div class="course" style="--accent:${course.color}">${units}</div>
    <button class="jump-current" type="button" hidden aria-label="Volver a la lección actual"><span aria-hidden="true">↑</span></button>`, 'learn');

  document.querySelectorAll('.node').forEach((n) => n.addEventListener('click', () => openPopover(n, status.find((l) => l.id === n.dataset.lesson), status, course)));
  document.querySelectorAll('.path-chest.ready').forEach((c) => c.addEventListener('click', () => claimChest(c)));
  const cur = document.querySelector('.node.current');
  cur?.scrollIntoView({ block: 'center' });
  stickyOffset();
  jumpToCurrent(cur);
}

// Cofre entre nodos: bloqueado hasta completar la lección anterior; se abre una vez y da gemas.
function chestRow(id, unlocked, x) {
  const opened = !!getState().pathChests?.[id];
  const st = opened ? 'opened' : unlocked ? 'ready' : 'locked';
  const label = opened ? 'Cofre abierto' : unlocked ? 'Abrir cofre de gemas' : 'Cofre bloqueado: completa la lección anterior';
  return `<div class="node-row chest-row" style="--x:${x}px">${st === 'ready'
    ? `<button class="path-chest ready" type="button" data-chest="${esc(id)}" aria-label="${label}"><span aria-hidden="true">🎁</span></button>`
    : `<div class="path-chest ${st}" role="img" aria-label="${label}"><span aria-hidden="true">${opened ? '📦' : '🎁'}</span></div>`}</div>`;
}

function claimChest(btn) {
  const gems = openPathChest(btn.dataset.chest);
  btn.classList.remove('ready');
  btn.classList.add('opened');
  btn.disabled = true;
  btn.setAttribute('aria-label', 'Cofre abierto');
  btn.firstElementChild.textContent = '📦';
  if (!gems) return;
  sfx('Complete');
  const tag = document.createElement('span');
  tag.className = 'chest-gain';
  tag.setAttribute('role', 'status');
  tag.textContent = `+${gems} 💎`;
  btn.parentElement.appendChild(tag);
  const target = document.querySelector('[data-tb="gems"]');
  flyGems(btn, target, 6);
  if (target) countUp(target, getState().gems, { from: getState().gems - gems, dur: 800 });
}

// La cabecera de unidad se pega justo debajo de la barra superior (si ésta está encima de la ruta).
function stickyOffset() {
  const tb = document.querySelector('.app-shell > .topbar');
  const course = document.querySelector('.course');
  if (!tb || !course) return;
  const above = tb.getBoundingClientRect().right > course.getBoundingClientRect().left && getComputedStyle(tb).position === 'sticky';
  course.style.setProperty('--sticky-top', `${above ? tb.offsetHeight : 0}px`);
}

// Botón flotante para volver a la lección actual cuando sale de la pantalla.
function jumpToCurrent(cur) {
  const btn = document.querySelector('.jump-current');
  if (!btn || !cur || typeof IntersectionObserver !== 'function') return;
  const io = new IntersectionObserver(([e]) => {
    if (!document.body.contains(cur)) return io.disconnect();
    btn.hidden = e.isIntersecting;
    btn.classList.toggle('down', e.boundingClientRect.top > 0);
  });
  io.observe(cur);
  btn.addEventListener('click', () => { cur.scrollIntoView({ block: 'center', behavior: scrollBehavior() }); cur.focus({ preventScroll: true }); });
}

// Tarjeta emergente al tocar un nodo (como en Duolingo)
function openPopover(node, l, status, course) {
  document.querySelector('.popover')?.remove();
  const inUnit = status.filter((x) => x.unit.id === l.unit.id);
  const n = inUnit.indexOf(l) + 1;
  const pop = document.createElement('div');
  pop.className = `popover pop-in ${l.state} ${l.legendary ? 'legendary' : ''}`;
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-label', l.title);
  const free = l.state === 'done' && !l.legendary && legendaryFree();
  const canPay = free || getState().gems >= LEGENDARY_PRICE;
  // Nivel legendario: sólo en lecciones ya completadas (doradas)
  const legend = l.state !== 'done' ? '' : l.legendary
    ? '<p class="legend-note">👑 ¡Nivel legendario conseguido!</p>'
    : `<a class="btn legend ${canPay ? '' : 'off'}" ${canPay ? `href="#/legendario/${l.id}"` : 'aria-disabled="true"'}>👑 LEGENDARIO · ${free ? 'GRATIS' : `${LEGENDARY_PRICE} 💎`}</a>
       <small class="legend-hint">${free ? '¡Gratis por completar misiones hoy! ' : ''}Todas las preguntas, sin fallos · +40 XP</small>`;
  pop.innerHTML = l.paywall && l.state !== 'done'
    ? `<b>${esc(l.title)}</b><p>💎 Caso clínico Premium. Desbloquea todos los casos y las guardias.</p><a class="btn white" href="#/premium">VER PREMIUM</a>`
    : l.state === 'locked'
    ? `<b>${esc(l.title)}</b><p>Completa los niveles anteriores para desbloquear este</p><button class="btn" disabled>BLOQUEADO</button>`
    : `<b>${esc(l.title)}</b><p>Lección ${n} de ${inUnit.length}${l.case ? ' · Caso clínico' : ''}</p>
       <a class="btn ${l.state === 'done' ? 'gold' : 'white'}" href="#/leccion/${l.id}">${l.state === 'done' ? 'PRACTICAR +5 XP' : 'EMPEZAR +10 XP'}</a>${legend}`;
  node.parentElement.appendChild(pop);
  // Se cobra aquí, al pulsar; la ruta sólo consume el ticket emitido.
  pop.querySelector('.btn.legend:not(.off)')?.addEventListener('click', (e) => {
    if (!buyLegendary(l.id)) { e.preventDefault(); pop.remove(); }
  });
  const off = () => { pop.remove(); document.removeEventListener('click', close, true); document.removeEventListener('keydown', onKey); };
  const close = (e) => { if (!pop.contains(e.target) && !node.contains(e.target)) off(); };
  const onKey = (e) => { if (e.key === 'Escape') { off(); node.focus(); } };
  setTimeout(() => { document.addEventListener('click', close, true); document.addEventListener('keydown', onKey); });
  // Con teclado, el foco salta al botón principal de la tarjeta.
  if (node.matches(':focus-visible')) pop.querySelector('.btn:not([disabled])')?.focus();
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
  const t = setTimeout(() => skeleton('Cargando la guía…'), 150);
  const guides = await import('../data/guides.js').then((m) => m.default).catch(() => ({}));
  clearTimeout(t);
  if (!location.hash.startsWith(`#/guia/${unitId}`)) return;
  const g = guides[unitId] || unit.guide;
  const body = g
    ? `<p class="lead">${esc(g.intro)}</p>${g.sections.map((s) => `
        <section class="guide-sec"><h2>${esc(s.title)}</h2><ul>${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        ${s.tip ? `<div class="tip">${cora('think', 56)}<p>${esc(s.tip)}</p></div>` : ''}</section>`).join('')}`
    : emptyState({ mood: 'think', title: 'Guía en preparación', text: 'Cora está escribiendo los conceptos clave de esta unidad. ¡Mientras tanto, a practicar!' });
  shell(`
    <div class="guide" style="--accent:${course.color}">
      <a class="back" href="#/curso/${course.id}">← Volver</a>
      <small class="eyebrow">GUÍA · ${esc(course.subtitle)}</small>
      <h1>${esc(unit.title)}</h1>
      ${body}
      <a class="btn primary" href="#/curso/${course.id}">¡A practicar!</a>
    </div>`, 'learn');
}

// ---------- Buscador de lecciones y casos ----------
const SUGGESTIONS = ['Fibrilación', 'Bloqueo', 'Estenosis aórtica', 'Presiones', 'Taponamiento', 'Coronarias'];

// Resalta los términos buscados (comparando sin tildes ni mayúsculas).
function highlight(text, terms) {
  const t = String(text ?? '');
  const f = fold(t);
  if (f.length !== t.length || !terms.length) return esc(t);
  const marks = new Array(t.length).fill(false);
  for (const term of terms) for (let i = f.indexOf(term); i >= 0; i = f.indexOf(term, i + 1)) marks.fill(true, i, i + term.length);
  let out = '';
  let open = false;
  for (let i = 0; i < t.length; i++) {
    if (marks[i] !== open) { out += marks[i] ? '<mark>' : '</mark>'; open = marks[i]; }
    out += esc(t[i]);
  }
  return open ? `${out}</mark>` : out;
}

export function viewSearch(arg = '') {
  let query = '';
  try { query = decodeURIComponent(arg || ''); } catch { query = arg || ''; }
  const total = COURSES.reduce((a, c) => a + lessonsOf(c).length, 0);
  shell(`
    <h1 class="page-title">Buscar</h1>
    <form class="search-box" role="search">
      <label class="sr-only" for="q">Buscar lecciones, casos y unidades</label>
      <span aria-hidden="true">🔍</span>
      <input id="q" type="search" autocomplete="off" enterkeyhint="search" placeholder="Lección, caso o unidad…" value="${esc(query)}" />
    </form>
    <p class="sr-only" role="status" aria-live="polite" id="search-status"></p>
    <div class="search-results"></div>`, 'learn');
  const input = document.getElementById('q');
  const list = document.querySelector('.search-results');
  const status = document.getElementById('search-status');
  let results = [];

  const render = () => {
    query = input.value;
    history.replaceState(null, '', `#/buscar${query.trim() ? `/${encodeURIComponent(query.trim())}` : ''}`);
    const terms = fold(query).split(/\s+/).filter(Boolean);
    results = searchLessons(COURSES, query, getState().completed);
    if (!terms.length) {
      status.textContent = '';
      list.innerHTML = emptyState({ mood: 'think', title: '¿Qué quieres repasar?', text: `Busca entre ${total} lecciones y casos clínicos por título de lección, caso o unidad.`,
        action: `<div class="chips">${SUGGESTIONS.map((x) => `<button class="chip" type="button" data-s="${esc(x)}">${esc(x)}</button>`).join('')}</div>` });
      return;
    }
    status.textContent = results.length ? `${results.length} resultado${results.length > 1 ? 's' : ''}` : 'Sin resultados';
    if (!results.length) {
      list.innerHTML = emptyState({ mood: 'sad', title: 'No hemos encontrado nada', text: `Ninguna lección coincide con «${query.trim()}». Prueba con otra palabra o sin abreviaturas.` });
      return;
    }
    const BADGE = { done: ['✓', 'Completada'], current: ['★', 'Siguiente'], locked: ['🔒', 'Bloqueada'] };
    list.innerHTML = `<ul class="sr-list">${results.map((r, i) => `
      <li><button class="sr-item ${r.state}" data-r="${i}" style="--accent:${r.course.color}">
        <span class="sr-ico" aria-hidden="true">${r.course.icon}</span>
        <span class="sr-txt"><b>${highlight(r.lesson.title, terms)}</b>
          ${r.lesson.case?.title ? `<small class="sr-case">📋 ${highlight(r.lesson.case.title, terms)}</small>` : ''}
          <small>${esc(r.course.subtitle || r.course.title)} · Unidad ${r.unitIndex + 1}: ${highlight(r.unit.title, terms)}</small></span>
        <span class="sr-state" title="${BADGE[r.state][1]}"><span aria-hidden="true">${BADGE[r.state][0]}</span><span class="sr-only">${BADGE[r.state][1]}</span></span>
      </button></li>`).join('')}</ul>`;
  };

  list.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-s]');
    if (chip) { input.value = chip.dataset.s; render(); input.focus(); return; }
    const b = e.target.closest('[data-r]');
    if (!b) return;
    const r = results[Number(b.dataset.r)];
    if (!isPremium() && isPremiumUnit(r.course, r.unit)) return go('#/premium');
    if (r.state !== 'locked') return go(`#/leccion/${r.lesson.id}`);
    lockedInfo(r);
  });
  input.form.addEventListener('submit', (e) => e.preventDefault());
  input.addEventListener('input', render);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') list.querySelector('.sr-item')?.focus(); });
  render();
  if (!query) input.focus();
}

// Explica por qué una lección está bloqueada y ofrece el camino para llegar a ella.
function lockedInfo(r) {
  const where = `Unidad ${r.unitIndex + 1} de ${r.course.subtitle || r.course.title}`;
  modal(`
    ${cora('think', 96)}
    <h2>Lección bloqueada</h2>
    <p class="muted">«${esc(r.lesson.title)}» está en la ${esc(where)}. Las lecciones se desbloquean en orden${r.blocker ? `: antes tienes que completar <b>«${esc(r.blocker.title)}»</b>` : ''}.</p>
    ${r.blocker ? `<a class="btn primary" href="#/leccion/${r.blocker.id}" style="--accent:${r.course.color}">Ir a la siguiente lección</a>` : ''}
    ${r.unitLocked ? `<a class="btn ghost" href="#/prueba/${r.unit.id}">⏩ Haz la prueba de la unidad ${r.unitIndex + 1}</a><small class="muted">Si la apruebas, desbloqueas toda la unidad.</small>` : ''}
    <button class="btn ghost" data-close>Entendido</button>`);
}
