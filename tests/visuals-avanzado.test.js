import { test } from 'node:test';
import assert from 'node:assert/strict';
import { samplePressure, renderPressure } from '../js/pressure.js';
import { DIAGRAMS, renderDiagram } from '../js/diagrams.js';

const trace = (id, label) => samplePressure(id).find((tr) => tr.label === label).points;
const max = (pts, a = 0, b = Infinity) => Math.max(...pts.filter((q) => q.t >= a && q.t < b).map((q) => q.p));
const min = (pts, a = 0, b = Infinity) => Math.min(...pts.filter((q) => q.t >= a && q.t < b).map((q) => q.p));
const mean = (pts, a = 0, b = Infinity) => { const v = pts.filter((q) => q.t >= a && q.t < b).map((q) => q.p); return v.reduce((x, y) => x + y, 0) / v.length; };
const at = (pts, t) => pts.reduce((best, q) => (Math.abs(q.t - t) < Math.abs(best.t - t) ? q : best)).p;

test('curvas avanzadas: SVG válido con dos trazas cuando corresponde', () => {
  for (const id of ['ms-lv-la', 'ar-ao-lv', 'hcm-brockenbrough', 'ffr', 'constriction-lv-rv', 'restriction-lv-rv']) {
    assert.equal(samplePressure(id).length, 2, id);
    assert.match(renderPressure(id), /class="trace trace2"/, id);
  }
  for (const id of ['pulsus-paradoxus', 'iabp']) assert.equal(samplePressure(id).length, 1, id);
});

test('estenosis mitral: gradiente diastólico AI > VI', () => {
  const lv = trace('ms-lv-la', 'VI'), la = trace('ms-lv-la', 'AI');
  // mitad de la diástole del segundo latido (inicio 1,1 s; diástole ≈ 1,6–1,85 s)
  for (const t of [1.62, 1.72, 1.82]) assert.ok(at(la, t) - at(lv, t) > 8, `t=${t}`);
});

test('insuficiencia aórtica: presión de pulso amplia y diastólica baja', () => {
  const ao = trace('ar-ao-lv', 'Ao');
  assert.ok(max(ao) - min(ao) > 90);
  assert.ok(min(ao) < 50);
});

test('Brockenbrough: el latido postextrasistólico sube el VI y baja la presión de pulso aórtica', () => {
  // latidos: normal 0,3 s · extrasístole 0,76 s · postextrasistólico 1,9 s · normal 2,7 s
  const lv = trace('hcm-brockenbrough', 'VI'), ao = trace('hcm-brockenbrough', 'Ao');
  const pp = (a, b) => max(ao, a, b) - min(ao, a - 0.1, a + 0.12);
  assert.ok(max(lv, 1.9, 2.35) > max(lv, 0.3, 0.75) + 15);
  assert.ok(pp(1.9, 2.35) < pp(0.3, 0.75) - 8);
});

test('pulso paradójico: la sistólica cae > 10 mmHg en inspiración', () => {
  const ao = trace('pulsus-paradoxus', 'Ao');
  const peaks = [];
  for (let a = 0; a < 6; a += 0.55) peaks.push(max(ao, a, a + 0.55));
  assert.ok(Math.max(...peaks) - Math.min(...peaks) > 10);
});

test('BCIA: el aumento diastólico supera la sistólica no asistida', () => {
  const ao = trace('iabp', 'Ao');
  // latido no asistido desde 0,3 s (sistólica) y asistido desde 1,1 s (inflado en la incisura ≈ 1,47 s)
  assert.ok(max(ao, 1.47, 1.75) > max(ao, 1.1, 1.45) + 5);
});

test('FFR: Pd/Pa basal > 0,9 y en hiperemia ≤ 0,80', () => {
  const pa = trace('ffr', 'Pa'), pd = trace('ffr', 'Pd');
  assert.ok(mean(pd, 0, 1.5) / mean(pa, 0, 1.5) > 0.9);
  assert.ok(mean(pd, 4.5, 6) / mean(pa, 4.5, 6) <= 0.8);
});

test('constricción: diastólicas igualadas; restricción: VI > VD en > 5 mmHg', () => {
  const plateau = (id, label) => mean(trace(id, label).filter((q) => { const x = (q.t - 0.3 + 3) % 0.75; return x > 0.55 && x < 0.7; }));
  assert.ok(Math.abs(plateau('constriction-lv-rv', 'VI') - plateau('constriction-lv-rv', 'VD')) <= 5);
  assert.ok(plateau('restriction-lv-rv', 'VI') - plateau('restriction-lv-rv', 'VD') > 5);
});

test('esquemas nuevos: 17 segmentos y sistema de conducción', () => {
  assert.equal(Object.keys(DIAGRAMS.bullseye.parts).length, 17);
  for (const id of ['bullseye', 'conduction']) {
    for (const part of Object.keys(DIAGRAMS[id].parts)) {
      assert.match(renderDiagram(id, part), new RegExp(`class="[a-z ]*hl" data-part="${part}"`), `${id}/${part}`);
    }
  }
});

test('durante la eyección la aorta no supera al VI (MCH e IA)', () => {
  for (const id of ['hcm-brockenbrough', 'ar-ao-lv']) {
    const lv = trace(id, 'VI'), ao = trace(id, 'Ao');
    // ascenso de la eyección: suben a la vez aorta y VI (excluye el rebote de la incisura)
    for (let i = 1; i < ao.length; i++) {
      const rising = ao[i].p - ao[i - 1].p > 0.3 && lv[i].p > lv[i - 1].p && lv[i].p > 40;
      // tolerancia 4 mmHg: el suavizado del VI redondea la esquina de la apertura valvular
      if (rising) assert.ok(lv[i].p >= ao[i].p - 4, `${id} t=${ao[i].t}: VI ${lv[i].p.toFixed(1)} < Ao ${ao[i].p.toFixed(1)}`);
    }
  }
});
