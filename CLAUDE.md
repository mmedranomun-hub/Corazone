# Corazone — contexto para Claude

App web tipo Duolingo para aprender **ECG, ecocardiograma y cateterismo** (público: estudiantes de medicina y residentes). Idioma de la UI y contenidos: **español**.

## Stack (deliberadamente simple)
- HTML + CSS + JavaScript vanilla con ES modules. **Sin build, sin dependencias.**
- Se sirve como sitio estático (GitHub Pages). Para desarrollo: `npm start` (usa `npx serve`) o `python3 -m http.server`.
- Tests: `npm test` (node --test, sin dependencias) valida la integridad de los contenidos y el generador de ECG.

## Mapa de archivos
- `index.html` — shell, carga `js/app.js`.
- `css/styles.css` — todos los estilos. Tokens de color en `:root` (modo claro/oscuro).
- `js/app.js` — router por hash (tabla `ROUTES`). Vistas en `js/views/`: `learn.js` (ruta, cursos, guía), `lessonFlow.js` (lección, resultados, racha, misión, sin vidas), `practice.js` (práctica y atlas), `social.js` (ligas, misiones, tienda), `me.js` (perfil, logros, racha, ajustes, onboarding).
- `js/ui.js` — topbar, bottomnav, `shell`, `screen`, `modal`, `esc`. `js/game.js` — misiones diarias y ligas (rivales simulados). `js/fx.js` — adaptador de mascota/sonido/confeti.
- `js/data/guides.js` — guía (conceptos clave) de cada unidad. Las unidades nuevas pueden llevar la guía dentro: `{ id, title, guide: { intro, sections: [{ title, points, tip? }] }, lessons }`.
- `js/lesson.js` — motor de lección: tipos de pregunta `mc`, `tf`, `match`; feedback; vidas; XP.
- `js/storage.js` — progreso en localStorage: xp, vidas, racha (+ protectores), gemas, tienda, repaso espaciado, contadores diarios, ajustes y onboarding.
- `js/ecg.js` — generador **procedural** de tiras de ECG en SVG (suma de gaussianas por onda). `RHYTHMS` = catálogo con nombre y descripción; `renderEcg(id)` devuelve SVG string. Puro, sin DOM → testeable en Node.
- `js/pressure.js` — curvas de presión (AD, VD, AP, PCP, VI, Ao y patológicas) en SVG. `PRESSURES`, `renderPressure(id)`.
- `js/diagrams.js` — esquemas SVG (árbol coronario, planos de eco). `DIAGRAMS`, `renderDiagram(id, highlight)`.
- `js/mascot.js` — mascota Cora (corazón) en SVG. `MOODS`, `mascot(mood, { size, beat })`. Puro.
- `js/sound.js` — sonidos WebAudio sintetizados (`playCorrect/Wrong/Complete/Tap/Streak`, `setMuted`, `isMuted`; clave `corazone:muted`). No-op sin AudioContext.
- `js/confetti.js` — `confetti(container, { count })`, DOM+CSS, se autoelimina; respeta reduced-motion.
- `css/fx.css` — tokens `--cora-*`/`--confetti-*`, `.beat`, `.speech`, `.pop-in`, `.shake`, `.slide-up`, confeti.
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
- Tipo `tap`: `{ type: 'tap', prompt, ecg, wave, explain }` → el usuario toca la tira; `wave` ∈ `p | pBlocked | qrs | vent | t | spike` (ver `waveTimes`).
- Cada pregunta debe llevar `explain` (pedagógico, 1–2 frases).

## Convenciones
- Contenido médico basado en guías estándar (ESC/AHA); ante dudas, preferir lo clásico y consensuado.
- Añadir contenido = editar sólo `js/data/*.js` y correr `npm test`.
- Rama de trabajo: `claude/corazone-ecg-app-xi85tq`.

## Agentes y recursos
- Agentes del proyecto en `.claude/agents/`: `redactor-contenido`, `redactor-casos`, `revisor-medico`, `dev-frontend`, `disenador-ux`, `qa-tester`, `integrador`.

## Ahorro de tokens (léelo)
- No releas archivos grandes enteros: usa `grep -n` y lee rangos. Los datos (`js/data/*.js`) son largos; consulta sólo la unidad que toques.
- Delegar en paralelo a agentes con archivos disjuntos; el `integrador` hace commit.
- Revisar capturas en una sola hoja (PIL) en vez de una por una.
- Agentes en paralelo: un único archivo de datos por agente; borradores del scratchpad con nombre único (`<agente>-<tarea>.js`), nunca genéricos (`new-units.js`). Antes de insertar, releer el final del archivo y comprobar con grep que no hay ids de otro curso.
- `recursos/`: temario por curso y nivel, guía editorial, plantilla de lección, checklist de revisión, bibliografía y órdenes de trabajo (`recursos/ordenes/`).

## Roadmap
Ver `docs/ROADMAP.md`.
