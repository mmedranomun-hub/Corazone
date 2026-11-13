# Roadmap

## Hecho (v0.1)
- [x] Estructura de la app (vanilla JS, sin build) y router por hash
- [x] Motor de lecciones: mc / tf / match, vidas, XP, estrellas, racha, repetición de falladas
- [x] Generador de ECG procedural (19 ritmos) + Atlas
- [x] Contenido inicial: 3 cursos × 3 unidades (~90 preguntas)
- [x] Tests de integridad de contenido

## Hecho (v0.2)
- [x] ECG de 12 derivaciones + unidad de localización de IAM, eje y bloqueos de rama
- [x] Pregunta "toca la onda"
- [x] Curvas de presión y esquemas SVG (coronarias, A4C, PLAX, PSAX)
- [x] Curso de casos clínicos (ETT, ETE, cateterismo)
- [x] Repaso espaciado, objetivo diario y logros
- [x] PWA instalable/offline
- [x] Carpeta `recursos/` y agentes del proyecto; primera revisión médica aplicada

## Próximo (ver `recursos/ordenes/`)
- [ ] Órdenes 01–10 de `recursos/ordenes/` (hipertrofias, OMI, valvulopatías avanzado, SCA y shock…)
- [ ] Nuevos casos: TEP, disección aórtica tipo A, perforación coronaria, TAVI
- [ ] Más detalle en el esquema coronario; esquemas eco restantes (A2C, A3C, subcostal, festones mitrales, ETE)
- [x] Curvas avanzadas (EM, IA, Brockenbrough, pulso paradójico, BCIA, FFR, constricción vs restricción), ojo de buey de 17 segmentos y sistema de conducción
- [ ] Confirmar clase ESC del soporte mecánico en shock (`// REVISAR` en casos.js)
- [x] Despliegue en GitHub Pages (workflow; falta activar Pages y fusionar en main)
- [x] Premium (prueba, códigos firmados, paywall), aviso médico/privacidad/términos, analítica sin cookies — ver `docs/LANZAMIENTO.md`
- [x] Cobro automático: Lemon Squeezy + servidor de licencias (`worker/`, `docs/PAGOS.md`); falta abrir cuentas y desplegar
- [ ] Revisión médica completa de las 991 preguntas
- [ ] Cuentas de usuario y sincronización (backend opcional)
