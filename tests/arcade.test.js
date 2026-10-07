import { test } from 'node:test';
import assert from 'node:assert/strict';
import { timedMultiplier, timedPoints, timedXp, buildTimedPool, storyXp, TIMED_SECONDS } from '../js/game.js';
import { getState, saveTimedRecord, markStory, _setState } from '../js/storage.js';
import { GUARDIAS, CHARACTERS, guardiaById } from '../js/data/guardias.js';
import { RHYTHMS, TWELVE_LEAD } from '../js/ecg.js';
import { PRESSURES } from '../js/pressure.js';

test('contrarreloj: el multiplicador sube con el combo', () => {
  assert.deepEqual([1, 2, 3, 5, 6, 9, 10, 25].map(timedMultiplier), [1, 1, 2, 2, 3, 3, 4, 4]);
  assert.equal(timedPoints(1), 10);
  assert.equal(timedPoints(3), 20);
  assert.equal(timedPoints(10, 'mc'), 80);
  assert.ok(TIMED_SECONDS >= 60 && TIMED_SECONDS <= 90);
});

test('contrarreloj: XP según puntuación, con tope', () => {
  assert.equal(timedXp(0), 0);
  assert.equal(timedXp(10), 5);
  assert.equal(timedXp(200), 9);
  assert.equal(timedXp(99999), 30);
});

test('contrarreloj: el récord sólo se bate con una puntuación mayor', () => {
  _setState({});
  assert.equal(getState().records.timed, 0);
  assert.deepEqual(saveTimedRecord(120), { best: 120, prev: 0, isNew: true });
  assert.equal(saveTimedRecord(80).isNew, false);
  assert.equal(getState().records.timed, 120);
  assert.equal(saveTimedRecord(120).isNew, false);
  assert.equal(saveTimedRecord(121).isNew, true);
});

test('contrarreloj: el pool descarta pares cortos/duplicados y mc con imagen', () => {
  const pool = buildTimedPool([
    { type: 'match', key: 'a#0', pairs: [['1', '300 lpm'], ['Onda P', 'Aurícula'], ['Onda P', 'Aurícula']] },
    { type: 'mc', key: 'a#1', prompt: '¿Corta?', options: ['Sí', 'No'], answer: 0 },
    { type: 'mc', key: 'a#2', prompt: '¿Con ECG?', options: ['Sí', 'No'], answer: 0, ecg: 'afib' },
    { type: 'tf', key: 'a#3', prompt: 'x', answer: true },
  ]);
  assert.deepEqual(pool.pairs, [{ l: 'Onda P', r: 'Aurícula', key: 'a#0' }]);
  assert.deepEqual(pool.mcs.map((q) => q.key), ['a#1']);
});

test('guardias: marcar historia completada y XP', () => {
  _setState({});
  markStory('g-tep');
  assert.deepEqual(getState().stories, { 'g-tep': true });
  assert.equal(storyXp(0), 10);
  assert.equal(storyXp(4), 18);
});

test('guardias: formato válido', () => {
  assert.equal(GUARDIAS.length, 5);
  const ids = GUARDIAS.map((g) => g.id);
  assert.equal(new Set(ids).size, ids.length, 'ids únicos');
  for (const g of GUARDIAS) {
    assert.ok(g.title && g.emoji && g.color && g.time && g.place, `${g.id}: portada completa`);
    assert.ok(g.patient?.name && g.patient?.emoji, `${g.id}: paciente`);
    assert.equal(guardiaById(g.id), g);
    const lines = g.steps.filter((s) => s.type !== 'mc');
    const qs = g.steps.filter((s) => s.type === 'mc');
    assert.ok(lines.length >= 8 && lines.length <= 14, `${g.id}: ${lines.length} burbujas`);
    assert.ok(qs.length >= 3 && qs.length <= 4, `${g.id}: ${qs.length} preguntas`);
    assert.notEqual(g.steps[0].type, 'mc', `${g.id}: empieza con diálogo`);
    for (const s of lines) {
      assert.ok(s.who === 'patient' || CHARACTERS[s.who], `${g.id}: personaje ${s.who}`);
      assert.ok(s.text?.length > 5, `${g.id}: texto`);
    }
    for (const q of qs) {
      assert.ok(q.prompt && q.explain, `${g.id}: prompt y explain`);
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${g.id}: opciones`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${g.id}: answer válido`);
      assert.equal(new Set(q.options).size, q.options.length, `${g.id}: opciones únicas`);
    }
    for (const s of g.steps) {
      if (s.ecg) assert.ok(RHYTHMS[s.ecg], `${g.id}: ecg ${s.ecg}`);
      if (s.ecg12) assert.ok(TWELVE_LEAD[s.ecg12], `${g.id}: ecg12 ${s.ecg12}`);
      if (s.pressure) assert.ok(PRESSURES[s.pressure], `${g.id}: pressure ${s.pressure}`);
    }
  }
});
