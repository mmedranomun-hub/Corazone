# Cobros de Corazone Premium (automático)

Cuando lo configures, **no tendrás que hacer nada en cada venta**. El dinero llega a tu cuenta bancaria o de PayPal y el acceso Premium se activa, se renueva y se retira solo.

```
Usuario ──paga──▶ Lemon Squeezy ──correo con clave de licencia──▶ Usuario
                     │  (cobra, factura, IVA de toda la UE,
                     │   renovaciones, cancelaciones, reembolsos)
Usuario pega la clave en #/premium
App ──clave──▶ Servidor de licencias (Cloudflare Worker, gratis) ──valida──▶ Lemon Squeezy
App ◀── código Premium firmado (válido ≤ 35 días) ──┘
App: lo renueva sola mientras la suscripción siga activa; si se cancela o reembolsa, vuelve al plan gratis.
```

**Por qué Lemon Squeezy:** actúa como *merchant of record*. Legalmente vende él, así que emite las facturas y declara y paga el IVA de cada país de la UE por ti. Tú recibes los ingresos netos. Comisión orientativa: ~5 % + 0,50 $ por venta (comprueba la tarifa actual en su web). Acepta tarjeta, Apple Pay, Google Pay y PayPal.

**Lo que no puedo hacer por ti:** abrir las cuentas, verificar tu identidad ni conectar tu banco, porque exigen tus datos personales y tu firma. Todo lo demás está hecho y probado: la app, el servidor y 7 tests de punta a punta con Lemon Squeezy simulado. Te llevará unos 30–45 minutos.

---

## Paso 1 · Clave Premium (2 min, en tu ordenador)

```bash
npm run premium:init
```

- Pega la clave pública que imprime en `js/app-config.js` → `premium.publicKey`.
- Guarda `.premium/private.jwk` en tu gestor de contraseñas: es la que firma los accesos. No va a git (está en `.gitignore`).

## Paso 2 · Lemon Squeezy (15–20 min)

1. Crea la cuenta en lemonsqueezy.com y una tienda (**Store**) en EUR.
2. **Settings → Payouts:** conecta tu banco o PayPal y completa la verificación de identidad. Hasta que la aprueben puedes usar el modo de prueba (*Test mode*).
3. **Products → New product:**
   - **Nombre:** `Corazone Premium`
   - **Descripción** (para pegar):
     > Acceso Premium a Corazone, la app para aprender ECG, ecocardiografía y cateterismo jugando. Incluye vidas ilimitadas, todos los casos clínicos (más de 500 preguntas de ETT, ETE, cateterismo y ECG), todas las historias de guardia y el nivel legendario gratis. Tras el pago recibirás una clave de licencia: pégala en Corazone → Perfil → Hazte Premium → «¿Ya has pagado? Activa tu licencia». Herramienta educativa: no sustituye el juicio clínico.
   - **Pricing → Subscription**, con dos variantes:
     - `Mensual`: 4,99 € cada mes
     - `Anual`: 29,99 € cada año
   - (Opcional) Un periodo de prueba en Lemon Squeezy no hace falta: la app ya ofrece 7 días gratis sin tarjeta.
   - **License keys:** actívalo.
     - Activation limit: **5** (dispositivos por compra).
     - License length: **unlimited**. La duración la marca la suscripción: si se cancela o caduca, la clave pasa a *expired*.
   - **Confirmation modal / Thank-you note** (para pegar):
     > ¡Gracias por apoyar Corazone! 🫀 Copia tu clave de licencia (también te llega por correo) y pégala en la app: Perfil → Hazte Premium → «¿Ya has pagado? Activa tu licencia».
   - **Button link** del modal: la URL de tu app con `#/premium`, p. ej. `https://usuario.github.io/corazone/#/premium`.
