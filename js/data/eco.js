export default {
  id: 'eco',
  title: 'Eco',
  subtitle: 'Ecocardiograma',
  icon: '🫀',
  color: '#3e63dd',
  units: [
    {
      id: 'eco-u1',
      title: 'Planos y anatomía',
      lessons: [
        {
          id: 'eco-u1-l1',
          title: 'Ventanas ecocardiográficas',
          questions: [
            { type: 'match', prompt: 'Relaciona cada ventana con su posición del transductor', pairs: [['Paraesternal', '3er–4º EIC izquierdo'], ['Apical', 'Punta (latido apexiano)'], ['Subcostal', 'Bajo el xifoides'], ['Supraesternal', 'Hueco supraesternal']] },
            { type: 'mc', prompt: '¿Qué plano permite ver las 4 cavidades a la vez?', options: ['Apical 4 cámaras', 'Paraesternal eje largo', 'Paraesternal eje corto', 'Supraesternal'], answer: 0, explain: 'El apical 4C muestra AD, AI, VD y VI con las válvulas AV.' },
            { type: 'mc', prompt: 'En el paraesternal eje largo, la estructura más cercana al transductor (arriba de la imagen) es…', options: ['El ventrículo derecho', 'La aurícula izquierda', 'La aorta descendente', 'El ventrículo izquierdo'], answer: 0, explain: 'El VD es la cámara más anterior; debajo aparecen septo, VI y, posteriormente, la AI.' },
            { type: 'tf', prompt: 'La ventana subcostal es especialmente útil en pacientes ventilados o con EPOC.', answer: true, explain: 'El hiperinflado pulmonar empeora las ventanas paraesternal y apical; la subcostal suele conservarse.' },
            { type: 'mc', prompt: 'El paraesternal eje corto a nivel de los músculos papilares es ideal para valorar…', options: ['Contractilidad segmentaria del VI', 'Arco aórtico', 'Venas pulmonares', 'Vena cava inferior'], answer: 0, explain: 'Permite ver los segmentos medios del VI en "donut" y su engrosamiento.' },
          ],
        },
        {
          id: 'eco-u1-l2',
          title: 'Modos de imagen',
          questions: [
            { type: 'match', prompt: 'Relaciona cada modo con su uso', pairs: [['Modo M', 'Medidas lineales y tiempos'], ['Doppler color', 'Flujos y regurgitaciones'], ['Doppler continuo', 'Velocidades altas (estenosis)'], ['Doppler pulsado', 'Velocidad en un punto concreto']] },
            { type: 'mc', prompt: 'Por convenio, en Doppler color el flujo que se acerca al transductor se representa en…', options: ['Rojo', 'Azul', 'Verde', 'Amarillo'], answer: 0, explain: 'BART: Blue Away, Red Towards.' },
            { type: 'mc', prompt: 'La ecuación de Bernoulli simplificada estima el gradiente de presión como…', options: ['4 × V²', '2 × V', 'V² / 4', '4 × V'], answer: 0, explain: 'ΔP (mmHg) = 4V² (V en m/s). Base de la estimación de gradientes valvulares y PSAP.' },
            { type: 'tf', prompt: 'El Doppler pulsado puede medir velocidades muy altas sin aliasing.', answer: false, explain: 'El pulsado está limitado por el límite de Nyquist; para velocidades altas se usa Doppler continuo.' },
            { type: 'mc', prompt: 'El Doppler tisular (e\') del anillo mitral se usa sobre todo para valorar…', options: ['Función diastólica', 'Estenosis aórtica', 'Shunts intracardiacos', 'Derrame pericárdico'], answer: 0, explain: 'La relación E/e\' estima las presiones de llenado del VI.' },
          ],
        },
      ],
    },
    {
      id: 'eco-u2',
      title: 'Función ventricular',
      lessons: [
        {
          id: 'eco-u2-l1',
          title: 'Ventrículo izquierdo',
          questions: [
            { type: 'mc', prompt: 'FEVI normal (según guías actuales):', options: ['≥ 50–55 %', '≥ 35 %', '≥ 70 %', '≥ 40 %'], answer: 0, explain: 'IC con FE reducida ≤ 40 %, ligeramente reducida 41–49 %, preservada ≥ 50 %.' },
            { type: 'mc', prompt: 'El método recomendado para calcular la FEVI en eco 2D es…', options: ['Simpson biplano', 'Teichholz', 'Visual exclusivamente', 'Ecuación de continuidad'], answer: 0, explain: 'Simpson biplano (discos) en apical 4C y 2C; Teichholz asume geometría y falla con alteraciones segmentarias.' },
            { type: 'match', prompt: 'Relaciona la clasificación de IC por FEVI', pairs: [['≤ 40 %', 'IC-FEr'], ['41–49 %', 'IC-FElr'], ['≥ 50 %', 'IC-FEp']] },
            { type: 'tf', prompt: 'El strain longitudinal global (GLS) puede detectar disfunción subclínica con FEVI aún normal.', answer: true, explain: 'Muy usado en cardio-oncología: caída relativa del GLS > 15 % sugiere cardiotoxicidad.' },
            { type: 'mc', prompt: 'Segmento hipocinético anterior y septal apical sugiere enfermedad de…', options: ['Descendente anterior', 'Coronaria derecha', 'Circunfleja', 'Ninguna, es normal'], answer: 0, explain: 'La DA irriga septo anterior, cara anterior y ápex.' },
          ],
        },
        {
          id: 'eco-u2-l2',
          title: 'Ventrículo derecho y presiones',
          questions: [
            { type: 'mc', prompt: 'Un TAPSE < 17 mm indica…', options: ['Disfunción sistólica del VD', 'Disfunción diastólica del VI', 'Hipertensión arterial', 'Normalidad'], answer: 0, explain: 'TAPSE = excursión sistólica del anillo tricuspídeo en modo M.' },
            { type: 'mc', prompt: 'Velocidad de IT = 3,5 m/s y PAD estimada 10 mmHg. PSAP ≈', options: ['59 mmHg', '45 mmHg', '35 mmHg', '24 mmHg'], answer: 0, explain: '4 × 3,5² = 49; 49 + 10 = 59 mmHg.' },
            { type: 'mc', prompt: 'VCI < 21 mm que colapsa > 50 % con la inspiración sugiere PAD de…', options: ['~3 mmHg (0–5)', '~15 mmHg', '~8 mmHg', '> 20 mmHg'], answer: 0, explain: 'VCI dilatada sin colapso → ~15 mmHg; situaciones intermedias → ~8 mmHg.' },
            { type: 'tf', prompt: 'El signo de McConnell (acinesia de pared libre del VD con ápex conservado) se asocia a TEP agudo.', answer: true, explain: 'Es específico pero poco sensible.' },
            { type: 'mc', prompt: 'Septo interventricular aplanado en "D" en eje corto indica…', options: ['Sobrecarga del VD', 'Miocardiopatía hipertrófica', 'Derrame pericárdico', 'Estenosis mitral'], answer: 0, explain: 'Sobrecarga de presión (sistólica) o volumen (diastólica) del VD.' },
          ],
        },
      ],
    },
    {
      id: 'eco-u3',
      title: 'Válvulas y pericardio',
      lessons: [
        {
          id: 'eco-u3-l1',
          title: 'Valvulopatías',
          questions: [
            { type: 'mc', prompt: 'Criterio de estenosis aórtica grave:', options: ['Vmax ≥ 4 m/s, gradiente medio ≥ 40 mmHg, AVA < 1 cm²', 'Vmax ≥ 2 m/s', 'Gradiente medio ≥ 20 mmHg', 'AVA < 2 cm²'], answer: 0, explain: 'Criterios ESC/EACTS. Ojo con la EA grave de bajo flujo/bajo gradiente.' },
            { type: 'mc', prompt: 'La ecuación de continuidad se basa en que…', options: ['El flujo (volumen) es constante a través de las estructuras', 'La presión es constante', 'La velocidad es constante', 'El área es constante'], answer: 0, explain: 'AVA = (área TSVI × VTI TSVI) / VTI aórtico.' },
            { type: 'mc', prompt: 'Una vena contracta ≥ 7 mm en insuficiencia mitral sugiere…', options: ['IM grave', 'IM leve', 'IM moderada', 'Estenosis mitral'], answer: 0, explain: 'Otros criterios de IM grave: EROA ≥ 40 mm² (primaria), volumen regurgitante ≥ 60 ml.' },
            { type: 'tf', prompt: 'La causa más frecuente de estenosis mitral a nivel mundial es la fiebre reumática.', answer: true, explain: 'Fusión comisural, válvula "en palo de hockey" en eje largo.' },
            { type: 'match', prompt: 'Relaciona hallazgo con valvulopatía', pairs: [['Válvula en "boca de pez"', 'Estenosis mitral'], ['Válvula bicúspide', 'EA en jóvenes'], ['Prolapso de velo', 'IM primaria'], ['Inversión de flujo en aorta descendente', 'IA grave']] },
          ],
        },
        {
          id: 'eco-u3-l2',
          title: 'Pericardio y urgencias',
          questions: [
            { type: 'mc', prompt: 'Signo ecográfico de taponamiento cardiaco:', options: ['Colapso diastólico de AD/VD', 'Hipertrofia septal', 'Dilatación de raíz aórtica', 'Insuficiencia aórtica'], answer: 0, explain: 'También: VCI pletórica y variación respiratoria exagerada de los flujos (> 25 % mitral).' },
            { type: 'tf', prompt: 'El diagnóstico de taponamiento es clínico-ecográfico, no depende solo del tamaño del derrame.', answer: true, explain: 'Un derrame pequeño de instauración rápida puede taponar; uno grande crónico puede tolerarse.' },
            { type: 'mc', prompt: 'En el protocolo FoCUS en parada cardiaca, la imagen se adquiere…', options: ['Durante la pausa de comprobación de pulso (< 10 s)', 'Interrumpiendo las compresiones 1 min', 'Solo tras la recuperación de pulso', 'Nunca se usa en parada'], answer: 0, explain: 'Minimizar interrupciones: subcostal durante la pausa, grabando un clip.' },
            { type: 'match', prompt: 'Relaciona hallazgo con diagnóstico', pairs: [['VD dilatado + McConnell', 'TEP'], ['Derrame + colapso AD', 'Taponamiento'], ['VI pequeño hiperdinámico + VCI colapsada', 'Hipovolemia'], ['Flap intimal en aorta', 'Disección aórtica']] },
          ],
        },
      ],
    },
    {
      id: 'eco-u4',
      title: 'Miocardiopatías',
      lessons: [
        {
          id: 'eco-u4-l1',
          title: 'Miocardiopatía hipertrófica',
          questions: [
            { type: 'mc', prompt: 'En un adulto sin otra causa que lo explique, ¿qué grosor parietal del VI en cualquier segmento apoya el diagnóstico de miocardiopatía hipertrófica?', options: ['≥ 15 mm', '≥ 11 mm', '≥ 25 mm', '≥ 9 mm'], answer: 0, explain: 'Criterio ESC 2023: ≥ 15 mm por cualquier técnica de imagen; basta con ≥ 13 mm si hay un familiar de primer grado con MCH.' },
            { type: 'mc', prompt: 'El movimiento sistólico anterior (SAM) de la válvula mitral en la MCH produce típicamente…', options: ['Obstrucción del TSVI e insuficiencia mitral de chorro posterior', 'Estenosis mitral reumática', 'Insuficiencia aórtica grave', 'Obstrucción del tracto de salida del VD'], answer: 0, explain: 'El velo anterior es arrastrado hacia el septo en sístole: obstruye el TSVI y deja una IM dirigida hacia la pared posterior de la AI.' },
            { type: 'mc', prompt: 'En la MCH, ¿a partir de qué gradiente pico en el TSVI se habla de obstrucción?', options: ['≥ 30 mmHg', '≥ 10 mmHg', '≥ 100 mmHg', '≥ 4 m/s siempre'], answer: 0, explain: 'Obstrucción: ≥ 30 mmHg en reposo o con provocación; ≥ 50 mmHg se considera hemodinámicamente relevante y es el umbral para plantear reducción septal si hay síntomas.' },
            { type: 'tf', prompt: 'Si el gradiente en reposo es < 50 mmHg en un paciente sintomático, deben buscarse gradientes provocables (Valsalva, bipedestación o eco de esfuerzo).', answer: true, explain: 'La obstrucción es dinámica: aumenta al disminuir la precarga o la poscarga, y un tercio de los pacientes solo la tiene con provocación.' },
            { type: 'mc', prompt: 'El registro con Doppler continuo del TSVI en una MCH obstructiva tiene una morfología característica…', options: ['En "daga", con pico telesistólico', 'Simétrica con pico mesosistólico redondeado', 'Holodiastólica', 'Bifásica con onda A dominante'], answer: 0, explain: 'La obstrucción dinámica empeora a lo largo de la sístole, por eso la velocidad máxima aparece tarde (forma de daga), a diferencia de la EA valvular.' },
            { type: 'match', prompt: 'Relaciona cada maniobra o fármaco con su efecto sobre el gradiente del TSVI en la MCH', pairs: [['Valsalva (fase de esfuerzo)', 'Aumenta el gradiente'], ['Betabloqueante', 'Disminuye el gradiente'], ['Nitratos', 'Aumentan el gradiente (evitar)'], ['Fenilefrina', 'Disminuye el gradiente (sube la poscarga)']], explain: 'Todo lo que reduce el tamaño del VI (menos precarga o poscarga, más contractilidad) empeora la obstrucción.' },
          ],
        },
        {
          id: 'eco-u4-l2',
          title: 'Dilatada, restrictiva y otras',
          questions: [
            { type: 'mc', prompt: 'La miocardiopatía dilatada se define por dilatación y disfunción sistólica del VI…', options: ['No explicadas por condiciones de carga anómalas ni enfermedad coronaria', 'Siempre secundarias a infarto previo', 'Con grosor parietal ≥ 15 mm', 'Solo si hay derrame pericárdico'], answer: 0, explain: 'Antes de etiquetar una MCD hay que descartar cardiopatía isquémica, valvulopatía e HTA como causa (ESC 2023).' },
            { type: 'mc', prompt: 'Un patrón de strain longitudinal con reducción basal y media pero preservación apical ("apical sparing") sugiere…', options: ['Amiloidosis cardiaca', 'Miocardiopatía hipertrófica apical', 'Infarto anterior extenso', 'Miocarditis aguda'], answer: 0, explain: 'El mapa polar en "guinda del pastel" es muy sugestivo de amiloidosis; apoya pedir gammagrafía ósea y estudio de componente monoclonal.' },
            { type: 'tf', prompt: 'En la amiloidosis cardiaca es típico encontrar hipertrofia en el eco y bajos voltajes en el ECG.', answer: true, explain: 'La discordancia masa en eco / voltaje en ECG se debe a infiltración extracelular, no a hipertrofia de miocitos.' },
            { type: 'mc', prompt: 'Para distinguir pericarditis constrictiva de miocardiopatía restrictiva, ¿qué hallazgo con Doppler tisular apoya constricción?', options: ['e\' medial conservada o aumentada (≥ 8 cm/s)', 'e\' medial muy reducida (< 6 cm/s)', 'FEVI < 30 %', 'Gradiente en el TSVI'], answer: 0, explain: 'En la constricción el miocardio es normal y el anillo se mueve bien (e\' medial puede superar a la lateral, "annulus reversus"); en la restricción la relajación está alterada.' },
            { type: 'mc', prompt: 'Acinesia apical con hipercinesia basal, que excede un único territorio coronario, en una mujer posmenopáusica tras estrés emocional sugiere…', options: ['Síndrome de tako-tsubo', 'Miocardiopatía hipertrófica apical', 'Displasia arritmogénica del VD', 'Pericarditis aguda'], answer: 0, explain: 'El "abombamiento apical" es reversible, pero exige coronariografía para descartar oclusión de la DA.' },
            { type: 'match', prompt: 'Relaciona miocardiopatía con hallazgo ecocardiográfico', pairs: [['Displasia arritmogénica del VD', 'Aneurismas y acinesia regional del VD'], ['Amiloidosis', 'Miocardio "moteado" y septo interauricular engrosado'], ['Miocardiopatía dilatada', 'VI esférico con FEVI reducida'], ['MCH obstructiva', 'SAM mitral']] },
          ],
        },
      ],
    },
    {
      id: 'eco-u5',
      title: 'Función diastólica y POCUS',
      lessons: [
        {
          id: 'eco-u5-l1',
          title: 'Función diastólica',
          questions: [
            { type: 'match', prompt: 'Relaciona cada criterio de disfunción diastólica (con FEVI normal, ASE/EACVI 2016) con su punto de corte', pairs: [['e\' septal', '< 7 cm/s'], ['e\' lateral', '< 10 cm/s'], ['E/e\' medio', '> 14'], ['Volumen AI indexado', '> 34 ml/m²']], explain: 'El cuarto criterio es la velocidad de IT > 2,8 m/s. Más de la mitad positivos = disfunción diastólica. La actualización ASE 2025 simplifica el algoritmo y ajusta los cortes de e′ por edad.' },
            { type: 'mc', prompt: 'Paciente con FEVI normal: e\' septal 6 cm/s, E/e\' medio 16, volumen AI 40 ml/m² y velocidad de IT 2,5 m/s. Según el algoritmo ASE/EACVI 2016…', options: ['Hay disfunción diastólica', 'La función diastólica es normal', 'El resultado es indeterminado', 'No se puede valorar sin cateterismo'], answer: 0, explain: 'Tres de cuatro criterios positivos (> 50 %) definen disfunción diastólica.' },
            { type: 'mc', prompt: 'Un flujo mitral con E/A ≥ 2 y tiempo de deceleración corto en un paciente con FEVI reducida indica…', options: ['Presiones de llenado elevadas (patrón restrictivo, grado III)', 'Relajación alterada con presiones normales (grado I)', 'Función diastólica normal', 'Estenosis mitral'], answer: 0, explain: 'Con disfunción miocárdica conocida, E/A ≥ 2 equivale a presión auricular izquierda elevada y peor pronóstico.' },
            { type: 'tf', prompt: 'Un patrón de llenado mitral con E/A ≤ 0,8 y E ≤ 50 cm/s sugiere presión de AI normal o baja.', answer: true, explain: 'Es el patrón de relajación alterada (grado I): el llenado depende más de la contracción auricular.' },
            { type: 'mc', prompt: 'Para desenmascarar un patrón "pseudonormal" del llenado mitral puede usarse…', options: ['La maniobra de Valsalva', 'La elevación pasiva de piernas', 'El Doppler color de la aorta', 'La medición del TAPSE'], answer: 0, explain: 'Al reducir la precarga, un descenso de E/A ≥ 50 % sugiere presiones elevadas enmascaradas (pseudonormal).' },
            { type: 'tf', prompt: 'En la fibrilación auricular desaparece la onda A del flujo mitral, por lo que no se puede usar el cociente E/A.', answer: true, explain: 'En FA se usan otros índices (E/e\' promediado en varios latidos, tiempo de deceleración, velocidad de IT).' },
          ],
        },
        {
          id: 'eco-u5-l2',
          title: 'POCUS cardiaco (FoCUS)',
          questions: [
            { type: 'tf', prompt: 'El FoCUS (ecocardioscopia focalizada) responde a preguntas clínicas binarias y no sustituye a un ecocardiograma completo.', answer: true, explain: '¿Hay derrame? ¿Está dilatado el VD? ¿Función del VI muy reducida? Ante hallazgos dudosos se solicita eco reglada.' },
            { type: 'match', prompt: 'Relaciona la pregunta FoCUS con la ventana más útil', pairs: [['Derrame pericárdico en parada', 'Subcostal 4 cámaras'], ['Tamaño VD/VI', 'Apical 4 cámaras'], ['Volemia (VCI)', 'Subcostal eje largo de la VCI'], ['Contractilidad global del VI', 'Paraesternal eje corto']] },
            { type: 'mc', prompt: 'En el FoCUS, ¿qué relación VD/VI en apical 4 cámaras sugiere dilatación significativa del VD?', options: ['> 1', '< 0,6', '= 0,5', 'La relación no es útil'], answer: 0, explain: 'Normalmente el VD es menor que dos tercios del VI; si lo iguala o supera, pensar en sobrecarga aguda (TEP) o crónica.' },
            { type: 'mc', prompt: 'Una separación entre el punto E mitral y el septo (EPSS) > 7 mm en paraesternal eje largo sugiere…', options: ['FEVI reducida', 'Hipovolemia', 'Taponamiento', 'Estenosis aórtica grave'], answer: 0, explain: 'Si el velo anterior apenas se acerca al septo es porque entra poco flujo en un VI dilatado y poco contráctil.' },
            { type: 'mc', prompt: 'Paciente en shock con VI hiperdinámico de cavidad virtual y VCI de 8 mm que colapsa por completo. Lo más probable es…', options: ['Shock hipovolémico o distributivo', 'Shock cardiogénico por disfunción del VI', 'Taponamiento cardiaco', 'TEP masivo'], answer: 0, explain: 'Corazón vacío y VCI colapsada orientan a precarga baja; en el taponamiento y el TEP la VCI suele estar pletórica.' },
            { type: 'tf', prompt: 'Un derrame pericárdico pequeño excluye el taponamiento cardiaco.', answer: false, explain: 'Si se acumula rápido (p. ej. tras perforación en un procedimiento) un derrame pequeño puede taponar; se valora el colapso de cavidades y la VCI.' },
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
            { type: 'mc', prompt: 'Joven de 22 años con R dominante en V1 y QRS estrecho. La tira de II muestra esto. ¿Qué explica la R alta en V1?', ecg: 'wpw', options: ['Vía accesoria izquierda (WPW)', 'Hipertrofia ventricular derecha', 'Bloqueo de rama derecha', 'IAM posterior antiguo'], answer: 0, explain: 'PR corto y onda delta: preexcitación. Una vía de pared libre izquierda activa antes la región posterobasal y genera R alta en V1.' },
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
              'Evolución: T hiperagudas → elevación del ST → ondas Q → T negativas. Q patológica: cualquier Q ≥ 20 ms en V2–V3; ≥ 30 ms y ≥ 1 mm en el resto.',
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
            { type: 'tf', prompt: 'Según la 4.ª Definición Universal, cualquier onda Q ≥ 20 ms en V2–V3 (o un complejo QS) se considera patológica.', answer: true, explain: 'En V2–V3 basta Q ≥ 20 ms; en el resto se exige Q ≥ 30 ms y ≥ 1 mm de profundidad en 2 derivaciones contiguas.' },
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
