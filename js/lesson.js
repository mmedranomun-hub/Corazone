// Motor de lección: preguntas tipo mc / tf / match, vidas, XP y feedback.
import { waveTimes, WAVE_TOLERANCE } from './ecg.js';
import { visualFor } from './visuals.js';
import { getState, loseHeart, completeLesson, recordAnswer, boostActive } from './storage.js';
import { sfx, cora } from './fx.js';

const PRAISE = ['¡Correcto!', '¡Genial!', '¡Excelente!', '¡Bien hecho!', '¡Perfecto!', '¡Así se hace!'];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// Normaliza a { prompt, ecg, choices: [{label, correct}] } o match.
function prepare(q) {
  if (q.type === 'tf') return { ...q, src: q, choices: [{ label: 'Verdadero', correct: q.answer === true }, { label: 'Falso', correct: q.answer === false }] };
  if (q.type === 'tap') return { ...q, src: q, targets: waveTimes(q.ecg, q.wave) };
  if (q.type === 'mc') return { ...q, src: q, choices: shuffle(q.options.map((label, i) => ({ label, correct: i === q.answer }))) };
  return { ...q, src: q, left: shuffle(q.pairs.map((p, i) => ({ label: p[0], i }))), right: shuffle(q.pairs.map((p, i) => ({ label: p[1], i }))) };
}

