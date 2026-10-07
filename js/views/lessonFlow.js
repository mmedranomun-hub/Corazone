// Flujo de lección: arranque, sin vidas y secuencia de pantallas finales (como Duolingo).
import { COURSES, findLesson } from '../data/courses.js';
import { getState, msToNextHeart, buy, PRICES, gainHeart, dayKey, xpOn, passUnitTest, markLegendary, payLegendary, openDailyChest, LEGENDARY_XP, LEGENDARY_PRICE } from '../storage.js';
import { runLesson } from '../lesson.js';
import { ACHIEVEMENTS, unlocked } from '../achievements.js';
import { todaysQuests, claimQuest, legendaryFree } from '../game.js';
import { app, esc, go, screen, fmtTime } from '../ui.js';
import { cora, sfx, party, countUp, flyGems } from '../fx.js';
import { lessonStatus } from './learn.js';

let stop = null;
export const stopLesson = () => { stop?.(); stop = null; };

export function viewLesson(id) {
  const found = findLesson(id);
  if (!found) return go('#/');
  const back = `#/curso/${found.course.id}`;
  const st = lessonStatus(found.course).find((l) => l.id === id);
  if (st.state === 'locked') return go(back);
  startLesson(found, back);
}

export function startLesson(found, back) {
  const { lesson } = found;
  if (!lesson.practice && !lesson.lives && getState().hearts <= 0) return viewNoHearts(back);
  const before = unlocked(getState());
  const questsBefore = todaysQuests().filter((q) => q.done).map((q) => q.key);
  stop = runLesson(app, found, {
    onExit: (reason) => (reason === 'sin-vidas' ? viewNoHearts(back) : reason === 'fallo' ? failScreen(found, back) : go(back)),
    onFinish: (r) => {
      if (lesson.practice && r.mistakes < r.total) gainHeart();
      if (lesson.mode === 'unitTest') r.unlockedLessons = passUnitTest(lesson.unitLessons);
      if (lesson.mode === 'legendary') markLegendary(lesson.id);
      const chest = openDailyChest();
      const badges = ACHIEVEMENTS.filter((a) => unlocked(getState()).has(a.id) && !before.has(a.id));
      const newQuests = todaysQuests().filter((q) => q.done && !questsBefore.includes(q.key));
      const steps = [() => resultScreen(found, r, badges)];
      if (r.milestone) steps.push(() => milestoneScreen(r.milestone));
      else if (r.streakExtended) steps.push(() => streakScreen());
      if (chest) steps.push(() => chestScreen(chest));
      if (newQuests.length) steps.push(() => questScreen(newQuests));
      runSteps(steps, back);
    },
  });
}

const unitOf = (unitId) => {
  for (const course of COURSES) {
    const unit = course.units.find((u) => u.id === unitId);
    if (unit) return { course, unit };
  }
  return null;
};
const shuffled = (arr) => [...arr].sort(() => Math.random() - 0.5);
export const UNIT_TEST_SIZE = 8;
export const UNIT_TEST_LIVES = 3;

// Prueba de unidad ("salto" de Duolingo): 8 preguntas al azar y 3 vidas propias.
export function startUnitTest(unitId) {
  const f = unitOf(unitId);
  if (!f) return go('#/');
  const questions = shuffled(f.unit.lessons.flatMap((l) => l.questions)).slice(0, UNIT_TEST_SIZE);
  startLesson({ course: f.course, lesson: {
    id: `prueba-${unitId}`, title: `Prueba · ${f.unit.title}`, review: true, mode: 'unitTest', lives: UNIT_TEST_LIVES,
    unitLessons: f.unit.lessons.map((l) => l.id), questions,
  } }, `#/curso/${f.course.id}`);
}

// Repaso de unidad (trofeo): práctica sin gastar vidas con preguntas de esa unidad.
export function startUnitReview(unitId) {
  const f = unitOf(unitId);
  if (!f) return go('#/');
  const questions = shuffled(f.unit.lessons.flatMap((l) => l.questions)).slice(0, 10);
  startLesson({ course: f.course, lesson: { id: `repaso-${unitId}`, title: `Repaso · ${f.unit.title}`, review: true, practice: true, questions } }, `#/curso/${f.course.id}`);
}

// Nivel legendario: todas las preguntas de la lección, 1 vida. Se cobra al empezar.
export function startLegendary(lessonId) {
  const found = findLesson(lessonId);
  const back = found ? `#/curso/${found.course.id}` : '#/';
  if (!found || !getState().completed[lessonId]) return go(back);
  if (!payLegendary(legendaryFree())) return go(back);
  startLesson({ course: found.course, lesson: { ...found.lesson, mode: 'legendary', lives: 1, xp: LEGENDARY_XP } }, back);
}
export { LEGENDARY_PRICE };

