# Corazone — contexto para Claude

App web tipo Duolingo para aprender **ECG, ecocardiograma y cateterismo** (público: estudiantes de medicina y residentes). Idioma de la UI y contenidos: **español**.

## Stack (deliberadamente simple)
- HTML + CSS + JavaScript vanilla con ES modules. **Sin build, sin dependencias.**
- Se sirve como sitio estático (GitHub Pages). Para desarrollo: `npm start` (usa `npx serve`) o `python3 -m http.server`.
- Tests: `npm test` (node --test, sin dependencias) valida la integridad de los contenidos y el generador de ECG.

## Mapa de archivos
- `index.html` — shell, carga `js/app.js`.
- `css/styles.css` — todos los estilos. Tokens de color en `:root` (modo claro/oscuro).
- `js/app.js` — router por hash (`#/`, `#/curso/<id>`, `#/leccion/<id>`, `#/atlas`, `#/perfil`) y render de vistas.
- `js/lesson.js` — motor de lección: tipos de pregunta `mc`, `tf`, `match`; feedback; vidas; XP.
- `js/storage.js` — progreso en localStorage (xp, vidas con regeneración, racha, lecciones completadas).
- `js/ecg.js` — generador **procedural** de tiras de ECG en SVG (suma de gaussianas por onda). `RHYTHMS` = catálogo con nombre y descripción; `renderEcg(id)` devuelve SVG string. Puro, sin DOM → testeable en Node.
- `js/pressure.js` — curvas de presión (AD, VD, AP, PCP, VI, Ao y patológicas) en SVG. `PRESSURES`, `renderPressure(id)`.
- `js/diagrams.js` — esquemas SVG (árbol coronario, planos de eco). `DIAGRAMS`, `renderDiagram(id, highlight)`.
- `js/data/courses.js` — índice de cursos. Contenido en `js/data/ecg.js`, `js/data/eco.js`, `js/data/cateterismo.js`.

## Formato de contenido
```js
{ id: 'ecg', title, icon, color, units: [
  { id: 'ecg-u1', title, lessons: [
    { id: 'ecg-u1-l1', title, questions: [
      { type: 'mc', prompt, options: [...], answer: 0, explain, ecg?: 'afib' },
      { type: 'tf', prompt, answer: true, explain },
      { type: 'match', prompt, pairs: [['izq','der'], ...], explain? },
]}]}]}
```
- IDs únicos y estables (el progreso se guarda por id de lección).
- `ecg` opcional en una pregunta = id de `RHYTHMS` → se dibuja la tira (derivación II).
- `ecg12` opcional = id de `TWELVE_LEAD` (en `js/ecg.js`) → ECG de 12 derivaciones.
- `pressure` opcional = id de `PRESSURES` (en `js/pressure.js`) → curva de presión hemodinámica.
- `diagram` opcional = `{ id, highlight }`: id de `DIAGRAMS` (en `js/diagrams.js`) y clave de `parts` a resaltar.
- Lección de **caso clínico**: añade `case: { title, text }` a la lección (la historia se muestra encima de cada pregunta) y opcionalmente `context` en cada pregunta (evolución: "Se realiza ETE y se observa…").
- Tipo `tap`: `{ type: 'tap', prompt, ecg, wave, explain }` → el usuario toca la tira; `wave` ∈ `p | pBlocked | qrs | vent | t` (ver `waveTimes`).
- Cada pregunta debe llevar `explain` (pedagógico, 1–2 frases).

## Convenciones
- Contenido médico basado en guías estándar (ESC/AHA); ante dudas, preferir lo clásico y consensuado.
- Añadir contenido = editar sólo `js/data/*.js` y correr `npm test`.
- Rama de trabajo: `claude/corazone-ecg-app-xi85tq`.

## Agentes y recursos
- Agentes del proyecto en `.claude/agents/`: `redactor-contenido`, `revisor-medico`, `dev-frontend`, `qa-tester`.
- `recursos/`: temario por curso y nivel, guía editorial, plantilla de lección, checklist de revisión, bibliografía y órdenes de trabajo (`recursos/ordenes/`).

## Roadmap
Ver `docs/ROADMAP.md`.
