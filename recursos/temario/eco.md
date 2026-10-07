# Temario — Ecocardiografía

Curso `eco` (`js/data/eco.js`). Mismas convenciones que `temario/ecg.md`:
✅ existe (id) · 🟡 parcial · ⬜ pendiente. **Visual**: `diagram` (esquema de plano/estructura), `pressure` (curva hemodinámica, útil para correlacionar Doppler), `—` (solo texto). En el futuro: clips/imágenes reales (ver `guia-editorial.md` § Imágenes).

> Ids a 7-oct-2026 — `DIAGRAMS`: `a4c` (lv, rv, la, ra, mv, tv, septum), `plax` (rv, lv, la, ao, mv, av, septum), `psax` (ant, antsep, infsep, inf, inflat, antlat, rv), `coronary`. `PRESSURES`: `ra`, `rv`, `pa`, `pcwp`, `lv`, `ao`, `pcwp-v`, `ra-cannon`, `ra-af`, `rv-dip`, `as-lv-ao`, `pullback-pa-pcwp`. Compruébalos en el código antes de usarlos; si falta un esquema, pídelo en la orden 08.

Referencias troncales: cuantificación de cavidades ASE/EACVI 2015; función diastólica ASE/EACVI 2016 (actualización ASE 2025); valvulopatías ESC/EACTS 2021 y recomendaciones EACVI de regurgitación (2013/2022) y estenosis (2017); miocardiopatías ESC 2023; pericardio ESC 2015 (y 2025); FoCUS EACVI 2014/ WINFOCUS.

---

## Nivel 1 — Estudiante preclínico

### Unidad 1. Planos y anatomía (`eco-u1`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Ventanas ecocardiográficas (`eco-u1-l1`) | ✅ | Situar el transductor en las 4 ventanas; nombrar las estructuras de PEL, PEC, A4C y subcostal. | `diagram` planos (PEL, PEC, A4C, SC) |
| Modos de imagen (`eco-u1-l2`) | ✅ | Asociar modo M, 2D, Doppler pulsado, continuo, color y tisular a su uso; aplicar Bernoulli simplificado. | `diagram` |
| Física y knobología (`eco-u7-l1`) | ✅ | Relacionar frecuencia con resolución y penetración; ajustar ganancia, profundidad, foco y escala de color; explicar el aliasing y el límite de Nyquist; reconocer artefactos (reverberación, sombra, lóbulos laterales). | `diagram` |
| Anatomía ecográfica y segmentación (`eco-u7-l2`) | ✅ | Nombrar los 17 segmentos del VI y su territorio coronario; identificar los velos mitrales (A1–A3, P1–P3) y las cúspides aórticas. | `diagram` ojo de buey (17 segmentos) |
| Planos adicionales | ⬜ | Reconocer A2C, A3C (eje largo apical), A5C, PEC a nivel de grandes vasos y supraesternal; saber qué válvula se ve mejor en cada uno. | `diagram` |

### Unidad 2. Función ventricular (`eco-u2`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Ventrículo izquierdo (`eco-u2-l1`) | ✅ | Calcular FEVI por Simpson biplano; clasificar IC por FEVI; asociar alteraciones segmentarias a la arteria. | `diagram` ojo de buey |
| Ventrículo derecho y presiones (`eco-u2-l2`) | ✅ | Interpretar TAPSE, PSAP por IT y PAD por VCI; reconocer sobrecarga del VD. | `pressure` (AD/VD) |

---

## Nivel 2 — Estudiante clínico / MIR

### Unidad 3. Válvulas y pericardio (`eco-u3`) 🟡
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Valvulopatías (`eco-u3-l1`) | ✅ | Aplicar criterios de EA grave; usar la ecuación de continuidad; reconocer criterios de IM grave. | `pressure` (gradiente VI-Ao) |
| Pericardio y urgencias (`eco-u3-l2`) | ✅ | Reconocer taponamiento, TEP, hipovolemia y disección en eco focalizada. | `diagram` subcostal |

