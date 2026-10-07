import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mascot, MOODS } from '../js/mascot.js';
import * as sound from '../js/sound.js';
import { confetti } from '../js/confetti.js';

test('mascot() devuelve un SVG bien formado para cada mood', () => {
  assert.deepEqual(Object.keys(MOODS).sort(), ['cheer', 'fire', 'happy', 'sad', 'sleep', 'think']);
  for (const mood of Object.keys(MOODS)) {
    const svg = mascot(mood, { size: 80 });
    assert.match(svg, /^<svg [^>]*viewBox="[\d\s.-]+"/, mood);
    assert.ok(svg.trimEnd().endsWith('</svg>'), mood);
    assert.match(svg, new RegExp(`class="cora cora-${mood}`), mood);
    assert.match(svg, /width="80" height="80"/, mood);
    assert.match(svg, /role="img" aria-label="[^"]+"/, mood);
    assert.ok(!/undefined|NaN/.test(svg), `${mood}: valores inválidos`);
    assert.ok(!/#[0-9a-f]{3,6}"/i.test(svg.replace(/fill="#fff"|stroke="#fff"/g, '')), `${mood}: color fijo`);
    // Etiquetas equilibradas (contando las autocerradas)
    const opens = (svg.match(/<(?!\/)[a-z]+\b[^>]*[^/]>/gi) || []).length;
    const closes = (svg.match(/<\/[a-z]+>/gi) || []).length;
    assert.equal(opens, closes, `${mood}: etiquetas desequilibradas`);
  }
});

test('mascot() usa happy por defecto, ante mood desconocido, y añade beat', () => {
  assert.match(mascot(), /cora-happy/);
  assert.match(mascot('nope'), /cora-happy/);
  assert.match(mascot('fire', { beat: true }), /class="cora cora-fire beat"/);
});

test('sound.js funciona en Node sin AudioContext y sin lanzar', () => {
  for (const fn of ['playCorrect', 'playWrong', 'playComplete', 'playTap', 'playStreak']) {
    assert.equal(typeof sound[fn], 'function');
    assert.doesNotThrow(() => sound[fn]());
  }
  assert.equal(sound.setMuted(true), true);
  assert.equal(sound.isMuted(), true);
  assert.doesNotThrow(() => sound.playCorrect());
  sound.setMuted(false);
  assert.equal(sound.isMuted(), false);
});

test('confetti() es no-op sin DOM', () => {
  const stop = confetti();
  assert.equal(typeof stop, 'function');
  assert.doesNotThrow(stop);
});
