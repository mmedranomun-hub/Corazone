# Temario — ECG (electrocardiografía)

Curso `ecg` (`js/data/ecg.js`). Temario completo por niveles. Cada lección indica:
- **Objetivos**: lo que el alumno debe saber hacer al terminar (verbos medibles: identificar, calcular, diferenciar, localizar…).
- **Visual**: recurso recomendado → `ecg` (tira, derivación II), `ecg12` (12 derivaciones), `tap` (tocar la onda), `diagram` (esquema), `—` (solo texto).
- Estado: ✅ ya existe en la app (con su id) · ⬜ pendiente · 🟡 existe parcialmente (ampliar).

> Ids de tira disponibles hoy en `RHYTHMS` (`js/ecg.js`): `sinus`, `brady`, `tachy`, `afib`, `flutter`, `svt`, `avb1`, `mobitz1`, `mobitz2`, `avb3`, `pvc`, `vt`, `vf`, `asystole`, `stemi`, `stdep`, `hyperk`, `lbbb`, `wpw`, `longqt`.
> Ids de `TWELVE_LEAD` (`ecg12`) a 7-oct-2026: `normal`, `stemi-inf`, `stemi-ant`, `stemi-lat`, `pericarditis`, `lad` (eje izquierdo), `rad` (eje derecho), `lvh`, `rbbb`, `lbbb12`. El catálogo crece: compruébalo en `js/ecg.js` antes de usarlo. Si un trazado no existe, la orden de trabajo debe pedírselo a `dev-frontend`.

Niveles:
- **N1** — estudiante preclínico (1.º–3.º): fisiología, lectura sistemática, ritmos básicos.
- **N2** — estudiante clínico / MIR: diagnóstico diferencial, urgencias, patrones de alto rendimiento.
- **N3** — residente de cardiología: matices, criterios finos, dispositivos, casos complejos.

---

## Nivel 1 — Fundamentos

### Unidad 1. Fundamentos (`ecg-u1`) ✅
| Lección | Estado | Objetivos de aprendizaje | Visual |
|---|---|---|---|
| El papel del ECG (`ecg-u1-l1`) | ✅ | Convertir mm a ms y mV; calcular FC por 300/cuadrados grandes, 1500/pequeños y método de 10 s; elegir el método en ritmo irregular. | `ecg: sinus`, `tap` |
| Ondas e intervalos (`ecg-u1-l2`) | ✅ | Nombrar P, QRS, T, U y su significado; dar rangos normales de PR (120–200 ms), QRS (< 120 ms), QTc (♂ < 450, ♀ < 460 ms); calcular QTc con Bazett. | `ecg: sinus`, `tap` (p, qrs, t) |
| Derivaciones y eje (`ecg-u1-l3`) | ✅ | Asociar derivaciones a caras; estimar el eje por cuadrantes (I y aVF) y afinarlo con la derivación isodifásica. | `ecg12` normal, `diagram` hexaxial |
| Electrofisiología básica | ⬜ | Describir el potencial de acción (fases 0–4) y relacionarlo con el ECG de superficie; explicar el sistema de conducción (nodo sinusal → nodo AV → His → ramas → Purkinje). | `diagram` sistema de conducción |
| Colocación de electrodos y artefactos | ⬜ | Situar V1–V6 correctamente; reconocer inversión de electrodos de brazos (I negativa, aVR positiva) y artefactos (temblor, interferencia 50 Hz); conocer efecto de V1–V2 altos. | `ecg12` inversión de brazos, `ecg` artefacto |
| Lectura sistemática | ⬜ | Aplicar una secuencia fija (ritmo, FC, PR, QRS, eje, QT, ST-T, hipertrofias) a un ECG normal y redactar un informe de 1 línea. | `ecg12` normal |

### Unidad 2. Ritmo sinusal y bradiarritmias básicas ⬜ (parte en `ecg-u2-l2`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Ritmo sinusal y sus variantes | ⬜ | Definir criterios de ritmo sinusal (P + en I, II, aVF; P − en aVR); reconocer taquicardia, bradicardia y arritmia sinusal respiratoria. | `ecg: sinus, brady, tachy` |
| Disfunción sinusal | ⬜ | Diferenciar pausa sinusal, bloqueo sinoauricular y síndrome bradi-taqui; conocer cuándo está indicado marcapasos (ESC 2021). | `ecg` (pausa — pendiente de crear) |
| Bloqueos AV (`ecg-u2-l2`) | ✅ | Clasificar BAV 1.º, Mobitz I, Mobitz II, 2:1, avanzado y completo; predecir el nivel del bloqueo (nodal vs infrahisiano). | `ecg: avb1, mobitz1, mobitz2, avb3`, `tap: pBlocked` |
| Ritmos de escape | ⬜ | Diferenciar escape nodal (QRS estrecho, 40–60 lpm) de idioventricular (ancho, 20–40 lpm); reconocer RIVA tras reperfusión. | `ecg` (escape nodal/RIVA — pendiente) |

