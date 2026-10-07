// Arcade: Contrarreloj (emparejar contra el reloj, como "Match Madness") y Guardias
// (historias interactivas de chat, como las "Historias" de Duolingo).
import { COURSES, lessonsOf } from '../data/courses.js';
import { GUARDIAS, CHARACTERS, guardiaById } from '../data/guardias.js';
import { getState, completeLesson, recordAnswer, saveTimedRecord, markStory, boostActive } from '../storage.js';
import { TIMED_SECONDS, TIMED_BONUS_SECONDS, timedMultiplier, timedPoints, timedXp, buildTimedPool, storyXp } from '../game.js';
import { app, esc, go, screen, shell } from '../ui.js';
import { cora, sfx, party, countUp, bump } from '../fx.js';
import { visualFor } from '../visuals.js';

let stopFn = null;
export const stopArcade = () => { stopFn?.(); stopFn = null; };

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ===================== Contrarreloj =====================
const BOARD = 5; // pares visibles a la vez
const MC_EVERY = 5; // pregunta relámpago cada N parejas

function timedPool() {
  const { completed } = getState();
  const done = COURSES.flatMap((c) => lessonsOf(c).filter((l) => completed[l.id]).flatMap((l) => l.questions));
  let pool = buildTimedPool(done);
  // Pocos contenidos completados: se completa con el primer curso.
  if (pool.pairs.length < 12) {
    const first = buildTimedPool([...done, ...lessonsOf(COURSES[0]).flatMap((l) => l.questions)]);
    pool = first;
  }
  return pool;
}

export function viewTimed() {
  const best = getState().records?.timed || 0;
  screen(`
    <a class="arc-close" href="#/practicar" aria-label="Salir">✕</a>
    <div class="arc-badge pop-in">⏱️</div>
    <h1>Contrarreloj</h1>
    <p class="muted">Empareja todo lo que puedas en ${TIMED_SECONDS} segundos. Encadena aciertos para multiplicar los puntos.</p>
    <div class="arc-mults"><span>×1</span><span>3 seguidas ×2</span><span>6 ×3</span><span>10 ×4</span></div>
    <div class="arc-record">🏆 Récord personal: <b>${best}</b></div>
    <button class="btn primary" data-act="start" style="--accent:var(--orange)">Empezar</button>`, 'arcade');
  app.querySelector('[data-act=start]').onclick = () => { sfx('Tap'); runTimed(); };
}

