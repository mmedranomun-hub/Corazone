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
            { type: 'tf', prompt: 'En la fibrilación auricular desaparece la onda a.', answer: true, explain: 'No hay contracción auricular organizada.' },
            { type: 'mc', prompt: 'El signo de "raíz cuadrada" (dip-plateau) en la curva ventricular es típico de…', options: ['Pericarditis constrictiva / miocardiopatía restrictiva', 'Estenosis aórtica', 'Insuficiencia aórtica', 'Normalidad'], answer: 0, explain: 'Interdependencia ventricular discordante orienta a constricción frente a restricción.' },
            { type: 'mc', prompt: 'Ondas a "en cañón" en la presión venosa sugieren…', options: ['Disociación AV (p. ej. BAV completo)', 'Fibrilación auricular', 'Insuficiencia tricuspídea', 'Hipovolemia'], answer: 0, explain: 'La aurícula se contrae contra la tricúspide cerrada.' },
          ],
        },
      ],
    },
  ],
};
