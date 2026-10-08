// Cobro automático de punta a punta: app (js/premium.js) → servidor de licencias (worker/) →
// License API de Lemon Squeezy simulada.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handle } from '../worker/src/index.js';
import { _setState, getState } from '../js/storage.js';
import { activateLicense, refreshLicense, looksLikeLicense, isPremium } from '../js/premium.js';

const DAY = 864e5;
const KEY = '38b1460a-5104-4067-a91d-77b872934d51';
const ORIGIN = 'https://corazone.test';

async function setup() {
  const { privateKey, publicKey } = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const env = {
    ALLOWED_ORIGINS: ORIGIN, LS_STORE_ID: '1001', LS_PRODUCT_ID: '2002', LS_VARIANT_MONTHLY: '31', LS_VARIANT_ANNUAL: '32',
    PREMIUM_PRIVATE_JWK: JSON.stringify(await crypto.subtle.exportKey('jwk', privateKey)),
  };
  return { env, pub: await crypto.subtle.exportKey('jwk', publicKey) };
}

// Lemon Squeezy simulado: una licencia con estado y variante configurables.
function fakeLemon(lic) {
  const calls = [];
  const fn = async (url, init) => {
    const params = Object.fromEntries(new URLSearchParams(init.body));
    calls.push({ path: url.split('/').pop(), params });
    const known = params.license_key === KEY;
    const license_key = { id: 77, status: known ? lic.status : 'inactive', expires_at: lic.expires_at ?? null };
    const meta = { store_id: lic.store ?? 1001, product_id: 2002, variant_id: lic.variant ?? 32, variant_name: 'Anual' };
    const ok = known && lic.status === 'active';
    const body = url.endsWith('/activate')
      ? { activated: ok, error: ok ? null : 'license_key not found.', license_key, instance: ok ? { id: 'inst-1' } : null, meta }
      : { valid: ok, error: ok ? null : 'invalid', license_key, instance: { id: params.instance_id }, meta };
    return new Response(JSON.stringify(body), { status: ok ? 200 : 400 });
  };
  fn.calls = calls;
  return fn;
}

// La app habla con el worker como si fuera la red.
const viaWorker = (env, lemon) => async (url, init) => handle(new Request(url, { ...init, headers: { ...init.headers, Origin: ORIGIN } }), env, lemon);

test('formato de clave de licencia', () => {
  assert.ok(looksLikeLicense(KEY));
  assert.ok(!looksLikeLicense('CZP1.abc.def'));
});

test('pago → activación automática: la app obtiene Premium con el plan de la variante', async () => {
  const { env, pub } = await setup();
  const lemon = fakeLemon({ status: 'active', variant: 31 });
  _setState({});
  const r = await activateLicense(KEY, { endpoint: 'https://lic.test', publicKey: pub, fetchImpl: viaWorker(env, lemon) });
  assert.equal(r.ok, true, r.error);
  assert.equal(r.plan, 'monthly');
  assert.ok(isPremium());
  const p = getState().premium;
  assert.equal(p.source, 'license');
  assert.equal(p.instance, 'inst-1');
  // código de corta duración (≤ 35 días) para que cancelaciones y reembolsos se apliquen solos
  assert.ok(p.until > Date.now() && p.until <= Date.now() + 35 * DAY + 1000);
  assert.equal(lemon.calls[0].path, 'activate');
});

test('renovación: sólo cerca de caducar, con validate e instance_id', async () => {
  const { env, pub } = await setup();
  const lemon = fakeLemon({ status: 'active' });
  const fetchImpl = viaWorker(env, lemon);
  _setState({ premium: { plan: 'annual', until: Date.now() + 20 * DAY, source: 'license', license: KEY, instance: 'inst-1' } });
  assert.equal(await refreshLicense({ endpoint: 'https://lic.test', publicKey: pub, fetchImpl }), 'skip');
  assert.equal(lemon.calls.length, 0);
  _setState({ premium: { plan: 'annual', until: Date.now() + 2 * DAY, source: 'license', license: KEY, instance: 'inst-1' } });
  assert.equal(await refreshLicense({ endpoint: 'https://lic.test', publicKey: pub, fetchImpl }), 'renewed');
  assert.equal(lemon.calls[0].path, 'validate');
  assert.equal(lemon.calls[0].params.instance_id, 'inst-1');
  assert.ok(getState().premium.until > Date.now() + 30 * DAY);
});

test('cancelada o reembolsada: al renovar vuelve al plan gratuito', async () => {
  const { env, pub } = await setup();
  for (const status of ['expired', 'disabled']) {
    _setState({ premium: { plan: 'annual', until: Date.now() + DAY, source: 'license', license: KEY, instance: 'inst-1' } });
    const r = await refreshLicense({ endpoint: 'https://lic.test', publicKey: pub, fetchImpl: viaWorker(env, fakeLemon({ status })) });
    assert.equal(r, 'ended', status);
    assert.equal(getState().premium, null);
  }
});

test('sin conexión no se pierde Premium', async () => {
  const { pub } = await setup();
  const until = Date.now() + DAY;
  _setState({ premium: { plan: 'annual', until, source: 'license', license: KEY } });
  assert.equal(await refreshLicense({ endpoint: 'https://lic.test', publicKey: pub, fetchImpl: async () => { throw new Error('offline'); } }), 'skip');
  assert.equal(getState().premium.until, until);
});

test('el servidor rechaza licencias de otra tienda, claves desconocidas y orígenes no permitidos', async () => {
  const { env, pub } = await setup();
  _setState({});
  const other = await activateLicense(KEY, { endpoint: 'https://lic.test', publicKey: pub, fetchImpl: viaWorker(env, fakeLemon({ status: 'active', store: 9 })) });
  assert.match(other.error, /no es de Corazone/);
  const unknown = await activateLicense('00000000-0000-0000-0000-000000000000', { endpoint: 'https://lic.test', publicKey: pub, fetchImpl: viaWorker(env, fakeLemon({ status: 'active' })) });
  assert.equal(unknown.ok, false);
  assert.equal(isPremium(), false);
  const res = await handle(new Request('https://lic.test/license', { method: 'POST', headers: { Origin: 'https://evil.test', 'Content-Type': 'application/json' }, body: JSON.stringify({ license_key: KEY }) }), env, fakeLemon({ status: 'active' }));
  assert.equal(res.status, 403);
  const pre = await handle(new Request('https://lic.test/license', { method: 'OPTIONS', headers: { Origin: ORIGIN } }), env);
  assert.equal(pre.headers.get('Access-Control-Allow-Origin'), ORIGIN);
});

test('un código firmado por el servidor no sirve con otra clave pública', async () => {
  const { env } = await setup();
  const { pub: otherPub } = await setup();
  _setState({});
  const r = await activateLicense(KEY, { endpoint: 'https://lic.test', publicKey: otherPub, fetchImpl: viaWorker(env, fakeLemon({ status: 'active' })) });
  assert.equal(r.ok, false);
});