### Unidad 3. Taquiarritmias básicas ✅ (`ecg-u2-l1`, `ecg-u2-l3`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Ritmos supraventriculares (`ecg-u2-l1`) | ✅ | Reconocer FA, flutter 2:1, TSV; elegir tratamiento inicial de la TSV estable (vagales → adenosina). | `ecg: afib, flutter, svt` |
| Ritmos ventriculares y parada (`ecg-u2-l3`) | ✅ | Reconocer EV, TV, FV, asistolia; distinguir ritmos desfibrilables; aplicar cardioversión sincronizada vs desfibrilación. | `ecg: pvc, vt, vf, asystole` |
| Extrasístoles | ⬜ | Distinguir extrasístole auricular (P prematura, pausa no compensadora) de ventricular (QRS ancho, pausa compensadora); definir bigeminismo, dupletas y TVNS. | `ecg: pvc`, `tap: vent` |

---

## Nivel 2 — Estudiante clínico / MIR

### Unidad 4. Crecimientos de cavidades ✅ (`ecg-u5`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Crecimientos auriculares (`ecg-u5-l1`) | ✅ | Reconocer P pulmonale (> 2,5 mm en II) y P mitrale (≥ 120 ms, bimodal; componente negativo terminal en V1 ≥ 1 mm × 40 ms). | `ecg12` (crecimiento AI/AD) |
| Hipertrofia ventricular izquierda (`ecg-u5-l2`) | ✅ | Aplicar Sokolow-Lyon (SV1 + RV5/V6 ≥ 35 mm) y Cornell (RaVL + SV3 > 28 ♂ / > 20 ♀ mm); reconocer patrón de sobrecarga ("strain"); conocer su baja sensibilidad. | `ecg12` HVI con strain |
| Hipertrofia ventricular derecha (`ecg-u5-l3`) | ✅ | Reconocer R dominante en V1 (R/S > 1), eje derecho, S profundas en V5–V6; diferencial de R alta en V1 (BRD, IAM posterior, WPW, DMD). | `ecg12` HVD |

### Unidad 5. Trastornos de conducción intraventricular ✅🟡 (`ecg-u6`; BRI también en `ecg-u3-l2`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Bloqueo de rama derecha (`ecg-u6-l1`) | ✅ | Aplicar criterios (QRS ≥ 120 ms, rSR' en V1–V2, S ancha en I y V6); diferenciar BRD incompleto; reconocer T discordante normal. | `ecg12` BRD |
| Bloqueo de rama izquierda (`ecg-u6-l2`) | ✅ | Aplicar criterios (QRS ≥ 120 ms, R ancha mellada en I, aVL, V5–V6, ausencia de q septal); saber que oculta isquemia; criterios de Sgarbossa (y Smith) para IAM con BRI. | `ecg: lbbb`, `ecg12` BRI |
| Hemibloqueos y bloqueo bifascicular/trifascicular (`ecg-u6-l3`) | ✅ | Diagnosticar HBAI (eje < −45°, qR en aVL, rS en II-III-aVF) y HBPI (eje > +90° tras excluir HVD); reconocer BRD + HBAI; desmentir el "bloqueo trifascicular" como término ambiguo. | `ecg12` BRD+HBAI |
| Trastorno inespecífico y aberrancia | ⬜ | Reconocer conducción aberrante (fenómeno de Ashman) frente a EV. | `ecg` |

### Unidad 6. Isquemia e infarto ✅ (`ecg-u3-l1`, `ecg-u4-l1`, `ecg-u7`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Síndrome coronario agudo (`ecg-u3-l1`) | ✅ | Reconocer elevación y descenso del ST; aplicar tiempos de reperfusión. | `ecg: stemi, stdep` |
| Criterios de IAMCEST y evolución (`ecg-u7-l1`) | ✅ | Aplicar umbrales de elevación del ST por derivación, sexo y edad (V2–V3: ≥ 2 mm ♂ ≥ 40 a, ≥ 2,5 mm ♂ < 40 a, ≥ 1,5 mm ♀; resto ≥ 1 mm) (4.ª Definición Universal 2018); describir la secuencia hiperaguda → ST → Q → T negativa. | `ecg12` IAM evolutivo |
| Localización y arteria culpable (`ecg-u7-l2`) | ✅ | Localizar IAM anterior, inferior, lateral, posterior y de VD; distinguir CD vs Cx en IAM inferior (ST III > II, descenso en I y aVL → CD); reconocer oclusión proximal de DA. | `ecg12` inferior, anterior, posterior; `diagram` árbol coronario |
| Equivalentes de oclusión (OMI) (`ecg-u7-l3`) | ✅ | Reconocer patrón de Wellens (A y B), de Winter, elevación de aVR con descenso difuso, IAM posterior (descenso V1–V3 → V7–V9), T hiperagudas. | `ecg12` Wellens, de Winter |
| Diagnóstico diferencial del ST elevado (`ecg-u7-l4`) | ✅ | Diferenciar IAM de pericarditis, repolarización precoz, aneurisma ventricular, BRI, HVI, Brugada y tako-tsubo. | `ecg12` pericarditis, repolarización precoz |

