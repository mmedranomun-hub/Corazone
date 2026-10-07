# Plantilla de lección

Copia el bloque en el array `lessons` de la unidad correspondiente en `js/data/<curso>.js` (o crea una unidad nueva al final de `units`). Formato definido en `CLAUDE.md`.

## Convención de ids
- Unidad: `<curso>-u<n>` → `ecg-u4`, `eco-u6`, `cate-u5`.
- Lección: `<unidad>-l<n>` → `ecg-u4-l1`.
- **Nunca** renombres ni reutilices un id existente (el progreso se guarda por id de lección). Añade al final.

## Esqueleto
```js
{
  id: '<curso>-u<N>',
  title: '<Título de la unidad>',
  lessons: [
    {
      id: '<curso>-u<N>-l<M>',
      title: '<Título corto de la lección>',
      questions: [
        // Opción múltiple (4 opciones; answer = índice de la correcta; la app baraja)
        { type: 'mc', prompt: '…', options: ['correcta', 'distractor', 'distractor', 'distractor'], answer: 0, explain: '…' },

        // Verdadero / falso
        { type: 'tf', prompt: '…', answer: true, explain: '…' },

        // Emparejar (3–4 parejas, sin repetir valores a izquierda ni a derecha)
        { type: 'match', prompt: 'Relaciona…', pairs: [['A', '1'], ['B', '2'], ['C', '3']], explain: '…' },

        // Tocar la onda (wave ∈ p | pBlocked | qrs | vent | t)
        { type: 'tap', prompt: 'Toca una onda P que no conduce', ecg: 'mobitz2', wave: 'pBlocked', explain: '…' },

        // Campos visuales opcionales (en cualquier mc/tf):
        //   ecg: '<id de RHYTHMS>'            → tira de ritmo (derivación II)
        //   ecg12: '<id de TWELVE_LEAD>'      → ECG de 12 derivaciones
        //   pressure: '<id de PRESSURES>'     → curva de presión
        //   diagram: { id: '<id de DIAGRAMS>', highlight: '<clave de parts>' }
      ],
    },
  ],
},
```

## Ejemplo completo (lección N1–N2 de ECG)
```js
{
  id: 'ecg-u9-l9', // ejemplo: usa el siguiente id libre
  title: 'Bloqueo AV: del PR a la pausa',
  questions: [
    { type: 'mc', prompt: 'Observa la tira. ¿Qué tipo de bloqueo AV muestra?', ecg: 'mobitz1', options: ['BAV 2.º grado Mobitz I', 'BAV 2.º grado Mobitz II', 'BAV de 1.er grado', 'BAV completo'], answer: 0, explain: 'El PR se alarga latido a latido hasta que una P no conduce (Wenckebach). Suele ser nodal y benigno.' },
    { type: 'tap', prompt: 'Toca la onda P que no conduce', ecg: 'mobitz1', wave: 'pBlocked', explain: 'La P bloqueada aparece a su ritmo, pero no va seguida de QRS; tras ella el PR "se resetea".' },
    { type: 'tf', prompt: 'En el Mobitz II el PR de los latidos conducidos es constante.', answer: true, explain: 'El bloqueo es súbito, sin alargamiento previo del PR; suele ser infrahisiano y es indicación de marcapasos.' },
    { type: 'match', prompt: 'Relaciona el bloqueo con su nivel más probable', pairs: [['BAV 1.er grado', 'Nodo AV'], ['Mobitz II', 'His-Purkinje'], ['BAV completo con QRS ancho', 'Infrahisiano']], explain: 'El QRS del escape orienta: estrecho → nodal; ancho → infrahisiano.' },
    { type: 'mc', prompt: 'Paciente con IAM inferior y BAV completo con escape a 45 lpm de QRS estrecho. ¿Qué arteria es la culpable más probable?', options: ['Coronaria derecha', 'Descendente anterior', 'Primera diagonal', 'Rama marginal obtusa'], answer: 0, explain: 'La CD irriga el nodo AV en ~90 % de los casos; el bloqueo suele ser transitorio.', diagram: { id: 'coronary', highlight: 'rca' } }, // REVISAR: confirmar ids en DIAGRAMS
  ],
},
```

## Tras pegar
1. `npm test` → corrige ids duplicados, `answer` fuera de rango, opciones repetidas o `explain` ausente. Nota: si `tests/content.test.js` todavía no reconoce `tap` ("tipo desconocido"), no lo uses hasta que `dev-frontend` lo añada al test; tampoco uses `ecg12`/`pressure`/`diagram` con ids que no existan en su catálogo.
2. Marca la lección como ✅ en `recursos/temario/<curso>.md`.
3. Pide revisión a `revisor-medico` con `recursos/checklist-revision.md`.
