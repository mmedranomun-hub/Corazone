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
            { type: 'mc', context: 'Pese a noradrenalina y dobutamina, a las 2 horas persiste IC 1,5 l/min/m² y el lactato sube a 7 mmol/l. Está consciente y sin contraindicaciones.', prompt: '¿Qué se plantea a continuación?', options: ['SCM de corta duración (p. ej. Impella CP) en un centro experto', 'Añadir un tercer inotrópico y esperar', 'Retirar los vasopresores', 'Implantar un DAI'], answer: 0, explain: 'En DanGer Shock (2024) el Impella CP redujo la mortalidad a 180 días en IAMCEST con shock, con más sangrado e isquemia de miembro. ACC/AHA 2025: clase 2a; la ESC 2023, previa al ensayo, daba IIb al SCM de corta duración.' },
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
            { type: 'mc', context: 'ETE: trombo blando de 12 mm en la cara auricular de la prótesis que bloquea uno de los discos. Presenta edema agudo de pulmón. Riesgo quirúrgico no elevado y cirugía disponible.', prompt: '¿Qué recomiendan las guías ESC/EACTS 2025?', options: ['Heart Team: recambio urgente o fibrinólisis lenta a dosis bajas', 'Heparina IV y repetir el ETE en 2 semanas', 'Añadir AAS y subir el objetivo de INR', 'Diuréticos y cirugía programada en 3 meses'], answer: 0, explain: 'En la trombosis obstructiva con IC aguda, el Heart Team elige entre recambio urgente y fibrinólisis en infusión lenta a dosis bajas (menos complicaciones). En 2021 la cirugía urgente era de elección.' },
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
    {
      id: 'casos-u6',
      title: 'Eco en urgencias y complicaciones',
      guide: {
        intro: 'El ecocardiograma a pie de cama resuelve en minutos el shock y el deterioro brusco tras un infarto o una cirugía cardiaca. Busca siempre lo que se trata con cirugía urgente.',
        sections: [
          {
            title: 'Complicaciones mecánicas del IAM',
            points: [
              'Sospéchalas ante shock, edema agudo de pulmón o soplo nuevo, sobre todo tras un IAMCEST no reperfundido o tardío (días 2–7).',
              'CIV posinfarto: shunt sistólico VI→VD en el septo; salto oximétrico en el VD; Qp/Qs = (SaO₂ − SvO₂)/(SvpO₂ − SapO₂).',
              'Rotura de papilar (casi siempre posteromedial): velo flail con IM aguda excéntrica, VI hiperdinámico y ondas v gigantes en la PCP.',
              'Rotura de pared libre: derrame con ecos densos (hemopericardio) y taponamiento; si se contiene forma un pseudoaneurisma de cuello estrecho.',
              'Todas requieren Heart Team y cirugía; el soporte circulatorio mecánico sirve de puente (ESC 2023).',
            ],
            tip: 'Un VI hiperdinámico en un shock posinfarto no es fallo de bomba: busca una complicación mecánica.',
          },
          {
            title: 'Insuficiencia aórtica aguda y taponamiento',
            points: [
              'IAo aguda grave: VI no dilatado, THP < 200 ms, cierre mitral precoz y flujo holodiastólico inverso en la aorta abdominal.',
              'En la disección tipo A, el ETT puede mostrar el flap y la raíz dilatada; la cirugía es urgente y el balón de contrapulsación está contraindicado.',
              'El taponamiento posquirúrgico suele ser localizado (coágulo posterior) y sin signos clásicos: si el ETT no es concluyente, haz ETE.',
              'El derrame localizado posterior comprime la AI y se trata con reintervención más que con pericardiocentesis.',
            ],
          },
          {
            title: 'Shock indiferenciado (RUSH/FoCUS)',
            points: [
              'Bomba: función del VI, tamaño del VD y derrame pericárdico.',
              'Tanque: VCI, líquido libre (FAST) y deslizamiento pleural.',
              'Tuberías: aorta (aneurisma, disección) y venas de las piernas (TVP).',
              'Hipovolémico: VI hiperdinámico y VCI pequeña colapsable; cardiogénico: VI hipocinético y VCI plétora; obstructivo: VD dilatado o taponamiento.',
            ],
            tip: 'La eco no ve bien el retroperitoneo: una rotura de AAA puede no mostrar líquido libre.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u6-l1',
          title: 'Comunicación interventricular posinfarto',
          case: {
            title: 'Varón de 71 años con shock al cuarto día de un infarto',
            text: 'Varón de 71 años, diabético, que acudió 30 horas después del inicio del dolor con un IAMCEST anterior; la coronariografía mostró oclusión de la DA media, que se trató con ICP. Al cuarto día presenta disnea brusca e hipotensión (TA 90/60 mmHg, FC 115 lpm, extremidades frías). Aparece un soplo holosistólico rudo con frémito en el borde esternal izquierdo que no existía al ingreso.',
          },
          questions: [
            { type: 'mc', prompt: 'Ante el deterioro brusco con un soplo nuevo, ¿cuál es la primera prueba que debes hacer?', options: ['Ecocardiograma transtorácico urgente a pie de cama', 'Nueva coronariografía urgente', 'Angio-TC de aorta y arterias pulmonares', 'Cateterismo derecho con Swan-Ganz'], answer: 0, explain: 'El ETT diferencia en minutos CIV, IM aguda por rotura de papilar y rotura de pared libre, que cambian el tratamiento. Las guías ESC 2023 lo recomiendan de inmediato ante inestabilidad tras un IAM.' },
            { type: 'mc', context: 'ETT: acinesia anteroapical y solución de continuidad en el septo apical con flujo sistólico VI→VD en Doppler color. La Vmax del chorro a través del defecto es 3,5 m/s. TA sistólica 90 mmHg.', prompt: 'Sin estenosis aórtica, ¿cuál es la presión sistólica estimada del VD?', diagram: { id: 'a4c', highlight: 'septum' }, options: ['≈ 41 mmHg', '≈ 49 mmHg', '≈ 139 mmHg', '≈ 76 mmHg'], answer: 0, explain: 'Gradiente VI-VD = 4 × 3,5² = 49 mmHg; PSVD = PAS − gradiente = 90 − 49 ≈ 41 mmHg. Un gradiente bajo a través de la CIV indica presiones de VD elevadas.' },
            { type: 'tf', prompt: 'La CIV de un IAM anterior suele ser apical y más sencilla de reparar que la de un IAM inferior, que es basal inferoseptal.', answer: true, explain: 'La CIV basal del IAM inferior se asocia a infarto de VD y tiene peor pronóstico. A menudo el trayecto es serpiginoso y es difícil verlo en un solo plano.' },
            { type: 'mc', context: 'Se coloca un catéter de Swan-Ganz: SatO₂ en la AD 62 %, en la arteria pulmonar 84 % y arterial sistémica 95 %. Se asume SatO₂ en las venas pulmonares del 98 %.', prompt: 'Calcula el Qp/Qs.', options: ['≈ 2,4', '≈ 1,1', '≈ 0,4', '≈ 3,9'], answer: 0, explain: 'Qp/Qs = (SaO₂ − SvO₂)/(SvpO₂ − SapO₂), tomando la venosa mixta antes del shunt (AD): (95 − 62)/(98 − 84) = 33/14 ≈ 2,4. El salto oximétrico de AD a AP (> 7 %) localiza el shunt a nivel ventricular.' },
            { type: 'match', prompt: 'Relaciona cada complicación del IAM con su hallazgo ecocardiográfico', pairs: [['CIV posinfarto', 'Shunt sistólico VI→VD en el septo'], ['Rotura de músculo papilar', 'Velo flail con IM excéntrica'], ['Pseudoaneurisma', 'Saco con cuello estrecho'], ['Aneurisma verdadero', 'Pared discinética con cuello ancho']], explain: 'Todas aparecen sobre todo en infartos transmurales extensos o reperfundidos tarde. El pseudoaneurisma es una rotura contenida por pericardio y trombo.' },
            { type: 'mc', context: 'Pese a noradrenalina y dobutamina, persiste en shock con lactato en ascenso.', prompt: '¿Qué actitud recomiendan las guías ESC 2023?', options: ['Soporte circulatorio mecánico como puente y cirugía (Heart Team)', 'Tratamiento médico y cierre diferido a las 6 semanas', 'Fibrinólisis por posible reoclusión de la DA', 'Anticoagulación y nuevo ETT en una semana'], answer: 0, explain: 'La CIV en shock refractario tiene una mortalidad cercana al 100 % sin cirugía. BCIA, Impella o ECMO estabilizan como puente; diferir la cirugía solo se plantea si responde al tratamiento. El cierre percutáneo es alternativa en casos seleccionados.' },
          ],
        },
        {
          id: 'casos-u6-l2',
          title: 'Rotura de músculo papilar',
          case: {
            title: 'Mujer de 66 años con edema agudo de pulmón tras un IAM inferior',
            text: 'Mujer de 66 años, hipertensa, con un IAMCEST inferolateral por oclusión de una circunfleja dominante, tratado con ICP a las 9 horas. Al tercer día presenta disnea súbita, ortopnea y crepitantes hasta los vértices. TA 85/55 mmHg, FC 120 lpm, SatO₂ 84 % con mascarilla. Solo se ausculta un soplo sistólico suave y corto en el ápex.',
          },
          questions: [
            { type: 'tf', prompt: 'Que el soplo sea suave y corto hace improbable una insuficiencia mitral aguda grave.', answer: false, explain: 'En la IM aguda la AI no se ha adaptado: su presión sube enseguida y se iguala con la del VI, por lo que el soplo es corto, suave o incluso inaudible.' },
            { type: 'mc', prompt: '¿Qué músculo papilar se rompe con más frecuencia y por qué?', options: ['Posteromedial, por irrigación de una sola arteria', 'Anterolateral, por irrigación de una sola arteria', 'Posteromedial, por tener doble irrigación', 'Anterolateral, por su mayor tamaño'], answer: 0, explain: 'El posteromedial depende de la descendente posterior (CD o Cx dominante); el anterolateral recibe flujo de la DA y la Cx, y es más resistente a la isquemia.' },
            { type: 'mc', context: 'ETT: VI no dilatado, hipercinético salvo acinesia inferolateral. El velo posterior mitral es flail, con una masa móvil (cabeza del papilar) que prolapsa a la AI en sístole.', prompt: '¿Hacia dónde esperas que se dirija el chorro de IM?', options: ['Excéntrico, hacia la pared anterior de la AI', 'Excéntrico, hacia la pared posterior de la AI', 'Central, hacia el techo de la AI', 'Hacia la orejuela izquierda'], answer: 0, explain: 'En el flail, el chorro se dirige en sentido opuesto al velo afectado: velo posterior → chorro anterior. Los chorros excéntricos se pegan a la pared (efecto Coandă) y se subestiman en color.' },
            { type: 'mc', context: 'PISA: radio 1,0 cm con velocidad de aliasing 40 cm/s. Vmax de la IM 5 m/s y VTI de la IM 150 cm.', prompt: 'Calcula el orificio regurgitante efectivo (ORE) y el volumen regurgitante.', options: ['ORE 0,50 cm²; volumen 75 ml', 'ORE 0,25 cm²; volumen 37 ml', 'ORE 5,0 cm²; volumen 750 ml', 'ORE 0,05 cm²; volumen 8 ml'], answer: 0, explain: 'ORE = 2π × r² × Va / Vmax = 6,28 × 1 × 40 / 500 ≈ 0,50 cm²; volumen = ORE × VTI = 0,50 × 150 = 75 ml. Ambos superan los umbrales de IM primaria grave (≥ 0,40 cm² y ≥ 60 ml).' },
            { type: 'mc', context: 'Se coloca un catéter de Swan-Ganz. Observa la curva de presión capilar pulmonar.', pressure: 'pcwp-v', prompt: '¿Qué muestra el trazado?', options: ['Ondas v gigantes por insuficiencia mitral aguda', 'Ondas a en cañón por disociación AV', 'Patrón dip-plateau por constricción', 'Ausencia de onda a por fibrilación auricular'], answer: 0, explain: 'La regurgitación a una AI pequeña y rígida genera ondas v altas y precoces. No son específicas: también aparecen en la CIV posinfarto por el aumento del retorno venoso pulmonar.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento indicado?', options: ['Cirugía urgente, habitualmente sustitución mitral', 'Tratamiento médico y cirugía electiva a los 3 meses', 'Nueva ICP de la circunfleja', 'Diuréticos y ETE de control en 48 horas'], answer: 0, explain: 'La rotura de papilar es una indicación de cirugía urgente (ESC 2023); rara vez se puede reparar. El balón de contrapulsación o Impella reducen la poscarga como puente; la TEER se ha usado con éxito (registros) en pacientes inoperables.' },
          ],
        },
        {
          id: 'casos-u6-l3',
          title: 'Rotura de pared libre y pseudoaneurisma',
          case: {
            title: 'Mujer de 79 años con dolor recurrente tras un infarto no reperfundido',
            text: 'Mujer de 79 años, hipertensa, con su primer infarto: IAMCEST lateral evolucionado que consultó a las 48 horas y no se reperfundió. Al quinto día presenta dolor torácico recurrente, náuseas y un episodio de hipotensión con bradicardia que se recupera con sueroterapia. El ECG muestra persistencia de la elevación del ST en I, aVL, V5 y V6.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué perfil de riesgo de rotura de pared libre presenta esta paciente?', options: ['Edad avanzada, mujer, primer IAM y sin reperfusión', 'Diabetes, infartos previos y circulación colateral', 'Juventud, varón y reperfusión primaria precoz', 'IAM sin elevación del ST y FEVI conservada'], answer: 0, explain: 'La rotura de pared libre es más frecuente en mujeres mayores, hipertensas, con un primer infarto transmural no reperfundido o fibrinolisado tarde. La circulación colateral y los infartos previos protegen.' },
            { type: 'mc', context: 'FoCUS: derrame pericárdico de 14 mm con ecos densos y heterogéneos en su interior y colapso diastólico de la AD. FEVI 45 % con acinesia lateral.', prompt: '¿Qué sugiere el contenido ecodenso del derrame?', options: ['Hemopericardio con coágulo por rotura', 'Derrame seroso del síndrome de Dressler', 'Grasa epicárdica prominente', 'Pericarditis epistenocárdica fibrinosa'], answer: 0, explain: 'Un derrame con ecos densos tras un infarto transmural sugiere sangre coagulada por una rotura subaguda. La pericarditis epistenocárdica produce derrames pequeños, sin repercusión.' },
            { type: 'mc', context: 'Se estabiliza. Un ETT con contraste muestra un saco de 4 cm junto a la pared inferolateral comunicado con el VI por un cuello de 1,2 cm, con flujo bidireccional en Doppler color y paredes de trombo.', prompt: '¿Cuál es el diagnóstico?', options: ['Pseudoaneurisma ventricular', 'Aneurisma ventricular verdadero', 'Divertículo congénito del VI', 'Quiste pericárdico'], answer: 0, explain: 'El pseudoaneurisma es una rotura contenida por pericardio y trombo, sin miocardio en su pared. El cuello estrecho (cociente cuello/diámetro máximo < 0,5) y la localización inferolateral son típicos.' },
            { type: 'tf', prompt: 'Como está contenido, el pseudoaneurisma tiene bajo riesgo de rotura y puede seguirse con ecocardiogramas seriados.', answer: false, explain: 'Hasta un tercio de los pseudoaneurismas se rompen; por ello se recomienda cirugía. El aneurisma verdadero, con pared de miocardio, rara vez se rompe y suele manejarse médicamente.' },
            { type: 'tf', prompt: 'El ecocardiograma con contraste ayuda a delimitar el saco y a demostrar que se rellena desde el VI.', answer: true, explain: 'El contraste mejora la definición del borde endocárdico y muestra la comunicación con la cavidad. La RM o la TC confirman la ausencia de miocardio en la pared.' },
            { type: 'mc', prompt: '¿Qué tratamiento corresponde?', options: ['Cirugía cardiaca urgente', 'Pericardiocentesis evacuadora completa y observación', 'Anticoagulación por el trombo del saco', 'ETT de control a los 3 meses'], answer: 0, explain: 'La rotura de pared libre, aguda o contenida, requiere cirugía urgente (ESC 2023). Si hay taponamiento, la pericardiocentesis solo es un puente: evacuar todo puede reabrir la rotura.' },
          ],
        },
        {
          id: 'casos-u6-l4',
          title: 'Insuficiencia aórtica aguda por disección',
          case: {
            title: 'Varón de 52 años con dolor desgarrante y disnea',
            text: 'Varón de 52 años con hipertensión mal controlada. Presenta un dolor torácico brusco y desgarrante irradiado a la espalda, seguido de disnea. TA 110/60 mmHg en el brazo derecho y 85/50 mmHg en el izquierdo, FC 118 lpm. Crepitantes bibasales y un soplo diastólico corto en el borde esternal izquierdo. ECG: taquicardia sinusal sin elevación del ST.',
          },
          questions: [
            { type: 'mc', context: 'FoCUS en urgencias. En el plano paraesternal largo, la raíz aórtica mide 52 mm y se ve una membrana móvil en la aorta ascendente.', prompt: '¿Cuál es el diagnóstico más probable?', diagram: { id: 'plax', highlight: 'ao' }, options: ['Disección aórtica tipo A de Stanford', 'Disección aórtica tipo B de Stanford', 'Aneurisma aórtico sin disección', 'Úlcera penetrante de aorta descendente'], answer: 0, explain: 'Un flap en la aorta ascendente define el tipo A. El ETT es poco sensible para descartar la disección, pero ver el flap acelera el diagnóstico; la angio-TC lo confirma y delimita la extensión.' },
            { type: 'mc', context: 'Doppler: chorro de IAo ancho, tiempo de hemipresión (THP) 170 ms y flujo holodiastólico inverso en la aorta abdominal. En modo M, la mitral se cierra antes del QRS.', prompt: '¿Qué indica el cierre mitral precoz?', options: ['Presión diastólica del VI que supera pronto a la de la AI', 'Bloqueo AV de primer grado asociado', 'Disfunción sistólica grave del VI', 'Estenosis mitral reumática asociada'], answer: 0, explain: 'En la IAo aguda grave, un VI no dilatado recibe mucho volumen y su presión diastólica sube rápido hasta superar la de la AI y cerrar la mitral. Es un signo de gravedad.' },
            { type: 'tf', prompt: 'En la IAo aguda grave, el THP corto refleja la rápida igualación de presiones entre aorta y VI.', answer: true, explain: 'Un THP < 200 ms apoya una IAo grave. En la crónica, el VI dilatado y distensible amortigua la subida de presión y el THP es más largo.' },
            { type: 'match', prompt: 'Relaciona cada mecanismo de IAo en la disección tipo A con su explicación', pairs: [['Dilatación de la unión sinotubular', 'Coaptación central incompleta'], ['Prolapso del flap por la válvula', 'Obstrucción intermitente del TSVI'], ['Desinserción de una comisura', 'Prolapso del velo afectado'], ['Válvula bicúspide previa', 'Anomalía valvular de base']], explain: 'Identificar el mecanismo en el ETE intraoperatorio decide si se resuspende la válvula o se sustituye.' },
            { type: 'tf', prompt: 'El balón de contrapulsación intraaórtico es un buen puente a la cirugía en la IAo aguda grave.', answer: false, explain: 'El balón se infla en diástole y aumenta el volumen regurgitante: está contraindicado en la IAo significativa y en la disección aórtica.' },
            { type: 'mc', prompt: '¿Cuál es la actitud correcta?', options: ['Cirugía urgente de aorta ascendente y válvula', 'Coronariografía previa a la cirugía', 'Control de TA y cirugía electiva en 2 semanas', 'Endoprótesis en la aorta descendente'], answer: 0, explain: 'La disección tipo A requiere cirugía urgente; la mortalidad aumenta un 1–2 % por hora. La coronariografía rutinaria retrasa la cirugía y no se recomienda; el ETE se hace en quirófano.' },
          ],
        },
        {
          id: 'casos-u6-l5',
          title: 'Taponamiento posquirúrgico localizado',
          case: {
            title: 'Mujer de 67 años con hipotensión tras una sustitución mitral',
            text: 'Mujer de 67 años, cuarto día tras una sustitución valvular mitral por una prótesis mecánica, con heparina sódica. Se retiraron los drenajes el segundo día. Presenta hipotensión progresiva (88/60 mmHg), taquicardia de 120 lpm, oliguria y presión venosa central de 18 cmH₂O. No tiene pulso paradójico. El ETT tiene mala ventana: derrame anterior escaso, sin colapso de AD ni de VD.',
          },
          questions: [
            { type: 'tf', prompt: 'Que no haya colapso de cavidades derechas ni pulso paradójico descarta un taponamiento.', answer: false, explain: 'Tras la cirugía cardiaca el derrame suele ser localizado (coágulo) y comprimir una sola cavidad, a menudo izquierda; los signos clásicos pueden faltar.' },
            { type: 'mc', prompt: 'El ETT no es concluyente. ¿Qué prueba es la más útil?', options: ['Ecocardiograma transesofágico', 'Radiografía de tórax', 'ECG de 12 derivaciones', 'Gammagrafía de perfusión pulmonar'], answer: 0, explain: 'El ETE ve bien las colecciones posteriores y retroauriculares, que el ETT pasa por alto. La TC es una alternativa si el ETE no es posible.' },
            { type: 'mc', context: 'ETE: colección ecodensa de 3 cm detrás de la AI que la comprime y reduce su tamaño. VI pequeño e hipercinético; prótesis mitral normofuncionante.', prompt: '¿Cuál es el mecanismo del bajo gasto?', options: ['Compresión de la AI que limita el llenado del VI', 'Disfunción sistólica del VI posquirúrgica', 'Obstrucción de la prótesis mitral por trombo', 'Hipovolemia por sangrado digestivo'], answer: 0, explain: 'La compresión de la AI (y de las venas pulmonares) reduce la precarga del VI. El VI pequeño e hipercinético encaja con un llenado restringido, no con un fallo de bomba.' },
            { type: 'match', prompt: 'Relaciona cada colección localizada con su repercusión', pairs: [['Colección anterior al VD', 'Colapso del VD y del TSVD'], ['Colección posterior a la AI', 'Compresión de AI y venas pulmonares'], ['Colección junto a la AD', 'Colapso de AD y VCI dilatada'], ['Derrame circunferencial', 'Signos clásicos de taponamiento']], explain: 'La repercusión depende de qué cavidad se comprime. En el posoperatorio hay que rastrear todos los recesos, mejor con ETE.' },
            { type: 'mc', prompt: '¿Qué tratamiento es el más adecuado?', options: ['Reintervención quirúrgica para evacuar el hematoma', 'Pericardiocentesis subxifoidea percutánea', 'Diuréticos intravenosos', 'Fibrinólisis intrapericárdica'], answer: 0, explain: 'Un coágulo posterior localizado no se drena bien con aguja y el acceso es arriesgado: se recomienda revisión quirúrgica (ESC 2015). La pericardiocentesis sirve para derrames libres y accesibles.' },
            { type: 'tf', prompt: 'La anticoagulación y el síndrome pospericardiotomía favorecen los derrames pericárdicos tardíos tras la cirugía cardiaca.', answer: true, explain: 'Los derrames tardíos (> 1 semana) se asocian a anticoagulación y a inflamación pospericardiotomía. Con prótesis mecánica, la anticoagulación se ajusta, no se suspende sin más.' },
          ],
        },
        {
          id: 'casos-u6-l6',
          title: 'Shock indiferenciado: protocolo RUSH',
          case: {
            title: 'Varón de 74 años con hipotensión y dolor lumbar',
            text: 'Varón de 74 años, exfumador e hipertenso, traído a urgencias por un dolor lumbar intenso de 2 horas y un síncope. TA 78/45 mmHg, FC 128 lpm, palidez, sudoración y relleno capilar lento. No hay fiebre. El abdomen es doloroso, sin defensa clara. Se hace una ecografía clínica a pie de cama siguiendo el protocolo RUSH.',
          },
          questions: [
            { type: 'match', prompt: 'Relaciona cada componente del protocolo RUSH con lo que valora', pairs: [['Bomba', 'Función ventricular y derrame pericárdico'], ['Tanque', 'VCI, líquido libre y neumotórax'], ['Tuberías', 'Aorta y trombosis venosa profunda']], explain: 'RUSH ordena la exploración en tres pasos para clasificar el shock en minutos. FoCUS es la parte cardiaca.' },
            { type: 'match', prompt: 'Relaciona cada tipo de shock con su patrón ecográfico más típico', pairs: [['Hipovolémico', 'VI hiperdinámico y VCI colapsada'], ['Cardiogénico', 'VI hipocinético y VCI plétora'], ['Obstructivo por TEP', 'VD dilatado y septo en "D"'], ['Obstructivo por taponamiento', 'Derrame con colapso de AD y VD']], explain: 'El shock distributivo inicial también muestra un VI hiperdinámico, pero con piel caliente y vasodilatación.' },
            { type: 'mc', context: 'Bomba: VI pequeño e hiperdinámico con obliteración de la cavidad en sístole, VD normal, sin derrame pericárdico. Tanque: VCI de 9 mm con colapso inspiratorio > 50 %, sin líquido libre intraperitoneal ni neumotórax.', prompt: '¿Qué tipo de shock sugieren estos hallazgos?', options: ['Hipovolémico', 'Cardiogénico', 'Obstructivo', 'Distributivo por sepsis'], answer: 0, explain: 'Cavidades vacías y VCI pequeña colapsable indican una precarga baja. Sin fiebre ni vasodilatación, con dolor lumbar y síncope, piensa en una hemorragia.' },
            { type: 'mc', context: 'Tuberías: aorta abdominal infrarrenal de 68 mm con trombo mural. Venas femorales compresibles.', prompt: '¿Cuál es el diagnóstico más probable?', options: ['Rotura de aneurisma de aorta abdominal', 'Disección aórtica tipo A', 'Cólico renoureteral complicado', 'Isquemia mesentérica aguda'], answer: 0, explain: 'Dolor lumbar, hipotensión y un AAA > 5 cm forman la tríada clásica de la rotura. La ecografía confirma el aneurisma, no la rotura.' },
            { type: 'tf', prompt: 'Si no se ve líquido libre intraperitoneal, la ecografía descarta la rotura de un aneurisma abdominal.', answer: false, explain: 'La mayoría de las roturas son retroperitoneales y la ecografía las detecta mal. En el paciente inestable con AAA conocido o visto, el diagnóstico es clínico.' },
            { type: 'mc', prompt: '¿Cuál es la actitud inicial?', options: ['Avisar a cirugía vascular para reparación urgente', 'Fluidos hasta normalizar la TA y luego TC', 'Fibrinólisis por sospecha de TEP', 'Noradrenalina y observación en la UCI'], answer: 0, explain: 'El paciente inestable con sospecha de rotura de AAA va directamente a reparación (EVAR o abierta). Se aplica hipotensión permisiva: fluidos limitados para mantener la consciencia y una PAS ≈ 70–90 mmHg (ESVS 2024).' },
          ],
        },
      ],
    },
    {
      id: 'casos-u7',
      title: 'Cardiopatías congénitas del adulto por eco',
      guide: {
        intro: 'Cada vez más adultos viven con cardiopatías congénitas, operadas o no. El ecocardiograma es la herramienta de seguimiento: mide gradientes, shunts y la respuesta del VD, y marca cuándo intervenir (ESC 2020).',
        sections: [
          {
            title: 'Lesiones obstructivas y aorta',
            points: [
              'Coartación: HTA en un joven, pulsos femorales débiles y retrasados; en el Doppler de la aorta descendente, gradiente alto y flujo diastólico persistente.',
              'Las colaterales extensas hacen que el gradiente Doppler infraestime la gravedad; confirma con RM o TC.',
              'Repara la coartación si hay HTA con gradiente pico-pico invasivo ≥ 20 mmHg; en adultos se prefiere el stent si la anatomía es adecuada.',
              'Bicúspide: cirugía de aorta ascendente si ≥ 55 mm, ≥ 50 mm con factores de riesgo (historia familiar de disección, coartación, HTA, crecimiento ≥ 3 mm/año) y ≥ 45 mm si se opera la válvula.',
            ],
            tip: 'Ante una bicúspide busca siempre una coartación y criba a los familiares de primer grado.',
          },
          {
            title: 'Corazón derecho: Ebstein y Fallot reparado',
            points: [
              'Ebstein: desplazamiento apical del velo septal tricuspídeo ≥ 8 mm/m² respecto al velo anterior mitral, con porción atrializada del VD.',
              'Se asocia a CIA o FOP (cianosis por shunt D-I) y a vías accesorias (preexcitación).',
              'Fallot reparado: la IP grave (chorro ancho, THP corto, reversión en las ramas) dilata el VD con los años.',
              'Recambio valvular pulmonar si hay síntomas, o en asintomáticos con VTSVD ≥ 80 ml/m², VTDVD ≥ 160 ml/m² o IT progresiva.',
            ],
            tip: 'En el Fallot, QRS ≥ 180 ms, disfunción ventricular y arritmias marcan riesgo de muerte súbita.',
          },
          {
            title: 'Shunts restrictivos',
            points: [
              'En la CIV restrictiva el chorro VI→VD es de alta velocidad: PSVD = PAS − 4V².',
              'Qp/Qs = (D²TSVD × VTI TSVD)/(D²TSVI × VTI TSVI); ≥ 1,5 o un VI dilatado indican shunt significativo.',
              'Cierra la CIV si hay sobrecarga de volumen del VI sin HAP; considéralo tras endocarditis o con prolapso aórtico e IAo progresiva.',
              'Una CIV pequeña sin HP es de bajo riesgo en el embarazo.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u7-l1',
          title: 'Coartación aórtica en un joven hipertenso',
          case: {
            title: 'Varón de 19 años con hipertensión en una revisión deportiva',
            text: 'Varón de 19 años, jugador de baloncesto, al que en la revisión deportiva se detecta una TA de 165/85 mmHg en el brazo derecho. Refiere cansancio en las piernas al correr. Los pulsos femorales son débiles y se retrasan respecto a los radiales. Se ausculta un clic de eyección y un soplo sistólico en la región interescapular.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué exploración sencilla apoya la sospecha antes de pedir pruebas?', options: ['Medir la TA en los brazos y en las piernas', 'Fondo de ojo', 'Índice tobillo-brazo con ejercicio', 'Ortostatismo activo'], answer: 0, explain: 'Una TA en las piernas menor que en los brazos (normalmente es mayor) y el retraso radiofemoral son los signos clave. El clic sugiere una válvula aórtica bicúspide asociada.' },
            { type: 'mc', context: 'ETT desde el plano supraesternal: Vmax en la aorta descendente proximal 3,8 m/s; la velocidad antes del estrechamiento es 1,5 m/s.', prompt: '¿Cuál es el gradiente pico estimado a través de la coartación?', options: ['≈ 49 mmHg', '≈ 58 mmHg', '≈ 9 mmHg', '≈ 25 mmHg'], answer: 0, explain: 'Con velocidad proximal > 1 m/s se usa la ecuación de Bernoulli ampliada: 4 × (3,8² − 1,5²) = 4 × 12,2 ≈ 49 mmHg. La simplificada (4 × 3,8² ≈ 58) lo sobrestima.' },
            { type: 'tf', context: 'El Doppler continuo muestra que el flujo anterógrado persiste durante toda la diástole ("cola diastólica").', prompt: 'El flujo diastólico persistente en la aorta descendente indica una coartación significativa.', answer: true, explain: 'Durante la diástole se mantiene un gradiente a través de la estenosis. Es más específico de gravedad que el gradiente sistólico aislado.' },
            { type: 'mc', prompt: '¿Qué situación hace que el gradiente Doppler infraestime la gravedad de la coartación?', options: ['Colaterales extensas que derivan el flujo', 'Anemia con gasto cardiaco elevado', 'Ejercicio durante la medición', 'Insuficiencia aórtica asociada'], answer: 0, explain: 'Las colaterales (intercostales, mamarias) reducen el flujo por la coartación y el gradiente. La anemia, el ejercicio o la IAo aumentan el flujo y lo sobrestiman.' },
            { type: 'mc', context: 'RM: coartación ístmica con diámetro mínimo de 8 mm frente a 20 mm a nivel del diafragma y colaterales. El cateterismo confirma un gradiente pico-pico de 32 mmHg.', prompt: '¿Qué recomiendan las guías ESC 2020?', options: ['Reparación, preferiblemente con stent', 'Tratamiento antihipertensivo y revisión anual', 'Cirugía solo si aparece insuficiencia cardiaca', 'Repetir la RM en 5 años'], answer: 0, explain: 'La reparación está indicada en pacientes hipertensos con gradiente invasivo ≥ 20 mmHg (clase I). En adultos con anatomía adecuada se prefiere el stent.' },
            { type: 'match', prompt: 'Relaciona cada asociación de la coartación con su implicación', pairs: [['Válvula aórtica bicúspide', 'Asociación más frecuente'], ['Síndrome de Turner', 'Pensar en él en mujeres jóvenes'], ['Aneurismas intracraneales', 'Riesgo de hemorragia cerebral'], ['Recoartación', 'Seguimiento de por vida tras reparar']], explain: 'Incluso reparada, la coartación exige seguimiento por HTA residual, recoartación, aneurismas en la zona de reparación y aortopatía.' },
          ],
        },
        {
          id: 'casos-u7-l2',
          title: 'Anomalía de Ebstein',
          case: {
            title: 'Mujer de 32 años con palpitaciones y cianosis de esfuerzo',
            text: 'Mujer de 32 años con episodios de taquicardia paroxística desde la adolescencia. En el último año nota disnea con esfuerzos moderados y labios violáceos al subir cuestas. SatO₂ 95 % en reposo y 86 % tras caminar 6 minutos. Superficie corporal 1,6 m². En la tira de ritmo basal se observa el trazado mostrado.',
          },
          questions: [
            { type: 'mc', ecg: 'wpw', prompt: 'Observa la tira basal. ¿Qué hallazgo muestra y con qué se asocia en esta cardiopatía?', options: ['Preexcitación por vía accesoria derecha', 'Bloqueo AV de primer grado nodal', 'Síndrome de QT largo congénito', 'Bloqueo de rama izquierda'], answer: 0, explain: 'PR corto y onda delta indican preexcitación. En el Ebstein, el 10–30 % tiene vías accesorias, a menudo derechas y múltiples.' },
            { type: 'mc', context: 'ETT apical de 4 cámaras: el velo septal tricuspídeo se inserta 25 mm más hacia el ápex que el velo anterior mitral. El velo anterior tricuspídeo es grande y redundante.', prompt: 'Calcula el desplazamiento indexado e interprétalo.', diagram: { id: 'a4c', highlight: 'tv' }, options: ['15,6 mm/m²: diagnóstico de Ebstein', '15,6 mm/m²: dentro de la normalidad', '40 mm/m²: diagnóstico de Ebstein', '6,4 mm/m²: dentro de la normalidad'], answer: 0, explain: '25 / 1,6 ≈ 15,6 mm/m², por encima del umbral de 8 mm/m². Normalmente la tricúspide se inserta algo más apical que la mitral, pero menos de ese valor.' },
            { type: 'tf', prompt: 'En un adulto de 1,6 m², una distancia de 10 mm entre las inserciones septales tricuspídea y mitral basta para diagnosticar un Ebstein.', answer: false, explain: '10 / 1,6 ≈ 6,3 mm/m², por debajo de 8 mm/m²: es un desplazamiento fisiológico. Hay que indexar siempre por superficie corporal.' },
            { type: 'match', prompt: 'Relaciona cada componente de la anomalía de Ebstein con su descripción', pairs: [['VD atrializado', 'Porción entre anillo y velos desplazados'], ['VD funcional', 'Cavidad distal a la inserción de los velos'], ['Velo anterior "en vela"', 'Grande y redundante; facilita reparar'], ['CIA o FOP asociado', 'Shunt D-I y cianosis de esfuerzo']], explain: 'Cuanto más pequeño es el VD funcional y mayor la IT, peor es la tolerancia. El shunt D-I también expone a embolias paradójicas.' },
            { type: 'mc', context: 'IT grave, AD muy dilatada, VD funcional con fracción de acortamiento conservada y CIA tipo ostium secundum con shunt D-I en el esfuerzo.', prompt: 'Según ESC 2020, ¿qué actitud corresponde?', options: ['Reparación quirúrgica de la tricúspide y cierre de la CIA', 'Cierre percutáneo aislado de la CIA', 'Tratamiento médico con diuréticos y revisión anual', 'Trasplante cardiaco'], answer: 0, explain: 'La IT grave con síntomas o deterioro objetivo del esfuerzo indica cirugía (reparación tipo cono), cerrando la CIA en el mismo acto si se prevé bien tolerado. Cerrar solo la CIA puede descompensar un VD pequeño.' },
            { type: 'tf', prompt: 'Con preexcitación o arritmias sintomáticas se recomienda estudio electrofisiológico y ablación antes de la cirugía, o tratar la arritmia en el quirófano.', answer: true, explain: 'Las vías accesorias del Ebstein son difíciles de ablacionar tras la cirugía. Las taquiarritmias son una causa importante de muerte súbita en estos pacientes.' },
          ],
        },
        {
          id: 'casos-u7-l3',
          title: 'Tetralogía de Fallot reparada',
          case: {
            title: 'Varón de 34 años operado de Fallot en la infancia',
            text: 'Varón de 34 años con tetralogía de Fallot corregida a los 2 años con cierre de la CIV y parche transanular. Hasta ahora estaba asintomático. Desde hace un año nota disnea al subir dos pisos (NYHA II) y palpitaciones. ECG: ritmo sinusal con bloqueo de rama derecha y QRS de 180 ms. En la prueba de esfuerzo cardiopulmonar el consumo de oxígeno ha bajado respecto a la previa.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué indica un QRS de 180 ms en un Fallot reparado?', options: ['Mayor riesgo de TV y muerte súbita', 'Bloqueo de rama sin significado pronóstico', 'Indicación directa de marcapasos', 'Hipertrofia ventricular izquierda'], answer: 0, explain: 'El QRS ≥ 180 ms refleja la dilatación del VD (interacción mecanoeléctrica) y es un marcador clásico de arritmias ventriculares y muerte súbita.' },
            { type: 'mc', context: 'ETT: chorro de IP que ocupa todo el TSVD, THP de la IP 80 ms, terminación precoz del flujo diastólico y flujo diastólico inverso en las ramas pulmonares.', prompt: '¿Qué indican estos hallazgos?', options: ['Insuficiencia pulmonar grave', 'Estenosis pulmonar residual grave', 'Hipertensión pulmonar grave', 'Insuficiencia pulmonar leve fisiológica'], answer: 0, explain: 'THP < 100 ms y reversión en las ramas son signos de IP grave. El parche transanular suprime la función valvular y la IP grave es la secuela más común.' },
            { type: 'tf', prompt: 'En la IP grave el soplo diastólico es largo y de intensidad alta.', answer: false, explain: 'Las presiones de AP y VD se igualan pronto en diástole, de modo que el soplo es corto y suave, y puede pasar inadvertido. La IP grave puede ser casi silente.' },
            { type: 'match', prompt: 'Relaciona cada parámetro con el umbral relevante en el Fallot reparado', pairs: [['Fracción regurgitante pulmonar', '> 30–40 %: IP grave'], ['VTDVD indexado (RM)', '≥ 160 ml/m²'], ['VTSVD indexado (RM)', '≥ 80 ml/m²'], ['Duración del QRS', '≥ 180 ms']], explain: 'La RM es la referencia para medir volúmenes y fracción regurgitante; el ETT sirve para el seguimiento y para estimar la presión del VD.' },
            { type: 'mc', context: 'RM: VTDVD 165 ml/m², VTSVD 85 ml/m², FEVD 42 %, fracción regurgitante pulmonar 45 %. Sin obstrucción del TSVD.', prompt: 'Según ESC 2020, ¿qué está indicado?', options: ['Reemplazo valvular pulmonar', 'Seguimiento con RM anual', 'DAI sin otra intervención', 'Tratamiento con diuréticos e IECA'], answer: 0, explain: 'En el Fallot reparado con IP grave y síntomas, el recambio pulmonar es clase I. Aunque estuviera asintomático, estos volúmenes ya lo justificarían.' },
            { type: 'tf', prompt: 'Si la anatomía del TSVD lo permite, el implante percutáneo de válvula pulmonar es una alternativa a la cirugía.', answer: true, explain: 'Antes se comprueba con angiografía que el stent no comprime una coronaria. Los TSVD con parche transanular muy dilatado pueden necesitar dispositivos autoexpandibles o cirugía.' },
          ],
        },
        {
          id: 'casos-u7-l4',
          title: 'Válvula aórtica bicúspide con aortopatía',
          case: {
            title: 'Varón de 45 años con soplo y antecedente familiar de disección',
            text: 'Varón de 45 años, hipertenso controlado, remitido por un soplo sistólico. Su padre murió de una disección aórtica a los 50 años. Está asintomático. ETT: válvula aórtica bicúspide con fusión de los velos coronarianos derecho e izquierdo, Vmax aórtica 2,5 m/s, IAo ligera, raíz aórtica de 42 mm y aorta ascendente tubular de 52 mm.',
          },
          questions: [
            { type: 'mc', prompt: 'En el plano paraesternal largo, ¿qué hallazgo valvular sugiere una válvula bicúspide?', diagram: { id: 'plax', highlight: 'av' }, options: ['Apertura sistólica "en cúpula" (doming)', 'Calcificación de la cara ventricular', 'Vibración diastólica del velo mitral anterior', 'Movimiento sistólico anterior de la mitral'], answer: 0, explain: 'Los velos fusionados no se abren del todo y se abomban en sístole. En el eje corto se ve una apertura elíptica con 2 comisuras y, a menudo, un rafe.' },
            { type: 'tf', prompt: 'En el ETT, los diámetros aórticos se miden en telediástole con el método de borde de ataque a borde de ataque.', answer: true, explain: 'Es la convención recomendada para el ETT; la TC y la RM miden de borde interno a borde interno. Usa el mismo método para comparar mediciones.' },
            { type: 'mc', context: 'Hace 12 meses, con el mismo método, la aorta ascendente medía 48 mm. La TC confirma ahora 52 mm.', prompt: '¿Cuál es la velocidad de crecimiento y qué implica?', options: ['4 mm/año: factor de riesgo (≥ 3 mm/año)', '4 mm/año: crecimiento normal con la edad', '0,4 mm/año: estable', '8 mm/año: rotura inminente'], answer: 0, explain: 'Un crecimiento ≥ 3 mm/año (confirmado con la misma técnica) es un factor de riesgo de disección y adelanta el umbral quirúrgico.' },
            { type: 'mc', prompt: 'Con aorta ascendente de 52 mm, historia familiar de disección y crecimiento rápido, ¿qué está indicado?', options: ['Cirugía de la aorta ascendente', 'Esperar a que alcance 55 mm', 'Betabloqueante y TC en 2 años', 'Recambio valvular aórtico aislado'], answer: 0, explain: 'Bicúspide: cirugía con ≥ 55 mm; con ≥ 50 mm si hay fenotipo de raíz o factores de riesgo (historia familiar, HTA no controlada, coartación, crecimiento ≥ 3 mm/año). Con ≥ 45 mm si se opera la válvula (ESC 2024/2025).' },
            { type: 'tf', prompt: 'El fenotipo de raíz (dilatación de la raíz aórtica, a menudo con IAo) se asocia a mayor progresión que el fenotipo de aorta ascendente.', answer: true, explain: 'El fenotipo de raíz, más frecuente en varones jóvenes, se comporta como una aortopatía más agresiva, con más riesgo de disección.' },
            { type: 'match', prompt: 'Relaciona cada aspecto del manejo de la bicúspide con la recomendación', pairs: [['Familiares de primer grado', 'Cribado con ETT'], ['Coartación aórtica', 'Buscarla en todo paciente con bicúspide'], ['Embarazo con aorta > 50 mm', 'Desaconsejado'], ['Deporte isométrico intenso', 'Evitarlo si la aorta está dilatada']], explain: 'La bicúspide tiene carácter familiar (≈ 10 % de los familiares de primer grado), por lo que se recomienda el cribado.' },
          ],
        },
        {
          id: 'casos-u7-l5',
          title: 'Comunicación interventricular restrictiva',
          case: {
            title: 'Mujer de 26 años con un soplo desde la infancia que desea embarazo',
            text: 'Mujer de 26 años, asintomática, con un soplo conocido desde la infancia del que nunca se hizo seguimiento. Consulta antes de buscar un embarazo. Se ausculta un soplo holosistólico rudo 4/6 con frémito en el tercer espacio intercostal izquierdo. TA 120/75 mmHg. ECG normal.',
          },
          questions: [
            { type: 'tf', prompt: 'Un soplo de CIV muy intenso con frémito indica un defecto grande.', answer: false, explain: 'Al revés: un defecto pequeño mantiene un gradiente VI-VD alto y un chorro turbulento muy audible (enfermedad de Roger). Las CIV grandes con HP pueden tener soplos suaves.' },
            { type: 'mc', context: 'ETT: CIV perimembranosa de 5 mm con chorro VI→VD de Vmax 5,0 m/s. No hay obstrucción del TSVI.', prompt: '¿Cuál es la presión sistólica estimada del VD?', options: ['≈ 20 mmHg', '≈ 100 mmHg', '≈ 25 mmHg', '≈ 45 mmHg'], answer: 0, explain: 'Gradiente = 4 × 5² = 100 mmHg; PSVD = PAS − gradiente = 120 − 100 = 20 mmHg. Un gradiente alto confirma una CIV restrictiva sin HP.' },
            { type: 'mc', context: 'Diámetro del TSVD 2,2 cm con VTI 22 cm; diámetro del TSVI 2,0 cm con VTI 20 cm.', prompt: 'Calcula el Qp/Qs.', options: ['≈ 1,3', '≈ 1,1', '≈ 1,5', '≈ 0,75'], answer: 0, explain: 'Qp/Qs = (2,2² × 22)/(2,0² × 20) = 106,5/80 ≈ 1,3. Olvidar el diámetro y comparar solo los VTI da 1,1, un error típico.' },
            { type: 'mc', context: 'VI de tamaño normal, sin IAo ni prolapso de velos aórticos, sin antecedente de endocarditis.', prompt: 'Según ESC 2020, ¿qué actitud corresponde?', options: ['Seguimiento clínico y ecográfico, sin cierre', 'Cierre quirúrgico de la CIV antes del embarazo', 'Cierre percutáneo de la CIV', 'Contraindicar el embarazo'], answer: 0, explain: 'Se cierra la CIV si hay sobrecarga de volumen del VI sin HAP. Con Qp/Qs < 1,5, VI normal y sin complicaciones, basta con seguimiento.' },
            { type: 'match', prompt: 'Relaciona cada complicación de la CIV perimembranosa con su mecanismo', pairs: [['Insuficiencia aórtica progresiva', 'Prolapso del velo coronario derecho'], ['Endocarditis', 'Lesión endocárdica por el chorro'], ['VD de doble cámara', 'Hipertrofia de bandas musculares del VD'], ['Cierre espontáneo parcial', 'Tejido accesorio tricuspídeo']], explain: 'El prolapso de un velo aórtico con IAo progresiva es indicación de cierre aunque el shunt sea pequeño.' },
            { type: 'tf', prompt: 'Una CIV pequeña sin hipertensión pulmonar ni otras lesiones es de bajo riesgo en el embarazo (clase mWHO I).', answer: true, explain: 'Según ESC 2018 el embarazo es bien tolerado; la profilaxis de endocarditis solo se plantea si hubo una endocarditis previa.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u8',
      title: 'Miocardio, masas y situaciones especiales',
      guide: {
        intro: 'Masas, miocardiopatías poco frecuentes, embarazo, oncología y dispositivos: escenarios en los que el ecocardiograma orienta el diagnóstico y decide el siguiente paso.',
        sections: [
          {
            title: 'Masas y dispositivos',
            points: [
              'Mixoma: masa pediculada en la AI anclada a la fosa oval, que protruye por la mitral en diástole; capta contraste.',
              'Trombo: orejuela o ápex acinético, con sustrato (FA, estenosis mitral, infarto); no capta contraste.',
              'Endocarditis de cable: el ETE es más sensible que el ETT; un ETE negativo no la descarta (PET-TC o gammagrafía con leucocitos).',
              'La endocarditis sobre dispositivo exige extraer todo el sistema (generador y cables), habitualmente por vía percutánea (ESC 2023).',
            ],
            tip: 'Mixomas múltiples, recidivantes o en jóvenes: piensa en el complejo de Carney.',
          },
          {
            title: 'Miocardio en situaciones especiales',
            points: [
              'Miocardiopatía periparto: FEVI < 45 % al final del embarazo o en los meses posteriores sin otra causa; FEVI < 30 % predice peor recuperación.',
              'Cardiotoxicidad (ESC 2022): leve si FEVI ≥ 50 % con caída relativa del GLS > 15 %; moderada si FEVI 40–49 % con descenso ≥ 10 puntos (o menor con GLS o biomarcadores); grave si FEVI < 40 %.',
              'Mide FEVI (mejor 3D) y GLS con el mismo equipo y software en cada control.',
              'DAVD (criterios 2010): VD dilatado con discinesia regional, T negativas en V1–V3, onda épsilon, TV con morfología de BRI e historia familiar.',
              'La hipertrabeculación del VI es un rasgo fenotípico (ESC 2023), no un diagnóstico por sí misma.',
            ],
          },
          {
            title: 'Constricción frente a restricción',
            points: [
              'Constricción: rebote septal, variación respiratoria de la E mitral > 25 %, e′ medial conservada (≥ 9 cm/s) y annulus reversus (e′ medial > lateral).',
              'Restricción: e′ baja (< 6 cm/s) por enfermedad del miocardio, sin variación respiratoria significativa y con NT-proBNP más alto.',
              'El dip-plateau del VD aparece en ambas; el dato hemodinámico discriminante es la discordancia respiratoria de las presiones de VI y VD.',
              'La constricción crónica sintomática se trata con pericardiectomía; si hay inflamación activa, prueba antes tratamiento antiinflamatorio.',
            ],
            tip: 'La radioterapia mediastínica puede producir ambas, a veces en el mismo paciente.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u8-l1',
          title: 'Mixoma auricular izquierdo',
          case: {
            title: 'Mujer de 54 años con disnea y síncope al incorporarse',
            text: 'Mujer de 54 años con 3 meses de disnea progresiva, febrícula, pérdida de 4 kg de peso y artralgias. Ha tenido dos síncopes al levantarse de la cama. Ritmo sinusal. Se ausculta un ruido protodiastólico de baja frecuencia seguido de un soplo diastólico apical que varía con la postura. VSG 68 mm/h y anemia leve.',
          },
          questions: [
            { type: 'mc', context: 'ETT: masa de 4 × 3 cm en la AI, móvil, de aspecto gelatinoso, unida por un pedículo al septo interauricular a nivel de la fosa oval, que protruye a través de la mitral en diástole.', prompt: '¿Cuál es el diagnóstico más probable?', diagram: { id: 'a4c', highlight: 'la' }, options: ['Mixoma auricular', 'Trombo en la orejuela izquierda', 'Fibroelastoma papilar', 'Vegetación endocardítica mitral'], answer: 0, explain: 'El mixoma es el tumor cardiaco primario más frecuente del adulto; el 75 % asienta en la AI con anclaje en la fosa oval. El ruido protodiastólico es el "plop tumoral".' },
            { type: 'match', prompt: 'Relaciona cada rasgo ecocardiográfico con la masa que sugiere', pairs: [['Anclaje en la fosa oval', 'Mixoma'], ['Orejuela con FA y AI dilatada', 'Trombo'], ['Pequeña y frondosa en la válvula aórtica', 'Fibroelastoma papilar'], ['Infiltración y derrame pericárdico', 'Tumor maligno o metástasis']], explain: 'Localización, sustrato y movilidad orientan el diagnóstico; la RM caracteriza el tejido y el contraste ecográfico valora la vascularización.' },
            { type: 'tf', prompt: 'Con contraste ecográfico, el trombo auricular suele captar de forma intensa, a diferencia del mixoma.', answer: false, explain: 'Es al revés: el trombo es avascular y no capta; el mixoma muestra captación parcial y los tumores malignos muy vascularizados captan intensamente.' },
            { type: 'mc', context: 'Doppler: gradiente medio transmitral 9 mmHg con FC 80 lpm. Vmax de la IT 3,2 m/s y VCI de 18 mm con colapso < 50 % (PAD estimada 8 mmHg).', prompt: '¿Cuál es la PSAP estimada?', options: ['≈ 49 mmHg', '≈ 41 mmHg', '≈ 21 mmHg', '≈ 34 mmHg'], answer: 0, explain: 'PSAP = 4 × 3,2² + PAD = 41 + 8 ≈ 49 mmHg. El mixoma obstruye la mitral como una estenosis funcional, que varía con la postura y explica los síncopes.' },
            { type: 'mc', prompt: '¿Qué tratamiento corresponde?', options: ['Resección quirúrgica sin demora', 'Anticoagulación y ETT de control en 3 meses', 'Biopsia percutánea guiada por ETE', 'Quimioterapia neoadyuvante'], answer: 0, explain: 'El mixoma debe extirparse pronto por riesgo de embolia y de obstrucción mitral con muerte súbita. Se reseca con su base de implantación para evitar recidivas.' },
            { type: 'tf', prompt: 'Ante mixomas múltiples, recidivantes o en pacientes jóvenes debe sospecharse un complejo de Carney.', answer: true, explain: 'Es un síndrome autosómico dominante (PRKAR1A) con lentiginosis y tumores endocrinos. Requiere seguimiento ecográfico y cribado familiar.' },
          ],
        },
        {
          id: 'casos-u8-l2',
          title: 'Miocardiopatía periparto',
          case: {
            title: 'Mujer de 31 años con disnea tres semanas después del parto',
            text: 'Mujer de 31 años, primípara, con un embarazo gemelar complicado con preeclampsia y cesárea en la semana 35. Tres semanas después del parto presenta disnea progresiva, ortopnea y edemas en los tobillos. TA 135/85 mmHg, FC 110 lpm, crepitantes bibasales. NT-proBNP 4200 pg/ml. Está dando lactancia materna.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué define la miocardiopatía periparto?', options: ['FEVI < 45 % al final del embarazo o meses después, sin otra causa', 'FEVI < 35 % solo durante el tercer trimestre', 'Dilatación del VI con FEVI conservada tras el parto', 'Insuficiencia cardiaca con miocardiopatía previa conocida'], answer: 0, explain: 'Es un diagnóstico de exclusión: disfunción sistólica (FEVI < 45 %) hacia el final del embarazo o en los meses siguientes. El VI puede no estar dilatado.' },
            { type: 'mc', context: 'ETT (Simpson biplano): volumen telediastólico del VI 150 ml y telesistólico 105 ml. Diámetro telediastólico 60 mm. IM funcional moderada. Sin trombos.', prompt: 'Calcula la FEVI.', options: ['30 %', '45 %', '70 %', '42 %'], answer: 0, explain: 'FEVI = (VTD − VTS)/VTD = (150 − 105)/150 = 30 %. El 70 % sale de dividir VTS entre VTD, un error frecuente.' },
            { type: 'mc', prompt: '¿Qué hallazgos basales se asocian a peor recuperación de la función ventricular?', options: ['FEVI < 30 % y diámetro telediastólico ≥ 60 mm', 'FEVI 40–45 % sin dilatación del VI', 'Hipertrofia concéntrica del VI', 'Derrame pericárdico pequeño'], answer: 0, explain: 'La FEVI muy reducida, la dilatación del VI y la afectación del VD predicen peor evolución. Muchas pacientes recuperan en 3–6 meses.' },
            { type: 'match', prompt: 'Relaciona cada medida terapéutica con su justificación', pairs: [['Bromocriptina', 'Bloquea la prolactina (fragmento 16 kDa)'], ['Anticoagulación profiláctica', 'Se asocia a la bromocriptina'], ['Enalapril tras el parto', 'Compatible con la lactancia'], ['Suprimir la lactancia', 'Se plantea en disfunción grave']], explain: 'El esquema BOARD resume el tratamiento: bromocriptina, anticoagulación, vasodilatadores, IECA/ARA-II o ARNI tras el parto, betabloqueantes y diuréticos. La bromocriptina tiene evidencia limitada (recomendación débil).' },
            { type: 'tf', prompt: 'Los IECA están contraindicados durante el embarazo, pero se pueden usar tras el parto.', answer: true, explain: 'Son teratógenos en el segundo y tercer trimestre. Tras el parto se prefieren enalapril o captopril si la madre da lactancia.' },
            { type: 'tf', prompt: 'Si la FEVI se normaliza por completo, el riesgo de recaída en un nuevo embarazo es nulo.', answer: false, explain: 'Incluso con recuperación completa hay riesgo de recaída; con FEVI < 50 % persistente se desaconseja un nuevo embarazo (ESC 2018). Requiere consejo preconcepcional.' },
          ],
        },
        {
          id: 'casos-u8-l3',
          title: 'Cardiotoxicidad por antraciclinas y trastuzumab',
          case: {
            title: 'Mujer de 49 años con cáncer de mama HER2 positivo',
            text: 'Mujer de 49 años, hipertensa en tratamiento, con un carcinoma de mama HER2 positivo. Recibió doxorrubicina (dosis acumulada 240 mg/m²) y ahora está con trastuzumab. ETT basal: FEVI 62 % (3D) y strain longitudinal global (GLS) −21 %. Troponina basal normal. Acude al control de los 3 meses asintomática.',
          },
          questions: [
            { type: 'mc', context: 'ETT de control con el mismo equipo y software: FEVI 55 % y GLS −16 %. Troponina normal.', prompt: '¿Cuál es la caída relativa del GLS?', options: ['≈ 24 %', '≈ 5 %', '≈ 31 %', '≈ 11 %'], answer: 0, explain: 'Caída relativa = (21 − 16)/21 ≈ 24 %. Más de un 15 % se considera significativo; 5 es la diferencia absoluta en puntos, no el porcentaje.' },
            { type: 'mc', prompt: 'Según la guía de cardio-oncología ESC 2022, ¿cómo se clasifica?', options: ['Disfunción cardiaca asintomática leve', 'Disfunción cardiaca asintomática moderada', 'Disfunción cardiaca asintomática grave', 'No cumple criterios de cardiotoxicidad'], answer: 0, explain: 'Leve: FEVI ≥ 50 % con caída relativa del GLS > 15 % y/o elevación de biomarcadores. Moderada: FEVI 40–49 % con descenso ≥ 10 puntos (o < 10 con GLS o biomarcadores). Grave: FEVI < 40 %.' },
            { type: 'tf', prompt: 'En la disfunción asintomática leve se recomienda suspender definitivamente el trastuzumab.', answer: false, explain: 'Se continúa el trastuzumab con controles más estrechos y se considera iniciar cardioprotección (IECA/ARA-II y/o betabloqueante). La decisión se toma con oncología.' },
            { type: 'match', prompt: 'Relaciona cada tratamiento oncológico con su cardiotoxicidad característica', pairs: [['Antraciclinas', 'Dosis acumulada, a menudo irreversible'], ['Trastuzumab', 'Disfunción del VI, suele ser reversible'], ['Inhibidores de checkpoint', 'Miocarditis'], ['Fluoropirimidinas (5-FU)', 'Vasoespasmo coronario']], explain: 'El riesgo con antraciclinas aumenta claramente por encima de 250 mg/m² de doxorrubicina; el tratamiento previo con antraciclinas aumenta el riesgo del trastuzumab.' },
            { type: 'mc', prompt: '¿Qué método se prefiere para seguir la FEVI durante el tratamiento?', options: ['ETT 3D, o Simpson biplano si no hay 3D', 'Teichholz en modo M', 'Estimación visual por el operador', 'Fracción de acortamiento en modo M'], answer: 0, explain: 'El 3D tiene la menor variabilidad entre estudios. Los métodos lineales o visuales no detectan cambios de 5–10 puntos con fiabilidad.' },
            { type: 'mc', context: 'A los 6 meses sigue asintomática, pero la FEVI es 44 % y el GLS −14 %.', prompt: '¿Qué actitud recomienda la guía ESC 2022?', options: ['Interrumpir temporalmente el trastuzumab e iniciar tratamiento de IC', 'Continuar el trastuzumab sin cambios', 'Suspender el trastuzumab de forma definitiva', 'Cambiar a doxorrubicina liposomal'], answer: 0, explain: 'FEVI 44 % con descenso de 18 puntos = disfunción moderada. Se interrumpe temporalmente el anti-HER2, se inicia tratamiento de IC y se reevalúa en unas semanas para reintroducirlo si mejora.' },
          ],
        },
        {
          id: 'casos-u8-l4',
          title: 'Constricción frente a restricción',
          case: {
            title: 'Varón de 63 años con ascitis y edemas tras radioterapia antigua',
            text: 'Varón de 63 años que recibió radioterapia mediastínica por un linfoma de Hodgkin hace 20 años. Presenta desde hace un año disnea, edemas en las piernas y aumento del perímetro abdominal. Presión venosa yugular elevada que aumenta con la inspiración y descenso y profundo. Ritmo sinusal. FEVI conservada en un ETT previo.',
          },
          questions: [
            { type: 'tf', prompt: 'El aumento de la presión venosa yugular con la inspiración (signo de Kussmaul) es específico de la pericarditis constrictiva.', answer: false, explain: 'Aparece también en la miocardiopatía restrictiva, el infarto de VD y la IT grave. No sirve para distinguir constricción de restricción.' },
            { type: 'mc', context: 'ETT: rebote septal respiratorio, VCI de 24 mm sin colapso, variación respiratoria de la E mitral del 35 %, e′ medial 14 cm/s y e′ lateral 10 cm/s, y flujo diastólico inverso espiratorio en las venas hepáticas.', prompt: '¿Qué diagnóstico sugieren estos hallazgos?', options: ['Pericarditis constrictiva', 'Miocardiopatía restrictiva', 'Taponamiento cardiaco', 'Insuficiencia tricuspídea grave aislada'], answer: 0, explain: 'Rebote septal, e′ medial conservada y reversión espiratoria en las venas hepáticas son los criterios de la Clínica Mayo. La e′ medial mayor que la lateral es el annulus reversus.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con su significado', pairs: [['Rebote septal respiratorio', 'Interdependencia ventricular'], ['e′ medial > e′ lateral', 'Annulus reversus'], ['e′ medial < 6 cm/s', 'Miocardio enfermo (restricción)'], ['Variación de la E mitral > 25 %', 'Disociación de presiones intratorácicas']], explain: 'En la constricción el miocardio está sano (e′ normal) pero el pericardio rígido aísla el corazón de la presión intratorácica y acopla los dos ventrículos.' },
            { type: 'tf', context: 'Cateterismo: igualación de las presiones diastólicas de las cuatro cavidades. Observa la curva del VD.', pressure: 'rv-dip', prompt: 'La morfología en raíz cuadrada (dip-plateau) de la curva del VD permite distinguir la constricción de la restricción.', answer: false, explain: 'El dip-plateau aparece en ambas. Lo que discrimina es la discordancia respiratoria de las presiones sistólicas de VI y VD (interdependencia), propia de la constricción.' },
            { type: 'mc', prompt: '¿Qué dato analítico orienta más a constricción que a restricción?', options: ['NT-proBNP relativamente bajo para el grado de congestión', 'NT-proBNP muy elevado', 'Troponina persistentemente elevada', 'Cadenas ligeras libres en suero alteradas'], answer: 0, explain: 'En la constricción el miocardio no se distiende y el péptido natriurético sube poco. Las cadenas ligeras alteradas orientan a amiloidosis AL, causa de restricción.' },
            { type: 'mc', context: 'TC: pericardio engrosado (6 mm) y calcificado. RM: sin realce pericárdico; PCR normal. NYHA III pese a diuréticos.', prompt: '¿Qué tratamiento corresponde?', options: ['Pericardiectomía', 'Antiinflamatorios durante 3 meses', 'Pericardiocentesis', 'Trasplante cardiaco'], answer: 0, explain: 'La constricción crónica sin inflamación activa y con síntomas avanzados se trata con pericardiectomía. Tras radioterapia el pronóstico es peor por la afectación miocárdica asociada.' },
          ],
        },
        {
          id: 'casos-u8-l5',
          title: 'Displasia arritmogénica del VD e hipertrabeculación',
          case: {
            title: 'Varón de 24 años con síncope durante un partido',
            text: 'Varón de 24 años, futbolista aficionado, que sufre un síncope en pleno esfuerzo. En urgencias se documenta una TV monomorfa sostenida con morfología de bloqueo de rama izquierda y eje superior, mal tolerada, que precisa cardioversión. Un tío murió de forma súbita a los 35 años. En el ECG basal en ritmo sinusal hay ondas T negativas en V1–V3 sin bloqueo de rama derecha. Superficie corporal 1,9 m².',
          },
          questions: [
            { type: 'mc', prompt: 'Una TV con morfología de bloqueo de rama izquierda y eje superior se origina probablemente en…', options: ['La pared inferior o libre del VD', 'El tracto de salida del VI', 'El ápex del VI', 'El fascículo posterior izquierdo'], answer: 0, explain: 'La morfología de BRI indica origen en el VD; el eje superior, en la pared inferior. La TV del tracto de salida del VD idiopática tiene eje inferior.' },
            { type: 'mc', context: 'ETT: VD dilatado con diámetro del TSVD en paraesternal largo de 37 mm, discinesia de la pared libre subtricuspídea y pequeños aneurismas; FEVI 58 %.', prompt: 'Calcula el TSVD indexado y valora el criterio de imagen (Task Force 2010).', options: ['19,5 mm/m²: criterio mayor', '19,5 mm/m²: criterio menor', '37 mm/m²: criterio mayor', '15,2 mm/m²: no cumple criterio'], answer: 0, explain: '37 / 1,9 ≈ 19,5 mm/m². Discinesia regional del VD con TSVD paraesternal largo ≥ 32 mm (≥ 19 mm/m²) es criterio mayor (29–31 mm o 16–18 mm/m², menor).' },
            { type: 'match', prompt: 'Relaciona cada categoría de los criterios de DAVD con un ejemplo', pairs: [['Repolarización', 'T negativas en V1–V3 sin BRD (> 14 años)'], ['Despolarización', 'Onda épsilon en V1–V3'], ['Arritmias', 'TV con morfología de BRI y eje superior'], ['Historia familiar', 'Familiar de primer grado con DAVD']], explain: 'Se necesitan 2 criterios mayores, 1 mayor y 2 menores o 4 menores. Este paciente cumple sobradamente el diagnóstico definitivo.' },
            { type: 'tf', prompt: 'La dilatación del VD con discinesia regional es un hallazgo esperable en el corazón de deportista.', answer: false, explain: 'El deportista puede tener un VD algo dilatado, pero con contracción global y regional normal. La discinesia regional y los aneurismas orientan a miocardiopatía.' },
            { type: 'mc', context: 'El ETT también muestra trabeculación prominente en el ápex del VI, con cociente entre capa no compactada y compactada de 2,1 en sístole; FEVI conservada y sin realce del VI en la RM.', prompt: 'Según la guía de miocardiopatías ESC 2023, ¿cómo se interpreta?', options: ['Rasgo fenotípico (hipertrabeculación), no una miocardiopatía en sí', 'Miocardiopatía no compactada que exige anticoagulación', 'Criterio mayor adicional de DAVD', 'Indicación de DAI por sí sola'], answer: 0, explain: 'La ESC 2023 ya no clasifica la no compactación como miocardiopatía: la hipertrabeculación aparece en deportistas, embarazadas y otras miocardiopatías, y se valora en su contexto.' },
            { type: 'mc', prompt: '¿Qué tratamiento corresponde?', options: ['DAI y abandono del deporte de competición', 'Solo betabloqueante y retorno al deporte', 'Ablación de la TV sin DAI', 'Amiodarona y revisión en 6 meses'], answer: 0, explain: 'En la DAVD con TV sostenida mal tolerada o síncope arrítmico, el DAI es clase I. El ejercicio intenso acelera la progresión y se desaconseja el deporte de competición.' },
          ],
        },
        {
          id: 'casos-u8-l6',
          title: 'Endocarditis sobre cable de marcapasos',
          case: {
            title: 'Varón de 76 años portador de marcapasos con fiebre',
            text: 'Varón de 76 años con marcapasos bicameral implantado hace 6 años por bloqueo AV; hace 2 meses se le cambió el generador. Presenta fiebre intermitente de 3 semanas y astenia. El bolsillo del generador no muestra signos inflamatorios. Hemocultivos: 3 de 3 positivos para Staphylococcus aureus sensible a meticilina.',
          },
          questions: [
            { type: 'mc', prompt: 'El ETT no muestra vegetaciones. ¿Cuál es el siguiente paso?', options: ['Ecocardiograma transesofágico', 'Repetir el ETT en 2 semanas', 'TC torácica sin contraste', 'Retirar el generador sin más estudios'], answer: 0, explain: 'El ETE es mucho más sensible para ver vegetaciones en los cables, en la AD y en la vena cava superior. Con bacteriemia por S. aureus en un portador de dispositivo, la infección del sistema es muy probable.' },
            { type: 'mc', context: 'ETE: masa móvil de 12 mm adherida al cable auricular en la unión de la VCS con la AD. Tricúspide y válvulas izquierdas sin vegetaciones.', prompt: '¿Cuál es el diagnóstico?', diagram: { id: 'a4c', highlight: 'ra' }, options: ['Endocarditis relacionada con el dispositivo', 'Infección limitada al bolsillo', 'Endocarditis tricuspídea aislada', 'Trombo no infectado sin relevancia'], answer: 0, explain: 'Vegetación en el cable con hemocultivos positivos para un microorganismo típico es endocarditis sobre dispositivo, aunque el bolsillo esté sano.' },
            { type: 'tf', prompt: 'Una ETE sin vegetaciones descarta la endocarditis sobre cable.', answer: false, explain: 'El ETE puede ser negativo o confundir vegetaciones con trombos o hebras de fibrina. La PET-TC con 18F-FDG y la gammagrafía con leucocitos marcados ayudan al diagnóstico (ESC 2023).' },
            { type: 'mc', prompt: '¿Qué tratamiento recomienda la guía ESC 2023?', options: ['Extracción completa del sistema y antibiótico', 'Antibiótico prolongado sin extraer el dispositivo', 'Extracción solo del cable afectado', 'Cambio del generador y antibiótico'], answer: 0, explain: 'En la endocarditis sobre dispositivo se extrae todo el sistema, generador y todos los cables (clase I). Sin extracción, las recaídas y la mortalidad son muy altas.' },
            { type: 'mc', prompt: 'Con una vegetación de 12 mm, ¿cuál es la vía de extracción de elección?', options: ['Percutánea transvenosa en un centro con cirugía', 'Cirugía con circulación extracorpórea', 'Extracción por toracoscopia', 'No extraer por riesgo de embolia'], answer: 0, explain: 'La extracción percutánea es de elección incluso con vegetaciones > 10 mm. Con vegetaciones muy grandes (> 20 mm) se valora aspiración o cirugía, y la cirugía si hay afectación valvular que la requiera.' },
            { type: 'match', prompt: 'Relaciona cada aspecto del reimplante con la recomendación', pairs: [['Reevaluar la indicación', 'Antes de reimplantar'], ['Momento del reimplante', 'Hemocultivos negativos ≥ 72 h'], ['Localización del nuevo sistema', 'Lado contralateral'], ['Paciente dependiente de marcapasos', 'Estimulación temporal o sin cables']], explain: 'Hasta un tercio de los pacientes no necesita reimplante. Si hay vegetaciones valvulares se espera al menos 2 semanas (consenso EHRA 2020, recogido en ESC 2023).' },
          ],
        },
      ],
    },
    {
      id: 'casos-u9',
      title: 'Casos de ECG: arritmias',
      guide: {
        intro: 'Palpitaciones, mareo o síncope: el ECG durante los síntomas da el diagnóstico y decide el tratamiento. Primero valora la estabilidad; después, QRS estrecho o ancho, regular o irregular.',
        sections: [
          {
            title: 'Taquicardias de QRS estrecho',
            points: [
              'FA: RR irregularmente irregular sin ondas P. Calcula la FC contando los QRS de una tira de 6 s × 10.',
              'Anticoagula según CHA₂DS₂-VA (ESC 2024): recomendada con ≥ 2 puntos y a considerar con 1; prefiere ACOD salvo prótesis mecánica o estenosis mitral moderada-grave.',
              'Cardioversión precoz solo si la FA dura < 24 h; si no, ≥ 3 semanas de anticoagulación o ETE previo.',
              'TRIN: regular, 150–250 lpm, P ocultas o pseudo-r′ en V1. Vagales (Valsalva modificada) → adenosina 6 mg → 12 mg → 18 mg; inestable: CVE sincronizada.',
              'Ablación con catéter de primera línea en la TRIN recurrente sintomática (ESC 2019).',
            ],
            tip: 'FC por cuadros en ritmo regular: 300 / cuadros grandes o 1500 / cuadritos entre dos R.',
          },
          {
            title: 'Preexcitación y QRS ancho',
            points: [
              'FA preexcitada: taquicardia irregular de QRS ancho y variable, a veces > 250 lpm. Nunca frenadores del NAV (adenosina, verapamilo, diltiazem, betabloqueantes, digoxina) ni amiodarona IV.',
              'Estable: ibutilida o procainamida IV (o CVE); inestable: CVE sincronizada. Después, ablación de la vía accesoria.',
              'RR preexcitado más corto ≤ 250 ms durante FA = vía de alto riesgo de FV.',
              'QRS ancho regular en un paciente con infarto previo es una TV hasta que se demuestre lo contrario: disociación AV, capturas y fusiones la confirman.',
              'TV estable (ESC 2022): CVE sincronizada de primera elección; procainamida como alternativa. Verapamilo contraindicado.',
            ],
          },
          {
            title: 'QT largo y bradiarritmias',
            points: [
              'QTc (Bazett) = QT / √RR (RR en segundos). QTc > 500 ms o aumento > 60 ms con un fármaco: alto riesgo de torsade de pointes.',
              'Torsade: sulfato de magnesio 2 g IV, retirar fármacos, K⁺ en rango alto-normal y, si recurre tras pausas, subir la FC (isoproterenol o marcapasos).',
              'BAV completo: P y QRS disociados; escape ancho y lento = infrahisiano, con mala respuesta a atropina.',
              'Puente: isoproterenol o estimulación transcutánea/transvenosa; descarta causas reversibles (fármacos, hiperpotasemia, isquemia) antes del marcapasos definitivo (ESC 2021).',
            ],
            tip: 'Ante QRS ancho e inestabilidad no pierdas tiempo con el diagnóstico diferencial: cardioversión eléctrica.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u9-l1',
          title: 'Fibrilación auricular de reciente diagnóstico',
          case: {
            title: 'Mujer de 71 años con palpitaciones desde hace dos días',
            text: 'Mujer de 71 años, hipertensa y diabética tipo 2, sin cardiopatía conocida. Acude a urgencias por palpitaciones irregulares y cansancio que comenzaron hace unos dos días. TA 138/84 mmHg, SatO₂ 97 %, sin signos de insuficiencia cardiaca. Creatinina normal.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira de ritmo. ¿Cuál es el diagnóstico?', ecg: 'afib', options: ['Fibrilación auricular', 'Flutter auricular 2:1', 'Taquicardia sinusal con extrasístoles', 'Taquicardia por reentrada intranodal'], answer: 0, explain: 'RR irregularmente irregular, sin ondas P y con línea de base ondulada (ondas f). El flutter suele dar un RR regular con ondas F en dientes de sierra.' },
            { type: 'mc', prompt: 'La tira dura 6 s y contiene 9 complejos QRS. ¿Cuál es la FC ventricular media aproximada?', ecg: 'afib', options: ['≈ 90 lpm', '≈ 54 lpm', '≈ 150 lpm', '≈ 120 lpm'], answer: 0, explain: 'En ritmos irregulares la regla de 300 no sirve: cuenta los QRS en 6 s y multiplica por 10 (9 × 10 = 90 lpm).' },
            { type: 'mc', context: 'Ecocardiograma: FEVI 60 %, AI levemente dilatada, sin valvulopatía significativa.', prompt: '¿Cuál es su puntuación CHA₂DS₂-VA?', options: ['3', '2', '4', '1'], answer: 0, explain: 'HTA (1) + diabetes (1) + edad 65–74 años (1) = 3. La escala de la ESC 2024 ya no suma puntos por el sexo femenino (con CHA₂DS₂-VASc saldrían 4).' },
            { type: 'tf', prompt: 'Con esta puntuación está indicada la anticoagulación oral, de preferencia con un anticoagulante oral directo.', answer: true, explain: 'CHA₂DS₂-VA ≥ 2 es indicación de clase I (ESC 2024). Se prefieren los ACOD a los antagonistas de la vitamina K salvo prótesis mecánica o estenosis mitral moderada-grave.' },
            { type: 'mc', prompt: 'Sigue sintomática. ¿Es adecuada una cardioversión eléctrica inmediata?', options: ['No: dura > 24 h; anticoagular 3 semanas o hacer ETE antes', 'Sí: la FA de < 48 h se cardiovierte sin más', 'Sí, siempre que se use amiodarona previa', 'No: la cardioversión está contraindicada en mayores de 70 años'], answer: 0, explain: 'La ESC 2024 rebajó el umbral a 24 h: si la FA dura más, se anticoagula ≥ 3 semanas o se descarta trombo con ETE. Tras cardiovertir, la anticoagulación sigue según el CHA₂DS₂-VA.' }, // Fuente: ESC FA 2024 (clase III: CVE precoz sin anticoagulación/ETE si > 24 h)
            { type: 'match', prompt: 'Relaciona cada componente de AF-CARE (ESC 2024) con un ejemplo en esta paciente', pairs: [['C: comorbilidades', 'Control de HTA y diabetes'], ['A: evitar ictus', 'Anticoagulante oral directo'], ['R: reducir síntomas', 'Control de frecuencia o ritmo'], ['E: evaluación dinámica', 'Revisar el riesgo periódicamente']], explain: 'El abordaje AF-CARE integra factores de riesgo, prevención del ictus, control de síntomas y reevaluación, porque el riesgo cambia con el tiempo.' },
          ],
        },
        {
          id: 'casos-u9-l2',
          title: 'Taquicardia por reentrada intranodal',
          case: {
            title: 'Mujer de 29 años con palpitaciones de inicio brusco',
            text: 'Mujer de 29 años, sin antecedentes, que nota palpitaciones rápidas y regulares de inicio y fin bruscos desde la adolescencia. Hoy no ceden tras 40 minutos. Refiere "golpes" en el cuello. TA 112/70 mmHg, consciente, sin dolor torácico ni disnea.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira. ¿Qué arritmia es más probable?', ecg: 'svt', options: ['Taquicardia por reentrada intranodal', 'Fibrilación auricular rápida', 'Taquicardia ventricular', 'Taquicardia sinusal'], answer: 0, explain: 'Taquicardia regular de QRS estrecho sin ondas P visibles: la P retrógrada queda oculta en el QRS o justo detrás (pseudo-r′ en V1). La TRIN es la TSV regular más frecuente.' },
            { type: 'mc', prompt: 'Entre dos R consecutivas hay unos 8 cuadritos (a 25 mm/s). ¿Cuál es la FC?', ecg: 'svt', options: ['≈ 185 lpm', '≈ 150 lpm', '≈ 240 lpm', '≈ 125 lpm'], answer: 0, explain: '1500 / 8 ≈ 188 lpm (cada cuadrito son 40 ms; RR ≈ 320 ms). Un flutter 2:1 suele dar ≈ 150 lpm, un dato útil para sospecharlo.' },
            { type: 'tf', prompt: 'La primera medida en esta paciente estable es la maniobra de Valsalva modificada.', answer: true, explain: 'Las maniobras vagales son de clase I como primer paso (ESC 2019). La Valsalva modificada (soplar 15 s y elevar las piernas en decúbito) duplica la tasa de éxito frente a la clásica.' },
            { type: 'mc', context: 'La Valsalva no la revierte. Se decide administrar adenosina con monitorización y registro continuo del ECG.', prompt: '¿Cuál es la pauta correcta?', options: ['6 mg en bolo rápido con lavado de suero; si no cede, 12 mg', '6 mg en perfusión lenta durante 10 minutos', '0,5 mg en bolo, repetible cada 5 minutos', '12 mg intramusculares en dosis única'], answer: 0, explain: 'La adenosina tiene una semivida de segundos: se da en bolo rápido por vía proximal seguido de suero. Avisa a la paciente del rubor y la opresión torácica transitorios.' },
            { type: 'mc', prompt: '¿En cuál de estos pacientes deberías evitar la adenosina?', options: ['Asma grave con broncoespasmo activo', 'Embarazo en el segundo trimestre', 'Hipertensión arterial controlada', 'Diabetes tipo 2'], answer: 0, explain: 'La adenosina puede provocar broncoespasmo. En el asma grave se prefiere verapamilo o diltiazem IV si la FEVI es normal. En el embarazo la adenosina se considera segura.' },
            { type: 'mc', context: 'Revierte a ritmo sinusal con 12 mg. ECG basal normal, sin preexcitación. Ha tenido varios episodios al año que alteran su vida.', prompt: '¿Qué tratamiento a largo plazo le ofreces?', options: ['Ablación con catéter de la vía lenta', 'Amiodarona indefinida', 'Ninguno: es una arritmia benigna', 'Implante de un DAI'], answer: 0, explain: 'La ablación de la vía lenta es de clase I en la TRIN recurrente sintomática: éxito > 95 % y riesgo de BAV que requiera marcapasos < 1 %.' },
          ],
        },
        {
          id: 'casos-u9-l3',
          title: 'FA preexcitada: no frenes el nodo AV',
          case: {
            title: 'Varón de 24 años con palpitaciones muy rápidas',
            text: 'Varón de 24 años, jugador de baloncesto amateur, que acude por palpitaciones muy rápidas y mareo tras un partido. TA 110/70 mmHg, consciente. El monitor muestra una taquicardia irregular de QRS ancho con morfología cambiante latido a latido y FC de hasta 260 lpm.',
          },
          questions: [
            { type: 'mc', prompt: '¿Cuál es el diagnóstico más probable?', options: ['FA preexcitada por una vía accesoria', 'Taquicardia ventricular monomorfa', 'FA con bloqueo de rama izquierda', 'Taquicardia sinusal con aberrancia'], answer: 0, explain: 'La tríada irregular + QRS ancho y variable + FC muy alta sugiere FA conducida por una vía accesoria. Con bloqueo de rama la morfología sería constante y la FC rara vez supera 200 lpm.' },
            { type: 'tf', prompt: 'Para controlar la FC en esta arritmia se puede administrar verapamilo o adenosina IV.', answer: false, explain: 'Bloquear el NAV deja la vía accesoria como única ruta y puede acelerar la respuesta ventricular hasta FV. Están contraindicados adenosina, calcioantagonistas, betabloqueantes, digoxina y amiodarona IV.' },
            { type: 'mc', prompt: 'Sigue estable. ¿Qué tratamiento agudo es adecuado según la ESC 2019?', options: ['Ibutilida o procainamida IV, o cardioversión eléctrica', 'Amiodarona IV en perfusión', 'Digoxina IV y betabloqueante oral', 'Adenosina 6 mg en bolo rápido'], answer: 0, explain: 'En la FA preexcitada estable se consideran ibutilida o procainamida IV (clase IIa): enlentecen la conducción por la vía. Si fallan, CVE sincronizada (clase I); si hay inestabilidad, CVE de entrada.' }, // Fuente: ESC TSV 2019
            { type: 'mc', context: 'En el registro de la arritmia, el intervalo RR preexcitado más corto mide 220 ms.', prompt: '¿Qué implica este dato?', options: ['Vía de alto riesgo: equivale a ≈ 270 lpm', 'Vía de bajo riesgo: el umbral es < 150 ms', 'No tiene valor fuera del estudio electrofisiológico', 'Indica que la vía es solo de conducción retrógrada'], answer: 0, explain: 'Un RR preexcitado más corto ≤ 250 ms durante FA (60 000 / 220 ≈ 273 lpm) identifica una vía con riesgo de degenerar en FV y muerte súbita.' },
            { type: 'tap', context: 'Se realiza cardioversión eléctrica sincronizada y pasa a ritmo sinusal. Este es su ECG basal.', prompt: 'Toca una onda P y observa lo corto que es el PR antes del QRS empastado', ecg: 'wpw', wave: 'p', explain: 'PR < 120 ms y onda delta (empastamiento inicial del QRS): el impulso llega antes al ventrículo por la vía accesoria. Patrón WPW con síntomas = síndrome de WPW.' },
            { type: 'mc', prompt: '¿Cuál es el tratamiento definitivo?', options: ['Ablación con catéter de la vía accesoria', 'Flecainida indefinida', 'Betabloqueante y restricción deportiva', 'Implante de un DAI'], answer: 0, explain: 'Tras una FA preexcitada la ablación es de clase I: cura la vía con éxito > 90 % y elimina el riesgo de muerte súbita, lo que permite volver a competir.' },
          ],
        },
        {
          id: 'casos-u9-l4',
          title: 'Taquicardia ventricular en cardiopatía isquémica',
          case: {
            title: 'Varón de 67 años con infarto antiguo y palpitaciones',
            text: 'Varón de 67 años con IAM anterior hace 6 años y FEVI del 32 %, en tratamiento con sacubitrilo-valsartán, bisoprolol, espironolactona y dapagliflozina. Acude por palpitaciones y mareo de 1 hora. Consciente, TA 104/68 mmHg, sin dolor torácico ni edema agudo de pulmón.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira. ¿Cuál es el diagnóstico de trabajo?', ecg: 'vt', options: ['Taquicardia ventricular monomorfa', 'TSV con bloqueo de rama', 'Flutter auricular 2:1', 'Fibrilación ventricular'], answer: 0, explain: 'Taquicardia regular de QRS ancho (~175 lpm). Con cardiopatía estructural e infarto previo, más del 90 % son TV: trátala como tal.' },
            { type: 'tap', prompt: 'Toca un complejo QRS ancho de la taquicardia', ecg: 'vt', wave: 'vent', explain: 'QRS > 120 ms, bizarro y sin onda P previa. Un QRS > 160 ms con morfología de BRI o > 140 ms con morfología de BRD apoya el origen ventricular.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con su significado', pairs: [['Disociación AV', 'Aurículas y ventrículos independientes'], ['Latido de captura', 'QRS estrecho conducido normalmente'], ['Latido de fusión', 'QRS intermedio entre ambos'], ['Concordancia precordial', 'Todos los QRS de V1–V6 iguales']], explain: 'Los cuatro favorecen la TV frente a la TSV aberrada; la disociación AV con capturas o fusiones es prácticamente diagnóstica.' },
            { type: 'mc', prompt: 'Está estable. ¿Cuál es la primera opción de tratamiento según la ESC 2022?', options: ['Cardioversión eléctrica sincronizada con sedación', 'Verapamilo IV', 'Adenosina en bolo rápido', 'Digoxina IV'], answer: 0, explain: 'La CVE sincronizada es de primera elección en la TV monomórfica bien tolerada si el riesgo anestésico es aceptable; la procainamida es la alternativa farmacológica. El verapamilo puede causar colapso hemodinámico.' }, // Fuente: ESC 2022 arritmias ventriculares
            { type: 'tf', context: 'Tras la CVE recupera ritmo sinusal. Troponina con elevación leve sin curva; ECG sin cambios agudos.', prompt: 'Una elevación leve de troponina tras una TV sostenida obliga a interpretarla como un IAM agudo que ha causado la arritmia.', answer: false, explain: 'La TV monomórfica en un infarto antiguo suele deberse a reentrada en la cicatriz, no a isquemia aguda. La troponina puede subir por la propia taquicardia y la CVE; se valora la anatomía coronaria según el contexto clínico.' },
            { type: 'mc', prompt: '¿Qué indicación tiene a largo plazo?', options: ['DAI y considerar ablación de la TV', 'Solo amiodarona oral', 'Marcapasos bicameral', 'Ningún tratamiento añadido'], answer: 0, explain: 'Cardiopatía isquémica con FEVI ≤ 35 % pese a tratamiento óptimo: DAI (clase I). Si la TV recurre, la ablación reduce recurrencias y descargas: clase I tras fallo de amiodarona, IIa tras betabloqueante o sotalol.' }, // Fuente: ESC 2022 arritmias ventriculares
          ],
        },
        {
          id: 'casos-u9-l5',
          title: 'Torsade de pointes por QT largo adquirido',
          case: {
            title: 'Mujer de 78 años con síncopes en planta',
            text: 'Mujer de 78 años ingresada por neumonía, tratada con levofloxacino y furosemida; además toma citalopram. Al tercer día presenta dos episodios de pérdida de conciencia breve. Analítica: K⁺ 3,0 mmol/L y Mg²⁺ 0,55 mmol/L. En el monitor, entre los episodios, ritmo sinusal a 65 lpm.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira entre los episodios. ¿Qué alteración destaca?', ecg: 'longqt', options: ['QT prolongado', 'PR prolongado', 'QRS ancho', 'Ondas P picudas'], answer: 0, explain: 'La repolarización se alarga: la onda T termina muy lejos del QRS, más allá de la mitad del RR. Regla rápida: un QT mayor que la mitad del RR sugiere QT largo con FC normal.' },
            { type: 'tap', prompt: 'Toca el final de la repolarización: la onda T', ecg: 'longqt', wave: 't', explain: 'El QT se mide desde el inicio del QRS hasta el final de la T (método de la tangente), preferiblemente en II o V5.' },
            { type: 'mc', context: 'Mides un QT de 540 ms. FC 65 lpm (RR ≈ 0,92 s; √0,92 ≈ 0,96).', prompt: 'Calcula el QTc con la fórmula de Bazett.', options: ['≈ 563 ms', '≈ 540 ms', '≈ 587 ms', '≈ 518 ms'], answer: 0, explain: 'QTc = QT / √RR = 540 / 0,96 ≈ 563 ms. Dividir por el RR sin raíz da ≈ 587 ms. Un QTc > 500 ms multiplica el riesgo de torsade de pointes.' },
            { type: 'mc', context: 'En el monitor aparece una taquicardia de QRS ancho cuyos complejos cambian de amplitud girando alrededor de la línea de base; se inicia tras una secuencia corto-largo-corto y cede sola en 15 s.', prompt: '¿Cuál es el tratamiento inmediato de elección?', options: ['Sulfato de magnesio 2 g IV', 'Amiodarona 300 mg IV', 'Procainamida IV', 'Adenosina 6 mg IV'], answer: 0, explain: 'El magnesio IV es de primera línea aunque el Mg sérico sea normal. La amiodarona y la procainamida alargan el QT y están contraindicadas. Si degenera a FV sostenida: desfibrilación.' },
            { type: 'match', prompt: 'Relaciona cada medida con su objetivo', pairs: [['Suspender levofloxacino y citalopram', 'Retirar fármacos que alargan el QT'], ['Potasio IV', 'K⁺ en rango alto-normal'], ['Isoproterenol o marcapasos', 'Subir la FC y evitar pausas'], ['Monitorización continua', 'Detectar recurrencias']], explain: 'La torsade es pausa-dependiente: acelerar la FC acorta el QT. Corregir K⁺ y Mg²⁺ y retirar los fármacos implicados elimina el sustrato.' },
            { type: 'tf', prompt: 'El sexo femenino, la edad avanzada, la bradicardia y la hipopotasemia aumentan el riesgo de torsade de pointes inducida por fármacos.', answer: true, explain: 'Son factores clásicos de riesgo. Por eso se recomienda un ECG basal y de control al iniciar fármacos que alargan el QT en pacientes de riesgo.' },
          ],
        },
        {
          id: 'casos-u9-l6',
          title: 'Bloqueo AV completo con escape ancho',
          case: {
            title: 'Mujer de 82 años con síncope y bradicardia',
            text: 'Mujer de 82 años, hipertensa, en tratamiento con amlodipino. Lleva una semana con mareos y hoy ha tenido un síncope sin pródromos con traumatismo facial. FC 40 lpm, TA 102/58 mmHg, consciente y bien perfundida. Glucemia y potasio normales.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira. ¿Cuál es el diagnóstico?', ecg: 'avb3', options: ['Bloqueo AV completo (3.er grado)', 'BAV de 2.º grado Mobitz I', 'Bradicardia sinusal', 'BAV de 1.er grado'], answer: 0, explain: 'Las P marchan a su ritmo y los QRS al suyo, sin relación entre ellos (disociación AV), con más P que QRS. En el Mobitz I el PR se alarga antes de cada P bloqueada.' },
            { type: 'tap', prompt: 'Toca una onda P que no conduce a los ventrículos', ecg: 'avb3', wave: 'pBlocked', explain: 'Las P aparecen a intervalos regulares, incluso dentro de la T o del QRS, sin que ninguna genere el QRS siguiente.' },
            { type: 'mc', prompt: 'El PP mide ≈ 3,3 cuadros grandes y el RR ≈ 7,5. ¿Cuáles son las frecuencias auricular y ventricular?', ecg: 'avb3', options: ['≈ 90 y ≈ 40 lpm', '≈ 40 y ≈ 90 lpm', '≈ 75 y ≈ 40 lpm', '≈ 90 y ≈ 60 lpm'], answer: 0, explain: '300 / 3,3 ≈ 90 lpm (aurículas) y 300 / 7,5 = 40 lpm (ventrículos). Un escape ancho a ≈ 40 lpm es infrahisiano e inestable.' },
            { type: 'tf', prompt: 'Con un escape de QRS ancho, la atropina suele ser muy eficaz para aumentar la FC.', answer: false, explain: 'La atropina actúa sobre el nodo AV; en el bloqueo infrahisiano rara vez sirve e incluso puede empeorar la relación de conducción. Mejor isoproterenol o estimulación transcutánea/transvenosa.' },
            { type: 'mc', prompt: 'Antes de indicar un marcapasos definitivo, ¿qué debes descartar?', options: ['Causas reversibles: fármacos, hiperpotasemia o isquemia', 'Una miocardiopatía hipertrófica por ecocardiograma', 'Una embolia pulmonar con angio-TC', 'Un hipotiroidismo subclínico como única causa'], answer: 0, explain: 'La ESC 2021 exige excluir causas reversibles (betabloqueantes, verapamilo, diltiazem, digoxina, hiperpotasemia, IAM, enfermedad de Lyme). El amlodipino, una dihidropiridina, no bloquea el nodo AV.' },
            { type: 'mc', context: 'Persiste el BAV completo a las 48 h sin causa reversible. Ecocardiograma: FEVI 60 %. Ritmo auricular sinusal.', prompt: '¿Qué tratamiento definitivo indicas?', options: ['Marcapasos bicameral (DDD)', 'Marcapasos unicameral auricular (AAI)', 'DAI monocameral', 'Resincronización (TRC-D)'], answer: 0, explain: 'El BAV completo adquirido es indicación de clase I de marcapasos. En ritmo sinusal se prefiere el bicameral para mantener la sincronía AV; el AAI no sirve porque el bloqueo es por debajo de la aurícula.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u10',
      title: 'Casos de ECG: dolor torácico e iones',
      guide: {
        intro: 'Ante un dolor torácico, el ECG debe leerse en menos de 10 minutos. Distingue lo que exige reperfusión inmediata de sus imitadores, y no olvides que los iones también cambian el ST y la T.',
        sections: [
          {
            title: 'IAMCEST y sus localizaciones',
            points: [
              'ST ↑ ≥ 1 mm en ≥ 2 derivaciones contiguas (en V2–V3 umbrales mayores según sexo y edad) con clínica compatible → ICP primaria (ESC 2023).',
              'Inferior (II, III, aVF): ST ↑ en III > II y descenso en I/aVL apuntan a la coronaria derecha.',
              'Si el IAM es inferior registra V4R: ST ↑ ≥ 1 mm indica afectación del VD → evita nitratos y diuréticos; aporta volumen con prudencia.',
              'La CD irriga el nodo AV en la mayoría: vigila bradicardia y BAV (suelen ser transitorios).',
            ],
            tip: 'Hipotensión + ingurgitación yugular + pulmones limpios en un IAM inferior = infarto de VD.',
          },
          {
            title: 'BRI y pericarditis',
            points: [
              'En el BRI la repolarización es discordante: el ST va en sentido contrario al QRS.',
              'Sgarbossa: ST ↑ concordante ≥ 1 mm (5 puntos), ST ↓ concordante ≥ 1 mm en V1–V3 (3 puntos), ST ↑ discordante ≥ 5 mm (2 puntos); ≥ 3 puntos es muy específico.',
              'Smith: sustituye el tercer criterio por el cociente ST/S ≤ −0,25 en alguna derivación con ST discordante.',
              'Con BRI (o ritmo de marcapasos) y clínica de isquemia persistente se trata como IAMCEST, sea o no nuevo (ESC 2023).',
              'Pericarditis: ST ↑ cóncavo y difuso sin imagen especular, descenso del PR y ST ↓ con PR ↑ en aVR. Tratamiento: AINE/ácido acetilsalicílico + colchicina.',
            ],
          },
          {
            title: 'Hiperpotasemia',
            points: [
              'Secuencia: T picudas → P aplanada y PR largo → QRS ancho → onda sinusoidal → FV o asistolia. El ECG no siempre se correlaciona con la cifra.',
              'Estabiliza la membrana con calcio IV (gluconato cálcico 10 %); actúa en minutos y no baja el potasio.',
              'Desplaza K⁺ al interior celular: insulina con glucosa y salbutamol nebulizado.',
              'Elimina K⁺: diálisis (de elección en ERC avanzada o refractaria), quelantes y diuréticos si hay diuresis. Revisa IECA/ARA-II, ARM y AINE.',
            ],
            tip: 'Repite el calcio si el ECG no mejora a los 5–10 minutos.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u10-l1',
          title: 'Hiperpotasemia en enfermedad renal crónica',
          case: {
            title: 'Varón de 66 años con debilidad y enfermedad renal',
            text: 'Varón de 66 años con enfermedad renal crónica estadio 4 por nefropatía diabética, en tratamiento con enalapril y espironolactona por insuficiencia cardiaca. Consulta por debilidad generalizada de dos días tras un cuadro de gastroenteritis. TA 128/74 mmHg, FC 70 lpm. Potasio 7,4 mmol/L (muestra no hemolizada).',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira. ¿Qué alteración es la más llamativa?', ecg: 'hyperk', options: ['Ondas T altas, estrechas y picudas', 'Ondas U prominentes', 'Descenso difuso del ST', 'Intervalo QT prolongado'], answer: 0, explain: 'Las T picudas, simétricas y de base estrecha son el signo más precoz de hiperpotasemia. Las ondas U y el QT(U) largo son propios de la hipopotasemia.' },
            { type: 'tap', prompt: 'Toca una de las ondas T picudas', ecg: 'hyperk', wave: 't', explain: 'Fíjate en su base estrecha y su vértice afilado: a diferencia de la T hiperaguda isquémica, que suele ser ancha y voluminosa.' },
            { type: 'mc', prompt: 'Ordena la progresión típica del ECG al subir el potasio. ¿Qué cambio aparece justo después de las T picudas?', options: ['Aplanamiento de la P y alargamiento del PR', 'Onda sinusoidal', 'Fibrilación ventricular', 'Ondas U'], answer: 0, explain: 'Secuencia clásica: T picudas → P aplanada y PR largo → QRS ancho → patrón sinusoidal → FV o asistolia. Puede saltarse pasos: un ECG casi normal no descarta riesgo.' },
            { type: 'mc', prompt: 'Con K⁺ 7,4 mmol/L y cambios en el ECG, ¿cuál es el primer fármaco que debes administrar?', options: ['Gluconato cálcico al 10 % IV', 'Bicarbonato sódico 1 M IV', 'Resina de intercambio oral', 'Furosemida IV en bolo'], answer: 0, explain: 'El calcio estabiliza la membrana miocárdica en 1–3 minutos, aunque no baja el potasio. El bicarbonato solo aporta si hay acidosis metabólica.' },
            { type: 'match', prompt: 'Relaciona cada tratamiento con su mecanismo', pairs: [['Gluconato cálcico', 'Estabiliza la membrana'], ['Insulina con glucosa', 'Mete K⁺ en la célula (bomba Na-K)'], ['Salbutamol nebulizado', 'Desplaza K⁺ vía receptor β₂'], ['Hemodiálisis', 'Elimina K⁺ del organismo']], explain: 'Primero se protege el corazón, luego se redistribuye el K⁺ y finalmente se elimina. Vigila la hipoglucemia tras la insulina, sobre todo en la ERC.' },
            { type: 'tf', context: 'Tras el tratamiento, K⁺ 5,6 mmol/L y ECG normalizado.', prompt: 'Conviene suspender temporalmente la espironolactona y reevaluar el enalapril antes del alta.', answer: true, explain: 'El ARM y el IECA, sumados a ERC y deshidratación, explican el cuadro. Pueden reintroducirse con control estrecho y quelantes de potasio (patirómero, ciclosilicato de sodio y zirconio) para no perder su beneficio.' },
          ],
        },
        {
          id: 'casos-u10-l2',
          title: 'Pericarditis aguda frente a IAMCEST',
          case: {
            title: 'Varón de 31 años con dolor torácico tras un catarro',
            text: 'Varón de 31 años, sin factores de riesgo, con dolor torácico agudo de 12 horas que empeora al respirar hondo y al tumbarse y mejora sentado e inclinado hacia delante. Hace 10 días tuvo un cuadro catarral. Temperatura 37,6 °C, TA 124/76 mmHg. En la auscultación se oye un roce rasposo en el borde esternal izquierdo.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG de 12 derivaciones. ¿Cuál es el diagnóstico más probable?', ecg12: 'pericarditis', options: ['Pericarditis aguda', 'IAMCEST inferior', 'IAMCEST anterior', 'Repolarización precoz benigna'], answer: 0, explain: 'Elevación del ST difusa y cóncava, que no respeta un territorio coronario, con descenso del PR. En aVR el patrón se invierte: ST descendido y PR elevado.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con el diagnóstico que sugiere', pairs: [['ST ↑ cóncavo en casi todas las derivaciones', 'Pericarditis'], ['Descenso especular del ST', 'IAMCEST'], ['Descenso del PR', 'Inflamación auricular (pericarditis)'], ['Ondas Q patológicas', 'Necrosis miocárdica']], explain: 'La imagen especular es el dato más útil para pensar en un IAMCEST; en la pericarditis solo aVR (y a veces V1) muestran ST descendido.' },
            { type: 'tf', prompt: 'Según la ESC 2025, la PCR elevada y la inflamación pericárdica en RM cuentan como criterios diagnósticos de pericarditis, junto al roce, los cambios del ECG y el derrame.', answer: true, explain: 'La ESC 2025 sustituye el clásico «2 de 4» (ESC 2015): clínica compatible más criterios objetivos (roce, ECG, derrame, PCR, edema o realce en RM). Con más de uno, el diagnóstico es definitivo.' }, // Fuente: ESC 2025 miocarditis y pericarditis
            { type: 'mc', context: 'ETT: derrame pericárdico leve sin compromiso hemodinámico; FEVI normal. PCR elevada. Troponina normal.', prompt: '¿Cuál es el tratamiento de primera línea?', options: ['AINE (o ácido acetilsalicílico) más colchicina', 'Corticoides orales a dosis altas', 'Anticoagulación con heparina', 'Pericardiocentesis diagnóstica'], answer: 0, explain: 'AINE o ácido acetilsalicílico a dosis antiinflamatorias con protección gástrica, más colchicina (≈ 3 meses), que reduce las recurrencias a la mitad. Los corticoides no son de primera línea porque favorecen las recidivas.' },
            { type: 'mc', prompt: '¿Cuál de estos datos aconsejaría ingresarlo?', options: ['Fiebre > 38 °C o derrame grave', 'Edad < 40 años', 'Roce pericárdico audible', 'Antecedente de catarro reciente'], answer: 0, explain: 'Son predictores de mal pronóstico: fiebre > 38 °C, inicio subagudo, derrame grave o taponamiento y falta de respuesta a AINE en 1 semana; también la miopericarditis y la inmunosupresión.' },
            { type: 'tf', context: 'A las 24 h la troponina T ultrasensible se eleva claramente, sin alteraciones segmentarias de la contractilidad.', prompt: 'La elevación de troponina obliga a cambiar el diagnóstico a IAMCEST y a realizar una ICP primaria.', answer: false, explain: 'Con FEVI normal y sin alteraciones segmentarias sugiere miopericarditis. Se recomienda ingreso, reposo deportivo más prolongado y valorar RM cardiaca; la coronariografía se reserva si persisten dudas de SCA.' },
          ],
        },
        {
          id: 'casos-u10-l3',
          title: 'IAMCEST inferior con afectación del VD',
          case: {
            title: 'Varón de 58 años con dolor torácico e hipotensión',
            text: 'Varón de 58 años, fumador y dislipémico, con dolor torácico opresivo de 1 hora de evolución y sudoración. TA 96/60 mmHg, FC 58 lpm, ingurgitación yugular y pulmones limpios. Lo trae una ambulancia medicalizada a un hospital con sala de hemodinámica disponible.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Cuál es el diagnóstico?', ecg12: 'stemi-inf', options: ['IAMCEST inferior', 'IAMCEST lateral', 'Pericarditis aguda', 'IAMCEST anterior'], answer: 0, explain: 'Elevación del ST en II, III y aVF con descenso especular en I y aVL. La imagen especular apoya el origen isquémico frente a la pericarditis.' },
            { type: 'mc', prompt: 'En este ECG el ST se eleva más en III que en II y desciende en I y aVL. ¿Qué arteria es la culpable más probable?', ecg12: 'stemi-inf', options: ['Coronaria derecha', 'Circunfleja', 'Descendente anterior', 'Tronco común'], answer: 0, explain: 'La CD se dirige hacia la derecha (III, a +120°), de ahí ST ↑ III > II y descenso en aVL. En la circunfleja el ST suele ser mayor en II y puede elevarse en I, aVL o V5–V6.' },
            { type: 'mc', prompt: 'Por la hipotensión con yugulares ingurgitadas y pulmones limpios, ¿qué registro adicional pides?', options: ['Derivaciones derechas (V3R–V4R)', 'Derivaciones posteriores (V7–V9) únicamente', 'Repetir el ECG en 6 horas', 'Holter de 24 horas'], answer: 0, explain: 'Una elevación del ST ≥ 1 mm en V4R indica afectación del VD y oclusión proximal de la CD. Es un hallazgo precoz y transitorio: regístralo cuanto antes.' },
            { type: 'tf', context: 'V4R: elevación del ST de 1,5 mm.', prompt: 'Está indicada la nitroglicerina sublingual para aliviar el dolor.', answer: false, explain: 'El VD infartado depende de la precarga: los nitratos y los diuréticos pueden provocar hipotensión grave. Si hay hipotensión sin congestión, aporta volumen con prudencia.' },
            { type: 'mc', prompt: '¿Cuál es la estrategia de reperfusión recomendada (ESC 2023)?', options: ['ICP primaria lo antes posible', 'Fibrinólisis y coronariografía en 24 h', 'Tratamiento médico y coronariografía diferida', 'Fibrinólisis solo si persiste el dolor'], answer: 0, explain: 'Con hemodinámica disponible, la ICP primaria es de elección si el tiempo desde el diagnóstico hasta el paso de la guía es ≤ 120 min. La fibrinólisis queda para cuando no se puede cumplir ese plazo.' },
            { type: 'mc', context: 'En la sala aparece un BAV completo con escape de QRS estrecho a 40 lpm, que cede tras abrir la CD.', prompt: '¿Por qué es frecuente esta complicación en este infarto?', options: ['La CD suele irrigar el nodo AV', 'La CD irriga la rama izquierda del haz', 'Es un efecto adverso del contraste', 'Indica rotura del tabique interventricular'], answer: 0, explain: 'La arteria del nodo AV nace de la CD en la mayoría de las personas. El bloqueo suele ser nodal (QRS estrecho) y transitorio tras la reperfusión; rara vez precisa marcapasos definitivo.' },
          ],
        },
        {
          id: 'casos-u10-l4',
          title: 'Infarto con bloqueo de rama izquierda: Sgarbossa',
          case: {
            title: 'Mujer de 74 años con dolor torácico y BRI',
            text: 'Mujer de 74 años, diabética e hipertensa, con BRI conocido. Consulta por dolor torácico opresivo de 2 horas, con náuseas y sudoración, que no cede con reposo. TA 142/86 mmHg, FC 88 lpm, sin signos de insuficiencia cardiaca. Se dispone de un ECG de hace un año.',
          },
          questions: [
            { type: 'mc', prompt: 'Este es su ECG de hace un año, sin síntomas. ¿Qué patrón de repolarización es el esperado en el BRI?', ecg12: 'lbbb12', options: ['ST-T discordante, opuesto al QRS', 'ST-T concordante con el QRS', 'ST isoeléctrico en todas las derivaciones', 'T negativas en todas las precordiales'], answer: 0, explain: 'En el BRI la despolarización anómala arrastra una repolarización secundaria en sentido contrario: ST ↑ en V1–V3 (QS) y ST ↓ con T negativa en I, aVL y V5–V6. Eso no es isquemia.' },
            { type: 'tf', prompt: 'Como el BRI es conocido, el ECG no puede aportar nada para diagnosticar un infarto agudo.', answer: false, explain: 'Los criterios de Sgarbossa (y su modificación por Smith) detectan cambios del ST desproporcionados o concordantes que indican oclusión coronaria aguda con buena especificidad.' },
            { type: 'match', prompt: 'Relaciona cada criterio de Sgarbossa con su puntuación', pairs: [['ST ↑ concordante ≥ 1 mm', '5 puntos'], ['ST ↓ concordante ≥ 1 mm en V1–V3', '3 puntos'], ['ST ↑ discordante ≥ 5 mm', '2 puntos']], explain: 'Una puntuación ≥ 3 es muy específica de IAM, aunque poco sensible. El criterio discordante es el más débil y por eso Smith lo sustituyó por un cociente.' },
            { type: 'mc', context: 'ECG actual: en V3 el QRS tiene una S de 15 mm de profundidad y el ST se eleva 4,5 mm (discordante). No hay cambios concordantes.', prompt: 'Calcula el cociente ST/S de Smith. ¿Qué indica?', options: ['−0,30: positivo (≤ −0,25)', '−0,30: negativo (umbral ≤ −0,50)', '−0,15: negativo', '−3,3: positivo'], answer: 0, explain: 'ST/S = +4,5 / −15 = −0,30, que cumple el umbral ≤ −0,25. Con Sgarbossa original (≥ 5 mm) no puntuaría: el cociente gana sensibilidad al ajustar el ST a la amplitud del QRS.' },
            { type: 'mc', prompt: '¿Qué actitud recomienda la guía ESC 2023?', options: ['Activar el código infarto para ICP primaria', 'Esperar a la segunda troponina', 'Prueba de esfuerzo antes del alta', 'Fibrinólisis en todos los casos de BRI'], answer: 0, explain: 'Con BRI (nuevo o conocido) y síntomas isquémicos persistentes se maneja como un IAMCEST: ICP primaria. Los criterios de Smith positivos refuerzan la sospecha de oclusión.' },
            { type: 'tf', prompt: 'Los criterios de Sgarbossa modificados por Smith también son útiles en pacientes con ritmo de marcapasos ventricular.', answer: true, explain: 'La estimulación del VD da un patrón tipo BRI con repolarización discordante. Smith se validó en ritmo de marcapasos (estudio PERFECT, 2021) con alta especificidad; la ESC 2023 lo maneja como el BRI.' }, // Fuente: Dodd et al., Ann Emerg Med 2021; ESC SCA 2023
          ],
        },
      ],
    },
    {
      id: 'casos-u11',
      title: 'Casos de ETT: valvulopatías',
      guide: {
        intro: 'Cuantificar bien una valvulopatía (continuidad, PISA, volúmenes regurgitantes) es lo que permite decidir cuándo intervenir y cómo, según la guía ESC/EACTS 2025.',
        sections: [
          {
            title: 'Estenosis aórtica',
            points: [
              'Grave de alto gradiente: Vmax ≥ 4 m/s o gradiente medio ≥ 40 mmHg; apoyan un área < 1 cm² (< 0,6 cm²/m²) y un índice adimensional < 0,25.',
              'Continuidad: AVA = área TSVI × VTI TSVI / VTI aórtica; el diámetro del TSVI se eleva al cuadrado, así que su error se multiplica.',
              'Discordancia (AVA < 1 cm² con gradiente < 40 mmHg): mide el VSi (bajo flujo si ≤ 35 ml/m²) y la FEVI; con FEVI reducida, eco con dobutamina; con FEVI conservada, calcio valvular por TC.',
              'Calcio valvular por TC: EA grave probable con ≥ 1200 UA en mujeres y ≥ 2000 UA en varones; muy probable con ≥ 1600 y ≥ 3000 UA.',
              'ESC/EACTS 2025: TAVI transfemoral preferente desde los 70 años con válvula trivalva y anatomía favorable; cirugía por debajo de esa edad si el riesgo es bajo. Decide el Heart Team con el paciente.', // Fuente: ESC/EACTS 2025 valvulopatías (TAVI ≥ 70 años, trivalva, acceso TF: clase I-A; antes 75 años)
            ],
            tip: 'Mide los gradientes con la TA controlada: la HTA durante la eco puede infraestimarlos.',
          },
          {
            title: 'Insuficiencia aórtica y mitral',
            points: [
              'IAo grave: vena contracta > 6 mm, THP < 200 ms, flujo holodiastólico inverso en la aorta descendente, VR ≥ 60 ml, FR ≥ 50 % y ORE ≥ 30 mm².',
              'IAo grave asintomática: cirugía si FEVI ≤ 50 % o DTSVI > 50 mm (> 25 mm/m²) (clase I); con riesgo quirúrgico bajo puede considerarse con FEVI ≤ 55 % o DTSVI > 22 mm/m² (IIb).', // Fuente: ESC/EACTS 2025 valvulopatías (umbral indexado precoz 22 mm/m², antes 20 mm/m² en 2021)
              'PISA: ORE = 2π × r² × Va / Vmax (Vmax en cm/s); VR = ORE × VTI del jet.',
              'IM primaria grave: ORE ≥ 40 mm², VR ≥ 60 ml, vena contracta ≥ 7 mm y flujo sistólico invertido en las venas pulmonares.',
              'IM primaria grave asintomática: reparación si FEVI ≤ 60 % o DTSVI ≥ 40 mm (≥ 20 mm/m²); considérala también con FA, PSAP > 50 mmHg o AI muy dilatada si la reparación duradera es probable.',
            ],
            tip: 'Los jets excéntricos se pegan a la pared de la aurícula (efecto Coanda): el área de color los infraestima.',
          },
          {
            title: 'Insuficiencia tricuspídea',
            points: [
              'La IT secundaria puede ser ventricular (HP, disfunción del VD) o auricular (FA de larga evolución con anillo dilatado y velos normales).',
              'Grave: vena contracta ≥ 7 mm, ORE ≥ 40 mm², VR ≥ 45 ml y flujo sistólico invertido en venas hepáticas; por encima se gradúa como masiva y torrencial.',
              'En la IT masiva el Doppler infraestima la PSAP, porque las presiones de AD y VD tienden a igualarse.',
              'En la cirugía izquierda se repara la IT grave (clase I) y se considera la anuloplastia si es moderada o el anillo mide ≥ 40 mm (> 21 mm/m²).',
              'IT grave aislada y sintomática: cirugía en candidatos; si el riesgo es alto, considera el tratamiento percutáneo (T-TEER o reemplazo; IIa) antes de que haya disfunción grave del VD o HP precapilar grave.',
            ],
            tip: 'Edemas y ascitis con pulmones limpios en un anciano con FA permanente: busca una IT auricular grave.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u11-l1',
          title: 'EA grave de alto gradiente: TAVI o cirugía',
          case: {
            title: 'Varón de 73 años con angina de esfuerzo y soplo sistólico',
            text: 'Varón de 73 años, hipertenso y dislipémico, con angina y disnea al subir dos pisos desde hace 4 meses. Se ausculta un soplo sistólico rudo en foco aórtico irradiado a carótidas, con segundo ruido apagado y pulso carotídeo lento. Vive solo, es independiente y no tiene otras comorbilidades relevantes. ECG con criterios de HVI.',
          },
          questions: [
            { type: 'mc', context: 'ETT: válvula aórtica trivalva muy calcificada, con apertura reducida. Vmax aórtica 4,6 m/s y gradiente medio 52 mmHg. FEVI 60 %.', prompt: '¿Cómo clasificas la estenosis aórtica?', diagram: { id: 'plax', highlight: 'av' }, options: ['Grave de alto gradiente', 'Moderada', 'Grave de bajo flujo y bajo gradiente', 'Grave paradójica con FEVI conservada'], answer: 0, explain: 'Vmax ≥ 4 m/s o gradiente medio ≥ 40 mmHg definen la EA grave de alto gradiente. El bajo flujo solo se plantea cuando el gradiente es < 40 mmHg.' },
            { type: 'mc', context: 'Diámetro del TSVI 2,0 cm; VTI del TSVI 20 cm; VTI aórtica 100 cm.', prompt: 'Calcula el área valvular aórtica por la ecuación de continuidad.', options: ['≈ 0,63 cm²', '≈ 2,5 cm²', '≈ 0,20 cm²', '≈ 1,1 cm²'], answer: 0, explain: 'Área TSVI = π × (2,0/2)² = 3,14 cm²; AVA = 3,14 × 20 / 100 ≈ 0,63 cm². Usar el diámetro en lugar del radio da 2,5 cm², un error clásico.' },
            { type: 'tf', prompt: 'Su índice adimensional (VTI TSVI / VTI aórtica) es 0,20 y apoya una EA grave sin depender de la medida del TSVI.', answer: true, explain: 'Un índice < 0,25 indica EA grave. Evita el error del diámetro del TSVI, que en la continuidad se eleva al cuadrado.' },
            { type: 'mc', prompt: 'Registro simultáneo de VI y aorta en otro paciente con EA grave. ¿Qué rasgo de la curva aórtica es típico?', pressure: 'as-lv-ao', options: ['Ascenso lento con pico tardío (parvus et tardus)', 'Ascenso rápido con doble pico (bisferiens)', 'Presión diferencial amplia con caída diastólica rápida', 'Alternancia de amplitud latido a latido'], answer: 0, explain: 'La obstrucción fija retrasa y amortigua la eyección. Hoy el cateterismo solo mide el gradiente si la eco no es concluyente.' },
            { type: 'mc', context: 'TC: anatomía apta para acceso transfemoral. STS-PROM 2,1 %. Sin enfermedad coronaria significativa. El Heart Team lo comenta con el paciente.', prompt: '¿Qué tratamiento recomienda la guía ESC/EACTS 2025?', options: ['TAVI transfemoral', 'Recambio quirúrgico, obligado por su edad', 'Valvuloplastia con balón como tratamiento final', 'Tratamiento médico y ETT en 6 meses'], answer: 0, explain: 'La guía 2025 baja a 70 años la edad a partir de la cual se prefiere la TAVI transfemoral en la válvula trivalva con anatomía favorable. Es clase I si el acceso transfemoral es factible; la decisión la toma el Heart Team con el paciente.' }, // Fuente: ESC/EACTS 2025 valvulopatías (TAVI ≥ 70 años: clase I-A)
            { type: 'match', prompt: 'Relaciona cada parámetro con su umbral de EA grave', pairs: [['Vmax aórtica', '≥ 4 m/s'], ['Gradiente medio', '≥ 40 mmHg'], ['Área valvular indexada', '< 0,6 cm²/m²'], ['Índice adimensional', '< 0,25']], explain: 'Si los parámetros discrepan (área grave con gradiente bajo), revisa el flujo (VSi) y la FEVI antes de concluir.' },
          ],
        },
        {
          id: 'casos-u11-l2',
          title: 'EA paradójica de bajo flujo con FEVI conservada',
          case: {
            title: 'Mujer de 81 años con disnea y un gradiente "moderado"',
            text: 'Mujer de 81 años, hipertensa de larga evolución, con disnea de esfuerzo progresiva (NYHA III) y un presíncope al caminar deprisa. Soplo sistólico eyectivo 3/6 en foco aórtico. TA durante la exploración 128/74 mmHg. Superficie corporal 1,70 m².',
          },
          questions: [
            { type: 'mc', context: 'ETT: VI pequeño con HVI concéntrica y FEVI 65 %. Válvula aórtica calcificada. Vmax 3,5 m/s, gradiente medio 30 mmHg. TSVI 1,9 cm; VTI TSVI 16 cm; VTI aórtica 70 cm.', prompt: 'Calcula el volumen sistólico indexado (VSi).', diagram: { id: 'plax', highlight: 'av' }, options: ['≈ 27 ml/m²', '≈ 45 ml/m²', '≈ 16 ml/m²', '≈ 38 ml/m²'], answer: 0, explain: 'VS = π × (1,9/2)² × 16 ≈ 2,84 × 16 ≈ 45 ml; VSi = 45 / 1,70 ≈ 27 ml/m². Un VSi ≤ 35 ml/m² define bajo flujo.' },
            { type: 'mc', prompt: 'Con esos datos, ¿cuál es el área valvular por continuidad?', options: ['≈ 0,65 cm²', '≈ 1,1 cm²', '≈ 0,23 cm²', '≈ 2,6 cm²'], answer: 0, explain: 'AVA = 2,84 × 16 / 70 ≈ 0,65 cm². Área grave con gradiente < 40 mmHg, FEVI ≥ 50 % y bajo flujo: EA "paradójica" de bajo flujo y bajo gradiente.' },
            { type: 'match', prompt: 'Relaciona cada dato con lo que aporta ante una EA discordante', pairs: [['VSi ≤ 35 ml/m²', 'Bajo flujo'], ['Índice adimensional < 0,25', 'Gravedad sin medir el TSVI'], ['TA alta durante la eco', 'Puede infraestimar el gradiente'], ['Calcio valvular por TC', 'Gravedad sin depender del flujo']], explain: 'Ante la discordancia, descarta primero errores de medida y la HTA; después confirma la gravedad con un método independiente del flujo.' },
            { type: 'tf', prompt: 'En esta paciente, la eco de estrés con dobutamina es la prueba preferente para confirmar la gravedad.', answer: false, explain: 'La dobutamina se reserva para el bajo flujo con FEVI reducida. Con FEVI conservada y VI pequeño, la prueba de elección es el calcio valvular por TC.' },
            { type: 'mc', context: 'TC sin contraste: calcio valvular aórtico de 1650 UA.', prompt: '¿Cómo interpretas este resultado en una mujer?', options: ['EA grave muy probable', 'EA no grave: el umbral en mujeres es 3000 UA', 'Dato no valorable si hay bajo flujo', 'Sugiere bicuspidia y obliga a cirugía'], answer: 0, explain: 'Las mujeres alcanzan la EA grave con menos calcio: grave probable ≥ 1200 UA (varones ≥ 2000) y muy probable ≥ 1600 UA (varones ≥ 3000).' },
            { type: 'mc', context: 'Confirmada la EA grave. Sin enfermedad coronaria significativa y con anatomía transfemoral favorable.', prompt: '¿Qué le indicas?', options: ['TAVI transfemoral', 'Seguimiento: el gradiente no es grave', 'Valvuloplastia con balón aislada', 'Vasodilatadores para aumentar el flujo'], answer: 0, explain: 'La EA grave de bajo flujo y bajo gradiente con FEVI conservada, confirmada y sintomática, es indicación de intervención. Por edad y anatomía, la TAVI es la opción preferente.' },
          ],
        },
        {
          id: 'casos-u11-l3',
          title: 'Insuficiencia aórtica grave asintomática',
          case: {
            title: 'Varón de 46 años con un soplo diastólico en una revisión',
            text: 'Varón de 46 años, ciclista aficionado y asintomático, al que en una revisión laboral auscultan un soplo diastólico en el borde esternal izquierdo. TA 150/50 mmHg con pulso saltón. Sin fiebre ni dolor torácico previos. Superficie corporal 2,0 m².',
          },
          questions: [
            { type: 'mc', context: 'ETT: válvula aórtica trivalva con coaptación incompleta y jet central. Vena contracta 7 mm; THP 190 ms. Raíz aórtica 38 mm.', prompt: '¿Qué hallazgo adicional apoyaría mejor que la insuficiencia es grave?', diagram: { id: 'plax', highlight: 'av' }, options: ['Flujo holodiastólico inverso en la aorta descendente', 'Reflujo protodiastólico breve en la aorta descendente', 'THP de 550 ms', 'Jet que ocupa el 20 % del TSVI'], answer: 0, explain: 'El flujo inverso holodiastólico (velocidad telediastólica > 20 cm/s) es específico de IAo grave; un reflujo protodiastólico breve es normal.' },
            { type: 'mc', context: 'VS en el TSVI 160 ml (flujo total); VS en el anillo mitral 70 ml (flujo anterógrado).', prompt: 'Calcula el volumen y la fracción regurgitantes.', options: ['90 ml y 56 %', '90 ml y 44 %', '70 ml y 44 %', '160 ml y 70 %'], answer: 0, explain: 'VR = 160 − 70 = 90 ml; FR = 90 / 160 ≈ 56 %. VR ≥ 60 ml y FR ≥ 50 % definen IAo grave.' },
            { type: 'tf', prompt: 'Un THP largo (> 500 ms) indica IAo grave, porque las presiones de aorta y VI se igualan rápidamente.', answer: false, explain: 'Es al revés: cuanto más grave la IAo, antes se igualan las presiones y más corto es el THP (< 200 ms). Un THP > 500 ms sugiere IAo leve.' },
            { type: 'mc', context: 'DTDVI 70 mm; DTSVI 52 mm (26 mm/m²); FEVI 56 %. Ergometría: 12 MET sin síntomas ni caída de la TA.', prompt: '¿Qué actitud recomienda la guía ESC/EACTS?', options: ['Cirugía valvular aórtica', 'ETT anual y vasodilatadores', 'Esperar a que la FEVI baje de 50 %', 'TAVI por estar asintomático'], answer: 0, explain: 'Aun sin síntomas, un DTSVI > 50 mm (o > 25 mm/m²) indica cirugía (clase I) porque anticipa disfunción irreversible. La TAVI no es de elección en la IAo pura.' },
            { type: 'tf', prompt: 'Los vasodilatadores retrasan de forma eficaz la cirugía en la IAo grave asintomática con VI dilatado.', answer: false, explain: 'No han demostrado retrasar la cirugía; se usan para tratar la HTA. La indicación la marcan los síntomas, la FEVI y las dimensiones del VI.' },
            { type: 'match', prompt: 'Relaciona cada parámetro con su umbral de IAo grave', pairs: [['Vena contracta', '> 6 mm'], ['Tiempo de hemipresión', '< 200 ms'], ['Volumen regurgitante', '≥ 60 ml'], ['Orificio regurgitante efectivo', '≥ 30 mm²']], explain: 'Ningún parámetro aislado basta: intégralos con el tamaño del VI, que apoya la cronicidad y la gravedad.' },
          ],
        },
        {
          id: 'casos-u11-l4',
          title: 'IM primaria por prolapso: PISA y reparación',
          case: {
            title: 'Mujer de 59 años con un soplo apical',
            text: 'Mujer de 59 años, activa y sin síntomas, remitida por un soplo holosistólico apical irradiado a la axila. Refiere palpitaciones aisladas. ECG en ritmo sinusal. Sin comorbilidades y con riesgo quirúrgico bajo.',
          },
          questions: [
            { type: 'mc', context: 'ETT: prolapso del festón P2 de la mitral con un jet excéntrico que se pega a la pared de la AI. Volumen de AI 48 ml/m².', prompt: '¿Por qué no debes graduar esta IM por el área del jet de color?', diagram: { id: 'a4c', highlight: 'mv' }, options: ['El jet adherido a la pared infraestima su área', 'El color sobreestima los jets excéntricos', 'El área de color solo sirve en la IM secundaria', 'El color no detecta los jets del prolapso'], answer: 0, explain: 'El efecto Coanda aplana el jet contra la pared y reduce su área aparente. Usa métodos cuantitativos: PISA, vena contracta o volumétrico.' },
            { type: 'mc', context: 'PISA: radio 1,0 cm con velocidad de aliasing 38 cm/s. Vmax de la IM 5 m/s; VTI de la IM 150 cm.', prompt: 'Calcula el orificio regurgitante efectivo (ORE).', options: ['≈ 0,48 cm² (48 mm²)', '≈ 0,24 cm² (24 mm²)', '≈ 0,96 cm² (96 mm²)', '≈ 0,08 cm² (8 mm²)'], answer: 0, explain: 'ORE = 2π × r² × Va / Vmax = 6,28 × 1 × 38 / 500 ≈ 0,48 cm². Ojo con las unidades: Vmax en cm/s (500), no en m/s.' },
            { type: 'mc', prompt: 'Calcula ahora el volumen regurgitante.', options: ['≈ 72 ml', '≈ 48 ml', '≈ 36 ml', '≈ 150 ml'], answer: 0, explain: 'VR = ORE × VTI de la IM = 0,48 × 150 ≈ 72 ml. ORE ≥ 40 mm² y VR ≥ 60 ml definen la IM primaria grave.' },
            { type: 'match', prompt: 'Relaciona cada parámetro con su umbral de IM primaria grave', pairs: [['ORE', '≥ 40 mm²'], ['Volumen regurgitante', '≥ 60 ml'], ['Vena contracta', '≥ 7 mm'], ['Venas pulmonares', 'Flujo sistólico invertido']], explain: 'En la IM primaria los umbrales de gravedad son los clásicos; integra siempre varios parámetros y el remodelado de AI y VI.' },
            { type: 'mc', context: 'FEVI 58 %, DTSVI 41 mm, PSAP 35 mmHg, ritmo sinusal. Anatomía favorable a la reparación en un centro con experiencia.', prompt: 'Sigue asintomática. ¿Qué recomiendas?', options: ['Reparación quirúrgica mitral', 'ETT de control cada 6 meses', 'Reparación percutánea borde a borde', 'Esperar a que aparezca FA'], answer: 0, explain: 'FEVI ≤ 60 % o DTSVI ≥ 40 mm marcan disfunción incipiente del VI: cirugía aun sin síntomas (clase I). La reparación preserva mejor la función que el recambio.' },
            { type: 'tf', prompt: 'La reparación percutánea borde a borde (TEER) es la primera opción en una paciente así, con riesgo quirúrgico bajo.', answer: false, explain: 'La TEER se reserva para la IM primaria grave sintomática con riesgo quirúrgico alto y anatomía apta; con riesgo bajo, la reparación quirúrgica es de elección.' },
          ],
        },
        {
          id: 'casos-u11-l5',
          title: 'Insuficiencia tricuspídea grave funcional',
          case: {
            title: 'Mujer de 77 años con edemas y ascitis en FA permanente',
            text: 'Mujer de 77 años con FA permanente desde hace 10 años, HTA y ERC en estadio 3b. Consulta por edemas, aumento del perímetro abdominal y astenia (NYHA III) pese a dosis altas de furosemida. Tiene ingurgitación yugular con onda v gigante y hepatomegalia pulsátil. Fragilidad moderada; EuroSCORE II 8 %.',
          },
          questions: [
            { type: 'mc', context: 'ETT: AD y anillo tricuspídeo muy dilatados (anillo 46 mm) con velos de morfología normal que no coaptan. FEVI 58 %, sin valvulopatía izquierda significativa.', prompt: '¿Cuál es el mecanismo más probable de la insuficiencia tricuspídea?', diagram: { id: 'a4c', highlight: 'tv' }, options: ['Secundaria auricular por dilatación del anillo', 'Primaria por endocarditis', 'Secundaria a HP precapilar grave', 'Primaria por un cable de marcapasos'], answer: 0, explain: 'La FA de larga evolución dilata la AD y el anillo con velos normales y un VD poco remodelado: es la IT secundaria auricular, cada vez más frecuente en ancianos.' },
            { type: 'match', prompt: 'Relaciona cada parámetro con su umbral de IT grave', pairs: [['Vena contracta', '≥ 7 mm'], ['ORE por PISA', '≥ 40 mm²'], ['Volumen regurgitante', '≥ 45 ml'], ['Venas hepáticas', 'Flujo sistólico invertido']], explain: 'Por encima de estos umbrales la IT se gradúa como masiva y torrencial, categorías que ayudan a seleccionar el tratamiento percutáneo.' },
            { type: 'mc', context: 'Vena contracta 10 mm. PISA tricuspídea: radio 0,9 cm, aliasing 28 cm/s; Vmax de la IT 2,6 m/s.', prompt: 'Calcula el ORE.', options: ['≈ 55 mm²', '≈ 27 mm²', '≈ 110 mm²', '≈ 11 mm²'], answer: 0, explain: 'ORE = 2π × 0,9² × 28 / 260 ≈ 0,55 cm² = 55 mm² (grave). En FA, promedia varios latidos.' },
            { type: 'mc', context: 'VCI de 25 mm sin colapso inspiratorio (PAD estimada 15 mmHg).', prompt: '¿Cuál es la PSAP estimada?', options: ['≈ 42 mmHg', '≈ 27 mmHg', '≈ 30 mmHg', '≈ 57 mmHg'], answer: 0, explain: 'PSAP = 4 × 2,6² + 15 ≈ 27 + 15 = 42 mmHg. En la IT masiva el Doppler la infraestima, porque las presiones de AD y VD tienden a igualarse.' },
            { type: 'mc', context: 'TAPSE 17 mm; VD dilatado sin disfunción grave. Sin cables de dispositivos. El Heart Team la considera de riesgo quirúrgico alto y con anatomía apta para tratamiento percutáneo.', prompt: '¿Qué opción es la más adecuada?', options: ['T-TEER tras optimizar los diuréticos', 'Anuloplastia quirúrgica aislada urgente', 'Solo diuréticos hasta que falle el VD', 'Marcapasos para controlar la FC'], answer: 0, explain: 'En la IT grave sintomática con riesgo quirúrgico alto, sin disfunción grave del VD ni HP precapilar grave, debe considerarse el tratamiento percutáneo (clase IIa), que mejora síntomas y calidad de vida. Esperar al fallo del VD empeora el pronóstico.' }, // Fuente: ESC/EACTS 2025 valvulopatías (tratamiento percutáneo de la IT: IIa-A)
            { type: 'tf', prompt: 'Si un paciente con IT grave va a operarse de la válvula mitral, se recomienda reparar la tricúspide en el mismo acto.', answer: true, explain: 'La IT grave se corrige en la cirugía izquierda (clase I); con IT moderada o anillo ≥ 40 mm (> 21 mm/m²) también debe considerarse la anuloplastia.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u12',
      title: 'Casos de ETT y ETE: HP, trombos y endocarditis',
      guide: {
        intro: 'Del trombo apical tras un infarto a la endocarditis complicada: casos en los que el ETT abre la sospecha y el ETE, la TC o el cateterismo derecho cierran el diagnóstico y guían la decisión.',
        sections: [
          {
            title: 'Trombo en el VI e hipertensión pulmonar',
            points: [
              'Trombo del VI: IAM anterior extenso, ápex acinético o aneurismático y FEVI < 40 %; el contraste mejora la detección y la RM con realce tardío es la técnica más sensible.',
              'ESC SCA 2023: anticoagulación oral (AVK o ACOD) 3–6 meses si hay trombo, guiada por imagen de control; con stent reciente, triple terapia ≤ 1 semana y después ACO + clopidogrel.',
              'HP (ESC 2022): PAPm > 20 mmHg; precapilar si PCP ≤ 15 mmHg y RVP > 2 UW. RVP = (PAPm − PCP) / GC.',
              'Probabilidad eco: Vmax IT > 3,4 m/s = alta; 2,9–3,4 m/s = intermedia, o alta si hay signos adicionales de ≥ 2 categorías (ventrículos, arteria pulmonar, VCI/AD).',
              'PSAP = 4 × Vmax IT² + PAD. TAPSE/PSAP < 0,55 mm/mmHg apoya HP y refleja desacoplamiento VD–arteria pulmonar.',
            ],
            tip: 'Disnea persistente tras una embolia pulmonar con probabilidad intermedia o alta: gammagrafía V/Q y derivación a un centro de HP.',
          },
          {
            title: 'Endocarditis',
            points: [
              'Duke-ESC 2023: definida con 2 mayores, 1 mayor + 3 menores o 5 menores; posible con 1 mayor + 1 menor o 3 menores.',
              'Criterios mayores: hemocultivos con germen típico (incluido Enterococcus faecalis) e imagen (eco, TC cardiaca y, en prótesis, PET-TC). Los émbolos vistos solo por imagen ya cuentan como criterio menor.',
              'ETT de entrada; ETE si el ETT es negativo con sospecha alta, en prótesis o dispositivos, y también con ETT positivo para buscar complicaciones perivalvulares.',
              'Cirugía emergente (< 24 h) por shock o edema pulmonar refractario; urgente (3–5 días) por infección no controlada (absceso, fístula, pseudoaneurisma) o vegetación ≥ 10 mm con embolia.',
              'Un BAV nuevo en una endocarditis aórtica sugiere absceso perianular: pide ETE.',
            ],
            tip: 'Streptococcus gallolyticus en los hemocultivos obliga a pedir una colonoscopia.',
          },
          {
            title: 'Cierre de la orejuela izquierda',
            points: [
              'ESC FA 2024: el cierre percutáneo puede considerarse (IIb) si hay contraindicación de anticoagulación prolongada; el cierre quirúrgico asociado a cirugía cardiaca es clase I.',
              'Riesgo embólico con CHA₂DS₂-VA (sin el sexo como factor).',
              'El ETE (o la TC) previo descarta trombo y mide el ostium y la profundidad en 0°, 45°, 90° y 135°.',
              'Tras el implante y en el seguimiento (≈ 45 días y meses después): compresión y estabilidad del dispositivo, fuga peridispositivo, trombo sobre el dispositivo y derrame pericárdico.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u12-l1',
          title: 'Trombo apical tras un infarto anterior',
          case: {
            title: 'Varón de 64 años con un infarto anterior evolucionado',
            text: 'Varón de 64 años, fumador, que acude tras 10 horas de dolor torácico con un IAMCEST anterior. Se realiza ICP con stent farmacoactivo en la descendente anterior proximal. Al cuarto día está estable, sin angina y en ritmo sinusal.',
          },
          questions: [
            { type: 'mc', context: 'ETT: acinesia apical y anteroseptal con ápex adelgazado; FEVI 35 %. En el ápex se intuye una imagen ecodensa dudosa.', prompt: '¿Qué prueba aumenta, a pie de cama, la sensibilidad para confirmar un trombo?', diagram: { id: 'a4c', highlight: 'lv' }, options: ['ETT con contraste ecográfico', 'ETE', 'TC torácica sin contraste', 'Ventriculografía con contraste yodado'], answer: 0, explain: 'El contraste opacifica la cavidad y delinea el trombo como un defecto que no capta. La RM con realce tardío es la más sensible; el ETE ve mal el ápex.' },
            { type: 'tf', context: 'Con contraste se confirma una masa apical sésil de 16 × 12 mm que no capta contraste.', prompt: 'La ausencia de captación de contraste apoya que la masa sea un trombo y no un tumor.', answer: true, explain: 'El trombo es avascular. Los tumores captan contraste en grado variable según su vascularización.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con su significado', pairs: [['Trombo móvil y protruyente', 'Mayor riesgo embólico'], ['Masa que no capta contraste', 'Avascular: trombo'], ['Ápex acinético y FEVI < 40 %', 'Sustrato de trombosis'], ['RM con realce tardío', 'Técnica más sensible']], explain: 'El trombo apical suele formarse en las 2 primeras semanas tras un IAM anterior extenso; la movilidad y la protrusión aumentan el riesgo de embolia.' },
            { type: 'mc', prompt: 'Además de la antiagregación, ¿qué recomienda la guía ESC 2023 de SCA para este trombo?', options: ['Anticoagulación oral durante 3–6 meses', 'Fibrinólisis sistémica', 'Trombectomía quirúrgica urgente', 'Anticoagular solo si hay una embolia'], answer: 0, explain: 'Con trombo confirmado debe considerarse la anticoagulación (AVK o ACOD) 3–6 meses, guiada por imagen. No se recomienda anticoagular de forma profiláctica sin trombo.' }, // Fuente: ESC SCA 2023
            { type: 'mc', prompt: 'Lleva un stent desde hace 4 días y ahora necesita anticoagulación. ¿Qué pauta es la adecuada por defecto?', options: ['Triple terapia ≤ 1 semana y luego ACO + clopidogrel', 'Triple terapia con prasugrel durante 12 meses', 'ACO + AAS + ticagrelor durante 6 meses', 'Retirar toda antiagregación y dejar solo ACO'], answer: 0, explain: 'Para limitar sangrados, la triple terapia (ACO + AAS + clopidogrel) se acorta a ≤ 1 semana y sigue ACO + clopidogrel. Prasugrel y ticagrelor no se usan en triple terapia.' },
            { type: 'tf', context: 'A los 3 meses, el ETT con contraste no muestra trombo y la FEVI es del 42 %.', prompt: 'Resuelto el trombo, puede retirarse la anticoagulación y mantener la antiagregación hasta completar el año del infarto.', answer: true, explain: 'La duración de la anticoagulación se guía por la imagen: si el trombo se ha resuelto, se retira y se continúa con antiagregación según el SCA.' },
          ],
        },
        {
          id: 'casos-u12-l2',
          title: 'Probabilidad ecocardiográfica de HP',
          case: {
            title: 'Mujer de 52 años con disnea persistente tras una embolia pulmonar',
            text: 'Mujer de 52 años con una embolia pulmonar bilateral hace 9 meses, anticoagulada durante 6 meses. Refiere disnea de esfuerzo progresiva (clase funcional III) y un presíncope al subir una cuesta. Segundo ruido pulmonar reforzado. NT-proBNP 1150 pg/ml.',
          },
          questions: [
            { type: 'mc', context: 'ETT: Vmax de la IT 3,6 m/s. VD dilatado con cociente VD/VI basal de 1,2 y aplanamiento septal en sístole.', prompt: 'Según la ESC 2022, ¿qué probabilidad ecocardiográfica de HP tiene?', diagram: { id: 'a4c', highlight: 'rv' }, options: ['Alta', 'Intermedia', 'Baja', 'No valorable sin cateterismo'], answer: 0, explain: 'Una Vmax IT > 3,4 m/s da probabilidad alta por sí sola; entre 2,9 y 3,4 m/s, la probabilidad depende de los signos adicionales.' },
            { type: 'mc', context: 'VCI de 23 mm con colapso inspiratorio < 50 % (PAD estimada 15 mmHg). TAPSE 15 mm.', prompt: '¿Cuál es la PSAP estimada?', options: ['≈ 67 mmHg', '≈ 52 mmHg', '≈ 29 mmHg', '≈ 82 mmHg'], answer: 0, explain: 'PSAP = 4 × 3,6² + PAD ≈ 52 + 15 = 67 mmHg. Olvidar sumar la PAD (≈ 52 mmHg) es el error más frecuente.' },
            { type: 'tf', prompt: 'Su cociente TAPSE/PSAP (≈ 0,22 mm/mmHg) indica un buen acoplamiento entre el VD y la circulación pulmonar.', answer: false, explain: 'TAPSE/PSAP = 15 / 67 ≈ 0,22 mm/mmHg. Por debajo de 0,55 apoya HP, y los valores bajos reflejan desacoplamiento VD–arteria pulmonar, de peor pronóstico.' },
            { type: 'match', prompt: 'Relaciona cada signo ecocardiográfico adicional con su categoría', pairs: [['Cociente VD/VI basal > 1', 'Ventrículos'], ['Aceleración pulmonar < 105 ms', 'Arteria pulmonar'], ['VCI > 21 mm con colapso reducido', 'VCI y aurícula derecha']], explain: 'Con Vmax IT de 2,9–3,4 m/s, la presencia de signos de al menos dos categorías eleva la probabilidad de intermedia a alta.' },
            { type: 'mc', prompt: 'Con probabilidad alta de HP tras una embolia pulmonar, ¿qué prueba debe hacerse a continuación?', options: ['Gammagrafía de ventilación/perfusión', 'Ergometría convencional', 'Ecografía venosa de miembros inferiores', 'Coronariografía'], answer: 0, explain: 'La gammagrafía V/Q es la prueba de cribado de la HP tromboembólica crónica (HPTEC): si es normal, la descarta; si no, deriva a un centro experto en HP.' },
            { type: 'mc', context: 'V/Q con defectos de perfusión segmentarios no concordantes. Cateterismo derecho: PAPm 38 mmHg, PCP 10 mmHg, gasto cardiaco 4,0 l/min.', prompt: 'Calcula las RVP y clasifica la HP.', options: ['7 UW: HP precapilar', '7 UW: HP poscapilar aislada', '2,5 UW: HP poscapilar combinada', '9,5 UW: HP precapilar'], answer: 0, explain: 'RVP = (38 − 10) / 4,0 = 7 UW. PAPm > 20 mmHg, PCP ≤ 15 mmHg y RVP > 2 UW definen la HP precapilar; aquí, sospecha fundada de HPTEC.' },
          ],
        },
        {
          id: 'casos-u12-l3',
          title: 'Endocarditis sobre válvula nativa: de Duke al ETE',
          case: {
            title: 'Varón de 67 años con fiebre y pérdida de peso',
            text: 'Varón de 67 años con fiebre vespertina de hasta 38,6 °C, astenia y pérdida de 5 kg en 3 semanas. Tiene un soplo sistólico apical que no constaba en revisiones previas. No es portador de prótesis ni dispositivos. Crece Streptococcus gallolyticus en 3 de 3 sets de hemocultivos.',
          },
          questions: [
            { type: 'mc', context: 'ETT: masa móvil de 8 mm adherida a la cara auricular del velo anterior mitral, con IM moderada. FEVI 60 %.', prompt: 'Con los hemocultivos y el ETT, ¿cuántos criterios mayores de Duke-ESC 2023 cumple?', diagram: { id: 'plax', highlight: 'mv' }, options: ['Dos: microbiológico y de imagen', 'Uno: solo el de imagen', 'Uno: solo el microbiológico', 'Ninguno hasta hacer un ETE'], answer: 0, explain: 'S. gallolyticus es un germen típico de endocarditis: con ≥ 2 hemocultivos positivos es criterio mayor. La vegetación vista en el ETT también es criterio mayor de imagen.' },
            { type: 'match', prompt: 'Relaciona cada dato con su categoría en los criterios de Duke-ESC 2023', pairs: [['Infarto esplénico en la TC', 'Fenómeno vascular'], ['Glomerulonefritis', 'Fenómeno inmunológico'], ['Absceso perivalvular en el ETE', 'Criterio mayor de imagen'], ['Valvulopatía previa conocida', 'Predisposición']], explain: 'Desde 2023, los émbolos detectados solo por imagen (aunque sean asintomáticos) cuentan como criterio vascular menor.' },
            { type: 'mc', context: 'TC abdominal: infarto esplénico asintomático.', prompt: 'Con 2 criterios mayores, fiebre e infarto esplénico, ¿cuál es el diagnóstico?', options: ['Endocarditis definida', 'Endocarditis posible', 'Endocarditis rechazada', 'Definida solo si el ETE la confirma'], answer: 0, explain: 'Definida = 2 mayores, o 1 mayor + 3 menores, o 5 menores. Posible = 1 mayor + 1 menor, o 3 menores.' },
            { type: 'tf', prompt: 'Como el ETT ya muestra la vegetación, el ETE no aporta información adicional y puede omitirse.', answer: false, explain: 'La ESC 2023 aconseja el ETE también con ETT positivo (salvo endocarditis derecha nativa con buen ETT), porque detecta mejor abscesos, perforaciones y fístulas.' },
            { type: 'mc', context: 'ETE: vegetación de 8 mm sin absceso ni perforación; IM moderada. Sin insuficiencia cardiaca. Hemocultivos negativos a las 48 h de antibiótico.', prompt: '¿Cuál es la actitud más adecuada?', options: ['Antibiótico dirigido 4 semanas, sin cirugía de entrada', 'Cirugía urgente por el infarto esplénico', 'Cirugía emergente en menos de 24 h', 'Antibiótico 2 semanas y alta sin controles'], answer: 0, explain: 'Sin insuficiencia cardiaca, infección no controlada ni vegetación ≥ 10 mm con embolia, no hay indicación quirúrgica de entrada. Vigila con eco la evolución de la vegetación y de la IM.' },
            { type: 'mc', prompt: 'Por el microorganismo aislado, ¿qué exploración adicional debes solicitar?', options: ['Colonoscopia', 'Gastroscopia', 'Ecografía tiroidea', 'Densitometría ósea'], answer: 0, explain: 'S. gallolyticus (antes S. bovis biotipo I) se asocia a pólipos y neoplasias de colon: la colonoscopia está indicada.' },
          ],
        },
        {
          id: 'casos-u12-l4',
          title: 'Absceso perianular: el PR que se alarga',
          case: {
            title: 'Mujer de 69 años con endocarditis aórtica por S. aureus',
            text: 'Mujer de 69 años, diabética y en hemodiálisis por fístula arteriovenosa. Ingresa por fiebre y bacteriemia por Staphylococcus aureus sensible a meticilina. El ETT inicial muestra una vegetación de 7 mm en la válvula aórtica nativa con IAo moderada. Recibe cloxacilina intravenosa.',
          },
          questions: [
            { type: 'mc', context: 'Al quinto día persiste la fiebre y los hemocultivos de control siguen positivos. El PR es ahora de 280 ms; al ingreso era de 160 ms.', prompt: 'Observa la tira. ¿Qué sugiere este hallazgo en su contexto?', ecg: 'avb1', options: ['Extensión perivalvular de la infección', 'Toxicidad por cloxacilina', 'Hiperpotasemia por la diálisis', 'Hallazgo vagal sin relevancia'], answer: 0, explain: 'Un BAV nuevo en la endocarditis aórtica sugiere un absceso perianular que alcanza el sistema de conducción, muy próximo al septo membranoso.' },
            { type: 'mc', prompt: '¿Qué prueba solicitas a continuación?', options: ['ETE', 'Repetir el ETT en una semana', 'Holter de 24 horas', 'Coronariografía urgente'], answer: 0, explain: 'El ETE detecta abscesos con mucha más sensibilidad que el ETT. Si no es concluyente, la TC cardiaca ayuda a definir la extensión perivalvular.' },
            { type: 'match', context: 'ETE: zona perivalvular engrosada de 12 mm en la unión mitroaórtica, sin flujo en su interior, además de la vegetación aórtica.', prompt: 'Relaciona cada hallazgo del ETE con la complicación que indica', pairs: [['Cavidad perivalvular sin flujo', 'Absceso'], ['Cavidad pulsátil con flujo en color', 'Pseudoaneurisma'], ['Comunicación entre dos cavidades', 'Fístula'], ['Solución de continuidad del velo', 'Perforación']], explain: 'Todas indican extensión local de la infección. El absceso puede evolucionar a pseudoaneurisma y este a fístula.' },
            { type: 'mc', prompt: '¿Cuál es la actitud recomendada?', diagram: { id: 'plax', highlight: 'av' }, options: ['Cirugía urgente, en 3–5 días', 'Antibiótico 8 semanas sin cirugía', 'Marcapasos definitivo y seguir con antibiótico', 'Cirugía electiva al completar el antibiótico'], answer: 0, explain: 'El absceso perianular es una infección localmente no controlada: indicación de cirugía urgente (clase I), con desbridamiento y reconstrucción de la raíz si es preciso.' },
            { type: 'tf', prompt: 'Si progresa a BAV completo, conviene implantar un marcapasos definitivo transvenoso antes de la cirugía.', answer: false, explain: 'Con bacteriemia activa se usa un marcapasos temporal; en la cirugía pueden dejarse electrodos epicárdicos y el definitivo se decide después, según la conducción.' },
            { type: 'mc', prompt: '¿Quién debe decidir el tratamiento de esta endocarditis complicada?', options: ['Un equipo multidisciplinar de endocarditis', 'Solo el cirujano cardiaco', 'Solo el especialista en infecciosas', 'El nefrólogo responsable de la diálisis'], answer: 0, explain: 'La ESC 2023 recomienda manejar la endocarditis complicada en un centro con equipo de endocarditis (cardiología, cirugía, infecciosas, microbiología e imagen) y cirugía disponible.' },
          ],
        },
        {
          id: 'casos-u12-l5',
          title: 'Cierre de orejuela izquierda guiado por ETE',
          case: {
            title: 'Varón de 79 años con FA y hemorragias digestivas de repetición',
            text: 'Varón de 79 años con FA permanente, HTA, diabetes y un ictus isquémico hace 2 años. Con apixabán ha tenido tres hemorragias digestivas por angiodisplasias intestinales que requirieron transfusión, pese al tratamiento endoscópico. Su digestivo desaconseja mantener la anticoagulación a largo plazo.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira. Con este ritmo y sus antecedentes, ¿qué puntuación CHA₂DS₂-VA tiene?', ecg: 'afib', options: ['6', '5', '4', '7'], answer: 0, explain: 'HTA (1) + edad ≥ 75 (2) + diabetes (1) + ictus previo (2) = 6. La ESC 2024 usa el CHA₂DS₂-VA, que retira el sexo femenino como factor.' },
            { type: 'mc', prompt: 'Según la ESC 2024 de FA, ¿qué papel tiene el cierre percutáneo de la orejuela en este paciente?', options: ['Puede considerarse por la contraindicación de ACO', 'Es de primera elección frente a los ACOD', 'Está contraindicado tras un ictus', 'Solo se indica junto a cirugía cardiaca'], answer: 0, explain: 'El cierre percutáneo es una recomendación IIb en la FA con contraindicación para la anticoagulación prolongada. El cierre quirúrgico asociado a otra cirugía cardiaca es clase I.' },
            { type: 'tf', context: 'ETE previo: orejuela en "ala de pollo", sin trombo ni ecocontraste denso. Ostium máximo de 21 mm; profundidad de 26 mm.', prompt: 'Antes del implante, el ETE debe descartar trombo en la orejuela, porque su presencia contraindica el procedimiento.', answer: true, explain: 'Manipular una orejuela con trombo puede embolizarlo. El ETE (o la TC) mide además el ostium y la profundidad en varios ángulos para elegir el tamaño.' },
            { type: 'mc', context: 'Se implanta un dispositivo de 27 mm de diámetro nominal. Ya liberado, el diámetro máximo del dispositivo medido por ETE es de 22 mm.', prompt: 'Calcula la compresión del dispositivo.', options: ['≈ 19 %', '≈ 23 %', '≈ 5 %', '≈ 81 %'], answer: 0, explain: 'Compresión = (27 − 22) / 27 ≈ 19 %, dentro del rango recomendado para el WATCHMAN FLX (10–30 %; criterios PASS), que asegura un anclaje estable. Otros dispositivos tienen criterios propios.' }, // Fuente: instrucciones de uso de WATCHMAN FLX (Boston Scientific): criterios PASS, compresión 10–30 %
            { type: 'match', prompt: 'Relaciona cada hallazgo del ETE tras el implante con su significado', pairs: [['Estable al traccionar (tug test)', 'Anclaje correcto'], ['Fuga peridispositivo de 2 mm', 'Fuga pequeña'], ['Masa ecodensa en la cara auricular', 'Trombo sobre el dispositivo'], ['Derrame pericárdico nuevo', 'Posible perforación']], explain: 'El trombo sobre el dispositivo obliga a intensificar el tratamiento antitrombótico; el derrame nuevo exige descartar taponamiento.' },
            { type: 'mc', context: 'A los 45 días, ETE: dispositivo bien posicionado, sin trombo y con fuga peridispositivo de 2 mm.', prompt: '¿Qué tratamiento antitrombótico es razonable a partir de ahora?', options: ['Antiagregación, sin anticoagulación', 'Anticoagulación oral indefinida', 'Triple terapia antitrombótica', 'Heparina de bajo peso a dosis plenas'], answer: 0, explain: 'Sin trombo y con fuga pequeña se mantiene la antiagregación (pauta según dispositivo y riesgo hemorrágico): evitar la anticoagulación era el objetivo del cierre.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u13',
      title: 'Casos de cateterismo: SCA y fisiología',
      guide: {
        intro: 'En la sala de hemodinámica se decide contra el reloj y con datos: tiempos de reperfusión, anatomía, fisiología intracoronaria e imagen. Estos casos siguen las guías ESC de SCA (2023) y de síndrome coronario crónico (2024).',
        sections: [
          {
            title: 'IAMCEST e ICP primaria',
            points: [
              'ICP primaria si el tiempo previsto del diagnóstico al paso de la guía es ≤ 120 min; objetivos: ≤ 60 min en centro con ICP y ≤ 90 min si hay traslado.',
              'Si no se puede cumplir el plazo de 120 min, fibrinólisis en ≤ 10 min desde el diagnóstico y coronariografía en 2–24 h (ICP de rescate si fracasa).',
              'Acceso radial y stent farmacoactivo (clase I); la tromboaspiración sistemática no está indicada.',
              'Multivaso sin shock: revascularización completa en el procedimiento índice o en ≤ 45 días (COMPLETE); en el shock, solo la arteria culpable (CULPRIT-SHOCK).',
              'DAPT 12 meses por defecto; prasugrel preferible a ticagrelor si se hace ICP (contraindicado tras ictus o AIT).',
            ],
            tip: 'El reloj empieza en el diagnóstico (ECG), no en la llegada a la sala.',
          },
          {
            title: 'Tronco, fisiología e imagen intracoronaria',
            points: [
              'Descenso del ST en ≥ 6 derivaciones con elevación en aVR sugiere isquemia difusa por enfermedad del tronco o multivaso.',
              'FFR = Pd/Pa en hiperemia (adenosina); significativa si ≤ 0,80. iFR (reposo) significativa si ≤ 0,89.',
              'FAME: la ICP guiada por FFR reduce eventos y stents frente a la guiada por angiografía; FAME 2: si FFR ≤ 0,80, la ICP reduce la revascularización urgente frente al tratamiento médico.',
              'IVUS en el tronco: área luminal mínima < 6 mm² indica lesión significativa (umbral algo menor en población asiática).',
              'Tronco de complejidad baja (SYNTAX ≤ 22): ICP o CRM son alternativas válidas; con SYNTAX alto se prefiere la CRM. Decide el Heart Team con el paciente.',
            ],
            tip: 'Si la presión del catéter se amortigua al intubar el tronco, desengancha: puede haber enfermedad ostial.',
          },
          {
            title: 'IAM de VD, SCAD y trombosis de stent',
            points: [
              'IAM de VD: hipotensión, yugulares ingurgitadas y pulmones limpios; ST ≥ 1 mm en V4R; PAD/PCP > 0,8. Volumen guiado, sin nitratos ni diuréticos, y sincronía AV.',
              'SCAD: mujer joven, a menudo periparto; tipo 2 = estrechamiento largo y liso. Tratamiento conservador salvo isquemia persistente o inestabilidad; buscar displasia fibromuscular.',
              'Trombosis de stent (ARC): aguda < 24 h, subaguda hasta 30 días, tardía hasta 1 año y muy tardía > 1 año.',
              'La suspensión precoz de la DAPT es el principal predictor de trombosis; la imagen intracoronaria busca causas mecánicas (infraexpansión, malaposición, disección de borde).',
            ],
            tip: 'Si un paciente no tolera un inhibidor P2Y12, cámbialo por otro: no lo suspendas sin más.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u13-l1',
          title: 'IAMCEST anterior: ICP primaria',
          case: {
            title: 'Mujer de 58 años con dolor epigástrico y sudoración',
            text: 'Mujer de 58 años con diabetes tipo 2 e hipertensión. Avisa al 112 por dolor epigástrico opresivo de 90 minutos, con sudoración y náuseas. TA 135/85 mmHg, FC 92 lpm, sin crepitantes. Sin antecedentes de ictus ni de sangrado; pesa 70 kg. El hospital con hemodinámica 24 h está a 40 minutos.',
          },
          questions: [
            { type: 'mc', context: 'El equipo del SEM registra este ECG en el domicilio.', prompt: 'Observa el ECG. ¿Cuál es la arteria culpable más probable?', ecg12: 'stemi-ant', options: ['Descendente anterior', 'Coronaria derecha', 'Circunfleja', 'Primera marginal obtusa'], answer: 0, explain: 'La elevación del ST en V1–V4 con descenso especular inferior indica oclusión de la DA. En mujeres y diabéticos el dolor puede ser epigástrico o atípico.' },
            { type: 'mc', prompt: 'Se prevén 70 minutos desde el diagnóstico hasta el paso de la guía. Según la guía ESC 2023, ¿qué estrategia de reperfusión eliges?', options: ['ICP primaria en el centro con hemodinámica', 'Fibrinólisis en la ambulancia y traslado', 'Fibrinólisis y coronariografía en 48 h', 'Esperar la troponina para confirmar el IAM'], answer: 0, explain: 'Con un retraso previsto ≤ 120 min se prefiere la ICP primaria (objetivo ≤ 90 min si hay traslado). La fibrinólisis queda para retrasos mayores, en ≤ 10 min desde el diagnóstico.' },
            { type: 'tf', prompt: 'En la ICP primaria se recomienda el acceso radial frente al femoral cuando el operador tiene experiencia.', answer: true, explain: 'El acceso radial reduce el sangrado y las complicaciones vasculares, y en MATRIX también la mortalidad. Es recomendación de clase I.' },
            { type: 'mc', context: 'Coronariografía radial: oclusión trombótica de la DA proximal (TIMI 0) que se trata con stent farmacoactivo con TIMI 3 final. Estenosis del 80 % en la CD media. Sin signos de shock.', prompt: '¿Qué haces con la lesión de la CD?', diagram: { id: 'coronary', highlight: 'rca' }, options: ['ICP de la CD en el ingreso o en ≤ 45 días', 'Dejarla sin tratar salvo angina recurrente', 'Cirugía urgente de ambas arterias', 'Tratar antes la CD que la arteria culpable'], answer: 0, explain: 'En el IAMCEST multivaso sin shock, la revascularización completa reduce la muerte CV o el reinfarto (COMPLETE). En el shock se trata solo la culpable.' },
            { type: 'mc', prompt: 'Sin ictus previo, < 75 años y riesgo hemorrágico bajo. ¿Qué tratamiento antiagregante pautas al alta?', options: ['AAS + prasugrel durante 12 meses', 'AAS + clopidogrel durante 1 mes', 'AAS en monoterapia desde el alta', 'Anticoagulación oral + clopidogrel'], answer: 0, explain: 'La DAPT dura 12 meses por defecto y, si se hace ICP, prasugrel es preferible a ticagrelor (ISAR-REACT 5). Prasugrel está contraindicado tras ictus o AIT.' },
            { type: 'match', prompt: 'Relaciona cada intervalo de la guía ESC 2023 con su objetivo', pairs: [['Diagnóstico → guía en centro con ICP', '≤ 60 min'], ['Diagnóstico → guía con traslado', '≤ 90 min'], ['Retraso que obliga a fibrinolizar', '> 120 min'], ['Diagnóstico → bolo de fibrinolítico', '≤ 10 min']], explain: 'Todos los tiempos cuentan desde el diagnóstico electrocardiográfico; tras una fibrinólisis eficaz se hace coronariografía en 2–24 h.' },
          ],
        },
        {
          id: 'casos-u13-l2',
          title: 'Tronco común: aVR, IVUS y Heart Team',
          case: {
            title: 'Varón de 71 años con angina en reposo',
            text: 'Varón de 71 años, exfumador, hipertenso y dislipémico, sin diabetes. Desde hace 3 semanas tiene angina con esfuerzos cada vez menores; hoy, dolor en reposo de 25 minutos que cede con nitroglicerina. Ahora está asintomático y estable. Troponina elevada con curva ascendente. FEVI 60 % en la ecografía.',
          },
          questions: [
            { type: 'mc', context: 'ECG durante el dolor: descenso del ST ≥ 1 mm en 7 derivaciones con elevación del ST en aVR. Se normaliza al ceder el dolor.', prompt: '¿Qué sugiere este patrón?', options: ['Isquemia difusa por enfermedad del tronco o multivaso', 'IAMCEST inferior con imagen especular', 'Pericarditis aguda', 'Repolarización precoz benigna'], answer: 0, explain: 'El descenso difuso del ST con elevación en aVR refleja isquemia subendocárdica extensa; orienta a tronco o enfermedad de tres vasos y marca alto riesgo.' },
            { type: 'tf', context: 'Coronariografía radial: al intubar el tronco la presión del catéter se amortigua y pierde la incisura dícrota.', prompt: 'Este hallazgo sugiere enfermedad ostial del tronco y aconseja desenganchar el catéter para evitar isquemia o disección.', answer: true, explain: 'La amortiguación ("ventricularización") indica que el catéter ocluye parcialmente un ostium enfermo. Hay que retirarlo y evitar inyecciones forzadas.' },
            { type: 'mc', context: 'Estenosis ostial del tronco de gravedad angiográfica dudosa (≈ 50 %); DA, Cx y CD sin lesiones significativas. IVUS: área luminal mínima de 4,2 mm².', prompt: '¿Cómo interpretas el IVUS?', diagram: { id: 'coronary', highlight: 'lm' }, options: ['Lesión significativa: área < 6 mm²', 'No significativa: el umbral es < 4 mm²', 'No valorable sin una FFR previa', 'Significativa solo si el área es < 2 mm²'], answer: 0, explain: 'En el tronco, un área luminal mínima < 6 mm² se asocia a isquemia (algo menos en población asiática). El umbral de 4 mm² es de otros vasos proximales.' },
            { type: 'tf', prompt: 'En una lesión aislada del tronco sin enfermedad distal, una FFR ≤ 0,80 también la define como funcionalmente significativa.', answer: true, explain: 'La FFR es válida en el tronco; las lesiones graves en DA o Cx pueden falsear el resultado, por eso aquí ayuda que no haya enfermedad distal.' },
            { type: 'mc', context: 'SYNTAX 12. El paciente prefiere evitar la esternotomía si los resultados son comparables.', prompt: 'Según la guía ESC 2024 de síndrome coronario crónico, ¿qué revascularización procede?', options: ['ICP o CRM, según decidan Heart Team y paciente', 'Tratamiento médico: ya está asintomático', 'CRM obligatoria: el tronco excluye la ICP', 'ICP sin imagen para acortar el procedimiento'], answer: 0, explain: 'En el tronco con SYNTAX ≤ 22 la ICP es una alternativa a la CRM con supervivencia similar (EXCEL, NOBLE). Se recomienda guiarla con IVUS u OCT.' },
            { type: 'match', prompt: 'Relaciona cada dato con su implicación', pairs: [['SYNTAX ≤ 22 en el tronco', 'ICP o CRM'], ['SYNTAX ≥ 33', 'Se prefiere la CRM'], ['Área luminal mínima < 6 mm²', 'Lesión del tronco significativa'], ['IVUS tras el stent', 'Optimiza expansión y aposición']], explain: 'La imagen intracoronaria tras el stent detecta infraexpansión y malaposición, que se asocian a trombosis y reestenosis.' },
          ],
        },
        {
          id: 'casos-u13-l3',
          title: 'IAM de ventrículo derecho con hipotensión',
          case: {
            title: 'Varón de 66 años que se hipotensa tras la nitroglicerina',
            text: 'Varón de 66 años, fumador, con dolor torácico de 3 horas. En la ambulancia recibe nitroglicerina sublingual y la TA cae de 110/70 a 78/50 mmHg. A su llegada: FC 62 lpm, yugulares ingurgitadas y auscultación pulmonar limpia. Sin soplos.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. Además del IAM inferior, ¿qué hallazgo sugiere afectación del VD?', ecg12: 'stemi-inf-rv', options: ['Elevación del ST en V1 con III > II', 'Descenso del ST en V1–V3', 'Elevación del ST en I y aVL', 'Ondas Q en V1–V2'], answer: 0, explain: 'La elevación del ST en V1 con III > II apunta a la CD proximal. La confirmación es una elevación del ST ≥ 1 mm en V4R.' },
            { type: 'tf', prompt: 'La caída de la TA tras la nitroglicerina se explica porque el VD isquémico depende de la precarga.', answer: true, explain: 'El VD con infarto se vacía mal y necesita llenado; los venodilatadores (nitratos) y los diuréticos reducen la precarga y precipitan la hipotensión.' },
            { type: 'mc', context: 'Coronariografía: oclusión de la CD proximal, antes del origen de sus ramas ventriculares. Se trata con stent con TIMI 3 final.', prompt: '¿Qué rama, resaltada en el esquema, irriga la pared libre del VD?', diagram: { id: 'coronary', highlight: 'am' }, options: ['Marginal aguda', 'Marginal obtusa', 'Primera diagonal', 'Descendente posterior'], answer: 0, explain: 'Las ramas marginales agudas de la CD irrigan la pared libre del VD; por eso solo la oclusión proximal a ellas produce IAM de VD.' },
            { type: 'mc', context: 'Tras la ICP sigue hipotenso. Catéter de Swan-Ganz: PAD 12 mmHg, PCP 8 mmHg, índice cardiaco 1,9 l/min/m².', prompt: 'Calcula el cociente PAD/PCP. ¿Qué indica?', options: ['1,5: predominio del fallo derecho', '0,7: predominio del fallo izquierdo', '1,5: hipovolemia sin disfunción del VD', '0,7: hemodinámica normal'], answer: 0, explain: 'PAD/PCP = 12/8 = 1,5. Un cociente > 0,8 con PCP normal o baja es típico del IAM de VD.' },
            { type: 'mc', prompt: '¿Cuál es la primera medida para tratar su hipotensión?', options: ['Bolo de volumen con control de PAD y GC', 'Furosemida intravenosa', 'Nitroglicerina en perfusión', 'Morfina intravenosa'], answer: 0, explain: 'Un aporte de volumen prudente mejora el llenado; si la PAD sube sin mejorar el GC, el VD se distiende y desplaza el septo: entonces se añade un inotrópico (dobutamina).' },
            { type: 'match', prompt: 'Relaciona cada dato del IAM de VD con su significado', pairs: [['Hipotensión, yugulares y pulmón limpio', 'Tríada clínica del IAM de VD'], ['PAD/PCP > 0,8', 'Predominio del fallo derecho'], ['ST ≥ 1 mm en V4R', 'Confirma la afectación del VD'], ['BAV completo con hipotensión', 'Estimulación con sincronía AV']], explain: 'La contracción auricular aporta mucho llenado al VD isquémico: si aparece BAV, la estimulación secuencial AV mejora el GC.' },
          ],
        },
        {
          id: 'casos-u13-l4',
          title: 'Lesión intermedia: FFR e iFR',
          case: {
            title: 'Mujer de 63 años con angina de esfuerzo estable',
            text: 'Mujer de 63 años, hipertensa y dislipémica, con angina al subir dos pisos desde hace 6 meses pese a bisoprolol y nitratos. La TC coronaria mostró una estenosis del 50–69 % en la DA media. Se indica coronariografía; no tiene prueba de isquemia previa.',
          },
          questions: [
            { type: 'tf', context: 'Coronariografía: estenosis del 60 % en la DA media; resto sin lesiones.', prompt: 'Una estenosis angiográfica del 60 % basta para indicar la ICP.', answer: false, explain: 'La angiografía estima mal la repercusión de las lesiones intermedias (50–90 %). Sin prueba de isquemia, la guía recomienda valorarlas con FFR o iFR.' },
            { type: 'mc', context: 'Guía de presión distal a la lesión y adenosina intravenosa a 140 µg/kg/min. Presión aórtica media (Pa) 90 mmHg; presión distal media (Pd) 68 mmHg.', prompt: 'Calcula la FFR.', options: ['0,76', '1,32', '0,24', '0,86'], answer: 0, explain: 'FFR = Pd/Pa en hiperemia máxima = 68/90 ≈ 0,76. Dividir al revés (1,32) o restar a 1 (0,24) son errores habituales.' },
            { type: 'mc', prompt: '¿Qué decisión tomas con esta FFR?', diagram: { id: 'coronary', highlight: 'lad' }, options: ['ICP de la DA media con stent farmacoactivo', 'Tratamiento médico: la lesión no es significativa', 'Repetir la medida en 6 meses', 'Cirugía de revascularización urgente'], answer: 0, explain: 'FFR ≤ 0,80 indica isquemia. En FAME 2, la ICP de lesiones con FFR ≤ 0,80 redujo la revascularización urgente frente al tratamiento médico solo.' },
            { type: 'mc', prompt: 'Si se hubiera medido el iFR (sin vasodilatador), ¿qué valor define una lesión significativa?', options: ['≤ 0,89', '≤ 0,80', '≤ 0,75', '≤ 0,95'], answer: 0, explain: 'El iFR mide Pd/Pa en el periodo diastólico sin ondas (reposo). Su umbral es ≤ 0,89, no 0,80, y evita la adenosina (DEFINE-FLAIR, iFR-SWEDEHEART).' },
            { type: 'tf', prompt: 'En el ensayo FAME, la ICP multivaso guiada por FFR redujo los eventos frente a la guiada por angiografía y usó menos stents.', answer: true, explain: 'Tratar solo las lesiones con isquemia demostrada evita stents innecesarios: menos muerte, IAM o revascularización a 1 año y menos material.' },
            { type: 'match', prompt: 'Relaciona cada dato con su significado', pairs: [['FFR 0,85', 'Diferir: tratamiento médico'], ['FFR 0,72', 'Isquemia: considerar ICP'], ['Adenosina intravenosa', 'Induce hiperemia máxima'], ['iFR', 'Pd/Pa en reposo, en diástole']], explain: 'Diferir la ICP en lesiones con FFR > 0,80 es seguro (DEFER, FAME); el pronóstico depende de la isquemia, no del porcentaje de estenosis.' },
          ],
        },
        {
          id: 'casos-u13-l5',
          title: 'Disección coronaria espontánea en el posparto',
          case: {
            title: 'Mujer de 38 años con dolor torácico 4 semanas tras el parto',
            text: 'Mujer de 38 años, sin factores de riesgo cardiovascular, en lactancia 4 semanas después de su segundo parto. Consulta por dolor torácico opresivo de 2 horas tras una noche sin dormir. TA 125/75 mmHg, FC 88 lpm. ECG con ondas T negativas de V2 a V4; troponina elevada. Ahora sin dolor.',
          },
          questions: [
            { type: 'mc', context: 'Coronariografía: estrechamiento largo (≈ 30 mm), liso y progresivo de la DA media-distal, con segmentos proximal y distal normales y flujo TIMI 3. Arterias tortuosas, sin placas.', prompt: '¿Cuál es el diagnóstico más probable?', diagram: { id: 'coronary', highlight: 'lad' }, options: ['Disección coronaria espontánea tipo 2', 'Placa aterosclerótica complicada', 'Espasmo coronario', 'Embolia coronaria'], answer: 0, explain: 'El hematoma intramural comprime la luz y da un estrechamiento largo y liso (tipo 2). El perfil típico es la mujer joven, periparto y sin aterosclerosis.' },
            { type: 'match', prompt: 'Relaciona cada tipo angiográfico de SCAD con su imagen', pairs: [['Tipo 1', 'Doble luz con tinción de la pared'], ['Tipo 2', 'Estrechamiento largo y liso'], ['Tipo 3', 'Corto, simula una placa'], ['Tipo 4', 'Oclusión total']], explain: 'El tipo 2 es el más frecuente. El tipo 3 es el más difícil: puede requerir imagen intracoronaria para distinguirlo de la aterosclerosis.' },
            { type: 'tf', prompt: 'Si hubiera dudas diagnósticas, la imagen intracoronaria (IVUS u OCT) puede aclararlas, pero conlleva riesgo de extender la disección.', answer: true, explain: 'Se reserva para dudas que cambien el manejo, con cuidado al avanzar la guía y el catéter y evitando inyecciones forzadas.' },
            { type: 'mc', prompt: 'Está estable, sin dolor y con flujo TIMI 3. ¿Qué tratamiento indicas?', options: ['Conservador con monitorización varios días', 'ICP inmediata con stent largo', 'Cirugía de revascularización', 'Fibrinólisis intravenosa'], answer: 0, explain: 'La mayoría de las SCAD cicatrizan solas en semanas; la ICP tiene más fracasos (la guía avanza a la falsa luz y el hematoma se propaga). La fibrinólisis puede agravarla.' },
            { type: 'mc', prompt: '¿En qué situación estaría indicada la revascularización?', options: ['Isquemia persistente o inestabilidad hemodinámica', 'Estenosis angiográfica > 50 %', 'Troponina por encima de 5 veces el límite', 'Ondas T negativas en V2–V4'], answer: 0, explain: 'La guía ESC 2023 reserva la ICP para la isquemia continua, la inestabilidad o el flujo reducido con gran miocardio en riesgo; la CRM para la afectación del tronco.' },
            { type: 'mc', prompt: 'Antes del alta, ¿qué estudio complementario está indicado?', options: ['Buscar displasia fibromuscular extracoronaria', 'Coronariografía de control a las 48 h', 'Estudio genético de miocardiopatía', 'Ergometría máxima precoz'], answer: 0, explain: 'La displasia fibromuscular coexiste con frecuencia con la SCAD: se busca con angio-TC o angio-RM de cerebro a pelvis. Se aconsejan betabloqueantes y evitar estrógenos.' }, // REVISAR: el beneficio del betabloqueante en la SCAD se basa en datos observacionales
          ],
        },
        {
          id: 'casos-u13-l6',
          title: 'Trombosis de stent tras suspender la DAPT',
          case: {
            title: 'Varón de 54 años con dolor torácico 3 semanas después de una ICP',
            text: 'Varón de 54 años al que hace 3 semanas se implantó un stent farmacoactivo en la DA proximal por un IAMSEST. Dejó el ticagrelor hace 5 días por disnea y sigue tomando AAS. Acude por dolor torácico intenso de 1 hora. TA 120/80 mmHg, FC 96 lpm. No tiene antecedentes de ictus ni de sangrado; pesa 80 kg.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Qué diagnóstico sospechas?', ecg12: 'stemi-ant', options: ['Trombosis del stent de la DA', 'Reestenosis intrastent', 'Pericarditis tras la ICP', 'Embolia pulmonar'], answer: 0, explain: 'IAMCEST anterior en el territorio del stent tras suspender un P2Y12: trombosis de stent. La reestenosis suele dar angina progresiva meses después.' },
            { type: 'match', prompt: 'Relaciona cada tipo de trombosis de stent (ARC) con su plazo', pairs: [['Aguda', '< 24 h'], ['Subaguda', '24 h – 30 días'], ['Tardía', '30 días – 1 año'], ['Muy tardía', '> 1 año']], explain: 'Esta es subaguda. Las precoces se asocian a factores mecánicos y a la suspensión de la DAPT; las muy tardías, a neoaterosclerosis.' },
            { type: 'mc', prompt: '¿Cuál es el principal predictor de trombosis de stent precoz?', options: ['Suspensión prematura de la DAPT', 'Hipertensión arterial', 'Sexo masculino', 'Uso de stent farmacoactivo'], answer: 0, explain: 'Dejar el inhibidor P2Y12 en el primer mes multiplica el riesgo. Los stents farmacoactivos actuales tienen menos trombosis que los convencionales.' },
            { type: 'tf', context: 'Coronariografía: oclusión trombótica dentro del stent de la DA (TIMI 0); tras paso de guía y balón, TIMI 3. IVUS: área mínima del stent 4,1 mm², el 60 % del área de referencia.', prompt: 'La imagen intracoronaria ayuda a identificar la causa mecánica de la trombosis, como aquí la infraexpansión.', answer: true, explain: 'IVUS u OCT muestran infraexpansión, malaposición o disección de borde; corregirlas evita la recurrencia.' },
            { type: 'mc', prompt: '¿Cómo tratas la infraexpansión del stent?', diagram: { id: 'coronary', highlight: 'lad' }, options: ['Posdilatación con balón no distensible a alta presión', 'Tromboaspiración sistemática como único tratamiento', 'Fibrinólisis intracoronaria', 'Ningún tratamiento: el flujo ya es TIMI 3'], answer: 0, explain: 'El balón no distensible a alta presión expande el stent sin sobredistender el vaso. La tromboaspiración sistemática no mejora el pronóstico (TOTAL).' },
            { type: 'mc', prompt: 'Al alta, ¿qué tratamiento antiagregante pautas?', options: ['AAS + prasugrel, con DAPT durante 12 meses', 'AAS en monoterapia por la disnea', 'Ticagrelor solo durante 1 mes', 'Anticoagulación oral en lugar de DAPT'], answer: 0, explain: 'La disnea por ticagrelor es frecuente y benigna; si no se tolera, se cambia de P2Y12, sin suspender la DAPT. Prasugrel requiere no tener ictus previo.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u14',
      title: 'Casos de cateterismo: complicaciones y hemodinámica',
      guide: {
        intro: 'El cateterismo no solo abre arterias: mide presiones, saturaciones y gradientes, y tiene complicaciones que hay que reconocer a tiempo. Estos casos repasan el acceso vascular, los cálculos clásicos (Gorlin, Hakki, Fick) y la lectura de las curvas.',
        sections: [
          {
            title: 'Acceso vascular y sus complicaciones',
            points: [
              'La arteria femoral común se punciona sobre la cabeza femoral, por debajo del ligamento inguinal y por encima de la bifurcación.',
              'Punción alta → hematoma retroperitoneal (hipotensión, dolor lumbar o en flanco, caída de Hb, a veces sin hematoma visible). Diagnóstico con TC; si hay inestabilidad, angiografía y tratamiento endovascular.',
              'Punción baja → pseudoaneurisma (masa pulsátil, flujo "yin-yang") o fístula arteriovenosa (soplo continuo).',
              'Pseudoaneurisma: si es pequeño (< 2 cm) puede cerrarse solo; si no, inyección de trombina ecoguiada; cirugía si hay infección, crecimiento rápido o isquemia.',
              'El acceso radial reduce el sangrado, las complicaciones vasculares y la mortalidad en el SCA (MATRIX).',
            ],
            tip: 'Hipotensión y taquicardia tras un acceso femoral sin hematoma visible: piensa en el retroperitoneo.',
          },
          {
            title: 'Estenosis aórtica en sala',
            points: [
              'El cateterismo se reserva para cuando la eco y la TC no son concluyentes; cruzar la válvula estenótica tiene riesgo embólico.',
              'Gorlin: AVA = GC / (FC × PES × 44,3 × √gradiente medio), con el GC en ml/min y el periodo de eyección sistólica (PES) en s.',
              'Hakki (aproximación): AVA ≈ GC (l/min) / √gradiente.',
              'El gradiente pico a pico no es simultáneo y es menor que el pico instantáneo del Doppler; para comparar con la eco usa el gradiente medio.',
              'Signo de Carabello: la presión aórtica sube > 5 mmHg al retirar el catéter del VI en la EA grave.',
            ],
            tip: 'Con bajo gasto, Gorlin infraestima el área: valora el flujo antes de concluir.',
          },
          {
            title: 'Oximetría y ondas v',
            points: [
              'Salto oximétrico significativo a nivel auricular: ≥ 7 % entre venas cavas y AD; en VD y AP, ≥ 5 %.',
              'Saturación venosa mixta proximal al shunt (Flamm): (3 × VCS + VCI) / 4.',
              'Qp/Qs = (SatAo − SatVM) / (SatVP − SatAP); RVP = (PAPm − PCP) / Qp, en unidades Wood.',
              'CIA con sobrecarga de VD y RVP < 3 UW: cierre (ESC ACHD 2020); los defectos seno venoso se cierran con cirugía.',
              'Onda v gigante en la PCP: IM aguda en una AI no distensible; no es específica (CIV, estenosis mitral) y puede faltar en la IM crónica.',
            ],
            tip: 'Onda v gigante en un IAM: busca el salto oximétrico en el VD para distinguir la IM de la CIV.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u14-l1',
          title: 'Hipotensión tras un acceso femoral',
          case: {
            title: 'Mujer de 79 años que se hipotensa tras una ICP',
            text: 'Mujer de 79 años, 52 kg, con enfermedad renal crónica, ingresada por IAMSEST. Tras fracasar el acceso radial por espasmo, se le hace ICP de la circunfleja por vía femoral derecha con heparina. Tres horas después: TA 85/50 mmHg, FC 112 lpm, dolor lumbar y en el flanco derecho, sin hematoma inguinal visible. Hb de 12,8 a 9,1 g/dl.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué complicación sospechas?', options: ['Hematoma retroperitoneal', 'Reacción vasovagal', 'Pseudoaneurisma femoral', 'Fístula arteriovenosa femoral'], answer: 0, explain: 'Hipotensión, taquicardia, dolor lumbar y caída de Hb sin hematoma visible sugieren sangrado retroperitoneal. La reacción vagal cursa con bradicardia.' },
            { type: 'tf', prompt: 'Una punción por encima del ligamento inguinal favorece el sangrado retroperitoneal, porque la arteria no puede comprimirse contra la cabeza femoral.', answer: true, explain: 'Por eso se punciona la femoral común sobre la cabeza femoral, mejor con guía ecográfica o radioscópica.' },
            { type: 'mc', prompt: 'Responde a la fluidoterapia. ¿Qué prueba confirma el diagnóstico?', options: ['TC abdominopélvica con contraste', 'Radiografía simple de abdomen', 'Eco Doppler de la arteria radial', 'Gammagrafía con hematíes marcados'], answer: 0, explain: 'La TC muestra el hematoma y si hay extravasación activa. Si la paciente estuviera inestable, se iría directamente a angiografía por la femoral contralateral.' },
            { type: 'mc', context: 'TC: hematoma retroperitoneal derecho de 9 cm, sin extravasación de contraste. Sigue estable con sueroterapia.', prompt: '¿Qué manejo indicas?', options: ['Suspender la anticoagulación, reponer y vigilar Hb', 'Compresión manual de la ingle durante 1 hora', 'Cirugía abierta inmediata', 'Aumentar la dosis de heparina'], answer: 0, explain: 'La mayoría se resuelven con medidas conservadoras y transfusión si hace falta. El balón o el stent recubierto se reservan para el sangrado activo o la inestabilidad.' },
            { type: 'mc', prompt: 'En otro paciente aparece al día siguiente una masa inguinal pulsátil. Eco Doppler: cavidad de 3 cm con flujo "yin-yang" y cuello estrecho. ¿Qué tratamiento eliges?', options: ['Inyección de trombina guiada por eco', 'Cirugía vascular urgente', 'Observación sin control posterior', 'Anticoagulación a dosis plenas'], answer: 0, explain: 'La trombina ecoguiada cierra la mayoría de los pseudoaneurismas con cuello estrecho. Los < 2 cm pueden cerrarse solos; la cirugía queda para infección o isquemia.' },
            { type: 'match', prompt: 'Relaciona cada concepto con su hallazgo', pairs: [['Hematoma retroperitoneal', 'Dolor lumbar y caída de Hb'], ['Pseudoaneurisma', 'Masa pulsátil con flujo "yin-yang"'], ['Fístula arteriovenosa', 'Soplo continuo inguinal'], ['Acceso radial', 'Menos sangrado y mortalidad']], explain: 'La punción alta da sangrado retroperitoneal; la baja, pseudoaneurisma o fístula. El acceso radial evita la mayoría de estas complicaciones.' },
          ],
        },
        {
          id: 'casos-u14-l2',
          title: 'Estenosis aórtica en sala: Gorlin y Hakki',
          case: {
            title: 'Varón de 78 años con disnea y eco no concluyente',
            text: 'Varón de 78 años con EPOC y disnea de esfuerzo en clase NYHA III. Soplo sistólico aórtico rudo con segundo ruido débil. La ventana ecocardiográfica es mala y el diámetro del TSVI no se mide con fiabilidad. El calcio valvular por TC (1700 UA) queda en zona indeterminada para un varón.',
          },
          questions: [
            { type: 'mc', context: 'ETT: válvula calcificada; Vmax 3,8 m/s, gradiente medio 34 mmHg, área por continuidad 0,9 cm². FEVI 58 %; volumen sistólico indexado 40 ml/m².', prompt: '¿Cómo clasificas estos hallazgos?', options: ['Bajo gradiente con flujo normal', 'Grave de alto gradiente', 'Bajo flujo y bajo gradiente con FEVI baja', 'Estenosis ligera'], answer: 0, explain: 'Área < 1 cm² con gradiente < 40 mmHg y VSi > 35 ml/m²: discordancia con flujo normal, a menudo por error de medida del TSVI. Suele ser moderada, pero aquí hay que confirmarlo.' },
            { type: 'mc', context: 'Cateterismo con registro simultáneo de VI y aorta: VI 180/14 mmHg, aorta 112/72 mmHg; gradiente medio 45 mmHg.', prompt: 'Observa el registro. ¿Cuál es el gradiente pico a pico?', pressure: 'as-lv-ao', options: ['68 mmHg', '45 mmHg', '108 mmHg', '166 mmHg'], answer: 0, explain: 'Pico VI − pico Ao = 180 − 112 = 68 mmHg. No es simultáneo y es menor que el pico instantáneo del Doppler; para comparar con la eco se usa el medio.' },
            { type: 'mc', context: 'GC por termodilución 4,0 l/min; FC 72 lpm; periodo de eyección sistólica 0,33 s.', prompt: 'Calcula el área valvular por la fórmula de Gorlin.', options: ['≈ 0,57 cm²', '≈ 0,22 cm²', '≈ 0,08 cm²', '≈ 1,1 cm²'], answer: 0, explain: '4000 / (72 × 0,33) ≈ 168 ml/s; 168 / (44,3 × √45) ≈ 0,57 cm². Usar el GC por segundo, sin FC × PES, da 0,22 cm².' },
            { type: 'mc', prompt: 'Comprueba el resultado con la fórmula simplificada de Hakki.', options: ['≈ 0,60 cm²', '≈ 0,09 cm²', '≈ 1,5 cm²', '≈ 0,30 cm²'], answer: 0, explain: 'AVA ≈ GC / √gradiente = 4,0 / √45 ≈ 0,60 cm², concordante con Gorlin. Sin la raíz cuadrada saldría 0,09 cm².' },
            { type: 'tf', prompt: 'Según la guía ESC/EACTS 2025, la medida invasiva del gradiente aórtico se reserva para cuando las pruebas no invasivas no son concluyentes.', answer: true, explain: 'Cruzar retrógradamente una válvula estenótica puede producir embolias cerebrales; la eco y la TC suelen bastar.' },
            { type: 'mc', context: 'Conclusión: EA grave sintomática. TC con anatomía apta para acceso transfemoral; riesgo quirúrgico intermedio.', prompt: '¿Qué tratamiento recomienda la guía ESC/EACTS 2025?', options: ['TAVI transfemoral tras valorarlo el Heart Team', 'Tratamiento médico y nueva eco en 1 año', 'Valvuloplastia con balón como tratamiento final', 'Recambio quirúrgico obligado por su EPOC'], answer: 0, explain: 'A partir de los 70 años con anatomía transfemoral favorable se prefiere la TAVI. La valvuloplastia aislada solo sirve como puente.' }, // REVISAR: umbral de edad TAVI 70 años (ESC/EACTS 2025)
          ],
        },
        {
          id: 'casos-u14-l3',
          title: 'Salto oximétrico y Qp/Qs',
          case: {
            title: 'Mujer de 34 años con disnea y desdoblamiento fijo del 2R',
            text: 'Mujer de 34 años con disnea de esfuerzo y palpitaciones desde hace 1 año. Soplo sistólico pulmonar suave y desdoblamiento fijo del segundo ruido. ECG con bloqueo incompleto de rama derecha. ETT: VD dilatado sin hipertensión pulmonar estimada, sin defecto visible en el septo interauricular. Se hace cateterismo derecho con oximetría.',
          },
          questions: [
            { type: 'tf', context: 'Curva de AD: ondas a y v normales, presión media 5 mmHg.', prompt: 'Observa la curva. Un shunt auricular amplio con RVP normal es compatible con presiones derechas normales.', pressure: 'ra', answer: true, explain: 'La CIA produce sobrecarga de volumen, no de presión: el VD se dilata con presiones normales mientras la RVP se mantenga baja.' },
            { type: 'mc', context: 'Saturaciones de O₂: VCS 68 %, VCI 76 %, AD 84 %, VD 84 %, AP 84 %, aorta 97 %.', prompt: '¿Dónde está el salto oximétrico?', options: ['Entre las venas cavas y la AD', 'Entre la AD y el VD', 'Entre el VD y la AP', 'No hay salto significativo'], answer: 0, explain: 'La saturación sube del 70 % (venosa mixta) al 84 % en la AD, un salto ≥ 7 %: shunt izquierda-derecha auricular.' },
            { type: 'mc', prompt: 'Calcula la saturación venosa mixta proximal al shunt (fórmula de Flamm).', options: ['70 %', '72 %', '68 %', '84 %'], answer: 0, explain: '(3 × VCS + VCI) / 4 = (204 + 76) / 4 = 70 %. La media simple de VCS y VCI (72 %) sobrevalora el aporte de la VCI.' },
            { type: 'mc', prompt: 'Asumiendo una saturación de venas pulmonares del 98 %, calcula el Qp/Qs.', options: ['≈ 1,9', '≈ 0,5', '≈ 1,2', '≈ 3,2'], answer: 0, explain: 'Qp/Qs = (97 − 70) / (98 − 84) = 27 / 14 ≈ 1,9. Un Qp/Qs ≥ 1,5 indica un shunt significativo; invertir la fórmula da 0,5.' },
            { type: 'mc', context: 'PAP media 20 mmHg; PCP 9 mmHg; Qp por Fick 8,4 l/min (Qs 4,4 l/min).', prompt: 'Calcula la resistencia vascular pulmonar.', options: ['≈ 1,3 UW', '≈ 2,5 UW', '≈ 11 UW', '≈ 0,13 UW'], answer: 0, explain: 'RVP = (PAPm − PCP) / Qp = 11 / 8,4 ≈ 1,3 UW. Usar el Qs (2,5 UW) es el error típico cuando hay shunt.' },
            { type: 'mc', context: 'Resonancia: CIA tipo seno venoso superior con drenaje anómalo de la vena pulmonar superior derecha a la VCS.', prompt: '¿Qué tratamiento indicas?', options: ['Corrección quirúrgica del defecto y del drenaje', 'Dispositivo percutáneo de CIA ostium secundum', 'Seguimiento: no tiene hipertensión pulmonar', 'Tratamiento vasodilatador pulmonar'], answer: 0, explain: 'Con sobrecarga de VD y RVP < 3 UW se indica el cierre (ESC ACHD 2020). El seno venoso no tiene bordes para un dispositivo y asocia drenaje venoso anómalo.' },
          ],
        },
        {
          id: 'casos-u14-l4',
          title: 'IM aguda: onda v gigante',
          case: {
            title: 'Varón de 68 años con edema agudo de pulmón tras un IAM inferior',
            text: 'Varón de 68 años que llegó con 20 horas de evolución de un IAMCEST inferior; se trató con ICP de la CD. Al tercer día presenta disnea brusca, crepitantes bilaterales y TA 85/55 mmHg. Soplo holosistólico suave en el ápex, irradiado a la axila, sin frémito.',
          },
          questions: [
            { type: 'mc', prompt: '¿Qué músculo papilar se rompe con más frecuencia en un IAM inferior y por qué?', diagram: { id: 'coronary', highlight: 'pda' }, options: ['Posteromedial: irrigación única por la DP', 'Anterolateral: irrigación única por la DA', 'Posteromedial: doble irrigación (DA y Cx)', 'Anterolateral: irrigación única por la CD'], answer: 0, explain: 'El papilar posteromedial depende solo de la descendente posterior; el anterolateral recibe ramas de la DA y de la Cx, por eso se rompe menos.' },
            { type: 'mc', context: 'Swan-Ganz: PCP media ≈ 22 mmHg con ondas v que llegan a ≈ 37 mmHg; PAP 50/24 mmHg.', prompt: 'Observa la curva de PCP. ¿Qué explica la onda v gigante?', pressure: 'pcwp-v', options: ['Insuficiencia en una AI pequeña y poco distensible', 'Contracción auricular con la mitral cerrada', 'Constricción pericárdica', 'Estenosis valvular pulmonar'], answer: 0, explain: 'La sangre regurgitada en sístole entra en una AI no dilatada y eleva mucho la presión (onda v). La onda a en cañón sería por contracción auricular contra la válvula cerrada.' },
            { type: 'tf', context: 'Oximetría: AD 62 %, AP 63 %; sin salto oximétrico.', prompt: 'La ausencia de salto oximétrico orienta a IM aguda y no a CIV posinfarto, aunque ambas pueden dar ondas v gigantes.', answer: true, explain: 'En la CIV la sangre oxigenada pasa al VD y la saturación de la AP sube; las ondas v aparecen también por el aumento del retorno a la AI.' },
            { type: 'tf', prompt: 'Una onda v gigante en la PCP es específica de IM grave.', answer: false, explain: 'Puede verse en la CIV, la estenosis mitral o la AI rígida, y faltar en la IM crónica grave con AI grande y distensible.' },
            { type: 'mc', context: 'ETT: rotura de la cabeza del músculo papilar posteromedial con velo mitral "flail" e IM grave. FEVI 50 %.', prompt: '¿Qué tratamiento indicas?', options: ['Cirugía mitral urgente, con soporte como puente', 'Tratamiento médico y cirugía a las 6 semanas', 'Diuréticos y alta cuando mejore', 'Reparación percutánea programada a 3 meses'], answer: 0, explain: 'La rotura de papilar es indicación de cirugía urgente (ESC 2023). El BCIA, el soporte mecánico o los vasodilatadores estabilizan mientras tanto.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo hemodinámico con su causa', pairs: [['Onda v gigante sin salto oximétrico', 'IM aguda'], ['Salto oximétrico en el VD', 'CIV posinfarto'], ['Igualación de presiones diastólicas', 'Taponamiento cardiaco'], ['Ondas a en cañón', 'Disociación AV']], explain: 'En la IM aguda, la presión de llenado del VI se estima mejor antes de la onda v que con la PCP media.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u15',
      title: 'Casos de ECG: patrones que no puedes pasar por alto',
      guide: {
        intro: 'Algunos ECG anuncian una oclusión coronaria o una muerte súbita sin cumplir los criterios clásicos de elevación del ST. Reconocerlos (Wellens, de Winter, IAM posterior, Brugada) y distinguirlos de variantes normales (repolarización precoz) cambia la decisión.',
        sections: [
          {
            title: 'Equivalentes de oclusión coronaria',
            points: [
              'Wellens: T bifásicas (tipo A) o negativas profundas y simétricas (tipo B) en V2–V3, sin Q ni elevación relevante del ST, en un paciente ya sin dolor. Estenosis crítica proximal de la DA.',
              'Wellens contraindica la ergometría: coronariografía precoz (< 24 h si hay elevación de troponina, inmediata si reaparece el dolor).',
              'De Winter: descenso del ST ascendente en el punto J de V1–V6 con T altas y simétricas, y ST ↑ en aVR. Oclusión proximal de la DA: ICP primaria como en un IAMCEST.',
              'IAM posterior: descenso horizontal del ST en V1–V3 con R alta y T positiva. Confirma con V7–V9 (elevación ≥ 0,5 mm) y trátalo como IAMCEST.',
              'Tras la reperfusión puede aparecer un RIVA (QRS ancho regular a 50–110 lpm): es benigno y no requiere antiarrítmicos.',
            ],
            tip: 'Ante dolor torácico con ECG dudoso, repite el ECG cada 15–30 min: los patrones evolucionan.',
          },
          {
            title: 'Síndrome de Brugada',
            points: [
              'Solo el patrón tipo 1 (ST "en cúpula" ≥ 2 mm con T negativa en V1–V2) es diagnóstico; el tipo 2 ("en silla de montar") no lo es.',
              'Registrar V1–V2 en el 2.º y 3.º espacio intercostal aumenta la sensibilidad.',
              'La fiebre y los bloqueantes de los canales de sodio (flecainida, tricíclicos, algunos anestésicos), la cocaína y el exceso de alcohol lo desenmascaran: antitérmicos precoces y evitar fármacos.',
              'DAI (ESC 2022): recomendado tras parada cardiaca o TV sostenida; a considerar con tipo 1 espontáneo y síncope arrítmico. No en el asintomático sin otros datos de riesgo.',
              'Cribado ECG de los familiares de primer grado.',
            ],
          },
          {
            title: 'Repolarización precoz y ECG del deportista',
            points: [
              'Repolarización precoz: muesca o empastamiento del punto J ≥ 1 mm en ≥ 2 derivaciones inferiores o laterales, ST cóncavo y T altas, sin imagen especular ni descenso del PR.',
              'Frente a la pericarditis: en esta, ST ↑ difuso con descenso del PR; un cociente ST/T en V6 > 0,25 orienta a pericarditis.',
              'Cambios normales del entrenamiento: bradicardia sinusal, BAV de 1.er grado, BRD incompleto, criterio aislado de voltaje de HVI y repolarización precoz.',
              'Requieren estudio: T negativas laterales o inferolaterales, descenso del ST, Q patológicas, BRI, preexcitación, QTc ≥ 470 ms (varón), Brugada tipo 1 o ≥ 2 EV.',
            ],
            tip: 'Compara siempre con ECG previos: la repolarización precoz es estable en el tiempo; el IAM evoluciona.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u15-l1',
          title: 'Patrón de Wellens: la DA en peligro',
          case: {
            title: 'Varón de 54 años que ya no tiene dolor',
            text: 'Varón de 54 años, fumador y dislipémico. Hace 36 horas tuvo un dolor opresivo retroesternal en reposo de 25 minutos que cedió solo; ayer tuvo otro episodio más corto. Acude a urgencias asintomático. TA 142/86 mmHg, FC 74 lpm, exploración normal.',
          },
          questions: [
            { type: 'mc', prompt: 'ECG en urgencias, sin dolor. ¿Qué patrón muestran V2–V3?', ecg12: 'wellens-a', options: ['Wellens tipo A: T bifásicas', 'Brugada tipo 1', 'IAMCEST anterior evolucionado', 'Repolarización precoz'], answer: 0, explain: 'T bifásicas (positiva-negativa) en V2–V3 sin elevación del ST ni Q, en un paciente sin dolor tras un episodio anginoso: Wellens tipo A (≈ 25 % de los casos).' },
            { type: 'mc', context: 'A las 6 h, sin dolor, se repite el ECG.', prompt: '¿Qué ha cambiado y qué significa?', ecg12: 'wellens', options: ['T negativas profundas: Wellens tipo B, misma lesión', 'Normalización: se descarta isquemia', 'Elevación del ST: IAMCEST anterior', 'Q en V1–V3: necrosis transmural'], answer: 0, explain: 'El tipo A suele evolucionar al tipo B (T negativas profundas y simétricas). Ambos traducen reperfusión espontánea de una DA proximal críticamente estenosada.' },
            { type: 'mc', prompt: '¿Qué arteria tiene con más probabilidad una estenosis crítica?', diagram: { id: 'coronary', highlight: 'lad' }, options: ['Descendente anterior proximal', 'Circunfleja distal', 'Coronaria derecha media', 'Rama marginal obtusa'], answer: 0, explain: 'Las alteraciones de la T en V2–V3 reflejan la cara anterior. Sin revascularización, buena parte de estos pacientes desarrolla un IAM anterior extenso en semanas.' },
            { type: 'tf', prompt: 'Como el paciente está asintomático y el ST no está elevado, una ergometría es la prueba adecuada para estratificarlo.', answer: false, explain: 'La prueba de esfuerzo está contraindicada en el patrón de Wellens: puede precipitar la oclusión de la DA. El camino es la coronariografía.' },
            { type: 'mc', context: 'Troponina T ultrasensible: 38 ng/L a la llegada y 61 ng/L a la hora.', prompt: '¿Cuál es la estrategia adecuada según la ESC 2023?', options: ['Coronariografía en < 24 h (alto riesgo)', 'Coronariografía inmediata (< 2 h)', 'Alta y TC coronaria ambulatoria', 'Ergometría si la troponina se normaliza'], answer: 0, explain: 'Un IAMSEST con cambios dinámicos de la T es de alto riesgo: estrategia invasiva precoz (< 24 h). Sería inmediata si reaparece el dolor o hay inestabilidad.' },
            { type: 'tf', prompt: 'Debe pretratarse de rutina con un inhibidor P2Y12 antes de la coronariografía, aunque se desconozca la anatomía.', answer: false, explain: 'La ESC 2023 no recomienda el pretratamiento rutinario en el SCASEST si se prevé coronariografía precoz: AAS y anticoagulación parenteral, y el P2Y12 tras conocer la anatomía.' }, // Fuente: ESC SCA 2023 (clase III)
          ],
        },
        {
          id: 'casos-u15-l2',
          title: 'Patrón de de Winter: un IAMCEST sin elevación del ST',
          case: {
            title: 'Varón de 57 años con dolor opresivo en curso',
            text: 'Varón de 57 años, hipertenso y fumador, que llama al 112 por dolor opresivo retroesternal irradiado al brazo izquierdo desde hace 45 minutos, con sudoración fría. TA 150/90 mmHg, FC 88 lpm, SatO₂ 96 %. El hospital más cercano tiene sala de hemodinámica 24 h a 25 minutos.',
          },
          questions: [
            { type: 'mc', prompt: 'ECG prehospitalario. ¿Cuál es la interpretación correcta?', ecg12: 'dewinter', options: ['Patrón de de Winter: oclusión proximal de la DA', 'Descenso del ST por isquemia subendocárdica', 'Hiperpotasemia con T picudas', 'Variante normal: T altas de vagotonía'], answer: 0, explain: 'Descenso del ST ascendente en el punto J de V1–V6 que se continúa con T altas y simétricas, con ST ↑ en aVR. Aparece en ≈ 2 % de las oclusiones agudas de la DA proximal.' },
            { type: 'tf', prompt: 'Al no haber elevación del ST en precordiales, debe manejarse como un SCASEST con coronariografía en las primeras 24 h.', answer: false, explain: 'El patrón de de Winter es un equivalente de IAMCEST: se activa el código infarto para ICP primaria, igual que con un BRI y clínica isquémica.' },
            { type: 'match', prompt: 'Relaciona cada objetivo de tiempo (ESC 2023) con su valor', pairs: [['Diagnóstico → guía en centro con ICP', '≤ 60 min'], ['Diagnóstico → guía si hay traslado', '≤ 90 min'], ['Retraso máximo para preferir la ICP', '≤ 120 min'], ['Diagnóstico → bolo de fibrinolítico', '≤ 10 min']], explain: 'Si no puede hacerse la ICP primaria en ≤ 120 min desde el diagnóstico, se recomienda fibrinólisis en ≤ 10 min (sin contraindicaciones).' }, // Fuente: ESC SCA 2023
            { type: 'mc', context: 'Coronariografía: oclusión trombótica de la DA proximal. Se implanta un stent con flujo TIMI 3.', prompt: 'A los 20 min aparece este ritmo en el monitor, con TA 128/78 mmHg y sin síntomas. ¿Qué es?', ecg: 'ivr', options: ['Ritmo idioventricular acelerado', 'Taquicardia ventricular monomorfa', 'Bloqueo AV completo con escape', 'Fibrilación auricular preexcitada'], answer: 0, explain: 'QRS anchos regulares sin P previas a ≈ 70 lpm: RIVA. Es la arritmia típica de la reperfusión y suele autolimitarse.' },
            { type: 'tap', prompt: 'Toca uno de los QRS anchos del ritmo idioventricular', ecg: 'ivr', wave: 'vent', explain: 'Un foco ventricular "acelerado" (50–110 lpm) toma el mando al superar la frecuencia sinusal; por eso no hay ondas P delante de los QRS.' },
            { type: 'mc', prompt: '¿Cuál es el manejo adecuado de este ritmo?', options: ['Observación con monitorización', 'Amiodarona IV en bolo', 'Cardioversión eléctrica sincronizada', 'Lidocaína IV en perfusión'], answer: 0, explain: 'El RIVA es benigno y hemodinámicamente bien tolerado; suprimirlo puede dejar al paciente sin ritmo de escape. Solo se trata si hay compromiso hemodinámico.' },
          ],
        },
        {
          id: 'casos-u15-l3',
          title: 'IAM posterior: mira la espalda',
          case: {
            title: 'Mujer de 66 años con dolor torácico y un ECG "sin ST elevado"',
            text: 'Mujer de 66 años, diabética e hipertensa, con dolor opresivo interescapular y retroesternal desde hace 70 minutos y náuseas. TA 118/72 mmHg, FC 64 lpm. El primer ECG se informa como "descenso del ST en V1–V3, sin elevación del ST".',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Qué sugiere la combinación de hallazgos en V1–V3?', ecg12: 'posterior', options: ['IAM posterior (imagen especular)', 'Isquemia subendocárdica anterior', 'Bloqueo de rama derecha', 'Hipertrofia del ventrículo derecho'], answer: 0, explain: 'Descenso horizontal del ST con R alta y ancha (R/S > 1 en V2) y T positiva: es la imagen en espejo de la elevación del ST y de la onda Q de la pared posterior.' },
            { type: 'mc', prompt: '¿Qué harías a continuación para confirmar el diagnóstico?', options: ['Registrar V7–V9', 'Registrar V3R y V4R', 'Esperar la segunda troponina', 'Hacer una ergometría precoz'], answer: 0, explain: 'Las derivaciones posteriores (V7 línea axilar posterior, V8 punta de la escápula, V9 paravertebral, en el 5.º espacio) miran directamente la pared posterolateral.' },
            { type: 'mc', context: 'V7–V9: elevación del ST de 1 mm en V8 y V9.', prompt: '¿Cuál es el umbral de elevación del ST en V7–V9 para el diagnóstico de IAMCEST?', options: ['≥ 0,5 mm', '≥ 2 mm', '≥ 1,5 mm en mujeres', '≥ 2,5 mm en < 40 años'], answer: 0, explain: 'En las derivaciones posteriores los voltajes son menores: basta una elevación ≥ 0,5 mm (≥ 1 mm en varones < 40 años). Esta paciente tiene un IAMCEST posterior: ICP primaria.' }, // Fuente: ESC SCA 2023 / 4.ª definición universal de IAM
            { type: 'mc', prompt: '¿Cuál es la arteria culpable más probable de un IAM posterior aislado?', diagram: { id: 'coronary', highlight: 'cx' }, options: ['Circunfleja', 'Descendente anterior', 'Primera diagonal', 'Tronco común izquierdo'], answer: 0, explain: 'La pared posterolateral depende de la Cx (o de la CD si es muy dominante). La Cx es la arteria "eléctricamente silente": su oclusión a menudo no eleva el ST en el ECG estándar.' },
            { type: 'tf', prompt: 'Un ECG de 12 derivaciones sin elevación del ST excluye una oclusión coronaria aguda en un paciente con dolor persistente.', answer: false, explain: 'Hasta un cuarto de las oclusiones de la Cx no elevan el ST. El dolor refractario o la inestabilidad indican coronariografía inmediata (< 2 h) aunque el ECG no sea diagnóstico.' },
            { type: 'match', prompt: 'Relaciona cada derivación con la cara que explora', pairs: [['II, III, aVF', 'Inferior'], ['V1–V4', 'Anterior y septal'], ['I, aVL, V5–V6', 'Lateral'], ['V7–V9', 'Posterior']], explain: 'En el ECG estándar la pared posterior solo se ve en espejo (V1–V3); V7–V9 la exploran directamente.' },
          ],
        },
        {
          id: 'casos-u15-l4',
          title: 'Brugada desenmascarado por la fiebre',
          case: {
            title: 'Varón de 36 años con gripe y palpitaciones',
            text: 'Varón de 36 años, sin antecedentes personales, que consulta por fiebre de 39,4 °C, mialgias y tos de 2 días, con palpitaciones aisladas. No ha tenido síncopes. Su padre falleció de forma súbita mientras dormía a los 42 años, con autopsia sin hallazgos. TA 126/74 mmHg, FC 104 lpm.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa V1–V2. ¿Qué patrón muestran?', ecg12: 'brugada1', options: ['Brugada tipo 1 ("en cúpula")', 'Brugada tipo 2 ("en silla de montar")', 'Bloqueo de rama derecha completo', 'IAMCEST anteroseptal'], answer: 0, explain: 'Elevación del punto J ≥ 2 mm con ST convexo y descendente que termina en T negativa en V1–V2: patrón tipo 1, el único diagnóstico. No hay S ancha en I ni V6 como en el BRD.' },
            { type: 'tf', prompt: 'Registrar V1 y V2 en el 2.º y 3.º espacio intercostal aumenta la sensibilidad para detectar el patrón tipo 1.', answer: true, explain: 'El TSVD, donde asienta el sustrato, queda a menudo por encima de la posición estándar. El tipo 1 cuenta como diagnóstico en V1–V2 registradas del 2.º al 4.º espacio.' },
            { type: 'mc', prompt: '¿Cuál es la primera medida en urgencias?', options: ['Antitérmicos y monitorización del ritmo', 'Flecainida IV para controlar las palpitaciones', 'Implante urgente de un DAI', 'Ajmalina para confirmar el diagnóstico'], answer: 0, explain: 'La fiebre aumenta el riesgo de FV en el Brugada: se trata de inmediato con antitérmicos y se monitoriza hasta que el patrón se resuelva. Los bloqueantes del sodio lo empeoran.' },
            { type: 'match', prompt: 'Relaciona cada situación con su efecto sobre el patrón de Brugada', pairs: [['Fiebre', 'Lo desenmascara'], ['Flecainida o ajmalina', 'Lo induce (test diagnóstico)'], ['Isoproterenol', 'Trata la tormenta eléctrica'], ['Quinidina', 'Reduce arritmias recurrentes']], explain: 'El isoproterenol aumenta la corriente de calcio y estabiliza la tormenta arrítmica; la quinidina bloquea Ito y se usa si hay choques recurrentes o no se acepta el DAI.' },
            { type: 'tf', context: 'Con paracetamol y desaparición de la fiebre, el ECG vuelve a un patrón no diagnóstico. ETT normal.', prompt: 'Al tener un familiar con muerte súbita, está indicado implantarle un DAI aunque nunca haya tenido síncope.', answer: false, explain: 'La historia familiar apoya el diagnóstico, pero no indica DAI por sí sola. El DAI se recomienda tras parada o TV sostenida y se considera con tipo 1 espontáneo y síncope arrítmico (ESC 2022).' }, // Fuente: ESC arritmias ventriculares/MS 2022
            { type: 'mc', prompt: '¿Qué recomendación le das al alta?', options: ['Tratar pronto la fiebre y evitar fármacos que bloquean el sodio', 'Evitar todo ejercicio físico de por vida', 'Tomar betabloqueantes de forma indefinida', 'Ninguna: el patrón ha desaparecido'], answer: 0, explain: 'Medidas generales: antitérmicos precoces, evitar la lista de fármacos de riesgo (brugadadrugs.org), la cocaína, el exceso de alcohol y las comidas copiosas. Además, ECG a familiares de primer grado.' },
          ],
        },
        {
          id: 'casos-u15-l5',
          title: 'Repolarización precoz en un deportista',
          case: {
            title: 'Futbolista de 21 años en el reconocimiento previo a la temporada',
            text: 'Varón de 21 años, futbolista semiprofesional que entrena 12 horas a la semana. Asintomático: sin dolor torácico, palpitaciones ni síncope. Sin antecedentes familiares de muerte súbita ni cardiopatía. FC 56 lpm, TA 118/68 mmHg, exploración normal. El médico del club pide tu opinión sobre su ECG.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Cuál es la interpretación más adecuada?', ecg12: 'early-repol', options: ['Repolarización precoz: variante normal', 'Pericarditis aguda', 'IAMCEST inferolateral', 'Patrón de Brugada tipo 1'], answer: 0, explain: 'Muesca del punto J con ST cóncavo y T altas en derivaciones inferiores y V4–V6, sin descenso especular del ST ni del PR, en un joven entrenado con bradicardia.' },
            { type: 'match', prompt: 'Clasifica cada hallazgo en un deportista según los criterios internacionales', pairs: [['Bradicardia sinusal de 45 lpm', 'Normal (entrenamiento)'], ['T negativas en V5–V6', 'Anormal: estudiar'], ['BRD incompleto', 'Normal (adaptación)'], ['Onda delta', 'Anormal: preexcitación']], explain: 'Las T negativas laterales pueden ser la primera manifestación de una miocardiopatía y obligan a hacer ETT (y a menudo RM), aunque el deportista esté asintomático.' },
            { type: 'mc', prompt: 'Este ECG es de otro paciente con dolor torácico pleurítico. ¿Qué dato lo distingue de la repolarización precoz?', ecg12: 'pericarditis', options: ['Descenso del PR y ST elevado difuso', 'Muesca del punto J en V4', 'Ondas T altas en V2–V3', 'Bradicardia sinusal'], answer: 0, explain: 'En la pericarditis la elevación del ST es difusa, con descenso del PR (y PR elevado en aVR). Un cociente ST/T en V6 > 0,25 también orienta a pericarditis.' },
            { type: 'tf', prompt: 'La repolarización precoz se diferencia de un IAMCEST porque no tiene imagen especular y es estable en ECG seriados.', answer: true, explain: 'El IAMCEST evoluciona en minutos u horas y suele tener descenso especular del ST. Comparar con un ECG previo es la herramienta más útil.' },
            { type: 'mc', prompt: '¿Qué hallazgo convertiría el patrón en "síndrome de repolarización precoz"?', options: ['Haber sobrevivido a una FV sin otra causa', 'Que la muesca J mida 1,5 mm', 'Que aparezca en V4–V6', 'Que desaparezca con el esfuerzo'], answer: 0, explain: 'Según la ESC 2022, el síndrome se diagnostica cuando el patrón se asocia a una FV o TV polimórfica inexplicada recuperada. Un ST horizontal o descendente tras el punto J se asocia a más riesgo.' }, // Fuente: ESC arritmias ventriculares/MS 2022
            { type: 'mc', prompt: '¿Qué decides sobre este futbolista?', options: ['Apto: no precisa más pruebas', 'Ecocardiograma y RM antes de competir', 'Holter y ergometría obligatorios', 'Suspender la competición 6 meses'], answer: 0, explain: 'La repolarización precoz asintomática, sin historia familiar ni otros hallazgos, es un cambio benigno del entrenamiento: no requiere estudio adicional ni restringir el deporte.' },
          ],
        },
      ],
    },
    {
      id: 'casos-u16',
      title: 'Casos de ECG: iones, fármacos, marcapasos y síncope',
      guide: {
        intro: 'Muchas arritmias tienen una causa externa que se corrige: un ion, un fármaco o un dispositivo. Otras, como el síncope con bloqueo bifascicular o el TEP, exigen leer el ECG dentro del contexto clínico para estratificar el riesgo.',
        sections: [
          {
            title: 'Iones y digoxina',
            points: [
              'Hipopotasemia: T aplanadas, ondas U prominentes (V2–V3), descenso del ST y QU largo. Favorece EV, torsade de pointes y la toxicidad digitálica.',
              'Repón K⁺ IV sin glucosa (la insulina lo mete en la célula), ≤ 10 mEq/h por vía periférica, y corrige siempre el magnesio: sin Mg el K⁺ no se recupera.',
              'Torsade: sulfato de magnesio 2 g IV aunque el Mg sea normal; si es sostenida, desfibrilación.',
              'Digoxina: el ST "en cubeta" es efecto, no toxicidad. Toxicidad: EV y bigeminismo, taquicardia auricular con bloqueo, FA "regularizada", TV bidireccional, bradicardia y BAV.',
              'Precipitantes: insuficiencia renal, hipopotasemia, edad avanzada, amiodarona, verapamilo. Arritmia grave, hiperpotasemia o daño orgánico: anticuerpos antidigoxina (Fab).',
            ],
            tip: 'Hiperpotasemia en una intoxicación digitálica aguda = intoxicación grave (bloqueo de la Na⁺/K⁺-ATPasa).',
          },
          {
            title: 'Marcapasos',
            points: [
              'Código: 1.ª letra cámara estimulada, 2.ª cámara detectada, 3.ª respuesta (I inhibe, T dispara, D ambas); R = respuesta en frecuencia.',
              'Estimulación desde el ápex del VD: espiga + QRS ancho tipo BRI con eje superior.',
              'Síndrome de marcapasos: en VVI con ritmo sinusal, la pérdida de sincronía AV (y la conducción VA) causa mareo, hipotensión y ondas a en cañón. Solución: DDD.',
              'Fallo de captura: espiga sin QRS. Infradetección: espigas que ignoran el ritmo propio. Sobredetección: pausas sin espiga por inhibición inapropiada.',
            ],
          },
          {
            title: 'Síncope de riesgo y TEP',
            points: [
              'Síncope sin pródromos, de esfuerzo o en decúbito, con cardiopatía o ECG anormal = alto riesgo: ingreso y monitorización (ESC 2018).',
              'BRD + HBAI (bifascicular) con síncope inexplicado: EEF; marcapasos si HV ≥ 70 ms o bloqueo infrahisiano inducido. Si es negativo, Holter implantable (ESC 2021).',
              'Mobitz II, BAV avanzado o completo documentados: marcapasos definitivo sin más estudios.',
              'TEP: taquicardia sinusal (lo más frecuente), BRD nuevo, T negativas V1–V4, S1Q3T3 (poco sensible). El ECG no diagnostica el TEP: estratifica junto a sPESI, troponina y función del VD.',
              'TEP de riesgo intermedio-alto: anticoagulación y monitorización; trombólisis solo de rescate si hay deterioro hemodinámico (ESC 2019).',
            ],
            tip: 'En el bifascicular con síncope, la pregunta no es si hay bloqueo, sino si progresa a BAV completo.',
          },
        ],
      },
      lessons: [
        {
          id: 'casos-u16-l1',
          title: 'Hipopotasemia: ondas U y torsade',
          case: {
            title: 'Mujer de 72 años con diarrea y debilidad',
            text: 'Mujer de 72 años, hipertensa en tratamiento con hidroclorotiazida. Desde hace 5 días tiene diarrea acuosa abundante. Consulta por debilidad muscular generalizada y palpitaciones. TA 104/62 mmHg, FC 82 lpm. Analítica: K⁺ 2,3 mEq/L, Mg²⁺ 1,2 mg/dL (bajo), creatinina 1,3 mg/dL.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa el ECG. ¿Qué hallazgo es más característico de su alteración iónica?', ecg12: 'hypok', options: ['Ondas U prominentes en V2–V3', 'T picudas y simétricas', 'QT corto con ST ausente', 'Ondas J de Osborn'], answer: 0, explain: 'La hipopotasemia aplana la T y realza la onda U, sobre todo en V2–V3, con discreto descenso del ST. Las T picudas son de hiperpotasemia.' },
            { type: 'tf', prompt: 'El "QT largo" que se mide en este ECG corresponde en realidad a un intervalo QU, porque la T aplanada se funde con la U.', answer: true, explain: 'Al medirlo hasta el final de la U se sobrestima el QT, pero el riesgo de torsade es real: la hipopotasemia prolonga la repolarización.' },
            { type: 'mc', context: 'En el box de urgencias la monitorización muestra este ritmo.', prompt: '¿Qué ritmo es?', ecg: 'bigeminy', options: ['Bigeminismo ventricular', 'Bloqueo AV de 2.º grado 2:1', 'Fibrilación auricular', 'Extrasístoles auriculares bloqueadas'], answer: 0, explain: 'Cada latido sinusal va seguido de un QRS ancho y prematuro sin P, con acoplamiento fijo. La hipopotasemia aumenta la automaticidad ventricular.' },
            { type: 'mc', context: 'Minutos después presenta un mareo intenso y el monitor registra esto, que cede espontáneamente.', prompt: '¿Cuál es el tratamiento inmediato más adecuado?', ecg: 'torsade', options: ['Sulfato de magnesio 2 g IV y reponer K⁺', 'Amiodarona IV en bolo', 'Procainamida IV', 'Verapamilo IV'], answer: 0, explain: 'Torsade de pointes por QT(U) largo. El magnesio es el tratamiento de elección aunque la magnesemia sea normal; la amiodarona y la procainamida prolongan el QT.' },
            { type: 'mc', prompt: '¿Cómo repones el potasio por una vía periférica?', options: ['KCl en suero salino, ≤ 10 mEq/h y con monitor', 'KCl en suero glucosado al 5 %, en bolo', 'KCl IV directo a 40 mEq/h', 'Solo por vía oral, sin monitor'], answer: 0, explain: 'El suero glucosado estimula la insulina y baja aún más el K⁺. El ritmo máximo habitual por vía periférica es 10 mEq/h; por vía central y con monitor, hasta 20 mEq/h.' },
            { type: 'match', prompt: 'Relaciona cada alteración con su hallazgo ECG', pairs: [['Hipopotasemia', 'Ondas U'], ['Hiperpotasemia', 'T picudas'], ['Hipocalcemia', 'QT largo por ST alargado'], ['Hipercalcemia', 'QT corto']], explain: 'El calcio modifica sobre todo la duración del ST (fase 2); el potasio, la forma de la T y la U.' },
          ],
        },
        {
          id: 'casos-u16-l2',
          title: 'Intoxicación digitálica',
          case: {
            title: 'Mujer de 83 años con náuseas y visión amarilla',
            text: 'Mujer de 83 años con FA permanente e insuficiencia cardiaca, tratada con digoxina 0,25 mg/día, furosemida y apixabán. Hace 3 semanas se añadió amiodarona. Desde hace 4 días tiene náuseas, vómitos, confusión y ve los objetos "amarillentos". TA 106/60 mmHg. Creatinina 2,1 mg/dL (basal 1,1), K⁺ 5,8 mEq/L, digoxinemia 3,4 ng/mL.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa la tira de ritmo. ¿Qué muestra?', ecg: 'afib-slow', options: ['FA con respuesta ventricular lenta', 'Bloqueo AV completo con escape nodal', 'Ritmo sinusal con bradicardia', 'Flutter auricular con bloqueo 4:1'], answer: 0, explain: 'RR irregular sin ondas P y con ondas f, a < 60 lpm. En una paciente con digoxina obliga a pensar en exceso de frenado del nodo AV.' },
            { type: 'match', prompt: 'Clasifica cada hallazgo como efecto o toxicidad de la digoxina', pairs: [['ST "en cubeta"', 'Efecto digitálico'], ['TV bidireccional', 'Toxicidad grave'], ['Taquicardia auricular con bloqueo', 'Toxicidad típica'], ['QT acortado', 'Efecto: repolarización rápida']], explain: 'La digoxina aumenta la automaticidad y frena la conducción AV: la combinación "taquiarritmia + bloqueo" es muy sugestiva de toxicidad.' },
            { type: 'tap', context: 'Durante la observación aparece este ritmo en el monitor.', prompt: 'Toca una extrasístole ventricular', ecg: 'bigeminy', wave: 'vent', explain: 'El bigeminismo ventricular es una de las arritmias más frecuentes de la intoxicación digitálica, por posdespolarizaciones tardías dependientes del calcio intracelular.' },
            { type: 'mc', prompt: '¿Qué factores han precipitado la intoxicación?', options: ['Insuficiencia renal aguda y amiodarona', 'Apixabán y furosemida', 'Hiperpotasemia y apixabán', 'Edad y FA permanente sin más'], answer: 0, explain: 'La digoxina se elimina por vía renal y la amiodarona eleva su concentración (hay que reducir la dosis ≈ 50 %). La hipopotasemia por diuréticos también la potencia.' },
            { type: 'mc', prompt: '¿Qué tratamiento está indicado?', options: ['Anticuerpos antidigoxina (fragmentos Fab)', 'Hemodiálisis para eliminar la digoxina', 'Cardioversión eléctrica', 'Bicarbonato y glucosa hipertónica'], answer: 0, explain: 'Arritmia ventricular, hiperpotasemia y daño orgánico con niveles altos indican Fab antidigoxina. La digoxina no se dializa (gran volumen de distribución).' },
            { type: 'tf', prompt: 'En la insuficiencia cardiaca, la concentración de digoxina recomendada es < 1,2 ng/mL.', answer: true, explain: 'La ESC recomienda niveles < 1,2 ng/mL (idealmente 0,5–0,9): por encima aumentan la toxicidad y la mortalidad sin más beneficio. En ancianos y con ERC, dosis bajas.' }, // Fuente: ESC IC 2021
          ],
        },
        {
          id: 'casos-u16-l3',
          title: 'Ritmo de marcapasos y síndrome de marcapasos',
          case: {
            title: 'Varón de 78 años con mareo tras un marcapasos',
            text: 'Varón de 78 años en ritmo sinusal al que hace 3 meses se implantó un marcapasos monocameral VVI a 60 lpm por BAV paroxístico. Desde entonces refiere cansancio, mareo al levantarse y "latidos en el cuello". En consulta: TA 102/64 mmHg en los latidos estimulados, con ondas a en cañón en el pulso yugular.',
          },
          questions: [
            { type: 'mc', prompt: 'Tira de ritmo en la consulta. ¿Qué muestra?', ecg: 'pacer-vvi', options: ['Estimulación ventricular a 60 lpm', 'Taquicardia ventricular lenta', 'Ritmo idioventricular acelerado', 'Bloqueo de rama izquierda en ritmo sinusal'], answer: 0, explain: 'Cada QRS ancho va precedido de una espiga y la frecuencia coincide con la programada (60 lpm): el marcapasos captura correctamente.' },
            { type: 'tap', prompt: 'Toca una espiga de marcapasos', ecg: 'pacer-vvi', wave: 'spike', explain: 'La espiga es una deflexión vertical muy estrecha justo antes del QRS. Si una espiga no va seguida de QRS, hay fallo de captura.' },
            { type: 'mc', prompt: 'ECG de 12 derivaciones. ¿Por qué el QRS tiene morfología de BRI con eje superior?', ecg12: 'pacer12', options: ['Se estimula desde el ápex del VD', 'Se estimula desde el seno coronario', 'Hay un IAM inferior asociado', 'El cable está en la aurícula derecha'], answer: 0, explain: 'Desde el ápex del VD el VI se activa tarde (patrón BRI) y de abajo arriba (eje superior, negativo en II, III y aVF).' },
            { type: 'match', prompt: 'Relaciona cada letra del código VVI con su significado', pairs: [['1.ª V', 'Estimula el ventrículo'], ['2.ª V', 'Detecta el ventrículo'], ['I', 'Se inhibe si hay latido propio'], ['R (en VVIR)', 'Responde a la actividad física']], explain: 'Un VVI no "ve" la aurícula: estimula el ventrículo sin sincronía con las ondas P.' },
            { type: 'mc', context: 'Las ondas a en cañón coinciden con los latidos estimulados; el ETT es normal.', prompt: '¿Cuál es la causa más probable de los síntomas y qué propones?', options: ['Síndrome de marcapasos: cambiar a DDD', 'Fallo de captura: subir el voltaje', 'Infradetección: aumentar la sensibilidad', 'Ansiedad: tranquilizar y revisar en 1 año'], answer: 0, explain: 'La pérdida de sincronía AV y la conducción ventriculoauricular hacen que la aurícula se contraiga con la tricúspide cerrada. En ritmo sinusal con BAV, la ESC 2021 prefiere la estimulación bicameral.' }, // Fuente: ESC marcapasos y TRC 2021
            { type: 'tap', context: 'Tras implantar un cable auricular y programar DDD, se registra esta tira.', prompt: 'Toca una de las espigas de marcapasos', ecg: 'pacer-ddd', wave: 'spike', explain: 'En DDD hay dos espigas por ciclo: la auricular (seguida de P) y, tras el intervalo AV programado, la ventricular (seguida de QRS ancho).' },
          ],
        },
        {
          id: 'casos-u16-l4',
          title: 'Síncope con bloqueo bifascicular',
          case: {
            title: 'Varón de 76 años que se ha caído sin aviso',
            text: 'Varón de 76 años, hipertenso, que estando sentado viendo la televisión pierde el conocimiento sin pródromos y se golpea la cara. Recupera en menos de un minuto, sin confusión posterior. No toma fármacos bradicardizantes. TA 138/80 mmHg sin ortostatismo, FC 70 lpm, K⁺ normal.',
          },
          questions: [
            { type: 'mc', prompt: 'Observa las precordiales del ECG. ¿Qué trastorno de conducción presenta?', ecg12: 'rbbb', options: ['Bloqueo de rama derecha', 'Bloqueo de rama izquierda', 'Preexcitación ventricular', 'Patrón de Brugada tipo 1'], answer: 0, explain: 'QRS ≥ 120 ms con rSR′ en V1–V2 y S ancha y empastada en I y V6: bloqueo completo de rama derecha.' },
            { type: 'mc', context: 'En el plano frontal su QRS es positivo en I y negativo en II y aVF, como en este trazado.', prompt: '¿Qué indica este eje?', ecg12: 'lad', options: ['Hemibloqueo anterior izquierdo', 'Hemibloqueo posterior izquierdo', 'Eje normal', 'Hipertrofia del ventrículo derecho'], answer: 0, explain: 'Eje ≈ −45° (entre −45° y −90°): hemibloqueo anterior izquierdo. BRD + HBAI = bloqueo bifascicular; solo queda el fascículo posterior.' },
            { type: 'tf', prompt: 'Por sus características, el síncope de este paciente es de alto riesgo y requiere ingreso con monitorización.', answer: true, explain: 'Síncope sin pródromos, con traumatismo y con ECG anormal (bloqueo bifascicular): criterios de alto riesgo de la ESC 2018 que sugieren causa arrítmica.' },
            { type: 'tap', context: 'Durante el ingreso tiene un mareo y la telemetría registra esta tira.', prompt: 'Toca una onda P que no se conduce', ecg: 'mobitz2', wave: 'pBlocked', explain: 'P bloqueada sin alargamiento previo del PR: Mobitz II, con bloqueo infrahisiano en un paciente con enfermedad de ambas ramas.' },
            { type: 'mc', prompt: '¿Qué decisión tomas ahora?', options: ['Marcapasos definitivo', 'Estudio electrofisiológico antes de decidir', 'Holter implantable y revisión', 'Atropina y alta si se resuelve'], answer: 0, explain: 'Un Mobitz II documentado es indicación de marcapasos (clase I, ESC 2021) sin necesidad de más pruebas; la atropina no mejora el bloqueo infrahisiano.' },
            { type: 'match', prompt: 'Si la telemetría hubiera sido normal, relaciona cada resultado con la conducta (ESC 2021)', pairs: [['HV ≥ 70 ms en el EEF', 'Marcapasos'], ['EEF normal', 'Holter implantable'], ['FEVI ≤ 35 % con síncope', 'Valorar DAI o TRC-D'], ['Anciano frágil sin EEF', 'Marcapasos empírico (IIb)']], explain: 'En el bloqueo bifascicular con síncope inexplicado el EEF busca un sistema His-Purkinje enfermo; si es normal, el Holter implantable documenta el ritmo durante el siguiente episodio.' }, // Fuente: ESC marcapasos y TRC 2021
          ],
        },
        {
          id: 'casos-u16-l5',
          title: 'TEP: lo que el ECG dice y lo que no',
          case: {
            title: 'Mujer de 67 años con disnea súbita tras una prótesis de cadera',
            text: 'Mujer de 67 años, operada hace 6 días de una prótesis total de cadera, que presenta disnea brusca y dolor pleurítico derecho. FC 116 lpm, TA 112/70 mmHg, FR 26 rpm, SatO₂ 88 % con aire ambiente. Sin antecedentes cardiopulmonares ni cáncer.',
          },
          questions: [
            { type: 'mc', prompt: 'Tira de ritmo a su llegada. ¿Cuál es el hallazgo ECG más frecuente en el TEP?', ecg: 'tachy', options: ['Taquicardia sinusal', 'Patrón S1Q3T3', 'Fibrilación auricular', 'Bloqueo de rama derecha'], answer: 0, explain: 'La taquicardia sinusal es el hallazgo más común. El S1Q3T3 es clásico pero poco sensible y poco específico.' },
            { type: 'mc', context: 'En el ECG de 12 derivaciones aparece un trastorno de conducción nuevo respecto a un ECG preoperatorio normal.', prompt: '¿Qué muestra y qué sugiere?', ecg12: 'rbbb', options: ['BRD nuevo: sobrecarga aguda del VD', 'BRI nuevo: IAM anterior', 'Hemibloqueo anterior: degenerativo', 'Preexcitación intermitente'], answer: 0, explain: 'El BRD nuevo, las T negativas en V1–V4 y la desviación derecha del eje reflejan dilatación aguda del VD y se asocian a peor pronóstico.' },
            { type: 'tf', prompt: 'Con alta probabilidad clínica, se debe pedir un dímero D antes de solicitar la angio-TC.', answer: false, explain: 'Con alta probabilidad clínica se va directamente a la angio-TC (y se anticoagula mientras); el dímero D solo es útil para descartar con probabilidad baja o intermedia.' },
            { type: 'mc', context: 'Angio-TC: TEP bilateral, cociente VD/VI 1,3. Troponina T ultrasensible elevada. TA estable.', prompt: '¿Cuál es su sPESI y su categoría de riesgo?', options: ['sPESI 2: riesgo intermedio-alto', 'sPESI 0: riesgo bajo', 'sPESI 1: riesgo intermedio-bajo', 'sPESI 2: riesgo alto'], answer: 0, explain: 'FC ≥ 110 (1) + SatO₂ < 90 % (1) = 2. Sin hipotensión no es de alto riesgo; con disfunción del VD y troponina elevada es intermedio-alto.' }, // Fuente: ESC TEP 2019
            { type: 'mc', prompt: '¿Qué tratamiento indicas?', options: ['Anticoagulación con HBPM y monitorización', 'Trombólisis sistémica inmediata', 'Filtro de vena cava inferior', 'ACOD y alta a domicilio'], answer: 0, explain: 'En el riesgo intermedio-alto se anticoagula (HBPM los primeros días) y se monitoriza; la trombólisis sistémica rutinaria no se recomienda y se reserva como rescate si hay deterioro.' },
            { type: 'match', prompt: 'Relaciona cada hallazgo con lo que indica en el TEP', pairs: [['Hipotensión mantenida', 'Riesgo alto: reperfusión'], ['Cociente VD/VI > 1', 'Disfunción del VD'], ['T negativas en V1–V4', 'Sobrecarga del VD en el ECG'], ['Dímero D normal con probabilidad baja', 'Descarta el TEP']], explain: 'La estratificación combina hemodinámica, escalas clínicas (sPESI), imagen del VD y biomarcadores; el ECG aporta datos pronósticos, no diagnósticos.' },
          ],
        },
      ],
    },
  ],
};
