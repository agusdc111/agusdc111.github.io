// Establecer el estado inicial del contenedor al cargar la página
document.addEventListener('DOMContentLoaded', toggleAccountType);

// Mostrar u ocultar el contenedor de tipo de cuenta según el tipo de producto
function toggleAccountType() {
    const tipoProducto = document.getElementById('tipoProducto').value;
    const cuentaContainer = document.getElementById('cuentaContainer');
    if (tipoProducto === 'juego') {
        cuentaContainer.style.display = 'block';
    } else {
        cuentaContainer.style.display = 'none';
    }
}

// Generar el mensaje basado en las selecciones del formulario
function generarMensaje() {
    const tipoProducto = document.getElementById('tipoProducto').value;
    const consola = document.getElementById('consola').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;

    let mensaje = '';

    if (tipoProducto === 'plus') {
        if (consola === 'ps4') {
            mensaje = `🔐 Instrucciones para configurar tu suscripción PS PLUS en PS4:
1️⃣ En tu PS4, mantén apretado el botón PS y ve a ALIMENTACIÓN.
2️⃣ Presiona en CAMBIAR USUARIO.
3️⃣ Ve a la izquierda del todo, crea un nuevo usuario y usa los datos proporcionados para iniciar sesión (NO uses un usuario de invitado).
4️⃣ Dale a ACEPTAR dos veces seguidas.
5️⃣ Ve a Configuración > ADMINISTRACIÓN DE CUENTAS.
6️⃣ Presiona ACTIVAR COMO PRINCIPAL (NO CIERRES SESIÓN).
7️⃣ Mantén presionado el botón PS, ve a ALIMENTACIÓN y selecciona SALIR DEL PERFIL.
8️⃣ Verifica en tu cuenta personal que las funciones online de algún juego funcionen.
9️⃣ ¡A disfrutar!

👨‍💻 Datos de la cuenta
Usa los siguientes datos para iniciar sesión:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

📌 Notas adicionales:
- No cierres sesión.
- No uses la opción de "Invitado".
- Mantén la cuenta en tu PS4; eliminarla quitará los beneficios de PS PLUS.
- Garantía de por vida, siempre que no cambie la política de Sony.

🔐 Términos y condiciones:
- No cambies email, contraseña ni ID online.
- No uses esta cuenta en más de una consola.
- No modifiques detalles ni elimines la verificación en dos pasos.
- No añadas un teléfono ni uses la cuenta de PS4 en PS5 (o viceversa).
- Contacta con nosotros antes de cambiar el disco duro, reparar o resetear la consola.

❗ Importante: Incumplir estas reglas anula la garantía y no habrá reembolsos.

📩 ¿Problemas? Contáctanos: @luxurygamesarg

¡Disfruta tu suscripción! 🎮`;
        } else if (consola === 'ps5') {
            mensaje = `🔐 Instrucciones para configurar tu suscripción PS PLUS en PS5:
1️⃣ En tu PS5, mantén apretado el botón PS y ve a ALIMENTACIÓN.
2️⃣ Presiona en CAMBIAR USUARIO.
3️⃣ Ve a la izquierda del todo, crea un nuevo usuario y usa los datos proporcionados para iniciar sesión (NO uses un usuario de invitado).
4️⃣ Acepta todo lo necesario.
5️⃣ Ve a Ajustes > USUARIOS Y CUENTAS.
6️⃣ En "Otro", selecciona COMPARTIR CONSOLA Y JUGAR OFFLINE:
   - Si está activado, elige NO DESACTIVAR.
   - Si no, selecciona ACTIVAR.
   - NO CERRAR SESION
7️⃣ Mantén presionado el botón PS, ve a ALIMENTACIÓN y selecciona SALIR DEL PERFIL.
8️⃣ Verifica en tu cuenta personal que las funciones online de algún juego funcionen.
9️⃣ ¡A disfrutar!

👨‍💻 Datos de la cuenta
Usa los siguientes datos para iniciar sesión:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

📌 Notas adicionales:
- No cierres sesión.
- No uses la opción de "Invitado".
- Mantén la cuenta en tu PS5; eliminarla quitará los beneficios de PS PLUS.
- Garantía de por vida, siempre que no cambie la política de Sony.

🔐 Términos y condiciones:
- No cambies email, contraseña ni ID online.
- No uses esta cuenta en más de una consola.
- No modifiques detalles ni elimines la verificación en dos pasos.
- No añadas un teléfono ni uses la cuenta de PS4 en PS5 (o viceversa).
- Contacta con nosotros antes de cambiar el disco duro, reparar o resetear la consola.

❗ Importante: Incumplir estas reglas anula la garantía y no habrá reembolsos.

📩 ¿Problemas? Contáctanos: @luxurygamesarg

¡Disfruta tu suscripción! 🎮`;
        }
    } else {
        // Lógica para juegos (primarias y secundarias) permanece igual
        const tipoCuenta = document.getElementById('tipoCuenta').value;
        if (tipoCuenta === 'primaria') {
            if (consola === 'ps4') {
                mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Primaria en PS4:
1️⃣ En tu PS4, mantén apretado el botón PS y ve a ALIMENTACIÓN.
2️⃣ Presiona en CAMBIAR USUARIO.
3️⃣ Ve a la izquierda del todo, crea un nuevo usuario y usa los datos proporcionados para iniciar sesión (NO uses un usuario de invitado).
4️⃣ Dale a ACEPTAR dos veces seguidas.
5️⃣ Dirígete a Biblioteca (al fondo a la derecha), ve a Comprados y descarga el juego.
6️⃣ Ve a Configuración > ADMINISTRACIÓN DE CUENTAS.
7️⃣ Presiona ACTIVAR COMO PRINCIPAL, luego RESTAURAR LICENCIAS y después CERRAR SESIÓN.
8️⃣ Mantén presionado el botón PS, ve a ALIMENTACIÓN y selecciona SALIR DEL PERFIL.
9️⃣ Verifica en tu cuenta personal que el juego se siga descargando.
🔟 ¡A disfrutar!

👨‍💻 Datos de la cuenta
Usa los siguientes datos para iniciar sesión:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

✅ Ventajas de la Cuenta Primaria:
- Juegas desde tu cuenta personal.
- Funciona online y offline.
- Incluye DLC y contenidos adicionales.

📌 Notas adicionales:
- No cierres sesión completamente, solo usa "Cerrar sesión".
- No uses "Invitado".
- Mantén la cuenta en tu PS4; eliminarla bloqueará el juego.
- Garantía de por vida, salvo cambios en la política de Sony.

🔐 Términos y condiciones:
- No cambies email, contraseña ni ID online.
- Juega desde tu cuenta personal en primarias.
- No uses esta cuenta en más de una consola.
- No modifiques detalles ni elimines la verificación en dos pasos.
- Contacta con nosotros antes de cambiar disco duro, reparar o resetear.

❗ Importante: Incumplir estas reglas anula la garantía y no habrá reembolsos.

📩 ¿Problemas? Contáctanos: @luxurygamesarg

¡Disfruta tu juego! 🎮`;
            } else if (consola === 'ps5') {
                mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Primaria en PS5:
1️⃣ En tu PS5, mantén apretado el botón PS y ve a ALIMENTACIÓN.
2️⃣ Presiona en CAMBIAR USUARIO.
3️⃣ Ve a la izquierda del todo, crea un nuevo usuario y usa los datos proporcionados para iniciar sesión (NO uses un usuario de invitado).
4️⃣ Acepta todo lo necesario.
5️⃣ Dirígete a Biblioteca, ve a Comprados y descarga el juego.
6️⃣ Vuelve a la pantalla principal, ve a Ajustes > USUARIOS Y CUENTAS.
7️⃣ En "Otro", selecciona COMPARTIR CONSOLA Y JUGAR OFFLINE:
   - Si está activado, elige NO DESACTIVAR.
   - Si no, selecciona ACTIVAR.
   Luego, selecciona CERRAR SESIÓN.
8️⃣ Vuelve a tu usuario personal y verifica que el juego se descargue.
🔟 ¡A disfrutar!

👨‍💻 Datos de la cuenta
Usa los siguientes datos para iniciar sesión:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

✅ Ventajas de la Cuenta Primaria:
- Juegas desde tu cuenta personal.
- Funciona online y offline.
- Incluye DLC y contenidos adicionales.

📌 Notas adicionales:
- No cierres sesión completamente, solo usa "Cerrar sesión".
- No uses "Invitado".
- Mantén la cuenta en tu PS5; eliminarla bloqueará el juego.
- Garantía de por vida, salvo cambios en la política de Sony.

🔐 Términos y condiciones:
- No cambies email, contraseña ni ID online.
- Juega desde tu cuenta personal en primarias.
- No uses esta cuenta en más de una consola.
- No modifiques detalles ni elimines la verificación en dos pasos.
- Contacta con nosotros antes de cambiar disco duro, reparar o resetear.

❗ Importante: Incumplir estas reglas anula la garantía y no habrá reembolsos.

📩 ¿Problemas? Contáctanos: @luxurygamesarg

¡Disfruta tu juego! 🎮`;
            }
        } else if (tipoCuenta === 'secundaria') {
            mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Secundaria en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, crea un nuevo usuario y usa los datos proporcionados para iniciar sesión (NO uses un usuario de invitado).
2️⃣ Acepta las políticas de privacidad y NO actives la cuenta como principal.
3️⃣ Descarga el juego desde la Biblioteca del usuario creado.
4️⃣ Para jugar, inicia sesión en este usuario cada vez.

👨‍💻 Datos de la cuenta
Usa los siguientes datos para iniciar sesión:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

✅ Características de la Cuenta Secundaria:
- Debes jugar desde la cuenta proporcionada, no desde tu cuenta personal.
- Funciona online y offline.
- Incluye DLC y contenidos adicionales.

📌 Notas adicionales:
- No cierres sesión completamente, solo usa "Cerrar sesión".
- No uses "Invitado".
- Mantén la cuenta activa; eliminarla bloqueará el juego.
- Garantía de por vida, salvo cambios en la política de Sony.

🔐 Términos y condiciones:
- No cambies email, contraseña ni ID online.
- Juega exclusivamente desde la cuenta proporcionada en secundarias.
- No uses esta cuenta en más de una consola.
- No modifiques detalles ni elimines la verificación en dos pasos.
- Contacta con nosotros antes de cambiar disco duro, reparar o resetear.

❗ Importante: Incumplir estas reglas anula la garantía y no habrá reembolsos.

📩 ¿Problemas? Contáctanos: @luxurygamesarg

¡Disfruta tu juego! 🎮`;
        }
    }

    document.getElementById('mensajeGenerado').textContent = mensaje;
    document.getElementById('botonCopiar').disabled = false;
}

// Copiar el mensaje al portapapeles
function copiarMensaje() {
    const mensaje = document.getElementById('mensajeGenerado').textContent;
    navigator.clipboard.writeText(mensaje).then(() => {
        alert('Mensaje copiado al portapapeles.');
    });
}
