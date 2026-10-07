import { test } from 'node:test';
import assert from 'node:assert/strict';
import { meaningfulLabel, buildTimedPool, fold, searchLessons } from '../js/game.js';
import { COURSES, COURSE_IDS, loadAllCourses, loadCourse, isCourseLoaded, allCoursesLoaded, findLesson, questionByKey, lessonsOf } from '../js/data/courses.js';

test('contrarreloj: sólo etiquetas que se entienden fuera de contexto', () => {
  for (const ok of ['Onda P', 'Bloqueo de rama', 'Taquicardia', 'QRS > 120 ms', 'Sacubitrilo-valsartán']) assert.ok(meaningfulLabel(ok), ok);
  for (const ko of ['≥ 2,5 mm', '1', '300', '< 40 %', 'V1', 'DII', '2,5 mm', '', '120 ms', 'TIMI 0']) assert.equal(meaningfulLabel(ko), false, ko);
});

test('contrarreloj: las parejas cortas se guardan aparte con el enunciado como cabecera', () => {
  const pool = buildTimedPool([
    { type: 'match', key: 'm#0', prompt: 'Grado de estenosis', pairs: [['≥ 2,5 mm', 'Significativa'], ['Onda P', 'Aurícula'], ['Onda P', 'Aurícula']] },
  ]);
  assert.deepEqual(pool.pairs, [{ l: 'Onda P', r: 'Aurícula', key: 'm#0' }]);
  assert.deepEqual(pool.shortPairs, [{ l: '≥ 2,5 mm', r: 'Significativa', key: 'm#0', ctx: 'Grado de estenosis' }]);
});

test('contrarreloj: con el contenido real hay parejas de sobra', () => {
  const pool = buildTimedPool(lessonsOf(COURSES[0]).flatMap((l) => l.questions));
  assert.ok(pool.pairs.length >= 12, `${pool.pairs.length} parejas`);
  assert.ok(pool.pairs.every((p) => meaningfulLabel(p.l)));
});

test('búsqueda: normaliza tildes y mayúsculas', () => {
  assert.equal(fold('Fibrilación AURICULAR'), 'fibrilacion auricular');
  assert.equal(fold(null), '');
});

const FAKE = [{
  id: 'x', title: 'X', subtitle: 'Curso X', units: [
    { id: 'x-u1', title: 'Ritmos básicos', lessons: [{ id: 'x1', title: 'Ritmo sinusal' }, { id: 'x2', title: 'Fibrilación auricular' }] },
    { id: 'x-u2', title: 'Válvulas', lessons: [{ id: 'x3', title: 'Estenosis aórtica', case: { title: 'Síncope de esfuerzo' } }] },
  ],
}];

test('búsqueda: por lección, caso y unidad, con estado de desbloqueo', () => {
  assert.deepEqual(searchLessons(FAKE, ''), []);
  assert.deepEqual(searchLessons(FAKE, 'zzz'), []);
  const [fa] = searchLessons(FAKE, 'fibrilacion', { x1: 3 });
  assert.equal(fa.lesson.id, 'x2');
  assert.equal(fa.state, 'current');
  const [syn] = searchLessons(FAKE, 'sincope');
  assert.equal(syn.lesson.id, 'x3');
  assert.equal(syn.state, 'locked');
  assert.equal(syn.blocker.id, 'x1', 'hay que completar antes la primera pendiente');
  assert.equal(syn.unitLocked, true, 'unidad entera bloqueada → se ofrece la prueba');
  assert.equal(searchLessons(FAKE, 'ritmos').length, 2, 'por título de unidad');
  // Todas las palabras deben aparecer; el título de la lección puntúa más que la unidad
  assert.deepEqual(searchLessons(FAKE, 'ritmo sinusal').map((r) => r.lesson.id), ['x1']);
  const done = searchLessons(FAKE, 'ritmo', { x1: 2 });
  assert.equal(done[0].lesson.id, 'x1');
  assert.equal(done[0].state, 'done');
});

test('búsqueda: funciona con los cursos reales', () => {
  const r = searchLessons(COURSES, 'estenosis');
  assert.ok(r.length > 0);
  assert.ok(r.every((x) => ['done', 'current', 'locked'].includes(x.state)));
});

test('cursos: carga perezosa idempotente y en orden canónico', async () => {
  assert.ok(allCoursesLoaded(), 'en Node se cargan todos al importar');
  assert.deepEqual(COURSES.map((c) => c.id), COURSE_IDS);
  const before = COURSES.length;
  await loadAllCourses();
  assert.equal(await loadCourse('eco'), COURSES.find((c) => c.id === 'eco'));
  assert.equal(COURSES.length, before, 'no duplica cursos');
  assert.equal(await loadCourse('nope'), null);
  assert.ok(isCourseLoaded('casos'));
  const l = lessonsOf(COURSES.at(-1))[0];
  assert.equal(findLesson(l.id).lesson.id, l.id);
  assert.equal(questionByKey(`${l.id}#0`).lesson.id, l.id);
});
