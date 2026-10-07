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
            { type: 'mc', prompt: 'La escala CHA₂DS₂-VASc en la FA estima…', options: ['Riesgo de ictus', 'Riesgo de sangrado', 'Probabilidad de cardioversión exitosa', 'Riesgo de muerte súbita'], answer: 0, explain: 'Guía la anticoagulación. El riesgo hemorrágico se valora con HAS-BLED.' },
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
            { type: 'mc', prompt: 'Objetivo de tiempo diagnóstico-reperfusión con angioplastia primaria en IAMCEST:', options: ['≤ 120 min (idealmente ≤ 90)', '≤ 6 horas', '≤ 24 horas', '≤ 30 min'], answer: 0, explain: 'Si no se puede ICP primaria en ≤ 120 min, fibrinolisis.' },
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
  ],
};
