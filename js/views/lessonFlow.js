// Flujo de lección: arranque, sin vidas y secuencia de pantallas finales (como Duolingo).
import { findLesson } from '../data/courses.js';
import { getState, msToNextHeart, buy, PRICES, gainHeart, dayKey, xpOn } from '../storage.js';
import { runLesson } from '../lesson.js';
import { ACHIEVEMENTS, unlocked } from '../achievements.js';
import { todaysQuests, claimQuest } from '../game.js';
import { app, esc, go, screen, fmtTime } from '../ui.js';
import { cora, sfx, party } from '../fx.js';
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
  if (!found.lesson.practice && getState().hearts <= 0) return viewNoHearts(back);
  const before = unlocked(getState());
  const questsBefore = todaysQuests().filter((q) => q.done).map((q) => q.key);
  stop = runLesson(app, found, {
    onExit: (reason) => (reason === 'sin-vidas' ? viewNoHearts(back) : go(back)),
    onFinish: (r) => {
      if (found.lesson.practice && r.mistakes < r.total) gainHeart();
      const badges = ACHIEVEMENTS.filter((a) => unlocked(getState()).has(a.id) && !before.has(a.id));
      const newQuests = todaysQuests().filter((q) => q.done && !questsBefore.includes(q.key));
      const steps = [() => resultScreen(found, r, badges)];
      if (r.streakExtended) steps.push(() => streakScreen());
      if (newQuests.length) steps.push(() => questScreen(newQuests));
      runSteps(steps, back);
    },
  });
}

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
  const title = lesson.practice ? '¡Práctica completada!' : r.mistakes === 0 ? '¡Lección perfecta!' : '¡Lección completada!';
  screen(`
    ${cora('cheer', 150)}
    <h1 class="pop-in" style="color:#ffc800">${title}</h1>
    ${lesson.practice && r.mistakes < r.total ? '<p class="muted">+1 ❤️ recuperada por practicar</p>' : ''}
    <div class="stat-boxes">
      <div class="sb y"><small>XP TOTAL</small><b>⚡ ${r.xp}${r.boosted ? ' ×2' : ''}</b></div>
      <div class="sb b"><small>${r.seconds < 120 ? 'RÁPIDO' : 'TIEMPO'}</small><b>⏱ ${mmss(r.seconds)}</b></div>
      <div class="sb g"><small>${acc === 100 ? 'IMPRESIONANTE' : 'PRECISIÓN'}</small><b>🎯 ${acc}%</b></div>
    </div>
    ${r.bestCombo >= 5 ? `<p class="combo">🔥 Mejor combo: ${r.bestCombo} seguidas</p>` : ''}
    ${badges.map((a) => `<div class="badge-new pop-in">${a.icon} <b>¡Logro desbloqueado!</b> ${esc(a.name)}</div>`).join('')}
    <button class="btn primary" data-act="next" style="--accent:#58cc02">Continuar</button>`, 'result');
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

function questScreen(quests) {
  screen(`
    ${cora('cheer', 110)}
    <h1>¡Misión completada!</h1>
    <div class="quest-list">${quests.map((q) => `<div class="quest done"><span class="qi">${q.icon}</span><div><b>${esc(q.text)}</b><div class="bar small"><div class="bar-fill" style="width:100%"></div></div></div><span class="chest">🎁</span></div>`).join('')}</div>
    <button class="btn primary" data-act="claim" style="--accent:#1cb0f6">Reclamar ${quests.reduce((a, q) => a + q.reward, 0)} 💎</button>
    <button class="btn primary" data-act="next" hidden>Continuar</button>`, 'quests-done');
  app.querySelector('[data-act=claim]').onclick = (e) => {
    quests.forEach((q) => claimQuest(q.key));
    sfx('Complete');
    party();
    e.target.hidden = true;
    app.querySelector('[data-act=next]').hidden = false;
    app.querySelectorAll('.chest').forEach((c) => { c.textContent = '💎'; c.classList.add('pop-in'); });
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
