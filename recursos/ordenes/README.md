# Órdenes de trabajo

Cada archivo es una orden lista para entregar a un agente (`redactor-contenido`, `redactor-casos` o `dev-frontend`). Las órdenes 11–13 salen del banco de temas `../banco-temas-casos.md` (fuentes de inspiración en `../fuentes-casos.md`); 11, 12 y 13 editan el mismo archivo (`js/data/casos.js`): ejecutarlas en serie o coordinar ids de unidad. Formato: objetivo · archivos a tocar · alcance · criterios de aceptación · prompt sugerido.

## Índice por prioridad
| Prioridad | Orden | Agente | Curso | Nivel | Depende de |
|---|---|---|---|---|---|
| 1 | [01 — Hipertrofias y bloqueos de rama](01-ecg-hipertrofias-y-bloqueos-rama.md) | redactor-contenido | ECG | N2 | (08 para ECG 12D, opcional) |
| 2 | [08 — Recursos visuales pendientes](08-dev-recursos-visuales-pendientes.md) | dev-frontend | Todos | — | — |
| 2 | [02 — Localización del IAM y OMI](02-ecg-localizacion-iam-y-omi.md) | redactor-contenido | ECG | N2–N3 | 08 (ECG 12D) |
| 4 | [04 — Cate: SCA y shock](04-cate-sca-y-shock.md) | redactor-contenido | Cate | N2–N3 | — |
| 5 | [05 — QRS ancho y canalopatías](05-ecg-qrs-ancho-y-canalopatias.md) | redactor-contenido | ECG | N2–N3 | 08 (torsade, Brugada) |
| 6 | [06 — Casos clínicos integrados](06-casos-clinicos-integrados.md) | redactor-contenido | Todos | N2–N3 | 01–05 idealmente |
| 7 | [07 — HP y hemodinámica avanzada](07-cate-hp-y-hemodinamica-avanzada.md) | redactor-contenido | Cate | N2–N3 | — |
| 9 | [10 — Material, ICP avanzada y radioprotección](10-cate-material-icp-y-radioproteccion.md) | redactor-contenido | Cate | N1–N3 | — |
| 9 | [13 — Casos de ECG, lote 1](13-casos-ecg-lote-1.md) | redactor-casos | Casos (ECG) | N1–N3 | — (ids visuales existentes) |
| 10 | [11 — Casos de eco, lote 2](11-casos-eco-lote-2.md) | redactor-casos | Casos (ETT/ETE) | N2–N3 | — |
| 11 | [12 — Casos de cateterismo, lote 2](12-casos-cateterismo-lote-2.md) | redactor-casos | Casos (cate) | N2–N3 | — |

## Hecho
- `eco-u4` Miocardiopatías y `eco-u5` Función diastólica y POCUS (24 preguntas), creadas junto con esta carpeta.
- [03 — Eco: valvulopatías avanzado](03-eco-valvulopatias-avanzado.md) → `eco-u6` (4 lecciones).
- [09 — Eco: física, segmentos y cuantificación](09-eco-fisica-segmentacion-y-cuantificacion.md) → `eco-u7` (4 lecciones).
- Temario eco Unidad 7 "Pericardio ampliado" (sin orden propia) → `eco-u8` (3 lecciones, 18 preguntas: derrame y taponamiento, constrictiva, pericarditis aguda/drenaje/diagnóstico diferencial). Pendiente: actualizar `recursos/temario/eco.md` y revisión médica.

## Reglas para ejecutar una orden
1. Una orden por agente y por archivo de datos a la vez (evita conflictos: `js/data/*.js` puede estar editándose en paralelo; lee el estado actual justo antes).
2. Al terminar: `npm test` → `revisor-medico` (con `checklist-revision.md`) → corregir → `qa-tester` si hay recursos visuales nuevos → PR.
3. Marca la orden como hecha moviéndola a la sección "Hecho" de este índice y actualiza el temario.

## Cómo escribir una orden nueva
Copia cualquiera de las anteriores. Debe incluir: prioridad, agente, nivel, referencia al temario, archivos exactos, criterios de aceptación medibles (n.º de lecciones/preguntas, guías y cifras clave, recursos visuales) y un prompt autocontenido.
