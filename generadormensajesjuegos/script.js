function generarMensaje() {
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const consola = document.getElementById('consola').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;

    let mensaje = '';

    let tipoCuenta = 'primaria';
    if (tipoProducto === 'juego') {
        tipoCuenta = document.getElementById('tipoCuenta').value;
    }

    if (tipoProducto === 'plus') {
        mensaje = `🔐 Instrucciones para configurar tu suscripcion PS PLUS en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, mantener apretado el boton PS y vas a ALIMENTACION
2️⃣ Presiona en CAMBIAR USUARIO
3️⃣ Ir a la izquierda de todo, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión. (NO CREAR UN USUARIO DE INVITADO)
4️⃣ DARLE A ACEPTAR DOS VECES SEGUIDAS
6️⃣ Ir a configuración, ADMINISTRACION DE CUENTAS.
7️⃣ Presionas ACTIVAR COMO PRINCIPAL (NO CERRAR SESION)
8️⃣ Una vez hecho mantenes el boton PS, vas a ALIMENTACION y presionas SALIR DEL PERFIL
9️⃣ Una vez que salgas del perfil corroboras que en tu cuenta personal que las funciones online de algun juego funciones.
🔟 A disfrutar!

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de tu suscripcion PS PLUS:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

📌 Notas adicionales:
- No cierres sesión
- No uses la opción de "Invitado".
- Mantén la cuenta activa; eliminarla quitara los beneficios de PS PLUS.
- Las cuentas tienen garantía de por vida, siempre que no cambie la política de Sony.

🔐 Términos y condiciones:
- No cambiar el email, contraseña o el ID online.
- No utilices esta cuenta en más de una consola.
- No cambies detalles de la cuenta ni elimines la verificación en dos pasos.
- No agregues un teléfono ni uses la cuenta de PS4 en PS5 (o viceversa).
- Antes de cambiar el disco duro, reparar la consola o resetearla, contáctanos primero.

❗ Importante: Si incumples estas reglas, la garantía se perderá y no habrá reembolsos.

📩 Si tienes algún problema, no dudes en contactarnos. @luxurygamesarg

¡A disfrutar de tu juego! 🎮`;
    } else {
        if (tipoCuenta === 'primaria' && consola === 'ps4') {
        mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Primaria en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, mantener apretado el boton PS y vas a ALIMENTACION
2️⃣ Presiona en CAMBIAR USUARIO
3️⃣ Ir a la izquierda de todo, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión. (NO CREAR UN USUARIO DE INVITADO)
4️⃣ DARLE A ACEPTAR DOS VECES SEGUIDAS
5️⃣ Una vez dentro de la cuenta del usuario, dirigirse a biblioteca, situada al fondo a la derecha, dirigirse a comprados, y descargar el juego comprado. 
6️⃣ Ir a configuración, ADMINISTRACION DE CUENTAS.
7️⃣ Presionas ACTIVAR COMO PRINCIPAL, luego RESTAURAR LICENCIAS y luego CERRAR SESION.
8️⃣ Una vez hecho mantenes el boton PS, vas a ALIMENTACION y presionas SALIR DEL PERFIL
9️⃣ Una vez que salgas del perfil corroboras que en tu cuenta personal se siga descargando el juego.
🔟 Una vez descargado, a disfrutar!

🔒EN EL CASO QUE SALGA CANDADO🔒
1️⃣ Ingresar al usuario del juego comprado
2️⃣ Ir a: CONFIGURACION > ADMINISTRACION DE CUENTA > INICIAR SESION > ACTIVAR COMO PS4 PRINCIPAL y volver a activarla. 
3️⃣ Luego de eso presionar CERRAR SESION
4️⃣ Mantener apretado el botón PS> Alimentación > Salir de PS4 E ingresas a tu usuario personal

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de juego digital:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

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
    } else if (tipoCuenta === 'primaria' && consola === 'ps5') {
        mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones para configurar tu Cuenta Primaria en ${consola.toUpperCase()}:
1️⃣ En tu ${consola.toUpperCase()}, mantener apretado el boton PS y vas a ALIMENTACION
2️⃣ Presiona en CAMBIAR USUARIO
3️⃣ Ir a la izquierda de todo, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión. (NO CREAR UN USUARIO DE INVITADO)
4️⃣ Aceptar todo lo necesario
5️⃣ Una vez dentro de la cuenta del usuario, dirigirse a biblioteca, dirigirse a comprados, y descargar el juego comprado. 
6️⃣ Luego, volver a la pantalla principal e ir a ajustes, seleccionar la opcion USUARIOS Y CUENTAS.
7️⃣ Presionar la opcion OTRO, seleccionar la opcion COMPARTIR CONSOLA Y JUGAR OFFLINE
Verifica que este activado
> En caso de estarlo, seleccionar NO DESACTIVAR
> En caso de no estar activado, seleccionar la opcion ACTIVAR

y luego seleccionar CERRAR SESION.
8️⃣ Una vez hecho, volve a tu usuario personal y corroboras que se siga descargando el juego.
🔟 Una vez descargado, a disfrutar!

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de juego digital:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

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
1️⃣ En tu ${consola.toUpperCase()}, crea un nuevo usuario y utiliza los datos proporcionados para iniciar sesión. (NO CREAR UN USUARIO DE INVITADO)
2️⃣ Acepta las políticas de privacidad y NO ACTIVES la cuenta como principal.
3️⃣ Descarga el juego desde la biblioteca del usuario nuevo creado.
4️⃣ Cada vez que quieras jugar, inicia sesión en el usuario que creaste con esta cuenta.

👨‍💻 Datos de la cuenta
Por favor, utiliza los siguientes datos para iniciar sesión en la cuenta de juego digital:

------------------------------------------------------------
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}
------------------------------------------------------------

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
