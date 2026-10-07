# Temario — Cateterismo cardiaco y hemodinámica

Curso `cate` (`js/data/cateterismo.js`). Convenciones como en `temario/ecg.md`:
✅ existe (id) · 🟡 parcial · ⬜ pendiente. **Visual**: `diagram` (árbol coronario, proyecciones; con `highlight` para resaltar un segmento), `pressure` (curvas AD, VD, AP, PCP, VI, Ao y patológicas), `ecg`/`ecg12` (cuando la pregunta integra ECG), `—`.

> `DIAGRAMS` y `PRESSURES` se están construyendo: verifica los ids reales antes de usarlos.

Referencias troncales: ESC 2023 SCA; ESC 2024 síndromes coronarios crónicos; ESC/EACTS 2018 revascularización; ESC/ERS 2022 HP; ESC/EACTS 2021 valvulopatías; documentos de consenso EAPCI (fisiología e imagen intracoronaria 2018/2022, CTO EuroCTO); SCAI 2019/2022 (shock); Kern *Cardiac Catheterization Handbook*; Grossman & Baim.

---

## Nivel 1 — Estudiante preclínico

### Unidad 1. Anatomía coronaria (`cate-u1`) ✅🟡
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Árbol coronario (`cate-u1-l1`) | ✅ | Nombrar arterias y ramas; definir dominancia; conocer umbrales angiográficos (TCI ≥ 50 %, resto ≥ 70 %). | `diagram` árbol coronario |
| Proyecciones angiográficas (`cate-u1-l2`) | ✅ | Interpretar la nomenclatura OAI/OAD craneal/caudal; elegir proyección por segmento; graduar flujo TIMI. | `diagram` proyecciones |
| Segmentación y variantes anatómicas | ⬜ | Usar la segmentación SYNTAX/AHA; reconocer origen anómalo (Cx desde seno derecho, curso interarterial maligno), puentes musculares, ramus intermedius y fístulas. | `diagram` árbol coronario (`highlight`) |

### Unidad 2. El procedimiento (`cate-u2`) ✅🟡
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Accesos vasculares (`cate-u2-l1`) | ✅ | Elegir acceso radial; conocer referencias femorales y complicaciones de cada acceso. | `—` |
| Fisiología y decisión (`cate-u2-l2`) | ✅ | Interpretar FFR/iFR; conocer usos de IVUS/OCT; DAPT tras SCA. | `pressure` (Pd/Pa) |
| Catéteres, guías y material | ⬜ | Asociar catéteres diagnósticos (Judkins L/R, Amplatz, Tiger) a cada coronaria; diferenciar catéteres guía y soporte; conocer guías (hidrofílicas, carga de punta), balones (semi y no distensibles) y stents (DES vs BMS). | `diagram` |
| Contraste y protección radiológica | ⬜ | Prevenir nefropatía por contraste (hidratación, minimizar volumen); manejar alergia; aplicar ALARA (tiempo, distancia, blindaje), dosis Kerma/DAP, protección del operador. | `—` |

---

## Nivel 2 — Estudiante clínico / MIR

### Unidad 3. Hemodinámica (`cate-u3`) ✅
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Cateterismo derecho (`cate-u3-l1`) | ✅ | Conocer presiones normales; definir HP (PAPm > 20 mmHg); calcular RVP y GC por Fick. | `pressure` (AD, VD, AP, PCP) |
| Curvas de presión (`cate-u3-l2`) | ✅ | Interpretar ondas a, v, x, y; reconocer v gigantes, a en cañón, dip-plateau. | `pressure` |

### Unidad 4. Coronariografía e interpretación ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Lectura de una coronariografía | ⬜ | Describir lesiones (localización, % estenosis, longitud, calcio, trombo, bifurcación); clasificar enfermedad de 1, 2, 3 vasos y TCI. | `diagram` árbol (`highlight`) |
| QCA y limitaciones de la angiografía | ⬜ | Explicar por qué la angiografía subestima/sobreestima (excentricidad, remodelado, solapamiento); calcular SYNTAX score a grandes rasgos. | `diagram` |
| Indicaciones de coronariografía | ⬜ | Aplicar indicaciones en SCA (inmediata < 2 h, precoz < 24 h) y síndrome coronario crónico (ESC 2023/2024). | `ecg12` |

### Unidad 5. SCA y shock ⬜ (prioridad alta)
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| ICP primaria en IAMCEST | ⬜ | Aplicar tiempos (diagnóstico → guía ≤ 90–120 min); tratar solo la arteria culpable en shock (CULPRIT-SHOCK) y revascularización completa en estables; trombectomía no rutinaria. | `ecg12` + `diagram` |
| IAMSEST: estrategia invasiva | ⬜ | Estratificar riesgo (muy alto → < 2 h; alto → < 24 h); reconocer MINOCA y SCAD (disección espontánea, manejo conservador). | `diagram` |
| Shock cardiogénico | ⬜ | Clasificar por SCAI (A–E); interpretar perfil hemodinámico (IC < 2,2, PCP > 15, PAPi, CPO < 0,6 W); conocer BCIA (IABP-SHOCK II), Impella (DanGer Shock) y ECMO-VA (ECLS-SHOCK). | `pressure` (BCIA) |
| Complicaciones mecánicas del IAM | ⬜ | Reconocer rotura de músculo papilar (v gigante), CIV (salto oximétrico en VD), rotura de pared libre. | `pressure` (PCP con onda v) |

