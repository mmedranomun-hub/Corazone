// Configuración de lanzamiento: contacto, Premium y analítica.
// Todo lo que valga `null` queda desactivado sin romper nada (la app funciona igual en local).
// Guía de puesta en marcha: docs/LANZAMIENTO.md.
export const APP_CONFIG = {
  // Responsable del servicio y correo de contacto (aparecen en el aviso legal, la privacidad y
  // en "Reportar un error"). Sin correo, el botón de reportar no se muestra.
  owner: null, // p. ej. 'Nombre Apellido' o 'Corazone S.L.'
  contactEmail: null, // p. ej. 'hola@corazone.app'

  premium: {
    // Cobro automático (docs/PAGOS.md): enlaces de pago de Lemon Squeezy. Tras pagar, el usuario
    // recibe por correo una clave de licencia, la pega en #/premium y la app la activa con el
    // servidor de licencias (worker/). También se aceptan códigos CZP1.… emitidos a mano.
    checkout: { monthly: null, annual: null },
    // URL del servidor de licencias desplegado, p. ej. 'https://corazone-licencias.<tu-cuenta>.workers.dev'
    licenseEndpoint: null,
    // Dónde gestiona el usuario su suscripción (cancelar, cambiar tarjeta, facturas)
    manageUrl: 'https://app.lemonsqueezy.com/my-orders',
    prices: { monthly: '4,99 €', annual: '29,99 €', annualPerMonth: '2,50 €' },
    trialDays: 7,
    // Clave pública ECDSA P-256 (JWK) con la que se verifican los códigos. La genera
    // `node scripts/premium.mjs init` (la privada se queda en tu ordenador, nunca en el repo).
    publicKey: null,
  },

  analytics: {
    // Analítica sin cookies. Proveedor admitido: 'plausible' (o compatible, p. ej. self-hosted).
    provider: null,
    domain: null, // p. ej. 'corazone.app' o 'usuario.github.io'
    src: 'https://plausible.io/js/script.manual.js',
  },
};
