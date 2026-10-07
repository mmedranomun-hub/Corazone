// Router por hash y vistas principales.
import { COURSES, courseById, lessonsOf, findLesson, questionByKey } from './data/courses.js';
import { RHYTHMS, renderEcg, TWELVE_LEAD, render12 } from './ecg.js';
import { ACHIEVEMENTS, unlocked } from './achievements.js';
import { getState, msToNextHeart, refillHearts, resetProgress, MAX_HEARTS, DAILY_GOAL, todayXp, dueReviews } from './storage.js';
import { runLesson } from './lesson.js';

const app = document.getElementById('app');
let stopLesson = null;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function lessonStatus(course) {
  const { completed } = getState();
  const lessons = lessonsOf(course);
  const firstOpen = lessons.findIndex((l) => !completed[l.id]);
  return lessons.map((l, i) => ({ ...l, stars: completed[l.id] || 0, state: completed[l.id] ? 'done' : i === firstOpen ? 'current' : 'locked' }));
}

const progressOf = (course) => {
  const st = lessonStatus(course);
  return Math.round((st.filter((l) => l.state === 'done').length / st.length) * 100);
};

function topbar() {
  const s = getState();
  return `
    <header class="topbar">
      <a href="#/" class="logo">Corazone</a>
      <div class="stats">
        <span title="Racha">🔥 ${s.streak}</span>
        <span title="XP">💎 ${s.xp}</span>
        <span title="Vidas">❤️ ${s.hearts}</span>
      </div>
    </header>`;
}

function bottomnav(active) {
  const item = (href, icon, label, key) => `<a href="${href}" class="${active === key ? 'active' : ''}"><span>${icon}</span>${label}</a>`;
  return `<nav class="bottomnav">${item('#/', '🏠', 'Aprender', 'home')}${item('#/atlas', '📈', 'Atlas', 'atlas')}${item('#/perfil', '👤', 'Perfil', 'perfil')}</nav>`;
}

function shell(content, active) {
  app.innerHTML = `${topbar()}<main class="page">${content}</main>${bottomnav(active)}`;
  window.scrollTo(0, 0);
}

function viewHome() {
  const cards = COURSES.map((c) => {
    const p = progressOf(c);
    return `
      <a class="course-card" href="#/curso/${c.id}" style="--accent:${c.color}">
        <div class="course-icon">${c.icon}</div>
        <div class="course-info">
          <h3>${esc(c.subtitle)}</h3>
          <div class="bar small"><div class="bar-fill" style="width:${p}%"></div></div>
          <small>${p}% completado</small>
        </div>
      </a>`;
  }).join('');
  shell(`
    <section class="hero">
      <h1>Aprende cardiología<br/>a sorbos de 3 minutos</h1>
      <p>ECG, ecocardiograma y cateterismo con lecciones cortas, vidas y rachas diarias.</p>
    </section>
    ${goalCard()}
    ${reviewCard()}
    <section class="courses">${cards}</section>`, 'home');
}

function goalCard() {
  const xp = todayXp();
  const pct = Math.min(100, Math.round((xp / DAILY_GOAL) * 100));
  return `
    <div class="goal-card" style="--accent:#ff9600">
      <div><b>${pct >= 100 ? '✅ ¡Objetivo diario cumplido!' : '🎯 Objetivo diario'}</b><small>${xp} / ${DAILY_GOAL} XP</small></div>
      <div class="bar small"><div class="bar-fill" style="width:${pct}%"></div></div>
    </div>`;
}

function reviewCard() {
  const n = dueReviews().length;
  if (!n) return '';
  return `<a class="review-card" href="#/repaso"><span>🔁</span><div><b>Repaso pendiente</b><small>${n} pregunta${n > 1 ? 's' : ''} que fallaste te esperan</small></div><span class="go">›</span></a>`;
}

