export default {
  id: 'cate',
  title: 'Cateterismo',
  subtitle: 'Hemodinámica',
  icon: '🩺',
  color: '#12a594',
  units: [
    {
      id: 'cate-u1',
      title: 'Anatomía coronaria',
      lessons: [
        {
          id: 'cate-u1-l1',
          title: 'Árbol coronario',
          questions: [
            { type: 'match', prompt: 'Relaciona cada arteria con su rama', pairs: [['Descendente anterior', 'Diagonales y septales'], ['Circunfleja', 'Marginales obtusas'], ['Coronaria derecha', 'Marginal aguda'], ['Tronco común', 'Bifurca en DA y Cx']] },
            { type: 'mc', prompt: 'La dominancia coronaria la define la arteria que da…', options: ['La descendente posterior', 'La rama del nodo sinusal', 'La primera diagonal', 'El tronco común'], answer: 0, explain: '~85 % dominancia derecha (DP desde la CD), ~8 % izquierda (desde Cx), resto codominancia.' },
            { type: 'mc', prompt: 'Las ramas septales, que irrigan los 2/3 anteriores del septo, salen de…', options: ['La descendente anterior', 'La circunfleja', 'La coronaria derecha', 'La marginal obtusa'], answer: 0, explain: 'La DP irriga el 1/3 inferior del septo.' },
            { type: 'tf', prompt: 'En la mayoría de las personas el nodo AV está irrigado por la coronaria derecha.', answer: true, explain: 'Por eso el IAM inferior se asocia a bradicardia y bloqueos AV (generalmente transitorios).' },
            { type: 'mc', prompt: 'Una lesión significativa del tronco común izquierdo se considera, angiográficamente, una estenosis ≥', options: ['50 %', '70 %', '90 %', '30 %'], answer: 0, explain: 'En el resto de vasos epicárdicos el umbral angiográfico clásico es ≥ 70 %.' },
          ],
        },
        {
          id: 'cate-u1-l2',
          title: 'Proyecciones angiográficas',
          questions: [
            { type: 'mc', prompt: 'OAI = oblicua anterior izquierda. ¿Qué significa?', options: ['El intensificador se sitúa a la izquierda del paciente', 'El paciente gira hacia la derecha', 'El intensificador se sitúa a la derecha del paciente', 'Proyección lateral pura'], answer: 0, explain: 'La nomenclatura se refiere a la posición del intensificador de imagen respecto al paciente.' },
            { type: 'match', prompt: 'Relaciona proyección con su uso típico', pairs: [['OAI craneal', 'DA media y diagonales'], ['OAD caudal', 'Circunfleja y marginales'], ['OAI caudal ("araña")', 'Tronco y bifurcación'], ['OAI 30–45°', 'Coronaria derecha']] },
            { type: 'tf', prompt: 'Cada lesión debe valorarse en al menos dos proyecciones ortogonales.', answer: true, explain: 'Una estenosis excéntrica puede parecer leve en una sola proyección.' },
            { type: 'mc', prompt: 'El flujo TIMI 3 significa…', options: ['Flujo normal con llenado distal completo', 'Ausencia de flujo', 'Flujo lento pero completo', 'Penetración sin llenado distal'], answer: 0, explain: 'TIMI 0: sin flujo; 1: penetración sin perfusión distal; 2: completo pero lento; 3: normal.' },
            { type: 'match', prompt: 'Relaciona el grado TIMI', pairs: [['TIMI 0', 'Sin flujo anterógrado'], ['TIMI 1', 'Contraste pasa sin opacificar lecho distal'], ['TIMI 2', 'Llenado completo pero lento'], ['TIMI 3', 'Flujo normal']] },
          ],
        },
      ],
    },
    {
      id: 'cate-u2',
      title: 'El procedimiento',
      lessons: [
        {
          id: 'cate-u2-l1',
          title: 'Accesos vasculares',
          questions: [
            { type: 'mc', prompt: 'Acceso de elección en coronariografía, especialmente en SCA (guías ESC):', options: ['Radial', 'Femoral', 'Braquial', 'Cubital'], answer: 0, explain: 'Reduce complicaciones hemorrágicas y mortalidad en SCA frente al femoral.' },
            { type: 'mc', prompt: 'La punción femoral debe hacerse sobre…', options: ['La cabeza femoral, por debajo del ligamento inguinal', 'Por encima del ligamento inguinal', 'En la bifurcación femoral', 'En la arteria femoral superficial distal'], answer: 0, explain: 'Por encima del ligamento → riesgo de hematoma retroperitoneal; demasiado baja → pseudoaneurisma/FAV.' },
            { type: 'tf', prompt: 'El test de Allen sigue siendo obligatorio antes de todo acceso radial.', answer: false, explain: 'La evidencia actual no ha demostrado que prediga isquemia de la mano; muchos centros ya no lo exigen.' },
            { type: 'match', prompt: 'Relaciona complicación con acceso', pairs: [['Hematoma retroperitoneal', 'Femoral alta'], ['Oclusión arterial asintomática', 'Radial'], ['Pseudoaneurisma', 'Femoral baja'], ['Fístula arteriovenosa', 'Femoral (punción doble pared)']] },
            { type: 'mc', prompt: 'Para prevenir la oclusión de la arteria radial se recomienda…', options: ['Heparina + hemostasia "permeable"', 'Compresión oclusiva prolongada', 'No usar anticoagulación', 'Usar introductores grandes'], answer: 0, explain: 'Heparina (≈ 5000 UI) y compresión que preserve flujo.' },
          ],
        },
        {
          id: 'cate-u2-l2',
          title: 'Fisiología y decisión',
          questions: [
            { type: 'mc', prompt: 'Un FFR ≤ 0,80 indica que la lesión…', options: ['Es funcionalmente significativa', 'No es significativa', 'Está calcificada', 'Es un trombo'], answer: 0, explain: 'FFR = Pd/Pa en hiperemia máxima (adenosina). iFR/RFR ≤ 0,89 sin hiperemia.' },
            { type: 'tf', prompt: 'El iFR se mide sin necesidad de fármaco hiperemizante.', answer: true, explain: 'Usa el periodo libre de ondas en diástole.' },
            { type: 'mc', prompt: 'La IVUS y la OCT son útiles para…', options: ['Optimizar el implante del stent', 'Medir la FEVI', 'Medir presiones pulmonares', 'Sustituir la anticoagulación'], answer: 0, explain: 'Valoran expansión, aposición, disección de bordes y tamaño del vaso.' },
            { type: 'mc', prompt: 'Tras implantar un stent farmacoactivo en un SCA, la doble antiagregación estándar dura…', options: ['12 meses', '1 mes', '5 años', '1 semana'], answer: 0, explain: 'Ajustable según riesgo hemorrágico/isquémico (pautas acortadas en alto riesgo de sangrado).' },
            { type: 'mc', prompt: 'Complicación grave típica de la ICP:', options: ['Perforación coronaria con taponamiento', 'Hiperpotasemia', 'Neumotórax', 'Fibrilación auricular crónica'], answer: 0, explain: 'Otras: disección, no-reflow, trombosis aguda del stent.' },
          ],
        },
      ],
    },
    {
      id: 'cate-u3',
      title: 'Hemodinámica',
      lessons: [
        {
          id: 'cate-u3-l1',
          title: 'Cateterismo derecho',
          questions: [
            { type: 'match', prompt: 'Relaciona cavidad con presión normal', pairs: [['AD (media)', '2–6 mmHg'], ['VD (sistólica)', '15–30 mmHg'], ['AP (media)', '10–20 mmHg'], ['PCP (enclavamiento)', '6–12 mmHg']] },
            { type: 'mc', prompt: 'La hipertensión pulmonar se define (ESC 2022) por una PAPm…', options: ['> 20 mmHg', '> 25 mmHg', '> 40 mmHg', '> 15 mmHg'], answer: 0, explain: 'Precapilar: PCP ≤ 15 y RVP > 2 UW. Postcapilar: PCP > 15.' },
            { type: 'mc', prompt: 'La presión capilar pulmonar (enclavamiento) estima…', options: ['La presión de la aurícula izquierda', 'La presión de la AD', 'La presión sistólica del VD', 'La presión aórtica'], answer: 0, explain: 'Y, en ausencia de estenosis mitral, la presión telediastólica del VI.' },
            { type: 'mc', prompt: 'Las resistencias vasculares pulmonares se calculan como…', options: ['(PAPm − PCP) / GC', 'PAPm × GC', '(PAD − PCP) / GC', 'PAS / PAD'], answer: 0, explain: 'Resultado en unidades Wood. Normal < 2 UW.' },
            { type: 'tf', prompt: 'El método de Fick estima el gasto cardiaco a partir del consumo de O₂ y la diferencia arteriovenosa de O₂.', answer: true, explain: 'GC = VO₂ / (CaO₂ − CvO₂). Alternativa: termodilución.' },
          ],
        },
        {
          id: 'cate-u3-l2',
          title: 'Curvas de presión',
          questions: [
            { type: 'match', prompt: 'Relaciona onda de presión auricular con su origen', pairs: [['Onda a', 'Contracción auricular'], ['Onda v', 'Llenado auricular con válvula AV cerrada'], ['Descenso x', 'Relajación auricular'], ['Descenso y', 'Apertura de la válvula AV']] },
            { type: 'mc', prompt: 'Ondas v gigantes en la curva de PCP sugieren…', options: ['Insuficiencia mitral grave', 'Estenosis aórtica', 'Fibrilación auricular', 'Hipovolemia'], answer: 0, explain: 'La regurgitación sistólica a una AI poco distensible eleva la onda v.' },
            { type: 'tf', prompt: 'En la fibrilación auricular desaparece la onda a, como en esta curva de AD.', pressure: 'ra-af', answer: true, explain: 'No hay contracción auricular organizada.' },
            { type: 'mc', prompt: 'El signo de "raíz cuadrada" (dip-plateau) en la curva ventricular es típico de…', options: ['Pericarditis constrictiva / miocardiopatía restrictiva', 'Estenosis aórtica', 'Insuficiencia aórtica', 'Normalidad'], answer: 0, explain: 'Interdependencia ventricular discordante orienta a constricción frente a restricción.' },
            { type: 'mc', prompt: 'Ondas a "en cañón" como las de esta curva de AD sugieren…', pressure: 'ra-cannon', options: ['Disociación AV (p. ej. BAV completo)', 'Fibrilación auricular', 'Insuficiencia tricuspídea', 'Hipovolemia'], answer: 0, explain: 'La aurícula se contrae contra la tricúspide cerrada.' },
          ],
        },
      ],
    },
    {
      id: 'cate-u4',
      title: 'Curvas y anatomía en imagen',
      lessons: [
        {
          id: 'cate-u4-l1',
          title: 'Reconoce la curva',
          questions: [
            { type: 'mc', prompt: '¿De qué cavidad o vaso es esta curva de presión?', pressure: 'ao', options: ['Aorta', 'Ventrículo izquierdo', 'Arteria pulmonar', 'Aurícula derecha'], answer: 0, explain: 'Presión ≈ 120/80 con incisura dícrota (cierre aórtico): la diastólica se mantiene alta porque la válvula aórtica está cerrada.' },
            { type: 'mc', prompt: '¿De qué cavidad es esta curva de presión?', pressure: 'lv', options: ['Ventrículo izquierdo', 'Aorta', 'Ventrículo derecho', 'Presión capilar pulmonar'], answer: 0, explain: 'Sistólica ≈ 120 y diastólica que cae casi a 0 y asciende hasta una telediastólica ≈ 10 mmHg: curva ventricular izquierda.' },
            { type: 'mc', prompt: 'Al avanzar el Swan-Ganz desde el VD aparece esta curva. ¿Dónde está la punta del catéter?', pressure: 'pa', options: ['Arteria pulmonar', 'Ventrículo derecho', 'Aurícula derecha', 'Enclavada (PCP)'], answer: 0, explain: 'La sistólica no cambia, pero la diastólica sube (≈ 10 mmHg), desciende a lo largo de la diástole y aparece la incisura del cierre pulmonar.' },
            { type: 'mc', prompt: 'Esta curva tiene una sistólica de ≈ 25 mmHg. ¿Dónde está el catéter?', pressure: 'rv', options: ['Ventrículo derecho', 'Arteria pulmonar', 'Aorta', 'Aurícula izquierda'], answer: 0, explain: 'En el VD la diastólica parte de ~0 y asciende durante la diástole; en la AP la diastólica es más alta y desciende.' },
            { type: 'mc', prompt: 'En esta curva de aurícula derecha, la onda que sigue a la onda P del ECG es…', pressure: 'ra', options: ['La onda a', 'La onda v', 'La onda c', 'El descenso y'], answer: 0, explain: 'La onda a es la contracción auricular (tras la P). La c coincide con el inicio del QRS y la v con el final de la onda T.' },
            { type: 'mc', prompt: 'Curva de enclavamiento normal. ¿Qué presión media esperas?', pressure: 'pcwp', options: ['6–12 mmHg', '20–25 mmHg', '0–2 mmHg', '30–40 mmHg'], answer: 0, explain: 'La PCP normal es ≤ 12 mmHg; > 15 mmHg define hipertensión pulmonar postcapilar (ESC 2022).' },
          ],
        },
        {
          id: 'cate-u4-l2',
          title: 'Curvas patológicas',
          questions: [
            { type: 'mc', prompt: 'Edema agudo de pulmón tras un IAM inferior con soplo sistólico nuevo. La PCP muestra esto. Sospecha principal:', pressure: 'pcwp-v', options: ['Insuficiencia mitral aguda (rotura de músculo papilar)', 'Taponamiento cardiaco', 'Estenosis mitral reumática', 'Infarto de ventrículo derecho'], answer: 0, explain: 'Ondas v gigantes por regurgitación a una AI no dilatada. El papilar posteromedial (irrigación única por la DP) es el que más se rompe en el IAM inferior.' },
            { type: 'tf', prompt: 'Unas ondas v gigantes en la PCP son patognomónicas de insuficiencia mitral.', pressure: 'pcwp-v', answer: false, explain: 'También aparecen en la CIV aguda o con una AI rígida; y una IM crónica grave con AI muy dilatada puede no tenerlas.' },
            { type: 'mc', prompt: 'Ascitis e ingurgitación yugular tras radioterapia torácica. Curva del VD:', pressure: 'rv-dip', options: ['Pericarditis constrictiva', 'Estenosis pulmonar', 'Hipertensión pulmonar precapilar', 'Curva normal'], answer: 0, explain: 'Dip-plateau ("raíz cuadrada") con telediastólica > 1/3 de la sistólica e igualación de presiones diastólicas. La discordancia VI/VD con la respiración apoya constricción frente a restricción.' },
            { type: 'mc', prompt: 'Registro simultáneo de VI y aorta. Diagnóstico más probable:', pressure: 'as-lv-ao', options: ['Estenosis aórtica grave', 'Insuficiencia aórtica grave', 'Miocardiopatía restrictiva', 'Registro normal'], answer: 0, explain: 'Gradiente sistólico VI–Ao con aorta de ascenso lento (parvus et tardus). Gradiente medio ≥ 40 mmHg = estenosis grave (ESC/EACTS).' },
            { type: 'mc', prompt: 'En este registro, el gradiente pico a pico VI–Ao es aproximadamente…', pressure: 'as-lv-ao', options: ['70 mmHg', '20 mmHg', '120 mmHg', '0 mmHg'], answer: 0, explain: 'Pico VI ≈ 180 menos pico aórtico ≈ 110. El pico a pico (no simultáneo) es menor que el gradiente instantáneo máximo del Doppler.' },
            { type: 'tf', prompt: 'Al inflar el balón la curva pasa de AP a PCP y la presión media queda por debajo de la diastólica de la AP: el enclavamiento es correcto.', pressure: 'pullback-pa-pcwp', answer: true, explain: 'La PCP debe ser ≤ diastólica de AP. Si la supera, sospecha sobreenclavamiento; un gradiente diastólico AP–PCP alto (> 7 mmHg) sugiere enfermedad vascular pulmonar.' },
          ],
        },
        {
          id: 'cate-u4-l3',
          title: 'Anatomía coronaria en imagen',
          questions: [
            { type: 'mc', prompt: '¿Qué arteria está resaltada?', diagram: { id: 'coronary', highlight: 'lad' }, options: ['Descendente anterior', 'Circunfleja', 'Coronaria derecha', 'Marginal obtusa'], answer: 0, explain: 'Recorre el surco interventricular anterior hacia el ápex; da diagonales y septales.' },
            { type: 'mc', prompt: '¿Qué arteria está resaltada?', diagram: { id: 'coronary', highlight: 'cx' }, options: ['Circunfleja', 'Descendente anterior', 'Coronaria derecha', 'Primera diagonal'], answer: 0, explain: 'Nace del tronco y discurre por el surco auriculoventricular izquierdo; da las marginales obtusas.' },
            { type: 'mc', prompt: '¿Qué arteria está resaltada?', diagram: { id: 'coronary', highlight: 'rca' }, options: ['Coronaria derecha', 'Circunfleja', 'Descendente posterior', 'Tronco común'], answer: 0, explain: 'Nace del seno coronario derecho y recorre el surco auriculoventricular derecho hasta la cruz del corazón.' },
            { type: 'mc', prompt: '¿Qué segmento está resaltado?', diagram: { id: 'coronary', highlight: 'lm' }, options: ['Tronco común izquierdo', 'Descendente anterior proximal', 'Circunfleja proximal', 'Coronaria derecha ostial'], answer: 0, explain: 'Nace del seno izquierdo y se bifurca en DA y Cx. Una estenosis ≥ 50 % es significativa e implica gran territorio en riesgo.' },
            { type: 'mc', prompt: 'En dominancia derecha, la rama resaltada nace de…', diagram: { id: 'coronary', highlight: 'pda' }, options: ['La coronaria derecha', 'La descendente anterior', 'La primera diagonal', 'El tronco común'], answer: 0, explain: 'Es la descendente posterior: irriga la cara inferior y el tercio inferior del septo. La arteria que la origina define la dominancia.' },
            { type: 'mc', prompt: 'La oclusión de la rama resaltada produce isquemia sobre todo en la cara…', diagram: { id: 'coronary', highlight: 'om' }, options: ['Lateral', 'Anterior', 'Inferior', 'Septal'], answer: 0, explain: 'Las marginales obtusas (de la Cx) irrigan la pared lateral: cambios en I, aVL, V5–V6 (o solo en derivaciones posteriores).' },
          ],
        },
      ],
    },
    {
      id: 'cate-u5',
      title: 'SCA y shock en la sala',
      guide: {
        intro: 'En el paciente agudo el cateterismo es diagnóstico y tratamiento a la vez. Decide cuándo entrar (estrategia invasiva), qué tratar (culpable o completa) y cómo sostener la hemodinámica si hay shock.',
        sections: [
          {
            title: 'Estrategia invasiva e ICP primaria (ESC SCA 2023)',
            points: [
              'IAMSEST: invasiva inmediata (< 2 h) si muy alto riesgo (shock, inestabilidad, dolor refractario, arritmias malignas, complicación mecánica); precoz (< 24 h) si alto riesgo (IAMSEST confirmado, cambios dinámicos del ST, GRACE > 140); selectiva en el resto.',
              'IAMCEST: ICP primaria si el tiempo previsto del diagnóstico al paso de la guía es ≤ 120 min; si no, fibrinólisis en < 10 min y traslado.',
              'Acceso radial de elección; stent farmacoactivo; trombectomía por aspiración rutinaria no recomendada (TASTE, TOTAL).',
              'Multivaso sin shock: revascularización completa (en el procedimiento índice o en los primeros 45 días).',
            ],
            tip: 'Multivaso con shock: solo la culpable en el procedimiento índice (CULPRIT-SHOCK).',
          },
          {
            title: 'No-reflow y shock cardiogénico',
            points: [
              'No-reflow: flujo TIMI < 3 sin obstrucción mecánica; se trata con vasodilatadores intracoronarios distales (adenosina, verapamilo, nitroprusiato).',
              'Estadios SCAI: A (en riesgo), B (inicio: hipotensión sin hipoperfusión), C (clásico: hipoperfusión que exige intervención), D (deterioro), E (extremo).',
              'BCIA rutinario no recomendado (IABP-SHOCK II); ECMO-VA rutinario sin beneficio y con más sangrado (ECLS-SHOCK); Impella CP redujo mortalidad en IAMCEST con shock seleccionado (DanGer Shock) a costa de más complicaciones.',
              'Potencia cardiaca (CPO = PAM × GC / 451) < 0,6 W y PAPi bajo (fallo de VD) indican mal pronóstico.',
            ],
          },
          {
            title: 'Complicaciones mecánicas',
            points: [
              'CIV posinfarto: soplo nuevo, salto oximétrico AD → AP y Qp/Qs elevado; tratamiento quirúrgico o percutáneo, a menudo con soporte mecánico como puente.',
              'Rotura de músculo papilar (sobre todo posteromedial, irrigación única): edema agudo de pulmón y ondas v gigantes en la PCP.',
              'Rotura de pared libre: taponamiento y disociación electromecánica; cirugía urgente.',
            ],
            tip: 'Ondas v gigantes no distinguen IM de CIV: la oximetría sí.',
          },
        ],
      },
      lessons: [
        {
          id: 'cate-u5-l1',
          title: 'Estrategia invasiva e ICP primaria',
          questions: [
            { type: 'match', prompt: 'Relaciona la estrategia invasiva en el SCASEST con su indicación (ESC 2023)', pairs: [['Inmediata (< 2 h)', 'Shock o arritmias malignas'], ['Precoz (< 24 h)', 'IAMSEST confirmado o GRACE > 140'], ['Selectiva', 'Sin criterios de alto riesgo']], explain: 'El riesgo del paciente, no la troponina sola, marca el reloj: el muy alto riesgo se trata como un IAMCEST.' },
            { type: 'mc', prompt: 'IAMCEST en un hospital sin hemodinámica. Se prefiere fibrinólisis si el tiempo previsto del diagnóstico al paso de la guía supera…', options: ['120 min', '60 min', '90 min', '180 min'], answer: 0, explain: 'ESC 2023: si la ICP primaria no es posible en ≤ 120 min, fibrinólisis (en < 10 min del diagnóstico) y traslado para coronariografía en 2–24 h.' },
            { type: 'tf', prompt: 'La trombectomía por aspiración rutinaria antes del stent está recomendada en la ICP primaria.', answer: false, explain: 'TASTE y TOTAL no mostraron beneficio en mortalidad y TOTAL sugirió más ictus. Solo se usa como rescate ante gran carga trombótica.' },
            { type: 'mc', prompt: 'Varón de 62 años con IAMCEST anterior, estable tras ICP de la DA, con estenosis del 80 % en la Cx. Según ESC 2023:', options: ['Revascularización completa, en el índice o en ≤ 45 días', 'Solo tratar la culpable y tratamiento médico', 'Cirugía de revascularización urgente', 'Repetir coronariografía si recurre la angina'], answer: 0, explain: 'COMPLETE, FIRE y otros ensayos apoyan la revascularización completa en el IAMCEST multivaso sin shock; puede hacerse en el mismo acto o diferida.' },
            { type: 'mc', prompt: 'Mujer de 70 años con IAMCEST, shock y enfermedad de tres vasos. En el procedimiento índice se recomienda…', options: ['ICP solo de la lesión culpable', 'ICP de todas las lesiones significativas', 'Fibrinólisis y diferir el cateterismo', 'Cirugía urgente sistemática'], answer: 0, explain: 'CULPRIT-SHOCK: tratar solo la culpable redujo muerte o diálisis a 30 días frente a ICP multivaso inmediata.' },
            { type: 'tf', prompt: 'En el SCA, el acceso radial es de elección frente al femoral salvo razones técnicas.', answer: true, explain: 'Reduce hemorragias graves y, en MATRIX, la mortalidad. El femoral queda para soporte mecánico grande o fracaso radial.' },
          ],
        },
        {
          id: 'cate-u5-l2',
          title: 'No-reflow y shock cardiogénico',
          questions: [
            { type: 'mc', prompt: 'Tras implantar el stent en la culpable el flujo queda TIMI 1 sin disección, trombo visible ni espasmo. Se trata de…', options: ['No-reflow', 'Trombosis aguda del stent', 'Disección coronaria', 'Perforación tipo Ellis I'], answer: 0, explain: 'No-reflow = perfusión inadecuada sin obstrucción mecánica epicárdica; se debe a embolización distal, edema y daño microvascular.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento farmacológico de primera línea del no-reflow?', options: ['Adenosina o verapamilo intracoronario distal', 'Nitroglicerina intravenosa en bolo', 'Fibrinólisis sistémica', 'Noradrenalina intracoronaria'], answer: 0, explain: 'Se administran en el lecho distal (microcatéter o catéter de aspiración); el nitroprusiato es alternativa. La nitroglicerina actúa sobre todo en epicárdicas.' },
            { type: 'match', prompt: 'Relaciona el estadio SCAI con su descripción', pairs: [['A', 'En riesgo, sin shock'], ['B', 'Hipotensión sin hipoperfusión'], ['C', 'Hipoperfusión que requiere tratamiento'], ['E', 'Colapso circulatorio, PCR en curso']], explain: 'El estadio D (deterioro) es el que no responde a las medidas iniciales. La clasificación SCAI (2019, actualizada 2022) estratifica el pronóstico.' },
            { type: 'tf', prompt: 'El balón de contrapulsación intraaórtico rutinario reduce la mortalidad en el shock posinfarto.', answer: false, explain: 'IABP-SHOCK II no mostró beneficio a 30 días ni a largo plazo; la ESC lo desaconseja de rutina y lo reserva para complicaciones mecánicas.' },
            { type: 'mc', prompt: '¿Qué mostró el ensayo DanGer Shock en IAMCEST con shock cardiogénico?', options: ['Impella CP redujo la mortalidad a 180 días', 'ECMO-VA redujo la mortalidad a 30 días', 'El BCIA mejoró la supervivencia', 'Ningún dispositivo cambió el pronóstico'], answer: 0, explain: 'Menor mortalidad con Impella CP, pero con más sangrados, isquemia de miembro y terapia renal sustitutiva. ECLS-SHOCK, en cambio, fue neutro para ECMO-VA.' },
            { type: 'mc', prompt: 'PAM 60 mmHg y GC 3,0 L/min. ¿Cuál es la potencia cardiaca (CPO = PAM × GC / 451)?', options: ['0,40 W', '0,13 W', '4,0 W', '1,8 W'], answer: 0, explain: '60 × 3 / 451 ≈ 0,40 W. Una CPO < 0,6 W es el predictor hemodinámico de mortalidad más potente en el shock cardiogénico.' },
          ],
        },
        {
          id: 'cate-u5-l3',
          title: 'Complicaciones mecánicas',
          questions: [
            { type: 'mc', prompt: 'IAM inferior, soplo sistólico nuevo y edema agudo de pulmón. Saturaciones: AD 68 %, AP 84 %. Diagnóstico más probable:', options: ['Comunicación interventricular posinfarto', 'Rotura de músculo papilar', 'Rotura de pared libre', 'Infarto de ventrículo derecho'], answer: 0, explain: 'Un salto oximétrico AD → AP del 16 % indica cortocircuito izquierda-derecha ventricular. La IM aguda no eleva la saturación de la AP.' },
            { type: 'mc', prompt: 'Esta curva de PCP aparece en un IAM inferior con EAP súbito y soplo apical. ¿Qué estructura se ha roto con más probabilidad?', pressure: 'pcwp-v', options: ['Músculo papilar posteromedial', 'Músculo papilar anterolateral', 'Septo interventricular apical', 'Cuerdas de la válvula tricúspide'], answer: 0, explain: 'El posteromedial depende solo de la DP; el anterolateral tiene doble irrigación (DA y Cx) y se rompe mucho menos.' },
            { type: 'tf', prompt: 'Unas ondas v gigantes en la PCP permiten distinguir la rotura de papilar de la CIV posinfarto.', pressure: 'pcwp-v', answer: false, explain: 'La CIV también puede dar ondas v altas por sobrecarga de volumen de la AI. Lo que las separa es la serie oximétrica y el ecocardiograma.' },
            { type: 'match', prompt: 'Relaciona cada complicación mecánica con su hallazgo típico', pairs: [['CIV posinfarto', 'Salto oximétrico en el VD'], ['Rotura de papilar', 'IM aguda masiva'], ['Rotura de pared libre', 'Taponamiento y DEM'], ['Pseudoaneurisma de VI', 'Cuello estrecho, pared pericárdica']], explain: 'DEM = disociación electromecánica. Todas son más frecuentes en IAM tardíamente reperfundidos o no reperfundidos.' },
            { type: 'mc', prompt: 'CIV posinfarto con shock. ¿Qué papel tiene el soporte mecánico?', options: ['Puente hasta el cierre quirúrgico o percutáneo', 'Tratamiento definitivo que evita el cierre', 'Está contraindicado en la CIV', 'Solo si el Qp/Qs es < 1,5'], answer: 0, explain: 'BCIA o ECMO-VA estabilizan hasta el cierre, cuyo momento decide el Heart Team (ESC 2023). El Impella se usa con cautela: puede invertir el shunt (hipoxemia) o aspirar tejido necrótico.' },
            { type: 'tf', prompt: 'La rotura de pared libre suele presentarse como taponamiento brusco con disociación electromecánica.', answer: true, explain: 'Es la complicación mecánica más letal; una rotura subaguda contenida puede dar tiempo a la pericardiocentesis y la cirugía urgente.' },
          ],
        },
      ],
    },
    {
      id: 'cate-u6',
      title: 'Material e ICP',
      guide: {
        intro: 'Conocer el material es conocer sus límites: cada catéter, guía y balón resuelve un problema concreto. La ICP compleja (calcio, bifurcaciones, CTO) se planifica antes de entrar.',
        sections: [
          {
            title: 'Catéteres, guías y balones',
            points: [
              'Judkins izquierdo (JL4) y derecho (JR4) para diagnóstico; el número indica la distancia (cm) entre curvas: JL3,5 en aorta pequeña, JL5 en aorta dilatada.',
              'EBU/XB: apoyo extra para ICP del árbol izquierdo; Amplatz (AL): ostia difíciles y máximo apoyo, con más riesgo de disección; multipropósito: ventriculografía e injertos.',
              'Guías 0,014": workhorse de punta blanda; hidrofílicas para tortuosidad (más riesgo de perforación); guías de CTO con más carga en la punta.',
              'Balón semicompliante para predilatar; no compliante (NC) para posdilatar a alta presión; cutting/scoring para placa fibrocálcica o reestenosis.',
            ],
          },
          {
            title: 'Stents y calcio',
            points: [
              'Los stents farmacoactivos (DES) de nueva generación son de elección en toda ICP, incluso con alto riesgo hemorrágico y DAPT corta (LEADERS FREE, ONYX ONE).',
              'Aterectomía rotacional: fresa de diamante que pule el calcio superficial; riesgo de slow-flow/no-reflow y bradicardia.',
              'Litotricia intravascular: ondas de presión acústicas a baja presión que fracturan calcio superficial y profundo.',
              'La imagen intracoronaria (IVUS/OCT) mide el calcio y guía la optimización del stent.',
            ],
            tip: 'Si el balón NC no se expande del todo ("hueso de perro"), no implantes el stent: modifica la placa.',
          },
          {
            title: 'Bifurcaciones y CTO',
            points: [
              'Clasificación de Medina (vaso principal proximal, distal, rama lateral; 1 = lesión).',
              'Stent provisional como estrategia por defecto (EBC); dos stents (DK-crush, culotte) en bifurcaciones complejas con rama grande enferma (DEFINITION II).',
              'POT: balón corto NC en el vaso principal proximal, justo antes de la carina; kissing final obligado en técnicas de dos stents.',
              'CTO: el J-CTO predice la dificultad de cruzar la guía; abordaje anterógrado (escalada, disección-reentrada) o retrógrado por colaterales.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'cate-u6-l1',
          title: 'Catéteres, guías y balones',
          questions: [
            { type: 'match', prompt: 'Relaciona cada catéter con su uso típico', pairs: [['JL4', 'Coronariografía izquierda'], ['JR4', 'Coronariografía derecha'], ['EBU/XB', 'Apoyo extra en ICP izquierda'], ['Multipropósito', 'Ventriculografía e injertos']], explain: 'El Amplatz (AL) se reserva para ostia difíciles o cuando hace falta máximo apoyo, con más riesgo de disección ostial.' },
            { type: 'mc', prompt: 'Paciente con aorta ascendente dilatada: el JL4 no alcanza el tronco. ¿Qué catéter eliges?', options: ['JL5', 'JL3,5', 'JR4', 'Pigtail'], answer: 0, explain: 'El número es la distancia (cm) entre la curva primaria y la secundaria: aortas grandes piden curvas más largas; aortas pequeñas, JL3,5.' },
            { type: 'mc', prompt: 'Para posdilatar un stent a alta presión sin sobredistender el vaso usas un balón…', options: ['No compliante', 'Semicompliante', 'Liberador de fármaco', 'De angioplastia periférica'], answer: 0, explain: 'El balón NC apenas cambia de diámetro con la presión (> 20 atm): expande el stent sin estirar los bordes. El semicompliante crece con la presión.' },
            { type: 'tf', prompt: 'Las guías hidrofílicas cruzan mejor la tortuosidad, pero tienen más riesgo de disección subintimal y perforación distal.', answer: true, explain: 'Su cubierta polimérica reduce la fricción y la sensación táctil; por eso se suele empezar con una guía workhorse no hidrofílica.' },
            { type: 'match', prompt: 'Relaciona cada balón con su indicación principal', pairs: [['Semicompliante', 'Predilatación'], ['Cutting/scoring', 'Placa fibrocálcica'], ['Liberador de fármaco', 'Reestenosis intra-stent'], ['No compliante', 'Optimización del stent']], explain: 'Cutting y scoring concentran la fuerza en cuchillas o alambres; el balón farmacoactivo evita añadir otra capa de metal.' },
            { type: 'mc', prompt: '¿Qué característica define a una guía coronaria "workhorse"?', options: ['Punta blanda y buen soporte para uso general', 'Punta rígida para perforar oclusiones', 'Cubierta hidrofílica y punta cónica', 'Diámetro de 0,035"'], answer: 0, explain: 'Son guías 0,014" de punta poco cargada (≈ 1 g), seguras para la mayoría de lesiones. Las de CTO tienen más carga y a veces punta cónica.' },
          ],
        },
        {
          id: 'cate-u6-l2',
          title: 'Stents y calcio',
          questions: [
            { type: 'mc', prompt: '¿Por qué los stents farmacoactivos reducen la reestenosis frente a los convencionales (BMS)?', options: ['Liberan un antiproliferativo que frena la neoíntima', 'Tienen struts más gruesos y radiopacos', 'Se reabsorben a los 6 meses', 'Evitan la necesidad de antiagregación'], answer: 0, explain: 'Los limus (everolimus, zotarolimus, sirolimus) inhiben la hiperplasia neointimal. Los DES actuales tienen además struts finos y polímeros biocompatibles.' },
            { type: 'tf', prompt: 'En el paciente con alto riesgo hemorrágico que solo tolera 1 mes de DAPT es preferible un stent convencional (BMS).', answer: false, explain: 'LEADERS FREE y ONYX ONE mostraron que un DES con DAPT de 1 mes es superior al BMS. Hoy el DES es el stent de elección en toda ICP.' },
            { type: 'mc', prompt: 'Lesión con calcio superficial circunferencial: un balón NC a 20 atm no se expande. ¿Qué técnica usa una fresa de diamante a alta velocidad?', options: ['Aterectomía rotacional', 'Litotricia intravascular', 'Balón de corte', 'Trombectomía por aspiración'], answer: 0, explain: 'La rotablación (≈ 135 000–180 000 rpm) pule de forma diferencial el tejido rígido. Riesgos: slow-flow/no-reflow, perforación y bradicardia.' },
            { type: 'match', prompt: 'Relaciona la técnica de modificación de placa con su mecanismo', pairs: [['Rotacional', 'Abrasión con fresa de diamante'], ['Litotricia intravascular', 'Ondas de presión acústicas'], ['Balón de corte', 'Microcuchillas longitudinales'], ['Orbital', 'Corona excéntrica que orbita']], explain: 'La aterectomía orbital es otra opción ablativa; la litotricia no extrae material sino que fractura el calcio.' },
            { type: 'tf', prompt: 'La litotricia intravascular puede fracturar calcio profundo y se aplica con el balón inflado a baja presión.', answer: true, explain: 'Las ondas acústicas atraviesan el tejido blando y fracturan calcio superficial y profundo, con el balón a ≈ 4 atm, sin barotrauma.' },
            { type: 'mc', prompt: 'Vas a hacer rotablación de la coronaria derecha proximal dominante. ¿Qué complicación se previene clásicamente y cómo?', options: ['Bradicardia, con marcapasos transitorio o atropina', 'Hipotensión, con BCIA profiláctico', 'Trombosis, con fibrinólisis', 'Vasoespasmo, con betabloqueantes'], answer: 0, explain: 'La rotablación en la CD o en una Cx dominante se asocia a bradicardia y BAV. La práctica varía: muchos operadores dejan un marcapasos transitorio o premedican con atropina.' },
          ],
        },
        {
          id: 'cate-u6-l3',
          title: 'Bifurcaciones y CTO',
          questions: [
            { type: 'mc', prompt: 'Una bifurcación Medina 1,1,1 significa lesión significativa en…', options: ['Principal proximal, principal distal y rama lateral', 'Solo la rama lateral', 'Principal proximal y rama lateral', 'Principal distal y rama lateral'], answer: 0, explain: 'Medina: (vaso principal proximal, vaso principal distal, rama lateral); 1 = estenosis ≥ 50 %, 0 = sin lesión.' },
            { type: 'mc', prompt: '¿Cuál es la estrategia por defecto para la mayoría de bifurcaciones según el European Bifurcation Club?', options: ['Stent provisional en el vaso principal', 'Dos stents sistemáticos con DK-crush', 'Culotte de entrada', 'Solo balón en ambas ramas'], answer: 0, explain: 'Se implanta un stent en el vaso principal y solo se trata la rama lateral si queda comprometida. Los dos stents se reservan para bifurcaciones complejas.' },
            { type: 'mc', prompt: 'La técnica POT (proximal optimization technique) consiste en…', options: ['Inflar un balón NC en el principal proximal hasta la carina', 'Inflar simultáneamente dos balones en ambas ramas', 'Implantar un stent en la rama lateral primero', 'Dilatar la rama lateral a través del stent'], answer: 0, explain: 'Adapta el stent al diámetro mayor del segmento proximal, mejora la aposición y facilita recruzar la guía a la rama lateral.' },
            { type: 'tf', prompt: 'En EBC MAIN, la doble estrategia sistemática de stents fue superior al provisional en el tronco distal.', answer: false, explain: 'El provisional por pasos no fue inferior (y con eventos numéricamente menores). DEFINITION II, en cambio, favoreció dos stents en bifurcaciones complejas.' },
            { type: 'tf', prompt: 'Tras una técnica de dos stents (culotte, DK-crush) se recomienda el kissing balloon final.', answer: true, explain: 'El kissing final mejora la expansión en el ostium de la rama lateral. En el provisional de un solo stent no es obligatorio.' },
            { type: 'match', prompt: 'Relaciona la estrategia de CTO con su característica', pairs: [['Escalada anterógrada', 'Cruce intraluminal con guías'], ['Disección-reentrada anterógrada', 'Reentrada distal a la oclusión'], ['Abordaje retrógrado', 'Vía colaterales septales o epicárdicas'], ['J-CTO', 'Predice la dificultad de cruce']], explain: 'El J-CTO suma 1 punto por muñón romo, calcio, tortuosidad > 45°, longitud ≥ 20 mm e intento previo fallido.' },
          ],
        },
      ],
    },
    {
      id: 'cate-u7',
      title: 'Hemodinámica avanzada e HP',
      guide: {
        intro: 'El cateterismo derecho completo es el patrón oro para diagnosticar y clasificar la hipertensión pulmonar, cuantificar cortocircuitos y resolver dudas valvulares o pericárdicas.',
        sections: [
          {
            title: 'Hipertensión pulmonar (ESC/ERS 2022)',
            points: [
              'HP: PAPm > 20 mmHg. Precapilar: PCP ≤ 15 y RVP > 2 UW. Postcapilar aislada: PCP > 15 y RVP ≤ 2. Combinada: PCP > 15 y RVP > 2.',
              'RVP = (PAPm − PCP) / GC; GTP = PAPm − PCP; GDP = PAPd − PCP (> 7 mmHg sugiere enfermedad vascular pulmonar).',
              'Test vasodilatador (NO inhalado, iloprost o epoprostenol) solo en HAP idiopática, hereditaria o por fármacos: positivo si ↓ PAPm ≥ 10 mmHg hasta ≤ 40 mmHg con GC mantenido.',
              'La PCP se mide al final de la espiración y la media siempre debe quedar por debajo de la diastólica de AP.',
            ],
            tip: 'Respondedor = candidato a antagonistas del calcio a dosis altas (pocos pacientes, ≈ 10 % de la HAP idiopática).',
          },
          {
            title: 'Oximetría y cortocircuitos',
            points: [
              'Serie oximétrica: VCS, VCI, AD, VD, AP, aorta; un salto ≥ 7 % en aurícula o ≥ 5 % en ventrículo/AP sugiere shunt izquierda-derecha.',
              'Saturación venosa mixta proximal al shunt (Flamm): (3 × VCS + VCI) / 4.',
              'Qp/Qs = (SaO₂ − SvmO₂) / (SvpO₂ − SapO₂); ≥ 1,5 sugiere cortocircuito significativo.',
              'Fick: GC = VO₂ / diferencia arteriovenosa de O₂.',
            ],
          },
          {
            title: 'Válvulas y pericardio',
            points: [
              'Gorlin: área = flujo valvular / (constante × √gradiente medio); Hakki simplificado: área ≈ GC / √gradiente.',
              'El gradiente pico a pico (no simultáneo) es menor que el pico instantáneo del Doppler; el gradiente medio es el que mejor se correlaciona.',
              'Estenosis mitral: gradiente diastólico PCP (o AI) − VI.',
              'Constricción: igualación de diastólicas, dip-plateau y discordancia sistólica VI/VD con la respiración; restricción: PSVD > 50 mmHg y concordancia.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'cate-u7-l1',
          title: 'HP en el cateterismo',
          questions: [
            { type: 'mc', prompt: 'PAPm 40 mmHg, PCP 10 mmHg, GC 5 L/min. ¿Cuál es la RVP?', options: ['6 UW', '8 UW', '10 UW', '2 UW'], answer: 0, explain: '(40 − 10) / 5 = 6 UW. Error típico: dividir la PAPm por el GC sin restar la PCP (8 UW). Con PCP ≤ 15 es HP precapilar.' },
            { type: 'match', prompt: 'Relaciona el perfil hemodinámico de HP (ESC/ERS 2022)', pairs: [['Precapilar', 'PCP ≤ 15 y RVP > 2 UW'], ['Postcapilar aislada', 'PCP > 15 y RVP ≤ 2 UW'], ['Postcapilar combinada', 'PCP > 15 y RVP > 2 UW']], explain: 'Todas requieren PAPm > 20 mmHg. La combinada indica remodelado vascular añadido a la cardiopatía izquierda.' },
            { type: 'mc', prompt: 'PAPm 35 mmHg, PAPd 24 mmHg, PCP 20 mmHg, GC 4 L/min. ¿Qué perfil tiene?', options: ['HP postcapilar combinada', 'HP postcapilar aislada', 'HP precapilar', 'Sin hipertensión pulmonar'], answer: 0, explain: 'PCP > 15 → postcapilar; RVP = 15 / 4 ≈ 3,8 UW (> 2) → combinada. GTP 15 mmHg y GDP 4 mmHg.' },
            { type: 'mc', prompt: 'HAP idiopática. Test con óxido nítrico: PAPm de 48 a 36 mmHg con GC estable. ¿Cómo se interpreta?', options: ['Respondedor: candidato a antagonistas del calcio', 'No respondedor: no baja del 50 %', 'No interpretable sin repetir con adenosina', 'Respondedor solo si la PAPm baja de 25'], answer: 0, explain: 'Criterio ESC/ERS: ↓ PAPm ≥ 10 mmHg hasta un valor ≤ 40 mmHg con GC mantenido o aumentado. Aquí baja 12 hasta 36.' },
            { type: 'tf', prompt: 'El test vasodilatador está indicado de rutina en la HP del grupo 2 (cardiopatía izquierda).', answer: false, explain: 'Solo se recomienda en HAP idiopática, hereditaria o asociada a fármacos; en el grupo 2 puede precipitar edema pulmonar al aumentar el flujo.' },
            { type: 'tf', prompt: 'La PCP debe leerse al final de la espiración, cuando la presión intratorácica se acerca a cero.', pressure: 'pcwp', answer: true, explain: 'En respiración espontánea la presión intratorácica es más negativa en inspiración y falsea a la baja la lectura; la ESC/ERS recomienda final de espiración.' },
          ],
        },
        {
          id: 'cate-u7-l2',
          title: 'Oximetría y cortocircuitos',
          questions: [
            { type: 'mc', prompt: 'VO₂ 250 mL/min y diferencia arteriovenosa de O₂ 50 mL/L. ¿Cuál es el GC por Fick?', options: ['5 L/min', '50 L/min', '0,5 L/min', '12,5 L/min'], answer: 0, explain: 'GC = 250 / 50 = 5 L/min. Ojo con las unidades: si la diferencia se expresa en mL/dL (5) hay que multiplicar por 10.' },
            { type: 'match', prompt: 'Relaciona el nivel del salto oximétrico con la lesión más probable', pairs: [['VCS → AD', 'CIA o drenaje venoso anómalo'], ['AD → VD', 'CIV'], ['VD → AP', 'Ductus arterioso persistente']], explain: 'El salto aparece en la primera cavidad donde llega la sangre oxigenada del cortocircuito.' },
            { type: 'mc', prompt: 'SaO₂ 96 %, venosa mixta 70 %, venosa pulmonar 96 %, AP 85 %. ¿Cuál es el Qp/Qs?', options: ['2,4', '0,4', '1,0', '3,7'], answer: 0, explain: 'Qp/Qs = (96 − 70) / (96 − 85) = 26 / 11 ≈ 2,4. Invertir numerador y denominador da 0,4, el error más típico.' },
            { type: 'mc', prompt: 'En una CIA, ¿cómo se estima la saturación venosa mixta proximal al shunt (Flamm)?', options: ['(3 × VCS + VCI) / 4', '(VCS + VCI) / 2', 'Saturación de la AP', 'Saturación de la AD'], answer: 0, explain: 'La AD y la AP ya están contaminadas por el cortocircuito; por eso se usa la sangre de las cavas, con más peso para la VCS.' },
            { type: 'tf', prompt: 'Un salto de saturación ≥ 7 % entre cavas y AD sugiere cortocircuito izquierda-derecha a nivel auricular.', answer: true, explain: 'Umbrales de Grossman con la media de varias muestras: ≥ 7 % en aurícula (más heterogénea) y ≥ 5 % en VD o AP. Con muestras aisladas se exige más (≈ 11 % auricular).' },
            { type: 'tf', prompt: 'Un Qp/Qs de 1,1 en una CIA con VD normal es indicación clara de cierre.', answer: false, explain: 'El cierre se plantea con Qp/Qs ≥ 1,5 o sobrecarga de volumen del VD, sin HP grave (RVP < 3 UW para cierre sin más estudio, ESC 2020).' },
          ],
        },
        {
          id: 'cate-u7-l3',
          title: 'Válvulas y pericardio en el laboratorio',
          questions: [
            { type: 'mc', prompt: 'Estenosis aórtica: GC 5 L/min y gradiente medio 64 mmHg. Por la fórmula de Hakki, el área aórtica es…', pressure: 'as-lv-ao', options: ['0,63 cm²', '0,08 cm²', '1,25 cm²', '3,2 cm²'], answer: 0, explain: 'Hakki: área ≈ GC / √gradiente = 5 / 8 ≈ 0,63 cm² (grave < 1 cm²). Olvidar la raíz cuadrada da 0,08.' },
            { type: 'tf', prompt: 'El gradiente pico a pico del cateterismo suele ser mayor que el gradiente máximo instantáneo del Doppler.', answer: false, explain: 'Los picos de VI y aorta no son simultáneos, así que el pico a pico es menor que el máximo instantáneo. El gradiente medio es el más comparable.' },
            { type: 'mc', prompt: 'En la estenosis mitral, el gradiente transmitral se mide en el cateterismo entre…', pressure: 'ms-lv-la', options: ['PCP (o AI) y VI en diástole', 'VI y aorta en sístole', 'AP y PCP en diástole', 'AD y VD en diástole'], answer: 0, explain: 'La PCP debe corregirse por su retraso respecto a la AI; el gradiente medio y la FC se integran en la fórmula de Gorlin.' },
            { type: 'tf', prompt: 'En la pericarditis constrictiva las presiones diastólicas de ambos ventrículos tienden a igualarse (diferencia ≤ 5 mmHg).', pressure: 'rv-dip', answer: true, explain: 'El pericardio rígido limita el volumen total; también aparece el dip-plateau, pero este se ve igualmente en la restricción.' },
            { type: 'mc', prompt: 'Registro simultáneo VI–VD: en inspiración sube la sistólica del VD y baja la del VI. Esto sugiere…', pressure: 'constriction-lv-rv', options: ['Pericarditis constrictiva', 'Miocardiopatía restrictiva', 'Hipertensión pulmonar', 'Taponamiento resuelto'], answer: 0, explain: 'La discordancia sistólica (interdependencia aumentada) es el criterio más fiable de constricción; en la restricción las curvas se mueven en concordancia.' },
            { type: 'match', prompt: 'Relaciona el hallazgo con su orientación diagnóstica', pairs: [['Discordancia sistólica VI/VD', 'Constricción'], ['PSVD > 50 mmHg', 'Orienta a restricción'], ['Dip-plateau', 'Común a ambas']], explain: 'Ningún criterio aislado es perfecto: se integran con eco, RM/TC y, a veces, biopsia endomiocárdica.' },
          ],
        },
        {
          id: 'cate-u7-l4',
          title: 'Curvas avanzadas en la sala',
          questions: [
            { type: 'mc', prompt: 'Registro simultáneo de VI y aorta tras una extrasístole ventricular. ¿Qué indica este patrón?', pressure: 'hcm-brockenbrough', options: ['Obstrucción dinámica del TSVI (MCH obstructiva)', 'Estenosis aórtica valvular fija', 'Insuficiencia aórtica grave', 'Disfunción sistólica grave del VI'], answer: 0, explain: 'Signo de Brockenbrough: en el latido postextrasistólico sube la sistólica del VI y el gradiente, pero baja la presión de pulso aórtica. En la estenosis aórtica fija la presión de pulso aumenta.' },
            { type: 'tf', prompt: 'En la estenosis aórtica valvular fija, el latido postextrasistólico aumenta la presión de pulso aórtica.', answer: true, explain: 'Con obstrucción fija, más contractilidad significa más volumen latido y más presión de pulso; la caída paradójica es propia de la obstrucción dinámica.' },
            { type: 'mc', prompt: '¿Qué valvulopatía explica esta pareja de curvas (aorta y VI)?', pressure: 'ar-ao-lv', options: ['Insuficiencia aórtica grave', 'Estenosis aórtica grave', 'Estenosis mitral', 'Insuficiencia mitral aguda'], answer: 0, explain: 'Presión de pulso muy amplia con diastólica aórtica baja y telediastólica del VI elevada y ascendente: la aorta se vacía hacia el ventrículo durante la diástole.' },
            { type: 'mc', prompt: 'Curvas simultáneas de AI y VI. ¿Qué representa la diferencia de presión entre ambas durante la diástole?', pressure: 'ms-lv-la', options: ['El gradiente transmitral de la estenosis mitral', 'El gradiente aórtico', 'La regurgitación mitral', 'La presión de enclavamiento pulmonar'], answer: 0, explain: 'En la estenosis mitral la AI permanece por encima del VI toda la diástole; el gradiente medio > 10 mmHg indica estenosis grave y aumenta con la frecuencia cardiaca.' },
            { type: 'mc', prompt: 'Registro arterial en una paciente con derrame pericárdico, taquicárdica e hipotensa. ¿Qué hallazgo muestra?', pressure: 'pulsus-paradoxus', options: ['Pulso paradójico: caída sistólica > 10 mmHg en inspiración', 'Pulso alternante por disfunción grave del VI', 'Pulso bisferiens', 'Pulso parvus et tardus'], answer: 0, explain: 'En el taponamiento el VD se llena en inspiración a costa del VI (interdependencia), y la sistólica arterial cae más de 10 mmHg.' },
            { type: 'mc', prompt: 'Curva aórtica con balón de contrapulsación en modo 1:2. ¿Qué ocurre en el latido asistido?', pressure: 'iabp', options: ['Aumento diastólico y menor telediastólica y sistólica del latido siguiente', 'Aumento de la sistólica y de la telediastólica', 'Desaparece la incisura dícrota sin cambios de presión', 'Aumenta la poscarga del VI'], answer: 0, explain: 'El balón se infla en la incisura (aumenta la perfusión coronaria diastólica) y se desinfla justo antes de la sístole, reduciendo la poscarga.' },
            { type: 'tf', prompt: 'Si el balón de contrapulsación se infla antes del cierre aórtico (inflado precoz), aumenta la poscarga del VI y puede causar insuficiencia aórtica.', answer: true, explain: 'El inflado debe coincidir con la incisura dícrota; el inflado precoz cierra antes la válvula y el desinflado tardío también aumenta la poscarga.' },
            { type: 'mc', prompt: 'Con adenosina, la Pd/Pa baja de 0,93 a 0,72. ¿Cómo se interpreta?', pressure: 'ffr', options: ['Estenosis funcionalmente significativa (FFR ≤ 0,80)', 'Estenosis no significativa', 'Error de calibración: la FFR no puede bajar con adenosina', 'Indica disfunción microvascular aislada'], answer: 0, explain: 'La FFR es la Pd/Pa en hiperemia máxima; ≤ 0,80 identifica isquemia y justifica revascularizar (FAME). Los índices en reposo (iFR/RFR) usan ≤ 0,89.' },
            { type: 'mc', prompt: 'VI y VD con dip-plateau, telediastólica del VI ≈ 10 mmHg mayor que la del VD y sistólicas que varían en paralelo con la respiración. Lo más probable es…', pressure: 'restriction-lv-rv', options: ['Miocardiopatía restrictiva', 'Pericarditis constrictiva', 'Taponamiento cardiaco', 'Normalidad'], answer: 0, explain: 'Diastólicas separadas (> 5 mmHg), PSVD > 50 mmHg y variación concordante orientan a restricción; la constricción iguala diastólicas y muestra discordancia.' },
          ],
        },
      ],
    },
    {
      id: 'cate-u8',
      title: 'Intervencionismo estructural y seguridad',
      guide: {
        intro: 'El intervencionismo estructural trata válvulas y defectos sin cirugía abierta; exige planificación con imagen y Heart Team. La seguridad (radiación, contraste, accesos) protege a paciente y equipo.',
        sections: [
          {
            title: 'TAVI',
            points: [
              'ESC/EACTS 2025: en estenosis aórtica grave con válvula tricúspide, TAVI transfemoral a partir de 70 años si la anatomía es apta, con independencia del riesgo quirúrgico; decide el Heart Team.',
              'Angio-TC previa: tamaño del anillo, altura de los ostia coronarios, senos de Valsalva y accesos iliofemorales.',
              'Complicaciones: BAV con necesidad de marcapasos (BRD previo, implante profundo, autoexpandibles), fuga paravalvular, oclusión coronaria, rotura anular y vasculares.',
            ],
          },
          {
            title: 'TEER, orejuela y defectos septales',
            points: [
              'TEER mitral en IM secundaria ventricular grave sintomática pese a tratamiento óptimo y criterios tipo COAPT (clase I en ESC/EACTS 2025); también en IM primaria de alto riesgo quirúrgico.',
              'TEER tricuspídea mejora síntomas y calidad de vida en IT grave sintomática (TRILUMINATE).',
              'Cierre de orejuela en FA con contraindicación a la anticoagulación a largo plazo.',
              'Cierre de FOP en ≤ 60 años con ictus criptogénico y FOP de alto riesgo; cierre percutáneo de CIA solo tipo ostium secundum con bordes adecuados.',
            ],
          },
          {
            title: 'Radioprotección, contraste y accesos',
            points: [
              'ALARA: tiempo mínimo, máxima distancia (ley del inverso del cuadrado), blindaje (mampara, faldón, delantal, gafas plomadas), colimación y fluoroscopia de baja tasa.',
              'Detector cerca del paciente y tubo lejos; las proyecciones OAI muy anguladas y laterales dan más dosis al operador.',
              'Límites (Euratom 2013/59, RD 1029/2022): 20 mSv/año de dosis efectiva y 20 mSv/año en cristalino.',
              'Nefropatía por contraste: hidratación isotónica en riesgo y mínimo volumen; N-acetilcisteína no recomendada. Pseudoaneurisma femoral: compresión o trombina ecoguiada.',
            ],
            tip: 'Duplicar la distancia a la fuente reduce la dosis a la cuarta parte.',
          },
        ],
      },
      lessons: [
        {
          id: 'cate-u8-l1',
          title: 'TAVI',
          questions: [
            { type: 'mc', prompt: 'ESC/EACTS 2025: en estenosis aórtica grave tricúspide con acceso femoral, ¿a partir de qué edad se orienta preferentemente a TAVI?', options: ['≈ 70 años', '≈ 75 años', '≈ 80 años', '≈ 65 años'], answer: 0, explain: 'ESC/EACTS 2025 recomienda TAVI en ≥ 70 años con válvula tricúspide y anatomía apta para acceso femoral, con independencia del riesgo quirúrgico (75 años en 2021). Decide el Heart Team.' },
            { type: 'mc', prompt: '¿Qué aporta sobre todo la angio-TC en la planificación de la TAVI?', options: ['Anillo, altura coronaria y accesos iliofemorales', 'Gradiente medio transvalvular', 'Reserva contráctil del VI', 'Anatomía de las venas pulmonares'], answer: 0, explain: 'La TC permite elegir tamaño y tipo de prótesis, prever la oclusión coronaria y decidir si el acceso transfemoral es viable.' },
            { type: 'match', prompt: 'Relaciona la complicación de la TAVI con su factor de riesgo', pairs: [['Oclusión coronaria', 'Ostium bajo y senos estrechos'], ['Marcapasos definitivo', 'BRD previo e implante profundo'], ['Fuga paravalvular', 'Calcio asimétrico o infradimensión'], ['Rotura anular', 'Balón expandible en TSVI calcificado']], explain: 'La TC previa identifica la mayoría de estos riesgos y orienta la elección de prótesis y la técnica de protección.' },
            { type: 'tf', prompt: 'La necesidad de marcapasos tras TAVI es más frecuente con prótesis autoexpandibles que con balón expandibles.', answer: true, explain: 'Se relaciona con la fuerza radial sobre el sistema de conducción y la profundidad de implante; el BRD previo es el mayor predictor.' },
            { type: 'tf', prompt: 'La fuga paravalvular moderada o grave tras TAVI no tiene impacto pronóstico.', answer: false, explain: 'Se asocia a mayor mortalidad; se corrige con posdilatación, valve-in-valve o cierre percutáneo de la fuga.' },
            { type: 'mc', prompt: 'Una hora tras TAVI transfemoral: hipotensión, dolor lumbar y caída de 3 g/dL de Hb. Sospecha principal:', options: ['Hematoma retroperitoneal por lesión iliofemoral', 'Taponamiento por perforación del VD', 'Oclusión del tronco común', 'Reacción alérgica al contraste'], answer: 0, explain: 'Los introductores grandes favorecen la lesión iliofemoral; se confirma con angiografía/TC y se trata con balón oclusivo, stent cubierto o cirugía.' },
          ],
        },
        {
          id: 'cate-u8-l2',
          title: 'TEER, orejuela y defectos septales',
          questions: [
            { type: 'mc', prompt: 'ESC/EACTS 2025. IM secundaria ventricular grave sintomática pese a tratamiento óptimo, no candidata a cirugía y con criterios tipo COAPT. La TEER tiene recomendación…', options: ['I', 'IIa', 'IIb', 'III'], answer: 0, explain: 'En 2025 sube de IIa a I (nivel A) tras COAPT y RESHAPE-HF2, en pacientes seleccionados (VI no muy dilatado, IM desproporcionada). En la IM secundaria auricular es IIb.' },
            { type: 'tf', prompt: 'COAPT fue positivo y MITRA-FR neutro, en parte porque COAPT incluyó IM más grave en relación con el tamaño del VI.', answer: true, explain: 'Es el concepto de IM "desproporcionada": a más orificio regurgitante para un VI menos dilatado, más beneficio de corregir la válvula.' },
            { type: 'mc', prompt: '¿Qué paciente con FA es el candidato típico a cierre percutáneo de orejuela?', options: ['CHA₂DS₂-VA alto con contraindicación a anticoagular', 'CHA₂DS₂-VA 0 con FA paroxística', 'Estenosis mitral reumática moderada', 'Buena tolerancia a anticoagulantes directos'], answer: 0, explain: 'Su indicación principal es el alto riesgo embólico con contraindicación a anticoagulación a largo plazo (p. ej. hemorragia intracraneal).' },
            { type: 'mc', prompt: 'Ictus criptogénico y FOP con aneurisma del septo. ¿Hasta qué edad respaldan los ensayos el cierre?', options: ['≤ 60 años', '≤ 40 años', '≤ 75 años', 'Sin límite de edad'], answer: 0, explain: 'CLOSE, RESPECT y REDUCE incluyeron pacientes hasta 60 años; los mayores tienen más causas alternativas de ictus.' },
            { type: 'tf', prompt: 'La CIA tipo seno venoso suele cerrarse de forma percutánea con dispositivo de doble disco.', answer: false, explain: 'Solo la CIA ostium secundum con bordes adecuados es apta para dispositivo; seno venoso, ostium primum y seno coronario se operan.' },
            { type: 'match', prompt: 'Relaciona cada procedimiento con su ensayo clave', pairs: [['TEER mitral', 'COAPT'], ['TEER tricuspídea', 'TRILUMINATE'], ['Cierre de orejuela', 'PROTECT AF'], ['Cierre de FOP', 'RESPECT']], explain: 'TRILUMINATE mostró mejoría de síntomas y calidad de vida, sin diferencia en mortalidad u hospitalización a 1 año.' },
          ],
        },
        {
          id: 'cate-u8-l3',
          title: 'Radioprotección y contraste',
          questions: [
            { type: 'mc', prompt: 'Si te alejas de 0,5 a 1 m de la fuente de radiación dispersa, tu dosis pasa a ser…', options: ['La cuarta parte', 'La mitad', 'La misma', 'Una octava parte'], answer: 0, explain: 'Ley del inverso del cuadrado: la dosis cae con el cuadrado de la distancia. Un paso atrás protege más que muchos accesorios.' },
            { type: 'mc', prompt: 'Con el operador a la derecha del paciente, ¿qué proyección suele darle más dosis?', options: ['OAI con gran angulación', 'OAD caudal', 'Anteroposterior', 'OAD craneal'], answer: 0, explain: 'En OAI el tubo queda del lado del operador y la dispersión es mayor; la angulación aumenta el espesor atravesado y la dosis.' },
            { type: 'match', prompt: 'Relaciona la medida con su efecto', pairs: [['Colimar', 'Menos volumen irradiado'], ['Detector cerca del paciente', 'Menos dosis y dispersión'], ['Baja tasa de pulsos', 'Menos dosis por segundo'], ['Mampara plomada', 'Blindaje de cabeza y cristalino']], explain: 'ALARA: tiempo, distancia y blindaje, más la optimización técnica del equipo.' },
            { type: 'tf', prompt: 'El límite anual de dosis equivalente en cristalino para trabajadores expuestos es de 20 mSv.', answer: true, explain: 'La Directiva 2013/59/Euratom (traspuesta en el RD 1029/2022) lo bajó de 150 a 20 mSv/año; de ahí la importancia de las gafas plomadas.' },
            { type: 'tf', prompt: 'La N-acetilcisteína está recomendada sistemáticamente para prevenir la nefropatía por contraste.', answer: false, explain: 'No ha demostrado beneficio (ACT, PRESERVE). Lo eficaz es la hidratación isotónica en pacientes de riesgo y minimizar el volumen de contraste.' },
            { type: 'mc', prompt: 'Paciente con anafilaxia previa a contraste yodado que necesita coronariografía urgente. Actitud más adecuada:', options: ['Usar otro contraste yodado con soporte preparado (± premedicación)', 'Contraindicar cualquier contraste yodado', 'Usar gadolinio como contraste coronario', 'Ninguna precaución si es no iónico'], answer: 0, explain: 'Lo eficaz es cambiar de agente y tener soporte anestésico disponible; la premedicación (corticoide y antihistamínico) tiene evidencia limitada y depende del protocolo local. La alergia al marisco no contraindica.' },
          ],
        },
      ],
    },
  ],
};
