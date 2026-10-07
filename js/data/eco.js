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
      id: 'eco-u6',
      title: 'Valvulopatías avanzado',
      guide: {
        intro: 'Graduación ecográfica y decisiones de intervención en valvulopatías (ESC/EACTS 2025, EACVI 2017/2022, ASE 2017).',
        sections: [
          {
            title: 'Estenosis aórtica',
            points: [
              'Grave: Vmax ≥ 4 m/s, gradiente medio ≥ 40 mmHg, área ≤ 1 cm² (≤ 0,6 cm²/m²); índice adimensional < 0,25.',
              'Continuidad: área = (π × (D TSVI/2)² × ITV TSVI) / ITV aórtica. El diámetro va al cuadrado: 1 mm de error ≈ 10 % de error en el área.',
              'Bajo flujo = VS indexado ≤ 35 ml/m². Con FEVI < 50 % (clásico) → eco con dobutamina: reserva de flujo si el VS sube ≥ 20 %.',
              'Con FEVI conservada (paradójico) o sin reserva → calcio valvular por TC: ≥ 3000 UA en varones y ≥ 1600 UA en mujeres hacen muy probable la EA grave.',
              'ESC/EACTS 2025: TAVI transfemoral recomendada a partir de los 70 años (antes ≥ 75); la decisión es del Heart Team.',
            ],
            tip: 'Gradiente bajo con área pequeña: antes de hablar de bajo flujo, vuelve a medir el TSVI y busca la Vmax desde todas las ventanas.',
          },
          {
            title: 'Insuficiencia mitral',
            points: [
              'Carpentier: I movilidad normal (dilatación anular, perforación); II excesiva (prolapso, flail); IIIa restricción sisto-diastólica (reumática); IIIb restricción sistólica (isquémica/funcional).',
              'PISA: EROA = 2πr² × Va / Vmax IM; volumen regurgitante = EROA × ITV de la IM.',
              'IM grave: EROA ≥ 40 mm², VR ≥ 60 ml, vena contracta ≥ 7 mm, fracción regurgitante ≥ 50 %. En la secundaria, EROA ≥ 30 mm² (orificio elíptico) o VR ≥ 45 ml (bajo flujo) pueden ya indicar IM grave.',
              'Primaria asintomática: cirugía (reparación) si FEVI ≤ 60 % o DTSVI ≥ 40 mm; la FA o la PSAP > 50 mmHg también la favorecen.',
              'Secundaria grave sintomática pese a tratamiento óptimo: TEER (borde a borde) clase I en ESC/EACTS 2025 si cumple criterios tipo COAPT.',
            ],
          },
          {
            title: 'Insuficiencia aórtica y estenosis mitral',
            points: [
              'IA grave: vena contracta > 6 mm, THP < 200 ms, inversión holodiastólica en aorta descendente, EROA ≥ 30 mm², VR ≥ 60 ml.',
              'Cirugía en IA grave asintomática (clase I): FEVI ≤ 50 % o DTSVI > 50 mm (> 25 mm/m²).',
              'EM: planimetría en eje corto (referencia) y área = 220/THP; área ≤ 1,5 cm² = EM clínicamente significativa.',
              'Wilkins (movilidad, engrosamiento, calcio, aparato subvalvular; 4–16): ≤ 8 favorece la valvuloplastia percutánea si no hay trombo en AI ni IM > leve.',
            ],
          },
          {
            title: 'Válvulas derechas, prótesis y endocarditis',
            points: [
              'IT: grave (VC 7–13 mm), masiva (14–20 mm) y torrencial (≥ 21 mm); la inversión sistólica en venas hepáticas apoya IT grave.',
              'PSAP = 4 × V(IT)² + PAD (estimada por la VCI). En la IT torrencial el flujo laminar infraestima la PSAP.',
              'Mismatch protésico aórtico: EOA indexado ≤ 0,85 moderado, ≤ 0,65 cm²/m² grave (≤ 0,70 y ≤ 0,55 si IMC ≥ 30).',
              'Endocarditis (ESC 2023 / Duke-ISCVID 2023): la imagen (eco, TC cardiaca, PET-TC) es criterio mayor; ETE si prótesis, ETT negativo con alta sospecha o para buscar complicaciones.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'eco-u6-l1',
          title: 'Estenosis aórtica: casos difíciles',
          questions: [
            { type: 'mc', prompt: 'TSVI de 2,0 cm, ITV en TSVI 20 cm e ITV aórtica 80 cm. ¿Área valvular aórtica por ecuación de continuidad?', options: ['0,79 cm²', '0,25 cm²', '3,14 cm²', '0,50 cm²'], answer: 0, explain: 'Área TSVI = π × 1,0² = 3,14 cm²; VS = 3,14 × 20 ≈ 63 ml; 63/80 ≈ 0,79 cm². El cociente 20/80 = 0,25 es el índice adimensional (< 0,25 apoya EA grave).' },
            { type: 'mc', prompt: 'Mujer de 78 años: FEVI 62 %, área aórtica 0,79 cm², gradiente medio 32 mmHg y VS indexado 30 ml/m². ¿Cómo se clasifica?', options: ['Posible EA grave de bajo flujo-bajo gradiente paradójica', 'EA moderada: el gradiente medio es el que manda', 'EA grave clásica de bajo flujo con FE reducida', 'EA grave de alto gradiente'], answer: 0, explain: 'FEVI conservada con VSi ≤ 35 ml/m² define el bajo flujo paradójico. Tras descartar errores de medida, el calcio por TC (≥ 1600 UA en mujer) apoya que sea grave.' },
            { type: 'tf', prompt: 'Observa la curva simultánea VI-aorta: el pulso aórtico de ascenso lento y pico tardío (parvus et tardus) apoya una EA significativa.', pressure: 'as-lv-ao', answer: true, explain: 'La obstrucción retrasa y amortigua la eyección: pulso parvus et tardus. Grave si gradiente medio ≥ 40 mmHg; el pico instantáneo del Doppler supera al pico a pico del cateterismo.' },
            { type: 'match', prompt: 'EA bajo flujo con FEVI reducida: relaciona el hallazgo con su interpretación', pairs: [['Con dobutamina: GM ≥ 40 y área ≤ 1 cm²', 'EA verdaderamente grave'], ['Con dobutamina: área > 1 cm²', 'EA pseudograve'], ['Con dobutamina: VS sube < 20 %', 'Sin reserva de flujo'], ['Calcio por TC ≥ 3000 UA (varón)', 'EA grave muy probable']], explain: 'Sin reserva de flujo el eco de estrés no es concluyente y se recurre al calcio por TC; la ausencia de reserva empeora el pronóstico pero no contraindica la intervención.' },
            { type: 'tf', prompt: 'Según ESC/EACTS 2025, en la EA grave sintomática con anatomía y acceso transfemoral favorables se recomienda TAVI a partir de los 70 años.', answer: true, explain: 'Las guías de 2021 fijaban el corte en 75 años. Por debajo de 70 y con bajo riesgo quirúrgico, la cirugía sigue siendo de elección; decide el Heart Team.' }, // Fuente: ESC/EACTS 2025 valvulopatías
            { type: 'tf', prompt: 'Un error de 1 mm al medir un TSVI de 20 mm cambia el área valvular calculada en torno a un 1 %.', answer: false, explain: 'El diámetro se eleva al cuadrado: (21/20)² ≈ 1,10, es decir, ≈ 10 % de error. Mide el TSVI en mesosístole, con zoom, a 0,5–1 cm del anillo o en él.' },
          ],
        },
        {
          id: 'eco-u6-l2',
          title: 'Insuficiencia mitral primaria y secundaria',
          questions: [
            { type: 'match', prompt: 'Relaciona el tipo de Carpentier con la movilidad de los velos', pairs: [['Tipo I', 'Normal: dilatación anular o perforación'], ['Tipo II', 'Excesiva: prolapso o flail'], ['Tipo IIIa', 'Restringida en sístole y diástole'], ['Tipo IIIb', 'Restringida en sístole (tethering)']], explain: 'El IIIa es típico de la enfermedad reumática; el IIIb, de la IM isquémica o funcional por remodelado del VI y desplazamiento de los papilares.' },
            { type: 'mc', prompt: 'PISA: radio 1,0 cm con velocidad de aliasing 40 cm/s y velocidad máxima de la IM 5 m/s. ¿Cuál es el EROA?', options: ['50 mm²', '25 mm²', '5 mm²', '100 mm²'], answer: 0, explain: 'EROA = 2πr² × Va / Vmax = 6,28 × 1 × 40 / 500 = 0,50 cm² = 50 mm² → IM grave (≥ 40 mm²). Olvidar el factor 2 de la hemiesfera da 25 mm².' },
            { type: 'mc', prompt: 'Con un EROA de 0,50 cm² y una ITV del chorro de IM de 140 cm, ¿cuál es el volumen regurgitante?', options: ['70 ml', '28 ml', '35 ml', '140 ml'], answer: 0, explain: 'VR = EROA × ITV = 0,5 × 140 = 70 ml (≥ 60 ml = grave). Comprueba la coherencia con el tamaño de la AI y del VI.' },
            { type: 'tf', prompt: 'Observa la curva de enclavamiento: las ondas v gigantes son típicas de la IM aguda grave, con una AI no dilatada y poco distensible.', pressure: 'pcwp-v', answer: true, explain: 'En la IM crónica la AI dilatada amortigua la onda v. Además no son específicas: aparecen también con AI rígida o en la CIV postinfarto.' },
            { type: 'mc', prompt: 'Mujer de 58 años, asintomática, con IM primaria grave por flail de P2. ¿Qué hallazgo indica cirugía (clase I)?', options: ['DTSVI de 42 mm', 'FEVI de 66 %', 'PSAP en reposo de 35 mmHg', 'Diámetro de la AI de 40 mm'], answer: 0, explain: 'En la IM primaria grave asintomática la cirugía es clase I si FEVI ≤ 60 % o DTSVI ≥ 40 mm; la FA o la PSAP > 50 mmHg la favorecen. Se prefiere la reparación.' },
            { type: 'mc', prompt: 'Varón de 72 años, IM secundaria grave, FEVI 32 %, DTSVI 58 mm, NYHA III pese a tratamiento óptimo y TRC; el Heart Team descarta cirugía. Según ESC/EACTS 2025…', options: ['TEER mitral borde a borde (recomendación clase I)', 'Reparación quirúrgica aislada como primera opción', 'Solo tratamiento médico: la TEER no aporta beneficio', 'TEER solo si la FEVI es inferior al 20 %'], answer: 0, explain: 'Con perfil tipo COAPT (FEVI 20–50 %, DTSVI ≤ 70 mm, PSAP ≤ 70 mmHg) la TEER reduce hospitalizaciones y mortalidad; la guía de 2025 la eleva a clase I.' }, // Fuente: ESC/EACTS 2025 valvulopatías
          ],
        },
        {
          id: 'eco-u6-l3',
          title: 'Insuficiencia aórtica y estenosis mitral',
          questions: [
            { type: 'match', prompt: 'Relaciona el parámetro con su umbral de IA grave (EACVI 2022)', pairs: [['Vena contracta', '> 6 mm'], ['EROA', '≥ 30 mm²'], ['Volumen regurgitante', '≥ 60 ml'], ['Fracción regurgitante', '≥ 50 %']], explain: 'Se suman los signos de flujo: inversión holodiastólica en aorta descendente (velocidad telediastólica > 20 cm/s) y THP < 200 ms.' },
            { type: 'tf', prompt: 'Un tiempo de hemipresión (THP) del chorro de IA > 500 ms sugiere IA grave.', answer: false, explain: 'Al revés: en la IA grave las presiones de Ao y VI se igualan rápido y el THP es corto (< 200 ms); > 500 ms orienta a IA leve. Depende de la distensibilidad del VI.' },
            { type: 'mc', prompt: 'Varón de 55 años con IA grave asintomática. ¿Qué hallazgo es indicación de cirugía clase I?', options: ['FEVI de 48 %', 'DTDVI de 62 mm', 'THP del chorro de 280 ms', 'FEVI 58 % con DTSVI de 42 mm'], answer: 0, explain: 'En la IA grave asintomática se opera (clase I) con FEVI ≤ 50 % o DTSVI > 50 mm (> 25 mm/m²). Si hay dilatación aórtica, cuenta también el diámetro de la raíz.' },
            { type: 'mc', prompt: 'Estenosis mitral reumática con un THP de 275 ms. ¿Área mitral estimada?', options: ['0,8 cm²', '1,25 cm²', '1,6 cm²', '2,2 cm²'], answer: 0, explain: 'Área = 220/THP = 220/275 = 0,8 cm². El THP no es fiable justo tras la valvuloplastia, con IA grave ni si cambia la distensibilidad de AI o VI.' },
            { type: 'tf', prompt: 'La planimetría en eje corto paraesternal, en el borde libre de los velos, es el método de referencia del área mitral en la EM reumática.', answer: true, explain: 'Mide el orificio anatómico sin depender del flujo ni de la distensibilidad; el 3D ayuda a alinear el plano en la punta de los velos.' },
            { type: 'mc', prompt: 'EM reumática significativa con puntuación de Wilkins de 7, sin trombo en la AI e IM leve. Esto indica…', options: ['Anatomía favorable para valvuloplastia percutánea', 'Necesidad de sustitución valvular quirúrgica', 'Contraindicación de la valvuloplastia por IM', 'EM leve sin repercusión hemodinámica'], answer: 0, explain: 'Wilkins puntúa movilidad, engrosamiento, calcificación y aparato subvalvular (1–4 cada uno); ≤ 8 es favorable. Contraindican: trombo en AI, IM > leve y calcio comisural.' },
          ],
        },
        {
          id: 'eco-u6-l4',
          title: 'Válvulas derechas, prótesis y endocarditis',
          questions: [
            { type: 'mc', prompt: 'IT con velocidad máxima 3,5 m/s y VCI de 24 mm que colapsa < 50 % con la inspiración. ¿PSAP estimada?', options: ['64 mmHg', '49 mmHg', '52 mmHg', '29 mmHg'], answer: 0, explain: '4 × 3,5² = 49 mmHg + PAD 15 mmHg (VCI > 21 mm y colapso < 50 %) = 64 mmHg. Olvidar sumar la PAD es el error más frecuente.' },
            { type: 'match', prompt: 'Relaciona el grado de IT con su vena contracta', pairs: [['IT grave', 'VC 7–13 mm'], ['IT masiva', 'VC 14–20 mm'], ['IT torrencial', 'VC ≥ 21 mm']], explain: 'La escala ampliada (EROA ≥ 40, ≥ 60 y ≥ 80 mm²) nació para seleccionar pacientes para intervención percutánea tricuspídea.' },
            { type: 'tf', prompt: 'Si se opera la válvula mitral, la anuloplastia tricuspídea solo está indicada cuando la IT es grave.', answer: false, explain: 'Con IT leve-moderada secundaria y anillo dilatado (≥ 40 mm o > 21 mm/m²) debe considerarse la anuloplastia, porque la IT suele progresar tras la cirugía izquierda.' },
            { type: 'mc', prompt: 'Bioprótesis aórtica con velos móviles, tiempo de aceleración < 80 ms, gradiente medio 28 mmHg y EOA indexado 0,60 cm²/m² (IMC 26). Lo más probable es…', options: ['Mismatch paciente-prótesis grave', 'Trombosis de la prótesis', 'Obstrucción por endocarditis', 'Fuga paravalvular grave'], answer: 0, explain: 'EOAi ≤ 0,65 cm²/m² = mismatch grave (≤ 0,55 si IMC ≥ 30). En la obstrucción verdadera los velos se mueven mal, el TA > 100 ms y el cociente ITV TSVI/prótesis < 0,25.' },
            { type: 'match', prompt: 'Relaciona el hallazgo ecográfico de endocarditis con su descripción', pairs: [['Vegetación', 'Masa móvil adherida a la válvula'], ['Absceso', 'Zona perivalvular engrosada sin flujo'], ['Pseudoaneurisma', 'Cavidad perivalvular pulsátil con flujo'], ['Dehiscencia protésica', 'Balanceo y fuga paravalvular nueva']], explain: 'Las complicaciones perivalvulares se ven mejor con ETE y son indicación quirúrgica por infección no controlada.' },
            { type: 'tf', prompt: 'En los criterios ESC 2023 y Duke-ISCVID 2023, la TC cardiaca y la PET-TC con ¹⁸F-FDG pueden aportar un criterio mayor de imagen.', answer: true, explain: 'Son especialmente útiles en endocarditis protésica. El ETE se indica si hay prótesis, ETT negativo con alta sospecha o para buscar complicaciones.' }, // Fuente: ESC 2023 endocarditis; Duke-ISCVID 2023
          ],
        },
      ],
    },
    {
      id: 'eco-u7',
      title: 'Bases físicas y cuantificación',
      guide: {
        intro: 'Física del ultrasonido, segmentación del VI y cuantificación de cavidades según ASE/EACVI 2015.',
        sections: [
          {
            title: 'Física y knobología',
            points: [
              'λ = c/f (c ≈ 1540 m/s): más frecuencia → mejor resolución axial y menos penetración.',
              'Límite de Nyquist = PRF/2; al aumentar la profundidad baja la PRF y aparece antes el aliasing. Soluciones: bajar la línea de base, subir la escala, reducir profundidad o usar Doppler continuo.',
              'El Doppler depende del coseno del ángulo: con < 20° el error es < 6 %; a 60° se mide la mitad.',
              'La ganancia amplifica en recepción (señal y ruido); la potencia de salida es otro mando. Menos profundidad y sector más estrecho = más frame rate.',
            ],
            tip: 'Ante una imagen "imposible" (flap en la aorta, trombo apical), piensa en artefacto: compruébala en otro plano.',
          },
          {
            title: 'Segmentación y anatomía',
            points: [
              '17 segmentos: 6 basales, 6 medios, 4 apicales y el ápex (17).',
              'DA: anteriores, anteroseptales, septal apical y ápex; CD: inferoseptales basal-medio e inferiores; Cx: anterolaterales e inferolaterales (con variaciones por dominancia).',
              'A4C: inferoseptal y anterolateral; A2C: anterior e inferior; A3C y PEL: anteroseptal e inferolateral.',
              'Mitral: A1/P1 laterales (junto a la orejuela), A2/P2 centrales, A3/P3 mediales; P2 es el festón que más prolapsa.',
            ],
          },
          {
            title: 'Cuantificación del VI y aurículas (ASE/EACVI 2015)',
            points: [
              'FEVI normal ≥ 52 % en varones y ≥ 54 % en mujeres; método recomendado: Simpson biplano (o 3D).',
              'VTD indexado (2D) ≤ 74 ml/m² en varones y ≤ 61 ml/m² en mujeres.',
              'Masa VI indexada (lineal) ≤ 115 g/m² en varones y ≤ 95 g/m² en mujeres; GPR = 2 × PP / DTDVI, anormal > 0,42.',
              'Geometría: masa normal + GPR > 0,42 = remodelado concéntrico; masa alta + GPR > 0,42 = HVI concéntrica; masa alta + GPR ≤ 0,42 = HVI excéntrica.',
              'Volumen AI indexado normal ≤ 34 ml/m²; volumen AD indexado medio ≈ 25 ml/m² (varones) y 21 ml/m² (mujeres), con límite superior ≈ 39 y 33 ml/m².',
            ],
          },
          {
            title: 'VD, strain, 3D y contraste',
            points: [
              'VD anormal: diámetro basal > 41 mm, TAPSE < 17 mm, S′ < 9,5 cm/s, FAC < 35 %, strain de pared libre de magnitud < 20 %.',
              'GLS del VI normal ≈ −20 % (depende del equipo); valores menos negativos de −16 % suelen ser anormales.',
              'El 3D evita el escorzo y las asunciones geométricas: volúmenes mayores y más reproducibles que el 2D.',
              'Contraste (microburbujas) si ≥ 2 segmentos contiguos no se ven, o ante sospecha de trombo apical, MCH apical o no compactación.',
              'ASE 2025 (diastólica): strain de reservorio de la AI ≤ 18 % apoya presiones de llenado elevadas.',
            ],
          },
        ],
      },
      lessons: [
        {
          id: 'eco-u7-l1',
          title: 'Física y knobología',
          questions: [
            { type: 'mc', prompt: 'Si cambias de un transductor de 2,5 MHz a uno de 5 MHz, ¿qué ocurre?', options: ['Mejora la resolución axial y disminuye la penetración', 'Mejora la penetración y empeora la resolución axial', 'Aumentan la penetración y la frecuencia de imagen', 'No cambia la resolución; solo cambia el brillo'], answer: 0, explain: 'λ = c/f: con 1540 m/s, λ pasa de ≈ 0,6 a ≈ 0,3 mm, pero la atenuación crece con la frecuencia. Por eso el ETE y la eco pediátrica usan frecuencias altas.' },
            { type: 'mc', prompt: 'En Doppler pulsado con una frecuencia de repetición de pulsos (PRF) de 6 kHz, ¿cuál es el límite de Nyquist?', options: ['3 kHz', '6 kHz', '12 kHz', '1,5 kHz'], answer: 0, explain: 'Nyquist = PRF/2. Más profundidad obliga a bajar la PRF y el aliasing aparece antes; el Doppler continuo no tiene este límite.' },
            { type: 'match', prompt: 'Relaciona cada artefacto con su aspecto', pairs: [['Reverberación', 'Líneas repetidas a intervalos regulares'], ['Sombra acústica', 'Zona anecoica tras calcio o prótesis'], ['Lóbulo lateral', 'Eco de un reflector fuera del eje'], ['Imagen en espejo', 'Duplicado tras un reflector intenso']], explain: 'Una reverberación en la aorta ascendente puede simular un flap de disección: si cruza paredes o se mueve en paralelo a ellas en modo M, es artefacto.' },
            { type: 'tf', prompt: 'Aumentar la ganancia global mejora la relación señal/ruido porque aumenta la potencia acústica emitida.', answer: false, explain: 'La ganancia amplifica en recepción señal y ruido por igual; la potencia de salida (índice mecánico) es otro mando. La TGC compensa la atenuación por profundidad.' },
            { type: 'mc', prompt: 'Registras con Doppler continuo un chorro estenótico con un ángulo de 60° respecto al flujo. La velocidad medida será…', options: ['La mitad de la real (cos 60° = 0,5)', 'Igual: el Doppler continuo no depende del ángulo', 'El doble de la real', 'Solo un 6 % menor que la real'], answer: 0, explain: 'El desplazamiento Doppler es proporcional a v × cos θ; con < 20° el error es < 6 %. En la EA se busca la Vmax desde apical, paraesternal derecha y supraesternal.' },
            { type: 'tf', prompt: 'Para aumentar la frecuencia de imagen (frame rate) puedes reducir la profundidad y estrechar el sector.', answer: true, explain: 'Hay menos líneas que barrer y el eco tarda menos en volver. Importa en el strain por speckle tracking, que necesita ≈ 40–80 imágenes/s.' },
          ],
        },
        {
          id: 'eco-u7-l2',
          title: 'Anatomía ecográfica y 17 segmentos',
          questions: [
            { type: 'tf', prompt: 'El modelo de 17 segmentos tiene 6 segmentos basales, 6 medios, 4 apicales y el ápex (segmento 17).', answer: true, explain: 'Es el modelo ASE/AHA común para eco, RM y SPECT; el ápex se atribuye habitualmente a la DA.' },
            { type: 'match', prompt: 'Relaciona el plano apical con las paredes del VI que muestra', pairs: [['Apical 4 cámaras', 'Inferoseptal y anterolateral'], ['Apical 2 cámaras', 'Anterior e inferior'], ['Apical 3 cámaras', 'Anteroseptal e inferolateral']], explain: 'El paraesternal eje largo muestra las mismas paredes que el apical 3 cámaras (anteroseptal e inferolateral basales y medias).' },
            { type: 'mc', prompt: 'Observa el segmento resaltado en el eje corto a nivel de papilares. ¿Qué arteria lo irriga habitualmente?', diagram: { id: 'psax', highlight: 'inflat' }, options: ['Circunfleja', 'Descendente anterior', 'Coronaria derecha', 'Primera diagonal'], answer: 0, explain: 'Es el inferolateral medio (segmento 11, antes "posterior"), territorio de la Cx; en dominancia derecha puede recibir ramas de la CD.' },
            { type: 'mc', prompt: 'Observa el segmento resaltado. ¿Cómo se llama y a qué territorio pertenece?', diagram: { id: 'psax', highlight: 'antsep' }, options: ['Anteroseptal medio – descendente anterior', 'Inferoseptal medio – coronaria derecha', 'Anterolateral medio – circunfleja', 'Anterior medio – coronaria derecha'], answer: 0, explain: 'El septo se une al VD por delante (anteroseptal, DA y sus septales) y por detrás (inferoseptal, CD).' },
            { type: 'mc', prompt: 'En el prolapso mitral degenerativo, ¿qué festón se afecta con más frecuencia?', options: ['P2', 'A1', 'P1', 'A3'], answer: 0, explain: 'P2 es el festón central del velo posterior. P1 es lateral (junto a la comisura anterolateral y la orejuela) y P3 medial (posteromedial).' },
            { type: 'mc', prompt: 'En el eje corto paraesternal a nivel aórtico, ¿qué velo sigmoideo queda junto al septo interauricular?', options: ['No coronariano', 'Coronariano derecho', 'Coronariano izquierdo', 'Ninguno: el septo no se ve en este plano'], answer: 0, explain: 'El no coronariano linda con el septo interauricular; el coronariano derecho es el más anterior (junto al TSVD) y el izquierdo, posterolateral. Juntos forman el signo de "Mercedes".' },
          ],
        },
        {
          id: 'eco-u7-l3',
          title: 'Cuantificación del VI y aurículas',
          questions: [
            { type: 'match', prompt: 'Relaciona el parámetro con su límite superior normal (ASE/EACVI 2015)', pairs: [['Masa VI indexada, varón', '≤ 115 g/m²'], ['Masa VI indexada, mujer', '≤ 95 g/m²'], ['Grosor parietal relativo', '≤ 0,42'], ['Volumen AI indexado', '≤ 34 ml/m²']], explain: 'Son valores por método lineal (Devereux). El volumen AI > 34 ml/m² es además uno de los criterios de disfunción diastólica.' },
            { type: 'mc', prompt: 'Varón: septo y pared posterior de 12 mm, DTDVI 48 mm y masa VI indexada de 100 g/m². ¿Qué geometría tiene el VI?', options: ['Remodelado concéntrico', 'Hipertrofia concéntrica', 'Hipertrofia excéntrica', 'Geometría normal'], answer: 0, explain: 'GPR = 2 × 12 / 48 = 0,50 (> 0,42) con masa normal (≤ 115 g/m²) = remodelado concéntrico. Con masa alta sería HVI concéntrica.' },
            { type: 'mc', prompt: 'Simpson biplano: volumen telediastólico 150 ml y telesistólico 90 ml. ¿FEVI?', options: ['40 %', '60 %', '67 %', '50 %'], answer: 0, explain: 'FEVI = (VTD − VTS)/VTD = 60/150 = 40 %. 60 % sería VTS/VTD y 67 % dividir entre el VTS. Normal: ≥ 52 % en varones y ≥ 54 % en mujeres.' },
            { type: 'mc', prompt: 'Mujer con superficie corporal de 1,6 m² y VTD del VI (Simpson) de 112 ml. ¿Cómo lo interpretas?', options: ['Dilatado: 70 ml/m² (límite en mujer 61)', 'Normal: 70 ml/m² (límite 74 ml/m²)', 'Normal: se indexa por talla, no por SC', 'Dilatado: 179 ml/m²'], answer: 0, explain: '112 / 1,6 = 70 ml/m². El límite de 74 ml/m² es el de varones: usar umbrales masculinos infradiagnostica la dilatación en mujeres.' },
            { type: 'tf', prompt: 'La FEVI por modo M (Teichholz) es fiable en pacientes con alteraciones de la contractilidad segmentaria.', answer: false, explain: 'Solo mide la base y asume una geometría elipsoidal; ASE/EACVI 2015 desaconseja Teichholz y Quiñones para la FEVI. Usa Simpson biplano o 3D.' },
            { type: 'tf', prompt: 'Medir con Simpson en planos apicales escorzados (foreshortening) tiende a infraestimar los volúmenes del VI.', answer: true, explain: 'Al cortar el VI por fuera del ápex verdadero se acorta el eje largo. El 3D y el contraste reducen este error.' },
          ],
        },
        {
          id: 'eco-u7-l4',
          title: 'VD, strain, 3D y contraste',
          questions: [
            { type: 'match', prompt: 'Relaciona el parámetro del VD con su valor anormal (ASE/EACVI 2015)', pairs: [['Diámetro basal del VD', '> 41 mm'], ['TAPSE', '< 17 mm'], ['S′ tricuspídea (Doppler tisular)', '< 9,5 cm/s'], ['FAC del VD', '< 35 %']], explain: 'Integra varios parámetros: el TAPSE y la S′ solo miden la función longitudinal de la pared libre basal y dependen del ángulo y de la carga.' },
            { type: 'mc', prompt: 'Área telediastólica del VD 24 cm² y telesistólica 18 cm². ¿Cuál es el cambio fraccional de área (FAC)?', options: ['25 %', '33 %', '75 %', '43 %'], answer: 0, explain: 'FAC = (24 − 18)/24 = 25 % (< 35 % = disfunción sistólica del VD). 75 % sería área sistólica/diastólica y 33 % dividir entre el área sistólica.' },
            { type: 'mc', prompt: 'Paciente con FEVI 58 % y strain longitudinal global (GLS) del VI de −13 %. ¿Cómo se interpreta?', options: ['Disfunción sistólica subclínica', 'Función supranormal: más negativo es peor', 'Normal: el GLS solo vale con FEVI < 50 %', 'Artefacto: el GLS nunca es menor que −15 %'], answer: 0, explain: 'El GLS normal ronda −20 % (varía según equipo); una magnitud < 16 % es anormal aunque la FEVI sea normal. En cardio-oncología cuenta una caída relativa > 15 %.' },
            { type: 'tf', prompt: 'Los volúmenes del VI medidos en 3D suelen ser mayores que en 2D, por lo que sus valores normales no son intercambiables.', answer: true, explain: 'El 2D escorza el ápex y asume una geometría; el 3D es más exacto y reproducible, útil en seguimiento (cardio-oncología, valvulopatías).' },
            { type: 'mc', prompt: '¿Cuál es la indicación clásica de contraste ecográfico (microburbujas) en el eco transtorácico?', options: ['≥ 2 segmentos contiguos del VI no visibles', 'Valorar la función diastólica', 'Medir el TAPSE', 'Detectar derrame pericárdico'], answer: 0, explain: 'Mejora la definición del endocardio para FEVI y contractilidad; también ante sospecha de trombo apical, MCH apical, no compactación o pseudoaneurisma. Se usa con índice mecánico bajo.' },
            { type: 'tf', prompt: 'En el algoritmo diastólico ASE 2025, un strain de reservorio de la AI ≤ 18 % apoya presiones de llenado del VI elevadas.', answer: true, explain: 'Es útil cuando los parámetros clásicos (E/e′, IT, volumen AI) dan un resultado indeterminado; la AI rígida pierde capacidad de reservorio.' }, // Fuente: ASE 2025 función diastólica
          ],
        },
      ],
    },
  ],
};
