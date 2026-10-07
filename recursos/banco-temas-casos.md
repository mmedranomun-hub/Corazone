# Banco de temas de casos clínicos (ETT · ETE · Cateterismo · ECG · Integrados)

Lista maestra de temas para lecciones-caso de `js/data/casos.js` (agente `redactor-casos`). Inspirada en los **temas** de las fuentes de [`fuentes-casos.md`](fuentes-casos.md): ningún caso, texto ni imagen se copia; cada viñeta se redacta desde cero.

**Leyenda**
- **Nivel**: N1 preclínico · N2 clínico/MIR · N3 residente. ★ = alto rendimiento MIR/residencia (priorizar).
- **Visual**: ids existentes → `ecg:` (`RHYTHMS`), `ecg12:` (`TWELVE_LEAD`), `pressure:` (`PRESSURES`), `diagram: id/highlight` (`DIAGRAMS`). "nuevo: …" = no existe; pedirlo en la orden 08 (no bloquea el caso: puede salir sin visual o con el más próximo).
- **Estado**: ✅ ya existe como lección con `case:` en `js/data/casos.js` (comprobado con `grep -n` el 7-oct-2026, incluidas las unidades `casos-u6`–`u8` añadidas en paralelo; `js/data/cateterismo.js` no tiene lecciones `case:`) · ⬜ pendiente.
- **Guías** (ver `bibliografia.md`): ESC IC 2021 + act. 2023; ESC SCA 2023; ESC SCC 2024; ESC FA 2024; ESC valvulopatías 2025 (antes 2021); ESC endocarditis 2023; ESC miocardiopatías 2023; ESC miocarditis y pericarditis 2025; ESC HP 2022; ESC TEP 2019; ESC aorta y arterias periféricas 2024; ESC arritmias ventriculares/MS 2022; ESC TSV 2019; ESC marcapasos y TRC 2021; ESC síncope 2018; ESC cardiopatías congénitas del adulto 2020; ESC embarazo 2025; ESC cardio-oncología 2022; ERC RCP 2025; SCAI shock 2019/2022. Cifras con cambios recientes (edad TAVI, umbrales IAo/IM) → comprobar en la guía antes de usar y marcar `// REVISAR:`.

Recuento: **144 temas** — ETT 41 · ETE 19 · Cateterismo 35 · ECG 36 · Integrados 13 — **58 ✅ / 86 ⬜**.

---

## 1. Ecocardiograma transtorácico (ETT) — 41

