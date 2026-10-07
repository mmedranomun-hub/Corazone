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
  ],
};
