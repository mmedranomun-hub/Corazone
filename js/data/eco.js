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
            { type: 'mc', prompt: 'FEVI normal (según guías actuales):', options: ['≥ 50–55 %', '≥ 35 %', '≥ 70 %', '≥ 40 %'], answer: 0, explain: 'IC con FE reducida ≤ 40 %, levemente reducida 41–49 %, preservada ≥ 50 %.' },
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
            { type: 'match', prompt: 'Relaciona cada criterio de disfunción diastólica (con FEVI normal, ASE/EACVI 2016) con su punto de corte', pairs: [['e\' septal', '< 7 cm/s'], ['e\' lateral', '< 10 cm/s'], ['E/e\' medio', '> 14'], ['Volumen AI indexado', '> 34 ml/m²']], explain: 'El cuarto criterio es la velocidad de IT > 2,8 m/s. Más de la mitad positivos = disfunción diastólica.' },
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
  ],
};
