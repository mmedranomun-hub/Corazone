import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RHYTHMS, TWELVE_LEAD, sampleEcg, renderEcg, render12, sampleLead, waveTimes, WAVE_TOLERANCE } from '../js/ecg.js';

const NEW_RHYTHMS = ['vt-bidir', 'vt-capture', 'mat', 'pacer-fail', 'pacer-undersense', 'afl-4to1', '2to1-avb'];
const NEW_12 = ['vt12', 'brugada2', 'arvc', 'lqt1', 'lqt2', 'lqt3', 'lae', 'rae', 'lafb', 'rbbb-lafb', 'hyperk12', 'digoxin', 'wpw12', 'limb-reversal'];

const max = (a) => a.reduce((m, x) => (x > m ? x : m), -Infinity);
const min = (a) => a.reduce((m, x) => (x < m ? x : m), Infinity);
const vals = (s) => s.map((p) => p.v);
const win = (s, t0, t1) => vals(s.filter(({ t }) => t >= t0 && t < t1));
const at = (s, t) => s.reduce((best, p) => (Math.abs(p.t - t) < Math.abs(best.t - t) ? p : best)).v;
const meanRate = (times) => 60 / ((times.at(-1) - times[0]) / (times.length - 1));
// Latido aislado de una derivación (primer QRS de sinusBeats: t = 0,35 s)
const R0 = 0.35;
const lead = (id, l) => sampleLead(id, l, { seconds: 2.5 });
const area = (s, t0, t1) => win(s, t0, t1).reduce((a, v) => a + v, 0);