function viewCourse(id) {
  const course = courseById(id);
  if (!course) return (location.hash = '#/');
  const status = lessonStatus(course);
  let idx = 0;
  const units = course.units.map((u, ui) => {
    const nodes = u.lessons.map(() => {
      const l = status[idx];
      const offset = [0, 60, 90, 60, 0, -60, -90, -60][idx++ % 8];
      const stars = l.state === 'done' ? `<div class="stars">${'★'.repeat(l.stars)}${'☆'.repeat(3 - l.stars)}</div>` : '';
      const inner = l.state === 'locked' ? '🔒' : l.state === 'done' ? '✓' : '★';
      const tag = l.state === 'locked' ? 'div' : 'a';
      return `
        <div class="node-row" style="transform:translateX(${offset}px)">
          ${l.state === 'current' ? '<div class="bubble">¡EMPIEZA!</div>' : ''}
          <${tag} class="node ${l.state}" ${tag === 'a' ? `href="#/leccion/${l.id}"` : ''} title="${esc(l.title)}">${inner}</${tag}>
          <div class="node-label">${esc(l.title)}</div>
          ${stars}
        </div>`;
    }).join('');
    return `
      <section class="unit">
        <div class="unit-head"><small>UNIDAD ${ui + 1}</small><h2>${esc(u.title)}</h2></div>
        <div class="path">${nodes}</div>
      </section>`;
  }).join('');
  const tabs = COURSES.map((c) => `<a href="#/curso/${c.id}" class="${c.id === id ? 'active' : ''}" style="--accent:${c.color}">${c.icon} ${esc(c.title)}</a>`).join('');
  shell(`<div class="tabs">${tabs}</div><div class="course" style="--accent:${course.color}">${units}</div>`, 'home');
  document.querySelector('.node.current')?.scrollIntoView({ block: 'center' });
}

function viewNoHearts(back) {
  const mins = Math.ceil(msToNextHeart() / 60000);
  app.innerHTML = `
    <div class="center-screen">
      <div class="big-emoji">💔</div>
      <h1>Te has quedado sin vidas</h1>
      <p>Recuperas una vida cada 30 minutos (próxima en ${mins} min).</p>
      <button class="btn primary" data-act="refill">Repasar el Atlas y recargar vidas</button>
      <a class="btn ghost" href="${back}">Volver</a>
    </div>`;
  app.querySelector('[data-act=refill]').onclick = () => { refillHearts(); location.hash = '#/atlas'; };
}

function startLesson(found, back) {
  if (getState().hearts <= 0) return viewNoHearts(back);
  const before = unlocked(getState());
  stopLesson = runLesson(app, found, {
    onExit: (reason) => (reason === 'sin-vidas' ? viewNoHearts(back) : (location.hash = back)),
    onFinish: ({ xp, stars, mistakes, total }) => {
      const fresh = ACHIEVEMENTS.filter((a) => unlocked(getState()).has(a.id) && !before.has(a.id));
      const badges = fresh.map((a) => `<div class="badge-new">${a.icon} <b>¡Logro!</b> ${esc(a.name)}</div>`).join('');
      app.innerHTML = `
        <div class="center-screen" style="--accent:${found.course.color}">
          <div class="big-emoji">${stars === 3 ? '🏆' : '🎉'}</div>
          <h1>${found.lesson.review ? '¡Repaso completado!' : '¡Lección completada!'}</h1>
          <div class="result-stars">${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
          <div class="result-grid">
            <div><b>+${xp}</b><small>XP</small></div>
            <div><b>${Math.round(((total - Math.min(mistakes, total)) / total) * 100)}%</b><small>Precisión</small></div>
            <div><b>🔥 ${getState().streak}</b><small>Racha</small></div>
          </div>
          ${badges}
          <a class="btn primary" href="${back}">Continuar</a>
        </div>`;
    },
  });
}

function viewLesson(id) {
  const found = findLesson(id);
  if (!found) return (location.hash = '#/');
  const back = `#/curso/${found.course.id}`;
  const st = lessonStatus(found.course).find((l) => l.id === id);
  if (st.state === 'locked') return (location.hash = back);
  startLesson(found, back);
}

function viewReview() {
  const questions = dueReviews().map(questionByKey).filter(Boolean).slice(0, 10).map((x) => x.question);
  if (!questions.length) return (location.hash = '#/');
  const course = { id: 'repaso', color: '#ff9600' };
  startLesson({ course, lesson: { id: 'repaso', title: 'Repaso', review: true, questions } }, '#/');
}

