// Guías de estudio por unidad (botón "Guía" antes de practicar).
// Formato: { '<unitId>': { intro, sections: [ { title, points: [...], tip? } ] } }
// Contenido alineado con las preguntas de cada unidad y con guías ESC/AHA/ASE vigentes.

export default {
  // ───────────────────────────── ECG ─────────────────────────────
  'ecg-u1': {
    intro: 'Antes de interpretar un ECG hay que dominar el papel, las ondas y las derivaciones.',
    sections: [
      {
        title: 'El papel del ECG',
        points: [
          'Velocidad estándar 25 mm/s: 1 cuadradito (1 mm) = 40 ms; 1 cuadrado grande (5 mm) = 200 ms.',
          'Calibración estándar: 10 mm = 1 mV.',
          'FC en ritmo regular ≈ 300 / nº de cuadrados grandes entre dos R: 300, 150, 100, 75, 60, 50.',
          'FC en ritmo irregular: cuenta los QRS de la tira de 10 s y multiplica por 6.',
        ],
        tip: 'Memoriza la serie "300-150-100-75-60-50" y ve contando cuadrados grandes desde una R.',
      },
      {
        title: 'Ondas e intervalos',
        points: [
          'P = despolarización auricular; QRS = despolarización ventricular; T = repolarización ventricular.',
          'La repolarización auricular (Ta) queda oculta dentro del QRS.',
          'PR normal 120–200 ms: < 120 ms sugiere preexcitación; > 200 ms, BAV de 1er grado.',
          'QRS ancho si ≥ 120 ms (3 cuadraditos): bloqueo de rama, origen ventricular, preexcitación o fármacos/iones.',
          'El QT se acorta al subir la FC, por eso se corrige (Bazett: QTc = QT / √RR en segundos).',
          'Ritmo sinusal: P antes de cada QRS, PR constante y normal, RR regular, FC 60–100 lpm.',
        ],
      },
      {
        title: 'Derivaciones y eje',
        points: [
          '12 derivaciones (6 de miembros + 6 precordiales) registradas con 10 electrodos.',
          'Caras: inferior II, III, aVF; septal V1–V2; anterior V3–V4; lateral I, aVL, V5–V6.',
          'Eje normal (0° a +90°): QRS positivo en I y en aVF.',
          'I positivo y II/aVF negativos → eje izquierdo (< −30°), típico del hemibloqueo anterior izquierdo.',
          'aVR es normalmente negativa: mira al corazón desde arriba a la derecha.',
        ],
        tip: 'Método de los cuadrantes: mira solo I y aVF; los dos positivos = eje normal.',
      },
    ],
  },

  'ecg-u2': {
    intro: 'Reconoce los ritmos que cambian el manejo: taquicardias, bloqueos y ritmos de parada.',
    sections: [
      {
        title: 'Ritmos supraventriculares',
        points: [
          'Fibrilación auricular: RR irregularmente irregular, sin ondas P, ondas f en la línea de base.',
          'Flutter auricular: ondas F "en dientes de sierra" a ~300/min (mejor en II, III, aVF y V1).',
          'Taquicardia regular a 150 lpm exactos → piensa en flutter 2:1.',
          'TSV (típicamente TRIN): regular, QRS estrecho, sin P visibles. Si está estable: maniobras vagales (Valsalva modificada) y, si fallan, adenosina IV.',
          'FA: riesgo de ictus con CHA₂DS₂-VA (ESC 2024, sin el sexo); anticoagular si ≥ 2 y considerarlo si 1.',
        ],
      },
      {
        title: 'Bloqueos AV',
        points: [
          '1er grado: PR > 200 ms fijo, todas las P conducen.',
          'Mobitz I (Wenckebach): el PR se alarga hasta que una P no conduce; suele ser nodal y benigno.',
          'Mobitz II: PR fijo y una P bloqueada de repente; suele ser infrahisiano.',
          '3er grado (completo): disociación AV, las P "marchan" independientes de un escape.',
          'Mobitz II y BAV completo progresan o son graves: indicación de marcapasos.',
        ],
        tip: 'Mobitz I = el PR "avisa" alargándose; Mobitz II = falla sin avisar (peor pronóstico).',
      },
      {
        title: 'Ritmos ventriculares y parada',
        points: [
          'Extrasístole ventricular: latido prematuro, ancho, sin P previa y con pausa compensadora.',
          'Taquicardia regular de QRS ancho = TV hasta que se demuestre lo contrario.',
          'Ritmos desfibrilables: FV y TV sin pulso. No desfibrilables: asistolia y AESP.',
          'TV con pulso e inestable → cardioversión eléctrica sincronizada; sin pulso → desfibrilación.',
          'Ante una línea plana, comprueba electrodos, conexiones y ganancia antes de confirmar asistolia.',
        ],
      },
    ],
  },

  'ecg-u3': {
    intro: 'Isquemia aguda y patrones que no se pueden pasar por alto en un ECG.',
    sections: [
      {
        title: 'Síndrome coronario agudo',
        points: [
          'IAMCEST: elevación del ST nueva en ≥ 2 derivaciones contiguas (≥ 1 mm; en V2–V3 umbrales mayores según sexo y edad).',
          'II, III, aVF → cara inferior: coronaria derecha (~80 %) o circunfleja. V1–V4 → descendente anterior.',
          'Descenso del ST: isquemia subendocárdica o imagen especular de una elevación.',
          'IAM inferior: registra V3R–V4R; ST elevado en V4R = infarto de VD → evita nitratos y asegura precarga.',
          'ICP primaria si el tiempo previsto diagnóstico–paso de la guía es ≤ 120 min; si no, fibrinólisis en < 10 min.',
        ],
        tip: 'En dolor torácico con ST elevado, primero activa el código infarto; las dudas se resuelven en la sala.',
      },
      {
        title: 'Patrones que no debes olvidar',
        points: [
          'Hiperpotasemia: T picudas, estrechas y simétricas (luego QRS ancho, P aplanadas).',
          'WPW: PR corto + onda delta (vía accesoria).',
          'BRI: QRS ancho y mellado con repolarización discordante.',
          'QT largo: el QT ocupa más de la mitad del RR; riesgo de torsade de pointes.',
          'Hipopotasemia: ondas U. Hipercalcemia: QT corto. Pericarditis: ST difuso + PR descendido. TEP: S1Q3T3.',
          'FA preexcitada: no uses verapamilo, digoxina ni betabloqueantes (favorecen la vía accesoria → FV); procainamida o cardioversión.',
        ],
      },
    ],
  },

  'ecg-u4': {
    intro: 'Lectura sistemática del ECG de 12 derivaciones: localizar el infarto, eje, hipertrofia y bloqueos de rama.',
    sections: [
      {
        title: 'Localiza el infarto',
        points: [
          'Inferior (II, III, aVF) con descenso especular en I y aVL.',
          'ST III > II y descenso en I/aVL → coronaria derecha; II ≥ III con ST elevado en I, aVL, V5–V6 → circunfleja.',
          'Anterior: V1–V4 (descendente anterior). Lateral: I, aVL, V5–V6 con imagen especular inferior.',
          'La imagen especular apoya el origen isquémico frente a pericarditis o repolarización precoz.',
          'Pericarditis: ST elevado difuso y cóncavo, PR descendido (elevado en aVR), sin territorio coronario.',
        ],
      },
      {
        title: 'Eje',
        points: [
          'Normal (0° a +90°): I y aVF positivos.',
          'Izquierdo (< −30°): I positivo, II y aVF negativos; causa típica: hemibloqueo anterior izquierdo.',
          'Derecho (> +90°): I negativo y aVF positivo (sobrecarga de VD, hemibloqueo posterior, TEP).',
        ],
        tip: 'Mira II para separar un eje izquierdo fisiológico (II positivo) de uno patológico (II negativo).',
      },
      {
        title: 'Hipertrofia y bloqueos de rama',
        points: [
          'HVI: Sokolow-Lyon (S V1 + R V5 o V6) ≥ 35 mm; Cornell (R aVL + S V3) > 28 mm en varones y > 20 mm en mujeres.',
          'Sobrecarga ("strain"): ST descendido y T negativa asimétrica en derivaciones laterales.',
          'BRD: QRS ≥ 120 ms, rSR′ en V1–V2 y S ancha y empastada en I y V6.',
          'BRI: QRS ≥ 120 ms, QS o rS en V1–V3, R ancha y mellada en I, aVL, V5–V6 y repolarización discordante.',
        ],
      },
    ],
  },

  // ───────────────────────────── ECO ─────────────────────────────
  'eco-u1': {
    intro: 'Ventanas, planos y modos de imagen: el vocabulario básico del ecocardiograma.',
    sections: [
      {
        title: 'Ventanas y planos',
        points: [
          'Paraesternal: 3er–4º espacio intercostal izquierdo. Apical: punta (latido apexiano). Subcostal: bajo el xifoides. Supraesternal: hueco supraesternal.',
          'Paraesternal eje largo: el VD es la cámara más cercana al transductor (arriba); debajo, septo, VI y AI.',
          'Paraesternal eje corto a nivel de papilares: segmentos medios del VI en "donut" → contractilidad segmentaria.',
          'Apical 4 cámaras: AD, AI, VD y VI a la vez, con las válvulas mitral y tricúspide.',
          'Subcostal: ventana de rescate en ventilados, EPOC y parada cardiaca.',
        ],
      },
      {
        title: 'Modos de imagen y Doppler',
        points: [
          'Modo M: medidas lineales y tiempos (alta resolución temporal).',
          'Doppler color: flujos y regurgitaciones. BART: Blue Away, Red Towards.',
          'Doppler pulsado: velocidad en un punto concreto, limitado por el límite de Nyquist (aliasing).',
          'Doppler continuo: velocidades altas (estenosis, IT) sin aliasing, pero sin localizar el punto.',
          'Bernoulli simplificado: ΔP (mmHg) = 4 × V² (V en m/s).',
          'Doppler tisular (e′ del anillo mitral): función diastólica; E/e′ estima presiones de llenado.',
        ],
        tip: 'Si la velocidad es alta (> 2 m/s), cambia a Doppler continuo.',
      },
    ],
  },

  'eco-u2': {
    intro: 'Cuantifica la función del VI y del VD y estima presiones con Doppler.',
    sections: [
      {
        title: 'Ventrículo izquierdo',
        points: [
          'FEVI normal ≥ 50–55 %. IC-FEr ≤ 40 %; IC-FElr 41–49 %; IC-FEp ≥ 50 %.',
          'Método recomendado: Simpson biplano (discos) en apical 4C y 2C; Teichholz falla con alteraciones segmentarias.',
          'Strain longitudinal global (GLS): detecta disfunción subclínica; caída relativa > 15 % sugiere cardiotoxicidad.',
          'Territorios: DA → septo anterior, cara anterior y ápex; Cx → lateral; CD → inferior y septo inferior.',
        ],
      },
      {
        title: 'Ventrículo derecho y presiones',
        points: [
          'TAPSE < 17 mm = disfunción sistólica del VD.',
          'PSAP = 4 × V(IT)² + PAD. Ejemplo: 4 × 3,5² + 10 = 59 mmHg.',
          'PAD por la VCI: < 21 mm y colapso > 50 % → ~3 mmHg; > 21 mm sin colapso → ~15 mmHg; intermedio → ~8 mmHg.',
          'Septo aplanado en "D" en eje corto = sobrecarga del VD (de presión en sístole, de volumen en diástole).',
          'Signo de McConnell (acinesia de la pared libre del VD con ápex conservado): específico pero poco sensible de TEP agudo.',
        ],
        tip: 'Error típico en la PSAP: olvidar sumar la PAD a 4V².',
      },
    ],
  },

  'eco-u3': {
    intro: 'Criterios de gravedad de las valvulopatías y diagnóstico ecográfico de las urgencias pericárdicas.',
    sections: [
      {
        title: 'Estenosis aórtica',
        points: [
          'EA grave: Vmax ≥ 4 m/s, gradiente medio ≥ 40 mmHg, AVA < 1 cm² (< 0,6 cm²/m²).',
          'Ecuación de continuidad (el flujo se conserva): AVA = área TSVI × VTI TSVI / VTI aórtico.',
          'Desconfía de la discordancia área-gradiente: puede ser EA grave de bajo flujo/bajo gradiente.',
          'Válvula bicúspide: causa típica de EA en jóvenes.',
          'Tratamiento de la EA grave sintomática: TAVI orientativa en ≥ 70 años o riesgo alto; cirugía en más jóvenes y bajo riesgo (ESC/EACTS 2025, decisión del Heart Team).',
        ],
      },
      {
        title: 'Insuficiencias y estenosis mitral',
        points: [
          'IM grave: vena contracta ≥ 7 mm, EROA ≥ 40 mm² (primaria), volumen regurgitante ≥ 60 ml, inversión sistólica en venas pulmonares.',
          'IA grave: vena contracta > 6 mm y flujo diastólico invertido holodiastólico en aorta descendente.',
          'Prolapso o flail de un velo → IM primaria.',
          'Estenosis mitral: causa más frecuente en el mundo la fiebre reumática; fusión comisural, "palo de hockey" en eje largo y "boca de pez" en eje corto.',
        ],
      },
      {
        title: 'Pericardio y urgencias',
        points: [
          'Taponamiento: colapso diastólico de AD/VD, VCI pletórica y variación respiratoria del flujo mitral > 25 %.',
          'El taponamiento depende de la velocidad de acumulación, no solo del tamaño del derrame.',
          'FoCUS en parada: adquirir en subcostal durante la pausa de comprobación de pulso (< 10 s), grabando un clip.',
          'Patrones de shock: VD dilatado + McConnell → TEP; derrame + colapso → taponamiento; VI pequeño hiperdinámico + VCI colapsada → hipovolemia; flap intimal → disección.',
        ],
      },
    ],
  },

  'eco-u4': {
    intro: 'Fenotipos ecocardiográficos de las miocardiopatías (ESC 2023).',
    sections: [
      {
        title: 'Miocardiopatía hipertrófica',
        points: [
          'Diagnóstico en adultos: grosor ≥ 15 mm en cualquier segmento no explicado por carga; ≥ 13 mm si hay un familiar de primer grado afectado.',
          'SAM mitral: obstrucción del TSVI e IM de chorro dirigido a la pared posterior de la AI.',
          'Obstrucción: gradiente ≥ 30 mmHg; ≥ 50 mmHg es hemodinámicamente relevante (umbral para reducción septal si hay síntomas).',
          'Si el gradiente en reposo es < 50 mmHg y hay síntomas, provocarlo (Valsalva, bipedestación, eco de esfuerzo).',
          'Doppler continuo del TSVI "en daga" con pico telesistólico (la EA valvular tiene pico más precoz y redondeado).',
        ],
        tip: 'Lo que hace pequeño al VI (menos precarga o poscarga, más contractilidad) aumenta el gradiente: Valsalva y nitratos lo suben; betabloqueante y fenilefrina lo bajan.',
      },
      {
        title: 'Dilatada, restrictiva y otras',
        points: [
          'MCD: dilatación y disfunción sistólica del VI no explicadas por carga anómala ni enfermedad coronaria.',
          'Amiloidosis: hipertrofia en el eco con bajos voltajes en el ECG, miocardio "moteado", septo interauricular engrosado y strain con "apical sparing".',
          'Constricción vs restricción: e′ medial conservada (≥ 8 cm/s) y "annulus reversus" apoyan constricción.',
          'Tako-tsubo: acinesia apical con hipercinesia basal que excede un territorio coronario, típica tras estrés; obliga a coronariografía.',
          'Displasia arritmogénica del VD: aneurismas y acinesia regional del VD.',
        ],
      },
    ],
  },

  'eco-u5': {
    intro: 'Función diastólica (ASE/EACVI) y ecocardioscopia focalizada a pie de cama.',
    sections: [
      {
        title: 'Función diastólica con FEVI normal',
        points: [
          'Cuatro criterios: e′ septal < 7 cm/s o lateral < 10 cm/s; E/e′ medio > 14; volumen AI indexado > 34 ml/m²; velocidad de IT > 2,8 m/s.',
          'Más de la mitad positivos = disfunción diastólica; la mitad = indeterminado; menos de la mitad = normal.',
          'La actualización ASE 2025 simplifica el algoritmo y ajusta los cortes de e′ por edad.',
        ],
      },
      {
        title: 'Patrones de llenado mitral',
        points: [
          'Grado I (relajación alterada): E/A ≤ 0,8 y E ≤ 50 cm/s → presión de AI normal o baja.',
          'Grado II (pseudonormal): E/A aparentemente normal; con Valsalva E/A cae ≥ 50 %.',
          'Grado III (restrictivo): E/A ≥ 2 con TDE corto → presiones de llenado elevadas y peor pronóstico.',
          'En FA no hay onda A: usa E/e′ promediado, TDE y velocidad de IT.',
        ],
        tip: 'Valsalva reduce la precarga y "desenmascara" el patrón pseudonormal.',
      },
      {
        title: 'POCUS cardiaco (FoCUS)',
        points: [
          'Responde preguntas binarias (¿derrame?, ¿VD dilatado?, ¿VI muy deprimido?, ¿VCI?) y no sustituye a un eco reglado.',
          'Ventanas: derrame en parada → subcostal; VD/VI → apical 4C; VCI → subcostal eje largo; contractilidad global → paraesternal eje corto.',
          'VD/VI > 1 en apical 4C = dilatación significativa del VD (normal < 2/3).',
          'EPSS > 7 mm sugiere FEVI reducida.',
          'VI hiperdinámico "vacío" + VCI pequeña colapsada → hipovolemia o shock distributivo; en taponamiento y TEP la VCI está pletórica.',
        ],
      },
    ],
  },

  // ───────────────────────────── CATETERISMO ─────────────────────────────
  'cate-u1': {
    intro: 'Anatomía coronaria, dominancia y cómo se mira en la angiografía.',
    sections: [
      {
        title: 'Árbol coronario',
        points: [
          'Tronco común izquierdo → DA (diagonales y septales) y circunfleja (marginales obtusas).',
          'Coronaria derecha: marginal aguda, y en dominancia derecha descendente posterior.',
          'La dominancia la define quién da la descendente posterior: ~85 % derecha, ~8 % izquierda, resto codominancia.',
          'Septales de la DA: 2/3 anteriores del septo; DP: 1/3 inferior.',
          'El nodo AV suele depender de la CD → bradicardia y BAV en el IAM inferior.',
        ],
      },
      {
        title: 'Angiografía',
        points: [
          'Estenosis significativa: ≥ 50 % en tronco común; ≥ 70 % en el resto de vasos epicárdicos.',
          'La nomenclatura (OAI/OAD) indica la posición del intensificador respecto al paciente.',
          'Proyecciones: OAI craneal → DA media y diagonales; OAD caudal → Cx y marginales; OAI caudal ("araña") → tronco y bifurcación; OAI 30–45° → CD.',
          'Valora cada lesión en al menos dos proyecciones ortogonales.',
          'Flujo TIMI: 0 sin flujo; 1 pasa sin opacificar el lecho distal; 2 llenado completo pero lento; 3 normal.',
        ],
      },
    ],
  },

  'cate-u2': {
    intro: 'Accesos, fisiología coronaria invasiva y decisiones clave en la ICP.',
    sections: [
      {
        title: 'Accesos vasculares',
        points: [
          'Radial de elección (sobre todo en SCA): menos sangrado y menos mortalidad que el femoral.',
          'Femoral: punción sobre la cabeza femoral, por debajo del ligamento inguinal.',
          'Punción alta → hematoma retroperitoneal; baja → pseudoaneurisma o fístula AV.',
          'Prevención de la oclusión radial: heparina (≈ 5000 UI) y hemostasia "permeable".',
          'El test de Allen ya no es obligatorio: no predice isquemia de la mano.',
        ],
      },
      {
        title: 'Fisiología, imagen y tratamiento',
        points: [
          'FFR = Pd/Pa en hiperemia (adenosina); ≤ 0,80 = lesión funcionalmente significativa.',
          'iFR/RFR sin fármaco (periodo libre de ondas en diástole); significativo ≤ 0,89.',
          'IVUS y OCT: tamaño del vaso y optimización del stent (expansión, aposición, disección de bordes).',
          'Tras stent farmacoactivo en SCA: doble antiagregación 12 meses por defecto, ajustable al riesgo hemorrágico.',
          'Complicaciones de la ICP: perforación con taponamiento, disección, no-reflow, trombosis aguda del stent.',
        ],
        tip: 'FFR 0,80 vs iFR 0,89: el índice sin hiperemia tiene el umbral más alto.',
      },
    ],
  },

  'cate-u3': {
    intro: 'Presiones normales, cálculos hemodinámicos y morfología de las curvas.',
    sections: [
      {
        title: 'Cateterismo derecho',
        points: [
          'Presiones normales: AD media 2–6; VD sistólica 15–30; AP media 10–20; PCP 6–12 mmHg.',
          'Hipertensión pulmonar (ESC/ERS 2022): PAPm > 20 mmHg. Precapilar: PCP ≤ 15 y RVP > 2 UW; postcapilar: PCP > 15.',
          'La PCP estima la presión de la AI y, sin estenosis mitral, la telediastólica del VI.',
          'RVP = (PAPm − PCP) / GC, en unidades Wood (normal ≤ 2 UW).',
          'Fick: GC = VO₂ / (CaO₂ − CvO₂). Alternativa: termodilución.',
        ],
      },
      {
        title: 'Curvas de presión',
        points: [
          'Onda a = contracción auricular; v = llenado auricular con la válvula AV cerrada; x = relajación auricular; y = apertura de la válvula AV.',
          'Sin onda a: fibrilación auricular.',
          'Ondas a "en cañón": aurícula que se contrae contra la tricúspide cerrada (disociación AV, BAV completo).',
          'Ondas v gigantes en la PCP: insuficiencia mitral grave (también CIV aguda o AI rígida).',
          'Dip-plateau ("raíz cuadrada"): constricción o restricción.',
        ],
      },
    ],
  },

  'cate-u4': {
    intro: 'Identifica curvas y arterias en imagen como si estuvieras en la sala.',
    sections: [
      {
        title: 'Reconoce la curva',
        points: [
          'Aorta: ≈ 120/80 con incisura dícrota; la diastólica se mantiene alta.',
          'VI: sistólica ≈ 120, diastólica cae casi a 0 y sube hasta una telediastólica ≈ 10 mmHg.',
          'VD (≈ 25/0–8): diastólica que asciende; AP: misma sistólica pero diastólica más alta (≈ 10) que desciende y con incisura.',
          'AD: onda a tras la P del ECG; c al inicio del QRS; v al final de la T.',
          'PCP normal 6–12 mmHg y siempre ≤ diastólica de la AP; si la supera, sospecha sobreenclavamiento.',
        ],
        tip: 'VD frente a AP: mira la diastólica; si sube es ventrículo, si baja es arteria.',
      },
      {
        title: 'Curvas patológicas',
        points: [
          'IM aguda (rotura de papilar posteromedial en IAM inferior): ondas v gigantes en la PCP.',
          'Ondas v gigantes no son patognomónicas: CIV aguda, AI rígida; y pueden faltar en IM crónica con AI dilatada.',
          'Constricción: dip-plateau, telediastólica > 1/3 de la sistólica, igualación de presiones diastólicas y discordancia VI/VD con la respiración.',
          'EA grave: gradiente VI–Ao con aorta parvus et tardus; gradiente medio ≥ 40 mmHg.',
          'El gradiente pico a pico (no simultáneo) es menor que el pico instantáneo del Doppler.',
          'Gradiente diastólico AP–PCP > 7 mmHg sugiere enfermedad vascular pulmonar.',
        ],
      },
      {
        title: 'Anatomía coronaria en imagen',
        points: [
          'DA: surco interventricular anterior hacia el ápex; da diagonales y septales.',
          'Cx: surco AV izquierdo; da las marginales obtusas (pared lateral: I, aVL, V5–V6 o posteriores).',
          'CD: nace del seno derecho y recorre el surco AV derecho hasta la cruz del corazón.',
          'Tronco común: del seno izquierdo, bifurca en DA y Cx; estenosis ≥ 50 % significativa.',
          'Descendente posterior: cara inferior y tercio inferior del septo; su origen define la dominancia.',
        ],
      },
    ],
  },

  // ───────────────────────────── CASOS ─────────────────────────────
  'casos-u1': {
    intro: 'Casos con ETT: insuficiencia cardiaca, estenosis aórtica de bajo flujo, taponamiento y MCH.',
    sections: [
      {
        title: 'IC con FEVI reducida',
        points: [
          'Sospecha de IC con NT-proBNP elevado → ETT como prueba de imagen inicial (clase I).',
          'FEVI ≤ 40 % = IC-FEr; E/A ≥ 2, TDE corto y E/e′ > 14 = presiones de llenado elevadas.',
          'PSAP = 4 × V(IT)² + PAD (p. ej., 4 × 3,2² + 15 ≈ 56 mmHg).',
          'Cuatro pilares clase I: ARNI (o IECA), betabloqueante, antagonista mineralocorticoide e iSGLT2.',
          'TRC clase I: FEVI ≤ 35 %, ritmo sinusal, BRI con QRS ≥ 150 ms pese a tratamiento óptimo.',
        ],
      },
      {
        title: 'Estenosis aórtica de bajo flujo',
        points: [
          'Gravedad clínica: pulso parvus et tardus y 2R débil (el soplo puede disminuir si cae el flujo).',
          'AVA = π × (D TSVI/2)² × VTI TSVI / VTI Ao. Bajo flujo: VS indexado ≤ 35 ml/m².',
          'Bajo flujo-bajo gradiente clásico: AVA < 1 cm², gradiente medio < 40 mmHg y FEVI < 50 %.',
          'Eco con dobutamina a dosis bajas: gradiente ≥ 40 mmHg con AVA ≤ 1 cm² = grave verdadera; AVA > 1 cm² = pseudograve; aumento del VS ≥ 20 % = reserva contráctil.',
          'Sin reserva contráctil: TC con score de calcio valvular. TAVI transfemoral orientativa en ≥ 70 años (ESC/EACTS 2025).',
        ],
      },
      {
        title: 'Taponamiento cardiaco',
        points: [
          'Tríada de Beck: hipotensión, ingurgitación yugular y tonos apagados; además pulso paradójico > 10 mmHg y alternancia eléctrica.',
          'Colapso de AD: precoz y sensible; colapso diastólico del VD: más específico.',
          'Variación respiratoria del flujo mitral > 25–30 % y tricuspídeo > 40 %; VCI pletórica.',
          'Tratamiento: pericardiocentesis urgente guiada por eco; evita diuréticos y vasodilatadores.',
          'La ventilación con presión positiva reduce el retorno venoso y puede precipitar el colapso.',
        ],
      },
      {
        title: 'MCH obstructiva',
        points: [
          'Soplo que aumenta con Valsalva y en bipedestación → MCH obstructiva.',
          'Gradiente TSVI = 4V² (4,5 m/s → 81 mmHg), curva "en daga".',
          'Evita nitratos, vasodilatadores y digoxina. Primera línea: betabloqueante no vasodilatador; alternativa verapamilo; mavacamten (inhibidor de la miosina).',
          'Reducción septal (miectomía o alcoholización) si gradiente ≥ 50 mmHg y síntomas pese a tratamiento médico.',
          'Estratifica muerte súbita (HCM Risk-SCD; DAI IIa si ≥ 6 %) y cribado de familiares de primer grado (ECG, eco, genética).',
        ],
      },
    ],
  },

  'casos-u2': {
    intro: 'Casos con ETE: endocarditis protésica, FOP, FA antes de cardioversión e IM por flail.',
    sections: [
      {
        title: 'Endocarditis protésica',
        points: [
          'ETE (clase I, ESC 2023) en toda sospecha de endocarditis protésica y si el ETT es negativo o no diagnóstico.',
          'PR que se alarga o BAV nuevo en endocarditis aórtica → absceso perivalvular hacia el sistema de conducción.',
          'Absceso: zona perivalvular engrosada sin flujo; pseudoaneurisma: cavidad que comunica con la luz y se llena con color.',
          'Infección localmente no controlada (absceso, pseudoaneurisma, fístula) → cirugía urgente (3–5 días).',
          'Contraindicaciones absolutas del ETE: estenosis, perforación, divertículo o tumor esofágico, cirugía esofágica reciente; las varices son relativas.',
        ],
      },
      {
        title: 'Ictus criptogénico y FOP',
        points: [
          'ETE con suero salino agitado y Valsalva; el plano bicava (~90–110°) es el mejor para el septo interauricular.',
          'Burbujas en AI en ≤ 3 latidos → shunt intracardiaco; tras 3–5 latidos → shunt intrapulmonar.',
          'Alto riesgo: shunt grande (> 20–30 burbujas) y aneurisma del septo (excursión ≥ 10 mm).',
          'Escala RoPE alta = probable relación causal del FOP.',
          'Cierre percutáneo + antiagregación en 18–60 años con ictus embólico y FOP de alto riesgo.',
        ],
      },
      {
        title: 'FA y cardioversión',
        points: [
          'CHA₂DS₂-VA (ESC 2024): C IC, H HTA, A₂ edad ≥ 75 (2), D diabetes, S₂ ictus/AIT/embolia (2), V enfermedad vascular, A edad 65–74.',
          'Anticoagulación recomendada si ≥ 2 y a considerar si 1.',
          'FA > 24 h sin anticoagulación: anticoagular ≥ 3 semanas o ETE que descarte trombo antes de cardiovertir; después, ≥ 4 semanas.',
          'Velocidad de vaciado de orejuela < 20 cm/s y ecocontraste denso = estasis; los músculos pectíneos pueden simular trombo.',
          'Trombo en orejuela: no cardiovertir; anticoagular, controlar FC y repetir ETE en 3–4 semanas.',
        ],
        tip: 'Umbral europeo 24 h (ESC 2024); la AHA/ACC 2023 mantiene 48 h.',
      },
      {
        title: 'IM por flail',
        points: [
          'ETE (idealmente 3D) para definir mecanismo y anatomía: festón afectado, flail gap y width, calcificación.',
          'Carpentier tipo II (movilidad excesiva): el chorro excéntrico va hacia el lado opuesto del velo afectado.',
          'PISA: EROA = 2πr² × Va / Vmax.',
          'IM primaria grave: EROA ≥ 0,40 cm², volumen regurgitante ≥ 60 ml, vena contracta ≥ 7 mm, inversión sistólica en venas pulmonares.',
          'Sintomática y operable → reparación quirúrgica (clase I); riesgo alto o prohibitivo con anatomía favorable → TEER (IIa, ESC/EACTS 2025).',
        ],
      },
    ],
  },

  'casos-u3': {
    intro: 'Casos de hemodinámica: IAMCEST, SCASEST multivaso, shock cardiogénico e hipertensión pulmonar.',
    sections: [
      {
        title: 'IAMCEST inferior',
        points: [
          'ST en II, III, aVF con III > II y descenso en I/aVL → coronaria derecha.',
          'BAV completo en IAM inferior: suele ser suprahisiano y transitorio; atropina y, si falla, marcapasos transitorio sin retrasar la reperfusión.',
          'Infarto de VD (ST elevado en V4R): sin nitratos ni diuréticos; volumen con cautela.',
          'ICP primaria si ≤ 120 min hasta el paso de la guía; acceso radial y stent farmacoactivo (clase I).',
          'Al alta: DAPT 12 meses (AAS + prasugrel/ticagrelor), estatina de alta intensidad (cLDL < 55 mg/dl y −50 %), rehabilitación cardiaca.',
        ],
      },
      {
        title: 'SCASEST multivaso',
        points: [
          'Descenso difuso del ST con elevación en aVR: isquemia global (tronco o tres vasos).',
          'Invasiva inmediata (< 2 h) si muy alto riesgo; precoz (< 24 h) si alto riesgo (p. ej., GRACE > 140, troponina dinámica).',
          'No pretratar de rutina con P2Y12; antes de cirugía suspender ticagrelor 3, clopidogrel 5 y prasugrel 7 días.',
          'SYNTAX ≤ 22 bajo, 23–32 intermedio, ≥ 33 alto; tronco + multivaso con SYNTAX alto y diabetes → CABG.',
          'Lesión intermedia: FFR ≤ 0,80 o iFR ≤ 0,89 = significativa.',
        ],
      },
      {
        title: 'Shock cardiogénico',
        points: [
          'ICP inmediata solo de la arteria culpable (CULPRIT-SHOCK); el resto, diferida.',
          'Índice cardiaco = GC / SC; < 2,2 l/min/m² con PCP > 15 mmHg = perfil "frío y húmedo".',
          'Potencia cardiaca CPO = PAM × GC / 451; < 0,6 W predice mortalidad.',
          'BCIA de rutina clase III (IABP-SHOCK II); Impella CP en IAMCEST seleccionado (DanGer Shock), con más sangrado e isquemia de miembro.',
          'ECMO-VA aumenta la poscarga del VI y puede requerir descarga (p. ej., Impella).',
        ],
        tip: 'PAM = (PAS + 2 × PAD) / 3.',
      },
      {
        title: 'Hipertensión pulmonar',
        points: [
          'Eco: probabilidad alta si Vmax IT > 3,4 m/s; el diagnóstico exige cateterismo derecho.',
          'HP: PAPm > 20 mmHg. Precapilar: PCP ≤ 15 y RVP > 2 UW. Postcapilar aislada: PCP > 15 y RVP ≤ 2; combinada: PCP > 15 y RVP > 2.',
          'RVP = (PAPm − PCP) / GC; 1 UW ≈ 80 dyn·s·cm⁻⁵.',
          'Descarta TEP crónico con gammagrafía V/Q.',
          'HAP de riesgo bajo-intermedio: doble terapia oral inicial (antagonista de endotelina + inhibidor de PDE5); test vasodilatador solo en HAP idiopática, hereditaria o por fármacos.',
        ],
      },
    ],
  },

  'casos-u4': {
    intro: 'Más casos de ETT: TEP, estenosis mitral, amiloidosis TTR, tako-tsubo y comunicación interauricular.',
    sections: [
      {
        title: 'TEP agudo',
        points: [
          'Sobrecarga aguda del VD: VD/VI > 1, septo en "D", TAPSE < 17 mm y signo de McConnell.',
          'Signo 60/60: tiempo de aceleración pulmonar < 60 ms con gradiente de IT < 60 mmHg (VD no hipertrofiado, sobrecarga aguda).',
          'La PSAP en el TEP agudo rara vez supera 60 mmHg: si es mucho mayor, sugiere HP crónica.',
          'Riesgo (ESC 2019): alto = inestabilidad hemodinámica; intermedio-alto = disfunción del VD + troponina elevada.',
          'TEP de alto riesgo → fibrinólisis sistémica; si está contraindicada o falla, trombectomía quirúrgica o percutánea.',
        ],
        tip: 'Un paciente inestable con VD dilatado en el eco y sospecha de TEP puede recibir reperfusión sin esperar al TC.',
      },
      {
        title: 'Estenosis mitral reumática',
        points: [
          'Fusión comisural, "palo de hockey" en eje largo y "boca de pez" en eje corto; AI dilatada y riesgo de FA.',
          'Clínicamente significativa: área ≤ 1,5 cm² (planimetría 2D/3D de referencia; también 220 / PHT).',
          'El gradiente medio depende de la FC y del flujo: mídelo indicando la frecuencia.',
          'Score de Wilkins ≤ 8 sin IM significativa ni trombo en AI → valvuloplastia mitral percutánea.',
          'EM moderada-grave con FA: anticoagulación con AVK (los ACOD no están indicados).',
        ],
      },
      {
        title: 'Amiloidosis TTR y tako-tsubo',
        points: [
          'Amiloidosis: hipertrofia con bajos voltajes, "apical sparing" en el strain, septo interauricular engrosado y derrame.',
          'Diagnóstico no invasivo de ATTR: gammagrafía ósea (DPD/PYP/HMDP) grado 2–3 sin componente monoclonal en sangre y orina.',
          'Si hay componente monoclonal, descartar amiloidosis AL (biopsia); es urgente.',
          'Tako-tsubo: acinesia apical con hipercinesia basal que excede un territorio coronario; sobre todo mujeres posmenopáusicas tras estrés.',
          'Tako-tsubo exige coronariografía para descartar oclusión de la DA; la FEVI suele recuperarse en semanas. Vigila obstrucción del TSVI (evita inotrópicos) y trombo apical.',
        ],
      },
      {
        title: 'Comunicación interauricular',
        points: [
          'Tipo más frecuente: ostium secundum; seno venoso se asocia a drenaje venoso pulmonar anómalo (mejor con ETE o RM).',
          'Shunt izquierda-derecha → sobrecarga de volumen del VD: VD y AD dilatados, septo aplanado en diástole.',
          'Clínica: desdoblamiento fijo del 2R; ECG con BRD incompleto.',
          'Sobrecarga de volumen del VD (Qp/Qs > 1,5) con RVP < 3 UW → cierre indicado (percutáneo si es secundum con bordes adecuados).',
          'Eisenmenger (RVP ≥ 5 UW con shunt invertido) contraindica el cierre.',
        ],
      },
    ],
  },

  'casos-u5': {
    intro: 'Más casos de ETE y eco avanzado: disección aórtica, trombosis protésica, eco de estrés y endocarditis tricuspídea.',
    sections: [
      {
        title: 'Disección aórtica tipo A',
        points: [
          'Stanford A: afecta a la aorta ascendente (con independencia de dónde empiece) → cirugía urgente.',
          'Signo clave: flap intimal móvil que separa luz verdadera y falsa; la verdadera se expande en sístole.',
          'Complicaciones a buscar: IA aguda, derrame pericárdico/taponamiento y afectación de los ostia coronarios.',
          'Paciente estable: angio-TC como primera prueba; inestable: ETE a pie de cama o en quirófano.',
          'Taponamiento por disección: no hacer pericardiocentesis de rutina (riesgo de sangrado masivo); ir a cirugía.',
        ],
      },
      {
        title: 'Trombosis de prótesis mitral',
        points: [
          'Sospecha en prótesis mecánica con anticoagulación subóptima: disnea, embolia o chasquido apagado.',
          'Eco: gradiente medio transprotésico elevado y área efectiva reducida; ETE y cinefluoroscopia muestran la movilidad limitada del disco.',
          'Diferencia trombo (blando, reciente, INR bajo) de pannus (fibroso, crónico); el TC ayuda.',
          'Trombosis obstructiva en paciente crítico → cirugía urgente; fibrinólisis si la cirugía no está disponible o es de muy alto riesgo.',
          'Trombosis no obstructiva: optimizar anticoagulación (heparina IV y AVK) y control ecográfico.',
          'Prótesis mecánica: AVK obligado; los ACOD están contraindicados.',
        ],
      },
      {
        title: 'Eco de estrés',
        points: [
          'Esfuerzo preferible cuando el paciente puede ejercitarse; dobutamina si no.',
          'Isquemia: alteración segmentaria nueva o que empeora con el estrés.',
          'Viabilidad con dobutamina: respuesta bifásica (mejora a dosis bajas y empeora a dosis altas).',
          'Alto riesgo (ESC 2024 SCC): isquemia en ≥ 3 de 16 segmentos.',
          'También útil en valvulopatías: EA de bajo flujo (dobutamina) e IM o MCH con síntomas desproporcionados (esfuerzo).',
        ],
      },
      {
        title: 'Endocarditis tricuspídea',
        points: [
          'Perfil típico: usuario de drogas por vía parenteral o portador de dispositivos/catéteres; germen más frecuente S. aureus.',
          'Embolias pulmonares sépticas (nódulos cavitados) en lugar de embolias sistémicas.',
          'Criterios de Duke (ESC 2023): hemocultivos típicos + imagen de vegetación, absceso o nueva insuficiencia.',
          'Cirugía a considerar si vegetación > 20 mm con embolias pulmonares recurrentes, IT grave con IC derecha refractaria o germen difícil de erradicar.',
          'Buen pronóstico en general con antibioterapia; preferir reparación tricuspídea a sustitución.',
        ],
      },
    ],
  },
};
