# 🫀 Corazone

Aprende **ECG, ecocardiograma y cateterismo** como en Duolingo: lecciones cortas, vidas, XP y rachas diarias.

## Características
- 4 cursos — ECG, Eco, Cateterismo y **Casos clínicos** (ETT, ETE y cateterismo) — con 42 lecciones y ~240 preguntas.
- Preguntas de opción múltiple, verdadero/falso, emparejar y **"toca la onda"** sobre la tira de ECG.
- Recursos visuales generados por código: **19 ritmos**, **ECG de 12 derivaciones**, **curvas de presión** hemodinámicas y **esquemas** (árbol coronario, planos de eco).
- Repaso espaciado de preguntas falladas, objetivo diario, logros, vidas, XP y rachas.
- Atlas de ritmos y 12 derivaciones. PWA instalable con modo offline. Modo oscuro.

## Recursos y agentes
- `recursos/`: temario por niveles (estudiante, MIR, residente), guía editorial, plantilla, checklist de revisión, bibliografía, glosario y órdenes de trabajo.
- `.claude/agents/`: agentes `redactor-contenido`, `revisor-medico`, `dev-frontend` y `qa-tester` para seguir ampliando la app con Claude Code.

## Ejecutar en local
Sin dependencias ni compilación:
```bash
npm start            # o: python3 -m http.server 5173
# abre http://localhost:5173
npm test             # valida contenidos y generador de ECG
```

## Publicar en GitHub Pages
Settings → Pages → *Deploy from a branch* → rama `main`, carpeta `/ (root)`.

## Añadir contenido
Edita `js/data/ecg.js`, `js/data/eco.js` o `js/data/cateterismo.js` (formato en `CLAUDE.md`) y ejecuta `npm test`.

> ⚠️ Contenido con fines educativos. No sustituye la formación clínica ni el juicio médico.
