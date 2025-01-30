function generarMensaje() {
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const consola = document.getElementById('consola').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;

    let mensaje = '';

    if (tipoCuenta === 'primaria') {
        mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Primaria en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión.
2️⃣ Acepta las políticas de privacidad y configura la cuenta como PRINCIPAL.
3️⃣ Descarga el juego desde la biblioteca de la cuenta comprada.
4️⃣ Una vez descargado, sal de la cuenta comprada y cambia al usuario de tu preferencia para jugar.

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de juego digital:

Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}

✅ Ventajas de la Cuenta Primaria:
- Juegas desde tu propia cuenta personal.
- Funciona tanto en línea como sin conexión.
- Puedes disfrutar de DLC y contenidos adicionales.

📌 Notas adicionales:
- No cierres sesión completamente; solo selecciona "Cerrar sesión".
- No uses la opción de "Invitado".
- Mantén la cuenta activa; eliminarla bloqueará el juego.
- Las cuentas tienen garantía de por vida, siempre que no cambie la política de Sony.

🔐 Términos y condiciones:
- No cambiar el email, contraseña o el ID online.
- En cuentas Primarias: juega desde tu cuenta personal.
- No utilices esta cuenta en más de una consola.
- No cambies detalles de la cuenta ni elimines la verificación en dos pasos.
- No agregues un teléfono ni uses la cuenta de PS4 en PS5 (o viceversa).
- Antes de cambiar el disco duro, reparar la consola o resetearla, contáctanos primero.

❗ Importante: Si incumples estas reglas, la garantía se perderá y no habrá reembolsos.

📩 Si tienes algún problema, no dudes en contactarnos. @luxurygamesarg

¡A disfrutar de tu juego! 🎮`;
    } else if (tipoCuenta === 'secundaria') {
        mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Secundaria en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión.
2️⃣ Acepta las políticas de privacidad y NO ACTIVES la cuenta como principal.
3️⃣ Descarga el juego desde la biblioteca del usuario nuevo creado.
4️⃣ Cada vez que quieras jugar, inicia sesión en el usuario que creaste con esta cuenta.

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de juego digital:

Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}

✅ Ventajas de la Cuenta Secundaria:
- Juegas desde tu propia cuenta personal.
- Funciona tanto en línea como sin conexión.
- Puedes disfrutar de DLC y contenidos adicionales.

📌 Notas adicionales:
- No cierres sesión completamente; solo selecciona "Cerrar sesión".
- No uses la opción de "Invitado".
- Mantén la cuenta activa; eliminarla bloqueará el juego.
- Las cuentas tienen garantía de por vida, siempre que no cambie la política de Sony.

🔐 Términos y condiciones:
- No cambiar el email, contraseña o el ID online.
- En cuentas Secundarias: juega exclusivamente desde la cuenta proporcionada.
- No utilices esta cuenta en más de una consola.
- No cambies detalles de la cuenta ni elimines la verificación en dos pasos.
- No agregues un teléfono ni uses la cuenta de PS4 en PS5 (o viceversa).
- Antes de cambiar el disco duro, reparar la consola o resetearla, contáctanos primero.

❗ Importante: Si incumples estas reglas, la garantía se perderá y no habrá reembolsos.

📩 Si tienes algún problema, contáctanos de inmediato. @luxurygamesarg

¡Que disfrutes tu juego! 🎮`;
    }

    document.getElementById('mensajeGenerado').textContent = mensaje;
    document.getElementById('botonCopiar').disabled = false;
}

function copiarMensaje() {
    const mensaje = document.getElementById('mensajeGenerado').textContent;
    navigator.clipboard.writeText(mensaje).then(() => {
        alert('Mensaje copiado al portapapeles.');
    });
}