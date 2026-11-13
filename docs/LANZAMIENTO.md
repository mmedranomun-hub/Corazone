# Auditoría de lanzamiento — Corazone

_8 de octubre de 2026 · rama `claude/charming-maxwell-s8et8t`_

**Veredicto:** lista para una **beta cerrada** en cuanto rellenes 3 datos de configuración (responsable, correo y clave Premium) y publiques en GitHub Pages. **No** está lista para cobrar a público general: faltan el cobro automatizado, la revisión legal de los textos y una pasada médica completa.

Leyenda: 🟢 listo · 🟡 funciona, con trabajo pendiente · 🔴 bloquea el lanzamiento de pago.

---

## 1. Contenido

| | Estado | Detalle |
|---|---|---|
| 🟢 | Volumen | 991 preguntas: ECG 212 · Eco 122 · Cateterismo 129 · Casos clínicos 528 (18 unidades, 88 lecciones) + 5 guardias. |
| 🟢 | Recursos visuales | 60+ trazados de ECG (tira y 12 derivaciones), 20 curvas de presión, 6 esquemas, todo generado por la app y verificado con tests. |
| 🟡 | Revisión médica | Se han revisado unidades sueltas (ECG avanzado, Brugada/QT, eco-u8, curvas avanzadas) y en cada pasada aparecen errores reales. **Falta una pasada sistemática de las 991 preguntas** (siguiente tarea propuesta, B). |
| 🔴 | Aval humano | Para decir «revisado por cardiólogos» en la ficha o en marketing hace falta que lo firme una persona con nombre. La revisión con IA no puede anunciarse como tal. Sin aval, la app es igualmente publicable, pero sin esa afirmación. |
| 🟡 | Huecos del temario | Esquemas de eco pendientes (A2C, A3C, subcostal, festones mitrales, ETE), elevación de aVR con descenso difuso del ST. No bloquean. |

## 2. Producto y monetización (hecho en esta entrega)

| | Estado | Detalle |
|---|---|---|
| 🟢 | Plan gratuito | Cursos completos de ECG, eco y cateterismo, atlas, práctica, ligas, misiones, las 4 primeras unidades de casos y 2 guardias. Suficiente para enganchar sin regalar todo. |
| 🟢 | Premium | Vidas ilimitadas, las 14 unidades restantes de casos (426 preguntas), todas las guardias y nivel legendario gratis. Pantalla `#/premium` con planes, tarjeta en Perfil, Ajustes y Tienda, ♾️ en la barra superior y avisos en los puntos de bloqueo (sin vidas, casos 💎, guardias). |
| 🟢 | Prueba gratuita | 7 días, una por perfil, sin tarjeta. |
| 🟢 | Códigos Premium | `CZP1.…` firmados con ECDSA P-256: la app sólo tiene la clave pública, así que no se pueden falsificar. Se emiten con `node scripts/premium.mjs issue`. Se conservan al sincronizar entre dispositivos. |
| 🟡 | Precios | 4,99 €/mes o 29,99 €/año (2,50 €/mes), editables en `js/app-config.js`. Son orientativos para estudiantes en España; valídalos en la beta. |
| 🟡 | Cobro automático | **Hecho** (ver `docs/PAGOS.md`): Lemon Squeezy cobra y envía la licencia; el servidor de licencias (`worker/`, Cloudflare gratis) la valida y la app se activa y renueva sola. Falta que abras las cuentas y despliegues (≈ 45 min). Probado con 7 tests de punta a punta (Lemon Squeezy simulado). |
| 🟡 | Seguridad del paywall | El bloqueo es en el cliente: alguien con conocimientos puede editar el localStorage y darse Premium. Es aceptable para empezar (casi todas las PWA de nicho lo asumen); se cierra al mover la suscripción al servidor junto con el cobro automático. |

## 3. Legal y privacidad (hecho en esta entrega, falta revisión)