function runSteps(steps, back) {
  const next = () => {
    const step = steps.shift();
    if (!step) return go(back);
    step();
    app.querySelector('[data-act=next]').onclick = next;
  };
  next();
}

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

function resultScreen({ course, lesson }, r, badges) {
  sfx('Complete');
  party();
  const acc = Math.round(((r.total - Math.min(r.mistakes, r.total)) / r.total) * 100);
  const title = lesson.mode === 'legendary' ? '¡Nivel legendario!' : lesson.mode === 'unitTest' ? '¡Prueba superada!' : lesson.practice ? '¡Práctica completada!' : r.mistakes === 0 ? '¡Lección perfecta!' : '¡Lección completada!';
  const color = lesson.mode === 'legendary' ? 'var(--purple)' : 'var(--gold)';
  screen(`
    ${cora('cheer', 150)}
    <h1 class="pop-in" style="color:${color}">${title}</h1>
    ${lesson.mode === 'legendary' ? '<p class="legend-tag pop-in">👑 Lección dominada al nivel legendario</p>' : ''}
    ${lesson.mode === 'unitTest' ? `<p class="muted">Has saltado ${r.unlockedLessons || 0} lecci${r.unlockedLessons === 1 ? 'ón' : 'ones'}. ¡Bien hecho!</p>` : ''}
    ${lesson.practice && r.mistakes < r.total ? '<p class="muted">+1 ❤️ recuperada por practicar</p>' : ''}
    <div class="stat-boxes">
      <div class="sb y"><small>XP TOTAL</small><b>⚡ <span data-count="xp">0</span>${r.boosted ? ' ×2' : ''}</b></div>
      <div class="sb b"><small>${r.seconds < 120 ? 'RÁPIDO' : 'TIEMPO'}</small><b>⏱ <span data-count="time">0:00</span></b></div>
      <div class="sb g"><small>${acc === 100 ? 'IMPRESIONANTE' : 'PRECISIÓN'}</small><b>🎯 <span data-count="acc">0</span>%</b></div>
    </div>
    ${r.bestCombo >= 5 ? `<p class="combo">🔥 Mejor combo: ${r.bestCombo} seguidas</p>` : ''}
    ${badges.map((a) => `<div class="badge-new pop-in">${a.icon} <b>¡Logro desbloqueado!</b> ${esc(a.name)}</div>`).join('')}
    <button class="btn primary" data-act="next" style="--accent:#58cc02">Continuar</button>`, 'result');
  const el = (k) => app.querySelector(`[data-count=${k}]`);
  // Los números suben uno tras otro, como en Duolingo
  countUp(el('xp'), r.xp, { dur: 800 });
  setTimeout(() => countUp(el('time'), r.seconds, { dur: 700, fmt: mmss }), 250);
  setTimeout(() => countUp(el('acc'), acc, { dur: 800 }), 500);
}

// La prueba de unidad o el nivel legendario se han quedado sin vidas.
function failScreen(found, back) {
  sfx('Wrong');
  const legend = found.lesson.mode === 'legendary';
  screen(`
    ${cora('sad', 130)}
    <h1>${legend ? '¡Casi legendario!' : '¡Casi lo consigues!'}</h1>
    <p class="muted">${legend ? 'En el nivel legendario no se permiten fallos. Repasa la lección y vuelve a intentarlo.' : 'Te has quedado sin vidas en la prueba. Puedes avanzar lección a lección o volver a intentarlo.'}</p>
    <a class="btn primary" href="${back}" style="--accent:#58cc02">Continuar</a>`);
}

export function weekRow() {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const s = getState();
  return `<div class="week-row">${['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d, i) => {
    const day = dayKey(new Date(monday.getTime() + i * 864e5));
    const cls = s.frozenDays.includes(day) ? 'frozen' : xpOn(day) > 0 ? 'on' : day === dayKey() ? 'today' : '';
    return `<div class="wd ${cls}"><small>${d}</small><span>${cls === 'on' ? '✓' : cls === 'frozen' ? '❄' : ''}</span></div>`;
  }).join('')}</div>`;
}

function streakScreen() {
  sfx('Streak');
  const n = getState().streak;
  screen(`
    <div class="flame pop-in">🔥</div>
    <div class="streak-num">${n}</div>
    <h1 style="color:#ff9600">${n === 1 ? '¡Has empezado una racha!' : `¡Racha de ${n} días!`}</h1>
    ${weekRow()}
    <p class="muted">${n === 1 ? 'Practica cada día para que tu racha crezca.' : '¡Sigue así! No rompas la cadena mañana.'}</p>
    <button class="btn primary" data-act="next" style="--accent:#ff9600">Continuar</button>`, 'streak');
}

