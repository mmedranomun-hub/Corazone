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

## Estado (2026-10-07, dev-frontend)
- [x] **Tiras hechas** (ids reales en `RHYTHMS`): `torsade`, `afib-wpw` (FA preexcitada), `pacer-vvi` (= `paced`), `pacer-ddd`, `junctional`, `sinus-arrest` (= `sinusPause`), `alternans`, `ivr` (= `aivr`, RIVA), `bigeminy`, `afib-slow`. Nuevo tipo de onda para `tap`: `spike` (espigas de marcapasos, `waveTimes(id, 'spike')`).
- [x] **Tiras hechas (2.ª tanda)**: `mat` (TAM), `pacer-fail` (= `pacedFailCapture`, fallo de captura), `pacer-undersense` (fallo de detección), `vt-bidir` (TV bidireccional), `vt-capture` (TV con latido de captura y de fusión), `afl-4to1` (flutter 4:1), `2to1-avb` (BAV 2:1). Nuevos tipos de onda para `tap`: `capture` y `fusion` (sólo en `vt-capture`); `spike` incluye ahora también las espigas sin captura.
- [x] **12D hechos** (`TWELVE_LEAD`): `wellens` (tipo B), `wellens-a` (tipo A), `dewinter`, `brugada1`, `posterior`, `stemi-inf-rv` (sin V4R: lo indica la desc), `hypok`, `rvh` (HVD), `lowvoltage`, `early-repol`, `pacer12`.
- [x] **12D hechos (2.ª tanda)**: `lae` (crecimiento AI), `rae` (crecimiento AD), `lafb` (HBAI aislado), `rbbb-lafb` (BRD + HBAI), `brugada2`, `wpw12` (vía posteroseptal, pseudo-Q inferior), `hyperk12`, `vt12` (concordancia negativa, eje superior), `arvc` (DAVD, épsilon), `limb-reversal` (inversión de electrodos de brazos), `lqt1`, `lqt2`, `lqt3`, `digoxin` (cubeta digitálica).
- [ ] 12D pendientes: elevación de aVR con descenso difuso del ST; V4R/V7–V9 requieren derivaciones extra (no soportadas por `render12`).
- [x] **Curvas hechas** (`PRESSURES`): `ms-lv-la` (EM: VI–AI), `ar-ao-lv` (IA), `hcm-brockenbrough` (MCH, latido postextrasistólico), `pulsus-paradoxus`, `iabp` (BCIA 1:2), `ffr` (Pa/Pd con adenosina), `constriction-lv-rv` y `restriction-lv-rv` (VI–VD con respiración). Nuevos moduladores en `js/pressure.js`: `beatGain` (latido a latido), `insp` (respiración), `above`.
- [x] **Esquemas hechos** (`DIAGRAMS`): `bullseye` (17 segmentos; partes `b-*`, `m-*`, `a-*`, `apex`) y `conduction` (`sa`, `internodal`, `av`, `his`, `rb`, `lb`, `laf`, `lpf`, `purkinje`). Clase CSS nueva `.diagram .node`.
- [x] Usados en contenido: `cate-u7-l4` (nueva, 9 preguntas), `cate-u7-l3`, `eco-u7-l2`, `ecg-u1-l2`, `ecg-u6-l3`. Tests: `tests/visuals-avanzado.test.js` (comprobaciones fisiológicas de cada curva).
- [ ] Esquemas pendientes: A2C, A3C, subcostal con VCI, mitral con festones, planos ETE, eje hexaxial, bifurcación (Medina), proyecciones angiográficas.
- Tests: `tests/ecg-trazados.test.js` y `tests/ecg-trazados2.test.js`. Los trazados previos y sus `waveTimes` no cambian (comprobado con hash de `renderEcg`/`render12`/`waveTimes` antes y después).
- Pendiente de documentar en `CLAUDE.md` (lo hace el integrador): `wave` de `tap` admite también `capture | fusion`.

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
