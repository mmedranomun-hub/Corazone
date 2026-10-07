// Configuración de Firebase para las cuentas de usuario y la sincronización en la nube.
//
// Mientras valga `null`, Corazone funciona en modo local (sólo localStorage) y NO hace
// ninguna petición de red a Firebase.
//
// Para activar las cuentas (guía completa en docs/CUENTAS.md):
//   1. Crea un proyecto en https://console.firebase.google.com y registra una app web (</>).
//   2. Copia el objeto `firebaseConfig` que te muestra la consola y pégalo aquí, p. ej.:
//
//   export const firebaseConfig = {
//     apiKey: 'AIza…',
//     authDomain: 'tu-proyecto.firebaseapp.com',
//     projectId: 'tu-proyecto',
//     storageBucket: 'tu-proyecto.firebasestorage.app',
//     messagingSenderId: '1234567890',
//     appId: '1:1234567890:web:abc123',
//   };
//
// Estos valores son públicos por diseño (identifican el proyecto); la seguridad la dan
// las reglas de Firestore (firestore.rules) y los dominios autorizados de Authentication.
export const firebaseConfig = null;
