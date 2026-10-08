// Emisión de códigos Premium (CZP1.…) firmados con tu clave privada.
//
//   node scripts/premium.mjs init                      → crea el par de claves en .premium/ (no se sube a git)
//                                                         e imprime la clave pública para js/app-config.js
//   node scripts/premium.mjs issue annual [días] [id]  → imprime un código (monthly | annual | lifetime)
//   node scripts/premium.mjs verify <código>           → comprueba un código con la clave pública de .premium/
//
// Guarda .premium/private.jwk en un lugar seguro (gestor de contraseñas): quien la tenga puede emitir códigos.
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { signCode, verifyCode } from '../js/premium.js';

const DIR = new URL('../.premium/', import.meta.url);
const PRIV = new URL('private.jwk', DIR);
const PUB = new URL('public.jwk', DIR);
const DAY = 864e5;
const DEFAULT_DAYS = { monthly: 31, annual: 366, lifetime: 0 };
const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'init') {
  if (existsSync(PRIV)) { console.error('Ya existe .premium/private.jwk; no se sobrescribe.'); process.exit(1); }
  const { privateKey, publicKey } = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const priv = await crypto.subtle.exportKey('jwk', privateKey);
  const pub = await crypto.subtle.exportKey('jwk', publicKey);
  const pubMin = { kty: pub.kty, crv: pub.crv, x: pub.x, y: pub.y };
  mkdirSync(DIR, { recursive: true });
  writeFileSync(PRIV, JSON.stringify(priv), { mode: 0o600 });
  writeFileSync(PUB, JSON.stringify(pubMin));
  console.log('Claves creadas en .premium/. Pega esto en js/app-config.js → premium.publicKey:\n');
  console.log(JSON.stringify(pubMin));
} else if (cmd === 'issue') {
  const [plan = 'annual', daysArg, id = `c${Date.now().toString(36)}`] = args;
  if (!(plan in DEFAULT_DAYS)) { console.error('Plan: monthly | annual | lifetime'); process.exit(1); }
  const days = daysArg != null ? Number(daysArg) : DEFAULT_DAYS[plan];
  const priv = JSON.parse(readFileSync(PRIV, 'utf8'));
  const e = days ? Date.now() + days * DAY : 0;
  console.log(await signCode({ v: 1, p: plan, e, i: id }, priv));
} else if (cmd === 'verify') {
  const pub = JSON.parse(readFileSync(PUB, 'utf8'));
  console.log(await verifyCode(args[0], pub));
} else {
  console.log('Uso: node scripts/premium.mjs init | issue <monthly|annual|lifetime> [días] [id] | verify <código>');
}
