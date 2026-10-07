# Orden 12 — Casos de cateterismo y hemodinámica, lote 2

**Prioridad:** 11 (media-alta) · **Agente:** `redactor-casos` · **Nivel:** N2–N3 · **Banco:** `recursos/banco-temas-casos.md` §3 · **Fuentes de inspiración:** `recursos/fuentes-casos.md`

## Objetivo
Ampliar los casos de sala con 10 lecciones-caso (el lote 1 son `casos-u3-l1`…`l4`): SCA y anatomía coronaria, fisiología intracoronaria, complicaciones y hemodinámica con cálculos (Gorlin, Qp/Qs, onda v).

## Archivos a tocar
- `js/data/casos.js`: 2 unidades nuevas al final (siguientes ids libres; p. ej. "Casos de cateterismo: SCA y fisiología" y "Casos de cateterismo: complicaciones y hemodinámica"). **Coordinar** con las órdenes 11 y 13 (mismo archivo): lee el estado justo antes y usa ids libres.
- `js/data/guides.js`: guía de cada unidad nueva.
- `recursos/banco-temas-casos.md`: ⬜ → ✅ con el id de lección.

## Temas (del banco)
| # | ID banco | Tema | Visual sugerido |
|---|---|---|---|
| 1 | CAT-05 | IAMCEST anterior por DA proximal: tiempos, acceso radial, DAPT | `ecg12: stemi-ant`, `diagram: coronary/lad` |
| 2 | CAT-08 | Enfermedad del tronco común izquierdo (aVR, SYNTAX, IVUS, ICP vs CRM) | `diagram: coronary/lm` |
| 3 | CAT-09 | IAM de VD con hipotensión (PAD alta con PCP normal, volumen, evitar nitratos) | `pressure: ra`, `ecg12: stemi-inf` |
| 4 | CAT-10 | Lesión intermedia: FFR/iFR (cálculo Pd/Pa, umbrales, FAME) | `diagram: coronary/lad` |
| 5 | CAT-12 | Disección coronaria espontánea (SCAD) en mujer joven/puérpera | `diagram: coronary/lad` |
| 6 | CAT-13 | Trombosis de stent tras suspender DAPT (imagen intracoronaria) | `ecg12: stemi-ant`, `diagram: coronary/lad` |
| 7 | CAT-17 | Complicación de acceso femoral: hematoma retroperitoneal / pseudoaneurisma | — |
| 8 | CAT-21 | EA en sala: Gorlin y Hakki, concordancia con eco | `pressure: as-lv-ao` |
| 9 | CAT-24 | Salto oximétrico y Qp/Qs por Fick (shunt) | `pressure: ra` |
| 10 | CAT-29 | IM aguda: onda v gigante en PCP | `pressure: pcwp-v` |

## Criterios de aceptación
- [ ] 10 lecciones con `case: { title, text }` y 6 preguntas encadenadas con `context`; viñetas originales y diversas.
- [ ] Cálculos con cifras coherentes: FFR = Pd/Pa (≤ 0,80), Gorlin/Hakki (área ≈ GC/√ΔP), Qp/Qs = (SatAo − SatVM)/(SatVP − SatAP), RVP en UW.
- [ ] Base: ESC SCA 2023, ESC SCC 2024, ESC valvulopatías 2025, ESC ACHD 2020; ensayos (FAME, COMPLETE…) citados correctamente en `explain` cuando proceda.
- [ ] Visuales solo con ids existentes y coherentes; `explain` de 1–2 frases.
- [ ] Sin copiar textos ni imágenes de las fuentes. `npm test` verde; revisión médica sin ERROR ni AMBIGUA.

## Prompt sugerido
```
Actúa como redactor-casos. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md, recursos/banco-temas-casos.md (§3) y recursos/fuentes-casos.md.
Lee el estado actual de js/data/casos.js y añade al final 2 unidades nuevas (ids libres) con las 10 lecciones-caso de la orden 12 (CAT-05, 08, 09, 10, 12, 13, 17, 21, 24, 29): viñeta original, 6 preguntas con context, cálculos hemodinámicos y decisión según ESC. Solo ids visuales existentes. Añade la guía de cada unidad. npm test, marca ✅ en el banco, no hagas commit.
```