### Unidad 6. Hemodinámica avanzada e hipertensión pulmonar ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Hipertensión pulmonar en el cateterismo | ⬜ | Clasificar HP pre/post-capilar (RVP > 2 UW, PCP > 15; ESC/ERS 2022); calcular GTP y GDP; realizar test vasodilatador (respondedor: ↓ PAPm ≥ 10 mmHg hasta ≤ 40 con GC conservado). | `pressure` (AP, PCP) |
| Oximetría y shunts | ⬜ | Realizar serie oximétrica; calcular Qp/Qs; reconocer salto ≥ 7 % (auricular) / ≥ 5 % (ventricular). | `—` |
| Valvulopatías en el laboratorio | ⬜ | Calcular área valvular por Gorlin y Hakki; reconocer gradiente VI-Ao, signo de Brockenbrough en MCH; diferenciar constricción vs restricción (interdependencia). | `pressure` (VI-Ao, VI-AI) |

---

## Nivel 3 — Residente de cardiología

### Unidad 7. Fisiología e imagen intracoronaria ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| FFR, iFR y índices no hiperémicos | 🟡 | Aplicar umbrales (FFR ≤ 0,80; iFR/RFR ≤ 0,89); reconocer pitfalls (deriva, estenosis seriadas, SCA agudo en la culpable); conocer QFR/FFR angiográfico. | `pressure` (Pd/Pa) |
| Microcirculación y ANOCA/INOCA | ⬜ | Interpretar CFR (< 2,0), IMR (≥ 25) y test de acetilcolina (espasmo epicárdico vs microvascular). | `pressure` |
| IVUS y OCT | 🟡 | Medir área luminal mínima (TCI IVUS < 6 mm² en occidentales); criterios de optimización (expansión > 80–90 %, aposición, disección de borde); reconocer fenotipos de placa (rotura, erosión, nódulo calcificado). | `diagram` |

### Unidad 8. ICP: técnica ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Técnica básica de ICP | ⬜ | Secuenciar la ICP (catéter guía → guía → predilatación → stent → posdilatación); elegir tamaño de stent; antitrombóticos periprocedimiento. | `diagram` |
| Bifurcaciones y tronco | ⬜ | Usar la clasificación de Medina; preferir estrategia provisional; conocer técnicas de 2 stents (DK-crush, culotte, TAP) y POT. | `diagram` bifurcación |
| Lesiones calcificadas | ⬜ | Elegir entre balón de corte/scoring, aterectomía rotacional/orbital y litotricia intravascular. | `—` |
| Oclusiones crónicas totales (CTO) | ⬜ | Definir CTO (≥ 3 meses, TIMI 0); conocer score J-CTO; describir abordajes anterógrado, retrógrado y disección-reentrada (algoritmo híbrido). | `diagram` |

### Unidad 9. Intervencionismo estructural ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| TAVI | ⬜ | Aplicar indicaciones (≥ 75 años o alto riesgo según ESC/EACTS 2021; la actualización 2025 rebaja el umbral orientativo: verificar; decisión del Heart Team); planificación por TC; complicaciones (BAV y marcapasos, fuga paravalvular, oclusión coronaria). | `pressure` (VI-Ao pre/post) |
| Reparación mitral y tricuspídea transcatéter | ⬜ | Seleccionar candidatos a TEER mitral (IM secundaria con criterios COAPT, primaria con alto riesgo); valvuloplastia mitral percutánea; T-TEER. | `pressure` (onda v pre/post) |
| Cierre de orejuela, FOP y CIA | ⬜ | Conocer indicaciones de cierre de orejuela (contraindicación para anticoagulación), FOP (ictus criptogénico < 60 años con RoPE alto). | `—` |

### Unidad 10. Complicaciones y seguridad ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Complicaciones coronarias | 🟡 | Manejar perforación (clasificación de Ellis; balón, stent recubierto, pericardiocentesis), no-reflow (vasodilatadores intracoronarios), disección (NHLBI), trombosis del stent (ARC). | `diagram` |
| Complicaciones vasculares y sistémicas | ⬜ | Reconocer hematoma retroperitoneal, pseudoaneurisma, ictus periprocedimiento, embolia de colesterol, reacciones al contraste. | `—` |
| Radioprotección avanzada | ⬜ | Conocer límites de dosis del trabajador expuesto (20 mSv/año efectiva; cristalino 20 mSv/año); lesiones cutáneas deterministas (> 2 Gy). | `—` |

### Unidad 11. Casos integrados ⬜
| Lección | Estado | Objetivos | Visual |
|---|---|---|---|
| Del ECG a la sala | ⬜ | Predecir la arteria culpable a partir del ECG y elegir proyecciones. | `ecg12` + `diagram` |
| Shock en la sala de hemodinámica | ⬜ | Integrar curvas, gasto y oximetría para decidir soporte mecánico. | `pressure` |
| Heart Team | ⬜ | Elegir entre ICP y cirugía (SYNTAX, diabetes, TCI) y entre TAVI y SAVR. | `—` |
