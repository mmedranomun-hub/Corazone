# Fuentes de casos clínicos y preguntas de cardiología (catálogo de inspiración)

Catálogo de webs, revistas y plataformas que publican casos o preguntas de cardiología (ECG, ETT, ETE, cateterismo). Sirve para **elegir temas, hallazgos clave y patrones docentes** con los que el equipo redacta casos **originales** para `js/data/casos.js`. Banco de temas derivado: [`banco-temas-casos.md`](banco-temas-casos.md).

> **Derechos de autor (obligatorio).** No se copian textos, viñetas, preguntas, trazados ni imágenes de ninguna fuente, ni se parafrasea un caso concreto reconocible (misma edad + sexo + historia + cifras). Se toma solo el **tema** y el **patrón docente** (qué hallazgo se enseña, qué cálculo, qué decisión). Las cifras se generan nuevas y se contrastan con la guía ESC/AHA vigente (`bibliografia.md`), no con el caso de origen. Nuestros visuales son siempre procedurales (`js/ecg.js`, `js/pressure.js`, `js/diagrams.js`).

**Verificación de URL (7-oct-2026):** el proxy de la sesión bloqueaba la descarga directa de páginas (WebFetch), así que las URL marcadas **✔** son las que aparecieron como resultado en buscadores para ese recurso. Las marcadas **—** no se pudieron verificar y no se dan: búsquese por nombre. Antes de citar una URL en la app o en un PR, ábrela en el navegador.

Leyenda: **Nivel** E = estudiante, M = MIR, R = residente/cardiólogo · **Acceso** L = libre, R = registro gratuito, P = pago/suscripción.

## 1. Preparación MIR (España, español)

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla sin copiar |
|---|---|---|---|---|---|
| **Ministerio de Sanidad — cuadernos de examen FSE (MIR)** | Cuadernos oficiales de exámenes anteriores, con imágenes y plantilla de respuestas. Fuente primaria de *qué se pregunta* en cardiología (ECG e imagen incluidos). | M | L | ✔ https://fse.mscbs.gob.es/fseweb/view/public/datosanteriores/cuadernosExamen/busquedaConvocatoria.xhtml (dominio heredado; puede redirigir a sanidad.gob.es) | Contar frecuencia de temas por año (p. ej. EA, FA, SCA, endocarditis, taponamiento, ECG de IAM/BAV/WPW) para priorizar. Nunca reproducir el enunciado ni la imagen oficial. |
| **Ministerio de Sanidad — prueba de cardiología para especialistas extracomunitarios** | PDF de test de cardiología de nivel especialista. | R | L | ✔ https://vsf-iwsold-pro-portal.sanidad.gob.es/areas/profesionesSanitarias/profesiones/especialistasExtracomunitarios/docs/CARDIOLOGIA-TEST.pdf | Calibrar el nivel N3 (qué detalle exige un especialista). Solo temas. |
| **ProMIR (Médica Panamericana)** | Plataforma MIR con banco de >36 000 preguntas, simulacros, manual de Cardiología y "10 temas más preguntados". | M | P | ✔ https://www.medicapanamericana.com/opes/promir-estudiante · manual: ✔ https://www.medicapanamericana.com/es-ES/libros/promir-cardiologia-2025-2026 | Usar su jerarquía de temas "más preguntados" como lista de prioridades; no copiar preguntas ni esquemas. |
| **AMIR (Academia AMIR)** | Manual de Cardiología y cirugía cardiovascular, banco de preguntas, simulacros; insiste en estudio razonado y reglas mnemotécnicas. | M | P | — | Patrón docente: preguntas que obligan a *integrar* (no memorizar un dato). Mnemotecnias propias, nunca las suyas. |
| **CTO Medicina** | Manual CTO de Medicina y Cirugía (volumen Cardiología y cirugía cardiovascular), resúmenes, test. | M | P | — | Detectar el "temario mínimo" MIR; contrastar enfoques. Sin copiar tablas ni figuras. |

