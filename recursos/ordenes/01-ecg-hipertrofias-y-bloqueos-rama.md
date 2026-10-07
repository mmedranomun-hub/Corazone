# Orden 01 — ECG: crecimientos de cavidades y bloqueos de rama/fasciculares

**Prioridad:** 1 (alta) · **Agente:** `redactor-contenido` · **Nivel:** N2 · **Temario:** `temario/ecg.md` Unidades 4 y 5

## Objetivo
Cubrir el hueco más importante del curso de ECG para estudiantes clínicos y MIR: HVI/HVD, crecimientos auriculares, BRD, BRI (ampliar), hemibloqueos y bloqueo bifascicular.

## Archivos a tocar
- `js/data/ecg.js` (añadir unidades al final de `units`; no modificar unidades existentes).
- `recursos/temario/ecg.md` (marcar ✅ con los ids nuevos).

## Alcance
- Unidad `ecg-u4` "Crecimientos de cavidades": 2–3 lecciones (auriculares; HVI con Sokolow-Lyon y Cornell, patrón de sobrecarga; HVD y diferencial de R alta en V1).
- Unidad `ecg-u5` "Bloqueos de rama y fasciculares": 3 lecciones (BRD; BRI con Sgarbossa; HBAI/HBPI y bifascicular).

## Criterios de aceptación
- [ ] 5–6 preguntas por lección; mezcla mc/tf/match; `explain` en todas.
- [ ] Criterios numéricos según AHA/ACCF/HRS 2009 (estandarización ECG) y ESC 2021 (estimulación) para indicación de marcapasos en bloqueo bifascicular con síncope.
- [ ] Al menos 1 pregunta por lección con recurso visual si existe (`ecg: 'lbbb'`, `ecg12` de HVI/BRD/BRI/HBAI si ya están en `TWELVE_LEAD`). Si no existen, solo texto y anota la necesidad en la orden 08.
- [ ] `npm test` en verde.
- [ ] Revisión de `revisor-medico` sin ERROR pendiente.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/ecg.md (Unidades 4 y 5).
Añade al final de js/data/ecg.js dos unidades nuevas: ecg-u4 "Crecimientos de cavidades" (lecciones ecg-u4-l1..l3) y ecg-u5 "Bloqueos de rama y fasciculares" (ecg-u5-l1..l3), 5–6 preguntas por lección mezclando mc/tf/match, siguiendo los objetivos del temario. Usa ecg: 'lbbb' y los ids de TWELVE_LEAD que existan en js/ecg.js (compruébalos; no inventes ids). Criterios: Sokolow-Lyon ≥ 35 mm, Cornell > 28 mm (♂) / > 20 mm (♀), BRD/BRI QRS ≥ 120 ms, HBAI eje ≤ −45°. Incluye Sgarbossa en BRI. Marca // REVISAR: lo dudoso. Ejecuta npm test, corrige y actualiza recursos/temario/ecg.md (⬜ → ✅ con ids). No hagas commit.
```
