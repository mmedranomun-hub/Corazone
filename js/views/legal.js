// Aviso médico, política de privacidad y términos de uso (#/legal/…), y la pantalla de aceptación.
// Plantillas razonables para el lanzamiento: deben revisarse con un profesional del derecho
// antes de cobrar (ver docs/LANZAMIENTO.md). Rellena responsable y correo en js/app-config.js.
import { getState, update } from '../storage.js';
import { APP_CONFIG } from '../app-config.js';
import { shell, screen, esc, app } from '../ui.js';
import { cora } from '../fx.js';

// Sube la versión cuando cambien los textos: se pedirá aceptarlos de nuevo.
export const LEGAL_VERSION = 1;
const UPDATED = '8 de octubre de 2026';

const owner = () => esc(APP_CONFIG.owner || 'el equipo de Corazone');
const contact = () => (APP_CONFIG.contactEmail ? `<a href="mailto:${esc(APP_CONFIG.contactEmail)}">${esc(APP_CONFIG.contactEmail)}</a>` : 'los canales de contacto indicados en la ficha de la aplicación');

export const MEDICAL_SUMMARY = 'Corazone es una herramienta educativa para estudiantes y residentes. No es un producto sanitario, no sustituye el juicio clínico, las guías oficiales ni la supervisión docente, y no debe usarse para tomar decisiones sobre pacientes reales.';

const PAGES = {
  aviso: {
    title: 'Aviso médico',
    body: () => `
      <p><b>${MEDICAL_SUMMARY}</b></p>
      <h2>Finalidad educativa</h2>
      <p>El contenido (preguntas, casos clínicos, trazados de ECG, curvas de presión y esquemas) está pensado para el aprendizaje y el repaso. Los trazados y las curvas se generan por ordenador para ilustrar conceptos: son representaciones didácticas, no registros reales de pacientes.</p>
      <h2>Basado en guías, pero sin garantía</h2>
      <p>El contenido se elabora a partir de guías de práctica clínica (ESC, AHA/ACC, ASE/EACVI y otras) y se revisa periódicamente. Aun así, la medicina cambia y puede haber errores u omisiones. Ante cualquier discrepancia, prevalecen las guías vigentes, la ficha técnica de los fármacos y el criterio del profesional responsable.</p>
      <h2>Urgencias</h2>
      <p>Si tú u otra persona tenéis un problema de salud, acude a un profesional sanitario. En caso de urgencia llama al 112.</p>
      <h2>¿Has encontrado un error?</h2>
      <p>Usa el botón «Reportar» que aparece tras corregir cada pregunta o escribe a ${contact()}. Lo revisaremos y corregiremos lo antes posible.</p>`,
  },
  privacidad: {
    title: 'Política de privacidad',
    body: () => `
      <p>Responsable del tratamiento: ${owner()}. Contacto: ${contact()}.</p>
      <h2>Qué datos tratamos</h2>
      <ul>
        <li><b>Progreso de aprendizaje</b> (XP, lecciones, racha, ajustes, nombre que elijas): se guarda <b>en tu dispositivo</b>. Si creas un perfil local, su contraseña se guarda cifrada (PBKDF2) en el propio dispositivo.</li>
        <li><b>Cuenta en la nube</b> (sólo si la creas): correo electrónico y progreso, almacenados en Google Firebase para sincronizar tus dispositivos. Base jurídica: ejecución del servicio que solicitas.</li>
        <li><b>Estadísticas de uso</b> (si están activadas): eventos agregados y anónimos (p. ej. «lección completada»), sin cookies, sin identificadores personales y sin seguimiento entre sitios. Puedes desactivarlas en Ajustes; también se respetan «Do Not Track» y «Global Privacy Control». Base jurídica: interés legítimo en mejorar la aplicación.</li>
        <li><b>Pagos de Premium</b>: los gestiona el proveedor de pago (p. ej. Stripe), que trata tus datos de facturación como responsable independiente; Corazone no ve ni guarda los datos de tu tarjeta. Conservamos el correo y el código de tu suscripción para darte soporte y cumplir obligaciones fiscales.</li>
      </ul>
      <h2>Qué no hacemos</h2>
      <p>No vendemos tus datos, no mostramos publicidad personalizada y no usamos cookies de seguimiento. No pedimos ni tratamos datos de salud de pacientes: no introduzcas datos de pacientes reales en la aplicación.</p>
      <h2>Conservación</h2>
      <p>Los datos locales permanecen hasta que los borres (Ajustes → Reiniciar progreso, o borrando los datos del navegador). Los datos de la cuenta en la nube, hasta que la elimines.</p>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${contact()}. También puedes exportar tu progreso desde Perfil → Cuenta. Si no quedas satisfecho, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
      <h2>Menores</h2>
      <p>Corazone está dirigida a estudiantes universitarios y profesionales. No está pensada para menores de 14 años.</p>`,
  },
  terminos: {
    title: 'Términos de uso',
    body: () => `
      <p>Servicio prestado por ${owner()}. Contacto: ${contact()}.</p>
      <h2>Uso</h2>
      <p>Corazone se ofrece para uso educativo personal. Aceptas el <a href="#/legal/aviso">aviso médico</a>: el contenido no constituye consejo médico ni sustituye a las guías clínicas.</p>
      <h2>Plan gratuito y Premium</h2>
      <p>El plan gratuito incluye los cursos principales. Premium amplía el acceso (casos clínicos y guardias completos, vidas ilimitadas y otros beneficios descritos en la pantalla Premium) durante el periodo contratado. Las suscripciones se renuevan automáticamente hasta que las canceles en el proveedor de pago; la cancelación surte efecto al final del periodo ya pagado.</p>
      <h2>Prueba gratuita</h2>
      <p>La prueba gratuita es de uso único por perfil y termina automáticamente sin cargo.</p>
      <h2>Desistimiento</h2>
      <p>Como consumidor en la UE tienes 14 días para desistir de la contratación. Al pedir el acceso inmediato al contenido digital, aceptas que el derecho de desistimiento se pierde una vez empiezas a usar Premium; si tienes cualquier problema, escríbenos y lo resolvemos.</p>
      <h2>Códigos Premium</h2>
      <p>Los códigos son personales e intransferibles. Un código compartido o revendido puede anularse.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, preguntas, ilustraciones y el código de la aplicación son propiedad de ${owner()}. No se permite su copia o redistribución sin autorización.</p>
      <h2>Responsabilidad</h2>
      <p>Hacemos lo posible por que el contenido sea correcto y el servicio esté disponible, pero no podemos garantizarlo. En la medida permitida por la ley, no respondemos de decisiones clínicas tomadas a partir del contenido.</p>
      <h2>Cambios</h2>
      <p>Si cambian estos términos te lo indicaremos en la aplicación. Legislación aplicable: española.</p>`,
  },
};

