import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getState, recordAnswer, dueReviews, completeLesson, loseHeart, MAX_HEARTS } from '../js/storage.js';

test('una pregunta fallada entra en repaso y sale tras acertarla en todas las cajas', () => {
  recordAnswer('x#0', false);
  assert.deepEqual(dueReviews(), ['x#0']);
  recordAnswer('x#0', true); // caja 1 → vuelve en 1 día
  assert.deepEqual(dueReviews(), []);
  assert.equal(getState().review['x#0'].box, 1);
  recordAnswer('x#0', true); // caja 2 → 3 días
  recordAnswer('x#0', true); // caja 3 → 7 días
  assert.equal(getState().review['x#0'].box, 3);
  recordAnswer('x#0', true); // superada
  assert.equal(getState().review['x#0'], undefined);
});

test('acertar una pregunta que no estaba en repaso no la añade', () => {
  recordAnswer('y#0', true);
  assert.equal(getState().review['y#0'], undefined);
});

test('el repaso no marca lecciones como completadas pero sí suma XP', () => {
  const xp = getState().xp;
  completeLesson('repaso', { xp: 10, stars: 3, review: true });
  assert.equal(getState().completed.repaso, undefined);
  assert.equal(getState().xp, xp + 10);
  completeLesson('ecg-u1-l1', { xp: 10, stars: 2 });
  assert.equal(getState().completed['ecg-u1-l1'], 2);
  assert.equal(getState().streak, 1);
});

test('las vidas no bajan de 0', () => {
  for (let i = 0; i < MAX_HEARTS + 2; i++) loseHeart();
  assert.equal(getState().hearts, 0);
});