| ID | Tema | Nivel | Hallazgos clave | Cálculos | Decisión · guía | Visual | Estado |
|---|---|---|---|---|---|---|---|
| ETT-01 | Disnea y FEVI reducida (MCD) | N2 ★ | VI dilatado, hipocinesia global, FEVI < 40 %, IM funcional | FEVI Simpson; VS = área TSVI × VTI | 4 pilares (ARNI/IECA, BB, ARM, iSGLT2); DAI si FEVI ≤ 35 % tras TMO · ESC IC 2021/23 | diagram: a4c/lv | ✅ casos-u1-l1 |
| ETT-02 | EA de bajo flujo y bajo gradiente con FEVI reducida | N3 ★ | AVA < 1 cm², Gm < 40, FEVI < 50 %, VSi ≤ 35 ml/m² | Continuidad; reserva de flujo con dobutamina (↑VS ≥ 20 %) | Eco-dobutamina / calcio TC → TAVI/SAVR · ESC valv. 2025 | pressure: as-lv-ao | ✅ casos-u1-l2 |
| ETT-03 | Derrame pericárdico y taponamiento | N2 ★ | Colapso diastólico AD/VD, VCI pletórica, variación respiratoria de flujos | Variación E mitral > 25 %, tricuspídea > 40 % | Pericardiocentesis urgente · ESC peric. 2025 | diagram: a4c/ra | ✅ casos-u1-l3 |
| ETT-04 | MCH obstructiva y síncope de esfuerzo | N2 ★ | SIV ≥ 15 mm, SAM, IM posterior, gradiente TSVI dinámico | Bernoulli 4v² (≥ 50 mmHg con Valsalva) | BB, evitar vasodilatadores, mavacamten, miectomía/alcoholización; DAI por HCM Risk-SCD · ESC MC 2023 | diagram: plax/septum | ✅ casos-u1-l4 |
| ETT-05 | TEP de riesgo intermedio-alto | N2 ★ | VD/VI > 1, McConnell, TAPSE bajo, septo en D | PSAP = 4v²(IT) + PAD | Anticoagulación + monitorización, fibrinólisis de rescate · ESC TEP 2019 | diagram: a4c/rv | ✅ casos-u4-l1 |
| ETT-06 | Estenosis mitral reumática | N2 ★ | Fusión comisural, "palo de hockey", AI dilatada | AVM = 220/THP; planimetría; Gm | Wilkins → valvuloplastia percutánea si AVM ≤ 1,5 cm² · ESC valv. 2025 | diagram: plax/mv | ✅ casos-u4-l2 |
| ETT-07 | Amiloidosis cardiaca por TTR | N3 ★ | HVI con bajo voltaje ECG, strain con respeto apical, AI dilatada, derrame | Ratio voltaje/masa | Gammagrafía DPD/PYP + cadenas ligeras; tafamidis · ESC MC 2023 | diagram: psax/antsep | ✅ casos-u4-l3 |
| ETT-08 | Takotsubo frente a SCA | N2 | Balonamiento apical que excede un territorio, base hipercinética | FEVI | Coronariografía normal; IECA/BB; vigilar obstrucción TSVI | diagram: a4c/lv | ✅ casos-u4-l4 |
| ETT-09 | CIA ostium secundum en el adulto | N2 ★ | Dilatación AD/VD, aplanamiento septal diastólico, flujo I-D | Qp/Qs por VTI y diámetros | Cierre percutáneo si sobrecarga VD y RVP < 3 UW · ESC ACHD 2020 | diagram: a4c/septum | ✅ casos-u4-l5 |
| ETT-10 | Eco de estrés con dobutamina para isquemia | N2 | Nueva acinesia inducible inferior/inferoseptal | Índice de motilidad parietal | Coronariografía si isquemia extensa · ESC SCC 2024 | diagram: psax/inf | ✅ casos-u5-l3 |
| ETT-11 | EA grave sintomática de alto gradiente: TAVI vs SAVR | N2 ★ | Válvula calcificada, Vmax ≥ 4 m/s, Gm ≥ 40, HVI | AVA por continuidad; Bernoulli; índice adimensional < 0,25 | Sustitución valvular; Heart Team por edad/riesgo/anatomía · ESC valv. 2025 (umbral de edad: REVISAR) | pressure: as-lv-ao · diagram: plax/av | ✅ casos-u11-l1 |
| ETT-12 | EA paradójica (bajo flujo, FEVI conservada) | N3 | VI pequeño hipertrófico, VSi ≤ 35, Gm < 40, AVA < 1 | VSi; calcio valvular por TC (umbrales por sexo) | Confirmar gravedad con TC antes de intervenir · ESC valv. 2025 | diagram: plax/av | ✅ casos-u11-l2 |
| ETT-13 | Insuficiencia aórtica crónica grave asintomática | N2 ★ | Vena contracta > 6 mm, THP < 200 ms, reflujo holodiastólico en Ao descendente, VI dilatado | VR/FR; DTSVI indexado | Cirugía si síntomas, FEVI baja o DTSVI por encima del umbral (REVISAR ESC 2025) | nuevo: curva Ao en IAo · diagram: plax/av | ✅ casos-u11-l3 |
| ETT-14 | IM primaria por prolapso, asintomática | N2 ★ | Prolapso P2, jet excéntrico, AI dilatada | PISA: ORE = 2πr² × Va / Vmax; VR ≥ 60 ml | Reparación si FEVI ≤ 60 %, DTSVI ≥ 40 mm, FA o PSAP > 50 · ESC valv. 2025 | diagram: a4c/mv | ✅ casos-u11-l4 |
| ETT-15 | IM secundaria en MCD: ¿TEER? | N3 | Tethering, dilatación anular, jet central | ORE (umbral secundaria), VR | TMO + TRC primero; M-TEER si criterios tipo COAPT · ESC valv. 2025 | diagram: a4c/mv | ⬜ |
| ETT-16 | Insuficiencia tricuspídea grave funcional | N3 | Anillo dilatado, vena contracta ≥ 7 mm, flujo sistólico inverso en venas hepáticas | PSAP; ORE | Anuloplastia con cirugía izquierda; T-TEER en seleccionados · ESC valv. 2025 | diagram: a4c/tv | ✅ casos-u11-l5 |
| ETT-17 | Pericarditis constrictiva vs miocardiopatía restrictiva | N3 ★ | Rebote septal, variación respiratoria, e' medial conservada ("annulus reversus"), VCI dilatada | Variación E mitral; e' medial vs lateral | Pericardiectomía vs tratamiento de la causa · ESC peric. 2025 | pressure: rv-dip | ✅ casos-u8-l4 |
| ETT-18 | Miocarditis aguda | N2 | Hipocinesia segmentaria/global, derrame leve, troponina alta con coronarias normales | FEVI | RM (Lake Louise), reposo deportivo, biopsia si fulminante · ESC miocard. 2025 | diagram: a4c/lv | ⬜ |
| ETT-19 | Miocardiopatía arritmogénica del VD | N3 | VD dilatado con aneurismas/discinesia, TSVD dilatado | Fracción de cambio de área VD | DAI según riesgo, cese de deporte de competición · ESC MC 2023 | diagram: a4c/rv · nuevo: ECG épsilon | ✅ casos-u8-l5 |
| ETT-20 | CIV posinfarto | N2 ★ | Soplo nuevo, defecto septal con flujo I-D, VD sobrecargado | Qp/Qs; gradiente VI-VD | Soporte + cirugía/cierre percutáneo · ESC SCA 2023 | diagram: a4c/septum | ✅ casos-u6-l1 |
| ETT-21 | Rotura de músculo papilar | N2 ★ | Velo flail con cabeza papilar, IM masiva, VI hiperdinámico | — | Cirugía urgente; BCIA/soporte puente · ESC SCA 2023 | diagram: a4c/mv | ✅ casos-u6-l2 |
| ETT-22 | Trombo apical tras IAM anterior | N2 | Aneurisma/acinesia apical, masa ecodensa (contraste) | — | Anticoagulación 3–6 meses + antiagregación ajustada · ESC SCA 2023 | diagram: a4c/lv | ✅ casos-u12-l1 |
| ETT-23 | Pseudoaneurisma vs aneurisma del VI | N3 | Cuello estrecho (cuello/diámetro < 0,5), pared sin miocardio | Cociente cuello/diámetro | Pseudoaneurisma → cirugía | diagram: a4c/lv | ✅ casos-u6-l3 |
| ETT-24 | Probabilidad ecocardiográfica de hipertensión pulmonar | N2 ★ | Vmax IT > 2,8 m/s, VD/VI > 1, TAcc pulmonar < 105 ms, VCI dilatada | PSAP; TAPSE/PSAP | Derivar a cateterismo derecho si probabilidad intermedia-alta · ESC HP 2022 | diagram: a4c/rv | ✅ casos-u12-l2 |
| ETT-25 | Coartación de aorta en joven con HTA | N2 | Doppler de Ao descendente con "cola" diastólica, HVI, aorta bicúspide asociada | Gradiente pico/medio | Stent/cirugía si gradiente o HTA · ESC ACHD 2020 | diagram: plax/ao | ✅ casos-u7-l1 |
| ETT-26 | Aorta bicúspide y aortopatía | N2 | Rafe, apertura en "boca de pez", aorta ascendente dilatada | Diámetro indexado | Cirugía de aorta según diámetro y factores · ESC aorta 2024 | diagram: psax/ant · diagram: plax/ao | ✅ casos-u7-l4 |
| ETT-27 | Anomalía de Ebstein en el adulto | N3 | Desplazamiento apical del velo septal tricuspídeo (> 8 mm/m²), VD atrializado, IT | Índice de desplazamiento | Cirugía (cono) si síntomas; ablación de vía accesoria · ESC ACHD 2020 | diagram: a4c/tv · ecg: wpw | ✅ casos-u7-l2 |
| ETT-28 | Mixoma auricular izquierdo | N2 ★ | Masa pediculada en septo interauricular que prolapsa a VI, obstrucción mitral | Gm transmitral | Resección quirúrgica preferente | diagram: a4c/la | ✅ casos-u8-l1 |
| ETT-29 | Endocarditis sobre válvula nativa: del ETT a Duke | N2 ★ | Vegetación mitral, IM, hemocultivos positivos | Criterios Duke-ESC 2023 | ETE si ETT no concluyente o alta sospecha; antibióticos · ESC EI 2023 | diagram: plax/mv | ✅ casos-u12-l3 |
| ETT-30 | Estenosis mitral en gestante | N3 | Aumento del gradiente con la gestación, PSAP alta | Gm; AVM | BB, diuréticos; valvuloplastia si refractaria · ESC embarazo 2025 | diagram: plax/mv | ⬜ |
| ETT-31 | Miocardiopatía periparto | N2 | FEVI < 45 % al final del embarazo/puerperio, VI poco dilatado | FEVI | TMO compatible con lactancia; bromocriptina; anticoagulación · ESC embarazo 2025 | diagram: a4c/lv | ✅ casos-u8-l2 |
| ETT-32 | Cardiotoxicidad por antraciclinas/trastuzumab | N3 | Caída de FEVI y de GLS respecto a basal | ΔFEVI (≥ 10 puntos a < 50 %); ΔGLS relativo > 15 % | Cardioprotección (IECA/BB), decisión con oncología · ESC cardio-onc. 2022 | diagram: a4c/lv | ✅ casos-u8-l3 |
| ETT-33 | Shock indiferenciado en urgencias (POCUS) | N2 | VCI, función VI/VD, derrame, signos de sobrecarga | Colapsabilidad VCI | Orientar el tipo de shock (obstructivo/cardiogénico/hipovolémico) | diagram: a4c/rv | ✅ casos-u6-l6 |
| ETT-34 | Corazón de atleta vs MCH | N3 | HVI 13–15 mm (zona gris), cavidad dilatada, e' normal, regresión con desentrenamiento | Grosor/diámetro; e' | Desentrenamiento, RM, genética · ESC MC 2023 / deporte 2020 | diagram: plax/septum · ecg12: lvh | ⬜ |
| ETT-35 | MCD con BRI: indicación de TRC | N3 | FEVI ≤ 35 %, disincronía, IM funcional | FEVI; QRS ≥ 150 ms | TRC-D/P tras TMO · ESC marcapasos 2021 | ecg12: lbbb12 | ⬜ |
| ETT-36 | Sarcoidosis cardiaca con BAV en el joven | N3 | Adelgazamiento septal basal, alteraciones segmentarias no coronarias | — | PET/RM, inmunosupresión, marcapasos/DAI · ESC MC 2023 / MS 2022 | ecg: avb3 · diagram: psax/antsep | ⬜ |
| ETT-37 | Degeneración de bioprótesis aórtica: valve-in-valve | N3 | Velos engrosados, Gm creciente, índice adimensional bajo | Gm, AOE, índice adimensional | TAVI valve-in-valve vs reintervención · ESC valv. 2025 | pressure: as-lv-ao | ⬜ |
| ETT-38 | Insuficiencia aórtica aguda por disección | N3 | IAo aguda con VI no dilatado, cierre mitral precoz, flap en raíz | THP muy corto | Cirugía emergente · ESC aorta 2024 | diagram: plax/ao | ✅ casos-u6-l4 |
| ETT-39 | Taponamiento posquirúrgico localizado | N3 | Derrame/hematoma loculado tras cirugía cardiaca que comprime una sola cavidad; ETT puede ser insuficiente (ETE) | — | Reintervención/evacuación quirúrgica | diagram: a4c/ra | ✅ casos-u6-l5 |
| ETT-40 | Tetralogía de Fallot reparada en el adulto | N3 | IP grave, VD dilatado, QRS ancho | Volúmenes VD (RM), QRS | Reemplazo valvular pulmonar según volúmenes/síntomas · ESC ACHD 2020 | diagram: a4c/rv · ecg12: rbbb | ✅ casos-u7-l3 |
| ETT-41 | CIV restrictiva y deseo gestacional | N2 | Jet I-D de alta velocidad, VI no dilatado, PSAP normal | Gradiente VI-VD (4v²) → PSVD | Seguimiento; profilaxis según riesgo · ESC ACHD 2020 / embarazo 2025 | diagram: a4c/septum | ✅ casos-u7-l5 |

