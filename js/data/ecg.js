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
            { type: 'mc', prompt: 'Joven de 22 años con R dominante en V1 y sin rSR'. La tira de II muestra esto. ¿Qué explica la R alta en V1?', ecg: 'wpw', options: ['Vía accesoria izquierda (WPW)', 'Hipertrofia ventricular derecha', 'Bloqueo de rama derecha', 'IAM posterior antiguo'], answer: 0, explain: 'PR corto y onda delta: preexcitación. Una vía de pared libre izquierda activa antes la región posterobasal y genera R alta en V1.' },
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
              'Posteriores (V7–V9) y derechas (V3R–V4R): ≥ 0,5 mm (≥ 1 mm en varones < 40 años).',
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
  ],
};
