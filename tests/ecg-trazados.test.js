import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RHYTHMS, TWELVE_LEAD, sampleEcg, renderEcg, render12, sampleLead, waveTimes, WAVE_TOLERANCE } from '../js/ecg.js';

const NEW_RHYTHMS = ['torsade', 'afib-wpw', 'pacer-vvi', 'pacer-ddd', 'junctional', 'sinus-arrest', 'alternans', 'ivr', 'bigeminy', 'afib-slow'];
const NEW_12 = ['wellens', 'wellens-a', 'dewinter', 'brugada1', 'posterior', 'stemi-inf-rv', 'hypok', 'rvh', 'lowvoltage', 'early-repol', 'pacer12'];

const max = (a) => a.reduce((m, x) => (x > m ? x : m), -Infinity);
const min = (a) => a.reduce((m, x) => (x < m ? x : m), Infinity);
const vals = (s) => s.map((p) => p.v);
const window = (s, t0, t1) => vals(s.filter(({ t }) => t >= t0 && t < t1));
const at = (s, t) => s.reduce((best, p) => (Math.abs(p.t - t) < Math.abs(best.t - t) ? p : best)).v;
const meanRate = (times) => 60 / ((times.at(-1) - times[0]) / (times.length - 1));

test('cada trazado nuevo existe, tiene name/desc en español y renderiza SVG sin NaN', () => {
  for (const id of NEW_RHYTHMS) {
    const def = RHYTHMS[id];
    assert.ok(def?.name && def.desc, `${id}: falta`);
    const s = sampleEcg(id);
    assert.ok(s.every(({ t, v }) => Number.isFinite(t) && Number.isFinite(v)), `${id}: señal no finita`);
    const svg = renderEcg(id);
    assert.match(svg, /^<svg class="ecg"[\s\S]*<polyline points="[^"]+" class="trace"\/><\/svg>$/, id);
    assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}: SVG inválido`);
  }
  for (const id of NEW_12) {
    const def = TWELVE_LEAD[id];
    assert.ok(def?.name && def.desc, `${id}: falta`);
    const svg = render12(id);
    assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}: SVG inválido`);
    assert.equal((svg.match(/<polyline/g) || []).length, 13, `${id}: 12 derivaciones + tira de ritmo`);
  }
});

test('torsade: la amplitud del QRS crece y decrece (huso)', () => {
  const s = sampleEcg('torsade');
  const p2p = [];
  for (let t = 1.2; t < 5.8; t += 0.25) { const w = window(s, t, t + 0.25); p2p.push(max(w) - min(w)); }
  assert.ok(max(p2p) > 2.5 * min(p2p), `p2p ${min(p2p)}–${max(p2p)}`);
  assert.ok(max(p2p) > 1.5, 'QRS de gran amplitud en el vientre del huso');
});

test('marcapasos: espigas antes del QRS; DDD con espiga auricular y ventricular', () => {
  const vvi = waveTimes('pacer-vvi', 'spike');
  const qrs = waveTimes('pacer-vvi', 'qrs');
  assert.ok(vvi.length >= 5);
  const s = sampleEcg('pacer-vvi');
  for (const t of vvi) assert.ok(max(window(s, t - 0.008, t + 0.008)) > 0.8, `espiga en ${t}`);
  assert.ok(Math.abs(meanRate(qrs) - 60) < 2);
  const ddd = waveTimes('pacer-ddd', 'spike');
  assert.ok(ddd.length >= 2 * waveTimes('pacer-ddd', 'qrs').length - 1, 'dos espigas por ciclo');
  assert.ok(waveTimes('pacer-ddd', 'p').length > 0);
  assert.equal(waveTimes('sinus', 'spike').length, 0);
  assert.ok(WAVE_TOLERANCE.spike > 0);
});

test('alternancia eléctrica: QRS alternan de amplitud con bajo voltaje', () => {
  const s = sampleEcg('alternans');
  const amps = waveTimes('alternans', 'qrs').map((t) => at(s, t));
  assert.ok(amps.length >= 8);
  for (let i = 1; i < amps.length; i++) assert.ok(Math.abs(amps[i] - amps[i - 1]) > 0.15, 'alterna');
  assert.ok(max(amps) < 0.7, 'bajo voltaje');
});

