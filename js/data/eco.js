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
  ],
};