| | Estado | Detalle |
|---|---|---|
| 🟢 | Aviso médico | Se acepta en el onboarding y, para usuarios ya existentes, en una pantalla única (`LEGAL_VERSION`; al subirla se vuelve a pedir). Visible en Ajustes y en `#/legal/aviso`. |
| 🟡 | Privacidad y términos | Plantillas en `#/legal/privacidad` y `#/legal/terminos` (RGPD, desistimiento UE, suscripciones, códigos). **Deben revisarlas un abogado antes de cobrar.** |
| 🔴 | Identidad del titular | La LSSI exige un aviso legal con nombre o razón social, NIF y domicilio si hay actividad económica. Rellena `owner` y `contactEmail` en `js/app-config.js` y añade esos datos al aviso legal. |
| 🟡 | IVA y facturación | Resuelto con Lemon Squeezy como *merchant of record*: factura y liquida el IVA de la UE. Tú declaras los ingresos que te paga (consulta con tu gestor: alta como autónomo o actividad económica según volumen). |
| 🟡 | Google Fonts | La fuente Nunito se carga desde Google, lo que envía la IP del usuario a Google (en Alemania hay sentencias en contra). Conviene alojarla en el propio sitio. |
| 🟢 | Datos | Todo en el dispositivo por defecto. Nube opcional (Firebase). Sin cookies de seguimiento. |

## 4. Técnica

| | Estado | Detalle |
|---|---|---|
| 🟢 | Calidad | 113 tests automáticos en verde (contenido, trazados, fisiología de las curvas, cuentas, sincronización, Premium). Flujos nuevos probados en Chromium a 390 px, en claro y oscuro, sin errores de consola. |
| 🟢 | PWA | Instalable, funciona sin conexión, caché `corazone-v6` con todos los archivos nuevos. |
| 🟢 | Despliegue | `.github/workflows/pages.yml` publica en GitHub Pages en cada push a `main` tras pasar los tests; `tests.yml` los ejecuta en ramas y PR. |
| 🟡 | Rama | El trabajo reciente está en `claude/charming-maxwell-s8et8t`; hay que fusionarlo en `main` (PR) para publicarlo. |
| 🟡 | Cuentas en la nube | Desactivadas (`firebaseConfig = null`). Sin ellas, cambiar de móvil exige el código de progreso. Recomendable antes del lanzamiento público (guía en `docs/CUENTAS.md`). |
| 🟡 | Analítica | Lista pero apagada: `js/analytics.js` (Plausible o compatible, sin cookies, respeta Do Not Track y Global Privacy Control, con interruptor en Ajustes). Eventos: vistas de pantalla, inicio y fin de lección, sin vidas, vista del paywall, clic en pagar, inicio de prueba y canje. |
| 🟢 | Reportar errores | Botón «⚑ Reportar» tras cada corrección: abre un correo con el id de la pregunta. Sólo aparece si hay `contactEmail`. |

---

## Puesta en marcha (lo que tienes que hacer tú)

1. **Datos del titular**: en `js/app-config.js`, rellena `owner` y `contactEmail`.
2. **Clave Premium**: ejecuta `node scripts/premium.mjs init`, pega la clave pública que imprime en `premium.publicKey` y guarda `.premium/private.jwk` en un gestor de contraseñas. Si la pierdes, no podrás emitir códigos; si se filtra, cualquiera podrá hacerlo.
3. **Cobro automático**: sigue `docs/PAGOS.md` (Lemon Squeezy + servidor de licencias en Cloudflare). Después no hay que hacer nada por venta.
4. **Publicar**: fusiona la rama en `main` y en GitHub ve a Settings → Pages → Source: **GitHub Actions**. La URL será `https://<usuario>.github.io/corazone/` (o tu dominio propio).
5. **Analítica** (opcional): crea el sitio en Plausible y pon `provider: 'plausible'` y `domain` en `analytics`.
6. **Beta cerrada**: entre 20 y 50 estudiantes o residentes durante 2–3 semanas.

## Criterios para pasar de beta a lanzamiento de pago

- Retención a los 7 días ≥ 25 % y al menos 3 lecciones por usuario activo y semana.
- Menos de 1 error de contenido reportado por cada 200 preguntas respondidas, y todos corregidos.
- Al menos un 5 % de los usuarios que ven el paywall inicia la prueba; si nadie paga tras la prueba, revisa el precio o qué entra en Premium.
- Resueltos los 🔴: textos legales revisados e identidad del titular; cobro automático desplegado y probado en modo test.

## Siguientes pasos propuestos

1. **B — Revisión médica completa** de las 991 preguntas, por curso y en paralelo, aplicando las correcciones.
2. Desplegar el cobro automático (`docs/PAGOS.md`).
3. Alojar la fuente en el propio sitio y añadir la página de aviso legal (LSSI) con los datos del titular.
4. Activar Firebase para las cuentas en la nube.
