# recursos/ — base documental de Corazone

Carpeta de referencia para construir contenido cardiológico de calidad (ECG, ecocardiograma y cateterismo) para estudiantes de medicina y residentes, y para guiar a los agentes de `.claude/agents/`. **No se carga en la app**: la app solo lee `js/`.

## Contenido
| Archivo | Para qué |
|---|---|
| `temario/ecg.md`, `temario/eco.md`, `temario/cateterismo.md` | Temario completo por niveles (N1 preclínico, N2 clínico/MIR, N3 residente) → unidades → lecciones → objetivos medibles + recurso visual recomendado. ✅ existe en la app · 🟡 parcial · ⬜ pendiente. |
| `guia-editorial.md` | Estilo, nivel, longitud, distractores, `explain`, terminología, sesgos, imágenes y citas. |
| `plantilla-leccion.md` | Formato JS exacto de una lección (mc, tf, match, tap; campos ecg, ecg12, pressure, diagram) y un ejemplo completo. |
| `checklist-revision.md` | Lista de comprobación médica y pedagógica para `revisor-medico`. |
| `bibliografia.md` | Guías (ESC, AHA/ACC, ASE/EACVI, SCAI, SEC), libros y recursos online, con año y uso. |
| `glosario.md` | Abreviaturas y términos aceptados (≈ 120 entradas). |
| `ordenes/` | Órdenes de trabajo priorizadas, listas para dar a un agente. Índice en `ordenes/README.md`. |

## Flujo de trabajo
```
temario  →  orden de trabajo  →  redactor-contenido  →  revisor-medico  →  qa-tester  →  PR
(⬜ a cubrir)  (ordenes/NN-*.md)   (edita js/data/*.js,     (checklist;        (Playwright,     (rama de trabajo,
                                   npm test)                ERROR/AMBIGUA/     si hay visuales)  ver CLAUDE.md)
                                                            MEJORA)
```
1. **Elegir qué hacer**: busca ⬜ de prioridad alta en el temario o toma la siguiente orden de `ordenes/README.md`.
2. **Orden de trabajo**: si no existe, créala copiando una existente (objetivo, archivos, criterios de aceptación, prompt).
3. **Redacción** (`redactor-contenido`): lee `CLAUDE.md`, `guia-editorial.md`, `plantilla-leccion.md` y el temario; escribe en `js/data/<curso>.js`; `npm test`. Si falta un trazado/esquema, abre/añade a la orden 08 para `dev-frontend`.
4. **Revisión médica** (`revisor-medico`): aplica `checklist-revision.md`; devuelve informe; el redactor corrige hasta que no quede ningún ERROR ni AMBIGUA.
5. **QA** (`qa-tester`): recorre la app en móvil/escritorio, claro/oscuro, especialmente si hay recursos visuales nuevos.
6. **PR**: actualiza el temario (⬜ → ✅ con id) y el índice de órdenes; abre PR desde la rama de trabajo.

## Reglas básicas
- Contenido en español de España, basado en guías vigentes (ver `bibliografia.md`). Lo dudoso, con `// REVISAR:`.
- No renombres ids existentes de unidades ni lecciones (el progreso del usuario depende de ellos). Añade siempre al final.
- Varias personas/agentes trabajan en paralelo: edita solo los archivos que indique la orden y lee su estado actual antes de empezar.