test('ritmo nodal < 60 lpm sin P; RIVA 50–110 lpm con QRS ancho', () => {
  assert.equal(waveTimes('junctional', 'p').length, 0);
  assert.ok(meanRate(waveTimes('junctional', 'qrs', { seconds: 10 })) < 60);
  const ivr = waveTimes('ivr', 'vent', { seconds: 10 });
  const rate = meanRate(ivr);
  assert.ok(rate > 50 && rate < 110, `RIVA ${rate}`);
  assert.equal(waveTimes('ivr', 'p').length, 0);
});

test('pausa sinusal no múltiplo del PP; bigeminismo alterna sinusal y EV', () => {
  const q = waveTimes('sinus-arrest', 'qrs');
  const rr = q.slice(1).map((t, i) => t - q[i]);
  const pp = min(rr);
  const pause = max(rr);
  assert.ok(pause > 2, 'pausa > 2 s');
  const k = pause / pp;
  assert.ok(Math.abs(k - Math.round(k)) > 0.2, 'no múltiplo del PP');
  const qrs = waveTimes('bigeminy', 'qrs');
  const vent = new Set(waveTimes('bigeminy', 'vent'));
  qrs.forEach((t, i) => assert.equal(vent.has(t), i % 2 === 1, `latido ${i}`));
});

test('FA lenta < 60 lpm y FA preexcitada > 180 lpm, ambas irregulares y sin P', () => {
  for (const [id, lo, hi] of [['afib-slow', 30, 60], ['afib-wpw', 180, 320]]) {
    const q = waveTimes(id, 'qrs', { seconds: 10 });
    const rr = q.slice(1).map((t, i) => t - q[i]);
    const rate = meanRate(q);
    assert.ok(rate > lo && rate < hi, `${id}: ${rate}`);
    assert.ok(max(rr) - min(rr) > 0.08, `${id}: irregular`);
    assert.equal(waveTimes(id, 'p').length, 0);
  }
});

test('12D: morfologías clave', () => {
  const peakIn = (id, lead, t0, t1) => { const s = sampleLead(id, lead); return [max(window(s, t0, t1)), min(window(s, t0, t1))]; };
  const beat = 0.35; // primer latido
  // Wellens: T muy negativa en V2–V3
  assert.ok(peakIn('wellens', 'V3', beat + 0.15, beat + 0.4)[1] < -0.4);
  // de Winter: J deprimido en V3 y T alta
  const [dwMax, dwMin] = peakIn('dewinter', 'V3', beat + 0.04, beat + 0.4);
  assert.ok(dwMin < -0.15 && dwMax > 0.8);
  // Brugada: J elevado ≥ 2 mm en V1 y T negativa
  const [bMax, bMin] = peakIn('brugada1', 'V1', beat + 0.04, beat + 0.4);
  assert.ok(bMax >= 0.2 && bMin < -0.1);
  // Posterior: R > S en V2
  const [pr, ps] = peakIn('posterior', 'V2', beat - 0.05, beat + 0.05);
  assert.ok(pr > -ps);
  // HVD: R > S en V1, I negativo
  const [vr, vs] = peakIn('rvh', 'V1', beat - 0.05, beat + 0.05);
  assert.ok(vr > -vs);
  const [ir, is] = peakIn('rvh', 'I', beat - 0.05, beat + 0.05);
  assert.ok(-is > ir);
  // Bajo voltaje: QRS < 0,5 mV en miembros y < 1 mV en precordiales
  for (const lead of ['I', 'II', 'III', 'aVR', 'aVL', 'aVF']) { const [a, b] = peakIn('lowvoltage', lead, 0, 2); assert.ok(a - b < 0.5, lead); }
  for (const lead of ['V1', 'V2', 'V3', 'V4', 'V5', 'V6']) { const [a, b] = peakIn('lowvoltage', lead, 0, 2); assert.ok(a - b < 1, lead); }
  // Marcapasos: espiga en todas las derivaciones
  for (const lead of ['I', 'II', 'V1', 'V6']) assert.ok(peakIn('pacer12', lead, beat - 0.1, beat - 0.07)[0] > 0.7, lead);
});
