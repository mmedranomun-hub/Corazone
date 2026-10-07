# Checklist de revisión (revisor-medico)

Úsala pregunta a pregunta. Clasifica cada hallazgo como **ERROR** (dato falso o desactualizado), **AMBIGUA** (más de una respuesta defendible) o **MEJORA** (pedagógica/estilo). Para cada uno: archivo · id de lección · prompt · problema · corrección · fuente (guía + año).

## A. Exactitud médica
- [ ] Cada cifra (umbral, rango normal, tiempo, dosis) coincide con la guía vigente citada en `bibliografia.md` (ESC/EACTS, AHA/ACC, ASE/EACVI, ESC/ERS…).
- [ ] Si la guía cambió recientemente (p. ej. HP > 20 mmHg desde 2022; CHA₂DS₂-VA en ESC 2024; nuevas categorías de miocardiopatía ESC 2023), la pregunta usa el criterio nuevo o lo aclara.
- [ ] Se especifica el contexto cuando el umbral depende de él (sexo, edad, FEVI, ritmo, técnica: FFR vs iFR, IM primaria vs secundaria).
- [ ] Unidades correctas (ms vs s, mmHg, cm/s vs m/s, ml/m², mm²) y decimales con coma.
- [ ] Terminología clínica correcta y en español de España (ver `glosario.md`).
- [ ] Sin afirmaciones absolutas falsas ("siempre", "nunca", "patognomónico") salvo que sean ciertas.
- [ ] Tratamientos y fármacos: indicación correcta, contraindicaciones relevantes no omitidas (p. ej. frenadores del nodo AV en FA preexcitada; nitratos en IAM de VD).

## B. Respuesta y distractores
- [ ] Existe **una sola** respuesta correcta y es la marcada (`answer`).
- [ ] Ningún distractor es defendible por un experto (si lo es → AMBIGUA).
- [ ] Distractores homogéneos y plausibles; la correcta no se delata por longitud ni por palabras del enunciado.
- [ ] En `tf`, la afirmación no depende de un matiz oculto.
- [ ] En `match`, cada izquierda tiene una única pareja posible (no hay dos derechas válidas para la misma izquierda).

## C. Recursos visuales
- [ ] El id de `ecg`, `ecg12`, `pressure` o `diagram` existe en su catálogo.
- [ ] El trazado/esquema **muestra** lo que la pregunta afirma (p. ej. la tira `mobitz1` realmente alarga el PR; la curva de PCP tiene la onda v gigante que se pregunta).
- [ ] En `tap`, la onda pedida (`wave`) existe en la tira y es inequívoca.
- [ ] La pregunta no se puede contestar *en contra* de la imagen (texto e imagen coherentes).

## D. Pedagogía
- [ ] El nivel (N1/N2/N3) es el del temario para esa unidad.
- [ ] El objetivo de aprendizaje de la lección (temario) queda cubierto por las preguntas.
- [ ] `explain` presente en `mc`/`tf` (y recomendable en `match`), 1–2 frases, explica el porqué y añade valor.
- [ ] Progresión de dificultad dentro de la lección; mezcla de tipos; 5–6 preguntas.
- [ ] Sin redundancia con otras lecciones (misma pregunta con otras palabras).

## E. Estilo y sesgos
- [ ] Longitudes dentro de la guía editorial (prompt ≤ 200, opciones ≤ 70, explain ≤ 250 caracteres).
- [ ] Ortografía y tipografía (≥, ≤, °, ², ₂, −; espacio antes de unidades).
- [ ] Casos clínicos diversos en sexo y edad; sin estereotipos ni pistas estigmatizantes.

## F. Técnica
- [ ] `npm test` pasa.
- [ ] Ids nuevos únicos y con el patrón `<curso>-u<n>-l<m>`; no se ha renombrado ningún id existente.
- [ ] Líneas dudosas marcadas con `// REVISAR:`; al revisarlas, se resuelven o se escalan.
- [ ] El temario (`recursos/temario/*.md`) refleja el nuevo estado (✅).

## Plantilla de informe
```
[ERROR] js/data/eco.js · eco-u3-l1 · "Criterio de estenosis aórtica grave"
  Problema: …
  Corrección: …
  Fuente: ESC/EACTS 2021 valvulopatías
```
