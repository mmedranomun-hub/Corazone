// Curso de casos clínicos integrados (ETT, ETE y cateterismo).
// Cada lección es un caso: `case` describe la viñeta y `context` añade la evolución o los hallazgos.
export default {
  id: 'casos',
  title: 'Casos',
  subtitle: 'Casos clínicos',
  icon: '📋',
  color: '#8e4ec6',
  units: [
    {
      id: 'casos-u1',
      title: 'Ecocardiograma transtorácico (ETT)',
      lessons: [
        {
          id: 'casos-u1-l1',
          title: 'Disnea y FEVI reducida',
          case: {
            title: 'Varón de 58 años con disnea progresiva',
            text: 'Varón de 58 años, exbebedor importante, sin antecedentes cardiológicos. Refiere disnea progresiva de 3 meses hasta hacerse de mínimos esfuerzos (NYHA III), ortopnea de dos almohadas y edemas maleolares. Exploración: TA 105/70 mmHg, FC 98 lpm, ingurgitación yugular, crepitantes bibasales y soplo holosistólico apical 2/6. ECG: ritmo sinusal con bloqueo de rama izquierda (QRS 160 ms). NT-proBNP 4.500 pg/ml.',
          },
          questions: [
            { type: 'mc', prompt: 'Ante la sospecha de insuficiencia cardiaca con NT-proBNP elevado, ¿cuál es la prueba de imagen inicial?', ecg12: 'lbbb12', options: ['Ecocardiograma transtorácico', 'Coronariografía urgente', 'Ecocardiograma transesofágico', 'TC torácico con contraste'], answer: 0, explain: 'El ETT es la prueba de imagen de primera línea (clase I, ESC 2021) para confirmar la IC, medir la FEVI y orientar la etiología.' },
            { type: 'mc', context: 'En el ETT: VI dilatado (DTDVI 70 mm, VTDVI indexado 110 ml/m²) con hipocinesia global y FEVI por Simpson biplano del 28 %. Insuficiencia mitral funcional moderada.', prompt: '¿Cómo se clasifica la insuficiencia cardiaca de este paciente?', options: ['IC con FEVI reducida', 'IC con FEVI ligeramente reducida', 'IC con FEVI preservada', 'IC con FEVI mejorada'], answer: 0, explain: 'FEVI ≤ 40 % = IC-FEr; 41–49 % = ligeramente reducida; ≥ 50 % = preservada (ESC 2021).' },
            { type: 'mc', context: 'Doppler mitral: onda E 1,1 m/s, relación E/A 2,8, tiempo de desaceleración 120 ms; E/e′ medio 18.', prompt: '¿Qué indica este patrón de llenado?', options: ['Patrón restrictivo con presiones de llenado elevadas', 'Alteración de la relajación con presiones normales', 'Llenado normal para la edad', 'Patrón pseudonormal con presiones bajas'], answer: 0, explain: 'E/A ≥ 2, TDE corto y E/e′ > 14 indican disfunción diastólica grado III con presión auricular izquierda elevada, coherente con la congestión.' },
            { type: 'mc', context: 'Velocidad máxima de la insuficiencia tricuspídea 3,2 m/s. VCI de 24 mm sin colapso inspiratorio (PAD estimada 15 mmHg).', prompt: 'Calcula la PSAP estimada.', options: ['≈ 56 mmHg', '≈ 41 mmHg', '≈ 28 mmHg', '≈ 70 mmHg'], answer: 0, explain: 'Bernoulli simplificado: 4 × 3,2² ≈ 41 mmHg de gradiente VD-AD; sumando la PAD (15) → PSAP ≈ 56 mmHg.' },
            { type: 'match', prompt: 'Relaciona cada pilar del tratamiento de la IC-FEr con un ejemplo', pairs: [['ARNI', 'Sacubitrilo-valsartán'], ['Betabloqueante', 'Bisoprolol'], ['Antagonista mineralocorticoide', 'Espironolactona'], ['iSGLT2', 'Dapagliflozina']], explain: 'Los cuatro grupos tienen indicación clase I en IC-FEr (ESC 2021) y deben iniciarse precozmente.' },
            { type: 'tf', context: 'Tras 3 meses de tratamiento médico óptimo persiste FEVI 30 %, NYHA II–III y BRI con QRS 160 ms.', prompt: 'Está indicada la terapia de resincronización cardiaca (TRC).', answer: true, explain: 'FEVI ≤ 35 %, ritmo sinusal y BRI con QRS ≥ 150 ms pese a tratamiento óptimo es indicación clase I de TRC (ESC 2021).' },
          ],
        },
        {
          id: 'casos-u1-l2',
          title: 'Estenosis aórtica de bajo flujo',
          case: {
            title: 'Mujer de 79 años con soplo y disnea',
            text: 'Mujer de 79 años con hipertensión y dislipemia. Consulta por disnea de moderados esfuerzos y opresión torácica al subir cuestas desde hace 6 meses. Exploración: soplo sistólico eyectivo rudo 3/6 en foco aórtico irradiado a carótidas, segundo ruido débil y pulso carotídeo lento y de baja amplitud. ECG: ritmo sinusal con criterios de hipertrofia ventricular izquierda.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué dato de la exploración sugiere más una estenosis aórtica grave?', ecg12: 'lvh', options: ['Pulso parvus et tardus y 2R débil', 'Soplo de intensidad 3/6', 'Irradiación del soplo a carótidas', 'Hipertensión arterial'], answer: 0, explain: 'La intensidad del soplo puede disminuir cuando cae el flujo; el pulso lento y débil y la desaparición del componente aórtico del 2R indican gravedad.' },
            { type: 'mc', context: 'ETT: válvula trivalva muy calcificada. Vmax 3,6 m/s, gradiente medio 32 mmHg, FEVI 30 %. Diámetro del TSVI 2,0 cm, ITV TSVI 15 cm, ITV aórtica 60 cm. Superficie corporal 1,68 m².', prompt: 'Calcula el área valvular aórtica por la ecuación de continuidad.', options: ['≈ 0,8 cm²', '≈ 1,2 cm²', '≈ 0,5 cm²', '≈ 1,6 cm²'], answer: 0, explain: 'Área TSVI = π × (1,0)² ≈ 3,14 cm². AVA = 3,14 × 15 / 60 ≈ 0,79 cm². El volumen sistólico (3,14 × 15 ≈ 47 ml; ≈ 28 ml/m²) es bajo (< 35 ml/m²).' },
            { type: 'mc', prompt: 'AVA < 1 cm² con gradiente medio < 40 mmHg y FEVI 30 %. ¿Cómo se clasifica?', options: ['EA de bajo flujo y bajo gradiente con FEVI reducida', 'EA grave de alto gradiente', 'EA moderada', 'EA de bajo flujo paradójico con FEVI preservada'], answer: 0, explain: 'La discordancia área-gradiente con FEVI < 50 % y VS indexado ≤ 35 ml/m² define la EA clásica de bajo flujo-bajo gradiente (ESC 2021).' },
            { type: 'mc', prompt: '¿Qué prueba permite distinguir una EA grave verdadera de una pseudograve?', options: ['Eco de estrés con dobutamina a dosis bajas', 'Ergometría convencional', 'Ecocardiograma transesofágico', 'Cateterismo derecho'], answer: 0, explain: 'La dobutamina aumenta el flujo: si el gradiente sube (≥ 40 mmHg) con AVA que sigue ≤ 1 cm² es grave verdadera; si el área aumenta > 1 cm², es pseudograve. También valora la reserva contráctil.' },
            { type: 'mc', context: 'Con dobutamina el volumen sistólico aumenta un 25 %, el gradiente medio sube a 45 mmHg y el AVA queda en 0,85 cm².', prompt: '¿Cuál es la interpretación?', options: ['EA grave verdadera con reserva contráctil', 'EA pseudograve', 'Ausencia de reserva contráctil', 'Obstrucción dinámica del TSVI'], answer: 0, explain: 'Aumento del VS ≥ 20 % = reserva contráctil; gradiente ≥ 40 mmHg con área fija confirma la estenosis grave. Sin reserva contráctil, la TC con calcio valvular ayuda a decidir.' },
            { type: 'match', prompt: 'Relaciona el parámetro con su umbral de EA grave', pairs: [['Velocidad máxima', '≥ 4 m/s'], ['Gradiente medio', '≥ 40 mmHg'], ['Área valvular', '< 1,0 cm²'], ['Área indexada', '< 0,6 cm²/m²']], explain: 'Criterios ESC/EACVI. En esta paciente sintomática de 79 años con EA grave verdadera, el Heart Team suele indicar TAVI transfemoral (orientativa en ≥ 70 años o riesgo quirúrgico alto, ESC/EACTS 2025).' },
          ],
        },
        {
          id: 'casos-u1-l3',
          title: 'Derrame pericárdico y taponamiento',
          case: {
            title: 'Mujer de 52 años con disnea e hipotensión',
            text: 'Mujer de 52 años en tratamiento por cáncer de mama metastásico. Acude por disnea progresiva de una semana, dolor torácico opresivo y mareo. TA 85/60 mmHg, FC 122 lpm, SatO₂ 93 %. Ingurgitación yugular, tonos cardiacos apagados y descenso de la TA sistólica de 15 mmHg en inspiración. ECG: taquicardia sinusal con bajos voltajes y alternancia eléctrica.',
          },
          questions: [
            { type: 'mc', prompt: 'Hipotensión, ingurgitación yugular y tonos apagados constituyen…', options: ['La tríada de Beck', 'La tríada de Virchow', 'El signo de Kussmaul aislado', 'La tríada de Cushing'], answer: 0, explain: 'La tríada de Beck sugiere taponamiento; el pulso paradójico (> 10 mmHg) y la alternancia eléctrica lo refuerzan.' },
            { type: 'mc', context: 'ETT urgente: derrame pericárdico circunferencial de 25 mm con corazón "bailando"; colapso diastólico de la pared libre del VD y colapso sistólico de la AD. VCI de 25 mm sin colapso inspiratorio.', prompt: '¿Cuál de estos signos es el más específico de taponamiento?', options: ['Colapso diastólico del VD', 'Colapso sistólico de la AD', 'Tamaño del derrame > 20 mm', 'Derrame circunferencial'], answer: 0, explain: 'El colapso de la AD es precoz y sensible; el colapso diastólico del VD es más específico. El taponamiento es un diagnóstico hemodinámico, no de tamaño.' },
            { type: 'tf', prompt: 'En el taponamiento, la velocidad de la onda E mitral disminuye de forma marcada (> 25–30 %) en inspiración.', answer: true, explain: 'La interdependencia ventricular exagerada produce variación respiratoria recíproca de los flujos mitral (> 25–30 %) y tricuspídeo (> 40 %), equivalente ecográfico del pulso paradójico.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con su significado', pairs: [['Pulso paradójico', 'Interdependencia ventricular'], ['VCI pletórica sin colapso', 'Presión de AD elevada'], ['Alternancia eléctrica', 'Movimiento pendular del corazón'], ['Colapso diastólico del VD', 'Presión pericárdica > presión del VD']], explain: 'Todos traducen que la presión intrapericárdica supera la de llenado de las cavidades derechas.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento inmediato?', options: ['Pericardiocentesis urgente guiada por ecocardiografía', 'Diuréticos intravenosos', 'Nitroglicerina intravenosa', 'Colchicina e ibuprofeno'], answer: 0, explain: 'El taponamiento es indicación clase I de pericardiocentesis urgente. Diuréticos y vasodilatadores disminuyen la precarga y pueden precipitar el colapso.' },
            { type: 'tf', prompt: 'Si la paciente necesita intubación, la ventilación con presión positiva es segura porque mejora el llenado del VD.', answer: false, explain: 'La presión positiva reduce el retorno venoso y puede causar colapso hemodinámico; hay que drenar antes o, si no es posible, intubar con extrema precaución y volumen.' },
          ],
        },
        {
          id: 'casos-u1-l4',
          title: 'Síncope de esfuerzo en un joven',
          case: {
            title: 'Varón de 19 años con síncope jugando al fútbol',
            text: 'Varón de 19 años, futbolista federado, que presenta un síncope durante un sprint con recuperación espontánea en segundos. Un tío paterno murió súbitamente a los 35 años. Exploración: soplo sistólico 3/6 en borde esternal izquierdo que aumenta con Valsalva y al pasar de cuclillas a bipedestación, y disminuye al ponerse en cuclillas. ECG: criterios de voltaje de HVI con ondas T negativas profundas en derivaciones laterales.',
          },
          questions: [
            { type: 'mc', prompt: 'Un soplo sistólico que aumenta con Valsalva y en bipedestación sugiere sobre todo…', ecg12: 'lvh', options: ['Miocardiopatía hipertrófica obstructiva', 'Estenosis aórtica valvular', 'Comunicación interventricular', 'Insuficiencia mitral reumática'], answer: 0, explain: 'Al disminuir la precarga el VI se hace más pequeño y aumenta la obstrucción dinámica del TSVI. La mayoría de los demás soplos disminuyen con Valsalva.' },
            { type: 'mc', context: 'ETT: hipertrofia septal asimétrica de 24 mm (pared posterior 11 mm), movimiento sistólico anterior (SAM) del velo anterior mitral con insuficiencia mitral posterolateral. Doppler continuo en TSVI: Vmax 4,5 m/s en reposo, de morfología "en daga".', prompt: 'Calcula el gradiente máximo en el TSVI.', options: ['≈ 81 mmHg', '≈ 45 mmHg', '≈ 18 mmHg', '≈ 120 mmHg'], answer: 0, explain: 'Bernoulli: 4 × 4,5² = 81 mmHg. La curva de pico tardío ("en daga") distingue la obstrucción dinámica de la valvular.' },
            { type: 'tf', prompt: 'Se habla de obstrucción del TSVI con un gradiente ≥ 30 mmHg, y ≥ 50 mmHg es el umbral para plantear terapia de reducción septal si hay síntomas refractarios.', answer: true, explain: 'Umbrales de la guía ESC 2023 de miocardiopatías. Si en reposo es < 50 mmHg, se provoca con Valsalva o eco de esfuerzo.' },
            { type: 'mc', prompt: '¿Qué fármaco está contraindicado o debe evitarse en este paciente?', options: ['Nitratos y otros vasodilatadores', 'Bisoprolol', 'Verapamilo', 'Mavacamten'], answer: 0, explain: 'Los vasodilatadores (y la digoxina) aumentan la obstrucción. El betabloqueante no vasodilatador es la primera línea; el verapamilo es alternativa.' },
            { type: 'match', prompt: 'Relaciona cada opción terapéutica de la MCH obstructiva con su descripción', pairs: [['Betabloqueante', 'Primera línea en obstrucción sintomática'], ['Mavacamten', 'Inhibidor de la miosina cardiaca'], ['Miectomía septal', 'Reducción septal quirúrgica'], ['Ablación septal con alcohol', 'Reducción septal percutánea']], explain: 'La reducción septal se reserva para gradiente ≥ 50 mmHg con síntomas pese a tratamiento médico, en centros con experiencia.' },
            { type: 'mc', prompt: 'Además del tratamiento de la obstrucción, ¿qué es imprescindible?', options: ['Estratificar el riesgo de muerte súbita (HCM Risk-SCD) y cribar a los familiares de primer grado', 'Repetir el ETT en 5 años', 'Iniciar anticoagulación oral', 'Indicar ablación de venas pulmonares'], answer: 0, explain: 'El síncope inexplicado y la muerte súbita familiar elevan el riesgo; con HCM Risk-SCD ≥ 6 % debe considerarse un DAI (IIa, ESC 2023). Los familiares precisan ECG, eco y estudio genético.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u2',
      title: 'Ecocardiograma transesofágico (ETE)',
      lessons: [
        {
          id: 'casos-u2-l1',
          title: 'Endocarditis protésica',
          case: {
            title: 'Varón de 67 años con prótesis aórtica y fiebre',
            text: 'Varón de 67 años portador de una bioprótesis aórtica desde hace 3 años. Ingresa por fiebre de 39 °C de dos semanas y astenia. Exploración: soplo sistólico aórtico nuevo y hemorragias en astilla. Hemocultivos: 3 de 3 positivos para Staphylococcus aureus sensible a meticilina. ECG: ritmo sinusal con PR de 240 ms, que era de 160 ms hace un año. ETT: imagen dudosa sobre la prótesis por sombra acústica.',
          },
          questions: [
            { type: 'mc', prompt: 'Con ETT no concluyente en un portador de prótesis, ¿qué está indicado?', ecg: 'avb1', options: ['ETE en todos los casos de sospecha de endocarditis protésica', 'Repetir el ETT en 7–10 días y no hacer más', 'ETE solo si el ETT muestra vegetación', 'RM cardiaca como primera opción'], answer: 0, explain: 'ESC 2023: ETE (clase I) en sospecha de EI con ETT negativo o no diagnóstico y en todo portador de prótesis; además, es superior para detectar complicaciones perivalvulares.' },
            { type: 'mc', prompt: 'La prolongación nueva del PR en una endocarditis aórtica debe hacer sospechar…', options: ['Extensión perivalvular (absceso) hacia el sistema de conducción', 'Toxicidad por antibióticos', 'Tono vagal por la fiebre', 'Embolia coronaria'], answer: 0, explain: 'El absceso de la raíz aórtica puede alcanzar el nodo AV y el haz de His; un BAV nuevo es un signo de alarma.' },
            { type: 'match', prompt: 'Relaciona el plano de ETE con lo que valora mejor', pairs: [['Medioesofágico eje corto aórtico (30–45°)', 'Velos aórticos y raíz en sección transversal'], ['Medioesofágico eje largo (120–135°)', 'TSVI, válvula aórtica y aorta ascendente'], ['Medioesofágico 4 cámaras (0–10°)', 'Válvulas mitral y tricúspide'], ['Transgástrico eje corto (0–20°)', 'Contractilidad segmentaria del VI']], explain: 'Para la válvula aórtica se combinan los planos medioesofágicos de eje corto y largo, con Doppler color.' },
            { type: 'mc', context: 'En el ETE se observa una vegetación móvil de 12 mm sobre un velo protésico y una cavidad ecolucente perianular posterior de 15 mm que se llena con Doppler color en sístole.', prompt: '¿Qué complicación describe la cavidad perianular?', options: ['Pseudoaneurisma (absceso que comunica con la luz)', 'Fuga paravalvular simple', 'Trombo protésico', 'Hematoma posquirúrgico residual'], answer: 0, explain: 'Un absceso es una zona perivalvular engrosada sin flujo; si se comunica con la luz y se llena con color es un pseudoaneurisma. Ambos son extensión perivalvular.' },
            { type: 'mc', prompt: '¿Qué actitud terapéutica corresponde según la guía ESC 2023?', options: ['Antibioterapia y cirugía urgente (en 3–5 días)', 'Antibioterapia 6 semanas sin cirugía', 'Cirugía electiva tras completar el antibiótico', 'Retirar la prótesis por vía percutánea'], answer: 0, explain: 'La infección localmente no controlada (absceso, pseudoaneurisma, fístula) es indicación de cirugía urgente. S. aureus sobre prótesis también favorece la cirugía.' },
            { type: 'tf', prompt: 'Las varices esofágicas son una contraindicación absoluta para el ETE.', answer: false, explain: 'Son relativa (valorar riesgo-beneficio). Absolutas: estenosis o perforación esofágica, divertículo, tumor esofágico o cirugía esofágica reciente. Requiere ayuno de ≥ 6 h y sedación.' },
          ],
        },
        {
          id: 'casos-u2-l2',
          title: 'Ictus criptogénico y FOP',
          case: {
            title: 'Mujer de 42 años con ictus sin causa aparente',
            text: 'Mujer de 42 años, sin factores de riesgo cardiovascular, que presenta afasia y paresia del brazo derecho de inicio brusco tras levantar una caja pesada. La RM muestra un infarto cortical en territorio de la arteria cerebral media izquierda. Angio-TC de troncos supraaórticos normal, Holter de 72 h sin fibrilación auricular y ETT basal normal. ECG en ritmo sinusal normal.',
          },
          questions: [
            { type: 'mc', prompt: 'Ante un ictus criptogénico en una paciente joven, ¿qué estudio cardiaco es el siguiente paso?', ecg12: 'normal', options: ['ETE con test de suero salino agitado (burbujas) y Valsalva', 'Ergometría', 'Coronariografía', 'Holter de 24 h repetido'], answer: 0, explain: 'El ETE con burbujas detecta shunt derecha-izquierda (FOP) y valora septo, orejuela y aorta. El Doppler transcraneal con burbujas es una alternativa sensible para el cribado.' },
            { type: 'mc', prompt: '¿En qué plano de ETE se valora mejor el septo interauricular?', options: ['Medioesofágico bicava (~90–110°)', 'Transgástrico eje corto', 'Medioesofágico eje largo (~130°)', 'Aorta descendente eje corto'], answer: 0, explain: 'El plano bicava muestra el septo interauricular, la fosa oval y ambas venas cavas; es el clásico para FOP y CIA tipo seno venoso.' },
            { type: 'mc', context: 'En el ETE, al liberar la maniobra de Valsalva pasan más de 20 microburbujas a la AI en los 3 primeros latidos tras opacificarse la AD. El septo interauricular es aneurismático, con excursión de 12 mm.', prompt: '¿Cuál es el diagnóstico?', options: ['Foramen oval permeable con shunt grande y aneurisma del septo', 'Shunt intrapulmonar (fístula arteriovenosa)', 'CIA tipo ostium secundum con shunt izquierda-derecha', 'Test negativo'], answer: 0, explain: 'Paso precoz (≤ 3 latidos) = shunt intracardiaco; un shunt grande y el aneurisma del septo son rasgos de alto riesgo.' },
            { type: 'tf', prompt: 'La llegada de burbujas a la AI de forma tardía (después de 3–5 latidos) sugiere un shunt intrapulmonar.', answer: true, explain: 'Las burbujas tardan más en atravesar el lecho pulmonar; por eso el tiempo de aparición ayuda a localizar el shunt.' },
            { type: 'match', prompt: 'Relaciona cada concepto con su significado', pairs: [['Valsalva al liberar', 'Aumenta transitoriamente la presión de la AD'], ['Aneurisma del septo', 'Excursión ≥ 10 mm'], ['Shunt grande', '> 20–30 burbujas en la AI'], ['Escala RoPE alta', 'Probable relación causal del FOP']], explain: 'La escala RoPE (edad joven, sin factores de riesgo, infarto cortical) estima la probabilidad de que el FOP sea causal.' },
            { type: 'mc', prompt: '¿Qué tratamiento se recomienda para prevenir recurrencias?', options: ['Cierre percutáneo del FOP y antiagregación', 'Anticoagulación indefinida sin cierre', 'Cierre quirúrgico con circulación extracorpórea', 'Solo control de factores de riesgo'], answer: 0, explain: 'En pacientes de 18–60 años con ictus embólico y FOP de alto riesgo, el cierre percutáneo reduce la recurrencia frente al tratamiento médico (CLOSE, RESPECT, REDUCE; consenso europeo 2018).' },
          ],
        },
        {
          id: 'casos-u2-l3',
          title: 'FA antes de la cardioversión',
          case: {
            title: 'Varón de 71 años con palpitaciones',
            text: 'Varón de 71 años con hipertensión y diabetes tipo 2. Acude por palpitaciones y disnea de inicio incierto, probablemente de 4–5 días. No toma anticoagulantes. TA 135/85 mmHg, FC 130 lpm irregular. ECG: fibrilación auricular con respuesta ventricular rápida. Función renal normal. Se plantea cardioversión eléctrica para control del ritmo.',
          },
          questions: [
            { type: 'mc', prompt: 'Calcula su CHA₂DS₂-VA.', ecg: 'afib', options: ['3', '2', '4', '1'], answer: 0, explain: 'HTA (1) + diabetes (1) + edad 65–74 (1) = 3. La guía ESC 2024 usa CHA₂DS₂-VA (sin el sexo); con ≥ 2 se recomienda anticoagulación.' },
            { type: 'match', prompt: 'Relaciona cada letra de CHA₂DS₂-VA con su significado', pairs: [['C', 'Insuficiencia cardiaca'], ['A₂', 'Edad ≥ 75 años (2 puntos)'], ['S₂', 'Ictus, AIT o embolia previa (2 puntos)'], ['V', 'Enfermedad vascular']], explain: 'H = hipertensión, D = diabetes y A = edad 65–74 años suman 1 punto cada una.' },
            { type: 'mc', prompt: 'Duración > 24 h sin anticoagulación previa. ¿Qué se necesita antes de cardiovertir?', options: ['Anticoagulación ≥ 3 semanas o ETE que descarte trombo', 'Nada, si está hemodinámicamente estable', 'Solo una dosis de heparina', 'ETT con FEVI normal'], answer: 0, explain: 'ESC 2024: si la FA dura > 24 h, anticoagulación terapéutica ≥ 3 semanas o ETE para excluir trombo; anticoagular al menos 4 semanas después (la AHA/ACC 2023 mantiene 48 h).' },
            { type: 'mc', context: 'En el ETE (medioesofágico, barrido de 0° a 135° sobre la orejuela izquierda) se observa una masa ecogénica redondeada de 15 mm en la punta de la orejuela, ecocontraste espontáneo denso y velocidad de vaciado de la orejuela de 15 cm/s.', prompt: '¿Cómo se interpretan los hallazgos?', options: ['Trombo en orejuela con flujo de vaciado muy bajo (alto riesgo embólico)', 'Músculos pectíneos normales', 'Artefacto de reverberación', 'Mixoma auricular típico'], answer: 0, explain: 'Velocidad de vaciado < 20 cm/s y ecocontraste denso indican estasis. El mixoma suele anclarse a la fosa oval, no a la orejuela.' },
            { type: 'tf', prompt: 'Los músculos pectíneos de la orejuela pueden confundirse con un trombo, por lo que conviene explorarla en varios planos.', answer: true, explain: 'Son crestas lineales que se continúan con la pared; el trombo es una masa independiente. El barrido multiplano y el contraste ayudan.' },
            { type: 'mc', prompt: '¿Qué decisión es la adecuada?', options: ['Suspender la cardioversión, anticoagular y repetir el ETE en 3–4 semanas', 'Cardioversión inmediata bajo heparina', 'Cardioversión farmacológica con flecainida', 'Cierre percutáneo urgente de la orejuela'], answer: 0, explain: 'Un trombo en la orejuela contraindica la cardioversión. Mientras tanto se controla la frecuencia (betabloqueante) y se reevalúa con ETE antes de intentarla.' },
          ],
        },
        {
          id: 'casos-u2-l4',
          title: 'Insuficiencia mitral por flail',
          case: {
            title: 'Mujer de 81 años con disnea y soplo apical',
            text: 'Mujer de 81 años con EPOC grave, enfermedad renal crónica (FG 35 ml/min) y fragilidad. Disnea de pequeños esfuerzos (NYHA III) de 4 meses. Exploración: soplo holosistólico apical 4/6 irradiado a axila y crepitantes bibasales. ECG: ritmo sinusal. ETT: insuficiencia mitral grave excéntrica, FEVI 62 %, diámetro telesistólico del VI 42 mm.',
          },
          questions: [
            { type: 'mc', prompt: 'Con la IM ya diagnosticada por ETT, ¿para qué se solicita un ETE?', options: ['Definir mecanismo y anatomía para planificar reparación o TEER', 'Confirmar que la FEVI es normal', 'Descartar enfermedad coronaria', 'Medir la presión pulmonar'], answer: 0, explain: 'El ETE (sobre todo 3D) localiza el festón afectado, mide flail gap y flail width y valora calcificación y área mitral, claves para decidir reparación quirúrgica o percutánea.' },
            { type: 'mc', context: 'En el ETE (medioesofágico comisural ~60° y vista quirúrgica 3D) se observa flail del festón P2 por rotura de cuerdas, con chorro dirigido hacia el septo interauricular.', prompt: '¿Qué tipo de Carpentier es?', options: ['Tipo II (movilidad excesiva)', 'Tipo I (movilidad normal, dilatación anular)', 'Tipo IIIa (restricción diastólica)', 'Tipo IIIb (restricción sistólica)'], answer: 0, explain: 'Prolapso y flail = tipo II. Un chorro excéntrico se dirige en sentido opuesto al velo afectado: flail posterior → chorro anterior.' },
            { type: 'mc', context: 'PISA: radio 1,0 cm con velocidad de aliasing 40 cm/s; velocidad máxima de la IM 5 m/s.', prompt: 'Calcula el orificio regurgitante efectivo (EROA).', options: ['≈ 0,50 cm²', '≈ 0,25 cm²', '≈ 0,80 cm²', '≈ 0,10 cm²'], answer: 0, explain: 'EROA = 2π r² × Va / Vmax = 6,28 × 1 × 40 / 500 ≈ 0,50 cm² (≥ 0,40 cm² = IM primaria grave).' },
            { type: 'match', prompt: 'Relaciona cada parámetro con su criterio de IM primaria grave', pairs: [['EROA', '≥ 0,40 cm²'], ['Volumen regurgitante', '≥ 60 ml'], ['Vena contracta', '≥ 7 mm'], ['Venas pulmonares', 'Inversión del flujo sistólico']], explain: 'Criterios EACVI/ESC 2021; se integran varios parámetros, sobre todo en chorros excéntricos.' },
            { type: 'tf', prompt: 'En una IM primaria grave sintomática con riesgo quirúrgico bajo, la reparación quirúrgica es de elección.', answer: true, explain: 'ESC 2021: la cirugía (preferiblemente reparación con resultado duradero esperable) es clase I en IM primaria grave sintomática y operable.' },
            { type: 'mc', context: 'El Heart Team estima un riesgo quirúrgico prohibitivo. La anatomía es favorable: flail aislado de P2, gap 6 mm, width 12 mm, área mitral 4,5 cm² y gradiente medio 2 mmHg.', prompt: '¿Qué opción es la más adecuada?', options: ['Reparación borde a borde percutánea (TEER, tipo MitraClip)', 'Sustitución valvular mitral quirúrgica', 'Solo diuréticos sin otra intervención', 'Anuloplastia percutánea aislada'], answer: 0, explain: 'TEER debe considerarse (IIa, ESC/EACTS 2025) en IM primaria grave sintomática con riesgo quirúrgico alto o prohibitivo y anatomía favorable; se guía con ETE durante el procedimiento.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u3',
      title: 'Cateterismo',
      lessons: [
        {
          id: 'casos-u3-l1',
          title: 'IAMCEST inferior con bloqueo AV',
          case: {
            title: 'Varón de 63 años con dolor torácico y bradicardia',
            text: 'Varón de 63 años, fumador e hipertenso. Dolor torácico opresivo de 2 horas de evolución con sudoración y náuseas. TA 90/60 mmHg, FC 40 lpm, piel fría, auscultación pulmonar normal e ingurgitación yugular. El hospital tiene sala de hemodinámica 24 h.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Cuál es la arteria culpable más probable?', ecg12: 'stemi-inf', options: ['Coronaria derecha', 'Descendente anterior proximal', 'Circunfleja', 'Tronco común'], answer: 0, explain: 'Elevación del ST en II, III y aVF con ST III > II y descenso especular en I y aVL apunta a la coronaria derecha.' },
            { type: 'mc', context: 'En el monitor se registra esta tira.', prompt: '¿Qué trastorno del ritmo presenta?', ecg: 'avb3', options: ['Bloqueo AV completo', 'Bloqueo AV de 2.º grado Mobitz I', 'Bradicardia sinusal', 'Ritmo idioventricular acelerado'], answer: 0, explain: 'P y QRS sin relación, con escape lento. En el IAM inferior suele ser suprahisiano (escape de QRS estrecho) y transitorio; un escape ancho, como en esta tira, indica origen más bajo.' },
            { type: 'tf', prompt: 'Ante IAM inferior con hipotensión e ingurgitación yugular, conviene registrar V3R–V4R y evitar nitratos.', answer: true, explain: 'La elevación del ST en V4R indica infarto de VD, dependiente de precarga: se evitan nitratos y diuréticos y se administra volumen con cautela.' },
            { type: 'mc', prompt: 'Según la guía ESC 2023, ¿hasta qué tiempo desde el diagnóstico hasta el paso de la guía se prefiere la ICP primaria a la fibrinólisis?', options: ['120 minutos', '30 minutos', '6 horas', '24 horas'], answer: 0, explain: 'Si se prevé > 120 min, fibrinólisis en < 10 min desde el diagnóstico. El BAV con hipotensión se trata con atropina y, si no responde, marcapasos transitorio, sin retrasar la reperfusión.' },
            { type: 'mc', context: 'En la coronariografía por vía radial derecha: oclusión trombótica de la CD media (TIMI 0), sin otras lesiones significativas. Tras paso de guía e implante de stent recupera TIMI 3 y ritmo sinusal.', prompt: '¿Qué acceso y qué stent se recomiendan en la ICP primaria?', options: ['Radial con stent farmacoactivo', 'Femoral con stent convencional', 'Radial con balón farmacoactivo sin stent', 'Femoral con stent bioabsorbible'], answer: 0, explain: 'Acceso radial y stent farmacoactivo son clase I en la ICP primaria (menos sangrado y menos reestenosis). La tromboaspiración rutinaria no se recomienda.' },
            { type: 'match', prompt: 'Relaciona cada tratamiento al alta con su pauta u objetivo', pairs: [['Doble antiagregación', 'AAS + prasugrel o ticagrelor 12 meses'], ['Estatina de alta intensidad', 'cLDL < 55 mg/dl y reducción ≥ 50 %'], ['Rehabilitación cardiaca', 'Programa supervisado tras el alta'], ['Betabloqueante', 'Indicado si FEVI ≤ 40 %']], explain: 'Prevención secundaria tras SCA según ESC 2023; el tabaco debe abandonarse por completo.' },
          ],
        },
        {
          id: 'casos-u3-l2',
          title: 'SCASEST multivaso y Heart Team',
          case: {
            title: 'Varón de 68 años diabético con dolor en reposo',
            text: 'Varón de 68 años con diabetes tipo 2 insulinizada, hipertensión y dislipemia. Un episodio de dolor torácico en reposo de 20 minutos hace 6 horas; desde entonces asintomático y con ECG actual sin cambios dinámicos. TA 140/80 mmHg, FC 80 lpm, sin signos de IC. ECG durante el dolor: descenso del ST difuso con elevación del ST en aVR. Troponina T ultrasensible 85 ng/l con ascenso a 160 ng/l a la hora. GRACE 150.',
          },
          questions: [
            { type: 'mc', prompt: 'Descenso difuso del ST con elevación en aVR sugiere…', ecg: 'stdep', options: ['Isquemia subendocárdica difusa (tronco o enfermedad multivaso)', 'Pericarditis aguda', 'IAMCEST inferior', 'Repolarización precoz benigna'], answer: 0, explain: 'Es un patrón de isquemia global; no es un IAMCEST pero indica alto riesgo y probable enfermedad de tronco o de tres vasos.' },
            { type: 'mc', prompt: 'Estable y sin dolor, con troponina dinámica y GRACE > 140. ¿Cuándo realizar la coronariografía?', options: ['Estrategia invasiva precoz (< 24 h)', 'Inmediata (< 2 h)', 'Antes del alta, sin prisa', 'Solo si una prueba de isquemia es positiva'], answer: 0, explain: 'ESC 2023: alto riesgo → invasiva precoz en < 24 h. La inmediata (< 2 h) se reserva para muy alto riesgo: inestabilidad, dolor refractario, arritmias graves, IC aguda o complicaciones mecánicas.' },
            { type: 'mc', prompt: '¿Por qué no se pretrata de rutina con un inhibidor P2Y12 antes de la coronariografía?', options: ['Porque se desconoce la anatomía y puede necesitar cirugía, que obligaría a retrasarla', 'Porque los P2Y12 están contraindicados en diabéticos', 'Porque aumentan el riesgo de trombosis', 'Porque no hay ninguno de acción rápida'], answer: 0, explain: 'ESC 2023 desaconseja el pretratamiento rutinario si se prevé cateterismo precoz. Antes de cirugía hay que suspender ticagrelor 3 días, clopidogrel 5 y prasugrel 7.' },
            { type: 'mc', context: 'En la coronariografía: estenosis del 70 % en tronco distal que afecta a la bifurcación, DA proximal 80 %, circunfleja 75 % y CD media 90 %. SYNTAX 34. FEVI 45 %.', prompt: '¿Qué estrategia de revascularización es la recomendada?', options: ['Cirugía coronaria (CABG)', 'ICP multivaso en el mismo procedimiento', 'Tratamiento médico exclusivo', 'ICP solo de la CD'], answer: 0, explain: 'Enfermedad de tronco + multivaso con SYNTAX alto (≥ 33) y diabetes: CABG es la opción preferida (clase I); la ICP no se recomienda en este escenario.' },
            { type: 'match', prompt: 'Relaciona cada término con su significado', pairs: [['SYNTAX ≤ 22', 'Complejidad anatómica baja'], ['SYNTAX 23–32', 'Complejidad intermedia'], ['SYNTAX ≥ 33', 'Complejidad alta'], ['Heart Team', 'Cardiólogo clínico, intervencionista y cirujano']], explain: 'La decisión integra anatomía (SYNTAX), riesgo quirúrgico (STS, EuroSCORE II), diabetes y preferencias del paciente.' },
            { type: 'tf', prompt: 'En una lesión intermedia, una FFR ≤ 0,80 indica que es funcionalmente significativa.', answer: true, explain: 'FFR ≤ 0,80 o iFR ≤ 0,89 identifican isquemia y orientan la revascularización de lesiones dudosas.' },
          ],
        },
        {
          id: 'casos-u3-l3',
          title: 'Shock cardiogénico',
          case: {
            title: 'Varón de 56 años con IAM anterior e hipotensión',
            text: 'Varón de 56 años sin antecedentes. Dolor torácico de 10 horas. Llega hipotenso (TA 75/50 mmHg), con FC 115 lpm, frialdad cutánea, livideces, oliguria y crepitantes hasta campos medios. Lactato 5,5 mmol/l. ECG: elevación del ST en V1–V4. Ecografía a pie de cama: acinesia anterior y apical con FEVI 25 %, sin complicaciones mecánicas.',
          },
          questions: [
            { type: 'mc', prompt: 'Se traslada a hemodinámica. ¿Qué estrategia de revascularización se recomienda en el shock?', ecg12: 'stemi-ant', options: ['ICP inmediata solo de la arteria culpable', 'ICP inmediata de todas las lesiones significativas', 'Fibrinólisis y esperar', 'Cirugía coronaria diferida'], answer: 0, explain: 'Tras el ensayo CULPRIT-SHOCK, la ESC 2023 recomienda tratar solo la culpable en la fase aguda (multivaso inmediata clase III); el resto, de forma diferida.' },
            { type: 'mc', context: 'Tras la ICP de la DA proximal, el catéter de Swan-Ganz muestra: PAD 12 mmHg, PCP 28 mmHg, GC 3,0 l/min. Superficie corporal 1,9 m².', prompt: 'Calcula el índice cardiaco.', options: ['≈ 1,6 l/min/m²', '≈ 2,6 l/min/m²', '≈ 5,7 l/min/m²', '≈ 1,0 l/min/m²'], answer: 0, explain: 'IC = GC / SC = 3,0 / 1,9 ≈ 1,6 l/min/m². IC < 2,2 con PCP > 15 mmHg define el perfil "frío y húmedo" del shock cardiogénico.' },
            { type: 'mc', prompt: 'Con TA 75/50 mmHg y GC 3,0 l/min, ¿cuál es la potencia cardiaca (CPO = PAM × GC / 451)?', options: ['≈ 0,39 W', '≈ 0,85 W', '≈ 1,2 W', '≈ 0,15 W'], answer: 0, explain: 'PAM = (75 + 2 × 50) / 3 ≈ 58 mmHg; CPO = 58 × 3,0 / 451 ≈ 0,39 W. Un CPO < 0,6 W es el predictor hemodinámico más potente de mortalidad.' },
            { type: 'tf', prompt: 'El balón de contrapulsación intraaórtico (BCIA) de rutina está recomendado en el shock cardiogénico por IAM.', answer: false, explain: 'IABP-SHOCK II no mostró beneficio en mortalidad; su uso rutinario es clase III. Se reserva para complicaciones mecánicas como puente.' },
            { type: 'match', prompt: 'Relaciona cada dispositivo de soporte con su mecanismo', pairs: [['BCIA', 'Infla en diástole y desinfla antes de la sístole'], ['Impella CP', 'Bomba microaxial que impulsa sangre del VI a la aorta'], ['ECMO venoarterial', 'Soporte circulatorio y oxigenación completos; aumenta la poscarga del VI'], ['Impella RP', 'Soporte del ventrículo derecho']], explain: 'El ECMO-VA puede requerir descarga del VI (p. ej. con Impella, estrategia "ECPELLA") si este se distiende.' },
            // REVISAR: clase ESC pendiente de confirmar.
            { type: 'mc', context: 'Pese a noradrenalina y dobutamina, a las 2 horas persiste IC 1,5 l/min/m² y el lactato sube a 7 mmol/l. Está consciente y sin contraindicaciones.', prompt: '¿Qué se plantea a continuación?', options: ['Soporte circulatorio mecánico de corta duración (p. ej. Impella CP) en centro con experiencia', 'Añadir un tercer inotrópico y esperar', 'Retirar los vasopresores', 'Implantar un DAI'], answer: 0, explain: 'En shock por IAMCEST seleccionado, la bomba microaxial (Impella CP) se recomienda con clase 2a (ACC/AHA 2025) tras DanGer Shock (2024): menor mortalidad a 180 días, con más sangrado e isquemia de miembro. El BCIA y el ECMO-VA de rutina no se recomiendan.' },
          ],
        },
        {
          id: 'casos-u3-l4',
          title: 'Cateterismo derecho en disnea',
          case: {
            title: 'Mujer de 55 años con esclerodermia y disnea',
            text: 'Mujer de 55 años con esclerosis sistémica limitada. Disnea progresiva de 1 año (clase funcional III) y un síncope de esfuerzo. Exploración: 2R con componente pulmonar aumentado y soplo de insuficiencia tricuspídea. ECG: desviación derecha del eje. DLCO 45 %, TC torácico sin enfermedad intersticial significativa. NT-proBNP 1.400 pg/ml.',
          },
          questions: [
            { type: 'mc', context: 'ETT: VD dilatado con TAPSE 15 mm, aplanamiento septal, VI pequeño con FEVI y llenado normales. Vmax de la IT 3,8 m/s; VCI de 23 mm que colapsa > 50 % (PAD estimada 8 mmHg).', prompt: 'Calcula la PSAP estimada.', ecg12: 'rad', options: ['≈ 66 mmHg', '≈ 58 mmHg', '≈ 38 mmHg', '≈ 90 mmHg'], answer: 0, explain: '4 × 3,8² ≈ 58 mmHg + PAD 8 = 66 mmHg. Vmax IT > 3,4 m/s con signos de sobrecarga de VD da probabilidad ecocardiográfica alta de HP.' },
            { type: 'tf', prompt: 'Según la guía ESC/ERS 2022, la hipertensión pulmonar se define por una PAP media > 20 mmHg en reposo medida por cateterismo derecho.', answer: true, explain: 'El umbral bajó de ≥ 25 a > 20 mmHg. El diagnóstico hemodinámico exige cateterismo derecho; el eco solo estima la probabilidad.' },
            { type: 'mc', context: 'Cateterismo derecho: PAD 9 mmHg, PAP 70/28 mmHg (media 42 mmHg), PCP 10 mmHg, GC 3,5 l/min (termodilución).', prompt: 'Calcula la resistencia vascular pulmonar.', pressure: 'pullback-pa-pcwp', options: ['≈ 9,1 UW', '≈ 12 UW', '≈ 2,9 UW', '≈ 0,9 UW'], answer: 0, explain: 'RVP = (PAPm − PCP) / GC = (42 − 10) / 3,5 ≈ 9,1 unidades Wood (× 80 ≈ 730 dyn·s·cm⁻⁵). Normal ≤ 2 UW.' },
            { type: 'mc', prompt: '¿Cómo se clasifica esta hipertensión pulmonar?', options: ['Precapilar: HAP (grupo 1) asociada a enfermedad del tejido conectivo', 'Postcapilar aislada por cardiopatía izquierda (grupo 2)', 'Postcapilar combinada', 'HP por enfermedad pulmonar (grupo 3)'], answer: 0, explain: 'PAPm > 20, PCP ≤ 15 y RVP > 2 UW = precapilar. Sin enfermedad pulmonar significativa ni TEP crónico (descartar con gammagrafía V/Q), corresponde a HAP asociada a esclerodermia.' },
            { type: 'match', prompt: 'Relaciona cada perfil hemodinámico (ESC/ERS 2022) con su definición', pairs: [['HP precapilar', 'PCP ≤ 15 mmHg y RVP > 2 UW'], ['HP postcapilar aislada', 'PCP > 15 mmHg y RVP ≤ 2 UW'], ['HP postcapilar combinada', 'PCP > 15 mmHg y RVP > 2 UW'], ['HP de ejercicio', 'Pendiente PAPm/GC > 3 mmHg/l/min']], explain: 'Todas las formas en reposo requieren PAPm > 20 mmHg.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento inicial más adecuado?', options: ['Combinación inicial de antagonista del receptor de endotelina e inhibidor de la PDE5', 'Antagonistas del calcio a dosis altas', 'Solo diuréticos y oxígeno', 'Anticoagulación oral como tratamiento específico'], answer: 0, explain: 'ESC/ERS 2022: en HAP de riesgo bajo-intermedio sin comorbilidad cardiopulmonar, doble terapia oral inicial (p. ej. ambrisentán + tadalafilo). El test vasodilatador y los calcioantagonistas solo aplican a HAP idiopática, hereditaria o por fármacos.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u4',
      title: 'Más casos de ETT',
      lessons: [
        {
          id: 'casos-u4-l1',
          title: 'TEP de riesgo intermedio-alto',
          case: {
            title: 'Mujer de 48 años con disnea súbita tras un vuelo largo',
            text: 'Mujer de 48 años que toma anticonceptivos orales combinados. Dos días después de un vuelo de 12 horas presenta disnea súbita, dolor pleurítico derecho y un presíncope. TA 105/70 mmHg, FC 115 lpm, FR 26 rpm, SatO₂ 88 % basal. Pantorrilla izquierda empastada y dolorosa. ECG: taquicardia sinusal con ondas T negativas en V1–V3.',
          },
          questions: [
            { type: 'mc', prompt: 'Está estable hemodinámicamente y la probabilidad clínica es alta. ¿Qué prueba confirma el diagnóstico?', ecg: 'tachy', options: ['Angio-TC de arterias pulmonares', 'Dímero D', 'Ecocardiograma transtorácico', 'Radiografía de tórax'], answer: 0, explain: 'Con probabilidad alta no se pide dímero D (un valor normal no excluye con seguridad). En el paciente estable el ETT no confirma ni descarta el TEP; la angio-TC es la prueba de elección (ESC 2019).' },
            { type: 'mc', context: 'La angio-TC confirma TEP bilateral en ambas arterias pulmonares principales. En el ETT: VD dilatado (cociente VD/VI basal 1,2), aplanamiento septal y acinesia de la pared libre media del VD con contracción conservada del ápex.', prompt: '¿Cómo se llama el hallazgo de la pared libre del VD?', diagram: { id: 'a4c', highlight: 'rv' }, options: ['Signo de McConnell', 'Signo 60/60', 'Signo de la "D"', 'Signo de Kussmaul'], answer: 0, explain: 'El signo de McConnell es bastante específico de TEP agudo pero poco sensible; también aparece en el infarto de VD. El signo de la "D" es el aplanamiento septal en eje corto.' },
            { type: 'mc', context: 'Vmax de la insuficiencia tricuspídea 3,4 m/s. VCI de 22 mm con colapso inspiratorio < 50 % (PAD estimada 15 mmHg). TAPSE 14 mm. Tiempo de aceleración en el TSVD 55 ms con muesca mesosistólica.', prompt: 'Calcula el gradiente VD-AD y la PSAP estimada.', options: ['≈ 46 mmHg; PSAP ≈ 61 mmHg', '≈ 14 mmHg; PSAP ≈ 29 mmHg', '≈ 46 mmHg; PSAP ≈ 46 mmHg', '≈ 23 mmHg; PSAP ≈ 38 mmHg'], answer: 0, explain: 'Bernoulli: 4 × 3,4² ≈ 46 mmHg; sumando la PAD (15) → PSAP ≈ 61 mmHg. Un VD previamente sano rara vez genera de forma aguda un gradiente tricuspídeo > 60 mmHg.' },
            { type: 'tf', prompt: 'Con estos datos (tiempo de aceleración pulmonar 55 ms y gradiente tricuspídeo de 46 mmHg) se cumple el signo 60/60.', answer: true, explain: 'Tiempo de aceleración < 60 ms con gradiente IT < 60 mmHg: poscarga súbita sobre un VD no adaptado, típico del TEP agudo. TAPSE < 16 mm y VD/VI > 1 completan los datos de disfunción de VD.' },
            { type: 'match', context: 'Troponina T ultrasensible 85 ng/l (elevada). sPESI 2 (FC ≥ 110 lpm y SatO₂ < 90 %).', prompt: 'Relaciona cada categoría de riesgo del TEP (ESC 2019) con su definición', pairs: [['Alto riesgo', 'Inestabilidad hemodinámica'], ['Intermedio-alto', 'sPESI ≥ 1 + disfunción de VD + troponina'], ['Intermedio-bajo', 'sPESI ≥ 1 con uno o ninguno de VD/troponina'], ['Bajo riesgo', 'sPESI 0 sin disfunción VD ni troponina']], explain: 'Esta paciente está estable con sPESI 2, disfunción de VD (TAPSE 14 mm, VD/VI > 1) y troponina elevada: TEP de riesgo intermedio-alto.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento inicial recomendado?', options: ['Anticoagulación con HBPM y monitorización estrecha', 'Fibrinólisis sistémica inmediata a dosis plenas', 'Implante de filtro de vena cava inferior', 'Embolectomía quirúrgica urgente'], answer: 0, explain: 'En PEITHO la fibrinólisis rutinaria evitó descompensaciones a costa de más hemorragias graves (clase III, ESC 2019). Se monitoriza y se reserva la fibrinólisis de rescate si aparece inestabilidad hemodinámica.' },
          ],
        },
        {
          id: 'casos-u4-l2',
          title: 'Estenosis mitral reumática',
          case: {
            title: 'Mujer de 41 años con disnea y palpitaciones',
            text: 'Mujer de 41 años, originaria de una región con fiebre reumática endémica, que recuerda episodios de fiebre y dolores articulares en la infancia. Disnea de moderados esfuerzos (NYHA II–III) de un año, que ha empeorado en las últimas semanas junto con palpitaciones. Exploración: FC 110 lpm irregular, primer ruido intenso, chasquido de apertura y retumbo diastólico apical sin refuerzo presistólico.',
          },
          questions: [
            { type: 'mc', prompt: 'Primer ruido intenso, chasquido de apertura y retumbo diastólico apical orientan a…', ecg: 'afib', options: ['Estenosis mitral', 'Insuficiencia aórtica crónica', 'Insuficiencia mitral', 'Estenosis tricuspídea'], answer: 0, explain: 'Cuanto más corto es el intervalo 2R-chasquido, más grave es la EM. El refuerzo presistólico desaparece en FA, como muestra la tira, al perderse la contracción auricular.' },
            { type: 'mc', context: 'ETT: velos mitrales engrosados con fusión comisural y apertura "en palo de hockey" del velo anterior; AI de 52 mm. Planimetría en eje corto paraesternal: 1,0 cm². Doppler continuo mitral: tiempo de hemipresión (THP) 220 ms.', prompt: 'Calcula el área mitral por el tiempo de hemipresión.', diagram: { id: 'plax', highlight: 'mv' }, options: ['≈ 1,0 cm²', '≈ 2,2 cm²', '≈ 0,5 cm²', '≈ 1,5 cm²'], answer: 0, explain: 'Área = 220 / THP = 220 / 220 ≈ 1,0 cm², concordante con la planimetría (método de referencia). El THP no es fiable justo tras la valvuloplastia ni con IAo grave o VI rígido.' },
            { type: 'mc', context: 'Gradiente medio transmitral 11 mmHg con FC de 110 lpm. Vmax de la insuficiencia tricuspídea 3,4 m/s y PAD estimada 5 mmHg.', prompt: 'Calcula la PSAP estimada.', options: ['≈ 51 mmHg', '≈ 46 mmHg', '≈ 19 mmHg', '≈ 60 mmHg'], answer: 0, explain: '4 × 3,4² ≈ 46 mmHg + PAD 5 → PSAP ≈ 51 mmHg. El gradiente medio depende mucho de la FC y del flujo: con taquicardia sobrestima la gravedad; el área es el parámetro principal.' },
            { type: 'tf', prompt: 'En esta paciente con FA y EM significativa, un anticoagulante oral directo es una alternativa válida a los antagonistas de la vitamina K.', answer: false, explain: 'En FA con EM moderada-grave se recomiendan AVK (INR 2–3); los ACOD no están recomendados (INVICTUS; ESC/EACTS 2021). Controlar la FC alarga la diástole y reduce el gradiente.' },
            { type: 'mc', context: 'Tras anticoagular y controlar la FC persiste en NYHA II–III. Score de Wilkins 7, insuficiencia mitral leve y ETE sin trombo en la AI ni en la orejuela.', prompt: '¿Qué tratamiento corresponde?', options: ['Valvuloplastia mitral percutánea con balón', 'Sustitución valvular mitral mecánica', 'Solo tratamiento médico y control anual', 'Reparación mitral percutánea borde a borde'], answer: 0, explain: 'EM con área ≤ 1,5 cm², síntomas y anatomía favorable sin contraindicaciones: la valvuloplastia mitral percutánea (VMP) es de elección (clase I, ESC/EACTS 2021). El ETE previo descarta trombo auricular.' },
            { type: 'match', prompt: 'Relaciona cada herramienta con lo que aporta en la EM', pairs: [['Planimetría', 'Área anatómica de referencia'], ['THP', 'Área = 220 / THP'], ['Gradiente medio', 'Depende de la FC y del flujo'], ['Score de Wilkins', 'Idoneidad anatómica para la VMP']], explain: 'Wilkins puntúa de 1 a 4 movilidad, engrosamiento, calcificación y aparato subvalvular; ≤ 8 predice buen resultado. IM más que leve, trombo en AI o calcio bicomisural contraindican la VMP.' },
          ],
        },
        {
          id: 'casos-u4-l3',
          title: 'Amiloidosis cardiaca por transtiretina',
          case: {
            title: 'Varón de 79 años con IC y túnel carpiano bilateral',
            text: 'Varón de 79 años con hipertensión. Ingresa por insuficiencia cardiaca con edemas; tras el diurético queda en NYHA II. Fue operado de síndrome del túnel carpiano bilateral y tiene estenosis de canal lumbar. Desde hace un año tiende a la hipotensión y se le retiraron los antihipertensivos. ECG: ritmo sinusal con bajos voltajes en derivaciones de miembros y patrón de pseudoinfarto (QS en V1–V3). Troponina T persistentemente elevada y NT-proBNP 3200 pg/ml.',
          },
          questions: [
            { type: 'mc', context: 'ETT: VI no dilatado con septo de 17 mm y pared posterior de 16 mm, miocardio de aspecto granular, AI dilatada, derrame pericárdico ligero, FEVI 52 % y E/e′ 18.', prompt: '¿Qué dato es la principal "bandera roja" de amiloidosis cardiaca en este caso?', options: ['Hipertrofia con voltajes del QRS bajos', 'FEVI en el límite bajo de la normalidad', 'Dilatación de la aurícula izquierda', 'Relación E/e′ elevada'], answer: 0, explain: 'La discordancia entre grosor parietal ≥ 12 mm y voltajes bajos sugiere infiltración, no hipertrofia de miocitos. Túnel carpiano bilateral, canal lumbar estrecho y troponina persistente son otras banderas rojas.' },
            { type: 'tf', context: 'Strain longitudinal global −11 %, muy reducido en los segmentos basales y medios y conservado en los apicales.', prompt: 'Este patrón de preservación apical ("cherry on top") orienta a amiloidosis frente a otras causas de hipertrofia.', answer: true, explain: 'La preservación apical del strain (cociente apical / basal + medio > 1) es típica de amiloidosis, pero no distingue AL de ATTR.' },
            { type: 'mc', prompt: '¿Cuál es el siguiente paso diagnóstico?', options: ['Gammagrafía con DPD y estudio de cadenas ligeras e inmunofijación', 'Biopsia endomiocárdica directamente', 'RM cardiaca y, si es compatible, iniciar tafamidis', 'Coronariografía para descartar cardiopatía isquémica'], answer: 0, explain: 'El algoritmo no invasivo combina gammagrafía ósea (DPD, PYP o HMDP) con el cribado de proteína monoclonal en sangre y orina: sin descartar AL no se puede diagnosticar ATTR por gammagrafía.' },
            { type: 'mc', context: 'Gammagrafía con DPD: captación cardiaca de grado 2 de Perugini (igual o mayor que la ósea). Cociente κ/λ de cadenas ligeras libres normal e inmunofijación sérica y urinaria negativas.', prompt: '¿Qué se concluye?', options: ['ATTR cardiaca diagnosticada sin necesidad de biopsia', 'Amiloidosis AL; derivar a hematología', 'Hay que confirmar siempre con biopsia endomiocárdica', 'Gammagrafía inespecífica; repetirla en 6 meses'], answer: 0, explain: 'Captación de grado 2–3 sin proteína monoclonal tiene especificidad y VPP cercanos al 100 % para ATTR. Después se secuencia el gen TTR para distinguir la forma salvaje (ATTRwt) de la hereditaria (ATTRv).' },
            { type: 'match', prompt: 'Relaciona cada tratamiento con su mecanismo o indicación', pairs: [['Tafamidis', 'Estabilizador del tetrámero de TTR'], ['Vutrisirán', 'Silenciador de TTR (ARN de interferencia)'], ['Daratumumab-CyBorD', 'Amiloidosis AL'], ['Diuréticos de asa', 'Control de la congestión']], explain: 'Estabilizadores (tafamidis, acoramidis) y silenciadores frenan el depósito de TTR. La AL se trata con quimioterapia contra la célula plasmática, de forma urgente.' },
            { type: 'mc', prompt: 'Se confirma ATTRwt en NYHA II. ¿Qué afirmación sobre su tratamiento es correcta?', options: ['Tafamidis reduce la mortalidad y las hospitalizaciones', 'Los betabloqueantes a dosis altas son el pilar', 'La digoxina a dosis plenas es de elección', 'Los IECA mejoran el pronóstico y se toleran bien'], answer: 0, explain: 'Tafamidis tiene indicación clase I en miocardiopatía ATTR con NYHA I–II (ATTR-ACT; ESC 2021 y 2023). Betabloqueantes e IECA suelen tolerarse mal por el volumen sistólico fijo y la hipotensión.' },
          ],
        },
        {
          id: 'casos-u4-l4',
          title: 'Takotsubo frente a SCA',
          case: {
            title: 'Mujer de 68 años con dolor torácico tras un duelo',
            text: 'Mujer de 68 años, hipertensa. Acude por dolor torácico opresivo y disnea que comenzaron horas después del funeral de su marido. TA 110/70 mmHg, FC 100 lpm, sin soplos ni signos de insuficiencia cardiaca. ECG: elevación del ST en V1–V4. Troponina I ultrasensible moderadamente elevada y NT-proBNP muy elevado.',
          },
          questions: [
            { type: 'mc', prompt: 'Sospechas un takotsubo por el desencadenante emocional. ¿Qué haces?', ecg12: 'stemi-ant', options: ['Activar el código infarto: coronariografía urgente', 'Ingresar en planta con betabloqueante oral', 'Pedir RM cardiaca programada y decidir', 'Calcular el InterTAK y, si es alto, evitar la coronariografía'], answer: 0, explain: 'Con elevación del ST el takotsubo es un diagnóstico de exclusión: se trata como un IAMCEST. La puntuación InterTAK estima la probabilidad, pero no sustituye a la coronariografía.' },
            { type: 'mc', context: 'Coronariografía: coronarias sin estenosis significativas ni imagen de rotura de placa. ETT: acinesia de todos los segmentos medios y apicales con hipercinesia de los basales; FEVI 35 %.', prompt: '¿Qué patrón describe el ETT?', diagram: { id: 'a4c', highlight: 'lv' }, options: ['Balonamiento apical (forma típica)', 'Variante medioventricular', 'Variante basal (invertida)', 'Variante focal'], answer: 0, explain: 'La alteración es circunferencial, excede un territorio coronario y respeta la base. La forma apical es la más frecuente (~80 %); la troponina suele ser baja para la extensión de la acinesia.' },
            { type: 'tf', prompt: 'Según los criterios diagnósticos InterTAK, la presencia de enfermedad coronaria obstructiva excluye el takotsubo.', answer: false, explain: 'Los criterios InterTAK (2018) admiten que coexista enfermedad coronaria y aceptan el feocromocitoma como desencadenante; lo esencial es que la alteración contráctil no se explique por la lesión.' },
            { type: 'mc', context: 'A las 6 horas presenta TA 80/50 mmHg y un soplo sistólico nuevo. En el ETT: movimiento sistólico anterior (SAM) mitral y Vmax en el TSVI de 4,2 m/s (gradiente ≈ 70 mmHg).', prompt: '¿Qué tratamiento debe evitarse?', options: ['Dobutamina u otros inotrópicos', 'Fluidoterapia prudente', 'Betabloqueante de acción corta', 'Retirada de nitratos y diuréticos'], answer: 0, explain: 'La hipercinesia basal provoca obstrucción dinámica, que empeora con inotrópicos y vasodilatadores. Se trata con volumen, betabloqueante de acción corta (con cautela si hay hipotensión) y, si precisa, vasoconstrictor o soporte mecánico.' },
            { type: 'match', prompt: 'Relaciona cada complicación del takotsubo con su implicación', pairs: [['QTc muy prolongado', 'Riesgo de torsade de pointes'], ['Shock sin obstrucción del TSVI', 'Levosimendán o soporte mecánico'], ['IM por SAM', 'Mejora al reducir la obstrucción'], ['Rotura de pared libre', 'Rara; cirugía urgente']], explain: 'El takotsubo no es benigno: su mortalidad hospitalaria es parecida a la del SCA. Evita fármacos que alarguen el QT y vigila con monitorización.' },
            { type: 'tf', context: 'A las 48 horas, en un ETT con contraste se observa una masa de 12 mm adherida al ápex acinético.', prompt: 'Está indicada la anticoagulación hasta que se resuelva el trombo y se recupere la contractilidad apical.', answer: true, explain: 'El trombo apical aparece en ~2–5 % por estasis; se anticoagula (habitualmente unos 3 meses) y se reevalúa. La FEVI suele normalizarse en días o semanas, lo que confirma el diagnóstico.' },
          ],
        },
        {
          id: 'casos-u4-l5',
          title: 'CIA ostium secundum en el adulto',
          case: {
            title: 'Mujer de 45 años con palpitaciones y disnea leve',
            text: 'Mujer de 45 años, sin antecedentes, que consulta por disnea con esfuerzos intensos y palpitaciones ocasionales. Exploración: impulso paraesternal izquierdo, soplo sistólico eyectivo suave en foco pulmonar y segundo ruido con desdoblamiento amplio y fijo. ECG: ritmo sinusal, eje QRS a +110° y rSR′ en V1 con QRS de 100 ms (bloqueo incompleto de rama derecha).',
          },
          questions: [
            { type: 'mc', prompt: 'El desdoblamiento amplio y fijo del segundo ruido es característico de…', options: ['Comunicación interauricular', 'Bloqueo de rama izquierda', 'Estenosis aórtica grave', 'Comunicación interventricular pequeña'], answer: 0, explain: 'El shunt auricular iguala la respuesta respiratoria de ambos ventrículos y el cierre pulmonar se retrasa siempre. El soplo no se genera en el defecto, sino por hiperflujo pulmonar.' },
            { type: 'mc', context: 'ETT: AD y VD dilatados con TAPSE 26 mm. En el eje corto, el septo interventricular se aplana en diástole y recupera su forma en sístole. Defecto de 18 mm en la fosa oval con flujo izquierda-derecha en Doppler color.', prompt: '¿Qué indica el aplanamiento septal exclusivamente diastólico?', diagram: { id: 'psax', highlight: 'rv' }, options: ['Sobrecarga de volumen del VD', 'Sobrecarga de presión del VD', 'Taponamiento cardiaco', 'Disfunción sistólica del VI'], answer: 0, explain: 'En la sobrecarga de volumen el septo se aplana en diástole; en la de presión (HP, TEP) se aplana en sístole y diástole, con máximo en telesístole.' },
            { type: 'mc', context: 'Diámetro del TSVD 2,6 cm con ITV pulmonar 22 cm; diámetro del TSVI 2,0 cm con ITV aórtica 20 cm.', prompt: 'Calcula el cociente Qp/Qs.', options: ['≈ 1,9', '≈ 1,4', '≈ 0,5', '≈ 3,4'], answer: 0, explain: 'Qp = π × 1,3² × 22 ≈ 117 ml; Qs = π × 1,0² × 20 ≈ 63 ml → Qp/Qs ≈ 1,9 (significativo si ≥ 1,5). Sale 1,4 si se olvida elevar al cuadrado el radio.' },
            { type: 'tf', context: 'PSAP estimada 34 mmHg sin otros signos de hipertensión pulmonar.', prompt: 'Con sobrecarga de volumen del VD y sin hipertensión pulmonar, el cierre de la CIA está indicado aunque los síntomas sean leves o ausentes.', answer: true, explain: 'ESC 2020: cierre (clase I) si hay sobrecarga de volumen de VD y RVP < 3 UW, haya o no síntomas. Con RVP ≥ 5 UW solo si baja con tratamiento de HAP; en el Eisenmenger está contraindicado.' },
            { type: 'mc', context: 'ETE previo al cierre: CIA ostium secundum única de 18 mm.', prompt: '¿Qué hallazgo del ETE desaconsejaría el cierre percutáneo y favorecería la cirugía?', options: ['Ausencia del borde posteroinferior (de la VCI)', 'Borde retroaórtico deficiente aislado', 'Diámetro del defecto de 18 mm', 'Shunt izquierda-derecha en Doppler color'], answer: 0, explain: 'El dispositivo necesita bordes de ≥ 5 mm para anclarse, salvo el retroaórtico, cuya deficiencia aislada es frecuente y aceptable. Defectos muy grandes o de otro tipo precisan cirugía.' },
            { type: 'match', prompt: 'Relaciona cada tipo de CIA con su rasgo asociado', pairs: [['Ostium secundum', 'Apta para cierre con dispositivo'], ['Ostium primum', 'Hendidura mitral (canal AV parcial)'], ['Seno venoso superior', 'Drenaje venoso pulmonar anómalo parcial'], ['Seno coronario', 'Vena cava superior izquierda persistente']], explain: 'Solo la ostium secundum (~80 % de las CIA) se cierra de rutina por vía percutánea; las demás suelen requerir cirugía.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u5',
      title: 'Más casos de ETE y eco avanzado',
      lessons: [
        {
          id: 'casos-u5-l1',
          title: 'Disección aórtica tipo A',
          case: {
            title: 'Varón de 62 años con dolor torácico desgarrador',
            text: 'Varón de 62 años con hipertensión mal controlada. Hace 90 minutos inició de forma brusca un dolor torácico muy intenso, "desgarrador", irradiado a la espalda. TA 165/90 mmHg en el brazo derecho y 125/70 mmHg en el izquierdo, FC 95 lpm. Soplo diastólico en foco aórtico. ECG: ritmo sinusal sin elevación del ST.',
          },
          questions: [
            { type: 'tf', context: 'Se realiza un ETT a pie de cama en urgencias.', prompt: 'Si el ETT no muestra un flap intimal, se puede descartar una disección tipo A.', answer: false, explain: 'El ETT detecta flap, IAo o derrame, pero su sensibilidad es limitada; si es negativo y la sospecha persiste, hay que hacer angio-TC (o ETE) sin demora (ESC 2024 aorta).' },
            { type: 'mc', context: 'En el paraesternal eje largo: raíz aórtica de 48 mm con una imagen lineal móvil en la aorta ascendente, insuficiencia aórtica moderada-grave y derrame pericárdico de 10 mm sin colapso de cavidades.', prompt: '¿Qué diagnóstico sugieren estos hallazgos?', diagram: { id: 'plax', highlight: 'ao' }, options: ['Disección aórtica tipo A de Stanford', 'Disección aórtica tipo B de Stanford', 'Úlcera penetrante de aorta descendente', 'Aneurisma de aorta ascendente sin disección'], answer: 0, explain: 'Un flap en la aorta ascendente define el tipo A (DeBakey I o II), sea cual sea la extensión distal. La angio-TC confirma, mide la extensión y valora la malperfusión.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo ecográfico con su mecanismo o significado', pairs: [['Flap intimal móvil', 'Separa la luz verdadera de la falsa'], ['IAo aguda', 'Dilatación de raíz o prolapso de velos'], ['Derrame pericárdico', 'Riesgo de rotura y taponamiento'], ['Acinesia inferior', 'Afectación del ostium de la CD']], explain: 'La CD es la coronaria más afectada por la disección: un IAMCEST inferior con soplo diastólico o asimetría de pulsos obliga a descartarla antes de antiagregar.' },
            { type: 'mc', prompt: 'Mientras se avisa a cirugía cardiaca, ¿cuál es el control hemodinámico inicial?', options: ['Betabloqueante IV: FC ≤ 60 lpm y TAS 100–120 mmHg', 'Nitroprusiato IV antes del betabloqueante', 'Dobutamina para mantener el gasto cardiaco', 'Sueroterapia para mantener TAS > 140 mmHg'], answer: 0, explain: 'Primero betabloqueante IV (esmolol, labetalol) para reducir la dP/dt; si la TA sigue alta se añade un vasodilatador (usado solo provocaría taquicardia refleja). Analgesia con opioides.' },
            { type: 'tf', context: 'La angio-TC confirma la disección tipo A con flap desde la raíz hasta el arco.', prompt: 'Antes de ir a quirófano conviene hacer un ETE con el paciente despierto para completar el estudio.', answer: false, explain: 'Con TC diagnóstica, un ETE despierto no cambia el manejo y puede causar arcadas, hipertensión y rotura. Se hace en quirófano tras intubar. No es contraindicación absoluta: sin TC disponible, con sedación profunda y control de TA.' },
            { type: 'mc', context: 'En la espera presenta TA 75/45 mmHg, ingurgitación yugular y aumento del derrame con colapso diastólico del VD.', prompt: '¿Qué actitud es la adecuada?', options: ['Cirugía emergente; drenaje controlado solo como puente', 'Pericardiocentesis completa y angio-TC de control', 'Fibrinólisis por sospecha de TEP asociado', 'Dobutamina y traslado a UCI para estabilizar'], answer: 0, explain: 'El hemopericardio de la disección tipo A se trata con cirugía inmediata. Si no es posible, se drenan pequeños volúmenes para mantener una TAS ~90 mmHg; el drenaje completo puede reactivar el sangrado.' },
          ],
        },
        {
          id: 'casos-u5-l2',
          title: 'Disfunción de prótesis mecánica mitral',
          case: {
            title: 'Mujer de 54 años con prótesis mitral y disnea',
            text: 'Mujer de 54 años portadora de una prótesis mecánica mitral bivalva desde hace 8 años por valvulopatía reumática, en FA permanente y tratada con acenocumarol. En el último mes olvidó varias dosis y los INR han sido de 1,5–1,8. Desde hace 10 días presenta disnea progresiva hasta hacerse de reposo. Exploración: crepitantes bilaterales y clic de cierre protésico apagado.',
          },
          questions: [
            { type: 'mc', context: 'ETT: gradiente medio transprotésico 14 mmHg con FC 85 lpm, Vmax de la onda E 2,7 m/s y THP 210 ms. Diámetro del TSVI 2,0 cm, ITV del TSVI 18 cm e ITV protésica 56 cm.', prompt: 'Calcula el área efectiva de orificio (EOA) por la ecuación de continuidad.', options: ['≈ 1,0 cm²', '≈ 3,1 cm²', '≈ 0,6 cm²', '≈ 2,0 cm²'], answer: 0, explain: 'EOA = π × 1,0² × 18 / 56 ≈ 1,0 cm². En prótesis mitral, EOA < 1 cm², gradiente medio > 10 mmHg y cociente ITV prótesis/TSVI > 2,5 (aquí 3,1) sugieren obstrucción.' },
            { type: 'tf', prompt: 'En una prótesis mitral, el área puede calcularse como 220 / THP igual que en la estenosis mitral nativa.', answer: false, explain: 'La fórmula 220/THP no está validada en prótesis. Se usan la EOA por continuidad, el gradiente medio y el cociente de ITV; un THP > 200 ms apoya la obstrucción, pero no se convierte en área.' },
            { type: 'mc', prompt: '¿Qué prueba rápida valora directamente la movilidad de los discos protésicos?', options: ['Cinefluoroscopia', 'Cateterismo izquierdo cruzando la prótesis', 'RM cardiaca', 'Gammagrafía de perfusión miocárdica'], answer: 0, explain: 'La cinefluoroscopia muestra los ángulos de apertura y cierre de los discos de forma rápida. Se completa con ETE (o TC) para distinguir trombo de pannus. No debe cruzarse con catéter una prótesis mecánica.' },
            { type: 'match', prompt: 'Relaciona cada rasgo con lo que sugiere en la obstrucción protésica', pairs: [['INR infraterapéutico reciente', 'Favorece trombosis'], ['Síntomas de evolución en años', 'Favorece pannus'], ['Masa blanda, móvil y poco ecogénica', 'Aspecto típico de trombo'], ['Tejido denso y fijo en el anillo', 'Aspecto típico de pannus']], explain: 'Trombo y pannus pueden coexistir. El trombo suele ser mayor, más blando y asociarse a anticoagulación insuficiente; el pannus crece lento desde el anillo y no responde a fibrinólisis.' },
            // REVISAR: confirmar que ESC/EACTS 2025 mantiene la cirugía urgente (clase I) frente a la fibrinólisis lenta a dosis bajas en trombosis obstructiva con paciente grave y riesgo quirúrgico no alto; la pregunta se ancla a 2021.
            { type: 'mc', context: 'ETE: trombo blando de 12 mm en la cara auricular de la prótesis que bloquea uno de los discos. Presenta edema agudo de pulmón. Riesgo quirúrgico no elevado y cirugía disponible.', prompt: '¿Qué tratamiento recomiendan las guías ESC/EACTS 2021?', options: ['Recambio valvular urgente', 'Fibrinólisis como primera opción', 'Heparina IV y repetir el ETE en 2 semanas', 'Añadir AAS y subir el objetivo de INR'], answer: 0, explain: 'En la trombosis obstructiva con paciente grave y riesgo quirúrgico no alto, la cirugía urgente es de elección. La fibrinólisis se plantea si la cirugía no está disponible o es de muy alto riesgo.' },
            { type: 'mc', prompt: 'Tras implantar una nueva prótesis mecánica bivalva mitral (en FA), ¿qué INR objetivo corresponde?', options: ['3,0 (2,5–3,5)', '2,5 (2,0–3,0)', '2,0 (1,5–2,5)', '4,0 (3,5–4,5)'], answer: 0, explain: 'ESC/EACTS 2021: prótesis de baja trombogenicidad con factores del paciente (posición mitral, FA) → INR 3,0. Los ACOD están contraindicados en las prótesis mecánicas.' },
          ],
        },
        {
          id: 'casos-u5-l3',
          title: 'Eco de estrés con dobutamina para isquemia',
          case: {
            title: 'Mujer de 66 años con dolor torácico de esfuerzo',
            text: 'Mujer de 66 años con diabetes tipo 2, hipertensión y dislipemia. Desde hace 2 meses nota opresión torácica al caminar deprisa que cede con el reposo en 5 minutos. Tiene una gonartrosis grave que le impide caminar en cinta. ECG basal normal. ETT en reposo: FEVI 60 % sin alteraciones de la contractilidad segmentaria.',
          },
          questions: [
            { type: 'mc', prompt: 'Probabilidad clínica moderada-alta y no puede hacer ejercicio. ¿Qué prueba de imagen funcional es adecuada?', ecg12: 'normal', options: ['Eco de estrés con dobutamina', 'Ergometría convencional', 'Holter de 24 horas', 'Repetir el ETT en reposo'], answer: 0, explain: 'Si no puede ejercitarse se usa estrés farmacológico: dobutamina (eco) o vasodilatador (perfusión). La ergometría requiere un ejercicio adecuado y es menos sensible.' },
            { type: 'match', prompt: 'Relaciona cada elemento del modelo de 17 segmentos con su correspondencia habitual', pairs: [['Anterior y anteroseptal', 'Descendente anterior'], ['Inferior e inferoseptal basal', 'Coronaria derecha'], ['Inferolateral basal y medio', 'Circunfleja'], ['Modelo de 17 segmentos', '6 basales, 6 medios, 4 apicales y ápex']], explain: 'El ápex verdadero (segmento 17) y los apicales suelen depender de la DA. Hay variabilidad anatómica, sobre todo en los segmentos laterales y apicales inferiores.' },
            { type: 'mc', prompt: 'Calcula la FC objetivo submáxima (85 % de la FC máxima teórica) de esta paciente.', options: ['≈ 131 lpm', '≈ 154 lpm', '≈ 145 lpm', '≈ 120 lpm'], answer: 0, explain: 'FC máxima teórica = 220 − 66 = 154 lpm; 85 % ≈ 131 lpm. Si no se alcanza con dobutamina (hasta 40 µg/kg/min), se añade atropina.' },
            { type: 'mc', context: 'A 20 µg/kg/min aparece acinesia de los segmentos inferior e inferoseptal basales y medios, con dolor torácico típico.', prompt: '¿Qué arteria es la responsable más probable?', diagram: { id: 'psax', highlight: 'inf' }, options: ['Coronaria derecha', 'Descendente anterior', 'Circunfleja', 'Primera diagonal'], answer: 0, explain: 'La cara inferior y el septo inferior basal-medio dependen de la descendente posterior, rama de la CD en la circulación con dominancia derecha (~85 %).' },
            { type: 'tf', prompt: 'Un segmento acinético en reposo que mejora a dosis bajas de dobutamina y empeora a dosis altas (respuesta bifásica) indica miocardio viable e isquémico.', answer: true, explain: 'La respuesta bifásica es el patrón con mayor valor predictivo de recuperación tras revascularizar. Si el segmento no mejora con ninguna dosis, sugiere necrosis.' },
            { type: 'mc', context: 'Isquemia inducida en 4 de 16 segmentos del VI. Se detiene la prueba y la paciente se recupera sin incidencias.', prompt: '¿Cómo se interpreta y qué se hace?', options: ['Isquemia de alto riesgo: coronariografía invasiva y TMO', 'Isquemia leve: solo tratamiento médico', 'Prueba no concluyente: repetir con ejercicio', 'Cirugía coronaria directa sin coronariografía'], answer: 0, explain: 'Una nueva alteración contráctil en ≥ 3 de 16 segmentos define isquemia de alto riesgo: se recomienda coronariografía invasiva además del tratamiento médico óptimo (ESC 2024).' },
          ],
        },
        {
          id: 'casos-u5-l4',
          title: 'Endocarditis tricuspídea',
          case: {
            title: 'Varón de 29 años con fiebre y dolor pleurítico',
            text: 'Varón de 29 años que se inyecta drogas por vía intravenosa y sigue un programa de la unidad de adicciones. Consulta por fiebre de 39 °C de 10 días, tos, dolor pleurítico y esputo hemoptoico. Exploración: soplo holosistólico en el borde esternal izquierdo inferior. TC torácica: múltiples nódulos periféricos bilaterales, algunos cavitados. Hemocultivos: 4 de 4 positivos para Staphylococcus aureus sensible a meticilina (SASM).',
          },
          questions: [
            { type: 'mc', prompt: 'Los nódulos pulmonares periféricos y cavitados corresponden probablemente a…', options: ['Embolias sépticas pulmonares', 'Tuberculosis pulmonar', 'Metástasis pulmonares', 'Tromboembolismo pulmonar no séptico'], answer: 0, explain: 'La EI derecha emboliza al pulmón (no al cerebro, salvo shunt). Las embolias sépticas se cavitan y pueden complicarse con abscesos, neumotórax o empiema.' },
            { type: 'mc', context: 'ETT: vegetación móvil de 22 mm en el velo anterior tricuspídeo con insuficiencia tricuspídea grave y VD dilatado con función conservada. Válvulas mitral y aórtica sin vegetaciones.', prompt: 'Aplicando los criterios de Duke modificados por la ESC 2023, ¿cuál es el diagnóstico?', diagram: { id: 'a4c', highlight: 'tv' }, options: ['Endocarditis definida (2 criterios mayores)', 'Endocarditis posible (1 mayor y 3 menores)', 'Endocarditis rechazada', 'Endocarditis posible pendiente de ETE'], answer: 0, explain: 'Hemocultivos con microorganismo típico y vegetación en la imagen son dos criterios mayores. El ETE ayuda a descartar afectación izquierda, pero no es necesario para el diagnóstico.' },
            { type: 'tf', prompt: 'El soplo de insuficiencia tricuspídea aumenta de intensidad con la inspiración (signo de Rivero-Carvallo).', answer: true, explain: 'La inspiración aumenta el retorno venoso al VD y el volumen regurgitante. En la IT aguda grave el soplo puede ser suave o incluso faltar.' },
            { type: 'mc', context: 'Tras 10 días de cloxacilina IV persisten la fiebre y la bacteriemia; la vegetación mide 21 mm y aparecen nuevas embolias con insuficiencia respiratoria.', prompt: '¿Qué actitud recomienda la guía ESC 2023?', options: ['Cirugía, preferiblemente reparación tricuspídea', 'Prolongar el antibiótico 6 semanas sin cirugía', 'Anticoagulación por las embolias pulmonares', 'Filtro de vena cava inferior'], answer: 0, explain: 'Vegetación tricuspídea > 20 mm con embolias recurrentes, insuficiencia respiratoria o bacteriemia persistente son indicación de cirugía. Se prefiere reparar para evitar una endocarditis protésica.' },
            { type: 'match', prompt: 'Relaciona cada opción terapéutica con su papel en la EI derecha', pairs: [['Reparación tricuspídea', 'Preferible al recambio protésico'], ['Aspiración percutánea', 'Opción si el riesgo quirúrgico es alto'], ['Cloxacilina 2 semanas', 'EI tricuspídea por SASM no complicada'], ['Tratamiento de la adicción', 'Reduce la reinfección']], explain: 'El abordaje es multidisciplinar (Endocarditis Team y unidad de adicciones). Este paciente, complicado, necesita antibioterapia prolongada y cirugía.' },
            { type: 'tf', prompt: 'La endocarditis tricuspídea aislada tiene, en general, peor pronóstico que la endocarditis de las válvulas izquierdas.', answer: false, explain: 'La mortalidad hospitalaria de la EI derecha aislada es baja (< 10 %); empeora con vegetaciones > 20 mm, hongos o afectación izquierda. La reinfección es frecuente si se mantiene el consumo.' },
          ],
        },
      ],
    },
  ],
};
