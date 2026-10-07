# Orden 05 — ECG: taquicardia de QRS ancho, canalopatías y miocardiopatía arritmogénica

**Prioridad:** 5 (alta) · **Agente:** `redactor-contenido` (+ `dev-frontend` para tiras nuevas: torsade) · **Nivel:** N2–N3 · **Temario:** `temario/ecg.md` Unidades 8 y 10

## Objetivo
Enseñar a no equivocarse ante una taquicardia de QRS ancho y a reconocer los patrones de muerte súbita (Brugada, QT largo/corto, DAVD, TVPC).

## Archivos a tocar
- `js/data/ecg.js` (nuevas unidades `ecg-u7` "Arritmias ventriculares" y `ecg-u8` "Canalopatías"; usa los siguientes ids libres si ya existen otros).
- `recursos/temario/ecg.md`.

## Alcance
- QRS ancho: criterios de TV (disociación AV, capturas/fusión, concordancia, eje extremo), Brugada y Vereckei; manejo estable/inestable.
- TV polimórfica / torsade (magnesio); TV idiopáticas (TSVD, fascicular).
- Brugada tipo 1 vs 2; QT largo (LQT1–3, Schwartz, fármacos); QT corto; TVPC; DAVD (T negativas V1–V3, épsilon).

## Criterios de aceptación
- [ ] ESC 2022 arritmias ventriculares/MS; consenso de onda J 2016; Task Force 2010/Padua 2020.
- [ ] Usa `ecg: 'vt' | 'vf' | 'longqt' | 'pvc'` y `ecg12` de Brugada si existe; `tap` para señalar latidos de captura/fusión solo si la tira y el test lo soportan.
- [ ] 5–6 preguntas por lección; `npm test` verde; revisión sin ERROR.

## Prompt sugerido
```
Actúa como redactor-contenido. Lee CLAUDE.md, recursos/guia-editorial.md, recursos/plantilla-leccion.md y recursos/temario/ecg.md (Unidades 8 y 10).
Añade a js/data/ecg.js dos unidades (siguientes ids libres): "Arritmias ventriculares" (QRS ancho: TV vs aberrancia; TV polimórfica y torsade; TV idiopáticas) y "Canalopatías" (Brugada; QT largo/corto y TVPC; miocardiopatía arritmogénica). 5–6 preguntas por lección, con casos. Base ESC 2022. Usa solo ids de RHYTHMS/TWELVE_LEAD existentes y anota en recursos/ordenes/08 los trazados que falten. npm test, actualiza el temario, no hagas commit.
```
