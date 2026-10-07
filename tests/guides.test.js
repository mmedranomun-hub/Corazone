import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COURSES } from '../js/data/courses.js';
import GUIDES from '../js/data/guides.js';

// Unidades en preparación: se permite que tengan guía aunque aún no existan.
const PENDING = new Set(['casos-u4', 'casos-u5']);
const unitIds = COURSES.flatMap((c) => c.units.map((u) => u.id));

test('toda unidad tiene una guía bien formada', () => {
  for (const id of unitIds) {
    const g = GUIDES[id];
    assert.ok(g, `${id}: falta guía`);
    assert.ok(typeof g.intro === 'string' && g.intro.trim(), `${id}: falta intro`);
    assert.ok(Array.isArray(g.sections) && g.sections.length >= 2, `${id}: menos de 2 secciones`);
    for (const s of g.sections) {
      assert.ok(typeof s.title === 'string' && s.title.trim(), `${id}: sección sin título`);
      assert.ok(Array.isArray(s.points) && s.points.length >= 3, `${id} / ${s.title}: menos de 3 puntos`);
      for (const p of s.points) assert.ok(typeof p === 'string' && p.trim(), `${id} / ${s.title}: punto vacío`);
      if ('tip' in s) assert.ok(typeof s.tip === 'string' && s.tip.trim(), `${id} / ${s.title}: tip vacío`);
    }
  }
});

test('no hay guías de unidades inexistentes', () => {
  const known = new Set(unitIds);
  for (const id of Object.keys(GUIDES)) assert.ok(known.has(id) || PENDING.has(id), `guía sobrante: ${id}`);
});