## 2. Sociedades y recursos en español

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla |
|---|---|---|---|---|---|
| **Sociedad Española de Cardiología (SEC)** | Concursos de casos clínicos para residentes (congreso SEC), libros de casos (p. ej. cardiorrenal), infografías, agenda formativa. | R | L/R | ✔ https://secardiologia.es | Ver qué casos se premian (patrón: caso real con giro diagnóstico + iconografía). Solo temas. |
| **SEC — "Cardiología hoy"** | Blog de comentarios de artículos recientes de la SEC, recopilado en e-books anuales. | R | L | e-book en CardioTeca: ✔ https://www.cardioteca.com/e-books/1658-publicacion-del-e-book-cardiologia-hoy-2015.html | Detectar ensayos y conceptos nuevos que cambian la decisión terapéutica (para preguntas N3). |
| **Revista Española de Cardiología (Rev Esp Cardiol)** | Originales, guías ESC traducidas, secciones de imagen y cartas científicas con casos. | R | L/P | ✔ https://www.revespcardiol.org | Usar las guías ESC traducidas para la **terminología española** correcta. Temas de "imagen" como inspiración. |
| **REC: Interventional Cardiology** | Revista de la Asociación de Cardiología Intervencionista (SEC), bilingüe, acceso abierto (CC BY-NC-ND): casos, imágenes, revisiones de ensayos. | R | L | ✔ https://www.recintervcardiol.org | Fuente principal de temas de hemodinámica en español (SCAD, complicaciones, TAVI, OTC). La licencia ND **no** permite obras derivadas: solo temas. |
| **CardioTeca** | Portal español: e-books de casos ("Los casos clínicos más docentes del año" 2022–2025), "El ECG del paciente agudo cardiológico" (vol. 1: 47 casos; vol. 2: 69), Top 10 ElectroCardioExperts, Aula ECG. | E/M/R | L/R | ✔ https://www.cardioteca.com/e-books/8110-los-casos-clinicos-mas-docentes-del-ano-2025-en-cardiologia.html · ✔ https://cardioteca.com/e-books/e-books-de-electrocardiografia/3194-el-electrocardiograma-del-paciente-agudo-cardiologico.html · ✔ https://www.cardioteca.com/e-books/e-books-de-electrocardiografia/8004-top-10-casos-electrocardioexperts-2025.html | Muy útil para el **registro clínico español** (lenguaje de urgencias/planta). Extraer tipología de casos de ECG agudo; no reproducir trazados. |

## 3. ECG (inglés)

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla |
|---|---|---|---|---|---|
| **LITFL — ECG Library y Top 150 ECG** | Biblioteca de ECG por diagnóstico (A-Z, "killer ECG patterns", diferencial) y quiz de casos con puntos clave. Licencia CC BY-NC-SA. | E/M/R | L | ✔ https://litfl.com/top-100/ecg · ✔ https://litfl.com/mi-localization-ecg-library/ · casos: ✔ https://litfl.com/clinical-cases/ecg-exigency/ | Lista de patrones a cubrir (Wellens, De Winter, Sgarbossa, Osborn, digoxina, tricíclicos, Brugada…). Aunque la licencia permite adaptar con atribución, **no** la usamos: ShareAlike obligaría a relicenciar; redactamos desde cero. |
| **ECG Wave-Maven (BIDMC/Harvard)** | Cientos de casos de autoevaluación con ECG real, modo quiz y modo referencia; para estudiantes y clínicos. | E/M | L | ✔ http://ecg.bidmc.harvard.edu (descrito en MedEdPORTAL/DOAJ) | Patrón "viñeta mínima + ECG + 5 opciones": base del formato de nuestras preguntas `mc` con `ecg12`. |
| **Dr. Smith's ECG Blog** | Casos de urgencias sutiles; foco en **OMI vs NOMI**, equivalentes de IAMCEST, Sgarbossa modificado, falsos positivos de ST. | R | L | ✔ https://drsmithsecgblog.com | Inspiración para el bloque N3 de ECG (OMI sin elevación de ST, oclusión de circunfleja, hiperpotasemia que simula IAM). |
| **ECG Weekly (Amal Mattu)** | "Caso de la semana" en vídeo con viñeta, preguntas de diagnóstico y manejo. | M/R | P | ✔ referencia: https://tech.medicine.wsu.edu/technology/ecg-weekly/ (servicio en ecgweekly.com) | Patrón docente "ECG que cambia la decisión en urgencias". Solo temas. |