const ATLAS_TABS = {
  ritmos: { label: 'Ritmos', items: () => Object.entries(RHYTHMS).map(([id, r]) => ({ ...r, svg: renderEcg(id) })), note: 'Tiras de 6 s en derivación II · 25 mm/s · 10 mm/mV' },
  '12d': { label: '12 derivaciones', items: () => Object.entries(TWELVE_LEAD).map(([id, r]) => ({ ...r, svg: render12(id) })), note: 'Formato estándar 3×4 + tira de ritmo en II. Desliza para ver todo.' },
};

function viewAtlas(tab = 'ritmos') {
  const cur = ATLAS_TABS[tab] ? tab : 'ritmos';
  const tabs = Object.entries(ATLAS_TABS).map(([k, t]) => `<a href="#/atlas/${k}" class="${k === cur ? 'active' : ''}">${t.label}</a>`).join('');
  const items = ATLAS_TABS[cur].items().map((r) => `
    <article class="atlas-item">
      <h3>${esc(r.name)}</h3>
      <div class="ecg-wrap">${r.svg}</div>
      <p>${esc(r.desc)}</p>
    </article>`).join('');
  shell(`<h1 class="page-title">Atlas</h1><div class="tabs" style="--accent:#1cb0f6">${tabs}</div><p class="muted">${ATLAS_TABS[cur].note}</p>${items}`, 'atlas');
}

function viewPerfil() {
  const s = getState();
  const days = [...Array(7)].map((_, i) => {
    const d = new Date(Date.now() - (6 - i) * 864e5).toISOString().slice(0, 10);
    return { d, xp: s.xpByDay[d] || 0 };
  });
  const max = Math.max(30, ...days.map((d) => d.xp));
  const bars = days.map(({ d, xp }) => `<div class="day"><div class="col-bar" style="height:${(xp / max) * 100}%" title="${xp} XP"></div><small>${['D', 'L', 'M', 'X', 'J', 'V', 'S'][new Date(d).getUTCDay()]}</small></div>`).join('');
  const per = COURSES.map((c) => `<li style="--accent:${c.color}"><span>${c.icon} ${esc(c.subtitle)}</span><div class="bar small"><div class="bar-fill" style="width:${progressOf(c)}%"></div></div></li>`).join('');
  const got = unlocked(s);
  const badges = ACHIEVEMENTS.map((a) => `<div class="badge ${got.has(a.id) ? '' : 'off'}" title="${esc(a.desc)}"><span>${a.icon}</span><b>${esc(a.name)}</b><small>${esc(a.desc)}</small></div>`).join('');
  shell(`
    <h1 class="page-title">Tu progreso</h1>
    <div class="result-grid">
      <div><b>🔥 ${s.streak}</b><small>Días de racha</small></div>
      <div><b>💎 ${s.xp}</b><small>XP total</small></div>
      <div><b>❤️ ${s.hearts}/${MAX_HEARTS}</b><small>Vidas</small></div>
    </div>
    <p class="muted">Precisión global: ${s.answered ? Math.round((s.correct / s.answered) * 100) : 0}% · ${s.answered} respuestas · mejor racha ${s.bestStreak} días</p>
    <h2>XP últimos 7 días</h2>
    <div class="week">${bars}</div>
    <h2>Cursos</h2>
    <ul class="course-progress">${per}</ul>
    <h2>Logros</h2>
    <div class="badges">${badges}</div>
    <button class="btn ghost danger" data-act="reset">Reiniciar progreso</button>`, 'perfil');
  app.querySelector('[data-act=reset]').onclick = () => {
    if (confirm('¿Seguro que quieres borrar todo tu progreso?')) { resetProgress(); viewPerfil(); }
  };
}

function route() {
  stopLesson?.();
  stopLesson = null;
  const [, view, arg] = location.hash.replace(/^#/, '').split('/');
  if (view === 'curso') return viewCourse(arg);
  if (view === 'leccion') return viewLesson(arg);
  if (view === 'atlas') return viewAtlas(arg);
  if (view === 'repaso') return viewReview();
  if (view === 'perfil') return viewPerfil();
  return viewHome();
}

window.addEventListener('hashchange', route);
route();

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
