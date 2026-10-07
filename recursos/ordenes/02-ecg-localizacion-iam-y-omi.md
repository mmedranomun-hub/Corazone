# Orden 02 — ECG: criterios de IAMCEST, localización y equivalentes de oclusión

**Prioridad:** 2 (alta) · **Agente:** `redactor-contenido` (+ `dev-frontend` si faltan ECG de 12 derivaciones) · **Nivel:** N2–N3 · **Temario:** `temario/ecg.md` Unidad 6

## Objetivo
Que el alumno localice el infarto y prediga la arteria culpable, y que reconozca patrones de oclusión sin elevación clásica del ST (Wellens, de Winter, IAM posterior, aVR).

## Archivos a tocar
- `js/data/ecg.js` (nueva unidad `ecg-u6` "Infarto: criterios y localización"; no tocar `ecg-u3`).
- `recursos/temario/ecg.md`.

## Alcance
- `ecg-u6-l1` Criterios de IAMCEST y evolución temporal (4.ª Definición Universal 2018).
- `ecg-u6-l2` Localización y arteria culpable (CD vs Cx; DA proximal; VD con V4R).
- `ecg-u6-l3` Equivalentes de oclusión (Wellens A/B, de Winter, posterior, aVR con descenso difuso).
- `ecg-u6-l4` Diagnóstico diferencial del ST elevado (pericarditis, repolarización precoz, aneurisma, Brugada, BRI/HVI).

## Criterios de aceptación
- [ ] 5–6 preguntas por lección; al menos un mini-caso clínico por lección.
- [ ] Umbrales ST por sexo/edad correctos (V2–V3: ≥ 2 mm ♂ ≥ 40 años; ≥ 2,5 mm ♂ < 40; ≥ 1,5 mm ♀; resto ≥ 1 mm en 2 derivaciones contiguas).
- [ ] Usa `ecg: 'stemi' | 'stdep'` y `ecg12` (inferior, anterior, posterior, Wellens, de Winter) si existen; `diagram` del árbol coronario con `highlight` para la arteria culpable si existe.
- [ ] `npm test` en verde; revisión médica sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/ecg.md (Unidad 6).
Crea en js/data/ecg.js la unidad ecg-u6 "Infarto: criterios y localización" con 4 lecciones (ecg-u6-l1..l4) según el temario, 5–6 preguntas cada una, con al menos un mini-caso por lección. Revisa qué ids existen en TWELVE_LEAD (js/ecg.js) y DIAGRAMS (js/diagrams.js) y úsalos; no inventes ids. Base: 4.ª Definición Universal del IAM (2018) y ESC SCA 2023. No modifiques ecg-u3. npm test, actualiza el temario y no hagas commit.
```
