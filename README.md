# 🫀 Corazone

Aprende **ECG, ecocardiograma y cateterismo** como en Duolingo: lecciones cortas, vidas, XP y rachas diarias.

## Características
- 3 cursos (ECG, Eco, Cateterismo) organizados en unidades y lecciones con desbloqueo progresivo.
- Preguntas de opción múltiple, verdadero/falso y emparejar, con explicación tras cada respuesta.
- **Tiras de ECG generadas procedimentalmente** (19 ritmos: FA, flutter, bloqueos AV, TV, FV, IAMCEST, WPW, hiperpotasemia…).
- Atlas de ritmos para repasar.
- Vidas (se regeneran cada 30 min), XP, estrellas por lección y racha diaria guardadas en el navegador.
- Modo oscuro automático, adaptado a móvil.

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
