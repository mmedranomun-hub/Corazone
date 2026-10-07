# Orden 09 — Eco: física y knobología, segmentación y cuantificación de cavidades

**Prioridad:** 8 (media) · **Agente:** `redactor-contenido` · **Nivel:** N1 (física, segmentos) y N3 (cuantificación) · **Temario:** `temario/eco.md` Unidad 1 (pendientes) y Unidad 8

## Objetivo
Dar base física al curso de eco (hoy empieza directamente en planos) y añadir la cuantificación ASE/EACVI 2015 para residentes.

## Archivos a tocar
- `js/data/eco.js`: unidad nueva al final (siguiente id libre) — las lecciones de N1 **no** se insertan en `eco-u1` para no alterar el progreso guardado; se crean como unidad "Bases físicas y anatomía ecográfica".
- `recursos/temario/eco.md`.

## Alcance
- Física y knobología (frecuencia/resolución, ganancia, Nyquist y aliasing, artefactos).
- Anatomía y 17 segmentos con territorio coronario; festones mitrales.
- Cuantificación (valores normales de VI, VD, aurículas, masa, geometría; strain, 3D y contraste).

## Criterios de aceptación
- [ ] Valores de ASE/EACVI 2015 y ASE 2010 (VD) correctos (p. ej. masa VI ♂ ≤ 115, ♀ ≤ 95 g/m²; GPR > 0,42; VAI > 34 ml/m²; VD basal > 41 mm; TAPSE < 17 mm; S' < 9,5 cm/s; FAC < 35 %).
- [ ] Usa `diagram` (ojo de buey con `highlight`) si existe.
- [ ] 3 lecciones × 5–6 preguntas; `npm test` verde; revisión sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/eco.md.
Añade al final de js/data/eco.js una unidad (siguiente id libre) "Bases físicas y cuantificación" con 3 lecciones: física y knobología; anatomía ecográfica y 17 segmentos; cuantificación de cavidades (ASE/EACVI 2015, VD ASE 2010). 5–6 preguntas por lección. Usa diagram solo con ids existentes. npm test, actualiza el temario, no hagas commit.
```
