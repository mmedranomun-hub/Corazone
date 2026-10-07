# Orden 07 — Cateterismo: hipertensión pulmonar, oximetría y valvulopatías en el laboratorio

**Prioridad:** 7 (media) · **Agente:** `redactor-contenido` · **Nivel:** N2–N3 · **Temario:** `temario/cateterismo.md` Unidad 6

## Objetivo
Completar la hemodinámica cuantitativa: clasificación de HP por cateterismo, test vasodilatador, serie oximétrica y Qp/Qs, Gorlin y diagnóstico constricción vs restricción.

## Archivos a tocar
- `js/data/cateterismo.js` (siguiente unidad libre; leer estado actual antes).
- `recursos/temario/cateterismo.md`.

## Criterios de aceptación
- [ ] ESC/ERS 2022: PAPm > 20 mmHg; precapilar PCP ≤ 15 y RVP > 2 UW; postcapilar aislada RVP ≤ 2; combinada RVP > 2; test vasodilatador positivo = ↓ PAPm ≥ 10 mmHg hasta ≤ 40 mmHg con GC mantenido.
- [ ] Al menos 3 cálculos (RVP, GTP, Qp/Qs o Fick) con distractores que reflejen errores típicos.
- [ ] Usa `pressure` (AP, PCP, VI-Ao, dip-plateau) si existen.
- [ ] 3 lecciones × 5–6 preguntas; `npm test` verde; revisión sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/cateterismo.md (Unidad 6). Lee el estado actual de js/data/cateterismo.js.
Crea la unidad "Hemodinámica avanzada" (siguiente id libre) con 3 lecciones: HP en el cateterismo, oximetría y shunts, valvulopatías y constricción en el laboratorio. 5–6 preguntas por lección con cálculos. Base ESC/ERS 2022 y Grossman. Usa pressure solo con ids existentes. npm test, actualiza el temario, no hagas commit.
```
