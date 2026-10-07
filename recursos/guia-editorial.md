# Guía editorial de Corazone

Normas para escribir y revisar preguntas. Si una regla de esta guía choca con `CLAUDE.md`, manda `CLAUDE.md` (formato técnico).

## 1. Principios
1. **Una idea por pregunta.** Si la pregunta necesita dos conceptos para resolverse, que sea un caso clínico explícito.
2. **Lo clínicamente relevante primero.** Prioriza lo que cambia el manejo (umbrales de guía, diagnósticos que no se pueden pasar por alto) sobre la curiosidad.
3. **Correcto y vigente.** Todo dato debe poder respaldarse con una guía o un texto de referencia de `bibliografia.md`. Si dudas, usa lo clásico y consensuado y marca la línea con `// REVISAR: motivo`.
4. **Microaprendizaje.** El alumno debe aprender algo **incluso si acierta**: el `explain` añade el porqué o un dato extra.

## 2. Nivel y progresión
| Nivel | Público | Qué se pregunta | Ejemplo de verbo |
|---|---|---|---|
| N1 | Preclínico | Definiciones, valores normales, reconocimiento de patrones típicos | identificar, nombrar |
| N2 | Clínico / MIR | Diagnóstico diferencial, criterios de guía, manejo inicial | diferenciar, aplicar, calcular |
| N3 | Residente de cardiología | Matices, excepciones, criterios finos, técnica | interpretar, decidir, justificar |

- Dentro de una lección: de lo fácil a lo difícil; la última pregunta puede ser un mini-caso.
- Dentro de una unidad: 2–4 lecciones; dentro de un curso, las unidades siguen el orden del temario (el desbloqueo es secuencial).

## 3. Longitud y formato
- **Lección**: 5–6 preguntas (mínimo 4, lo exige el test). Mezcla al menos 2 tipos (`mc`, `tf`, `match`, `tap`).
- **prompt**: ≤ 200 caracteres (≈ 2 líneas en móvil). En casos clínicos, ≤ 300.
- **options** (`mc`): 4 opciones, cada una ≤ 70 caracteres, todas de longitud y estructura parecidas.
- **match**: 3–4 parejas; textos cortos (≤ 45 caracteres por lado); ningún valor repetido a izquierda ni a derecha.
- **explain**: 1–2 frases (≤ 250 caracteres).
- Unidades con signos tipográficos: `≥`, `≤`, `×`, `→`, `−` (signo menos), `°`, `²`, `₂`. Decimales con **coma** (0,80), miles con espacio fino o sin separador (5000 UI). Unidades separadas por espacio: `120 ms`, `≥ 40 mmHg`, `1 cm²`.

## 4. Tipos de pregunta
- **mc**: la correcta puede ir en `answer: 0` (la app baraja). Evita "todas las anteriores" / "ninguna de las anteriores" (la barajada las rompe).
- **tf**: afirmaciones inequívocas. Evita absolutos trampa ("siempre", "nunca") salvo que sean verdad y sean el punto docente. Equilibra verdaderas y falsas (≈ 40 % falsas).
- **match**: buena para clasificaciones y asociaciones (onda ↔ significado, arteria ↔ cara). Puede llevar `explain` (recomendable).
- **tap**: pide tocar una onda concreta en una tira (`wave`: `p | pBlocked | qrs | vent | t`). Úsala para enseñar a mirar, no para adivinar.

## 5. Distractores (mc)
Buenos distractores = errores reales de alumnos.
- **Homogéneos**: misma categoría que la correcta (si la correcta es un valor, todos valores; si es una arteria, todas arterias).
- **Plausibles**: confusiones típicas (Mobitz I vs II; CD vs Cx; 120 vs 200 ms; FFR 0,80 vs iFR 0,89).
- **Sin pistas**: que la correcta no sea la más larga, ni la única con matiz, ni repita palabras del enunciado.
- **Inequívocamente falsos**: nada de distractores "medio verdaderos" que un experto podría defender (eso genera la clasificación AMBIGUA del revisor).
- Números: distractores a escala realista (no 5 lpm frente a 75 lpm), idealmente el error de cálculo típico (p. ej. olvidar sumar la PAD a 4V²).