## 2. Ecocardiograma transesofágico (ETE) — 19

| ID | Tema | Nivel | Hallazgos clave | Cálculos | Decisión · guía | Visual | Estado |
|---|---|---|---|---|---|---|---|
| ETE-01 | Endocarditis sobre prótesis aórtica | N3 ★ | Vegetación/absceso protésico, dehiscencia | Duke-ESC 2023 | Cirugía si absceso/IC/embolia · ESC EI 2023 | diagram: plax/av | ✅ casos-u2-l1 |
| ETE-02 | Ictus criptogénico y FOP | N2 ★ | FOP con paso de burbujas, aneurisma del septo | RoPE/PASCAL | Cierre en < 60 años con FOP de alto riesgo | diagram: a4c/septum | ✅ casos-u2-l2 |
| ETE-03 | FA antes de la cardioversión | N2 ★ | Trombo en orejuela, autocontraste, velocidades bajas | CHA₂DS₂-VA | Anticoagular ≥ 3 sem y repetir ETE · ESC FA 2024 | ecg: afib | ✅ casos-u2-l3 |
| ETE-04 | IM grave por flail | N3 | Rotura de cuerdas, flail P2, jet excéntrico | PISA/ORE | Reparación quirúrgica · ESC valv. 2025 | diagram: a4c/mv | ✅ casos-u2-l4 |
| ETE-05 | Disección aórtica tipo A | N2 ★ | Flap en Ao ascendente, IAo, derrame | — | Cirugía emergente · ESC aorta 2024 | diagram: plax/ao | ✅ casos-u5-l1 |
| ETE-06 | Disfunción de prótesis mecánica mitral | N3 | Gm alto, disco inmóvil, trombo | Gm, THP | Fibrinólisis vs cirugía · ESC valv. 2025 | diagram: a4c/mv | ✅ casos-u5-l2 |
| ETE-07 | Endocarditis tricuspídea en UDVP | N2 | Vegetación tricuspídea grande, émbolos sépticos pulmonares | Duke | Antibióticos; cirugía si vegetación persistente/IT grave · ESC EI 2023 | diagram: a4c/tv | ✅ casos-u5-l4 |
| ETE-08 | Absceso perianular en endocarditis aórtica nativa | N3 ★ | Cavidad perivalvular, PR que se alarga, BAV nuevo | — | Cirugía urgente · ESC EI 2023 | ecg: avb1 · diagram: plax/av | ✅ casos-u12-l4 |
| ETE-09 | Endocarditis por S. aureus con vegetación > 10 mm y embolia | N3 | Vegetación mitral móvil, embolia cerebral/esplénica | Tamaño vegetación | Cirugía precoz para prevenir embolias · ESC EI 2023 | diagram: a4c/mv | ⬜ |
| ETE-10 | Anatomía mitral para reparación (festones) | N3 | Prolapso segmentario (A1–P3), vista quirúrgica 3D | — | Reparable vs sustitución | nuevo: mitral festones A1–P3 | ⬜ |
| ETE-11 | Cierre de orejuela izquierda guiado por ETE | N3 | Morfología de orejuela, ausencia de trombo, fuga peridispositivo | Diámetro de ostium, profundidad | FA con contraindicación a anticoagulación · ESC FA 2024 | ecg: afib · nuevo: planos ETE | ✅ casos-u12-l5 |
| ETE-12 | M-TEER guiado por ETE | N3 | Grasping, IM residual, gradiente transmitral post | Gm residual (< 5 mmHg) | Éxito vs segundo clip · ESC valv. 2025 | diagram: a4c/mv | ⬜ |
| ETE-13 | CIA tipo seno venoso con drenaje venoso anómalo | N3 | Defecto superior, venas pulmonares a VCS/AD | Qp/Qs | Cirugía (no cierre percutáneo) · ESC ACHD 2020 | diagram: a4c/septum | ⬜ |
| ETE-14 | Fuga paravalvular con hemólisis | N3 | Jet paravalvular, LDH alta, esquistocitos | Extensión circunferencial | Cierre percutáneo vs reintervención · ESC valv. 2025 | diagram: a4c/mv | ⬜ |
| ETE-15 | Hematoma intramural y úlcera penetrante | N3 | Engrosamiento parietal semilunar sin flap; úlcera en placa | Grosor parietal | Tipo A: cirugía; tipo B: médico/TEVAR · ESC aorta 2024 | nuevo: planos ETE | ⬜ |
| ETE-16 | SAM tras reparación mitral (ETE intraoperatorio) | N3 | SAM, obstrucción TSVI, IM | Gradiente TSVI | Volumen, BB, retirar inotropos; reintervenir si persiste | diagram: plax/mv | ⬜ |
| ETE-17 | Placa aórtica compleja como fuente embólica | N3 | Ateroma ≥ 4 mm o móvil en cayado | Grosor | Prevención secundaria intensiva | diagram: plax/ao | ⬜ |
| ETE-18 | Fibroelastoma papilar valvular | N3 | Masa pequeña, móvil, pediculada, con "flecos" | Tamaño | Cirugía si móvil/embolia | diagram: plax/av | ⬜ |
| ETE-19 | Endocarditis sobre cable de marcapasos | N3 | Vegetación en electrodo, bacteriemia persistente | Duke-ESC 2023 | Extracción completa del sistema · ESC EI 2023 | diagram: a4c/ra | ✅ casos-u8-l6 |

