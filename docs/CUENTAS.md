# Cuentas de usuario: perfiles locales, código de progreso y Firebase

Corazone tiene dos modos de cuenta:

- **Sin Firebase** (`firebaseConfig = null`, por defecto): **perfiles locales** en el dispositivo +
  **código de progreso** para pasar el progreso a otro dispositivo. No hay servidor ni red.
- **Con Firebase** (sección 1 en adelante): registro e inicio de sesión en la nube (email/contraseña o
  Google), recuperación de contraseña y sincronización automática. Exportar/importar sigue disponible.

## Perfiles locales (sin servidor)

- **Registro**: nombre + email o usuario + contraseña (mín. 6). La contraseña se guarda como hash
  **PBKDF2-SHA-256** (310 000 iteraciones, sal aleatoria de 16 bytes, Web Crypto `crypto.subtle`);
  nunca en claro. Requiere contexto seguro (HTTPS o `localhost`). No hay recuperación de contraseña.
- **Varios perfiles por dispositivo**, cada uno con su progreso:

  | Clave localStorage | Contenido |
  |---|---|
  | `corazone:profiles` | `[{ id, name, login, created, pw: { algo, iter, salt, hash } }]` |
  | `corazone:profile` | id del perfil activo (ausente = invitado) |
  | `corazone:v1` | progreso del invitado (sin perfil) |
  | `corazone:v1:<id>` | progreso de cada perfil |

- **Migración**: al crear un perfil sin haber ninguno activo, el progreso del invitado pasa al perfil
  y `corazone:v1` se borra. Un perfil creado desde otro perfil empieza de cero (y hace el onboarding).
- **Cerrar sesión** vuelve al invitado; si hay perfiles y el invitado no ha hecho el onboarding, la app
  muestra «¿Quién está aprendiendo?». **Reiniciar progreso** sólo afecta al perfil activo.
- Código: `js/auth.js` (`createProfile`, `signInLocal`, `signOutLocal`, `deleteProfile`, `listProfiles`,
  `localProfile`, `hashPassword`, `verifyPassword`) y `js/storage.js` (`useProfile`, `activeProfileId`,
  `onProfile`, `peekState`).

## Pasar el progreso a otro dispositivo (código o archivo)

**Cuenta → Pasar progreso**:

- **Exportar**: archivo `<nombre>-AAAA-MM-DD.corazone.json` o código de texto para copiar.
- **Importar**: pegar el código o elegir el archivo → previsualización (nombre, XP, lecciones, racha) →
  **Fusionar** (`mergeStates`, conserva lo mejor de ambos) o **Reemplazar** (con confirmación).
  Se aplica al perfil activo (o al invitado). No incluye la contraseña.

Formatos (en `js/sync.js`: `makeBackup`, `encodeBackup`, `readBackup`, `applyBackup`):

```
Archivo: { "app": "corazone", "kind": "progress", "v": 1, "exportedAt": <ms>, "name": "Ana", "state": { … } }
Código:  CZ1.<z|j>.<base64url>.<checksum>
         z = JSON comprimido con CompressionStream('deflate-raw'); j = JSON sin comprimir (navegadores sin CompressionStream)
         checksum = FNV-1a 32 bits (8 hex) del tramo base64url
```

`readBackup` ignora espacios y saltos de línea, y da mensajes claros si el código está incompleto,
es de otra versión, no es de Corazone o está dañado.

---

# Activar las cuentas en la nube (Firebase)

Si activas Firebase, los usuarios podrán **registrarse, iniciar sesión (email/contraseña o Google), recuperar
la contraseña** y **continuar en cualquier dispositivo** donde lo dejaron.

Mientras `js/firebase-config.js` tenga `firebaseConfig = null`, la app no hace ninguna petición a
Firebase y usa los perfiles locales.

Tiempo estimado: 10–15 minutos. Plan gratuito (Spark) suficiente.

---

## 1. Crear el proyecto

1. Entra en <https://console.firebase.google.com> con tu cuenta de Google.
2. Pulsa **Crear un proyecto** (o *Añadir proyecto*), ponle un nombre (p. ej. `corazone`) y continúa.
3. Google Analytics es opcional: puedes desactivarlo. Pulsa **Crear proyecto**.

## 2. Registrar la app web y copiar la configuración

1. En la página principal del proyecto, pulsa el icono **Web** (`</>`).
2. Apodo de la app: `Corazone`. **No** marques Firebase Hosting (usamos GitHub Pages). Pulsa **Registrar app**.
3. Firebase te muestra un bloque como este. Copia **sólo el objeto** `firebaseConfig`:

   ```js
   const firebaseConfig = {
     apiKey: "AIza…",
     authDomain: "corazone-xxxx.firebaseapp.com",
     projectId: "corazone-xxxx",
     storageBucket: "corazone-xxxx.firebasestorage.app",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123"
   };
   ```

   (Puedes volver a verlo en ⚙️ **Configuración del proyecto → General → Tus apps**.)