function runTimed() {
  const pool = timedPool();
  let pairs = shuffle(pool.pairs);
  let mcs = shuffle(pool.mcs);
  let score = 0;
  let combo = 0;
  let bestCombo = 0;
  let matches = 0;
  let mistakes = 0;
  let mcDone = 0;
  let timeLeft = TIMED_SECONDS * 1000;
  let last = performance.now();
  let raf = 0;
  let over = false;
  let pick = null; // { side, slot }
  const started = Date.now();

  app.innerHTML = `
    <div class="arcade timed">
      <header class="arc-top">
        <a class="arc-x" href="#/practicar" aria-label="Salir">✕</a>
        <div class="bar arc-time"><div class="bar-fill"></div></div>
        <b class="arc-secs">${TIMED_SECONDS}</b>
      </header>
      <div class="arc-hud">
        <div class="arc-score">⚡ <span>0</span></div>
        <div class="arc-mult m1">×1</div>
        <div class="arc-combo"></div>
      </div>
      <main class="arc-board"></main>
    </div>`;
  const $ = (s) => app.querySelector(s);
  const board = $('.arc-board');

  // Siguiente par cuyas etiquetas no choquen con las ya visibles
  const nextPair = (visible) => {
    const ls = new Set(visible.map((p) => p?.l));
    const rs = new Set(visible.map((p) => p?.r));
    const i = pairs.findIndex((p) => !ls.has(p.l) && !rs.has(p.r));
    if (i < 0) return null;
    const [p] = pairs.splice(i, 1);
    pairs.push(p); // reciclar al final: el juego no se queda sin pares
    return p;
  };
  // Ranuras: izquierda y derecha con órdenes independientes
  const left = [];
  for (let i = 0; i < BOARD; i++) left.push(nextPair(left));
  const right = shuffle(left);

  const drawBoard = () => {
    const btn = (p, side, slot) => (p
      ? `<button class="choice arc-tile" data-side="${side}" data-slot="${slot}">${esc(side === 'l' ? p.l : p.r)}</button>`
      : '<span class="arc-tile empty"></span>');
    board.innerHTML = `<div class="match arc-match"><div class="col">${left.map((p, i) => btn(p, 'l', i)).join('')}</div><div class="col">${right.map((p, i) => btn(p, 'r', i)).join('')}</div></div>`;
  };

  const hud = (gain) => {
    const mult = timedMultiplier(combo);
    const m = $('.arc-mult');
    if (m.textContent !== `×${mult}`) { m.className = `arc-mult m${mult}`; m.textContent = `×${mult}`; bump(m); }
    $('.arc-combo').textContent = combo >= 2 ? `🔥 ${combo}` : '';
    $('.arc-score span').textContent = score;
    if (gain) {
      const f = document.createElement('span');
      f.className = 'arc-float';
      f.textContent = `+${gain}`;
      $('.arc-hud').appendChild(f);
      setTimeout(() => f.remove(), 700);
    }
  };

  const good = (kind, key) => {
    const prevMult = timedMultiplier(combo);
    combo++;
    bestCombo = Math.max(bestCombo, combo);
    const gain = timedPoints(combo, kind);
    score += gain;
    recordAnswer(key || null, true, { type: kind, combo });
    sfx(timedMultiplier(combo) > prevMult ? 'Streak' : 'Correct');
    hud(gain);
  };
  const bad = (key) => {
    combo = 0;
    mistakes++;
    recordAnswer(key || null, false, { type: 'match' });
    sfx('Wrong');
    hud();
  };

  function onTile(b) {
    if (over) return;
    const side = b.dataset.side;
    const slot = Number(b.dataset.slot);
    if (!pick || pick.side === side) {
      board.querySelectorAll('.arc-tile.selected').forEach((x) => x.classList.remove('selected'));
      b.classList.add('selected');
      pick = { side, slot };
      sfx('Tap');
      return;
    }
    const li = side === 'l' ? slot : pick.slot;
    const ri = side === 'r' ? slot : pick.slot;
    const lb = board.querySelector(`[data-side=l][data-slot="${li}"]`);
    const rb = board.querySelector(`[data-side=r][data-slot="${ri}"]`);
    pick = null;
    lb.classList.remove('selected');
    rb.classList.remove('selected');
    if (left[li] && right[ri] && left[li].l === right[ri].l && left[li].r === right[ri].r) {
      good('match');
      matches++;
      [lb, rb].forEach((x) => { x.classList.add('right'); x.disabled = true; });
      setTimeout(() => {
        if (over) return;
        const visible = [...left.filter((_, i) => i !== li)];
        const np = nextPair(visible);
        left[li] = np;
        right[ri] = np;
        if (matches % MC_EVERY === 0 && mcs.length) showMc();
        else drawBoard();
      }, 220);
    } else {
      bad();
      [lb, rb].forEach((x) => { x.classList.add('wrong', 'shake'); setTimeout(() => x.classList.remove('wrong', 'shake'), 420); });
    }
  }

  // Pregunta relámpago: un toque, sin botón de comprobar
  function showMc() {
    const q = mcs[mcDone++ % mcs.length];
    const opts = shuffle(q.options.map((label, i) => ({ label, ok: i === q.answer })));
    board.innerHTML = `
      <div class="arc-flash pop-in">
        <small>⚡ PREGUNTA RELÁMPAGO · +${TIMED_BONUS_SECONDS} s si aciertas</small>
        <h2>${esc(q.prompt)}</h2>
        <div class="choices">${opts.map((o, i) => `<button class="choice" data-o="${i}">${esc(o.label)}</button>`).join('')}</div>
      </div>`;
    board.querySelectorAll('[data-o]').forEach((b) => {
      b.onclick = () => {
        if (over) return;
        const o = opts[Number(b.dataset.o)];
        board.querySelectorAll('[data-o]').forEach((x) => { x.disabled = true; if (opts[Number(x.dataset.o)].ok) x.classList.add('right'); });
        if (o.ok) { good('mc', q.key); timeLeft += TIMED_BONUS_SECONDS * 1000; } else { b.classList.add('wrong', 'shake'); bad(q.key); }
        setTimeout(() => { if (!over) drawBoard(); }, o.ok ? 350 : 900);
      };
    });
  }

  board.addEventListener('click', (e) => {
    const b = e.target.closest('.arc-tile:not(.empty)');
    if (b && !b.disabled) onTile(b);
  });

  const tick = (t) => {
    timeLeft -= t - last;
    last = t;
    const k = Math.max(0, timeLeft) / (TIMED_SECONDS * 1000);
    const fill = $('.arc-time .bar-fill');
    if (!fill) return;
    fill.style.width = `${Math.min(100, k * 100)}%`;
    fill.classList.toggle('low', timeLeft < 10000);
    $('.arc-secs').textContent = Math.max(0, Math.ceil(timeLeft / 1000));
    if (timeLeft <= 0) return finish();
    raf = requestAnimationFrame(tick);
  };

  function finish() {
    over = true;
    cancelAnimationFrame(raf);
    stopFn = null;
    const rec = saveTimedRecord(score);
    const base = timedXp(score);
    const xp = boostActive() ? base * 2 : base;
    let streak = null;
    if (xp > 0) {
      streak = completeLesson('contrarreloj', { xp, stars: mistakes === 0 ? 3 : 1, review: true, minutes: (Date.now() - started) / 60000 });
    }
    timedResult({ score, xp, rec, bestCombo, matches, streak });
  }

  stopFn = () => { over = true; cancelAnimationFrame(raf); };
  drawBoard();
  hud();
  raf = requestAnimationFrame((t) => { last = t; tick(t); });
}