export function viewLegal(page) {
  const p = PAGES[page];
  if (!p) {
    shell(`<a class="back" href="#/ajustes">← Ajustes</a><h1 class="page-title">Información legal</h1>
      <div class="opts">${Object.entries(PAGES).map(([k, v]) => `<a class="opt" href="#/legal/${k}"><b>${v.title}</b></a>`).join('')}</div>`, 'profile');
    return;
  }
  const html = `<article class="legal"><a class="back" href="#/legal">← Información legal</a><h1 class="page-title">${p.title}</h1><p class="muted small">Última actualización: ${UPDATED}</p>${p.body()}</article>`;
  if (getState().onboarded) shell(html, 'profile');
  else screen(`${html}<a class="btn ghost" href="#/bienvenida">Volver</a>`, 'legal-screen');
}

export const legalPending = (s = getState()) => s.onboarded && (s.legalAccepted || 0) < LEGAL_VERSION;
export const acceptLegal = () => update((s) => { s.legalAccepted = LEGAL_VERSION; });

// Pantalla única para usuarios que ya estaban dentro antes de existir el aviso (o si cambia).
export function viewLegalGate(onAccept) {
  screen(`
    ${cora('think', 110)}
    <h1>Antes de seguir</h1>
    <p>${MEDICAL_SUMMARY}</p>
    <p class="muted">Lee el <a href="#/legal/aviso">aviso médico</a>, la <a href="#/legal/privacidad">política de privacidad</a> y los <a href="#/legal/terminos">términos de uso</a>.</p>
    <button class="btn primary" data-accept style="--accent:#58cc02">Entendido, continuar</button>`, 'legal-gate');
  app.querySelector('[data-accept]').onclick = () => { acceptLegal(); onAccept(); };
}