### Unidad 4. Miocardiopatías (`eco-u4`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Miocardiopatía hipertrófica (`eco-u4-l1`) | ✅ | Aplicar el criterio de grosor (≥ 15 mm; ≥ 13 mm con familiar afecto); reconocer SAM y obstrucción del TSVI (≥ 30 / ≥ 50 mmHg); predecir efecto de maniobras y fármacos. | `pressure` (VI-Ao en MCH, pendiente) |
| Dilatada, restrictiva y otras (`eco-u4-l2`) | ✅ | Definir MCD (ESC 2023); reconocer amiloidosis (apical sparing), tako-tsubo, DAVD; diferenciar constricción de restricción con e'. | `diagram` mapa polar de strain |
| Miocardiopatía no dilatada, no compactación y miocarditis | ⬜ | Conocer la nueva categoría MCNDVI (ESC 2023); entender por qué la hipertrabeculación es un rasgo y no una enfermedad; papel complementario de la RM cardiaca. | `—` |
| Cardio-oncología | ⬜ | Aplicar criterios de cardiotoxicidad (descenso de FEVI ≥ 10 puntos a < 50 %, o caída relativa de GLS > 15 %) (ESC 2022). | `—` |

### Unidad 5. Función diastólica y POCUS (`eco-u5`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Función diastólica (`eco-u5-l1`) | ✅ | Aplicar los 4 criterios ASE/EACVI 2016 (e', E/e', VAI, IT); graduar la disfunción por E/A; usar Valsalva; conocer limitaciones en FA. | `diagram` flujo mitral E/A (pendiente) |
| POCUS cardiaco (FoCUS) (`eco-u5-l2`) | ✅ | Responder preguntas binarias (derrame, VD/VI, función VI, VCI); EPSS; perfil de shock. | `diagram` subcostal |
| Insuficiencia cardiaca con FE preservada | ⬜ | Integrar eco en las escalas H₂FPEF y HFA-PEFF; conocer el papel del eco de estrés diastólico. | `—` |
| POCUS en parada y protocolos (RUSH, FATE) | ⬜ | Integrar "bomba–tanque–tuberías"; identificar causas reversibles (4H-4T) sin prolongar pausas; conocer líneas B pulmonares. | `diagram` |

### Unidad 6. Valvulopatías avanzado (`eco-u6`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Estenosis aórtica: casos difíciles (`eco-u6-l1`) | ✅ | Clasificar EA grave de alto gradiente, bajo flujo-bajo gradiente con FE reducida (eco de estrés con dobutamina) y con FE preservada (bajo flujo paradójico, VS indexado < 35 ml/m²); usar calcio score por TC. | `pressure` (VI-Ao) |
| Insuficiencia aórtica (`eco-u6-l3`) | ✅ | Graduar IA (vena contracta > 6 mm, PHT < 200 ms, inversión holodiastólica en aorta descendente, EROA ≥ 30 mm², VR ≥ 60 ml); conocer indicaciones quirúrgicas (FEVI ≤ 50 %, DTSVI > 50 mm o > 25 mm/m²). | `—` |
| Insuficiencia mitral primaria y secundaria (`eco-u6-l2`) | ✅ | Distinguir mecanismo (Carpentier I, II, IIIa, IIIb); aplicar PISA (EROA ≥ 40 mm², VR ≥ 60 ml); conocer criterios de intervención y de TEER. | `diagram` mitral (festones) |
| Estenosis mitral (`eco-u6-l3`) | ✅ | Medir área por planimetría y PHT (220/PHT); aplicar la puntuación de Wilkins; indicar valvuloplastia percutánea. | `—` |
| Válvulas derechas (`eco-u6-l4`) | ✅ | Graduar IT (hasta "masiva" y "torrencial"); estimar presiones; reconocer IT secundaria por dilatación anular. | `pressure` (AD con onda v) |
| Prótesis y endocarditis (`eco-u6-l4`) | ✅ | Diferenciar estenosis protésica de mismatch (EOAi); reconocer criterios ecográficos de endocarditis (vegetación, absceso, dehiscencia) y criterios de Duke-ISCVID 2023 / ESC 2023. | `—` |