function timedResult({ score, xp, rec, bestCombo, matches, streak }) {
  sfx('Complete');
  screen(`
    ${cora(rec.isNew ? 'cheer' : score ? 'happy' : 'sad', 130)}
    <h1 class="pop-in" style="color:var(--orange)">¡Tiempo!</h1>
    ${rec.isNew && score ? '<div class="arc-newrec pop-in">🏆 ¡Nuevo récord personal!</div>' : ''}
    <div class="arc-final"><span data-count="score">0</span><small>puntos</small></div>
    <div class="stat-boxes">
      <div class="sb y"><small>XP</small><b>⚡ ${xp}</b></div>
      <div class="sb b"><small>RÉCORD</small><b>🏆 ${rec.best}</b></div>
      <div class="sb g"><small>COMBO</small><b>🔥 ${bestCombo}</b></div>
    </div>
    <p class="muted">${matches} pareja${matches === 1 ? '' : 's'}${streak?.streakExtended ? ' · 🔥 ¡Racha ampliada!' : ''}</p>
    <button class="btn primary" data-act="again" style="--accent:var(--orange)">Otra vez</button>
    <a class="btn ghost" href="#/practicar">Continuar</a>`, 'result arcade');
  countUp(app.querySelector('[data-count=score]'), score, { dur: 900 });
  if (rec.isNew && score) setTimeout(party, 300);
  app.querySelector('[data-act=again]').onclick = () => { sfx('Tap'); runTimed(); };
}

// ===================== Guardias =====================
const charOf = (story, who) => (who === 'patient' ? { ...story.patient, color: 'var(--orange)' } : CHARACTERS[who] || CHARACTERS.narrator);
const isQuestion = (s) => s.type === 'mc';

export function viewGuardias() {
  const { stories = {} } = getState();
  const n = GUARDIAS.filter((g) => stories[g.id]).length;
  const cards = GUARDIAS.map((g) => {
    const done = !!stories[g.id];
    const faces = ['r1', 'adj', 'nurse'].map((k) => CHARACTERS[k].emoji).concat(g.patient.emoji);
    return `
      <a class="story-card ${done ? 'done' : ''}" href="#/guardia/${g.id}" style="--accent:${g.color}">
        <div class="story-cover"><span>${g.emoji}</span>${done ? '<i class="story-check">✓</i>' : ''}</div>
        <b>${esc(g.title)}</b>
        <small>🕒 ${esc(g.time)} · ${esc(g.place)}</small>
        <div class="story-faces">${faces.map((f) => `<span>${f}</span>`).join('')}</div>
        <em class="story-state">${done ? 'Completada' : 'Nueva'}</em>
      </a>`;
  }).join('');
  shell(`
    <a class="back" href="#/practicar">← Práctica</a>
    <div class="hub-head">${cora('think', 80)}<div><h1>Guardias</h1><p class="muted">Historias de una noche de guardia. Lee, decide y aprende. ${n}/${GUARDIAS.length} completadas.</p></div></div>
    <div class="story-grid">${cards}</div>`, 'practice');
}