### Unidad 7. Arritmias supraventriculares avanzadas ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Taquicardias de QRS estrecho: algoritmo | ⬜ | Clasificar por regularidad y relación P-QRS (RP corto vs largo); diferenciar TRIN, TRAV ortodrómica, taquicardia auricular y flutter; predecir la respuesta a adenosina. | `ecg: svt, flutter, tachy` |
| Fibrilación y flutter auricular | 🟡 | Distinguir flutter típico (F negativas en inferiores) de atípico; aplicar CHA₂DS₂-VA (ESC 2024) y estrategia de control de frecuencia/ritmo. | `ecg: afib, flutter` |
| Preexcitación y WPW | 🟡 | Reconocer PR corto + onda delta; localizar aproximadamente la vía; manejar FA preexcitada (evitar frenadores del nodo AV). | `ecg: wpw`, `ecg12` WPW |
| Taquicardia auricular multifocal y otras | ⬜ | Reconocer ≥ 3 morfologías de P y asociarla a EPOC; diferenciar de FA. | `ecg` (pendiente) |

### Unidad 8. Arritmias ventriculares ✅ (`ecg-u8`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Taquicardia de QRS ancho: ¿TV o TSV aberrada? (`ecg-u8-l1`) | ✅ | Aplicar criterios de TV (disociación AV, latidos de captura/fusión, concordancia precordial, eje extremo); conocer Brugada y Vereckei (aVR); regla: ante la duda, TV. | `ecg: vt`, `ecg12` TV |
| TV polimórfica y torsade de pointes (`ecg-u8-l2`) | ✅ | Reconocer torsade con QT largo; tratar con magnesio, retirar fármacos, aumentar FC. | `ecg` torsade (pendiente) |
| TV idiopáticas y extrasistolia frecuente (`ecg-u8-l3`) | ✅ | Reconocer TV de TSVD (BRI + eje inferior) y fascicular (BRD + HBAI); conocer la miocardiopatía por EV (> 10–15 % de carga). | `ecg: bigeminy, ivr`, `tap: vent` |
| QRS ancho: diferencial y manejo (`ecg-u8-l4`) | ✅ | Reconocer FA preexcitada y evitar frenadores del nodo AV; identificar QRS ancho por marcapasos, iones y fármacos; usar adenosina diagnóstica con seguridad; interpretar la concordancia precordial. | `ecg: afib-wpw, pacer-vvi` |

### Unidad 9. Trastornos iónicos, fármacos y otros patrones 🟡 (`ecg-u3-l2`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Patrones que no debes olvidar (`ecg-u3-l2`) | ✅ | Reconocer hiperpotasemia, WPW, BRI, QT largo, pericarditis, S1Q3T3. | `ecg: hyperk, wpw, lbbb, longqt` |
| Potasio y calcio | ⬜ | Ordenar la progresión de la hiperpotasemia (T picudas → P aplanada → QRS ancho → onda sinusoidal); reconocer hipopotasemia (U, descenso ST), hipo/hipercalcemia (QT largo/corto). | `ecg: hyperk`, `ecg12` |
| Fármacos | ⬜ | Reconocer efecto digitálico ("cubeta") vs intoxicación (TA con bloqueo, bidireccional); efecto de antiarrítmicos IC (QRS ancho) y III (QT largo); intoxicación por tricíclicos (R en aVR, QRS ancho). | `ecg12` |
| Otras situaciones | ⬜ | Reconocer patrón del TEP (taquicardia, BRD, S1Q3T3, T negativas V1–V4), hipotermia (onda J de Osborn), HSA (T gigantes negativas), dextrocardia. | `ecg12` |

---

## Nivel 3 — Residente de cardiología