export function runLesson(root, { course, lesson }, { onExit, onFinish }) {
  const total = lesson.questions.length;
  const queue = shuffle(lesson.questions).map(prepare);
  const retried = new Set();
  let done = 0;
  let mistakes = 0;
  let current = null;
  let selected = null;
  let phase = 'answer'; // answer | feedback
  let matchState = null;
  let combo = 0;
  let bestCombo = 0;
  const started = Date.now();
  // En práctica/repaso no se pierden vidas (como en Duolingo)
  const usesHearts = !lesson.practice;

  root.innerHTML = `
    <div class="lesson" style="--accent:${course.color}">
      <header class="lesson-top">
        <button class="icon-btn" data-act="exit" aria-label="Salir">✕</button>
        <div class="bar"><div class="bar-fill"></div></div>
        <div class="hearts">${usesHearts ? '❤️ <span></span>' : '♾️'}</div>
      </header>
      <main class="lesson-body"></main>
      <footer class="lesson-foot">
        <div class="feedback"></div>
        <button class="btn primary" data-act="check" disabled>Comprobar</button>
      </footer>
    </div>`;
  const $ = (s) => root.querySelector(s);
  const body = $('.lesson-body');
  const foot = $('.lesson-foot');
  const checkBtn = $('[data-act=check]');

  const updateTop = () => {
    $('.bar-fill').style.width = `${(done / total) * 100}%`;
    const h = $('.hearts span');
    if (h) h.textContent = getState().hearts;
  };

  function next() {
    if (!queue.length) return finish();
    if (usesHearts && getState().hearts <= 0) { cleanup(); return onExit('sin-vidas'); }
    current = queue.shift();
    selected = null;
    phase = 'answer';
    foot.className = 'lesson-foot';
    $('.feedback').innerHTML = '';
    checkBtn.textContent = 'Comprobar';
    checkBtn.disabled = true;
    updateTop();

    const visual = visualFor(current);
    // Lecciones de caso clínico: la historia queda visible y cada pregunta puede añadir evolución.
    const caseCard = lesson.case
      ? `<details class="case" ${done === 0 ? 'open' : ''}><summary>📋 ${esc(lesson.case.title || 'Caso clínico')}</summary><p>${esc(lesson.case.text)}</p></details>`
      : '';
    const context = current.context ? `<p class="context">${esc(current.context)}</p>` : '';
    const head = `${caseCard}${context}<h2 class="prompt">${esc(current.prompt)}</h2>`;
    if (current.type === 'match') {
      matchState = { left: null, matched: new Set(), erred: false };
      body.innerHTML = `
        ${head}
        <div class="match">
          <div class="col">${current.left.map((o) => `<button class="choice" data-side="l" data-i="${o.i}">${esc(o.label)}</button>`).join('')}</div>
          <div class="col">${current.right.map((o) => `<button class="choice" data-side="r" data-i="${o.i}">${esc(o.label)}</button>`).join('')}</div>
        </div>`;
      checkBtn.hidden = true;
    } else if (current.type === 'tap') {
      checkBtn.hidden = false;
      body.innerHTML = `${head}${visual}<p class="muted hint">Toca sobre la tira para marcar tu respuesta.</p>`;
    } else {
      checkBtn.hidden = false;
      body.innerHTML = `
        ${head}
        ${visual}
        <div class="choices ${current.type === 'tf' ? 'tf' : ''}">
          ${current.choices.map((c, i) => `<button class="choice" data-c="${i}"><kbd>${i + 1}</kbd>${esc(c.label)}</button>`).join('')}
        </div>`;
    }
  }

  function showFeedback(ok, correctLabel) {
    phase = 'feedback';
    combo = ok ? combo + 1 : 0;
    bestCombo = Math.max(bestCombo, combo);
    recordAnswer(current.src.key, ok, { type: current.type, combo });
    sfx(ok ? 'Correct' : 'Wrong');
    if (ok) done++;
    else {
      mistakes++;
      if (usesHearts) loseHeart();
      // Como en Duolingo: la pregunta fallada vuelve al final (una vez).
      if (!retried.has(current.src)) {
        retried.add(current.src);
        queue.push(prepare(current.src));
      } else done++;
    }
    updateTop();
    foot.className = `lesson-foot ${ok ? 'ok' : 'ko'}`;
    $('.feedback').innerHTML = `
      <strong>${ok ? pick(PRAISE) : 'Incorrecto'}</strong>
      ${ok && combo >= 3 ? `<span class="combo pop-in">🔥 ${combo} seguidas</span>` : ''}
      ${!ok && correctLabel ? `<p>Respuesta: <b>${esc(correctLabel)}</b></p>` : ''}
      ${current.explain ? `<p>${esc(current.explain)}</p>` : ''}`;
    checkBtn.hidden = false;
    checkBtn.disabled = false;
    checkBtn.textContent = 'Continuar';
    checkBtn.focus();
  }

  function check() {
    if (phase === 'feedback') return next();
    if (selected === null) return;
    if (current.type === 'tap') return checkTap();
    const ok = current.choices[selected].correct;
    body.querySelectorAll('.choice').forEach((b, i) => {
      b.disabled = true;
      if (current.choices[i].correct) b.classList.add('right');
      else if (i === selected) b.classList.add('wrong', 'shake');
    });
    showFeedback(ok, current.choices.find((c) => c.correct).label);
  }

  // --- Preguntas "toca la onda" ---
  const SVGNS = 'http://www.w3.org/2000/svg';
  const svgX = (svg, t) => (t / Number(svg.dataset.seconds)) * svg.viewBox.baseVal.width;

  function pickTap(e, svg) {
    const r = svg.getBoundingClientRect();
    selected = ((e.clientX - r.left) / r.width) * Number(svg.dataset.seconds);
    let mark = svg.querySelector('.tap-mark');
    if (!mark) {
      mark = document.createElementNS(SVGNS, 'line');
      mark.setAttribute('class', 'tap-mark');
      svg.appendChild(mark);
    }
    const x = svgX(svg, selected);
    Object.entries({ x1: x, x2: x, y1: 0, y2: svg.viewBox.baseVal.height }).forEach(([k, v]) => mark.setAttribute(k, v));
    checkBtn.disabled = false;
  }

  function checkTap() {
    const svg = body.querySelector('svg.ecg');
    const tol = WAVE_TOLERANCE[current.wave];
    const ok = current.targets.some((t) => Math.abs(t - selected) <= tol);
    for (const t of current.targets) {
      const zone = document.createElementNS(SVGNS, 'rect');
      zone.setAttribute('class', 'tap-zone');
      Object.entries({ x: svgX(svg, t - tol), y: 0, width: svgX(svg, 2 * tol), height: svg.viewBox.baseVal.height }).forEach(([k, v]) => zone.setAttribute(k, v));
      svg.insertBefore(zone, svg.querySelector('.trace'));
    }
    svg.querySelector('.tap-mark')?.classList.add(ok ? 'right' : 'wrong');
    body.querySelector('.tappable').classList.add('locked');
    showFeedback(ok, ok ? null : 'mira las zonas resaltadas');
  }

  function pickMatch(btn) {
    const side = btn.dataset.side;
    const i = Number(btn.dataset.i);
    if (matchState.matched.has(i)) return;
    if (side === 'l') {
      body.querySelectorAll('[data-side=l]').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      matchState.left = i;
      return;
    }
    if (matchState.left === null) return;
    const leftBtn = body.querySelector(`[data-side=l][data-i="${matchState.left}"]`);
    if (matchState.left === i) {
      matchState.matched.add(i);
      [leftBtn, btn].forEach((b) => { b.classList.remove('selected'); b.classList.add('right'); b.disabled = true; });
      if (matchState.matched.size === current.pairs.length) showFeedback(!matchState.erred);
    } else {
      matchState.erred = true;
      [leftBtn, btn].forEach((b) => { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 450); });
    }
    matchState.left = null;
    leftBtn.classList.remove('selected');
  }

  function finish() {
    const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;
    // XP: base + bonus por lección perfecta y por combo; doble con potenciador
    const base = 10 + (mistakes === 0 ? 5 : 0) + (bestCombo >= 5 ? 3 : 0);
    const xp = boostActive() ? base * 2 : base;
    const seconds = Math.round((Date.now() - started) / 1000);
    const { streakExtended } = completeLesson(lesson.id, { xp, stars, review: !!lesson.review, minutes: seconds / 60 });
    cleanup();
    onFinish({ xp, stars, mistakes, total, seconds, bestCombo, streakExtended, boosted: boostActive() });
  }

  function onClick(e) {
    const tapSvg = phase === 'answer' && current?.type === 'tap' && e.target.closest('.tappable svg');
    if (tapSvg) return pickTap(e, tapSvg);
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.act === 'exit') return done > 0 ? confirmExit() : (cleanup(), onExit('salir'));
    if (btn.dataset.act === 'stay') return root.querySelector('.modal-back')?.remove();
    if (btn.dataset.act === 'leave') { cleanup(); return onExit('salir'); }
    if (btn.dataset.act === 'check') return check();
    if (phase !== 'answer') return;
    if (btn.dataset.side) return pickMatch(btn);
    if (btn.dataset.c !== undefined) {
      selected = Number(btn.dataset.c);
      sfx('Tap');
      body.querySelectorAll('.choice').forEach((b) => b.classList.toggle('selected', b === btn));
      checkBtn.disabled = false;
    }
  }

  // "¡Espera, no te vayas!" como en Duolingo
  function confirmExit() {
    root.querySelector('.lesson').insertAdjacentHTML('beforeend', `
      <div class="modal-back"><div class="sheet slide-up">
        ${cora('sad', 90)}
        <h2>¡Espera, no te vayas!</h2>
        <p class="muted">Si sales ahora perderás el progreso de esta lección.</p>
        <button class="btn primary" data-act="stay">Seguir aprendiendo</button>
        <button class="btn ghost danger-text" data-act="leave">Salir</button>
      </div></div>`);
  }

  function onKey(e) {
    if (e.key === 'Enter' && !checkBtn.disabled && !checkBtn.hidden) { e.preventDefault(); check(); }
    if (phase === 'answer' && current?.choices && /^[1-9]$/.test(e.key)) body.querySelector(`[data-c="${Number(e.key) - 1}"]`)?.click();
  }

  function cleanup() {
    root.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKey);
  }

  root.addEventListener('click', onClick);
  document.addEventListener('keydown', onKey);
  next();
  return cleanup;
}