4. Apunta estos datos:
   - **Store ID:** Settings → Stores, el número junto al nombre.
   - **Product ID** y los **Variant ID** de Mensual y Anual: en la página del producto o en la URL al editar cada variante.
   - Los **enlaces de pago** (*Share → Checkout URL*) de cada variante.

## Paso 3 · Servidor de licencias en Cloudflare (10 min, gratis)

1. Crea una cuenta gratuita en cloudflare.com (no hace falta dominio).
2. Edita `worker/wrangler.toml`:
   - `ALLOWED_ORIGINS`: el origen de tu app, p. ej. `"https://usuario.github.io"` (sin ruta; separa con comas si hay varios).
   - `LS_STORE_ID`, `LS_PRODUCT_ID`, `LS_VARIANT_MONTHLY`, `LS_VARIANT_ANNUAL`: los del paso 2.
3. Ejecuta:

```bash
npm run pagos:login     # abre el navegador para autorizar a Cloudflare
npm run pagos:secret    # sube tu clave privada como secreto (no queda en el código)
npm run pagos:deploy    # publica; al final muestra la URL https://corazone-licencias.<tu-cuenta>.workers.dev
```

## Paso 4 · Conectar la app (2 min)

En `js/app-config.js`:

```js
premium: {
  checkout: { monthly: 'https://….lemonsqueezy.com/buy/…', annual: 'https://….lemonsqueezy.com/buy/…' },
  licenseEndpoint: 'https://corazone-licencias.<tu-cuenta>.workers.dev',
  publicKey: { kty: 'EC', crv: 'P-256', x: '…', y: '…' },
  …
}
```

Rellena también `owner` y `contactEmail`. Haz commit y publica (push a `main`).

## Paso 5 · Prueba de extremo a extremo (5 min)

1. En Lemon Squeezy activa **Test mode** y compra con la tarjeta de prueba `4242 4242 4242 4242` (cualquier fecha futura y cualquier CVC).
2. Copia la clave de licencia y pégala en la app, en `#/premium`. Debe aparecer «¡Eres Premium!».
3. En Lemon Squeezy cancela esa suscripción de prueba. Al acercarse la fecha de renovación, la app vuelve al plan gratuito sin perder el progreso.
4. Desactiva Test mode. Si usas productos o claves distintos en modo real, repite el paso 2.4.

---

## Funcionamiento diario

- **Ventas, renovaciones, cancelaciones y reembolsos:** automáticos.
- **Ingresos y facturas:** panel de Lemon Squeezy. Las retiradas a tu banco son periódicas.
- **Soporte:** si alguien dice que no le funciona la clave, búscala en Lemon Squeezy → Licenses. Ahí ves su estado y sus activaciones, y puedes liberar dispositivos si ha llegado al límite de 5.
- **Regalos, becas o promociones:** `npm run premium:issue annual` genera un código manual de un año. Hay más opciones en `scripts/premium.mjs`.
- **Cambiar precios:** edita las variantes en Lemon Squeezy y `premium.prices` en `js/app-config.js`. Los suscriptores actuales mantienen su precio según la política de Lemon Squeezy.
- **Cupones:** en Lemon Squeezy → Discounts (p. ej. 50 % para una facultad). No requiere tocar la app.

## Seguridad y límites (honesto)

- **No se pueden fabricar accesos:** la app sólo tiene la clave pública y el servidor sólo firma licencias activas de tu tienda y tu producto.
- **Uso tras cancelar o reembolsar:** como mucho, hasta que caduque el último código firmado (≤ 35 días; en la práctica, menos).
- **Alguien con conocimientos técnicos** podría saltarse el bloqueo editando el almacenamiento del navegador, porque el contenido vive en la app. Es el mismo compromiso que asumen casi todas las PWA sin servidor. Si algún día importa, se cierra sirviendo los casos Premium desde el servidor.
- **El servidor no guarda nada:** recibe la clave, pregunta a Lemon Squeezy y responde. Cloudflare Workers gratis admite 100.000 peticiones al día, de sobra.