### Unidad 10. Canalopatías y miocardiopatías arritmogénicas 🟡 (`ecg-u9`)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Síndrome de Brugada (`ecg-u9-l1`) | ✅ | Diferenciar patrón tipo 1 (diagnóstico, "coved" ≥ 2 mm en V1–V2, incluso en 2.º–3.er EIC) del tipo 2 ("silla de montar"); conocer desencadenantes (fiebre, fármacos) y el test con flecainida/ajmalina. | `ecg12` Brugada 1 y 2 |
| QT largo congénito y adquirido (`ecg-u9-l2`) | ✅ | Medir QT (método de la tangente); clasificar LQT1–3 por morfología de T y desencadenantes; aplicar puntuación de Schwartz; manejar fármacos que alargan el QT. | `ecg: longqt`, `ecg12` |
| QT corto, TVPC y repolarización precoz maligna (`ecg-u9-l3`) | ✅ | Reconocer QTc ≤ 320–360 ms; sospechar TV polimórfica catecolaminérgica (TV bidireccional con esfuerzo); identificar patrón de repolarización precoz de riesgo. | `ecg12` |
| Miocardiopatía arritmogénica (DAVD) (`ecg-u9-l4`) | ✅ | Reconocer T negativas V1–V3 (> 14 años sin BRD), onda épsilon, QRS prolongado en V1–V3, EV con morfología BRI; conocer criterios del Task Force 2010 / Padua 2020. | `ecg12` DAVD |
| MCH y otras miocardiopatías en el ECG | ⬜ | Reconocer HVI con T negativas gigantes (MCH apical), Q septales profundas, bajo voltaje en amiloidosis. | `ecg12` |

### Unidad 11. Marcapasos y DAI ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Fundamentos y código NBG | ⬜ | Interpretar el código de 3–5 letras (VVI, DDD, AAI, DDDR); identificar espículas auriculares y ventriculares; asociar estimulación de VD a morfología de BRI. | `ecg` marcapasos (pendiente) |
| Disfunción de marcapasos | ⬜ | Diferenciar fallo de captura, fallo de detección (infra/sobredetección) y taquicardia mediada por marcapasos. | `ecg` (pendiente) |
| Estimulación biventricular y de sistema de conducción | ⬜ | Reconocer QRS estimulado estrecho en estimulación hisiana/rama izquierda; valorar respuesta a TRC (R en V1, QS en I). | `ecg12` |
| DAI y terapias | ⬜ | Distinguir terapia apropiada vs inapropiada (FA rápida, sobredetección de T). | `ecg` |

### Unidad 12. ECG en poblaciones especiales ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| ECG del deportista | ⬜ | Aplicar los Criterios Internacionales (2017): hallazgos normales (bradicardia sinusal, BAV 1.º, Mobitz I, HVI por voltaje aislado, repolarización precoz) vs anormales (T negativas, Q patológicas, BRI, Brugada tipo 1). | `ecg12` |
| ECG pediátrico | ⬜ | Conocer el predominio derecho del neonato, T negativas en V1–V3 normales en la infancia ("patrón juvenil"), FC normales por edad. | `ecg12` |
| ECG en el anciano y en la mujer | ⬜ | Ajustar umbrales del ST por sexo y edad; reconocer la presentación atípica del SCA. | `—` |

### Unidad 13. Casos clínicos integrados ⬜ (todos los niveles)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Urgencias: dolor torácico | ⬜ | Integrar clínica + ECG para decidir código infarto, pericarditis o TEP. | `ecg12` |
| Urgencias: palpitaciones y síncope | ⬜ | Elegir actitud ante taquicardia QRS estrecho/ancho estable o inestable; estratificar el síncope con ECG (BAV avanzado, Brugada, QT largo, WPW). | `ecg`, `ecg12` |
| Planta: el paciente con fármacos y alteraciones iónicas | ⬜ | Detectar efectos adversos en ECG seriados (QT, K⁺, digoxina). | `ecg12` |
| ECG para el MIR | ⬜ | Resolver preguntas tipo examen que mezclan todo el temario. | mixto |

---

## Resumen de cobertura
- ✅ 8 lecciones existentes (≈ 45 preguntas) + 10 lecciones nuevas (60 preguntas) en `ecg-u5` (crecimientos), `ecg-u6` (bloqueos de rama/fasciculares) y `ecg-u7` (infarto: criterios, localización, OMI y diferencial).
- Orden 05: 8 lecciones nuevas (48 preguntas) en `ecg-u8` (arritmias ventriculares) y `ecg-u9` (canalopatías y miocardiopatía arritmogénica). Trazados pendientes: `ecg12` de TV monomorfa, Brugada tipo 2, DAVD (T negativas V1–V3 + épsilon), LQT1–3; tira de TV bidireccional y de TV con capturas/fusión.
- Prioridad alta para siguientes órdenes: Unidad 13 (casos), MCH y otras miocardiopatías (Unidad 10).
