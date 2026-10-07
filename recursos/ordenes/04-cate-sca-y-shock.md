# Orden 04 — Cateterismo: SCA, shock cardiogénico y complicaciones mecánicas

**Prioridad:** 4 (alta) · **Agente:** `redactor-contenido` · **Nivel:** N2–N3 · **Temario:** `temario/cateterismo.md` Unidad 5

## Objetivo
Cubrir la hemodinámica del paciente agudo: ICP primaria, estrategia invasiva en IAMSEST, shock (SCAI) y soporte mecánico, complicaciones mecánicas.

## Archivos a tocar
- `js/data/cateterismo.js` (nueva unidad `cate-u4` o el siguiente id libre; **coordinar**: este archivo puede estar editándose en paralelo; leer su estado actual justo antes de empezar).
- `recursos/temario/cateterismo.md`.

## Alcance (3–4 lecciones)
1. ICP primaria (tiempos, acceso radial, culpable vs completa, trombectomía no rutinaria).
2. IAMSEST: estrategia invasiva inmediata/precoz, MINOCA, SCAD.
3. Shock cardiogénico: estadios SCAI A–E, perfil hemodinámico (IC, PCP, CPO, PAPi), BCIA/Impella/ECMO-VA con ensayos clave.
4. Complicaciones mecánicas (rotura de papilar, CIV con salto oximétrico, rotura de pared libre).

## Criterios de aceptación
- [ ] ESC SCA 2023; SCAI 2019/2022; ensayos CULPRIT-SHOCK, IABP-SHOCK II, ECLS-SHOCK, DanGer Shock citados correctamente en `explain` cuando proceda.
- [ ] Usa `pressure` (PCP con onda v, BCIA) y `ecg12` si existen.
- [ ] 5–6 preguntas por lección; `npm test` verde; revisión médica sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/cateterismo.md (Unidad 5). Lee el estado actual de js/data/cateterismo.js y usa el siguiente id de unidad libre.
Crea la unidad "SCA y shock" con 4 lecciones (ICP primaria, IAMSEST, shock cardiogénico, complicaciones mecánicas), 5–6 preguntas cada una. Base: ESC SCA 2023, SCAI 2019/2022 y ensayos clave. Usa pressure/ecg12 solo con ids existentes. npm test, actualiza el temario, no hagas commit.
```
