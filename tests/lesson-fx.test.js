import { test } from 'node:test';
import assert from 'node:assert/strict';
import { accuracy, fmtClock, comboLabel, feedbackTitle, PRAISE, ENCOURAGE, timeTag, accTag, buzz } from '../js/fx.js';

test('precisión: aciertos / respuestas, acotada a 0…100', () => {
  assert.equal(accuracy(10, 10), 100);
  assert.equal(accuracy(8, 10), 80);
  assert.equal(accuracy(2, 3), 67);
  assert.equal(accuracy(0, 4), 0);
  assert.equal(accuracy(0, 0), 100);
  assert.equal(accuracy(12, 10), 100);
});

test('tiempo: segundos a m:ss y h:mm:ss', () => {
  assert.equal(fmtClock(0), '0:00');
  assert.equal(fmtClock(9), '0:09');
  assert.equal(fmtClock(75), '1:15');
  assert.equal(fmtClock(3725), '1:02:05');
  assert.equal(fmtClock(-3), '0:00');
  assert.equal(fmtClock(undefined), '0:00');
});

test('combo: sólo a partir de 3 seguidas', () => {
  assert.equal(comboLabel(0), '');
  assert.equal(comboLabel(2), '');
  assert.equal(comboLabel(3), '¡3 seguidas!');
  assert.equal(comboLabel(12), '¡12 seguidas!');
});

test('feedback: titular de la lista correcta según acierto', () => {
  assert.ok(PRAISE.includes(feedbackTitle(true, () => 0)));
  assert.ok(PRAISE.includes(feedbackTitle(true, () => 0.999)));
  assert.ok(ENCOURAGE.includes(feedbackTitle(false, () => 0.5)));
  assert.ok(PRAISE.includes('¡Genial!') && PRAISE.includes('¡Así se hace!'));
});

test('resultados: etiquetas de tiempo y precisión', () => {
  assert.equal(timeTag(45), 'VELOZ');
  assert.equal(timeTag(90), 'RÁPIDO');
  assert.equal(timeTag(300), 'TIEMPO');
  assert.equal(accTag(100), 'IMPRESIONANTE');
  assert.equal(accTag(85), 'MUY BIEN');
  assert.equal(accTag(50), 'PRECISIÓN');
});

test('vibración: no falla sin navigator.vibrate', () => {
  assert.doesNotThrow(() => buzz(30));
});
