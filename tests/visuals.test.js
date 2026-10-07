import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRESSURES, samplePressure, renderPressure } from '../js/pressure.js';
import { DIAGRAMS, renderDiagram } from '../js/diagrams.js';
import { COURSES, lessonsOf } from '../js/data/courses.js';

const peak = (pts) => Math.max(...pts.map((p) => p.p));
const trough = (pts) => Math.min(...pts.map((p) => p.p));
const svgNumbers = (svg) => [...svg.matchAll(/-?\d*\.?\d+(?:e-?\d+)?|NaN|Infinity/g)].map((m) => m[0]);

test('cada curva de presión tiene nombre, descripción, valores finitos y SVG válido', () => {
  for (const [id, def] of Object.entries(PRESSURES)) {
    assert.ok(def.name && def.desc, `${id}: falta name/desc`);
    const traces = samplePressure(id);
    assert.ok(traces.length >= 1, id);
    for (const tr of traces) {
      assert.ok(tr.label, id);
      assert.ok(tr.points.length > 300, `${id}: pocas muestras`);
      assert.ok(tr.points.every(({ t, p }) => Number.isFinite(t) && Number.isFinite(p)), `${id}: valores no finitos`);
      assert.ok(trough(tr.points) > -5 && peak(tr.points) < 220, `${id}: fuera de rango fisiológico`);
    }
    const svg = renderPressure(id);
    assert.match(svg, /^<svg class="pressure"[\s\S]*<polyline class="trace"[\s\S]*<\/svg>$/, id);
    assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}: SVG con valores no válidos`);
    assert.ok(svgNumbers(svg).every((n) => Number.isFinite(Number(n))), id);
    assert.ok(!/(fill|stroke)="#/.test(svg), `${id}: colores fijos en el SVG`);
    if (traces.length > 1) assert.match(svg, /trace2/, `${id}: falta segundo trazo`);
  }
});

test('la escala vertical se ajusta al máximo (0–40, 0–160, 0–200)', () => {
  assert.match(renderPressure('ra'), />40<\/text>/);
  assert.ok(!/>160<\/text>/.test(renderPressure('ra')));
  assert.match(renderPressure('ao'), />160<\/text>/);
  assert.match(renderPressure('as-lv-ao'), />200<\/text>/);
});

test('VI normal: sistólica 100–140 mmHg; aorta: diastólica 65–95 mmHg', () => {
  const [lv] = samplePressure('lv');
  const sys = peak(lv.points);
  assert.ok(sys >= 100 && sys <= 140, `VI sistólica = ${sys}`);
  assert.ok(trough(lv.points) < 12, 'VI diastólica mínima baja');
  const [ao] = samplePressure('ao');
  const dia = trough(ao.points);
  assert.ok(dia >= 65 && dia <= 95, `Ao diastólica = ${dia}`);
});

test('presiones derechas y PCP en rango normal', () => {
  const mean = (pts) => pts.reduce((s, p) => s + p.p, 0) / pts.length;
  const [ra] = samplePressure('ra');
  assert.ok(mean(ra.points) >= 2 && mean(ra.points) <= 7, `AD media = ${mean(ra.points)}`);
  const [pa] = samplePressure('pa');
  assert.ok(peak(pa.points) >= 18 && peak(pa.points) <= 30 && trough(pa.points) >= 6 && trough(pa.points) <= 14, 'AP 25/10');
  const [pcwp] = samplePressure('pcwp');
  assert.ok(mean(pcwp.points) >= 6 && mean(pcwp.points) <= 12, `PCP media = ${mean(pcwp.points)}`);
  const [v] = samplePressure('pcwp-v');
  assert.ok(peak(v.points) > 2 * mean(pcwp.points), 'ondas v gigantes');
});

test('estenosis aórtica: pico VI > pico Ao + 30', () => {
  const [lv, ao] = samplePressure('as-lv-ao');
  assert.equal(lv.points.length, ao.points.length);
  assert.ok(peak(lv.points) > peak(ao.points) + 30, `VI ${peak(lv.points)} vs Ao ${peak(ao.points)}`);
  assert.match(renderPressure('as-lv-ao'), /class="lbl leg"/);
});

test('cada diagrama y cada parte renderizan un SVG válido sin texto que revele la respuesta', () => {
  for (const [id, def] of Object.entries(DIAGRAMS)) {
    assert.ok(def.name && Object.keys(def.parts).length >= 2, id);
    for (const hl of [undefined, ...Object.keys(def.parts)]) {
      const svg = renderDiagram(id, hl);
      assert.match(svg, /^<svg class="diagram[\s\S]*<\/svg>$/, `${id}/${hl}`);
      assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}/${hl}: valores no válidos`);
      const nHl = (svg.match(/class="[^"]*\bhl\b/g) || []).length;
      if (hl) {
        assert.equal(nHl, 1, `${id}/${hl}: debe haber un elemento resaltado`);
        assert.match(svg, new RegExp(`class="[^"]*\\bhl\\b[^"]*" data-part="${hl}"`));
      } else assert.equal(nHl, 0);
      const texts = [...svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map((m) => m[1]);
      assert.ok(texts.every((t) => /^[0-9A-Za-z]{0,2}$/.test(t)), `${id}: texto revelador ${texts}`);
      for (const label of Object.values(def.parts)) assert.ok(!svg.includes(label), `${id}: contiene "${label}"`);
    }
  }
});

test('las preguntas que usan pressure/diagram apuntan a ids existentes', () => {
  for (const course of COURSES) {
    for (const l of lessonsOf(course)) {
      for (const q of l.questions) {
        if (q.pressure) assert.ok(PRESSURES[q.pressure], `${l.id}: curva ${q.pressure} no existe`);
        if (q.diagram) {
          assert.ok(DIAGRAMS[q.diagram.id], `${l.id}: diagrama ${q.diagram.id} no existe`);
          if (q.diagram.highlight) assert.ok(DIAGRAMS[q.diagram.id].parts[q.diagram.highlight], `${l.id}: parte ${q.diagram.highlight} no existe`);
        }
      }
    }
  }
});
