// Motor de lección: preguntas tipo mc / tf / match, vidas, XP y feedback.
import { renderEcg } from './ecg.js';
import { getState, loseHeart, completeLesson } from './storage.js';

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

  root.innerHTML = `
    <div class="lesson" style="--accent:${course.color}">
      <header class="lesson-top">
        <button class="icon-btn" data-act="exit" aria-label="Salir">✕</button>
        <div class="bar"><div class="bar-fill"></div></div>
        <div class="hearts">❤️ <span></span></div>
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
    $('.hearts span').textContent = getState().hearts;
  };

  function next() {
    if (!queue.length) return finish();
    if (getState().hearts <= 0) { cleanup(); return onExit('sin-vidas'); }
    current = queue.shift();
    selected = null;
    phase = 'answer';
    foot.className = 'lesson-foot';
    $('.feedback').innerHTML = '';
    checkBtn.textContent = 'Comprobar';
    checkBtn.disabled = true;
    updateTop();

    const ecg = current.ecg ? `<div class="ecg-wrap">${renderEcg(current.ecg)}</div>` : '';
    if (current.type === 'match') {
      matchState = { left: null, matched: new Set(), erred: false };
      body.innerHTML = `
        <h2 class="prompt">${esc(current.prompt)}</h2>
        <div class="match">
          <div class="col">${current.left.map((o) => `<button class="choice" data-side="l" data-i="${o.i}">${esc(o.label)}</button>`).join('')}</div>
          <div class="col">${current.right.map((o) => `<button class="choice" data-side="r" data-i="${o.i}">${esc(o.label)}</button>`).join('')}</div>
        </div>`;
      checkBtn.hidden = true;
    } else {
      checkBtn.hidden = false;
      body.innerHTML = `
        <h2 class="prompt">${esc(current.prompt)}</h2>
        ${ecg}
        <div class="choices ${current.type === 'tf' ? 'tf' : ''}">
          ${current.choices.map((c, i) => `<button class="choice" data-c="${i}"><kbd>${i + 1}</kbd>${esc(c.label)}</button>`).join('')}
        </div>`;
    }
  }

  function showFeedback(ok, correctLabel) {
    phase = 'feedback';
    if (ok) done++;
    else {
      mistakes++;
      loseHeart();
      // Como en Duolingo: la pregunta fallada vuelve al final (una vez).
      if (!retried.has(current.src)) {
        retried.add(current.src);
        queue.push(prepare(current.src));
      } else done++;
    }
    updateTop();
    foot.className = `lesson-foot ${ok ? 'ok' : 'ko'}`;
    $('.feedback').innerHTML = `
      <strong>${ok ? '¡Correcto!' : 'Incorrecto'}</strong>
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
    const ok = current.choices[selected].correct;
    body.querySelectorAll('.choice').forEach((b, i) => {
      b.disabled = true;
      if (current.choices[i].correct) b.classList.add('right');
      else if (i === selected) b.classList.add('wrong');
    });
    showFeedback(ok, current.choices.find((c) => c.correct).label);
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
    const xp = 10 + (mistakes === 0 ? 5 : 0);
    completeLesson(lesson.id, { xp, stars });
    cleanup();
    onFinish({ xp, stars, mistakes, total });
  }

  function onClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    if (btn.dataset.act === 'exit') { cleanup(); return onExit('salir'); }
    if (btn.dataset.act === 'check') return check();
    if (phase !== 'answer') return;
    if (btn.dataset.side) return pickMatch(btn);
    if (btn.dataset.c !== undefined) {
      selected = Number(btn.dataset.c);
      body.querySelectorAll('.choice').forEach((b) => b.classList.toggle('selected', b === btn));
      checkBtn.disabled = false;
    }
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