## 3. Cateterismo y hemodinámica — 35

| ID | Tema | Nivel | Hallazgos clave | Cálculos | Decisión · guía | Visual | Estado |
|---|---|---|---|---|---|---|---|
| CAT-01 | IAMCEST inferior con BAV | N2 ★ | Oclusión CD, BAV completo | Tiempos | ICP primaria; MP transitorio · ESC SCA 2023 | ecg12: stemi-inf · diagram: coronary/rca | ✅ casos-u3-l1 |
| CAT-02 | SCASEST multivaso y Heart Team | N2 ★ | Enfermedad de 3 vasos en diabético | SYNTAX | CRM vs ICP · ESC SCA 2023 / revasc. | diagram: coronary/lad | ✅ casos-u3-l2 |
| CAT-03 | Shock cardiogénico | N3 ★ | IAM anterior, IC bajo, PCP alta | IC, CPO, PAPi | ICP de la culpable; soporte mecánico · SCAI 2022 | pressure: pcwp | ✅ casos-u3-l3 |
| CAT-04 | Cateterismo derecho en disnea (HAP en esclerodermia) | N3 ★ | PAPm > 20, PCP ≤ 15, RVP > 2 UW | RVP = (PAPm − PCP)/GC | Tratamiento específico de HAP · ESC HP 2022 | pressure: pa | ✅ casos-u3-l4 |
| CAT-05 | IAMCEST anterior por DA proximal: ICP primaria | N2 ★ | Oclusión DA proximal, TIMI 0 → 3 | Tiempos diagnóstico-guía (≤ 90 min; ≤ 120 si traslado) | ICP primaria radial, DAPT, revasc. completa · ESC SCA 2023 | ecg12: stemi-ant · diagram: coronary/lad | ✅ casos-u13-l1 |
| CAT-06 | IAM sin elevación del ST por oclusión de circunfleja (OMI) | N3 | ECG anodino o descenso ST, dolor persistente, Cx ocluida | — | Coronariografía inmediata si dolor refractario/inestable · ESC SCA 2023 | ecg12: stemi-lat · diagram: coronary/cx | ⬜ |
| CAT-07 | IAM posterior (OM/Cx) | N3 | Descenso ST V1–V3 con R alta, elevación en V7–V9 | — | Tratar como IAMCEST · ESC SCA 2023 | diagram: coronary/om · nuevo: ecg12 IAM posterior | ⬜ |
| CAT-08 | Enfermedad del tronco común izquierdo | N3 ★ | Elevación de aVR + descenso difuso; estenosis de TCI | SYNTAX; IVUS (área luminal mínima) | ICP vs CRM por anatomía · ESC SCC 2024 / SCA 2023 | diagram: coronary/lm · nuevo: ecg12 aVR | ✅ casos-u13-l2 |
| CAT-09 | IAM de VD con hipotensión | N2 ★ | CD proximal, PAD alta con PCP normal, V4R | PAD/PCP > 0,8 | Volumen, evitar nitratos, ICP · ESC SCA 2023 | pressure: ra · ecg12: stemi-inf | ✅ casos-u13-l3 |
| CAT-10 | Lesión intermedia: FFR/iFR | N2 ★ | Estenosis 50–70 % en DA en angina estable | FFR = Pd/Pa en hiperemia (≤ 0,80); iFR ≤ 0,89 | ICP solo si fisiológicamente significativa · ESC SCC 2024 (FAME) | diagram: coronary/lad · nuevo: curva Pd/Pa | ✅ casos-u13-l4 |
| CAT-11 | ANOCA/INOCA: test de acetilcolina | N3 | Angina con coronarias sin estenosis; espasmo con acetilcolina; IMR alto | CFR, IMR | Calcioantagonistas/nitratos; manejo de disfunción microvascular · ESC SCC 2024 | diagram: coronary/lad | ⬜ |
| CAT-12 | Disección coronaria espontánea (SCAD) | N3 ★ | Mujer joven/puerperio, estrechamiento largo y liso (tipo 2), sin aterosclerosis | — | Manejo conservador; ICP solo si isquemia persistente · ESC SCA 2023 | diagram: coronary/lad | ✅ casos-u13-l5 |
| CAT-13 | Trombosis de stent | N3 | IAMCEST días tras ICP, suspensión de DAPT, stent infraexpandido | — | ICP + imagen intracoronaria; revisar adherencia · ESC SCA 2023 | ecg12: stemi-ant · diagram: coronary/lad | ✅ casos-u13-l6 |
| CAT-14 | Reestenosis intrastent | N3 | Angina recurrente meses después; hiperplasia neointimal | Pérdida luminal | Stent farmacoactivo o balón farmacoactivo, imagen intracoronaria · ESC revasc. | diagram: coronary/rca | ⬜ |
| CAT-15 | Perforación coronaria con taponamiento en sala | N3 | Extravasación de contraste, hipotensión, derrame | — | Balón prolongado, stent recubierto, pericardiocentesis, reversión | pressure: ra · diagram: a4c/ra | ⬜ |
| CAT-16 | No-reflow tras ICP primaria | N3 | TIMI 0–1 sin obstrucción mecánica, ST que no resuelve | Grado TIMI, blush | Vasodilatadores intracoronarios (adenosina/verapamilo) | diagram: coronary/lad | ⬜ |
| CAT-17 | Complicación de acceso: hematoma retroperitoneal/pseudoaneurisma femoral | N2 | Hipotensión y dolor lumbar tras acceso femoral; masa pulsátil | Hb seriada | TC, compresión ecoguiada/trombina; ventaja del acceso radial · ESC SCA 2023 | — (nuevo: esquema de accesos) | ✅ casos-u14-l1 |
| CAT-18 | Nefropatía por contraste en diabético con ERC | N2 | Creatinina que sube a las 48–72 h | Volumen de contraste/FG | Hidratación, mínimo contraste, retirar nefrotóxicos | — | ⬜ |
| CAT-19 | TAVI: estudio previo y BAV completo tras implante | N3 ★ | Anillo por TC, acceso femoral; BAV nuevo post-TAVI | Gm residual | Marcapasos definitivo si BAV persistente · ESC valv. 2025 / marcapasos 2021 | ecg: avb3 · pressure: as-lv-ao | ⬜ |
| CAT-20 | Valvuloplastia mitral percutánea | N3 | Gradiente VI-AI diastólico, onda y descendente lenta | Área por Gorlin; Wilkins | Valvuloplastia si anatomía favorable y sin trombo/IM > moderada | pressure: pcwp · nuevo: VI-AI en EM | ⬜ |
| CAT-21 | EA en sala: Gorlin y Hakki | N3 | Gradiente VI-Ao, retraso del pulso aórtico | Gorlin; Hakki ≈ GC/√ΔP | Concordancia con eco; Heart Team | pressure: as-lv-ao | ✅ casos-u14-l2 |
| CAT-22 | Constricción vs restricción en el cateterismo | N3 ★ | Dip-plateau, igualación diastólica; discordancia VI/VD con la respiración | Índice de área sistólica | Pericardiectomía si constricción · ESC peric. 2025 | pressure: rv-dip | ⬜ |
| CAT-23 | MCH: Brockenbrough y alcoholización septal | N3 | Aumento del gradiente y caída de la presión de pulso aórtica post-extrasístole | Gradiente VI-Ao | Alcoholización vs miectomía · ESC MC 2023 | nuevo: VI-Ao en MCH | ⬜ |
| CAT-24 | Salto oximétrico y Qp/Qs (shunt) | N2 ★ | Salto de saturación AD vs VCS | Qp/Qs = (SatAo − SatVM)/(SatVP − SatAP) | Cierre si Qp/Qs ≥ 1,5 y RVP aceptable · ESC ACHD 2020 | pressure: ra | ✅ casos-u14-l3 |
| CAT-25 | HP poscapilar por IC con FEVI conservada | N3 | PAPm > 20, PCP > 15, RVP ≤ 2 UW; onda v | RVP, GTP = PAPm − PCP | Tratar IC; no vasodilatadores pulmonares · ESC HP 2022 | pressure: pullback-pa-pcwp | ⬜ |
| CAT-26 | Test vasodilatador en HAP idiopática | N3 | Respuesta a NO inhalado | Respondedor: ↓PAPm ≥ 10 mmHg hasta ≤ 40 con GC estable | Calcioantagonistas a dosis altas si respondedor · ESC HP 2022 | pressure: pa | ⬜ |
| CAT-27 | HP tromboembólica crónica | N3 | Disnea persistente tras TEP, defectos V/Q, angiografía con bandas/oclusiones | RVP | Endarterectomía / angioplastia con balón / riociguat · ESC HP 2022 | pressure: pa | ⬜ |
| CAT-28 | Taponamiento con presiones invasivas | N2 | Igualación diastólica, pérdida del descenso y, pulso paradójico | PAD ≈ PDVD ≈ PCP | Pericardiocentesis | pressure: ra · nuevo: pulso paradójico | ⬜ |
| CAT-29 | IM aguda: onda v gigante en PCP | N2 ★ | Onda v prominente, edema agudo | Altura onda v vs PCP media | Cirugía/TEER según causa · ESC valv. 2025 | pressure: pcwp-v | ✅ casos-u14-l4 |
| CAT-30 | Escalada de soporte mecánico en shock (SCAI C → D) | N3 | Lactato que sube pese a inotropos, CPO < 0,6 W | CPO = PAM × GC / 451; PAPi | Impella (DanGer Shock) vs ECMO-VA (ECLS-SHOCK, sin beneficio rutinario) · SCAI 2022 | pressure: pcwp · nuevo: BCIA | ⬜ |
| CAT-31 | Oclusión total crónica con viabilidad | N3 | OTC de CD con colaterales; RM con viabilidad | J-CTO | ICP si angina refractaria pese a TMO · ESC SCC 2024 | diagram: coronary/rca | ⬜ |
| CAT-32 | Lesión en bifurcación (Medina 1,1,1) | N3 | DA-diagonal; estrategia provisional vs dos stents | — | Provisional por defecto; dos stents si rama grande enferma | diagram: coronary/diag · nuevo: bifurcación Medina | ⬜ |
| CAT-33 | IC avanzada: hemodinámica para trasplante/DAVI | N3 | IC < 2,2 l/min/m², RVP elevada | GC por Fick = VO₂/(CaO₂ − CvO₂); RVP; test vasodilatador | Indicación de trasplante/DAVI · ESC IC 2021 | pressure: pcwp | ⬜ |
| CAT-34 | Origen anómalo interarterial de coronaria en deportista | N3 | Síncope/MS en esfuerzo, trayecto entre Ao y AP | — | TC coronaria; cirugía si izquierda interarterial o isquemia · ESC ACHD 2020 | diagram: coronary/rca | ⬜ |
| CAT-35 | IAMCEST multivaso: revascularización completa vs solo culpable | N2 ★ | Lesiones no culpables significativas | — | Completa en estable (COMPLETE); en shock solo culpable (CULPRIT-SHOCK) · ESC SCA 2023 | diagram: coronary/cx | ⬜ |