4. Abre `js/firebase-config.js` en el repositorio y sustituye `export const firebaseConfig = null;` por:

   ```js
   export const firebaseConfig = {
     apiKey: 'AIza…',
     authDomain: 'corazone-xxxx.firebaseapp.com',
     projectId: 'corazone-xxxx',
     storageBucket: 'corazone-xxxx.firebasestorage.app',
     messagingSenderId: '1234567890',
     appId: '1:1234567890:web:abc123',
   };
   ```

   > Estos valores **no son secretos**: identifican el proyecto y es normal que estén en el código
   > público. La protección la dan las reglas de Firestore (paso 5) y los dominios autorizados (paso 4).

## 3. Activar los métodos de inicio de sesión

1. Menú lateral **Compilación → Authentication** → **Comenzar**.
2. Pestaña **Método de inicio de sesión**:
   - **Correo electrónico/contraseña** → *Habilitar* (deja desactivado "Vínculo de correo electrónico") → **Guardar**.
   - **Google** → *Habilitar* → elige un **correo de asistencia** del proyecto → **Guardar**.
3. (Opcional) Pestaña **Plantillas** → *Restablecimiento de contraseña*: cambia el idioma de la
   plantilla a **español** y personaliza el remitente. La app ya pide los correos en español.

## 4. Autorizar el dominio de GitHub Pages

1. **Authentication → Configuración → Dominios autorizados** → **Añadir dominio**.
2. Añade el dominio donde se publica la app, **sin** `https://` ni ruta:
   - `mmedranomun-hub.github.io`
   - y tu dominio propio si usas uno.
3. `localhost` ya viene autorizado (para probar con `npm start` o `python3 -m http.server`).

Sin este paso, el inicio de sesión con Google falla con *"Este dominio no está autorizado"*.

## 5. Crear la base de datos Firestore y sus reglas

1. Menú **Compilación → Firestore Database** → **Crear base de datos**.
2. Ubicación: una región europea (p. ej. `eur3 (europe-west)`); no se puede cambiar después.
3. Elige **Iniciar en modo de producción** → **Crear**.
4. Pestaña **Reglas**: borra el contenido y pega el del archivo [`firestore.rules`](../firestore.rules)
   de este repositorio. Pulsa **Publicar**.

   Lo que hacen esas reglas:
   - Cada usuario sólo puede leer/escribir **su propio** documento `users/{uid}`.
   - El documento sólo puede tener los campos `data` (texto, máx. 500 KB), `updatedAt` (número) y `v`.
   - Cualquier otra colección queda denegada.

## 6. Publicar y probar

1. Haz commit de `js/firebase-config.js` y súbelo a la rama que publica GitHub Pages.
2. Abre la app → **Perfil → Cuenta → Registrarse**. Crea una cuenta.
3. En Firebase: **Authentication → Usuarios** debe aparecer el usuario y en **Firestore → Datos**
   el documento `users/<uid>` con tu progreso.
4. Abre la app en otro dispositivo o navegador, **Iniciar sesión** con la misma cuenta y comprueba
   que el progreso aparece.

---

## Cómo funciona la sincronización

- El progreso completo se guarda en `users/{uid}` como JSON, con `updatedAt`.
- **Al iniciar sesión** se descarga la copia de la nube y se **fusiona** con la del dispositivo
  (`mergeStates` en `js/sync.js`): se conserva lo mejor de cada una (XP máxima, máximas estrellas
  por lección, unión de logros legendarios, historias, misiones y repasos, racha más reciente…).
  Así no se pierde nada aunque hayas practicado sin conexión en dos dispositivos.
- Después, cada cambio se sube a los ~2 s, al recuperar la conexión y al salir de la app.
- En **Perfil → Cuenta** se ve el estado: ☁️ sincronizado, ⏳ guardando o 📴 sin conexión.
- Al **cerrar sesión** la app pregunta si borrar los datos de ese dispositivo (útil en ordenadores compartidos).

## Problemas frecuentes

| Mensaje | Causa y solución |
|---|---|
| "Este dominio no está autorizado" | Falta el paso 4. |
| "Este método de acceso no está activado" | Falta habilitar Email/contraseña o Google (paso 3). |
| ⚠️ "No se pudo sincronizar" | Reglas de Firestore no publicadas o base de datos no creada (paso 5). |
| La ventana de Google no se abre | El navegador bloquea ventanas emergentes; la app usa redirección automáticamente. |
| No llega el correo de recuperación | Revisa la carpeta de spam; el remitente es `noreply@<proyecto>.firebaseapp.com`. |

Para desactivar las cuentas, vuelve a poner `export const firebaseConfig = null;`.
