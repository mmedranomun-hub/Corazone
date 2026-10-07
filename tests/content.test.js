import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COURSES, lessonsOf } from '../js/data/courses.js';
import { RHYTHMS, sampleEcg, renderEcg } from '../js/ecg.js';

test('los ids de unidades y lecciones son únicos', () => {
  const ids = COURSES.flatMap((c) => [c.id, ...c.units.flatMap((u) => [u.id, ...u.lessons.map((l) => l.id)])]);
  assert.equal(new Set(ids).size, ids.length);
});

test('todas las preguntas están bien formadas', () => {
  for (const course of COURSES) {
    for (const l of lessonsOf(course)) {
      assert.ok(l.questions.length >= 4, `${l.id}: pocas preguntas`);
      for (const q of l.questions) {
        const where = `${l.id}: "${q.prompt}"`;
        assert.ok(q.prompt, where);
        if (q.type === 'mc') {
          assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${where}: answer fuera de rango`);
          assert.equal(new Set(q.options).size, q.options.length, `${where}: opciones repetidas`);
          assert.ok(q.explain, `${where}: falta explain`);
        } else if (q.type === 'tf') {
          assert.equal(typeof q.answer, 'boolean', where);
          assert.ok(q.explain, `${where}: falta explain`);
        } else if (q.type === 'match') {
          assert.ok(q.pairs.length >= 2 && q.pairs.every((p) => p.length === 2), where);
          assert.equal(new Set(q.pairs.map((p) => p[0])).size, q.pairs.length, `${where}: izquierda repetida`);
          assert.equal(new Set(q.pairs.map((p) => p[1])).size, q.pairs.length, `${where}: derecha repetida`);
        } else assert.fail(`${where}: tipo desconocido ${q.type}`);
        if (q.ecg) assert.ok(RHYTHMS[q.ecg], `${where}: ritmo ${q.ecg} no existe`);
      }
    }
  }
});

test('el generador de ECG produce señales finitas y SVG para cada ritmo', () => {
  for (const id of Object.keys(RHYTHMS)) {
    const s = sampleEcg(id);
    assert.ok(s.length > 1000);
    assert.ok(s.every(({ v }) => Number.isFinite(v)), id);
    assert.match(renderEcg(id), /^<svg[\s\S]*<polyline/);
  }
});

test('el ritmo sinusal tiene una frecuencia ~75 lpm', () => {
  const s = sampleEcg('sinus', { seconds: 8 });
  const peaks = s.filter((p, i) => i > 0 && i < s.length - 1 && p.v > 0.7 && p.v >= s[i - 1].v && p.v > s[i + 1].v);
  const rr = (peaks.at(-1).t - peaks[0].t) / (peaks.length - 1);
  assert.ok(Math.abs(60 / rr - 75) < 3, `FC=${60 / rr}`);
});