export function viewGuardia(id) {
  const story = guardiaById(id);
  if (!story) return go('#/guardias');
  const steps = story.steps;
  const total = steps.length;
  const nq = steps.filter(isQuestion).length;
  let i = 0;
  let correct = 0;
  let waiting = false; // pregunta sin responder
  const started = Date.now();

  app.innerHTML = `
    <div class="arcade story" style="--accent:${story.color}">
      <header class="arc-top">
        <a class="arc-x" href="#/guardias" aria-label="Salir">✕</a>
        <div class="bar"><div class="bar-fill"></div></div>
      </header>
      <main class="chat">
        <div class="chat-title"><span>${story.emoji}</span><h1>${esc(story.title)}</h1><small>🕒 ${esc(story.time)} · ${esc(story.place)}</small></div>
      </main>
      <footer class="lesson-foot chat-foot"><button class="btn primary" data-act="next">Continuar</button></footer>
    </div>`;
  const $ = (s) => app.querySelector(s);
  const chat = $('.chat');
  const nextBtn = $('[data-act=next]');

  const scrollEnd = () => {
    const last = chat.lastElementChild;
    last?.scrollIntoView?.({ behavior: 'smooth', block: 'end' });
  };

  const bubble = (s) => {
    const c = charOf(story, s.who);
    const visual = visualFor(s);
    if (s.who === 'narrator') return `<div class="msg narrator slide-up"><p>${esc(s.text)}</p>${visual}</div>`;
    return `
      <div class="msg ${c.side === 'right' ? 'me' : ''} slide-up" style="--who:${c.color}">
        <span class="avatar">${c.emoji}</span>
        <div class="bub"><small>${esc(c.name)}</small><p>${esc(s.text)}</p>${visual}</div>
      </div>`;
  };

  function askQuestion(q) {
    waiting = true;
    nextBtn.disabled = true;
    const opts = shuffle(q.options.map((label, k) => ({ label, ok: k === q.answer })));
    const el = document.createElement('div');
    el.className = 'chat-q slide-up';
    el.innerHTML = `<small>❓ Decide</small><h2>${esc(q.prompt)}</h2>${visualFor(q)}<div class="choices">${opts.map((o, k) => `<button class="choice" data-o="${k}">${esc(o.label)}</button>`).join('')}</div>`;
    chat.appendChild(el);
    el.querySelectorAll('[data-o]').forEach((b) => {
      b.onclick = (e) => {
        e.stopPropagation();
        const ok = opts[Number(b.dataset.o)].ok;
        el.querySelectorAll('[data-o]').forEach((x) => { x.disabled = true; if (opts[Number(x.dataset.o)].ok) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong', 'shake');
        if (ok) correct++;
        recordAnswer(null, ok, { type: 'mc' });
        sfx(ok ? 'Correct' : 'Wrong');
        el.insertAdjacentHTML('beforeend', `<div class="chat-fb ${ok ? 'ok' : 'ko'} pop-in"><b>${ok ? '¡Correcto!' : 'No exactamente'}</b><p>${esc(q.explain)}</p></div>`);
        waiting = false;
        nextBtn.disabled = false;
        scrollEnd();
      };
    });
  }

  function advance() {
    if (waiting) return;
    if (i >= total) return finish();
    const s = steps[i++];
    $('.bar-fill').style.width = `${(i / total) * 100}%`;
    if (isQuestion(s)) askQuestion(s);
    else {
      chat.insertAdjacentHTML('beforeend', bubble(s));
      sfx('Tap');
    }
    if (i >= total) nextBtn.textContent = 'Terminar';
    scrollEnd();
  }

  function finish() {
    const base = storyXp(correct);
    const xp = boostActive() ? base * 2 : base;
    const first = !getState().stories?.[story.id];
    markStory(story.id);
    const r = completeLesson(`guardia-${story.id}`, { xp, stars: correct === nq ? 3 : 1, review: true, minutes: (Date.now() - started) / 60000 });
    sfx('Complete');
    party();
    screen(`
      <div class="arc-badge pop-in" style="--accent:${story.color}">${story.emoji}</div>
      <h1 class="pop-in" style="color:var(--gold)">${correct === nq ? '¡Guardia impecable!' : '¡Guardia superada!'}</h1>
      <p class="muted">${esc(story.title)}${first ? ' · ✅ Historia completada' : ''}</p>
      <div class="stat-boxes">
        <div class="sb y"><small>XP</small><b>⚡ <span data-count="xp">0</span></b></div>
        <div class="sb g"><small>ACIERTOS</small><b>🎯 ${correct}/${nq}</b></div>
        <div class="sb b"><small>RACHA</small><b>🔥 ${getState().streak}</b></div>
      </div>
      ${r.streakExtended ? '<p class="combo">🔥 ¡Racha ampliada!</p>' : ''}
      <a class="btn primary" href="#/guardias" style="--accent:#58cc02">Continuar</a>`, 'result arcade');
    countUp(app.querySelector('[data-count=xp]'), xp, { dur: 800 });
  }

  nextBtn.onclick = advance;
  // Como en las Historias: tocar el chat también avanza
  chat.addEventListener('click', (e) => { if (!e.target.closest('button, .ecg-wrap, .visual-wrap')) advance(); });
  stopFn = null;
  advance();
}
