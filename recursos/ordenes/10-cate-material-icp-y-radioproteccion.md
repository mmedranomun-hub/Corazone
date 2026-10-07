# Orden 10 — Cateterismo: material, técnica de ICP, bifurcaciones/CTO/calcio y radioprotección

**Prioridad:** 9 (media) · **Agente:** `redactor-contenido` · **Nivel:** N1 (material, radioprotección) a N3 (ICP compleja) · **Temario:** `temario/cateterismo.md` Unidades 2 (pendientes), 8 y 10

## Objetivo
Cubrir el "cómo se hace": catéteres y guías, contraste y protección radiológica, y la ICP compleja que más pregunta un residente.

## Archivos a tocar
- `js/data/cateterismo.js` (dos unidades nuevas con los siguientes ids libres; leer estado actual antes).
- `recursos/temario/cateterismo.md`.

## Alcance
- Unidad "Material y seguridad": catéteres (JL/JR, Amplatz, guía vs diagnóstico), guías y balones, contraste y NIC, ALARA y límites de dosis (RD 1029/2022).
- Unidad "ICP avanzada": técnica básica, bifurcaciones (Medina, provisional, POT, DK-crush, culotte), calcio (rotacional, litotricia), CTO (J-CTO, anterógrado/retrógrado), complicaciones (Ellis, no-reflow, trombosis ARC).

## Criterios de aceptación
- [ ] Consensos EAPCI/EBC y EuroCTO; ARC-2; protección radiológica según normativa española/Euratom.
- [ ] `diagram` de bifurcación/árbol si existe.
- [ ] 2 unidades × 2–3 lecciones × 5–6 preguntas; `npm test` verde; revisión sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/cateterismo.md (Unidades 2, 8 y 10). Lee el estado actual de js/data/cateterismo.js.
Añade dos unidades (siguientes ids libres): "Material y seguridad" y "ICP avanzada", con 2–3 lecciones cada una y 5–6 preguntas por lección según el temario. Usa diagram solo con ids existentes. npm test, actualiza el temario, no hagas commit.
```