## 4. ECG — 36

| ID | Tema | Nivel | Hallazgos clave | Cálculos | Decisión · guía | Visual | Estado |
|---|---|---|---|---|---|---|---|
| ECG-01 | FA de reciente diagnóstico | N2 ★ | Ritmo irregularmente irregular sin ondas P | CHA₂DS₂-VA; FC | Anticoagulación, control de frecuencia/ritmo (AF-CARE) · ESC FA 2024 | ecg: afib | ✅ casos-u9-l1 |
| ECG-02 | Flutter auricular típico 2:1 | N2 ★ | FC ≈ 150, ondas F en dientes de sierra en II, III, aVF | Frecuencia auricular/2 | Anticoagular como FA; ablación del istmo cavotricuspídeo | ecg: flutter | ⬜ |
| ECG-03 | TSV por reentrada intranodal | N1–N2 ★ | QRS estrecho regular 180 lpm, sin P visibles | — | Vagales → adenosina → (BB/calcioantagonista); ablación · ESC TSV 2019 | ecg: svt | ✅ casos-u9-l2 |
| ECG-04 | FA preexcitada (WPW) | N3 ★ | Taquicardia irregular de QRS ancho y variable, FC muy alta | RR preexcitado más corto | Evitar frenadores del NAV; cardioversión/procainamida o ibutilida; ablación · ESC TSV 2019 | ecg: wpw · nuevo: FA preexcitada | ✅ casos-u9-l3 |
| ECG-05 | Preexcitación asintomática | N2 | PR corto, onda delta, QRS ancho | PR | Estratificación (EEF) en ocupaciones de riesgo/deportistas · ESC TSV 2019 | ecg: wpw | ⬜ |
| ECG-06 | TV monomórfica en cardiopatía isquémica | N2 ★ | QRS ancho regular, disociación AV, capturas/fusiones | Criterios de Brugada/Vereckei | Inestable: CVE; estable: CVE/amiodarona; DAI · ESC MS 2022 | ecg: vt | ✅ casos-u9-l4 |
| ECG-07 | Torsade de pointes por QT largo adquirido | N2 ★ | QTc > 500 ms, TdP tras pausa, hipoK/hipoMg, fármacos | QTc (Bazett) = QT/√RR | Mg IV, retirar fármacos, corregir K, marcapasos/isoproterenol · ESC MS 2022 | ecg: longqt · nuevo: torsade | ✅ casos-u9-l5 |
| ECG-08 | QT largo congénito (LQT1) | N3 | Síncope nadando, QTc prolongado, T de base ancha | Puntuación de Schwartz | BB (nadolol/propranolol), evitar fármacos, DAI si recurrencia · ESC MS 2022 | ecg: longqt | ⬜ |
| ECG-09 | Brugada tipo 1 desenmascarado por fiebre | N3 | ST "en cúpula" ≥ 2 mm en V1–V2 con T negativa | — | Antitérmicos, evitar fármacos; DAI si síncope arrítmico · ESC MS 2022 | nuevo: ecg12 Brugada | ⬜ |
| ECG-10 | BAV completo con escape ancho | N2 ★ | Disociación AV, escape ventricular lento | FC auricular vs ventricular | Atropina (poco útil infrahisiano), isoproterenol, MP transcutáneo → definitivo · ESC marcapasos 2021 | ecg: avb3 | ✅ casos-u9-l6 |
| ECG-11 | Mobitz II en síncope | N2 ★ | P bloqueadas sin alargamiento previo del PR, QRS ancho | — | Marcapasos definitivo · ESC marcapasos 2021 | ecg: mobitz2 | ⬜ |
| ECG-12 | Wenckebach en IAM inferior o deportista | N1–N2 | Alargamiento progresivo del PR hasta P bloqueada | — | Habitualmente benigno (suprahisiano); observación | ecg: mobitz1 | ⬜ |
| ECG-13 | Enfermedad del nódulo sinusal (bradi-taqui) | N2 | Pausas tras FA paroxística, bradicardia sinusal | Duración de pausa | Marcapasos + anticoagulación según CHA₂DS₂-VA · ESC marcapasos 2021 | ecg: brady · nuevo: sinusPause | ⬜ |
| ECG-14 | Hiperpotasemia en ERC | N2 ★ | T picudas, P aplanada, QRS ancho → sinusoidal | — | Gluconato cálcico, insulina-glucosa, salbutamol, diálisis | ecg: hyperk | ✅ casos-u10-l1 |
| ECG-15 | Hipopotasemia | N2 | Ondas U, ST descendido, QT(U) largo | — | Reposición de K y Mg | nuevo: ondas U | ⬜ |
| ECG-16 | Pericarditis aguda vs IAMCEST | N2 ★ | ST cóncavo difuso, PR descendido, aVR inverso, sin imagen especular | — | AINE + colchicina; descartar SCA · ESC peric. 2025 | ecg12: pericarditis | ✅ casos-u10-l2 |
| ECG-17 | IAMCEST inferior con afectación de VD | N2 ★ | ST↑ III > II, descenso en I/aVL, ST↑ en V4R | — | ICP primaria; evitar nitratos · ESC SCA 2023 | ecg12: stemi-inf | ✅ casos-u10-l3 |
| ECG-18 | IAMCEST anterior extenso | N2 ★ | ST↑ V1–V6, I, aVL | — | ICP primaria · ESC SCA 2023 | ecg12: stemi-ant | ⬜ |
| ECG-19 | Patrón de Wellens | N3 ★ | T bifásicas o profundas en V2–V3 sin dolor, sin Q | — | Coronariografía precoz (estenosis crítica DA); evitar prueba de esfuerzo | nuevo: ecg12 Wellens | ⬜ |
| ECG-20 | Patrón de De Winter | N3 | Descenso ST ascendente en precordiales con T altas | — | Equivalente de IAMCEST → ICP primaria · ESC SCA 2023 | nuevo: ecg12 De Winter | ⬜ |
| ECG-21 | IAM con BRI: criterios de Sgarbossa | N3 ★ | ST concordante ≥ 1 mm; ST discordante desproporcionado | Smith: ST/S ≤ −0,25 | BRI + sospecha clínica de SCA → ICP primaria · ESC SCA 2023 | ecg12: lbbb12 | ✅ casos-u10-l4 |
| ECG-22 | Elevación de aVR con descenso difuso del ST | N3 | aVR↑ + descenso ST en ≥ 6 derivaciones | — | Isquemia subendocárdica difusa (TCI/3 vasos o causa no coronaria) | nuevo: ecg12 aVR | ⬜ |
| ECG-23 | Repolarización precoz vs IAMCEST | N2 | Muesca J, ST cóncavo, T altas proporcionadas, estable en el tiempo | — | Comparar con ECG previos; troponina | ecg12: normal | ⬜ |
| ECG-24 | TEP en el ECG | N2 ★ | Taquicardia sinusal, S1Q3T3, BRD, T negativas V1–V4 | — | Estratificación del TEP · ESC TEP 2019 | ecg: tachy · ecg12: rbbb | ⬜ |
| ECG-25 | HVI con sobrecarga sistólica | N1–N2 | Sokolow, Cornell, patrón de "strain" | Sokolow (S V1 + R V5/V6 ≥ 35 mm); Cornell | Buscar HTA/EA/MCH con eco | ecg12: lvh | ⬜ |
| ECG-26 | Bloqueo bifascicular con síncope | N3 | BRD + HBAI | Eje | EEF (HV ≥ 70 ms) o Holter implantable → marcapasos · ESC marcapasos 2021 | ecg12: rbbb · ecg12: lad | ⬜ |
| ECG-27 | Inversión de electrodos de brazos vs dextrocardia | N1 | I negativa, aVR positiva; precordiales normales (inversión) vs pérdida de R (dextrocardia) | — | Repetir ECG con electrodos correctos | nuevo: ecg12 inversión electrodos | ⬜ |
| ECG-28 | Hipotermia con ondas de Osborn | N2 | Ondas J, bradicardia, temblor de línea basal | — | Recalentamiento; manipulación cuidadosa (FV) · ERC 2025 | ecg: brady · nuevo: Osborn | ⬜ |
| ECG-29 | Intoxicación digitálica | N3 | ST en "cubeta", TA con bloqueo, TV bidireccional, hiperK | — | Anticuerpos antidigoxina, corregir K | nuevo: digoxina | ⬜ |
| ECG-30 | Intoxicación por antidepresivos tricíclicos | N3 | Taquicardia sinusal, QRS > 100 ms, R terminal en aVR | — | Bicarbonato sódico IV | ecg: tachy | ⬜ |
| ECG-31 | Parada cardiaca: ritmos desfibrilables y no desfibrilables | N1–N2 ★ | FV/TV sin pulso vs asistolia/AESP | — | Desfibrilación precoz, adrenalina, amiodarona · ERC 2025 | ecg: vf · ecg: asystole | ⬜ |
| ECG-32 | Disfunción de marcapasos | N3 | Espigas sin captura, fallo de detección | — | Interrogar, reprogramar/reposicionar electrodo | nuevo: pacedFailCapture | ⬜ |
| ECG-33 | Taquicardia auricular multifocal en EPOC | N2 | ≥ 3 morfologías de P, PR variable, ritmo irregular | — | Tratar la causa; evitar confundir con FA | nuevo: mat | ⬜ |
| ECG-34 | Extrasístoles ventriculares frecuentes y taquimiocardiopatía | N3 | EV del TSVD (BRI, eje inferior), carga > 10–15 % | Carga en Holter | BB/ablación; reevaluar FEVI · ESC MS 2022 | ecg: pvc · nuevo: bigeminy | ⬜ |
| ECG-35 | RIVA tras reperfusión | N2 | Ritmo ventricular 60–110 lpm tras ICP/fibrinólisis | — | Benigno; no antiarrítmicos | nuevo: aivr | ⬜ |
| ECG-36 | Síncope: ECG normal vs criterios de alto riesgo | N1–N2 ★ | ECG normal en síncope vasovagal; señales de alarma (BAV, QT, Brugada, preexcitación) | — | Estratificación y alta vs ingreso · ESC síncope 2018 | ecg12: normal · ecg: sinus | ⬜ |