### Unidad 7. Pericardio ampliado ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Derrame y taponamiento | 🟡 | Cuantificar el derrame (< 10, 10–20, > 20 mm); reconocer signos Doppler de taponamiento (variación mitral > 25 %, tricuspídea > 40 %). | `pressure` (pulso paradójico) |
| Pericarditis constrictiva | ⬜ | Reconocer rebote septal, variación respiratoria, VCI pletórica, e' medial conservada, inversión del flujo diastólico en venas hepáticas en espiración. | `pressure` (dip-plateau) |

---

## Nivel 3 — Residente de cardiología

### Unidad 8. Cuantificación avanzada (en `eco-u7` "Bases físicas y cuantificación", junto con física y segmentación de la Unidad 1) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Cuantificación de cavidades (ASE/EACVI 2015) (`eco-u7-l3`) | ✅ | Conocer valores normales (DTDVI, volúmenes indexados, masa indexada ♂ ≤ 115, ♀ ≤ 95 g/m², GPR > 0,42); clasificar geometría (remodelado concéntrico, HVI concéntrica/excéntrica). | `diagram` |
| Ventrículo derecho y aurícula (`eco-u7-l4`; aurículas en `eco-u7-l3`) | ✅ | Medir diámetro basal VD (> 41 mm dilatado), FAC (< 35 %), S' (< 9,5 cm/s), strain de pared libre; volumen AD. | `—` |
| Strain, 3D y contraste (`eco-u7-l4`) | ✅ | Interpretar GLS (normal ≈ −18 a −20 %, más negativo = mejor); conocer ventajas del 3D para volúmenes; indicaciones del contraste (≥ 2 segmentos no visibles, trombo apical, no compactación). | `diagram` mapa polar |

### Unidad 9. Eco transesofágico ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Indicaciones, preparación y planos | ⬜ | Enumerar indicaciones (endocarditis, orejuela antes de cardioversión, fuente embólica, guía de procedimientos); contraindicaciones (patología esofágica); planos esofágico medio y transgástrico. | `diagram` planos ETE |
| ETE en la práctica | ⬜ | Valorar orejuela izquierda (velocidad < 20 cm/s = riesgo), foramen oval permeable con suero agitado, aorta torácica. | `—` |
| Eco intraprocedimiento | ⬜ | Guiar TEER mitral, cierre de orejuela y de FOP/CIA; conocer el papel del ETE 3D. | `—` |

### Unidad 10. Eco de estrés ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Isquemia | ⬜ | Elegir ejercicio vs dobutamina; interpretar respuesta normal, isquémica, necrosis y viabilidad (respuesta bifásica). | `diagram` ojo de buey |
| No isquémico | ⬜ | Usar eco de estrés en EA bajo flujo (reserva contráctil: aumento del VS ≥ 20 %), IM, MCH, HP de esfuerzo. | `—` |

### Unidad 11. Cardiopatías congénitas del adulto ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Shunts | ⬜ | Diferenciar CIA (ostium secundum, primum, seno venoso), CIV y DAP; calcular Qp/Qs; reconocer sobrecarga de volumen del VD. | `diagram` |
| Lesiones obstructivas y complejas | ⬜ | Reconocer coartación (patrón en "diente de sierra" con prolongación diastólica), válvula bicúspide y aortopatía, Ebstein (desplazamiento apical ≥ 8 mm/m²), tetralogía de Fallot reparada. | `diagram` |

### Unidad 12. Casos integrados ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Disnea en urgencias | ⬜ | Integrar FEVI, función diastólica, válvulas y VD en un diagnóstico sindrómico. | mixto |
| Embolia y fiebre | ⬜ | Decidir ETT → ETE en sospecha de endocarditis o fuente cardioembólica. | mixto |
| Preoperatorio y valvulopatía asintomática | ⬜ | Aplicar los criterios de intervención de ESC/EACTS 2021. | mixto |