## 4. Ecocardiografía (inglés)

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla |
|---|---|---|---|---|---|
| **EACVI e-learning (ESC)** | Curso de ecocardiografía según el *Core Syllabus* EACVI: módulo ETT (31 vídeos) y ETE (16 vídeos); prepara la certificación. | R | P (miembros) | ✔ https://www.escardio.org/communities/associations/eacvi/education/eacvi-e-learning-courses/echocardiography/ | El *syllabus* EACVI como checklist de competencias para N3 (cuantificación, valvulopatías, prótesis, ETE). |
| **ASE — CASE journal y ASEUniversity** | *CASE*: revista de casos de imagen cardiovascular, acceso abierto (desde 2016). ASEUniversity: contenido para miembros. Guías ASE de cuantificación. | R | L / P | ✔ https://www.asecho.org/practice-clinical-resources/ | Temas de imagen poco habituales para N3 y valores de cuantificación (contrastar siempre con guía ASE/EACVI). |
| **123sonography** | Plataforma de cursos de eco (Echo BachelorClass, Echo Pass, "Echo in Guidelines") con casos y demostraciones. | E/R | P | ✔ https://123sonography.com | Secuencia pedagógica básica → avanzada; "Echo in Guidelines" = enfoque eco→decisión (EA, IC, HP), que es justo nuestro formato. |
| **ECHOpedia** | Libro de texto libre de ecocardiografía con ejemplos y casos (autores mayoritariamente de Países Bajos). | E/R | L | ✔ https://www.echopedia.org | Repaso de técnica y medidas (PISA, continuidad, THP) antes de redactar cálculos. Sin copiar figuras. |
| **Radiopaedia (sección cardiaca)** | Casos de TC/RM cardiaca y cardiopatía congénita. Licencia CC BY-NC-SA. | E/R | L | ✔ https://radiopaedia.org/cases | Temas de cardiopatía congénita y masas (mixoma, Ebstein, coartación) para casos integrados. |

## 5. Hemodinámica y cardiología intervencionista (inglés)

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla |
|---|---|---|---|---|---|
| **PCRonline (EuroPCR)** | Casos "Read & Share", casos en directo (TAVI, OTC, TCI, bifurcaciones, mitral, tricúspide, IAMCEST), e-courses. | R | L/R | ✔ https://www.pcronline.com | Temas de complicaciones y estrategia (bifurcación, no-reflow, perforación). |
| **Cath Lab Digest (HMP)** | Revista con sección de *case reports* de sala (acceso radial, disección, cierre de orejuela…). | R | L | ✔ https://www.hmpgloballearningnetwork.com/site/cathlab | Ideas de complicaciones de acceso y técnica para N3. |
| **TCTMD (CRF)** | Noticias y formación de cardiología intervencionista; cobertura de TCT y ensayos. | R | L/R | ✔ https://www.tctmd.com/welcome | Actualizar `explain` con ensayos clave (DanGer Shock, ECLS-SHOCK, FAME…). |
| **SCAI** | Clasificación de shock SCAI (2019, actualizada 2022), consensos de hemodinámica. | R | L | ✔ https://scai.org/scai-previews-expert-consensus-update-scai-shock-stage-classification | Estadios A–E para casos de shock y escalada de soporte. |

## 6. Revistas de casos clínicos (inglés)

| Fuente | Qué ofrece | Nivel | Acceso | URL | Cómo usarla |
|---|---|---|---|---|---|
| **European Heart Journal – Case Reports (ESC/OUP)** | Casos, series e imágenes de toda la cardiología; acceso abierto; programa de mentoría para residentes. | R | L | ✔ https://www.escardio.org/publications/journals/ehj-case-reports/ | Cada caso trae "learning points": útiles como lista de patrones docentes (no copiar). Alineado con guías ESC. |
| **JACC: Case Reports (ACC/Elsevier)** | Casos clasificados por nivel (Beginner / Intermediate / Advanced), acceso abierto. | M/R | L | ✔ https://shop.elsevier.com/journals/jacc-case-reports/2666-0849 | Su escala de 3 niveles mapea bien a nuestro N1/N2/N3. |
| **NEJM — Clinical Problem-Solving / Images in Clinical Medicine** | Razonamiento clínico paso a paso (información revelada por etapas) e imágenes clásicas. | M/R | P (parcial) | ✔ ejemplos CME: https://ce.massmed.nejm.org/nejm-weekly-cme/content/thinking-outside-heart | Patrón "revelación progresiva" = nuestro campo `context` por pregunta. Solo el formato. |

## Cómo convertir una fuente en un caso original (flujo)
1. **Tema**: elegir un ⬜ de `banco-temas-casos.md` (prioridad MIR/residencia).
2. **Patrón**: anotar de 2–3 fuentes distintas *qué* se enseña (hallazgo, cálculo, decisión). Nunca trabajar con una sola fuente abierta mientras se redacta.
3. **Viñeta nueva**: edad, sexo, contexto y cifras inventados y coherentes; diversidad de pacientes (guía editorial).
4. **Contraste**: cifras y decisión con la guía ESC vigente (`bibliografia.md`); lo dudoso con `// REVISAR:`.
5. **Visual propio**: solo ids existentes de `RHYTHMS`, `TWELVE_LEAD`, `PRESSURES`, `DIAGRAMS`; si falta, pedirlo en la orden 08.
6. **Cita**: en el PR (no en la app) se puede mencionar la fuente como "inspiración temática" (nombre + URL verificada).
