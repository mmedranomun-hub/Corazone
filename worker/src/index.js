// Corazone · servidor de licencias (Cloudflare Worker, plan gratuito).
//
// Flujo sin intervención manual:
//   1. El usuario paga en Lemon Squeezy (merchant of record: cobra, factura y liquida el IVA)
//      y recibe por correo una clave de licencia.
//   2. La app envía la clave a POST /license. Este worker la activa/valida contra la License API
//      de Lemon Squeezy, comprueba que es de tu tienda y producto, y devuelve un código Premium
//      CZP1 firmado con tu clave privada, válido como mucho REFRESH_DAYS días.
//   3. La app renueva el código sola antes de que caduque. Si la suscripción se cancela, caduca
//      o se reembolsa, Lemon Squeezy desactiva la clave y deja de renovarse.
//
// Variables (wrangler.toml [vars]): ALLOWED_ORIGINS, LS_STORE_ID, LS_PRODUCT_ID,
//   LS_VARIANT_MONTHLY, LS_VARIANT_ANNUAL, LS_VARIANT_LIFETIME (opcionales salvo LS_STORE_ID).
// Secreto (wrangler secret put PREMIUM_PRIVATE_JWK): contenido de .premium/private.jwk.

const LS_API = 'https://api.lemonsqueezy.com/v1/licenses';
const DAY = 864e5;
const REFRESH_DAYS = 35; // un código dura como mucho esto: limita el uso tras cancelar o reembolsar

const b64u = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

export async function signCode(payload, jwk) {
  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const data = b64u(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(data));
  return `CZP1.${data}.${b64u(sig)}`;
}

function cors(req, env) {
  const origin = req.headers.get('Origin') || '';
  const allowed = String(env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const ok = allowed.includes(origin) || allowed.includes('*');
  return ok ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' } : {};
}

const json = (body, status, headers) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', ...headers } });

async function lemon(path, params, fetchImpl) {
  const res = await fetchImpl(`${LS_API}/${path}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(params).toString(),
  });
  let data = null;
  try { data = await res.json(); } catch { /* respuesta vacía */ }
  return { status: res.status, data };
}

// Plan según la variante comprada.
function planOf(meta, env) {
  const v = String(meta?.variant_id ?? '');
  if (v && v === String(env.LS_VARIANT_LIFETIME || '')) return 'lifetime';
  if (v && v === String(env.LS_VARIANT_MONTHLY || '')) return 'monthly';
  if (v && v === String(env.LS_VARIANT_ANNUAL || '')) return 'annual';
  return /mensual|month/i.test(meta?.variant_name || '') ? 'monthly' : 'annual';
}

export async function handle(req, env, fetchImpl = fetch, now = Date.now()) {
  const headers = cors(req, env);
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  const url = new URL(req.url);
  if (req.method !== 'POST' || url.pathname !== '/license') return json({ ok: false, error: 'No encontrado' }, 404, headers);
  if (!headers['Access-Control-Allow-Origin'] && req.headers.get('Origin')) return json({ ok: false, error: 'Origen no permitido' }, 403, headers);
  if (!env.PREMIUM_PRIVATE_JWK || !env.LS_STORE_ID) return json({ ok: false, error: 'Servidor sin configurar' }, 500, headers);

  let body;
  try { body = await req.json(); } catch { return json({ ok: false, error: 'Petición no válida' }, 400, headers); }
  const key = String(body?.license_key || '').trim();
  if (!/^[A-Za-z0-9-]{16,64}$/.test(key)) return json({ ok: false, error: 'La clave de licencia no tiene un formato válido.' }, 400, headers);

  // Primera vez en este dispositivo → activar (cuenta para el límite de dispositivos); después → validar.
  const r = body.instance_id
    ? await lemon('validate', { license_key: key, instance_id: String(body.instance_id) }, fetchImpl)
    : await lemon('activate', { license_key: key, instance_name: String(body.instance_name || 'Corazone').slice(0, 60) }, fetchImpl);
  const d = r.data || {};
  const lk = d.license_key || {};
  const meta = d.meta || {};
  const accepted = (body.instance_id ? d.valid : d.activated) && lk.status !== 'expired' && lk.status !== 'disabled';
  if (!accepted) {
    const reason = lk.status === 'expired' ? 'La suscripción ha caducado. Renuévala para seguir con Premium.'
      : lk.status === 'disabled' ? 'Esta licencia está desactivada (cancelación o reembolso).'
      : /activation limit/i.test(d.error || '') ? 'Has alcanzado el límite de dispositivos de esta licencia.'
      : 'Licencia no válida. Revisa que la has copiado entera.';
    return json({ ok: false, error: reason, status: lk.status || null }, r.status >= 500 ? 502 : 400, headers);
  }
  if (String(meta.store_id) !== String(env.LS_STORE_ID) || (env.LS_PRODUCT_ID && String(meta.product_id) !== String(env.LS_PRODUCT_ID))) {
    return json({ ok: false, error: 'Esta licencia no es de Corazone.' }, 400, headers);
  }

  const plan = planOf(meta, env);
  const lsEnd = lk.expires_at ? Date.parse(lk.expires_at) : 0;
  const cap = now + REFRESH_DAYS * DAY;
  // De por vida sin caducidad → código sin caducidad; si no, el menor entre la licencia y el tope.
  const e = plan === 'lifetime' && !lsEnd ? 0 : Math.min(lsEnd || cap, cap);
  const jwk = typeof env.PREMIUM_PRIVATE_JWK === 'string' ? JSON.parse(env.PREMIUM_PRIVATE_JWK) : env.PREMIUM_PRIVATE_JWK;
  const code = await signCode({ v: 1, p: plan, e, i: `ls:${lk.id ?? ''}` }, jwk);
  return json({ ok: true, code, plan, until: e, instance_id: d.instance?.id || body.instance_id || null }, 200, headers);
}

export default { fetch: (req, env) => handle(req, env) };
