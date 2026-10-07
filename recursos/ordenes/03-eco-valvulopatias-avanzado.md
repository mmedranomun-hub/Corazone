# Orden 03 — Eco: valvulopatías avanzado

**Prioridad:** 3 (alta) · **Agente:** `redactor-contenido` · **Nivel:** N2–N3 · **Temario:** `temario/eco.md` Unidad 6

## Objetivo
Llevar el curso de eco al nivel MIR/residente en valvulopatías, el bloque con más peso en exámenes y en la práctica.

## Archivos a tocar
- `js/data/eco.js` (nueva unidad `eco-u6` "Valvulopatías avanzado").
- `recursos/temario/eco.md`.

## Alcance (4 lecciones)
- `eco-u6-l1` Estenosis aórtica: alto gradiente, bajo flujo-bajo gradiente clásico (dobutamina, reserva contráctil ≥ 20 % de VS) y paradójico (VSi ≤ 35 ml/m²), calcio por TC.
- `eco-u6-l2` Insuficiencia mitral: mecanismo de Carpentier, PISA, primaria vs secundaria, criterios de intervención/TEER.
- `eco-u6-l3` Insuficiencia aórtica y estenosis mitral (PHT, planimetría, Wilkins).
- `eco-u6-l4` Válvulas derechas, prótesis y endocarditis (mismatch, Duke-ISCVID/ESC 2023).

## Criterios de aceptación
- [ ] Cifras según ESC/EACTS 2021 **y comprobadas frente a la actualización ESC/EACTS 2025**; donde difieran, usar 2025 y citarlo en comentario `// Fuente:`.
- [ ] Recomendaciones de graduación EACVI 2017/2022 y ASE 2017.
- [ ] Al menos 1 `match` y 1 cálculo (continuidad, PISA o 220/PHT) por lección.
- [ ] Si existe `pressure` VI-Ao o PCP con onda v, úsala en EA / IM.
- [ ] `npm test` en verde; revisión médica sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md, recursos/temario/eco.md (Unidad 6) y recursos/bibliografia.md.
Añade al final de js/data/eco.js la unidad eco-u6 "Valvulopatías avanzado" con lecciones eco-u6-l1..l4 según el temario, 5–6 preguntas cada una (mc/tf/match, incluye cálculos). Basa las cifras en ESC/EACTS (verifica la versión 2025) y EACVI/ASE; marca // REVISAR: lo dudoso. Usa pressure solo con ids existentes en js/pressure.js. npm test, actualiza el temario y no hagas commit.
```
