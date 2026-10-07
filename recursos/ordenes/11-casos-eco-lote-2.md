# Orden 11 — Casos de eco, lote 2 (ETT y ETE)

**Prioridad:** 10 (media-alta) · **Agente:** `redactor-casos` · **Nivel:** N2–N3 · **Banco:** `recursos/banco-temas-casos.md` §1–2 · **Fuentes de inspiración:** `recursos/fuentes-casos.md`

## Objetivo
Añadir 10 lecciones-caso nuevas de ecocardiografía (8 ETT + 2 ETE) con temas ⬜ de alto rendimiento MIR/residencia, centradas en cuantificación (continuidad, PISA, PSAP, vena contracta) y en la decisión terapéutica según guías ESC.

## Archivos a tocar
- `js/data/casos.js`: 2 unidades nuevas al final (siguientes ids libres; p. ej. "Casos de ETT: valvulopatías" y "Casos de ETT y ETE: HP, trombos y endocarditis"; ya existen hasta `casos-u8`). **Coordinar**: las órdenes 12 y 13 también añaden unidades a este archivo; lee su estado justo antes de empezar y usa ids libres.
- `js/data/guides.js`: guía de cada unidad nueva (o `guide` dentro de la unidad).
- `recursos/banco-temas-casos.md`: ⬜ → ✅ con el id de lección.

## Temas (del banco)
| # | ID banco | Tema | Visual sugerido |
|---|---|---|---|
| 1 | ETT-11 | EA grave sintomática de alto gradiente: TAVI vs SAVR (AVA por continuidad, índice adimensional) | `pressure: as-lv-ao`, `diagram: plax/av` |
| 2 | ETT-13 | Insuficiencia aórtica crónica grave asintomática (vena contracta, THP, reflujo holodiastólico, umbrales de VI) | `diagram: plax/av` |
| 3 | ETT-14 | IM primaria por prolapso asintomática (PISA → ORE y VR; criterios de reparación) | `diagram: a4c/mv` |
| 4 | ETT-12 | EA paradójica de bajo flujo con FEVI conservada (VSi, calcio valvular por TC) | `diagram: plax/av` |
| 5 | ETT-16 | Insuficiencia tricuspídea grave funcional (vena contracta, venas hepáticas, anuloplastia/T-TEER) | `diagram: a4c/tv` |
| 6 | ETT-22 | Trombo apical tras IAM anterior (contraste, anticoagulación y duración) | `diagram: a4c/lv` |
| 7 | ETT-24 | Probabilidad ecocardiográfica de HP (Vmax IT, signos adicionales, cuándo derivar a cateterismo derecho) | `diagram: a4c/rv` |
| 8 | ETT-29 | Endocarditis sobre válvula nativa: del ETT a los criterios de Duke-ESC 2023 y cuándo pedir ETE | `diagram: plax/mv` |
| 9 | ETE-08 | Absceso perianular en endocarditis aórtica nativa (PR que se alarga → ETE → cirugía urgente) | `ecg: avb1`, `diagram: plax/av` |
| 10 | ETE-11 | Cierre de orejuela izquierda guiado por ETE (indicación, mediciones, fuga residual) | `ecg: afib` |

## Criterios de aceptación
- [ ] 10 lecciones con `case: { title, text }` (viñeta original de 3–6 frases, sexo/edad variados) y 6 preguntas cada una que avanzan con `context`.
- [ ] Cada caso incluye ≥ 1 cálculo cuando el banco lo indique (continuidad, índice adimensional, PISA, PSAP = 4v² + PAD, THP) con cifras coherentes y resultado verificable.
- [ ] Decisión final según ESC valvulopatías 2025, ESC SCA 2023 (trombo VI), ESC HP 2022, ESC endocarditis 2023 y ESC FA 2024. Umbrales que cambiaron en 2025 (edad TAVI, DTSVI en IAo) contrastados con la guía o marcados `// REVISAR:`.
- [ ] Recursos visuales solo con ids existentes y coherentes con el texto; todo `explain` en 1–2 frases.
- [ ] Ningún texto, viñeta ni imagen copiados de las fuentes (`fuentes-casos.md`).
- [ ] `npm test` verde; revisión médica sin ERROR ni AMBIGUA.

## Prompt sugerido
```
Actúa como redactor-casos. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md, recursos/banco-temas-casos.md y recursos/fuentes-casos.md (reglas de derechos de autor).
Lee el estado actual de js/data/casos.js y añade al final 2 unidades nuevas (siguientes ids libres) con las 10 lecciones-caso de la orden 11 (ETT-11, ETT-12, ETT-13, ETT-14, ETT-16, ETT-22, ETT-24, ETT-29, ETE-08, ETE-11): viñeta original, 6 preguntas con context, cálculos y decisión según guías ESC vigentes. Usa solo ids visuales existentes. Añade la guía de cada unidad. npm test, marca ✅ en el banco, no hagas commit.
```