// Hitos de racha (3, 7, 14, 30, 50, 100 días): celebración especial con Cora en llamas.
function milestoneScreen({ days, gems }) {
  sfx('Streak');
  party();
  screen(`
    ${cora('fire', 150)}
    <div class="streak-num pop-in">${days}</div>
    <h1 style="color:var(--orange)">¡${days} días de racha!</h1>
    ${weekRow()}
    <p class="muted">${days >= 30 ? '¡Constancia de cardiólogo! Tu corazón late al ritmo del estudio.' : '¡Hito alcanzado! Sigue practicando cada día.'}</p>
    <div class="reward-pill pop-in">🎁 Recompensa: <b>+<span data-count="gems">0</span> 💎</b></div>
    <button class="btn primary" data-act="next" style="--accent:var(--orange)">Continuar</button>`, 'streak milestone');
  setTimeout(() => countUp(app.querySelector('[data-count=gems]'), gems, { dur: 700 }), 300);
}

// Cofre de la meta diaria: se toca para abrirlo y revela entre 5 y 20 gemas.
function chestScreen(gems) {
  screen(`
    <h1>¡Meta diaria cumplida!</h1>
    <p class="muted">Has ganado un cofre. ¡Ábrelo!</p>
    <button class="chest-big wiggle" data-act="open" aria-label="Abrir cofre">🎁</button>
    <div class="reward-pill" hidden>💎 <b>+<span data-count="gems">0</span></b> gemas</div>
    <button class="btn primary" data-act="next" style="--accent:var(--blue)" hidden>Continuar</button>`, 'chest');
  const open = () => {
    const c = app.querySelector('[data-act=open]');
    if (c.classList.contains('opened')) return;
    sfx('Complete');
    party();
    c.classList.remove('wiggle');
    c.classList.add('opened', 'pop-in');
    c.textContent = '💎';
    const pill = app.querySelector('.reward-pill');
    pill.hidden = false;
    pill.classList.add('pop-in');
    countUp(pill.querySelector('[data-count]'), gems, { dur: 700 });
    app.querySelector('[data-act=next]').hidden = false;
  };
  app.querySelector('[data-act=open]').onclick = open;
}

function questScreen(quests) {
  screen(`
    ${cora('cheer', 110)}
    <h1>¡Misión completada!</h1>
    <div class="quest-list">${quests.map((q) => `<div class="quest done"><span class="qi">${q.icon}</span><div><b>${esc(q.text)}</b><div class="bar small"><div class="bar-fill" style="width:100%"></div></div></div><span class="chest">🎁</span></div>`).join('')}</div>
    <div class="gem-total">💎 <span>${getState().gems}</span></div>
    <button class="btn primary" data-act="claim" style="--accent:#1cb0f6">Reclamar ${quests.reduce((a, q) => a + q.reward, 0)} 💎</button>
    <button class="btn primary" data-act="next" hidden>Continuar</button>`, 'quests-done');
  app.querySelector('[data-act=claim]').onclick = async (e) => {
    const from = getState().gems;
    quests.forEach((q) => claimQuest(q.key));
    sfx('Complete');
    party();
    e.target.hidden = true;
    app.querySelectorAll('.chest').forEach((c) => { c.textContent = '💎'; c.classList.add('pop-in'); });
    const total = app.querySelector('.gem-total');
    await flyGems(app.querySelector('.quest-list'), total, 8);
    countUp(total.querySelector('span'), getState().gems, { from, dur: 600 });
    app.querySelector('[data-act=next]').hidden = false;
  };
}

export function viewNoHearts(back) {
  const s = getState();
  screen(`
    ${cora('sad', 130)}
    <h1>Te has quedado sin vidas</h1>
    <p class="muted">Recuperas una vida cada 30 min (siguiente en ${fmtTime(msToNextHeart())}).</p>
    <div class="hearts-row">${'🤍'.repeat(5)}</div>
    <button class="btn primary" data-act="buy" style="--accent:#1cb0f6" ${s.gems < PRICES.hearts ? 'disabled' : ''}>Recargar vidas · ${PRICES.hearts} 💎</button>
    <a class="btn primary" href="#/practicar/rapida" style="--accent:#58cc02">Practicar para ganar vidas</a>
    <a class="btn ghost" href="${back}">Ahora no</a>`);
  app.querySelector('[data-act=buy]').onclick = () => { if (buy('hearts')) { sfx('Complete'); go(back); } };
}