## 5. Casos integrados (ECG + eco + cateterismo) — 13

| ID | Tema | Nivel | Hallazgos clave | Cálculos | Decisión · guía | Visual | Estado |
|---|---|---|---|---|---|---|---|
| INT-01 | Dolor torácico agudo: IAM vs disección vs TEP | N2 ★ | ECG, POCUS (derrame, VD, flap), TC | Probabilidad pretest | Ruta según diagnóstico · ESC SCA 2023 / aorta 2024 / TEP 2019 | ecg12: stemi-inf · diagram: plax/ao | ⬜ |
| INT-02 | Síncope de esfuerzo en anciano: EA grave + BAV | N2 ★ | HVI y BRI en ECG → EA grave en ETT → TAVI → BAV | AVA | TAVI + marcapasos · ESC valv. 2025 | ecg12: lvh · pressure: as-lv-ao | ⬜ |
| INT-03 | Taquimiocardiopatía por FA rápida | N3 | FA a 150 lpm, FEVI 30 %, recuperación tras control de ritmo | FEVI seriada | Control de ritmo/ablación · ESC FA 2024 | ecg: afib · diagram: a4c/lv | ⬜ |
| INT-04 | Muerte súbita recuperada en joven deportista | N3 ★ | Diagnóstico diferencial: MCH, MAVD, QT largo, Brugada, WPW, coronaria anómala | — | DAI en prevención secundaria; cribado familiar · ESC MS 2022 | ecg: vf · diagram: plax/septum | ⬜ |
| INT-05 | Fiebre, soplo nuevo y PR largo: endocarditis con absceso | N3 | ECG (BAV) → ETT → ETE → cirugía | Duke-ESC | Cirugía urgente · ESC EI 2023 | ecg: avb1 · diagram: plax/av | ⬜ |
| INT-06 | Edema agudo de pulmón hipertensivo con FEVI conservada | N2 ★ | FEVI ≥ 50 %, E/e' alta, AI dilatada | H₂FPEF; E/e' | Diuréticos, vasodilatadores, iSGLT2 · ESC IC 2021/23 | ecg12: lvh · diagram: a4c/la | ⬜ |
| INT-07 | Shock tras IAM: CIV vs rotura papilar vs fallo de VD | N3 ★ | ECG, ETT y Swan-Ganz (salto oximétrico vs onda v) | Qp/Qs; onda v | Cirugía/soporte según mecanismo · ESC SCA 2023 | pressure: pcwp-v · diagram: a4c/septum | ⬜ |
| INT-08 | Hipotensión tras implante de marcapasos: perforación y taponamiento | N2 | ECG (pérdida de captura), ETT (derrame), presiones | — | Pericardiocentesis, recolocar electrodo | diagram: a4c/rv · pressure: ra | ⬜ |
| INT-09 | HTA en joven por coartación | N3 | ECG con HVI, eco con gradiente en Ao descendente, gradiente invasivo | Gradiente pico a pico | Stent/cirugía · ESC ACHD 2020 | ecg12: lvh · diagram: plax/ao | ⬜ |
| INT-10 | Paciente oncológico con disnea: derrame maligno y cardiotoxicidad | N3 | ECG de bajo voltaje/alternancia, ETT con derrame y FEVI baja | ΔFEVI, GLS | Pericardiocentesis + cardioprotección · ESC cardio-onc. 2022 | diagram: a4c/ra | ⬜ |
| INT-11 | Síndrome de Eisenmenger | N3 | ECG con HVD, shunt bidireccional, RVP muy alta | RVP; Qp/Qs | Cierre contraindicado; tratamiento de HAP · ESC ACHD 2020 / HP 2022 | ecg12: rad · pressure: pa | ⬜ |
| INT-12 | MCH de principio a fin | N3 ★ | ECG (HVI, Q septales) → eco (SAM) → cate (Brockenbrough) → tratamiento | Gradiente TSVI | Mavacamten, miectomía o alcoholización; DAI · ESC MC 2023 | ecg12: lvh · diagram: plax/septum | ⬜ |
| INT-13 | FA + SCA que requiere ICP: antitrombóticos | N3 ★ | FA conocida con IAMSEST tratado con ICP | CHA₂DS₂-VA; riesgo hemorrágico | Triple terapia corta (≤ 1 semana) → doble (ACOD + clopidogrel) · ESC FA 2024 / SCA 2023 | ecg: afib · diagram: coronary/lad | ⬜ |

---

## Cómo usar este banco
1. Elegir ⬜ con ★ y visual existente (no bloquea a `dev-frontend`).
2. Crear o tomar una orden de `recursos/ordenes/` (lotes 11–13 ya tomados de aquí).
3. Al publicar un caso, cambiar ⬜ → ✅ con el id de lección (`casos-uN-lM`).
4. Antes de redactar, volver a comprobar con `grep -n "title:" js/data/casos.js` que el tema no se ha añadido en paralelo.