## 6. El `explain`
- Responde **por qué** la correcta es correcta, y si cabe, por qué el distractor más tentador no lo es.
- Añade un dato que amplíe (criterio complementario, regla mnemotécnica, implicación terapéutica).
- No repitas el enunciado ni empieces con "Correcto" o "La respuesta es…": la app ya marca acierto/fallo.
- Ejemplo bueno: *"El PR se alarga progresivamente hasta que una P no conduce (Wenckebach); suele ser nodal y benigno."*

## 7. Tono y terminología
- **Español de España**, registro docente cercano pero técnico. Tuteo en instrucciones ("Observa la tira").
- Términos preferidos: *infarto agudo de miocardio con elevación del ST (IAMCEST)*, *bloqueo auriculoventricular (BAV)*, *fibrilación auricular (FA)*, *insuficiencia* (no "regurgitación", salvo en "volumen regurgitante"), *ecocardiograma transtorácico (ETT)*, *intervención coronaria percutánea (ICP)*, *stent* (en cursiva no hace falta; aceptado), *coronariografía*.
- Anglicismos aceptados por uso clínico: *strain*, *stent*, *flutter*, *torsade de pointes*, *FoCUS/POCUS*, *TAPSE*, *SAM*, *no-reflow*, *Heart Team*.
- Abreviaturas: usa las del `glosario.md`. Defínelas la primera vez en cada lección **solo si son de N2–N3**; las de uso universal (ECG, FC, VI, VD, AI, AD, FEVI, IAM) no necesitan definición.
- Epónimos con mayúscula (Wenckebach, Brugada, Sgarbossa, Simpson); nombres de signos entre comillas ("en daga", "boca de pez").

## 8. Sesgos a evitar
- **Sesgo de sexo y edad**: no asumas que el paciente típico es varón; incluye mujeres, ancianos, jóvenes y deportistas en los casos. Recuerda umbrales específicos por sexo (QTc, ST en V2–V3, masa VI).
- **Sesgo de población**: los valores normales de IVUS o de voltaje pueden variar por etnia; indícalo si aplica.
- **Sesgo de disponibilidad**: no sobre-representes lo raro y llamativo frente a lo frecuente.
- **Estigmatización**: nada de etiquetas peyorativas (consumo de drogas, obesidad) como pista diagnóstica.
- **Sesgo de anclaje en el formato**: varía la posición conceptual de la respuesta y la polaridad de los `tf`.

## 9. Imágenes y recursos visuales
- Usa los generadores de la app: `ecg` (tira), `ecg12`, `pressure`, `diagram` con `highlight`. Comprueba el id en el catálogo correspondiente (`RHYTHMS`, `TWELVE_LEAD`, `PRESSURES`, `DIAGRAMS`).
- La pregunta visual debe **requerir** la imagen ("Observa la tira…") o al menos apoyarse en ella; no pongas una imagen decorativa que contradiga el texto.
- Si el trazado que necesitas no existe, **no lo sustituyas por otro parecido**: pide el recurso en una orden a `dev-frontend` y deja la pregunta en texto.
- Imágenes reales (eco/angiografía) en el futuro: solo propias o con licencia abierta compatible (CC BY / CC BY-SA), anonimizadas y con atribución en el `explain` o en un campo de créditos.

## 10. Citar fuentes
- En el código, una pregunta con un umbral discutible lleva un comentario al final de la línea: `// Fuente: ESC 2021 valvulopatías` o `// REVISAR: …`.
- En el `explain`, cita de forma breve solo si aporta ("criterios ESC/EACTS 2021", "Definición Universal 2018"). Nunca URLs en el texto visible.
- En las órdenes de trabajo y en el informe del revisor, cita guía + año (ver `bibliografia.md`).

## 11. Antes de entregar
- [ ] `npm test` en verde.
- [ ] Repasada `checklist-revision.md`.
- [ ] Temario actualizado: cambia ⬜ → ✅ y añade el id de la lección.
