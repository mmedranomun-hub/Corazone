// Configuración de lanzamiento: contacto, Premium y analítica.
// Todo lo que valga `null` queda desactivado sin romper nada (la app funciona igual en local).
// Guía de puesta en marcha: docs/LANZAMIENTO.md.
export const APP_CONFIG = {
  // Responsable del servicio y correo de contacto (aparecen en el aviso legal, la privacidad y
  // en "Reportar un error"). Sin correo, el botón de reportar no se muestra.
  owner: null, // p. ej. 'Nombre Apellido' o 'Corazone S.L.'
  contactEmail: null, // p. ej. 'hola@corazone.app'

  premium: {
    // Enlaces de pago (Stripe Payment Links, Lemon Squeezy…). Tras pagar, el usuario recibe un
    // código CZP1.… generado con `node scripts/premium.mjs issue` y lo canjea en #/premium.
    checkout: { monthly: null, annual: null },
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
