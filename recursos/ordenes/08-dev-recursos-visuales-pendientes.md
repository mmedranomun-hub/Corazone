# Orden 08 — Recursos visuales pendientes (tiras, 12 derivaciones, curvas, esquemas)

**Prioridad:** 2 (alta, desbloquea 01, 02, 05 y 09) · **Agente:** `dev-frontend` · **Temario:** columnas "Visual" de los tres temarios

## Objetivo
Generar los trazados y esquemas que el temario necesita y que aún no existen, para que las lecciones nuevas puedan ser visuales.

## Archivos a tocar
- `js/ecg.js` (`RHYTHMS`, `TWELVE_LEAD`), `js/pressure.js` (`PRESSURES`), `js/diagrams.js` (`DIAGRAMS`).
- `tests/` (añadir tests de cada nuevo id; validar en `tests/content.test.js` que `pressure` y `diagram` (id y `highlight`) referencien ids existentes, como ya se hace con `ecg`, `ecg12` y `tap`).
- `CLAUDE.md` si cambia el formato. **Coordinar**: `js/ecg.js` se está editando en paralelo.

## Lista priorizada
1. **Tiras (`RHYTHMS`)**: `torsade`, `junctional` (escape nodal), `aivr` (RIVA), `sinusPause`, `mat` (taquicardia auricular multifocal), `paced` (VVI), `pacedFailCapture`, `bigeminy`.
2. **12 derivaciones (`TWELVE_LEAD`)** — ya existen: normal, stemi-inf, stemi-ant, stemi-lat, pericarditis, lad, rad, lvh, rbbb, lbbb12. Faltan: crecimiento AI/AD, HVD, HBAI aislado, BRD+HBAI, IAM inferior con V4R, IAM posterior, Wellens, de Winter, elevación de aVR con descenso difuso, Brugada tipo 1 y 2, WPW, hiperpotasemia, TV, DAVD (épsilon), inversión de electrodos de brazos.
3. **Curvas (`PRESSURES`)** — ya existen: ra, rv, pa, pcwp, lv, ao, pcwp-v, ra-cannon, ra-af, rv-dip, as-lv-ao, pullback-pa-pcwp. Faltan: VI-Ao en MCH (Brockenbrough), VI-AI en estenosis mitral, IA (Ao con diastólica baja), pulso paradójico, BCIA, Pd/Pa (FFR), interdependencia constricción vs restricción.
4. **Esquemas (`DIAGRAMS`)** — ya existen: coronary, a4c, plax, psax. Faltan: ojo de buey de 17 segmentos con territorios, A2C, A3C, subcostal (con VCI), mitral con festones A1–P3, planos ETE, sistema de conducción, eje hexaxial, bifurcación (Medina), proyecciones angiográficas.

## Criterios de aceptación
- [ ] Cada id nuevo tiene nombre y descripción en español y un test que comprueba SVG válido y señal finita.
- [ ] Morfologías fieles a lo que se enseña (validar con `revisor-medico` mostrando capturas).
- [ ] Colores con variables CSS; legible a 360 px de ancho, modo claro y oscuro.
- [ ] `npm test` verde; `qa-tester` sin errores de consola en Atlas.

## Prompt sugerido
```
Actúa como dev-frontend. Lee CLAUDE.md y recursos/ordenes/08-dev-recursos-visuales-pendientes.md. Comprueba el estado actual de js/ecg.js, js/pressure.js y js/diagrams.js (pueden haber cambiado).
Implementa, por este orden y por bloques (sin hacer commit salvo que te lo pidan), los elementos de la lista priorizada que falten, con tests en tests/. Asegúrate de que tests/content.test.js valida también los ids de pressure y diagram. Verifica visualmente con Playwright a 390 px en claro y oscuro. Actualiza CLAUDE.md si cambias formatos.
```
