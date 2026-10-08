export default {
  id: 'ecg',
  title: 'ECG',
  subtitle: 'Electrocardiografía',
  icon: '⚡',
  color: '#e5484d',
  units: [
    {
      id: 'ecg-u1',
      title: 'Fundamentos',
      lessons: [
        {
          id: 'ecg-u1-l1',
          title: 'El papel del ECG',
          questions: [
            { type: 'mc', prompt: 'A velocidad estándar (25 mm/s), ¿cuánto dura un cuadradito pequeño (1 mm)?', options: ['40 ms', '200 ms', '20 ms', '100 ms'], answer: 0, explain: '1 s / 25 mm = 0,04 s = 40 ms por mm. Un cuadrado grande (5 mm) son 200 ms.' },
            { type: 'mc', prompt: 'Con calibración estándar, 10 mm de altura equivalen a…', options: ['1 mV', '0,1 mV', '10 mV', '0,5 mV'], answer: 0, explain: 'La ganancia estándar es 10 mm/mV.' },
            { type: 'mc', prompt: 'Regla rápida: si entre dos R hay 3 cuadrados grandes, la FC es aproximadamente…', options: ['100 lpm', '75 lpm', '150 lpm', '60 lpm'], answer: 0, explain: 'FC ≈ 300 / nº de cuadrados grandes: 300, 150, 100, 75, 60, 50…' },
            { type: 'tf', prompt: 'Un cuadrado grande del papel de ECG equivale a 0,2 segundos.', answer: true, explain: '5 mm × 40 ms = 200 ms.' },
            { type: 'match', prompt: 'Relaciona nº de cuadrados grandes entre R-R con la FC', pairs: [['1', '300 lpm'], ['2', '150 lpm'], ['4', '75 lpm'], ['5', '60 lpm']], explain: 'Secuencia 300-150-100-75-60-50.' },
            { type: 'mc', prompt: 'En un ritmo irregular, ¿cuál es el mejor método para estimar la FC?', options: ['Contar QRS en 10 s (tira completa) × 6', '300 / cuadrados grandes', '1500 / cuadrados pequeños', 'Medir un solo RR'], answer: 0, explain: 'Con RR variable, los métodos basados en un único intervalo fallan; se cuentan los QRS de 10 s y se multiplica por 6.' },
          ],
        },
        {
          id: 'ecg-u1-l2',
          title: 'Ondas e intervalos',
          questions: [
            { type: 'match', prompt: 'Relaciona cada onda con lo que representa', pairs: [['Onda P', 'Despolarización auricular'], ['Complejo QRS', 'Despolarización ventricular'], ['Onda T', 'Repolarización ventricular'], ['Intervalo PR', 'Conducción AV']] },
            { type: 'mc', prompt: '¿Cuál es el rango normal del intervalo PR?', options: ['120–200 ms', '80–120 ms', '200–300 ms', '350–450 ms'], answer: 0, explain: 'PR < 120 ms sugiere preexcitación; > 200 ms, BAV de 1er grado.' },
            { type: 'mc', prompt: 'Un QRS se considera ancho cuando mide…', options: ['≥ 120 ms', '≥ 80 ms', '≥ 200 ms', '≥ 60 ms'], answer: 0, explain: 'QRS ≥ 120 ms (3 cuadraditos): bloqueo de rama, origen ventricular, preexcitación o fármacos/iones.' },
            { type: 'tf', prompt: 'La repolarización auricular suele quedar oculta dentro del QRS.', answer: true, explain: 'La onda Ta coincide en el tiempo con el QRS, por eso no se ve habitualmente.' },
            { type: 'mc', prompt: '¿Por qué se corrige el QT por la frecuencia cardiaca (QTc)?', options: ['Porque el QT se acorta al aumentar la FC', 'Porque el QT se alarga con taquicardia', 'Porque depende del eje', 'Por convención, sin motivo fisiológico'], answer: 0, explain: 'El QT varía inversamente con la FC. Bazett: QTc = QT / √RR (en segundos).' },
            { type: 'mc', prompt: 'Observa la tira. ¿Qué ritmo es?', ecg: 'sinus', options: ['Ritmo sinusal normal', 'Fibrilación auricular', 'Bradicardia sinusal', 'Flutter auricular'], answer: 0, explain: 'P antes de cada QRS, PR normal, RR regular y FC ~75 lpm.' },
            { type: 'mc', prompt: 'La estructura resaltada retrasa fisiológicamente el impulso. ¿Con qué parte del ECG se corresponde ese retraso?', diagram: { id: 'conduction', highlight: 'av' }, options: ['Segmento PR', 'Complejo QRS', 'Segmento ST', 'Onda T'], answer: 0, explain: 'El nodo AV concentra la mayor parte del retraso entre aurículas y ventrículos; por eso el PR (120–200 ms) se alarga en el BAV de primer grado.' },
          ],
        },
        {
          id: 'ecg-u1-l3',
          title: 'Derivaciones y eje',
          questions: [
            { type: 'match', prompt: 'Relaciona derivaciones con la cara que exploran', pairs: [['II, III, aVF', 'Inferior'], ['V1–V2', 'Septal'], ['V3–V4', 'Anterior'], ['I, aVL, V5–V6', 'Lateral']] },
            { type: 'mc', prompt: 'QRS positivo en I y positivo en aVF. El eje es…', options: ['Normal (0° a +90°)', 'Desviado a la izquierda', 'Desviado a la derecha', 'Extremo (tierra de nadie)'], answer: 0, explain: 'Método de los cuadrantes: I(+) y aVF(+) → cuadrante inferior izquierdo, eje normal.' },
            { type: 'mc', prompt: 'QRS positivo en I y negativo en aVF (y en II). El eje es…', options: ['Desviado a la izquierda', 'Normal', 'Desviado a la derecha', 'Indeterminado'], answer: 0, explain: 'Típico del hemibloqueo anterior izquierdo (eje < −30°).' },
            { type: 'tf', prompt: 'aVR suele ser negativa en un ECG normal.', answer: true, explain: 'aVR mira al corazón "desde arriba a la derecha"; el vector medio se aleja de ella.' },
            { type: 'mc', prompt: '¿Cuántas derivaciones tiene el ECG estándar?', options: ['12', '10', '6', '15'], answer: 0, explain: '6 de miembros (I, II, III, aVR, aVL, aVF) y 6 precordiales (V1–V6), registradas con 10 electrodos.' },
          ],
        },
        {
          id: 'ecg-u1-l4',
          title: 'Toca la onda',
          questions: [
            { type: 'tap', prompt: 'Toca una onda P', ecg: 'sinus', wave: 'p', explain: 'La P es la pequeña onda redondeada que precede a cada QRS: despolarización auricular.' },
            { type: 'tap', prompt: 'Toca un complejo QRS', ecg: 'sinus', wave: 'qrs', explain: 'El QRS es la deflexión rápida y alta: despolarización ventricular.' },
            { type: 'tap', prompt: 'Toca una onda T', ecg: 'sinus', wave: 't', explain: 'La T sigue al QRS tras el segmento ST: repolarización ventricular.' },
            { type: 'tap', prompt: 'Toca una onda T picuda', ecg: 'hyperk', wave: 't', explain: 'T alta, estrecha y simétrica: sospecha hiperpotasemia y pide potasio urgente.' },
            { type: 'tap', prompt: 'Toca la onda P que no conduce', ecg: 'mobitz2', wave: 'pBlocked', explain: 'P sin QRS detrás, con PR constante en los latidos conducidos: Mobitz II.' },
            { type: 'tap', prompt: 'Toca la extrasístole ventricular', ecg: 'pvc', wave: 'vent', explain: 'Latido prematuro, ancho y sin P previa.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u2',
      title: 'Arritmias',
      lessons: [
        {
          id: 'ecg-u2-l1',
          title: 'Ritmos supraventriculares',
          questions: [
            { type: 'mc', prompt: '¿Qué ritmo muestra esta tira?', ecg: 'afib', options: ['Fibrilación auricular', 'Flutter auricular', 'Ritmo sinusal con extrasístoles', 'Taquicardia ventricular'], answer: 0, explain: 'Irregularmente irregular, sin ondas P y con ondas f en la línea de base.' },
            { type: 'mc', prompt: '¿Qué ritmo muestra esta tira?', ecg: 'flutter', options: ['Flutter auricular 2:1', 'Fibrilación auricular', 'Taquicardia sinusal', 'Bloqueo AV 2:1'], answer: 0, explain: 'Ondas F en dientes de sierra a ~300/min; conducción 2:1 → ~150 lpm.' },
            { type: 'tf', prompt: 'Una taquicardia regular a exactamente 150 lpm debe hacerte pensar en flutter 2:1.', answer: true, explain: 'Es un clásico: 300/2 = 150. Busca las ondas F en II, III, aVF y V1.' },
            { type: 'mc', prompt: '¿Qué ritmo muestra esta tira?', ecg: 'svt', options: ['Taquicardia supraventricular', 'Taquicardia ventricular', 'Fibrilación ventricular', 'Flutter 4:1'], answer: 0, explain: 'Taquicardia regular, QRS estrecho, sin P visibles: típico de TRIN.' },
            { type: 'mc', prompt: 'Primera medida en una TSV estable:', options: ['Maniobras vagales', 'Cardioversión eléctrica', 'Amiodarona IV', 'Desfibrilación'], answer: 0, explain: 'Vagales (Valsalva modificada) y, si fallan, adenosina IV.' },
            { type: 'mc', prompt: 'La escala CHA₂DS₂-VA en la FA estima…', options: ['Riesgo de ictus', 'Riesgo de sangrado', 'Probabilidad de cardioversión exitosa', 'Riesgo de muerte súbita'], answer: 0, explain: 'Guía la anticoagulación; la ESC 2024 retira el sexo de la antigua CHA₂DS₂-VASc. El riesgo hemorrágico se valora con HAS-BLED.' },
          ],
        },
        {
          id: 'ecg-u2-l2',
          title: 'Bloqueos AV',
          questions: [
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'avb1', options: ['BAV de 1er grado', 'BAV Mobitz I', 'BAV completo', 'Ritmo sinusal normal'], answer: 0, explain: 'PR constante > 200 ms y todas las P conducen.' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'mobitz1', options: ['BAV 2º grado Mobitz I', 'BAV 2º grado Mobitz II', 'BAV de 1er grado', 'Fibrilación auricular'], answer: 0, explain: 'El PR se alarga progresivamente hasta que una P no conduce (Wenckebach).' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'mobitz2', options: ['BAV 2º grado Mobitz II', 'BAV 2º grado Mobitz I', 'Bradicardia sinusal', 'Extrasístoles auriculares bloqueadas'], answer: 0, explain: 'PR constante y una P bloqueada súbitamente.' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'avb3', options: ['BAV completo', 'BAV Mobitz II', 'Ritmo idioventricular acelerado', 'Bradicardia sinusal'], answer: 0, explain: 'Disociación AV: las P "marchan" independientes de los QRS de escape.' },
            { type: 'match', prompt: 'Relaciona cada bloqueo con su característica', pairs: [['1er grado', 'PR > 200 ms fijo'], ['Mobitz I', 'PR que se alarga'], ['Mobitz II', 'PR fijo y P bloqueada'], ['3er grado', 'Disociación AV']] },
            { type: 'tf', prompt: 'El Mobitz II tiene peor pronóstico que el Mobitz I.', answer: true, explain: 'Suele ser infrahisiano y puede progresar a BAV completo: indicación de marcapasos.' },
          ],
        },
        {
          id: 'ecg-u2-l3',
          title: 'Ritmos ventriculares y parada',
          questions: [
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'pvc', options: ['Extrasístole ventricular', 'Extrasístole auricular', 'BAV Mobitz II', 'Fibrilación auricular'], answer: 0, explain: 'Latido prematuro, ancho y sin P, con pausa compensadora.' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'vt', options: ['Taquicardia ventricular', 'Taquicardia sinusal', 'Flutter auricular', 'Fibrilación ventricular'], answer: 0, explain: 'Taquicardia regular de QRS ancho: asume TV hasta demostrar lo contrario.' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'vf', options: ['Fibrilación ventricular', 'Asistolia', 'Fibrilación auricular', 'Torsade de pointes'], answer: 0, explain: 'Actividad caótica sin QRS: RCP + desfibrilación inmediata.' },
            { type: 'mc', prompt: '¿Cuál de estos ritmos de parada es desfibrilable?', options: ['FV', 'Asistolia', 'AESP', 'Bradicardia extrema'], answer: 0, explain: 'Desfibrilables: FV y TV sin pulso. No desfibrilables: asistolia y AESP.' },
            { type: 'mc', prompt: '¿Qué muestra esta tira?', ecg: 'asystole', options: ['Asistolia', 'Fibrilación ventricular fina', 'Bradicardia extrema', 'BAV completo'], answer: 0, explain: 'Línea prácticamente plana. Comprueba conexiones y ganancia antes de confirmar.' },
            { type: 'tf', prompt: 'En una TV con pulso e inestabilidad hemodinámica, el tratamiento es la cardioversión eléctrica sincronizada.', answer: true, explain: 'Si está inestable: cardioversión sincronizada. Sin pulso: desfibrilación.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u3',
      title: 'Isquemia y patrones',
      lessons: [
        {
          id: 'ecg-u3-l1',
          title: 'Síndrome coronario agudo',
          questions: [
            { type: 'mc', prompt: '¿Qué alteración muestra esta tira?', ecg: 'stemi', options: ['Elevación del ST', 'Descenso del ST', 'Ondas T picudas', 'QT largo'], answer: 0, explain: 'Supradesnivel convexo del ST: en contexto de dolor torácico, activar código infarto.' },
            { type: 'mc', prompt: 'Elevación del ST en II, III y aVF sugiere oclusión de…', options: ['Coronaria derecha (o circunfleja)', 'Descendente anterior proximal', 'Tronco común', 'Primera diagonal'], answer: 0, explain: 'Cara inferior: CD en ~80 % de los casos (dominancia derecha), si no Cx.' },
            { type: 'mc', prompt: 'Elevación del ST en V1–V4 sugiere oclusión de…', options: ['Descendente anterior', 'Coronaria derecha', 'Circunfleja', 'Marginal obtusa'], answer: 0, explain: 'Cara anterior/anteroseptal → DA.' },
            { type: 'mc', prompt: '¿Qué alteración muestra esta tira?', ecg: 'stdep', options: ['Descenso del ST', 'Elevación del ST', 'Onda delta', 'Bloqueo de rama izquierda'], answer: 0, explain: 'Infradesnivel del ST: isquemia subendocárdica o imagen especular.' },
            { type: 'tf', prompt: 'En un IAM inferior conviene registrar derivaciones derechas (V3R–V4R).', answer: true, explain: 'La elevación del ST en V4R indica afectación del VD: evitar nitratos y asegurar precarga.' },
            { type: 'mc', prompt: 'Tiempo máximo desde el diagnóstico de IAMCEST hasta el paso de la guía para preferir la ICP primaria a la fibrinólisis:', options: ['120 min', '6 horas', '24 horas', '30 min'], answer: 0, explain: 'Si se prevé que la ICP primaria supere los 120 min, se indica fibrinólisis (en < 10 min desde el diagnóstico).' },
          ],
        },
        {
          id: 'ecg-u3-l2',
          title: 'Patrones que no debes olvidar',
          questions: [
            { type: 'mc', prompt: '¿Qué patrón muestra esta tira?', ecg: 'hyperk', options: ['Hiperpotasemia', 'Hipopotasemia', 'Hipercalcemia', 'Pericarditis'], answer: 0, explain: 'T picudas, estrechas y simétricas.' },
            { type: 'mc', prompt: '¿Qué patrón muestra esta tira?', ecg: 'wpw', options: ['Preexcitación (WPW)', 'BAV de 1er grado', 'Bloqueo de rama derecha', 'Ritmo sinusal normal'], answer: 0, explain: 'PR corto + onda delta: vía accesoria.' },
            { type: 'mc', prompt: '¿Qué patrón muestra esta tira?', ecg: 'lbbb', options: ['Bloqueo de rama izquierda', 'Taquicardia ventricular', 'Hiperpotasemia', 'Preexcitación'], answer: 0, explain: 'QRS ancho y mellado, con repolarización discordante.' },
            { type: 'mc', prompt: '¿Qué patrón muestra esta tira?', ecg: 'longqt', options: ['QT largo', 'Hipercalcemia', 'Ritmo sinusal normal', 'Elevación del ST'], answer: 0, explain: 'El QT ocupa más de la mitad del RR: QTc prolongado.' },
            { type: 'match', prompt: 'Relaciona alteración con su hallazgo', pairs: [['Hipopotasemia', 'Ondas U'], ['Hipercalcemia', 'QT corto'], ['Pericarditis', 'ST difuso + PR descendido'], ['TEP', 'S1Q3T3']] },
            { type: 'tf', prompt: 'En una FA preexcitada (WPW) están indicados el verapamilo y la digoxina.', answer: false, explain: 'Al frenar el nodo AV favorecen la conducción por la vía accesoria → riesgo de FV. Usar procainamida o cardioversión.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u4',
      title: 'ECG de 12 derivaciones',
      lessons: [
        {
          id: 'ecg-u4-l1',
          title: 'Localiza el infarto',
          questions: [
            { type: 'mc', prompt: '¿Qué cara está afectada?', ecg12: 'stemi-inf', options: ['Inferior', 'Anterior', 'Lateral', 'Ninguna: es una pericarditis'], answer: 0, explain: 'ST elevado en II, III y aVF con descenso especular en I y aVL.' },
            { type: 'mc', prompt: 'En este ECG, ¿qué arteria es la responsable más probable?', ecg12: 'stemi-inf', options: ['Coronaria derecha', 'Descendente anterior', 'Primera diagonal', 'Tronco común'], answer: 0, explain: 'ST en III > II y descenso en I/aVL orientan a CD; si II ≥ III y ST elevado en I/aVL/V5–V6, pensar en circunfleja.' },
            { type: 'mc', prompt: '¿Qué cara está afectada?', ecg12: 'stemi-ant', options: ['Anterior', 'Inferior', 'Lateral alta', 'Posterior'], answer: 0, explain: 'Elevación del ST de V1 a V4: territorio de la descendente anterior.' },
            { type: 'mc', prompt: '¿Qué cara está afectada?', ecg12: 'stemi-lat', options: ['Lateral', 'Inferior', 'Anteroseptal', 'Ventrículo derecho'], answer: 0, explain: 'ST elevado en I, aVL, V5 y V6, con imagen especular inferior.' },
            { type: 'mc', prompt: 'ST elevado difuso y cóncavo, PR descendido y aVR al revés. Diagnóstico:', ecg12: 'pericarditis', options: ['Pericarditis aguda', 'IAMCEST anterior', 'Repolarización precoz', 'Hiperpotasemia'], answer: 0, explain: 'La elevación no respeta territorios coronarios, no hay imagen especular (salvo aVR/V1) y el PR está descendido.' },
            { type: 'tf', prompt: 'En un IAMCEST, la elevación del ST suele acompañarse de descenso especular en las derivaciones opuestas.', answer: true, explain: 'La imagen especular apoya el origen isquémico frente a pericarditis o repolarización precoz.' },
          ],
        },
        {
          id: 'ecg-u4-l2',
          title: 'Eje, hipertrofia y bloqueos de rama',
          questions: [
            { type: 'mc', prompt: '¿Cómo es el eje de este ECG?', ecg12: 'normal', options: ['Normal', 'Desviado a la izquierda', 'Desviado a la derecha', 'Indeterminado'], answer: 0, explain: 'QRS positivo en I y en aVF: eje entre 0° y +90°.' },
            { type: 'mc', prompt: '¿Cómo es el eje de este ECG?', ecg12: 'lad', options: ['Desviado a la izquierda', 'Normal', 'Desviado a la derecha', 'Indeterminado'], answer: 0, explain: 'Positivo en I y negativo en II y aVF: eje < −30°. Causa típica: hemibloqueo anterior izquierdo.' },
            { type: 'mc', prompt: '¿Cómo es el eje de este ECG?', ecg12: 'rad', options: ['Desviado a la derecha', 'Desviado a la izquierda', 'Normal', 'Extremo'], answer: 0, explain: 'Negativo en I y positivo en aVF: eje > +90°.' },
            { type: 'mc', prompt: '¿Qué muestra este ECG?', ecg12: 'lvh', options: ['Hipertrofia ventricular izquierda con sobrecarga', 'IAMCEST lateral', 'Bloqueo de rama izquierda', 'ECG normal de deportista'], answer: 0, explain: 'S profunda en V1–V2 y R alta en V5–V6 (Sokolow ≥ 35 mm) con ST-T "strain" lateral.' },
            { type: 'mc', prompt: '¿Qué muestra este ECG?', ecg12: 'rbbb', options: ['Bloqueo de rama derecha', 'Bloqueo de rama izquierda', 'Preexcitación', 'Brugada tipo 1'], answer: 0, explain: "rSR' en V1–V2 y S ancha y empastada en I y V6." },
            { type: 'mc', prompt: '¿Qué muestra este ECG?', ecg12: 'lbbb12', options: ['Bloqueo de rama izquierda', 'Bloqueo de rama derecha', 'Hipertrofia de VI', 'Taquicardia ventricular'], answer: 0, explain: 'QRS ancho con R mellada en I, aVL, V5–V6, QS en V1–V3 y repolarización discordante.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u5',
      title: 'Crecimientos de cavidades',
      guide: {
        intro: 'El ECG detecta crecimientos de cavidades con alta especificidad pero baja sensibilidad: un ECG normal no descarta hipertrofia (la eco o la RM la confirman). Aprende los criterios de voltaje y los signos que los acompañan.',
        sections: [
          {
            title: 'Crecimientos auriculares',
            points: [
              'P normal: < 120 ms de duración y < 2,5 mm de altura en II; en V1 suele ser bifásica (componente inicial = AD, terminal = AI).',
              'Crecimiento de AD ("P pulmonale"): P alta y picuda > 2,5 mm en II, III y aVF. Causas: EPOC, hipertensión pulmonar, cardiopatías congénitas.',
              'Crecimiento de AI ("P mitrale"): P ≥ 120 ms, bimodal en II y componente negativo terminal en V1 ≥ 1 mm × 40 ms (índice de Morris).',
              'La AI dilatada (valvulopatía mitral, HTA, disfunción diastólica) es el sustrato de la fibrilación auricular.',
            ],
            tip: 'Derecha = alta (amplitud); izquierda = larga (duración).',
          },
          {
            title: 'Hipertrofia ventricular izquierda (HVI)',
            points: [
              'Sokolow-Lyon: S V1 + R V5 o V6 ≥ 35 mm.',
              'Cornell: R aVL + S V3 > 28 mm en varones y > 20 mm en mujeres. Una R aislada en aVL ≥ 11 mm también es criterio.',
              'Patrón de sobrecarga ("strain"): ST descendido y T negativa asimétrica en I, aVL y V5–V6; se asocia a peor pronóstico.',
              'Sensibilidad baja (≈ 20–50 %) y especificidad alta: la obesidad, la EPOC o el derrame reducen el voltaje.',
            ],
            tip: 'Voltaje alto aislado en un joven deportista es fisiológico; voltaje + sobrecarga, Q o T negativas obligan a estudiar.',
          },
          {
            title: 'Hipertrofia ventricular derecha (HVD) y R alta en V1',
            points: [
              'HVD: R dominante en V1 (R/S > 1), S profundas en V5–V6, eje > +90° y sobrecarga (ST ↓ y T −) en V1–V3; a menudo P pulmonale.',
              'Causas: hipertensión pulmonar, TEP crónico, estenosis pulmonar y cardiopatías congénitas.',
              'Diferencial de R alta en V1: BRD, IAM posterior, WPW con vía izquierda, HVD, MCH, distrofia de Duchenne, dextrocardia, electrodos mal colocados y la infancia.',
            ],
            tip: 'R alta en V1 con descenso del ST y dolor torácico: piensa en IAM posterior y registra V7–V9.',
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u5-l1',
          title: 'Crecimientos auriculares',
          questions: [
            { type: 'tap', prompt: 'Toca una onda P: es la que valoras para buscar crecimientos auriculares', ecg: 'sinus', wave: 'p', explain: 'La P refleja la despolarización auricular; en II debe medir < 2,5 mm de altura y < 120 ms de duración.' },
            { type: 'mc', prompt: 'Una onda P de 3 mm de altura y 100 ms de duración en II sugiere…', options: ['Crecimiento de aurícula derecha', 'Crecimiento de aurícula izquierda', 'Bloqueo interauricular', 'Onda P normal'], answer: 0, explain: 'La AD se manifiesta con P altas y picudas (> 2,5 mm en II): "P pulmonale". La duración normal no apoya crecimiento de AI.' },
            { type: 'mc', prompt: '¿Qué hallazgo en V1 indica crecimiento de aurícula izquierda?', options: ['Componente negativo terminal ≥ 1 mm × 40 ms', 'Onda P positiva y picuda > 1,5 mm', 'Ausencia de P con ondas f', 'PR corto con onda delta'], answer: 0, explain: 'La AI se despolariza al final y hacia atrás: en V1 genera un componente negativo terminal amplio y profundo (índice de Morris).' },
            { type: 'match', prompt: 'Relaciona el hallazgo con su significado', pairs: [['P > 2,5 mm en II', 'Crecimiento de AD'], ['P bimodal ≥ 120 ms en II', 'Crecimiento de AI'], ['Sin P, con ondas f', 'Fibrilación auricular'], ['P negativa en II tras el QRS', 'Ritmo de la unión']], explain: 'La morfología y la posición de la P orientan sobre qué aurícula está crecida o de dónde nace el ritmo.' },
            { type: 'tf', prompt: 'La P mitrale se asocia típicamente a la EPOC y a la hipertensión pulmonar.', answer: false, explain: 'Esas causas dan P pulmonale (AD). La P mitrale traduce sobrecarga de la AI: valvulopatía mitral, HTA o disfunción diastólica.' },
            { type: 'mc', prompt: 'Mujer de 58 años con estenosis mitral reumática y P mitrale en ECG previos consulta por palpitaciones. Observa la tira. ¿Qué ritmo presenta?', ecg: 'afib', options: ['Fibrilación auricular', 'Flutter auricular 2:1', 'Taquicardia sinusal', 'Bigeminismo ventricular'], answer: 0, explain: 'RR irregularmente irregular sin P: FA, cuyo sustrato es la AI dilatada. Con estenosis mitral moderada-grave se anticoagula con antivitamina K, no con ACOD.' },
          ],
        },
        {
          id: 'ecg-u5-l2',
          title: 'Hipertrofia ventricular izquierda',
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Qué criterio de voltaje se cumple?', ecg12: 'lvh', options: ['Sokolow-Lyon (S V1 + R V5/V6 ≥ 35 mm)', 'R/S > 1 en V1', 'QRS < 5 mm en miembros', 'P negativa terminal en V1'], answer: 0, explain: 'S profunda en V1 y R alta en V5–V6 suman ≥ 35 mm. El patrón de sobrecarga lateral refuerza el diagnóstico de HVI.' },
            { type: 'mc', prompt: 'Mujer de 70 años: R en aVL de 9 mm y S en V3 de 15 mm. Según el criterio de Cornell…', options: ['Cumple criterio de HVI (> 20 mm en mujeres)', 'No cumple: el umbral es > 28 mm', 'No cumple: el umbral es ≥ 35 mm', 'No valorable: solo se aplica a varones'], answer: 0, explain: 'Cornell: R aVL + S V3 > 28 mm en varones y > 20 mm en mujeres. Aquí suma 24 mm. El umbral de 35 mm es el de Sokolow-Lyon.' },
            { type: 'tf', prompt: 'El descenso del ST con T negativa asimétrica en V5–V6 de este ECG es un patrón de sobrecarga y no indica por sí solo isquemia aguda.', ecg12: 'lvh', answer: true, explain: 'El "strain" refleja la repolarización anómala del VI hipertrofiado. Compara con ECG previos y con la clínica antes de atribuirlo a isquemia.' },
            { type: 'tf', prompt: 'Un ECG sin criterios de voltaje descarta la hipertrofia ventricular izquierda.', answer: false, explain: 'Los criterios son específicos pero poco sensibles (≈ 20–50 %): obesidad, EPOC o derrame atenúan los voltajes. La eco o la RM confirman la HVI.' },
            { type: 'match', prompt: 'Relaciona el criterio con su definición', pairs: [['Sokolow-Lyon', 'S V1 + R V5/V6 ≥ 35 mm'], ['Cornell (varón)', 'R aVL + S V3 > 28 mm'], ['R aislada en aVL', '≥ 11 mm'], ['Sobrecarga', 'ST ↓ y T − en V5–V6']], explain: 'Ningún criterio aislado es sensible; combinarlos (y añadir la sobrecarga o el crecimiento de AI) aumenta el rendimiento.' },
            { type: 'mc', prompt: 'Varón de 19 años, futbolista, asintomático: bradicardia sinusal y Sokolow de 40 mm sin alteraciones de ST-T ni ondas Q. ¿Actitud?', options: ['Hallazgo normal del deportista: no precisa más estudios', 'Ecocardiograma urgente por probable MCH', 'Contraindicar el deporte hasta tener RM', 'Repetir el ECG con derivaciones posteriores'], answer: 0, explain: 'Criterios internacionales 2017: el voltaje aislado de HVI es una adaptación fisiológica. T negativas, Q patológicas o ST descendido sí obligan a estudiar.' },
          ],
        },
        {
          id: 'ecg-u5-l3',
          title: 'Hipertrofia ventricular derecha',
          questions: [
            { type: 'mc', prompt: '¿Qué muestra este ECG?', ecg12: 'rvh', options: ['Hipertrofia ventricular derecha', 'Bloqueo de rama derecha', 'IAMCEST posterior', 'Hemibloqueo anterior izquierdo'], answer: 0, explain: 'R alta en V1 (R/S > 1) con QRS estrecho, S profundas en V5–V6, eje derecho y sobrecarga en V1–V3.' },
            { type: 'tf', prompt: 'En este ECG el eje está desviado a la derecha (> +90°).', ecg12: 'rvh', answer: true, explain: 'QRS negativo en I y positivo en aVF. En la HVD el eje derecho es casi constante; si falta, el diagnóstico es menos probable.' },
            { type: 'mc', prompt: 'Varón de 62 años con dolor torácico de 1 h. Observa V1–V3. ¿Qué explica la R alta?', ecg12: 'posterior', options: ['IAM posterior (imagen especular)', 'Hipertrofia ventricular derecha', 'Bloqueo de rama derecha', 'Preexcitación con vía izquierda'], answer: 0, explain: 'Descenso horizontal del ST con R alta y T positiva en V1–V3 = espejo de un IAM posterior. Registra V7–V9: elevación ≥ 0,5 mm lo confirma.' },
            { type: 'match', prompt: 'Relaciona la causa de R alta en V1 con su pista', pairs: [['BRD', "rSR' y QRS ≥ 120 ms"], ['IAM posterior', 'ST ↓ en V1–V3 con dolor'], ['WPW con vía izquierda', 'PR corto y onda delta'], ['HVD', 'Eje derecho y P pulmonale']], explain: 'Otras causas: MCH, distrofia de Duchenne, dextrocardia, electrodos mal colocados y la infancia.' },
            { type: 'mc', prompt: 'Joven de 22 años con R dominante en V1 y sin rSR′. La tira de II muestra esto. ¿Qué explica la R alta en V1?', ecg: 'wpw', options: ['Vía accesoria izquierda (WPW)', 'Hipertrofia ventricular derecha', 'Bloqueo de rama derecha', 'IAM posterior antiguo'], answer: 0, explain: 'PR corto y onda delta: preexcitación. Una vía de pared libre izquierda activa antes la región posterobasal y genera R alta en V1.' },
            { type: 'tf', prompt: 'Una R/S > 1 en V1 es normal en recién nacidos y lactantes.', answer: true, explain: 'El predominio fisiológico del VD al nacer da R alta en V1 y eje derecho; se invierte progresivamente durante la infancia.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u6',
      title: 'Bloqueos de rama y fasciculares',
      guide: {
        intro: 'Cuando una rama o un fascículo no conduce, los ventrículos se activan célula a célula: el QRS se ensancha (ramas) o el eje se desvía (fascículos). Importan porque pueden ocultar un infarto o anunciar un BAV completo.',
        sections: [
          {
            title: 'Bloqueo de rama derecha (BRD)',
            points: [
              "QRS ≥ 120 ms con rsR' o rSR' en V1–V2 (R' ancha, \"orejas de conejo\").",
              'S ancha y empastada (> 40 ms) en I y V6.',
              'T negativa en V1–V3 secundaria (discordante): es esperable.',
              'BRD incompleto: misma morfología con QRS 110–119 ms; suele ser normal.',
            ],
            tip: 'El BRD no impide valorar el ST: un IAMCEST se sigue viendo.',
          },
          {
            title: 'Bloqueo de rama izquierda (BRI)',
            points: [
              'QRS ≥ 120 ms, R ancha y mellada en I, aVL y V5–V6, sin q septal; QS o rS en V1–V3.',
              'ST-T discordante con el QRS: es lo esperable y enmascara la isquemia.',
              'Sgarbossa: ST ↑ concordante ≥ 1 mm (5 puntos), ST ↓ ≥ 1 mm en V1–V3 (3) y ST ↑ discordante ≥ 5 mm (2); ≥ 3 puntos es muy específico de IAM.',
              'Smith (Sgarbossa modificado): sustituye el tercer criterio por una proporción ST/S ≤ −0,25.',
              'ESC 2023: con síntomas de isquemia en curso y BRI, BRD o ritmo de marcapasos, estrategia de ICP primaria como en el IAMCEST.',
            ],
            tip: 'Discordancia = esperable; concordancia = sospecha de infarto.',
          },
          {
            title: 'Hemibloqueos y bloqueo bifascicular',
            points: [
              'HBAI: eje entre −45° y −90°, qR en aVL, rS en II, III y aVF, QRS < 120 ms.',
              'HBPI: eje entre +90° y +180°, rS en I y aVL, qR en III y aVF; diagnóstico de exclusión (HVD, TEP, IAM lateral).',
              'Bifascicular: BRD + HBAI (el más frecuente) o BRD + HBPI. El término "trifascicular" es ambiguo; el bloqueo de rama alternante sí demuestra afectación de los tres fascículos.',
              'ESC 2021: bifascicular asintomático, sin marcapasos; síncope + bifascicular → estudio electrofisiológico (HV ≥ 70 ms → marcapasos); rama alternante → marcapasos.',
            ],
            tip: 'Ante bloqueo bifascicular y síncope, piensa en un BAV paroxístico.',
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u6-l1',
          title: 'Bloqueo de rama derecha',
          questions: [
            { type: 'mc', prompt: 'Observa V1 en este ECG. ¿Qué morfología presenta?', ecg12: 'rbbb', options: ["rSR' (\"orejas de conejo\")", 'QS profunda y ancha', 'R monofásica y mellada', 'qR con onda delta'], answer: 0, explain: "La activación tardía del VD genera una R' terminal en V1–V2; en I y V6 aparece su equivalente: una S ancha y empastada." },
            { type: 'mc', prompt: "QRS de 112 ms con rSr' en V1 y S empastada en V6. Diagnóstico:", options: ['BRD incompleto', 'BRD completo', 'Hemibloqueo posterior izquierdo', 'Patrón de Brugada tipo 1'], answer: 0, explain: 'Morfología de BRD con QRS de 110–119 ms = BRD incompleto (AHA/ACCF/HRS 2009). Suele ser una variante normal.' },
            { type: 'tf', prompt: 'En un BRD, las T negativas en V1–V2 obligan a descartar isquemia anterior.', answer: false, explain: "En el BRD la T negativa en V1–V3 es secundaria, discordante con la R' terminal, y esperable. Una T negativa en derivaciones con R dominante sí sería anómala." },
            { type: 'match', prompt: 'Relaciona cada elemento con su hallazgo en el BRD completo', pairs: [['V1–V2', "rSR' con R' ancha"], ['I y V6', 'S ancha y empastada'], ['T en V1–V3', 'Negativa, secundaria'], ['Duración del QRS', '≥ 120 ms']], explain: 'Criterios AHA/ACCF/HRS 2009 para el BRD completo del adulto.' },
            { type: 'tf', prompt: 'Con síntomas de isquemia en curso y BRD, la ESC 2023 recomienda la misma estrategia de ICP primaria que en el IAMCEST.', answer: true, explain: 'El BRD (nuevo o no) dificulta la interpretación y se asocia a peor pronóstico; con isquemia en curso se maneja como IAMCEST.' },
            { type: 'mc', prompt: 'Mujer de 34 años con disnea súbita a los 5 días de una cirugía: taquicardia sinusal, BRD nuevo y T negativas en V1–V4. ¿Sospecha principal?', options: ['Tromboembolismo pulmonar', 'IAMCEST anterior', 'Pericarditis aguda', 'Hiperpotasemia'], answer: 0, explain: 'La sobrecarga aguda del VD produce BRD, S1Q3T3 y T negativas en V1–V4; la taquicardia sinusal es el hallazgo más frecuente.' },
          ],
        },
        {
          id: 'ecg-u6-l2',
          title: 'Bloqueo de rama izquierda y Sgarbossa',
          questions: [
            { type: 'tap', prompt: 'Toca un QRS: fíjate en lo ancho que es', ecg: 'lbbb', wave: 'qrs', explain: 'El QRS dura ≥ 120 ms porque el VI se activa tarde, a través del septo desde el VD; la T va en sentido opuesto (discordante).' },
            { type: 'mc', prompt: 'Observa I, V5 y V6. ¿Qué onda falta respecto a un ECG normal?', ecg12: 'lbbb12', options: ['La q septal', 'La onda P', 'La onda T', 'La onda R'], answer: 0, explain: 'En el BRI el septo se activa de derecha a izquierda: desaparece la q septal en I, V5–V6 y la R se vuelve ancha y mellada.' },
            { type: 'mc', prompt: 'Paciente con BRI y dolor torácico. ¿Qué hallazgo puntúa más en los criterios de Sgarbossa?', options: ['ST elevado ≥ 1 mm concordante con el QRS', 'ST elevado discordante de 3 mm en V2', 'T negativa en I y V6', 'QRS de 160 ms'], answer: 0, explain: 'Concordante ≥ 1 mm = 5 puntos; descenso ≥ 1 mm en V1–V3 = 3; discordante ≥ 5 mm = 2. Con ≥ 3 puntos es muy específico de IAM.' },
            { type: 'match', prompt: 'Relaciona el criterio de Sgarbossa con su puntuación', pairs: [['ST ↑ concordante ≥ 1 mm', '5 puntos'], ['ST ↓ ≥ 1 mm en V1–V3', '3 puntos'], ['ST ↑ discordante ≥ 5 mm', '2 puntos']], explain: 'Smith sustituye el tercer criterio por la proporción ST/S ≤ −0,25, más sensible.' },
            { type: 'tf', prompt: 'En este ritmo de marcapasos de VD, el ST-T discordante dificulta valorar isquemia igual que un BRI; pueden aplicarse criterios de Sgarbossa modificados.', ecg12: 'pacer12', answer: true, explain: 'La estimulación apical del VD produce una morfología de BRI. La ESC 2023 maneja la isquemia en curso con marcapasos igual que con BRI.' },
            { type: 'mc', prompt: 'Mujer de 76 años con dolor opresivo de 40 min, BRI ya conocido y ST elevado concordante de 2 mm en V5–V6. ¿Actitud?', options: ['Activar código infarto (ICP primaria)', 'Esperar a la troponina antes de decidir', 'Alta: el BRI previo explica el ECG', 'Prueba de esfuerzo diferida'], answer: 0, explain: 'ESC 2023: con isquemia en curso y BRI (nuevo o conocido), estrategia de ICP primaria; la elevación concordante es muy específica de oclusión.' },
          ],
        },
        {
          id: 'ecg-u6-l3',
          title: 'Hemibloqueos y bloqueo bifascicular',
          questions: [
            { type: 'mc', prompt: 'QRS de 100 ms. Observa el ECG. ¿Qué trastorno de conducción explica el eje?', ecg12: 'lad', options: ['Hemibloqueo anterior izquierdo', 'Hemibloqueo posterior izquierdo', 'Bloqueo de rama derecha', 'Bloqueo de rama izquierda'], answer: 0, explain: 'Positivo en I y negativo (rS) en II y aVF: eje ≈ −45°. Con QRS < 120 ms es el HBAI, la causa más frecuente de eje izquierdo.' },
            { type: 'mc', prompt: 'QRS estrecho y eje ≈ +120°. ¿Qué debes excluir antes de diagnosticar un hemibloqueo posterior izquierdo?', ecg12: 'rad', options: ['HVD, TEP o IAM lateral', 'Hipopotasemia o hipocalcemia', 'Pericarditis o miocarditis', 'Repolarización precoz'], answer: 0, explain: 'El HBPI es raro y un diagnóstico de exclusión: descarta antes otras causas de eje derecho (HVD, TEP, IAM lateral, hábito asténico).' },
            { type: 'match', prompt: 'Relaciona el trastorno con su hallazgo', pairs: [['HBAI', 'Eje entre −45° y −90°'], ['HBPI', 'Eje entre +90° y +180°'], ['BRD + HBAI', 'Bloqueo bifascicular'], ['BRD y BRI en distintos ECG', 'Bloqueo de rama alternante']], explain: 'El bloqueo de rama alternante demuestra enfermedad de los tres fascículos y es indicación de marcapasos (ESC 2021).' },
            { type: 'tf', prompt: 'Un bloqueo bifascicular asintomático es indicación de marcapasos (ESC 2021).', answer: false, explain: 'Sin síntomas ni BAV avanzado no se recomienda estimulación (clase III): la progresión a BAV completo es lenta.' },
            { type: 'mc', prompt: 'Síncope inexplicado y bloqueo bifascicular. En el estudio electrofisiológico, ¿qué hallazgo indica marcapasos (ESC 2021)?', options: ['Intervalo HV ≥ 70 ms', 'Intervalo AH ≥ 70 ms', 'Intervalo HV ≥ 35 ms', 'PR ≥ 200 ms en el ECG basal'], answer: 0, explain: 'HV ≥ 70 ms o bloqueo infrahisiano con estimulación auricular o prueba farmacológica = clase I. El HV normal es 35–55 ms.' },
            { type: 'mc', prompt: 'Varón de 78 años con BRD + HBAI conocido ingresa por síncope. En la telemetría se registra esta tira. ¿Actitud?', ecg: 'avb3', options: ['Implantar marcapasos definitivo', 'Estudio electrofisiológico antes de decidir', 'Holter implantable y revisión', 'Alta con Holter de 24 h'], answer: 0, explain: 'BAV completo documentado: la enfermedad del His-Purkinje ha progresado y está indicado marcapasos (clase I). El estudio electrofisiológico es para el síncope sin bloqueo documentado.' },
            { type: 'mc', prompt: 'Observa el sistema de conducción. Si se bloquea el fascículo resaltado, ¿qué esperas en el ECG?', diagram: { id: 'conduction', highlight: 'laf' }, options: ['Desviación del eje a la izquierda (−45° a −90°) con QRS < 120 ms', 'Eje derecho (+90° a +180°)', 'rSR′ en V1 con QRS ≥ 120 ms', 'PR largo con QRS normal'], answer: 0, explain: 'Es el fascículo anterior izquierdo: fino y con irrigación única (DA), por eso su bloqueo (HBAI) es el más frecuente; da qR en I-aVL y rS en II, III y aVF.' },
            { type: 'mc', prompt: '¿Qué estructura del sistema de conducción está resaltada?', diagram: { id: 'conduction', highlight: 'lpf' }, options: ['Fascículo posterior izquierdo', 'Fascículo anterior izquierdo', 'Rama derecha', 'Red de Purkinje'], answer: 0, explain: 'El fascículo posterior es corto, ancho y con doble irrigación (DA y CD): por eso el HBPI aislado es raro y obliga a descartar antes HVD, TEP o IAM lateral.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u7',
      title: 'Infarto: criterios y localización',
      guide: {
        intro: 'El ECG decide en minutos quién necesita reperfusión. Aprende los umbrales de la 4.ª Definición Universal del IAM (2018), a localizar la arteria culpable y a reconocer las oclusiones que no cumplen criterios clásicos (ESC SCA 2023).',
        sections: [
          {
            title: 'Criterios de IAMCEST y evolución',
            points: [
              'Elevación nueva del ST en el punto J en ≥ 2 derivaciones contiguas: ≥ 1 mm en todas salvo V2–V3.',
              'En V2–V3: ≥ 2 mm en varones ≥ 40 años, ≥ 2,5 mm en varones < 40 y ≥ 1,5 mm en mujeres (cualquier edad).',
              'Posteriores (V7–V9): ≥ 0,5 mm (≥ 1 mm en varones < 40 años). Derechas (V3R–V4R): ≥ 0,5 mm (≥ 1 mm en varones < 30 años).',
              'Evolución: T hiperagudas → elevación del ST → ondas Q → T negativas. Q patológica: cualquier Q > 20 ms en V2–V3; ≥ 30 ms y ≥ 1 mm en el resto.',
            ],
            tip: 'ECG en < 10 min desde el primer contacto y repetir si el primero no es diagnóstico y persiste el dolor.',
          },
          {
            title: 'Localización y arteria culpable',
            points: [
              'Inferior (II, III, aVF): CD (≈ 80 %) o Cx. ST III > II y descenso en I y aVL → CD; ST II ≥ III con ST ↑ en I, aVL o V5–V6 → Cx.',
              'CD proximal con infarto de VD: ST ↑ en V1 y en V4R; evitar nitratos y diuréticos, asegurar precarga.',
              'Anterior (V1–V4): DA. Proximal si hay ST ↑ en aVR, V1 y aVL, BRD nuevo o descenso inferior.',
              'Lateral (I, aVL, V5–V6): Cx o diagonal. Posterior (descenso en V1–V3, R alta): Cx o CD; confirmar con V7–V9.',
            ],
            tip: 'Busca siempre la imagen especular: apoya el origen isquémico.',
          },
          {
            title: 'Equivalentes de oclusión (OMI)',
            points: [
              'Wellens (A: T bifásicas; B: T negativas profundas) en V2–V3, sin dolor: estenosis crítica de la DA proximal → coronariografía precoz, no ergometría.',
              'de Winter: descenso ascendente del ST en el punto J en V1–V6 con T altas y simétricas: oclusión aguda de la DA → código infarto.',
              'IAM posterior: descenso del ST en V1–V3 con R alta y T positiva; se maneja como IAMCEST.',
              'ST ↓ ≥ 1 mm en ≥ 6 derivaciones con ST ↑ en aVR y/o V1: isquemia de tronco o multivaso; coronariografía urgente si hay inestabilidad.',
            ],
            tip: 'Que no haya "elevación del ST" no significa que no haya una arteria ocluida.',
          },
          {
            title: 'Diagnóstico diferencial del ST elevado',
            points: [
              'Pericarditis: ST difuso y cóncavo, PR descendido, sin espejo (salvo aVR y V1).',
              'Repolarización precoz: ST cóncavo con muesca en J y T altas, en jóvenes y deportistas; estable en el tiempo.',
              'Aneurisma ventricular: ST ↑ persistente semanas después de un IAM, con ondas Q.',
              'También elevan el ST: BRI, HVI, marcapasos, Brugada, hiperpotasemia y tako-tsubo.',
            ],
            tip: 'Ante la duda con clínica compatible: ECG seriados, comparar con previos y ecocardiograma a pie de cama.',
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u7-l1',
          title: 'Criterios de IAMCEST y evolución',
          questions: [
            { type: 'mc', prompt: 'Mujer de 52 años con dolor torácico. ¿Qué elevación del ST en V2–V3 cumple criterio de IAMCEST?', options: ['≥ 1,5 mm', '≥ 2 mm', '≥ 2,5 mm', '≥ 0,5 mm'], answer: 0, explain: 'En V2–V3: ≥ 1,5 mm en mujeres (cualquier edad), ≥ 2 mm en varones ≥ 40 años y ≥ 2,5 mm en varones < 40 (4.ª Definición Universal 2018).' },
            { type: 'match', prompt: 'Relaciona la derivación y el paciente con el umbral de elevación del ST', pairs: [['V2–V3, varón de 35 años', '≥ 2,5 mm'], ['V2–V3, varón de 60 años', '≥ 2 mm'], ['V2–V3, mujer de 45 años', '≥ 1,5 mm'], ['II, III y aVF, cualquiera', '≥ 1 mm']], explain: 'Se mide en el punto J y debe aparecer en ≥ 2 derivaciones contiguas.' },
            { type: 'mc', prompt: 'Varón de 58 años con dolor opresivo de 1 h y sudoración. Observa el ECG. ¿Diagnóstico?', ecg12: 'stemi-ant', options: ['IAMCEST anterior', 'Pericarditis aguda', 'Repolarización precoz', 'Síndrome de Wellens'], answer: 0, explain: 'Elevación del ST en V1–V4 con descenso especular inferior: oclusión de la DA. Activa el código infarto (ICP primaria).' },
            { type: 'match', prompt: 'Relaciona el tiempo de evolución del IAM con su hallazgo típico', pairs: [['Minutos', 'T hiperagudas'], ['Primeras horas', 'Elevación del ST'], ['Horas a días', 'Ondas Q'], ['Días a semanas', 'T negativas']], explain: 'Es la secuencia clásica; la reperfusión precoz puede evitar las Q y adelantar la inversión de la T.' },
            { type: 'tap', prompt: 'Tras la fibrinólisis aparece este ritmo regular de QRS ancho a ~70 lpm. Toca un latido ventricular.', ecg: 'ivr', wave: 'vent', explain: 'Es un RIVA: QRS anchos sin P a 50–110 lpm. Es típico de la reperfusión, benigno y autolimitado; no requiere antiarrítmicos.' },
            { type: 'tf', prompt: 'Según la 4.ª Definición Universal, cualquier onda Q > 20 ms en V2–V3 (o un complejo QS) se considera patológica.', answer: true, explain: 'En V2–V3 basta Q > 20 ms; en el resto se exige Q ≥ 30 ms y ≥ 1 mm de profundidad en 2 derivaciones contiguas.' },
          ],
        },
        {
          id: 'ecg-u7-l2',
          title: 'Localización y arteria culpable',
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Qué arteria es la culpable más probable?', ecg12: 'stemi-lat', options: ['Circunfleja', 'Coronaria derecha', 'Descendente posterior', 'Marginal aguda'], answer: 0, explain: 'ST elevado en I, aVL, V5–V6 = cara lateral: circunfleja (o su marginal obtusa) o una diagonal de la DA.' },
            { type: 'mc', prompt: 'Varón de 66 años con IAM inferior, PA 85/50 mmHg y pulmones limpios. Observa el ECG (fíjate en V1). ¿Qué sospechas?', ecg12: 'stemi-inf-rv', options: ['Infarto de VD por oclusión proximal de la CD', 'Oclusión de la circunfleja', 'Extensión anterior por DA "envolvente"', 'Pericarditis asociada'], answer: 0, explain: 'ST III > II y elevado en V1 orientan a CD proximal con infarto de VD. Registra V4R; evita nitratos y diuréticos y administra volumen.' },
            { type: 'mc', prompt: 'IAMCEST inferior con ST III > II y descenso en I y aVL. ¿Qué arteria está resaltada en el esquema y es la culpable?', diagram: { id: 'coronary', highlight: 'rca' }, options: ['Coronaria derecha', 'Circunfleja', 'Descendente anterior', 'Tronco común izquierdo'], answer: 0, explain: 'La CD discurre por el surco AV derecho hacia la cara inferior; su vector de lesión apunta a III, con espejo en aVL.' },
            { type: 'match', prompt: 'Relaciona la cara con sus derivaciones', pairs: [['Inferior', 'II, III y aVF'], ['Anteroseptal', 'V1–V2'], ['Lateral alta', 'I y aVL'], ['Posterior', 'V7–V9']], explain: 'Dos derivaciones contiguas del mismo territorio bastan para el criterio de IAMCEST.' },
            { type: 'tf', prompt: 'En un IAM inferior, un ST II ≥ III con elevación en I, aVL o V5–V6 orienta a la circunfleja.', answer: true, explain: 'La Cx dirige el vector de lesión hacia la izquierda (II y laterales); la CD lo dirige hacia la derecha (III) con espejo en I y aVL.' },
            { type: 'mc', prompt: 'IAMCEST anterior. ¿Qué hallazgo sugiere oclusión PROXIMAL de la DA?', options: ['ST ↑ en aVR y aVL con descenso inferior', 'ST ↑ limitado a V3–V4', 'T negativas aisladas en V5–V6', 'Ondas Q en III y aVF'], answer: 0, explain: 'Oclusión proximal: ST ↑ en aVR, V1 y aVL, BRD nuevo y descenso en II, III y aVF. Más miocardio en riesgo: shock y arritmias.' },
          ],
        },
        {
          id: 'ecg-u7-l3',
          title: 'Equivalentes de oclusión',
          questions: [
            { type: 'mc', prompt: 'Mujer de 61 años con dolor torácico ayer; hoy asintomática y con troponina discretamente elevada. Observa el ECG. ¿Diagnóstico?', ecg12: 'wellens', options: ['Síndrome de Wellens', 'HVI con sobrecarga', 'IAMCEST anterior evolucionado con Q', 'Variante normal juvenil'], answer: 0, explain: 'T negativas profundas y simétricas en V2–V3 sin Q ni ST elevado, tras el dolor: estenosis crítica de la DA proximal. Coronariografía precoz; evita la ergometría.' },
            { type: 'tf', prompt: 'Las T bifásicas en V2–V3 de este ECG tienen el mismo significado que las T negativas profundas del Wellens tipo B.', ecg12: 'wellens-a', answer: true, explain: 'Es el Wellens tipo A: misma lesión (estenosis crítica proximal de la DA); con frecuencia evoluciona al tipo B.' },
            { type: 'mc', prompt: 'Varón de 49 años con dolor torácico de 30 min. Observa el ECG. ¿Qué actitud es correcta?', ecg12: 'dewinter', options: ['Activar código infarto: oclusión de la DA', 'Repetir troponina en 3 h antes de decidir', 'Tratar como hiperpotasemia', 'Repolarización precoz: alta'], answer: 0, explain: 'de Winter: descenso ascendente del ST en el punto J en V1–V6 con T altas y simétricas y ST ↑ en aVR. Es una oclusión proximal de la DA sin ST elevado.' },
            { type: 'mc', prompt: 'Dolor torácico típico con este ECG (descenso del ST en V1–V3 y R alta). ¿Qué derivaciones añadirías?', ecg12: 'posterior', options: ['V7–V9', 'V3R–V4R', 'Derivaciones de Lewis', 'V1–V2 un espacio más alto'], answer: 0, explain: 'IAM posterior: elevación ≥ 0,5 mm en V7–V9 (≥ 1 mm en varones < 40) lo confirma; se maneja como IAMCEST.' },
            { type: 'match', prompt: 'Relaciona el patrón con lo que sugiere', pairs: [['Wellens', 'Estenosis crítica de la DA'], ['de Winter', 'Oclusión aguda de la DA'], ['ST ↓ en V1–V3 con R alta', 'IAM posterior'], ['ST ↑ en aVR + ST ↓ en ≥ 6 deriv.', 'Tronco o multivaso']], explain: 'Todos son patrones de alto riesgo que no cumplen los criterios clásicos de IAMCEST.' },
            { type: 'tf', prompt: 'La elevación del ST en aVR con descenso difuso del ST equivale siempre a oclusión aguda del tronco y obliga a fibrinólisis.', answer: false, explain: 'Sugiere isquemia subendocárdica difusa (tronco o multivaso), no una oclusión completa. Si hay inestabilidad, coronariografía urgente; la fibrinólisis no está indicada.' },
          ],
        },
        {
          id: 'ecg-u7-l4',
          title: 'Diagnóstico diferencial del ST elevado',
          questions: [
            { type: 'mc', prompt: 'Varón de 27 años con dolor pleurítico que mejora al inclinarse hacia delante, tras un cuadro gripal. Observa el ECG. ¿Diagnóstico?', ecg12: 'pericarditis', options: ['Pericarditis aguda', 'IAMCEST anterolateral', 'Repolarización precoz', 'Patrón de Brugada tipo 1'], answer: 0, explain: 'ST difuso y cóncavo sin territorio coronario ni espejo, con PR descendido (elevado en aVR). Tratamiento: AINE + colchicina.' },
            { type: 'mc', prompt: 'Deportista de 22 años asintomático, FC 58 lpm, en un reconocimiento. Observa el ECG. ¿Diagnóstico más probable?', ecg12: 'early-repol', options: ['Repolarización precoz', 'Pericarditis aguda', 'IAMCEST anterior', 'Hiperpotasemia'], answer: 0, explain: 'ST cóncavo con muesca en J y T altas, sin espejo ni descenso del PR, en bradicardia: variante normal. Si hay dudas, compara con ECG previos.' },
            { type: 'mc', prompt: 'Varón de 35 años con síncope durante un episodio febril. Observa V1–V2. ¿Qué patrón presenta?', ecg12: 'brugada1', options: ['Patrón de Brugada tipo 1', 'IAMCEST anteroseptal', 'Bloqueo de rama derecha', 'Repolarización precoz'], answer: 0, explain: 'ST en cúpula ≥ 2 mm que termina en T negativa en V1–V2: único patrón diagnóstico. Trata la fiebre y deriva a arritmias (valorar DAI por el síncope).' },
            { type: 'match', prompt: 'Relaciona la entidad con su pista', pairs: [['Pericarditis', 'PR descendido, ST difuso'], ['Aneurisma ventricular', 'Q y ST ↑ semanas tras un IAM'], ['Repolarización precoz', 'Muesca en J, sin espejo'], ['Tako-tsubo', 'Estrés previo, ápex acinético']], explain: 'El tako-tsubo imita un IAM anterior; la coronariografía sin lesiones culpables y la imagen ventricular orientan el diagnóstico.' },
            { type: 'tf', prompt: 'En este BRI, la T positiva en V1–V3 opuesta al QRS negativo es una discordancia esperable, no un signo de infarto.', ecg12: 'lbbb12', answer: true, explain: 'En el BRI la repolarización va en sentido contrario al QRS. Lo sospechoso es la concordancia o una discordancia desproporcionada (Sgarbossa/Smith).' },
            { type: 'tf', prompt: 'En un paciente con HVI, una elevación del ST de 2 mm en V1–V2 es diagnóstica de IAMCEST.', answer: false, explain: 'Con S profundas en V1–V3, la HVI produce elevación discordante del ST que puede superar 2 mm. Compara con ECG previos y valora la clínica y el ecocardiograma.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u8',
      title: 'Arritmias ventriculares',
      guide: {
        intro: 'Una taquicardia de QRS ancho es una TV hasta que se demuestre lo contrario. Aprende los criterios que la distinguen de la TSV aberrada, a reconocer la torsade de pointes y las TV idiopáticas (ESC 2022 arritmias ventriculares; ESC 2019 TSV).',
        sections: [
          {
            title: 'QRS ancho: ¿TV o TSV aberrada?',
            points: [
              'Cardiopatía estructural o IAM previo: > 90 % de las taquicardias de QRS ancho son TV. La buena tolerancia no descarta TV.',
              'Criterios de TV: disociación AV, latidos de captura y de fusión, concordancia negativa en precordiales, eje extremo ("noroeste").',
              'Brugada: sin RS en V1–V6 → TV; intervalo R-nadir de S > 100 ms → TV; disociación AV → TV; criterios morfológicos en V1–V2 y V6.',
              'Vereckei (aVR): R inicial; r o q inicial > 40 ms; muesca en la rama descendente; Vi/Vt ≤ 1 → TV.',
              'Otras causas de QRS ancho: preexcitación, marcapasos, hiperpotasemia y fármacos bloqueadores del sodio (IC, tricíclicos).',
            ],
            tip: 'Inestable → cardioversión sincronizada. Estable → cardioversión si el riesgo de la sedación es bajo; procainamida o amiodarona como alternativas. Nunca verapamilo en QRS ancho no filiado.',
          },
          {
            title: 'TV polimórfica y torsade de pointes',
            points: [
              'Torsade: TV polimórfica con QRS que "giran" sobre la línea de base, sobre un QT largo y con secuencia corto-largo-corto.',
              'Tratamiento: sulfato de magnesio IV, retirar fármacos que alargan el QT, K⁺ a 4,5–5 mmol/l y aumentar la FC (isoproterenol o marcapasos).',
              'TV polimórfica con QT normal: piensa en isquemia aguda → coronariografía urgente.',
              'Torsade sostenida o FV: desfibrilación no sincronizada.',
            ],
          },
          {
            title: 'TV idiopáticas y extrasistolia',
            points: [
              'TV del tracto de salida del VD: BRI + eje inferior, inducida por ejercicio, sensible a adenosina.',
              'TV fascicular (posterior izquierda): BRD + eje superior izquierdo, QRS relativamente estrecho, sensible a verapamilo.',
              'Una carga de EV > 10 % puede causar miocardiopatía reversible; el riesgo es mayor por encima del 20 %.',
              'RIVA (50–110 lpm) tras la reperfusión: benigno y autolimitado, no requiere antiarrítmicos.',
            ],
            tip: 'Antes de llamar idiopática a una TV con BRI, descarta miocardiopatía arritmogénica (RM cardiaca).',
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u8-l1',
          title: 'QRS ancho: ¿TV o TSV aberrada?',
          questions: [
            { type: 'mc', prompt: 'Varón de 68 años con IAM antiguo, palpitaciones y PA 125/80 mmHg. Observa la tira. ¿Diagnóstico de trabajo?', ecg: 'vt', options: ['Taquicardia ventricular monomorfa', 'TSV con aberrancia de rama', 'Flutter auricular 2:1 con BRI', 'Taquicardia sinusal con BRI'], answer: 0, explain: 'Taquicardia regular de QRS ancho sin P visibles en un paciente con cicatriz de infarto: más del 90 % son TV, aunque la tolerancia sea buena.' },
            { type: 'tf', prompt: 'Una buena tolerancia hemodinámica orienta a TSV con aberrancia y permite descartar una TV.', answer: false, explain: 'Muchas TV se toleran bien, sobre todo con FEVI conservada. La estabilidad decide el tratamiento, no el diagnóstico.' },
            { type: 'match', prompt: 'Relaciona el criterio de TV con su definición', pairs: [['Disociación AV', 'P sin relación con los QRS'], ['Latido de captura', 'QRS estrecho prematuro conducido'], ['Latido de fusión', 'QRS intermedio entre sinusal y TV'], ['Concordancia negativa', 'QRS negativos de V1 a V6']], explain: 'Capturas y fusiones demuestran disociación AV: un impulso sinusal se "cuela" en los ventrículos. Son muy específicos de TV, pero poco sensibles.' },
            { type: 'mc', prompt: 'Algoritmo de Vereckei: ¿qué hallazgo en aVR indica TV?', options: ['Onda R inicial en aVR', 'QS con descenso inicial rápido', 'Complejo rSr′ de bajo voltaje', 'T negativa tras el QRS'], answer: 0, explain: 'Una R inicial en aVR indica activación desde el ápex hacia arriba, impropia del His-Purkinje. Otros pasos: r o q inicial > 40 ms, muesca descendente y Vi/Vt ≤ 1.' },
            { type: 'tf', prompt: 'En el algoritmo de Brugada, la ausencia de complejos RS en todas las precordiales indica TV.', answer: true, explain: 'Es el primer paso. Si hay RS, un intervalo desde el inicio de la R al nadir de la S > 100 ms en cualquier precordial también indica TV.' },
            { type: 'mc', prompt: 'Mujer de 72 años con taquicardia regular de QRS ancho a 180 lpm, PA 70/40 mmHg y confusión. ¿Actitud inmediata?', options: ['Cardioversión eléctrica sincronizada', 'Amiodarona IV en 20 minutos', 'Adenosina 6 mg IV en bolo', 'Verapamilo 5 mg IV lento'], answer: 0, explain: 'Con inestabilidad, cardioversión sincronizada bajo sedación. El verapamilo está contraindicado en QRS ancho no filiado: si es TV puede causar colapso.' },
          ],
        },
        {
          id: 'ecg-u8-l2',
          title: 'TV polimórfica y torsade de pointes',
          questions: [
            { type: 'mc', prompt: 'Mujer de 74 años tratada con haloperidol y furosemida que presenta síncopes. Observa la tira. ¿Qué ritmo muestra?', ecg: 'torsade', options: ['Torsade de pointes', 'Fibrilación ventricular', 'TV monomorfa', 'FA preexcitada'], answer: 0, explain: 'QRS anchos cuya amplitud crece y decrece girando sobre la línea de base, iniciados por una extrasístole sobre una T con QT largo. Fármaco + hipopotasemia por diurético: combinación clásica.' },
            { type: 'tap', prompt: 'Esta paciente recibe un fármaco que alarga el QT. Toca una onda T y fíjate en lo tarde que termina.', ecg: 'longqt', wave: 't', explain: 'El QT va del inicio del QRS al final de la T (método de la tangente). Suspende el fármaco si el QTc supera 500 ms o aumenta > 60 ms.' },
            { type: 'mc', prompt: '¿Cuál es el fármaco de primera línea para la torsade de pointes?', options: ['Sulfato de magnesio IV', 'Amiodarona IV', 'Lidocaína IV', 'Procainamida IV'], answer: 0, explain: 'El magnesio (2 g IV) suprime los pospotenciales precoces aunque la magnesemia sea normal. Amiodarona y procainamida alargan el QT y pueden empeorarla.' },
            { type: 'tf', prompt: 'En la torsade adquirida, aumentar la frecuencia cardiaca (isoproterenol o marcapasos transitorio) ayuda a prevenir recurrencias.', answer: true, explain: 'La bradicardia y las pausas alargan el QT y favorecen la secuencia corto-largo-corto. Además, repón K⁺ hasta 4,5–5 mmol/l.' },
            { type: 'match', prompt: 'Relaciona la TV polimórfica con su causa más típica', pairs: [['TV polimórfica con QT largo', 'Fármacos, K⁺/Mg²⁺ bajos, bradicardia'], ['TV polimórfica con QT normal', 'Isquemia aguda'], ['TV bidireccional', 'Digoxina o TVPC']], explain: 'Mide el QT en ritmo sinusal: si es largo, magnesio y retirar desencadenantes; si es normal y hay isquemia, coronariografía urgente.' },
            { type: 'mc', prompt: 'La torsade de la paciente no cede y degenera en este ritmo, sin pulso. ¿Qué haces?', ecg: 'vf', options: ['Desfibrilación no sincronizada', 'Cardioversión sincronizada a 100 J', 'Sulfato de magnesio y esperar', 'Amiodarona 300 mg sin descarga'], answer: 0, explain: 'FV: RCP y desfibrilación inmediata. En la torsade sostenida tampoco se sincroniza: los QRS polimórficos impiden que el aparato detecte la R.' },
          ],
        },
        {
          id: 'ecg-u8-l3',
          title: 'TV idiopáticas y extrasistolia ventricular',
          questions: [
            { type: 'tap', prompt: 'Observa la tira. Toca una extrasístole ventricular.', ecg: 'bigeminy', wave: 'vent', explain: 'Prematura, ancha, sin P previa y con acoplamiento fijo: cada latido sinusal va seguido de una EV (bigeminismo ventricular).' },
            { type: 'mc', prompt: 'Mujer de 32 años sin cardiopatía con EV y rachas de TV con morfología de BRI y eje inferior que aumentan con el ejercicio. ¿Origen más probable?', options: ['Tracto de salida del VD', 'Fascículo posterior izquierdo', 'Cicatriz de IAM inferior', 'Vía accesoria posteroseptal'], answer: 0, explain: 'BRI con QRS positivo en II, III y aVF: tracto de salida. Es la TV idiopática más frecuente, sensible a adenosina y curable con ablación.' },
            { type: 'mc', prompt: 'Varón de 24 años sin cardiopatía con TV a 170 lpm, QRS de 130 ms, morfología de BRD y eje superior izquierdo. ¿Qué fármaco suele terminarla?', options: ['Verapamilo IV', 'Adenosina IV', 'Sulfato de magnesio IV', 'Digoxina IV'], answer: 0, explain: 'TV fascicular (de Belhassen): reentrada en el fascículo posterior izquierdo, sensible a verapamilo. Su QRS relativamente estrecho la confunde con una TSV aberrada.' },
            { type: 'tf', prompt: 'Una carga de EV > 10 % en el Holter de 24 h puede causar disfunción ventricular reversible.', answer: true, explain: 'Miocardiopatía inducida por EV: el riesgo crece con la carga (sobre todo > 20 %). Suprimirlas con ablación o fármacos puede normalizar la FEVI.' },
            { type: 'match', prompt: 'Relaciona la taquicardia ventricular con su rasgo típico', pairs: [['TV del tracto de salida', 'BRI + eje inferior'], ['TV fascicular', 'BRD + eje superior izquierdo'], ['RIVA', '50–110 lpm tras reperfusión'], ['TV por cicatriz', 'IAM previo y FEVI deprimida']], explain: 'Las TV idiopáticas tienen buen pronóstico; la TV por cicatriz implica riesgo de muerte súbita y obliga a valorar DAI.' },
            { type: 'mc', prompt: 'Varón de 58 años, 20 min después de una ICP primaria de la DA, asintomático y con PA normal. Observa la tira. ¿Actitud?', ecg: 'ivr', options: ['Observación: suele autolimitarse', 'Cardioversión eléctrica sincronizada', 'Amiodarona IV en bolo', 'Implante urgente de DAI'], answer: 0, explain: 'RIVA (QRS anchos regulares a ~70 lpm): marcador de reperfusión, benigno y autolimitado. No requiere antiarrítmicos.' },
          ],
        },
        {
          id: 'ecg-u8-l4',
          title: 'QRS ancho: diferencial y manejo',
          questions: [
            { type: 'mc', prompt: 'Varón de 23 años con palpitaciones. Taquicardia irregular a 240 lpm con QRS anchos y cambiantes. Observa la tira. ¿Diagnóstico?', ecg: 'afib-wpw', options: ['FA preexcitada', 'TV polimórfica', 'FA con bloqueo de rama fijo', 'Torsade de pointes'], answer: 0, explain: 'Irregular, muy rápida y con QRS de anchura variable: FA conducida por una vía accesoria. Un RR preexcitado ≤ 250 ms indica riesgo de FV.' },
            { type: 'mc', prompt: 'En la FA preexcitada hemodinámicamente estable, ¿qué fármaco debes evitar?', options: ['Verapamilo IV', 'Procainamida IV', 'Ibutilida IV', 'Flecainida IV'], answer: 0, explain: 'Frenar el nodo AV (verapamilo, betabloqueantes, digoxina, adenosina; también amiodarona IV) favorece la conducción por la vía y puede provocar FV.' },
            { type: 'mc', prompt: 'Mujer de 81 años con QRS ancho a 60 lpm en el monitor. Observa la tira. ¿Qué explica el QRS ancho?', ecg: 'pacer-vvi', options: ['Estimulación por marcapasos ventricular', 'Ritmo idioventricular acelerado', 'Hiperpotasemia grave', 'Bloqueo de rama izquierda sinusal'], answer: 0, explain: 'Cada QRS va precedido de una espiga: captura desde el VD con morfología de BRI. Busca espigas antes de llamar TV o RIVA a un QRS ancho.' },
            { type: 'match', prompt: 'Relaciona la causa de QRS ancho con su pista', pairs: [['Hiperpotasemia', 'T picudas, P aplanadas'], ['Antiarrítmico IC', 'Flecainida a dosis altas'], ['Tricíclicos', 'R terminal alta en aVR'], ['Preexcitación', 'PR corto y onda delta']], explain: 'No todo QRS ancho rápido es TV o TSV aberrada: iones, bloqueadores del sodio, preexcitación y marcapasos también lo ensanchan.' },
            { type: 'tf', prompt: 'Ante una taquicardia regular de QRS ancho estable, sin preexcitación en el ECG basal, puede usarse adenosina con fines diagnósticos.', answer: true, explain: 'Termina la TSV aberrada y desenmascara un flutter o una taquicardia auricular; la TV no suele responder. Ten el desfibrilador preparado.' },
            { type: 'tf', prompt: 'La concordancia positiva en precordiales (QRS positivos de V1 a V6) es patognomónica de TV.', answer: false, explain: 'Es muy sugestiva de TV, pero también aparece en la taquicardia antidrómica por una vía posterior izquierda. La concordancia negativa es casi exclusiva de TV.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u9',
      title: 'Canalopatías y miocardiopatía arritmogénica',
      guide: {
        intro: 'Corazones estructuralmente normales (o casi) que causan muerte súbita en jóvenes. El ECG es la clave diagnóstica: aprende a reconocer Brugada, QT largo y corto, TVPC y miocardiopatía arritmogénica (ESC 2022; consenso de onda J 2016; Task Force 2010 y Padua 2020).',
        sections: [
          {
            title: 'Síndrome de Brugada',
            points: [
              'Tipo 1 ("coved"): J ≥ 2 mm con ST en cúpula y T negativa en ≥ 1 precordial derecha (V1–V2 en el 2.º, 3.º o 4.º espacio). Único diagnóstico.',
              'Tipo 2 ("silla de montar"): ST cóncavo con T positiva en V2. Solo sugestivo; puede desenmascararse con ajmalina o flecainida.',
              'Arritmias en reposo o sueño, más en varones; la fiebre y los bloqueadores del sodio las desencadenan.',
              'DAI tras parada o TV sostenida; valorar ante síncope arrítmico. Quinidina o isoproterenol en tormentas.',
            ],
            tip: 'Fiebre en un paciente con Brugada: antitérmicos precoces y ECG.',
          },
          {
            title: 'QT largo y QT corto',
            points: [
              'SQTL: QTc ≥ 480 ms en ECG repetidos o puntuación de Schwartz > 3; QTc ≥ 460 ms si hay síncope arrítmico.',
              'LQT1 (KCNQ1): ejercicio, natación, T de base ancha. LQT2 (KCNH2): ruidos, posparto, T mellada. LQT3 (SCN5A): reposo, ST largo.',
              'Betabloqueante no selectivo (nadolol, propranolol) si el QT está prolongado; mexiletina en LQT3; DAI tras parada.',
              'Adquirido: retira el fármaco si QTc > 500 ms o aumento > 60 ms; corrige K⁺ y Mg²⁺.',
              'QT corto: QTc ≤ 320 ms diagnóstico; ≤ 360 ms con mutación, historia familiar o parada recuperada.',
            ],
          },
          {
            title: 'TVPC y repolarización precoz',
            points: [
              'TVPC: ECG basal normal, TV bidireccional o polimórfica con el ejercicio o la emoción (RYR2). La ergometría es la prueba clave.',
              'Tratamiento de la TVPC: nadolol ± flecainida, denervación simpática; las descargas del DAI pueden provocar tormentas.',
              'Patrón de repolarización precoz: frecuente y benigno en asintomáticos. Síndrome solo si hay FV idiopática recuperada.',
            ],
          },
          {
            title: 'Miocardiopatía arritmogénica',
            points: [
              'Criterio mayor: T negativas en V1–V3 o más allá en > 14 años sin BRD completo.',
              'Onda épsilon en V1–V3: mayor en el Task Force 2010, menor en Padua 2020. Activación terminal del QRS ≥ 55 ms: menor.',
              'TV con BRI y eje superior: criterio mayor; con eje inferior: menor.',
              'Evitar deporte de competición y ejercicio intenso; DAI tras TV mal tolerada o FV.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u9-l1',
          title: 'Síndrome de Brugada',
          questions: [
            { type: 'mc', prompt: 'Varón de 38 años con un síncope nocturno sin pródromos. Observa V1–V2. ¿Qué patrón muestra?', ecg12: 'brugada1', options: ['Patrón de Brugada tipo 1', 'Patrón de Brugada tipo 2', 'Bloqueo de rama derecha completo', 'IAMCEST anteroseptal'], answer: 0, explain: 'J ≥ 2 mm con ST en cúpula y T negativa en ≥ 1 precordial derecha: tipo 1, el único diagnóstico. El tipo 2 es en "silla de montar" con T positiva en V2.' },
            { type: 'match', prompt: 'Relaciona el hallazgo con su significado en el Brugada', pairs: [['ST en cúpula + T negativa', 'Tipo 1 (diagnóstico)'], ['ST en silla de montar', 'Tipo 2 (sugestivo)'], ['Tipo 1 tras ajmalina', 'Patrón inducido por fármaco']], explain: 'Solo el tipo 1 espontáneo es diagnóstico por sí solo; el inducido requiere además clínica compatible (síncope arrítmico, parada o historia familiar).' },
            { type: 'tf', prompt: 'Registrar V1–V2 en el 2.º o 3.er espacio intercostal aumenta la sensibilidad para detectar el patrón tipo 1.', answer: true, explain: 'El tracto de salida del VD puede quedar por encima del 4.º espacio. Un tipo 1 en V1–V2 altos tiene el mismo valor diagnóstico.' },
            { type: 'mc', prompt: '¿En qué contexto suelen producirse las arritmias del síndrome de Brugada?', options: ['Reposo o sueño, con tono vagal alto', 'Ejercicio intenso y estrés emocional', 'Estímulos auditivos bruscos', 'Posparto inmediato'], answer: 0, explain: 'La FV del Brugada aparece típicamente de noche y en reposo, más en varones de 30–50 años. Ejercicio y emoción orientan a LQT1 o TVPC; ruidos y posparto, a LQT2.' },
            { type: 'mc', prompt: 'Mujer de 29 años con Brugada conocido consulta por gripe con 39 °C. ¿Qué le recomiendas?', options: ['Antitérmicos precoces y ECG', 'Esperar a que la fiebre ceda sola', 'Iniciar flecainida oral profiláctica', 'Antibiótico empírico y reposo'], answer: 0, explain: 'La fiebre desenmascara el tipo 1 y desencadena arritmias: trátala pronto. Evita los bloqueadores del sodio (flecainida, propafenona) y consulta las listas de fármacos a evitar.' },
            { type: 'tf', prompt: 'En un paciente asintomático con patrón de Brugada tipo 1 espontáneo está indicado implantar un DAI de forma sistemática.', answer: false, explain: 'El DAI se indica tras parada recuperada o TV sostenida y se valora ante síncope arrítmico. En asintomáticos se individualiza (el estudio electrofisiológico puede ayudar).' },
          ],
        },
        {
          id: 'ecg-u9-l2',
          title: 'QT largo congénito y adquirido',
          questions: [
            { type: 'mc', prompt: 'Mujer de 19 años con síncope al sonar el despertador. Observa la tira (FC 65 lpm). ¿Qué alteración muestra?', ecg: 'longqt', options: ['QT largo', 'PR corto con onda delta', 'T picudas de hiperpotasemia', 'Bloqueo AV de 1.er grado'], answer: 0, explain: 'La T termina muy lejos del QRS: QTc prolongado. Un síncope desencadenado por un estímulo auditivo brusco orienta a LQT2.' },
            { type: 'match', prompt: 'Relaciona el subtipo de QT largo con su desencadenante típico', pairs: [['LQT1 (KCNQ1)', 'Ejercicio, natación'], ['LQT2 (KCNH2)', 'Estímulos auditivos, posparto'], ['LQT3 (SCN5A)', 'Reposo y sueño']], explain: 'La T también orienta: LQT1 de base ancha; LQT2 de bajo voltaje y mellada; LQT3 con ST largo isoeléctrico y T tardía.' },
            { type: 'mc', prompt: 'Según la ESC 2022, ¿qué QTc en ECG repetidos diagnostica el síndrome de QT largo aunque no haya síntomas?', options: ['≥ 480 ms', '≥ 440 ms', '≥ 450 ms', '≥ 520 ms'], answer: 0, explain: 'QTc ≥ 480 ms en ECG repetidos o puntuación de Schwartz > 3. Con síncope arrítmico basta un QTc ≥ 460 ms, descartadas causas secundarias.' },
            { type: 'tf', prompt: 'Los betabloqueantes no selectivos (nadolol o propranolol) están indicados en el QT largo congénito con QT prolongado documentado.', answer: true, explain: 'Reducen los eventos, sobre todo en LQT1. En LQT3 puede añadirse mexiletina; tras parada o eventos pese al tratamiento, DAI.' },
            { type: 'mc', prompt: 'Varón de 70 años con QTc basal de 440 ms; tras iniciar un fármaco, el QTc es de 520 ms. ¿Actitud correcta?', options: ['Suspender el fármaco y corregir K⁺ y Mg²⁺', 'Mantenerlo: el QTc aún es aceptable', 'Reducir la dosis y repetir en un mes', 'Añadir amiodarona como protección'], answer: 0, explain: 'QTc > 500 ms o aumento > 60 ms: retira el fármaco, corrige iones y monitoriza. Riesgo mayor en mujeres, ancianos, bradicardia e hipopotasemia.' },
            { type: 'tf', prompt: 'La fórmula de Bazett infracorrige el QT con frecuencias cardiacas altas.', answer: false, explain: 'Bazett sobrecorrige con FC altas (QTc falsamente largo) e infracorrige con FC bajas. Con taquicardia es mejor Fridericia o Framingham.' },
          ],
        },
        {
          id: 'ecg-u9-l3',
          title: 'QT corto, TVPC y repolarización precoz',
          questions: [
            { type: 'mc', prompt: 'Según la ESC 2022, ¿qué QTc basta por sí solo para diagnosticar el síndrome de QT corto?', options: ['≤ 320 ms', '≤ 360 ms', '≤ 380 ms', '≤ 400 ms'], answer: 0, explain: 'QTc ≤ 320 ms es diagnóstico. Con QTc ≤ 360 ms se requiere además mutación patogénica, historia familiar o parada recuperada.' },
            { type: 'mc', prompt: 'Niña de 12 años con síncopes al correr. ECG basal normal; en la ergometría aparecen EV que progresan a TV bidireccional. ¿Diagnóstico?', options: ['TV polimórfica catecolaminérgica', 'Síndrome de QT largo tipo 3', 'Síndrome de Brugada', 'Miocardiopatía arritmogénica'], answer: 0, explain: 'TVPC: ECG basal normal y arritmias con el ejercicio o la emoción (RYR2). La ergometría es la prueba clave; tratamiento con nadolol, añadiendo flecainida si persisten.' },
            { type: 'tf', prompt: 'En la TVPC, el DAI sin betabloqueante es una buena estrategia porque sus descargas terminan las arritmias.', answer: false, explain: 'Las descargas liberan catecolaminas y pueden desencadenar tormentas arrítmicas. Base: betabloqueante ± flecainida o denervación simpática; DAI tras parada.' },
            { type: 'match', prompt: 'Relaciona la arritmia con su fármaco característico', pairs: [['QT largo tipo 3', 'Mexiletina'], ['TVPC', 'Nadolol + flecainida'], ['QT corto', 'Quinidina'], ['Torsade de pointes', 'Sulfato de magnesio']], explain: 'La mexiletina bloquea la corriente tardía de sodio (LQT3); la flecainida inhibe el receptor RyR2 (TVPC); la quinidina alarga el QT en el QT corto.' },
            { type: 'tf', prompt: 'En un deportista asintomático, este patrón de repolarización precoz no requiere más estudios.', ecg12: 'early-repol', answer: true, explain: 'Es frecuente y benigno en asintomáticos. Solo se habla de síndrome de repolarización precoz si hay FV idiopática recuperada.' },
            { type: 'mc', prompt: '¿Qué rasgo de la repolarización precoz se asocia a mayor riesgo arrítmico?', options: ['J ≥ 2 mm en inferiores con ST horizontal', 'ST cóncavo ascendente en V2–V4', 'Muesca en J en V4–V6 con T altas', 'Bradicardia sinusal del deportista'], answer: 0, explain: 'Más riesgo con J alto en derivaciones inferiores o difuso, seguido de ST horizontal o descendente. La variante lateral con ST ascendente es la típica benigna.' },
          ],
        },
        {
          id: 'ecg-u9-l4',
          title: 'Miocardiopatía arritmogénica',
          questions: [
            { type: 'mc', prompt: 'Varón de 26 años, ciclista, con palpitaciones al esfuerzo. ECG con T negativas de V1 a V4 sin BRD. ¿Qué diagnóstico debes descartar?', options: ['Miocardiopatía arritmogénica del VD', 'Síndrome de Brugada tipo 2', 'Pericarditis aguda en fase IV', 'Síndrome de QT corto'], answer: 0, explain: 'T negativas en V1–V3 o más allá en > 14 años sin BRD completo: criterio mayor (Task Force 2010). Pide eco, RM cardiaca y Holter.' },
            { type: 'match', prompt: 'Relaciona el hallazgo con lo que representa en la miocardiopatía arritmogénica', pairs: [['Onda épsilon', 'Potenciales tardíos tras el QRS'], ['T negativas en V1–V3', 'Repolarización anómala del VD'], ['TV con BRI y eje superior', 'Origen en la pared inferior del VD'], ['Activación terminal ≥ 55 ms', 'Despolarización lenta en V1–V3']], explain: 'La épsilon es una pequeña deflexión entre el final del QRS y la T en V1–V3, por conducción lenta en el miocardio fibroadiposo.' },
            { type: 'tf', prompt: 'En los criterios de Padua 2020, la onda épsilon pasó de criterio mayor a menor.', answer: true, explain: 'Es específica pero difícil de identificar y con gran variabilidad entre observadores. Padua incorpora el realce tardío en RM y la afectación del VI.' },
            { type: 'mc', prompt: '¿Qué morfología de TV es criterio mayor de miocardiopatía arritmogénica del VD?', options: ['BRI con eje superior', 'BRI con eje inferior', 'BRD con eje superior', 'BRD con eje inferior'], answer: 0, explain: 'TV con BRI y eje superior (negativa en II, III y aVF) es criterio mayor; con eje inferior es menor, porque se solapa con la TV idiopática del tracto de salida.' },
            { type: 'tf', prompt: 'En la miocardiopatía arritmogénica se recomienda evitar el deporte de competición y el ejercicio de alta intensidad.', answer: true, explain: 'El ejercicio intenso acelera la progresión y aumenta el riesgo arrítmico. La mayoría de casos se deben a genes desmosómicos (PKP2 el más frecuente).' },
            { type: 'mc', prompt: 'Mujer de 34 años con miocardiopatía arritmogénica ingresa por TV sostenida mal tolerada, ya cardiovertida, sin causa reversible. ¿Qué indicas?', options: ['Implante de DAI', 'Solo betabloqueante y alta', 'Restricción del ejercicio aislada', 'Flecainida oral en monoterapia'], answer: 0, explain: 'Tras TV mal tolerada o FV, el DAI está indicado. Se asocia betabloqueante y, si la TV recurre, ablación (a menudo con abordaje epicárdico).' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u10',
      title: 'Lectura avanzada de trazados',
      guide: {
        intro: 'Trazados que separan a quien "lee" el ECG de quien lo interpreta: crecimientos auriculares y bloqueos fasciculares, QRS ancho complejo, bradiarritmias y disfunción de marcapasos, y las trampas técnicas e iónicas más frecuentes (ESC arritmias ventriculares 2022, estimulación 2021, TSV 2019).',
        sections: [
          {
            title: 'Aurículas y fascículos',
            points: [
              'Crecimiento AI (P mitral): P ≥ 120 ms y bífida en II; componente terminal negativo en V1 ≥ 1 mm × 40 ms (índice de Morris).',
              'Crecimiento AD (P pulmonar): P ≥ 2,5 mm en II, III y aVF con duración normal.',
              'HBAI: eje −45° a −90°, qR en I y aVL, rS en II, III y aVF, QRS < 120 ms.',
              'Bloqueo bifascicular (BRD + HBAI): solo conduce el fascículo posterior. Síncope sin explicación → estudio electrofisiológico (HV ≥ 70 ms → marcapasos) o Holter implantable.',
            ],
          },
          {
            title: 'QRS ancho avanzado',
            points: [
              'Disociación AV, latidos de captura (QRS estrecho prematuro) y de fusión (morfología intermedia): diagnósticos de TV.',
              'Concordancia negativa en precordiales y eje extremo (positivo en aVR) apoyan TV. Ante la duda, trata como TV.',
              'TV bidireccional (el eje alterna latido a latido): intoxicación digitálica, TVPC o Andersen-Tawil.',
              'WPW: la onda delta negativa en inferiores simula Q de necrosis (pseudoinfarto).',
            ],
            tip: 'La buena tolerancia hemodinámica no descarta una TV.',
          },
          {
            title: 'Bradiarritmias y marcapasos',
            points: [
              'BAV 2:1: no permite distinguir Mobitz I de II; QRS ancho sugiere bloqueo infrahisiano.',
              'Paro sinusal: pausa sin P que no es múltiplo del PP (en el bloqueo sinoauricular sí lo es).',
              'Escape de la unión: QRS estrecho a 40–60 lpm sin P previa (o P retrógrada).',
              'Fallo de captura: espiga sin QRS. Fallo de detección: espigas a destiempo, sobre el ST o la T, ignorando los QRS propios.',
            ],
          },
          {
            title: 'Trampas del trazado',
            points: [
              'Electrodos de brazos invertidos: I negativo con aVR positivo y precordiales normales (en la dextrocardia la R decrece de V1 a V6).',
              'Bajo voltaje (< 5 mm en miembros, < 10 mm en precordiales) + alternancia eléctrica: derrame con taponamiento.',
              'Digoxina: ST "en cubeta" y QT corto = efecto, no intoxicación.',
              'Hiperpotasemia: T picudas → P aplanada → QRS ancho. Hipopotasemia: T planas, ondas U (QU largo).',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u10-l1',
          title: 'Aurículas y fascículos en 12 derivaciones',
          questions: [
            { type: 'mc', prompt: 'Observa la onda P en II y V1. ¿Qué alteración muestra este ECG?', ecg12: 'lae', options: ['Crecimiento auricular izquierdo', 'Crecimiento auricular derecho', 'Hipertrofia ventricular izquierda', 'Hemibloqueo anterior izquierdo'], answer: 0, explain: 'P ancha (≥ 120 ms) y bífida en II con componente terminal negativo amplio en V1 (índice de Morris). Causa clásica: estenosis mitral, también HTA y miocardiopatías.' },
            { type: 'tf', prompt: 'En este ECG, la P alta y picuda en derivaciones inferiores con duración normal sugiere crecimiento auricular derecho.', ecg12: 'rae', answer: true, explain: 'P pulmonar: ≥ 2,5 mm en II, III y aVF, < 120 ms. Piensa en EPOC, hipertensión pulmonar o valvulopatía tricúspide.' },
            { type: 'mc', prompt: 'Observa el ECG (QRS < 120 ms). ¿Qué diagnóstico explica el eje?', ecg12: 'lafb', options: ['Hemibloqueo anterior izquierdo', 'Hemibloqueo posterior izquierdo', 'Bloqueo de rama izquierda', 'Necrosis inferior antigua'], answer: 0, explain: 'Eje izquierdo extremo (−45° a −90°) con qR en I y aVL y rS en II, III y aVF (S III > S II). Una necrosis inferior daría Q, no rS, en inferiores.' },
            { type: 'match', prompt: 'Relaciona el hallazgo con su diagnóstico', pairs: [['P ancha y mellada en II', 'Crecimiento auricular izquierdo'], ['P de 3 mm y estrecha en II', 'Crecimiento auricular derecho'], ['Eje −60° con qR en aVL', 'Hemibloqueo anterior izquierdo'], ['Eje +120° con qR en III', 'Hemibloqueo posterior izquierdo']], explain: 'El HBPI exige descartar antes otras causas de eje derecho (HVD, EPOC, IAM lateral, constitución delgada).' },
            { type: 'mc', prompt: 'Observa este ECG con BRD y eje izquierdo extremo. ¿Por dónde se conduce el impulso a los ventrículos?', ecg12: 'rbbb-lafb', options: ['Fascículo posterior izquierdo', 'Fascículo anterior izquierdo', 'Rama derecha del haz de His', 'Vía accesoria auriculoventricular'], answer: 0, explain: 'BRD + HBAI = bloqueo bifascicular: solo queda el fascículo posterior. Si este falla, aparece un BAV completo paroxístico.' },
            { type: 'mc', prompt: 'Mujer de 74 años con BRD + HBAI y síncope brusco sin pródromos. Eco y ECG de control sin otros hallazgos. ¿Siguiente paso según la ESC 2021?', options: ['Estudio electrofisiológico con medida del HV', 'Alta: el bloqueo bifascicular es benigno', 'Ergometría para valorar isquemia', 'Iniciar betabloqueante y revisar en 6 meses'], answer: 0, explain: 'En bloqueo bifascicular con síncope inexplicado, un HV ≥ 70 ms o BAV inducido indica marcapasos; si el estudio es negativo, Holter implantable.' }, // Fuente: ESC 2021 estimulación
          ],
        },
        {
          id: 'ecg-u10-l2',
          title: 'QRS ancho: más allá de lo básico',
          questions: [
            { type: 'mc', prompt: 'Taquicardia regular de QRS ancho. Observa el ECG: ¿qué hallazgo apoya más el diagnóstico de TV?', ecg12: 'vt12', options: ['Concordancia negativa de V1 a V6', 'Buena tolerancia hemodinámica', 'Morfología rSR′ típica en V1', 'Eje normal entre 0° y +90°'], answer: 0, explain: 'La concordancia precordial negativa y el eje extremo (positivo en aVR) son muy sugestivos de TV. Una TV puede tolerarse bien: eso no la descarta.' },
            { type: 'tap', prompt: 'En esta TV, toca el latido de captura (QRS estrecho y prematuro).', ecg: 'vt-capture', wave: 'capture', explain: 'Una P sinusal llega cuando el sistema de conducción está libre y despolariza el ventrículo por la vía normal: prueba que las aurículas van disociadas, es decir, TV.' },
            { type: 'tap', prompt: 'Ahora toca el latido de fusión (morfología intermedia entre el QRS de la TV y el normal).', ecg: 'vt-capture', wave: 'fusion', explain: 'El ventrículo se activa a la vez desde el foco de la TV y desde la conducción normal: sale un QRS híbrido. Igual que la captura, es diagnóstico de TV.' },
            { type: 'tf', prompt: 'En un paciente anciano tratado con digoxina, esta taquicardia debe hacer sospechar intoxicación digitálica.', ecg: 'vt-bidir', answer: true, explain: 'La TV bidireccional (el eje del QRS alterna latido a latido) es muy específica de intoxicación digitálica y de TVPC. Tratamiento: anticuerpos antidigoxina y corregir el potasio.' },
            { type: 'mc', prompt: 'Varón de 20 años asintomático. ¿Qué explica las ondas Q en III y aVF de este ECG?', ecg12: 'wpw12', options: ['Onda delta negativa por vía accesoria', 'Necrosis inferior antigua', 'Hemibloqueo anterior izquierdo', 'Crecimiento auricular derecho'], answer: 0, explain: 'PR corto y empastamiento inicial del QRS: preexcitación. Una vía posteroseptal da delta negativa en inferiores que simula un infarto (pseudoinfarto).' },
            { type: 'match', prompt: 'Relaciona el hallazgo en una taquicardia de QRS ancho con su implicación', pairs: [['Latido de captura o fusión', 'Disociación AV: TV'], ['Eje que alterna latido a latido', 'Digoxina o TVPC'], ['Concordancia negativa V1–V6', 'Muy sugestiva de TV'], ['QRS ancho, irregular y cambiante', 'FA preexcitada']], explain: 'En la FA preexcitada evita frenadores del nodo AV (incluida amiodarona IV): cardioversión eléctrica si hay inestabilidad; si no, procainamida o ibutilida (ESC 2019).' },
          ],
        },
        {
          id: 'ecg-u10-l3',
          title: 'Bradiarritmias y marcapasos',
          questions: [
            { type: 'mc', prompt: 'Observa la tira: una de cada dos P no conduce. ¿Qué puedes afirmar?', ecg: '2to1-avb', options: ['No permite distinguir Mobitz I de Mobitz II', 'Es siempre un Mobitz II infrahisiano', 'Es un BAV de 1.er grado avanzado', 'Es un BAV completo con escape'], answer: 0, explain: 'Sin dos PR consecutivos no se ve si el PR se alarga. Orientan el QRS (ancho → infrahisiano) y buscar tiras 3:2; el BAV 2:1 infrahisiano es indicación de marcapasos.' },
            { type: 'tap', prompt: 'Toca una onda P que no conduce.', ecg: '2to1-avb', wave: 'pBlocked', explain: 'La P bloqueada llega puntual a su ritmo (PP constante) pero no la sigue ningún QRS; a menudo queda medio escondida al final de la T.' },
            { type: 'mc', prompt: 'Observa la tira. La pausa no es múltiplo del PP previo. ¿Diagnóstico?', ecg: 'sinus-arrest', options: ['Paro sinusal', 'Bloqueo sinoauricular de 2.º grado', 'BAV de 2.º grado Mobitz II', 'Extrasístole auricular bloqueada'], answer: 0, explain: 'En el bloqueo sinoauricular la pausa es múltiplo exacto del PP; en el paro sinusal no. En el Mobitz II se vería una P sin QRS. Pausas sintomáticas: marcapasos.' },
            { type: 'tf', prompt: 'Este ritmo regular de QRS estrecho sin P previas se origina en el ventrículo.', ecg: 'junctional', answer: false, explain: 'Un QRS estrecho indica activación por el His: es un escape de la unión (40–60 lpm), a veces con P retrógrada tras el QRS. El escape ventricular es de QRS ancho y 20–40 lpm.' },
            { type: 'tap', prompt: 'Portador de marcapasos. Toca una espiga de estimulación.', ecg: 'pacer-undersense', wave: 'spike', explain: 'Fíjate en las espigas que caen sobre el ST o la T sin capturar: el marcapasos no detecta los QRS propios (infradetección). Una espiga sobre la T puede inducir arritmias.' },
            { type: 'mc', prompt: 'Mujer de 81 años con marcapasos por BAV completo consulta por mareos. ¿Qué muestra la tira?', ecg: 'pacer-fail', options: ['Fallo de captura', 'Fallo de detección (infradetección)', 'Sobredetección con inhibición', 'Funcionamiento normal a demanda'], answer: 0, explain: 'Hay espigas a la frecuencia programada no seguidas de QRS. Causas: dislocación del electrodo, aumento del umbral (hiperK, isquemia, fármacos) o batería agotada. Interroga el dispositivo y haz Rx de tórax.' },
          ],
        },
        {
          id: 'ecg-u10-l4',
          title: 'Trampas del trazado',
          questions: [
            { type: 'mc', prompt: 'Observa el ECG: I es negativo (P, QRS y T) y aVR positivo. ¿Qué ocurre?', ecg12: 'limb-reversal', options: ['Electrodos de los brazos invertidos', 'Dextrocardia', 'IAM lateral extenso', 'Hemibloqueo posterior izquierdo'], answer: 0, explain: 'La progresión de R normal en precordiales descarta la dextrocardia (en ella la R decrece de V1 a V6). Repite el ECG colocando bien los electrodos.' },
            { type: 'tf', prompt: 'Este ECG cumple el criterio de bajo voltaje: QRS < 5 mm en todas las derivaciones de miembros.', ecg12: 'lowvoltage', answer: true, explain: 'Causas: derrame pericárdico, obesidad, EPOC, hipotiroidismo y amiloidosis. Bajo voltaje con pared del VI gruesa en el eco sugiere amiloidosis.' },
            { type: 'mc', prompt: 'Mujer de 58 años con cáncer de pulmón, disnea, hipotensión e ingurgitación yugular. Observa la tira. ¿Diagnóstico más probable?', ecg: 'alternans', options: ['Taponamiento cardiaco', 'Tromboembolismo pulmonar', 'IAMCEST anterior', 'Neumotórax a tensión'], answer: 0, explain: 'Taquicardia, bajo voltaje y alternancia eléctrica (el corazón oscila en el derrame). Confirma con eco y prepara pericardiocentesis.' },
            { type: 'mc', prompt: 'Observa la morfología del descenso del ST. ¿Qué es lo más probable?', ecg12: 'digoxin', options: ['Efecto digitálico', 'Isquemia subendocárdica', 'Hipopotasemia', 'Sobrecarga por HVI'], answer: 0, explain: 'ST "en cubeta" que cae despacio y sube bruscamente, con QT corto. Indica que el paciente toma digoxina, no que esté intoxicado: eso lo sugieren las arritmias.' },
            { type: 'tf', prompt: 'En este ECG, el QT parece largo porque la onda U se funde con la T: en realidad se mide un intervalo QU.', ecg12: 'hypok', answer: true, explain: 'Hipopotasemia: T aplanadas, U prominentes en V2–V3 y discreto descenso del ST. Aumenta el riesgo de arritmias ventriculares, sobre todo con digoxina o fármacos que alargan el QT.' },
            { type: 'mc', prompt: 'Varón de 67 años con enfermedad renal crónica, debilidad y este ECG. ¿Qué fármaco administras primero?', ecg12: 'hyperk12', options: ['Gluconato cálcico IV', 'Bicarbonato sódico IV', 'Furosemida IV', 'Resinas de intercambio orales'], answer: 0, explain: 'T picudas y P aplanadas: hiperpotasemia con repercusión en el ECG. El calcio estabiliza la membrana en minutos (no baja el K⁺); después, insulina con glucosa y salbutamol.' },
          ],
        },
      ],
    },
    {
      id: 'ecg-u11',
      title: 'Canalopatías en el trazado',
      guide: {
        intro: 'Practica con trazados de 12 derivaciones lo que distingue a cada canalopatía: el patrón de Brugada, la morfología de la T en cada tipo de QT largo y la onda épsilon. Cierra con el diferencial de las taquicardias auriculares (ESC arritmias ventriculares 2022, TSV 2019).',
        sections: [
          {
            title: 'Brugada tipo 1 frente a tipo 2',
            points: [
              'Tipo 1: J ≥ 2 mm, ST "en cúpula" descendente y T negativa en V1–V2. Es el único diagnóstico.',
              'Tipo 2: "silla de montar", ST ≥ 0,5 mm cóncavo y T positiva. Si un bloqueador del sodio lo convierte en tipo 1, el diagnóstico exige además clínica compatible (síncope arrítmico, historia familiar).',
              'Registra V1–V2 también en el 2.º y 3.er espacio intercostal; trata la fiebre de forma precoz.',
            ],
          },
          {
            title: 'QT largo: T y tratamiento según el tipo',
            points: [
              'LQT1: T de base ancha; ejercicio y natación; responde muy bien al betabloqueante (nadolol, propranolol).',
              'LQT2: T de bajo voltaje y bífida; ruidos bruscos y posparto; betabloqueante y mantener K⁺ normal.',
              'LQT3: ST largo isoeléctrico con T tardía; eventos en reposo y sueño; mexiletina añadida al tratamiento.',
            ],
          },
          {
            title: 'Miocardiopatía arritmogénica y taquicardias auriculares',
            points: [
              'MAVD: T negativas en V1–V3 y onda épsilon (muescas tras el QRS en V1–V2).',
              'TAM: ≥ 3 morfologías de P con línea isoeléctrica entre ellas; típica de la EPOC. Trata la causa; la cardioversión no sirve.',
              'Flutter 4:1: ondas F a ~300/min en dientes de sierra con FC regular ~75 lpm. Anticoagula como la FA; ablación del istmo cavotricuspídeo.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'ecg-u11-l1',
          title: 'Brugada y QT largo por tipos',
          questions: [
            { type: 'mc', prompt: 'Varón de 38 años con síncope durante un cuadro febril y este ECG. ¿Qué fármaco está contraindicado?', ecg12: 'brugada1', options: ['Flecainida', 'Paracetamol', 'Quinidina', 'Isoproterenol'], answer: 0, explain: 'Brugada tipo 1 desenmascarado por la fiebre. Los bloqueadores del sodio (flecainida, propafenona) lo agravan; la quinidina y el isoproterenol se usan en las tormentas arrítmicas.' },
            { type: 'tf', prompt: 'Este patrón "en silla de montar" en V2 basta por sí solo para diagnosticar síndrome de Brugada.', ecg12: 'brugada2', answer: false, explain: 'El tipo 2 solo es sugestivo: si un test con ajmalina, flecainida o procainamida lo convierte en tipo 1, el diagnóstico requiere además clínica compatible. Prueba también V1–V2 en espacios intercostales altos.' },
            { type: 'match', prompt: 'Relaciona el patrón con su rasgo en el ECG', pairs: [['LQT1', 'T de base ancha'], ['LQT2', 'T bífida de bajo voltaje'], ['LQT3', 'ST largo con T tardía'], ['Brugada tipo 1', 'ST en cúpula y T negativa']], explain: 'La morfología de la T orienta el genotipo del QT largo antes del estudio genético y ayuda a elegir tratamiento y consejos.' },
            { type: 'mc', prompt: 'Chico de 14 años con síncope mientras nadaba y este ECG. ¿Tratamiento de primera línea?', ecg12: 'lqt1', options: ['Nadolol', 'Mexiletina en monoterapia', 'Quinidina', 'Isoproterenol'], answer: 0, explain: 'LQT1 (IKs): los eventos dependen del tono adrenérgico y el betabloqueante no selectivo es muy eficaz. Evita la natación de competición y los fármacos que alargan el QT.' },
            { type: 'mc', prompt: 'Mujer de 31 años, síncope en el posparto al sonar el teléfono. Observa la T. ¿Subtipo más probable?', ecg12: 'lqt2', options: ['LQT2', 'LQT1', 'LQT3', 'QT largo adquirido por fármacos'], answer: 0, explain: 'T bífida de bajo voltaje y desencadenante auditivo: LQT2 (KCNH2). Betabloqueante, mantener el K⁺ normal y evitar despertadores y timbres bruscos.' },
            { type: 'tf', prompt: 'En este subtipo, con eventos en reposo y durante el sueño, se recomienda la mexiletina si el QT está prolongado.', ecg12: 'lqt3', answer: true, explain: 'LQT3 (SCN5A, ganancia de función del sodio): la mexiletina bloquea la corriente tardía y acorta el QT. Si hay parada recuperada, DAI.' }, // Fuente: ESC 2022 arritmias ventriculares
          ],
        },
        {
          id: 'ecg-u11-l2',
          title: 'Épsilon y taquicardias auriculares',
          questions: [
            { type: 'mc', prompt: 'Varón de 22 años, futbolista, con palpitaciones al esfuerzo. ¿Qué hallazgos ves en V1–V3?', ecg12: 'arvc', options: ['T negativas y onda épsilon', 'ST en cúpula con T negativa', 'PR corto con onda delta', 'Ondas U prominentes'], answer: 0, explain: 'T negativas en V1–V3 sin BRD en > 14 años y muescas tras el QRS (épsilon): sugiere miocardiopatía arritmogénica. Pide RM cardiaca y Holter, y suspende el deporte intenso.' },
            { type: 'tf', prompt: 'La onda épsilon se busca al inicio del QRS en V1–V3, como la onda delta.', ecg12: 'arvc', answer: false, explain: 'Aparece al final del QRS, entre este y la T: refleja la activación tardía del VD enfermo. Mejora su detección aumentar la ganancia o usar derivaciones de Fontaine.' },
            { type: 'mc', prompt: 'Varón de 76 años con EPOC agudizada, SatO₂ 86 %. Observa la tira. ¿Diagnóstico?', ecg: 'mat', options: ['Taquicardia auricular multifocal', 'Fibrilación auricular', 'Flutter con conducción variable', 'Taquicardia sinusal'], answer: 0, explain: 'Ritmo irregular > 100 lpm con P de ≥ 3 morfologías y línea isoeléctrica entre ellas (en la FA no hay P). Trata la hipoxemia y corrige K⁺ y Mg²⁺.' },
            { type: 'tf', prompt: 'La cardioversión eléctrica es un tratamiento eficaz de la taquicardia auricular multifocal.', ecg: 'mat', answer: false, explain: 'No hay un circuito único que interrumpir: recurre al instante. Si persiste tras tratar la causa, verapamilo, diltiazem o un betabloqueante selectivo (ESC 2019).' },
            { type: 'mc', prompt: 'Observa la tira: ritmo regular a ~75 lpm. ¿Cuál es el diagnóstico?', ecg: 'afl-4to1', options: ['Flutter auricular con conducción 4:1', 'Taquicardia auricular multifocal', 'FA con respuesta ventricular lenta', 'Ritmo sinusal con BAV 2:1'], answer: 0, explain: 'Ondas F en dientes de sierra a ~300/min, de las que conduce una de cada cuatro. Anticoagula según el riesgo como en la FA; la ablación del istmo cavotricuspídeo es muy eficaz.' },
            { type: 'match', prompt: 'Relaciona la actividad auricular con la arritmia', pairs: [['Ondas F a ~300/min', 'Flutter auricular típico'], ['P de ≥ 3 morfologías', 'Taquicardia auricular multifocal'], ['Sin P, línea basal ondulante', 'Fibrilación auricular'], ['P iguales con PR constante', 'Taquicardia sinusal']], explain: 'Mira siempre la línea entre los QRS: isoeléctrica con P cambiantes (TAM), en sierra (flutter) o caótica sin P (FA).' },
          ],
        },
      ],
    },
  ],
};
