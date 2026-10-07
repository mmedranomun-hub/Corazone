# Orden 06 — Casos clínicos integrados (ECG + eco + cateterismo)

**Prioridad:** 6 (media-alta) · **Agente:** `redactor-contenido` · **Nivel:** N2–N3 · **Temario:** ECG U13, Eco U12, Cate U11

## Objetivo
Añadir una unidad final de casos en cada curso que integre lo aprendido, con viñetas clínicas realistas (diversidad de sexo y edad) y preguntas encadenadas.

## Archivos a tocar
- Ya existe un curso de casos (`js/data/casos.js`, id `casos`, lecciones con campo `case` = viñeta) con casos de ETT, ETE y cateterismo. **Amplía ese curso** (nuevas unidades al final, p. ej. "Casos de ECG") en vez de duplicar casos en cada curso; respeta su formato (`case: { title, text }`, `context`). Lee su estado actual antes: puede estar editándose en paralelo.
- Alternativa (solo si se decide mantener casos dentro de cada curso): una unidad "Casos clínicos" al final de `js/data/ecg.js`, `eco.js` o `cateterismo.js`.
- `recursos/temario/*.md`.

## Alcance
- ECG: dolor torácico (IAM vs pericarditis vs TEP), palpitaciones (QRS estrecho/ancho), síncope (BAV, Brugada, QT largo, WPW).
- Eco: disnea en urgencias, fiebre y embolia (ETT → ETE), valvulopatía asintomática.
- Cate: del ECG a la sala (arteria culpable + proyección), shock en la sala, Heart Team (ICP vs CRM; TAVI vs SAVR).

## Criterios de aceptación
- [ ] 2–3 lecciones por curso; cada lección = 1–2 casos, 5–6 preguntas que avanzan en el caso (prompt ≤ 300 caracteres).
- [ ] Al menos 1 recurso visual por lección cuando exista (`ecg`, `ecg12`, `pressure`, `diagram`).
- [ ] Ningún caso depende de memorizar un dato aislado: la respuesta se deriva de integrar datos.
- [ ] `npm test` verde; revisión médica sin ERROR ni AMBIGUA.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md (sobre todo §2 y §8), recursos/plantilla-leccion.md y la unidad de casos de cada temario.
Lee js/data/casos.js y su formato (campo case). Añade al final unidades nuevas (siguientes ids libres) que cubran los casos pendientes del temario —prioriza ECG (dolor torácico, palpitaciones, síncope), que aún no tiene casos—, con 2–3 lecciones de casos encadenados. Viñetas variadas en sexo y edad, prompts ≤ 300 caracteres, recursos visuales existentes. npm test, actualiza los temarios, no hagas commit.
```