test('trazados nuevos (2): existen, name/desc en español, SVG válido y señal finita', () => {
  for (const id of NEW_RHYTHMS) {
    const def = RHYTHMS[id];
    assert.ok(def?.name && def.desc?.length > 40, `${id}: falta name/desc`);
    for (const seconds of [6, 10]) {
      const s = sampleEcg(id, { seconds });
      assert.ok(s.every(({ t, v }) => Number.isFinite(t) && Number.isFinite(v) && Math.abs(v) < 4), `${id}: señal no finita`);
    }
    const svg = renderEcg(id);
    assert.match(svg, /^<svg class="ecg"[\s\S]*<polyline points="[^"]+" class="trace"\/><\/svg>$/, id);
    assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}: SVG inválido`);
  }
  for (const id of NEW_12) {
    const def = TWELVE_LEAD[id];
    assert.ok(def?.name && def.desc?.length > 40, `${id}: falta name/desc`);
    const svg = render12(id);
    assert.ok(!/NaN|Infinity|undefined/.test(svg), `${id}: SVG inválido`);
    assert.equal((svg.match(/<polyline/g) || []).length, 13, `${id}: 12 derivaciones + tira de ritmo`);
  }
});

test('TV bidireccional: la polaridad del QRS alterna latido a latido', () => {
  const s = sampleEcg('vt-bidir');
  const q = waveTimes('vt-bidir', 'qrs');
  assert.ok(q.length >= 12);
  const signs = q.map((t) => Math.sign(at(s, t + 0.01)));
  for (let i = 1; i < signs.length; i++) assert.notEqual(signs[i], signs[i - 1], `latido ${i}`);
  assert.equal(waveTimes('vt-bidir', 'p').length, 0);
});

test('TV con captura y fusión: un latido de cada tipo, QRS estrecho en la captura', () => {
  const cap = waveTimes('vt-capture', 'capture');
  const fus = waveTimes('vt-capture', 'fusion');
  assert.equal(cap.length, 1);
  assert.equal(fus.length, 1);
  assert.ok(WAVE_TOLERANCE.capture > 0 && WAVE_TOLERANCE.fusion > 0);
  const vt = waveTimes('vt-capture', 'vent');
  assert.ok(vt.length >= 10, 'mayoría de latidos de TV');
  const s = sampleEcg('vt-capture');
  // Anchura a media altura: captura (estrecha) < fusión < TV
  const width = (t) => { const pk = at(s, t); return s.filter((p) => Math.abs(p.t - t) < 0.1 && p.v > pk / 2).length; };
  const wv = width(vt[2]);
  assert.ok(width(cap[0]) < width(fus[0]) && width(fus[0]) < wv, `${width(cap[0])} ${width(fus[0])} ${wv}`);
  // La captura es prematura respecto al RR de la TV
  const prevVt = max(vt.filter((t) => t < cap[0]));
  assert.ok(cap[0] - prevVt < 0.4);
  // Disociación AV: hay P que no conducen
  assert.ok(waveTimes('vt-capture', 'pBlocked').length >= 5);
  // Los tiempos de 'capture'/'fusion' no existen en los trazados previos
  assert.equal(waveTimes('vt', 'capture').length, 0);
  assert.equal(waveTimes('sinus', 'fusion').length, 0);
});

test('TAM: ≥ 3 morfologías de P, PR y RR variables, FC > 100', () => {
  const s = sampleEcg('mat');
  const p = waveTimes('mat', 'p');
  const q = waveTimes('mat', 'qrs');
  assert.ok(meanRate(q) > 100, `FC ${meanRate(q)}`);
  // Morfología de cada P: amplitud con signo en el centro y ancho a media altura
  const morph = p.map((t) => {
    const v = at(s, t);
    const w = s.filter((x) => Math.abs(x.t - t) < 0.08 && Math.abs(x.v) > Math.abs(v) / 2).length;
    return `${Math.sign(v)}:${Math.round(Math.abs(v) * 20)}:${Math.round(w / 4)}`;
  });
  assert.ok(new Set(morph).size >= 3, `morfologías ${[...new Set(morph)]}`);
  const pr = q.map((t) => t - max(p.filter((x) => x < t)));
  assert.ok(max(pr) - min(pr) > 0.03, 'PR variable');
  const rr = q.slice(1).map((t, i) => t - q[i]);
  assert.ok(max(rr) - min(rr) > 0.06, 'RR irregular');
});

test('marcapasos: fallo de captura (espiga sin QRS) y de detección (espiga en el ciclo propio)', () => {
  const sp = waveTimes('pacer-fail', 'spike');
  const q = waveTimes('pacer-fail', 'qrs');
  const s = sampleEcg('pacer-fail');
  for (const t of sp) assert.ok(max(win(s, t - 0.008, t + 0.008)) > 0.8, `espiga en ${t}`);
  const lone = sp.filter((t) => !q.some((r) => r - t > 0 && r - t < 0.12));
  assert.ok(lone.length >= 1, 'al menos una espiga sin QRS');
  for (const t of lone) assert.ok(max(win(s, t + 0.03, t + 0.25).map(Math.abs)) < 0.25, 'tras la espiga fallida no hay QRS');

  const us = sampleEcg('pacer-undersense');
  const usp = waveTimes('pacer-undersense', 'spike');
  const usq = waveTimes('pacer-undersense', 'qrs');
  // Espigas que caen poco después de un QRS propio (ST/T): el marcapasos no lo ha detectado
  const midCycle = usp.filter((t) => usq.some((r) => t - r > 0.1 && t - r < 0.4));
  assert.ok(midCycle.length >= 3, `espigas en mitad del ciclo: ${midCycle.length}`);
  for (const t of usp) assert.ok(max(win(us, t - 0.008, t + 0.008)) > 0.8);
  assert.ok(waveTimes('pacer-undersense', 'p').length > 0, 'ritmo propio sinusal');
});

test('flutter 4:1 y BAV 2:1: relación auricular/ventricular', () => {
  const q = waveTimes('afl-4to1', 'qrs', { seconds: 10 });
  assert.ok(Math.abs(meanRate(q) - 75) < 3);
  assert.equal(waveTimes('afl-4to1', 'p').length, 0);
  const p = waveTimes('2to1-avb', 'p', { seconds: 10 });
  const b = waveTimes('2to1-avb', 'pBlocked', { seconds: 10 });
  const q2 = waveTimes('2to1-avb', 'qrs', { seconds: 10 });
  assert.ok(Math.abs(b.length - q2.length) <= 1, '1 de cada 2 P bloqueada');
  assert.ok(Math.abs(meanRate(p) / meanRate(q2) - 2) < 0.1);
});

test('TV 12D: QRS muy ancho, concordancia negativa en precordiales y eje superior', () => {
  for (const l of ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'II', 'III', 'aVF']) {
    const s = lead('vt12', l);
    assert.ok(area(s, R0 - 0.1, R0 + 0.15) < 0 && max(win(s, R0 - 0.1, R0 + 0.15)) < 0.1, `${l} negativo`);
  }
  assert.ok(area(lead('vt12', 'aVR'), R0 - 0.1, R0 + 0.15) > 0, 'aVR positivo');
  const v3 = lead('vt12', 'V3');
  const pk = min(win(v3, R0 - 0.1, R0 + 0.15));
  const wide = v3.filter(({ t, v }) => t > R0 - 0.15 && t < R0 + 0.2 && v < pk / 4);
  assert.ok(wide.at(-1).t - wide[0].t > 0.14, 'QRS > 140 ms');
});

test('Brugada 2, DAVD y QT largo: rasgos clave', () => {
  // Brugada tipo 2: ST elevado (silla) en V2 con T positiva
  const b = lead('brugada2', 'V2');
  assert.ok(at(b, R0 + 0.1) > 0.05 && at(b, R0 + 0.24) > at(b, R0 + 0.1), 'silla de montar');
  // DAVD: T negativas V1–V3 con épsilon (muescas tras el QRS) en V1
  for (const l of ['V1', 'V2', 'V3']) assert.ok(min(win(lead('arvc', l), R0 + 0.15, R0 + 0.4)) < -0.15, `${l} T negativa`);
  const eps = win(lead('arvc', 'V1'), R0 + 0.05, R0 + 0.11);
  let turns = 0;
  for (let i = 2; i < eps.length; i++) if ((eps[i] - eps[i - 1]) * (eps[i - 1] - eps[i - 2]) < 0) turns++;
  assert.ok(turns >= 3, `épsilon: ${turns} cambios de pendiente`);
  assert.ok(min(win(lead('normal', 'V1'), R0 + 0.15, R0 + 0.4)) > -0.05, 'el normal no tiene T negativa en V1');
  // QT largo: T tardías (centro a > 0,35 s del R) en los tres tipos; LQT2 con dos jorobas, LQT3 estrecha y tardía
  const peakT = (id) => { const s = lead(id, 'II'); const w = s.filter(({ t }) => t > R0 + 0.15 && t < R0 + 0.7); return w.reduce((a, p) => (p.v > a.v ? p : a)).t - R0; };
  assert.ok(peakT('lqt3') > peakT('lqt1') && peakT('lqt1') > peakT('normal'));
  const l2 = win(lead('lqt2', 'II'), R0 + 0.2, R0 + 0.65);
  let humps = 0;
  for (let i = 1; i < l2.length - 1; i++) if (l2[i] > l2[i - 1] && l2[i] >= l2[i + 1] && l2[i] > 0.05) humps++;
  assert.equal(humps, 2, 'T bífida en LQT2');
  assert.ok(max(l2) < max(win(lead('normal', 'II'), R0 + 0.15, R0 + 0.5)), 'T de baja amplitud en LQT2');
});

test('crecimientos auriculares: P mitral ancha y bífida (y bifásica en V1); P pulmonar alta', () => {
  const pWin = (id, l) => { const pc = R0 + 0.02 - 0.2; return lead(id, l).filter(({ t }) => t > pc - 0.12 && t < pc + 0.12); };
  const ii = pWin('lae', 'II');
  const on = ii.filter((p) => p.v > 0.025);
  assert.ok(on.at(-1).t - on[0].t >= 0.12, 'P ≥ 120 ms');
  const pc = R0 + 0.02 - 0.2;
  assert.ok(at(ii, pc) < 0.75 * max(vals(ii)), 'muesca central');
  const v1 = vals(pWin('lae', 'V1'));
  assert.ok(max(v1) > 0.03 && min(v1) <= -0.1, 'V1 bifásica con componente negativo ≥ 1 mm');
  const rae = lead('rae', 'II').filter(({ t }) => t < R0 - 0.06);
  assert.ok(max(vals(rae)) >= 0.25, 'P ≥ 2,5 mm en II');
});

test('HBAI y bifascicular: qR en aVL, rS en II/III/aVF; BRD en V1', () => {
  for (const id of ['lafb', 'rbbb-lafb']) {
    for (const l of ['II', 'III', 'aVF']) {
      const s = win(lead(id, l), R0 - 0.06, R0 + 0.08);
      assert.ok(-min(s) > 2 * max(s), `${id} ${l}: rS`);
    }
    const avl = lead(id, 'aVL');
    assert.ok(at(avl, R0 - 0.022) < -0.08 && at(avl, R0) > 0.6, `${id}: qR en aVL`);
  }
  // BRD: R' terminal en V1
  assert.ok(at(lead('rbbb-lafb', 'V1'), R0 + 0.06) > 0.5);
});

test('hiperK 12D, digoxina, WPW 12D e inversión de electrodos', () => {
  // T picudas: más altas y estrechas que en el normal
  assert.ok(max(win(lead('hyperk12', 'V3'), R0 + 0.1, R0 + 0.5)) > 1.0);
  // Digoxina: ST descendido en V5 entre el punto J y la T
  assert.ok(min(win(lead('digoxin', 'V5'), R0 + 0.05, R0 + 0.22)) < -0.15);
  // WPW: PR corto (P más próxima al QRS) y delta negativa (pseudo-Q) en III/aVF
  for (const l of ['III', 'aVF']) assert.ok(at(lead('wpw12', l), R0 - 0.04) < -0.15, `${l}: pseudo-Q`);
  assert.ok(at(lead('wpw12', 'I'), R0 - 0.04) > 0.1, 'delta positiva en I');
  // Inversión de brazos: I es el espejo del I normal; aVR positivo; II↔III; precordiales sin cambios
  const lr = (l) => sampleLead('limb-reversal', l, { seconds: 2.5 });
  const normI = sampleLead('limb-reversal', 'I', { seconds: 2.5 });
  assert.ok(max(win(normI, R0 - 0.25, R0 - 0.1)) < 0.01 && min(win(normI, R0 - 0.25, R0 - 0.1)) < -0.05, 'P negativa en I');
  assert.ok(at(normI, R0) < -0.5, 'QRS negativo en I');
  assert.ok(at(lr('aVR'), R0) > 0.4, 'aVR positivo');
  for (const l of ['V1', 'V4', 'V6']) assert.deepEqual(vals(lr(l)), vals(lead('normal', l)), `${l} sin cambios`);
  assert.ok(Math.abs(at(lr('II'), R0) - at(lr('III'), R0)) > 0.1, 'II y III distintas (intercambiadas)');
});
