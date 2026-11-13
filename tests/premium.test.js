import { test } from 'node:test';
import assert from 'node:assert/strict';
import { _setState, getState } from '../js/storage.js';
import { COURSES, loadAllCourses } from '../js/data/courses.js';
import { activePlan, isPremium, canTrial, startTrial, signCode, verifyCode, redeemCode, isPremiumUnit, guardiaNeedsPremium, bestPlan, FREE } from '../js/premium.js';
import { mergeStates } from '../js/sync.js';

const DAY = 864e5;
const keys = async () => {
  const { privateKey, publicKey } = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  return { priv: await crypto.subtle.exportKey('jwk', privateKey), pub: await crypto.subtle.exportKey('jwk', publicKey) };
};

test('plan activo: caduca y "until 0" es para siempre', () => {
  const now = Date.now();
  assert.equal(activePlan({ premium: null }), null);
  assert.ok(isPremium({ premium: { plan: 'annual', until: now + DAY } }, now));
  assert.ok(!isPremium({ premium: { plan: 'annual', until: now - 1 } }, now));
  assert.ok(isPremium({ premium: { plan: 'lifetime', until: 0 } }, now));
});

test('prueba gratuita: una sola vez por perfil', () => {
  _setState({});
  assert.ok(canTrial());
  assert.ok(startTrial());
  assert.equal(getState().premium.plan, 'trial');
  assert.ok(isPremium());
  assert.ok(!startTrial());
  _setState({ trialUsed: true });
  assert.ok(!canTrial());
});

test('códigos: firma válida, manipulación, caducidad y formato', async () => {
  const { priv, pub } = await keys();
  const code = await signCode({ v: 1, p: 'annual', e: Date.now() + 365 * DAY, i: 'test' }, priv);
  assert.match(code, /^CZP1\.[\w-]+\.[\w-]+$/);
  assert.equal((await verifyCode(code, pub)).ok, true);
  // otro plan con la misma firma → inválido
  const [, data, sig] = code.split('.');
  const forged = `CZP1.${Buffer.from(JSON.stringify({ v: 1, p: 'lifetime', e: 0 })).toString('base64url')}.${sig}`;
  assert.equal((await verifyCode(forged, pub)).ok, false);
  assert.equal((await verifyCode(`CZP1.${data}.${sig.slice(0, -2)}AA`, pub)).ok, false);
  // otra clave → inválido
  assert.equal((await verifyCode(code, (await keys()).pub)).ok, false);
  const old = await signCode({ v: 1, p: 'monthly', e: Date.now() - 1 }, priv);
  assert.match((await verifyCode(old, pub)).error, /caducado/);
  assert.equal((await verifyCode('hola', pub)).ok, false);
  assert.match((await verifyCode(code, null)).error, /no está activado/);
});

test('canjear un código activa el plan', async () => {
  const { priv, pub } = await keys();
  _setState({});
  const r = await redeemCode(await signCode({ v: 1, p: 'lifetime', e: 0, i: 'x1' }, priv), pub);
  assert.equal(r.ok, true);
  assert.deepEqual([getState().premium.plan, getState().premium.until], ['lifetime', 0]);
  assert.ok(isPremium());
});

test('contenido de pago: sólo casos desde la unidad FREE.casosUnits y guardias desde FREE.guardias', async () => {
  await loadAllCourses();
  const casos = COURSES.find((c) => c.id === 'casos');
  assert.ok(casos.units.length > FREE.casosUnits);
  assert.equal(isPremiumUnit(casos, casos.units[0]), false);
  assert.equal(isPremiumUnit(casos, casos.units[FREE.casosUnits]), true);
  for (const c of COURSES.filter((x) => x.id !== 'casos')) assert.ok(c.units.every((u) => !isPremiumUnit(c, u)), c.id);
  assert.equal(guardiaNeedsPremium(0), false);
  assert.equal(guardiaNeedsPremium(FREE.guardias), true);
});

test('sincronización: se conserva el mejor plan y la prueba usada', () => {
  const a = { plan: 'monthly', until: Date.now() + 10 * DAY };
  const b = { plan: 'annual', until: Date.now() + 300 * DAY };
  assert.equal(bestPlan(a, b), b);
  assert.equal(bestPlan(null, a), a);
  assert.equal(bestPlan({ plan: 'lifetime', until: 0 }, b).plan, 'lifetime');
  const m = mergeStates({ xp: 10, premium: b, updatedAt: 1, completed: { x: 1 } }, { xp: 5, premium: null, trialUsed: true, updatedAt: 2, completed: { y: 1 } });
  assert.equal(m.premium, b);
  assert.equal(m.trialUsed, true);
});
