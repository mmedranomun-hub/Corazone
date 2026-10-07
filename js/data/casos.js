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
            { type: 'mc', context: 'Pese a noradrenalina y dobutamina, persiste en shock con lactato en ascenso.', prompt: '¿Qué actitud recomiendan las guías ESC 2023?', options: ['Soporte circulatorio mecánico como puente y cirugía (Heart Team)', 'Tratamiento médico y cierre diferido a las 6 semanas', 'Fibrinólisis por posible reoclusión de la DA', 'Anticoagulación y nuevo ETT en una semana'], answer: 0, explain: 'La CIV en shock refractario tiene una mortalidad cercana al 100 % sin cirugía. El balón de contrapulsación, Impella o ECMO estabilizan y permiten operar; el cierre percutáneo es una alternativa en casos seleccionados.' }, // REVISAR: momento óptimo de la cirugía (urgente vs diferida tras estabilizar con SCM) según ESC 2023
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
            { type: 'mc', prompt: '¿Cuál es el tratamiento indicado?', options: ['Cirugía urgente, habitualmente sustitución mitral', 'Tratamiento médico y cirugía electiva a los 3 meses', 'Nueva ICP de la circunfleja', 'Diuréticos y ETE de control en 48 horas'], answer: 0, explain: 'La rotura de papilar es una indicación de cirugía urgente (ESC 2023); rara vez se puede reparar. El balón de contrapulsación o Impella reducen la poscarga como puente; la reparación borde a borde percutánea es una opción en pacientes inoperables.' }, // REVISAR: papel de la TEER en rotura de papilar según ESC 2023
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
            { type: 'mc', prompt: '¿Cuál es la actitud inicial?', options: ['Avisar a cirugía vascular para reparación urgente', 'Fluidos hasta normalizar la TA y luego TC', 'Fibrinólisis por sospecha de TEP', 'Noradrenalina y observación en la UCI'], answer: 0, explain: 'El paciente inestable con sospecha de rotura de AAA va directamente a reparación (EVAR o abierta). Se aplica hipotensión permisiva: fluidos limitados para mantener la consciencia y una PAS ≈ 70–90 mmHg.' }, // REVISAR: cifra de hipotensión permisiva (ESC 2024 aorta / ESVS)
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
            { type: 'mc', context: 'IT grave, AD muy dilatada, VD funcional con fracción de acortamiento conservada y CIA tipo ostium secundum con shunt D-I en el esfuerzo.', prompt: 'Según ESC 2020, ¿qué actitud corresponde?', options: ['Reparación quirúrgica de la tricúspide y cierre de la CIA', 'Cierre percutáneo aislado de la CIA', 'Tratamiento médico con diuréticos y revisión anual', 'Trasplante cardiaco'], answer: 0, explain: 'La IT grave con síntomas o con deterioro objetivo de la capacidad de esfuerzo es indicación de cirugía (reparación tipo cono). Cerrar solo la CIA puede descompensar un VD pequeño.' }, // REVISAR: indicación concreta de cierre de CIA en Ebstein (ESC 2020)
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
            { type: 'mc', prompt: 'Con aorta ascendente de 52 mm, historia familiar de disección y crecimiento rápido, ¿qué está indicado?', options: ['Cirugía de la aorta ascendente', 'Esperar a que alcance 55 mm', 'Betabloqueante y TC en 2 años', 'Recambio valvular aórtico aislado'], answer: 0, explain: 'En la bicúspide se opera la aorta con ≥ 55 mm, o con ≥ 50 mm si hay factores de riesgo (historia familiar, HTA, coartación, crecimiento ≥ 3 mm/año). Con ≥ 45 mm se trata si se opera la válvula.' }, // REVISAR: umbrales ESC 2021 valvulopatías / ESC 2024 aorta
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
            { type: 'mc', context: 'Doppler: gradiente medio transmitral 9 mmHg con FC 80 lpm. Vmax de la IT 3,2 m/s y VCI de 18 mm con colapso < 50 % (PAD estimada 8 mmHg).', prompt: '¿Cuál es la PSAP estimada?', options: ['≈ 49 mmHg', '≈ 41 mmHg', '≈ 21 mmHg', '≈ 34 mmHg'], answer: 0, explain: 'PSAP = 4 × 3,2² + PAD = 41 + 8 ≈ 49 mmHg. El mixoma obstruye la mitral como una estenosis funcional, que varía con la postura y explica los síncopes.' }, // REVISAR: PAD 8 mmHg con VCI 18 mm y colapso < 50 % (ASE: intermedia)
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
            { type: 'match', prompt: 'Relaciona cada medida terapéutica con su justificación', pairs: [['Bromocriptina', 'Bloquea la prolactina (fragmento 16 kDa)'], ['Anticoagulación profiláctica', 'Se asocia a la bromocriptina'], ['Enalapril tras el parto', 'Compatible con la lactancia'], ['Suprimir la lactancia', 'Se plantea en disfunción grave']], explain: 'El esquema BOARD resume el tratamiento: bromocriptina, anticoagulación, vasodilatadores, IECA/ARA-II o ARNI tras el parto, betabloqueantes y diuréticos.' }, // REVISAR: grado de recomendación de bromocriptina (ESC 2018 IIb; ESC 2023 IC)
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
            { type: 'mc', context: 'A los 6 meses sigue asintomática, pero la FEVI es 44 % y el GLS −14 %.', prompt: '¿Qué actitud recomienda la guía ESC 2022?', options: ['Interrumpir temporalmente el trastuzumab e iniciar tratamiento de IC', 'Continuar el trastuzumab sin cambios', 'Suspender el trastuzumab de forma definitiva', 'Cambiar a doxorrubicina liposomal'], answer: 0, explain: 'FEVI 44 % con descenso de 18 puntos = disfunción moderada. Se interrumpe temporalmente el anti-HER2, se inicia tratamiento de IC y se reevalúa en unas semanas para reintroducirlo si mejora.' }, // REVISAR: plazo de reevaluación (≈ 3 semanas) en ESC 2022
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
            { type: 'mc', context: 'TC: pericardio engrosado (6 mm) y calcificado. RM: sin realce pericárdico; PCR normal. NYHA III pese a diuréticos.', prompt: '¿Qué tratamiento corresponde?', options: ['Pericardiectomía', 'Antiinflamatorios durante 3 meses', 'Pericardiocentesis', 'Trasplante cardiaco'], answer: 0, explain: 'La constricción crónica sin inflamación activa y con síntomas avanzados se trata con pericardiectomía. Tras radioterapia el pronóstico es peor por la afectación miocárdica asociada.' }, // REVISAR: confirmar recomendación en guía ESC 2025 de pericardio
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
            { type: 'mc', context: 'ETT: VD dilatado con diámetro del TSVD en paraesternal largo de 37 mm, discinesia de la pared libre subtricuspídea y pequeños aneurismas; FEVI 58 %.', prompt: 'Calcula el TSVD indexado y valora el criterio de imagen (Task Force 2010).', options: ['19,5 mm/m²: criterio mayor', '19,5 mm/m²: criterio menor', '37 mm/m²: criterio mayor', '15,2 mm/m²: no cumple criterio'], answer: 0, explain: '37 / 1,9 ≈ 19,5 mm/m². Discinesia regional del VD con TSVD paraesternal largo ≥ 32 mm (≥ 19 mm/m²) es criterio mayor.' }, // REVISAR: umbrales Task Force 2010 (PLAX ≥ 32 mm o ≥ 19 mm/m² mayor)
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
            { type: 'mc', prompt: 'Con una vegetación de 12 mm, ¿cuál es la vía de extracción de elección?', options: ['Percutánea transvenosa en un centro con cirugía', 'Cirugía con circulación extracorpórea', 'Extracción por toracoscopia', 'No extraer por riesgo de embolia'], answer: 0, explain: 'La extracción percutánea es de elección; la cirugía se considera con vegetaciones muy grandes (> 20 mm) o afectación valvular que requiera cirugía. Embolias pulmonares pequeñas son frecuentes y bien toleradas.' }, // REVISAR: umbral de tamaño de vegetación para extracción quirúrgica (ESC 2023)
            { type: 'match', prompt: 'Relaciona cada aspecto del reimplante con la recomendación', pairs: [['Reevaluar la indicación', 'Antes de reimplantar'], ['Momento del reimplante', 'Hemocultivos negativos ≥ 72 h'], ['Localización del nuevo sistema', 'Lado contralateral'], ['Paciente dependiente de marcapasos', 'Estimulación temporal o sin cables']], explain: 'Hasta un tercio de los pacientes no necesita reimplante. Si hay vegetaciones valvulares se espera al menos 2 semanas.' }, // REVISAR: tiempos de reimplante ESC 2023
          ],
        },
      ],
    },
  ],
};
