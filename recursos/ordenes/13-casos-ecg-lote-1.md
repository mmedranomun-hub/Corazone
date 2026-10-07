# Orden 13 — Casos de ECG, lote 1

**Prioridad:** 9 (alta: aún no hay ningún caso de ECG en `casos.js`) · **Agente:** `redactor-casos` · **Nivel:** N1–N3 · **Banco:** `recursos/banco-temas-casos.md` §4 · **Fuentes de inspiración:** `recursos/fuentes-casos.md` · **Relación:** cubre la parte ECG de la orden 06

## Objetivo
Crear el primer bloque de casos de ECG (palpitaciones, síncope, dolor torácico, alteraciones iónicas) con 10 lecciones-caso que usen solo trazados ya disponibles (`RHYTHMS` y `TWELVE_LEAD`).

## Archivos a tocar
- `js/data/casos.js`: 2 unidades nuevas al final (ids libres; p. ej. "Casos de ECG: arritmias" y "Casos de ECG: dolor torácico e iones"). **Coordinar** con las órdenes 11 y 12 (mismo archivo).
- `js/data/guides.js`: guía de cada unidad nueva.
- `recursos/banco-temas-casos.md`: ⬜ → ✅ con el id de lección.

## Temas (del banco)
| # | ID banco | Tema | Visual |
|---|---|---|---|
| 1 | ECG-01 | FA de reciente diagnóstico: CHA₂DS₂-VA, frecuencia vs ritmo | `ecg: afib` |
| 2 | ECG-03 | TSV por reentrada intranodal: vagales, adenosina, ablación | `ecg: svt` |
| 3 | ECG-04 | FA preexcitada (WPW): por qué no frenar el NAV | `ecg: wpw` (ritmo basal tras CVE) |
| 4 | ECG-06 | TV monomórfica en cardiopatía isquémica: criterios, CVE, DAI | `ecg: vt` |
| 5 | ECG-07 | Torsade de pointes por QT largo adquirido: QTc (Bazett), Mg | `ecg: longqt` |
| 6 | ECG-10 | BAV completo con escape ancho: manejo agudo y marcapasos | `ecg: avb3` |
| 7 | ECG-14 | Hiperpotasemia en ERC: secuencia de cambios y tratamiento | `ecg: hyperk` |
| 8 | ECG-16 | Pericarditis aguda vs IAMCEST | `ecg12: pericarditis` |
| 9 | ECG-17 | IAMCEST inferior con afectación de VD (V4R, nitratos) | `ecg12: stemi-inf` |
| 10 | ECG-21 | IAM con BRI: criterios de Sgarbossa (y modificación de Smith) | `ecg12: lbbb12` |

## Criterios de aceptación
- [ ] 10 lecciones con `case: { title, text }` y 6 preguntas con `context`; ≥ 1 pregunta por caso con `ecg`/`ecg12` coherente con el texto (y, si encaja, una de tipo `tap`).
- [ ] Cálculos donde proceda: FC por cuadros, QTc (Bazett), CHA₂DS₂-VA, cociente ST/S de Smith.
- [ ] Base: ESC FA 2024, ESC TSV 2019, ESC arritmias ventriculares 2022, ESC marcapasos 2021, ESC SCA 2023, ESC pericardio 2025.
- [ ] Sin copiar ECG, viñetas ni textos de LITFL, Wave-Maven, Dr. Smith, CardioTeca, etc. Los trazados son siempre los procedurales de `js/ecg.js`.
- [ ] `npm test` verde; revisión médica sin ERROR ni AMBIGUA.
- [ ] Dejar anotados en la orden 08 los trazados nuevos que habrían mejorado los casos (FA preexcitada, torsade, V4R).

## Prompt sugerido
```
Actúa como redactor-casos. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md, recursos/banco-temas-casos.md (§4) y recursos/fuentes-casos.md.
Lee el estado actual de js/data/casos.js y añade al final 2 unidades nuevas (ids libres) con las 10 lecciones-caso de la orden 13 (ECG-01, 03, 04, 06, 07, 10, 14, 16, 17, 21): viñeta original, 6 preguntas con context, uso de ecg/ecg12 existentes (incluye alguna pregunta tap), cálculos y decisión según guías ESC. Añade la guía de cada unidad. npm test, marca ✅ en el banco, no hagas commit.
```
