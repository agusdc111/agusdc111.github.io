function toggleAccountType() {
    const tipoProducto = document.getElementById('tipoProducto').value;
    const cuentaContainer = document.getElementById('cuentaContainer');
    cuentaContainer.style.display = tipoProducto === 'plus' ? 'none' : 'block';
}

function generarMensaje() {
    const tipoProducto = document.getElementById('tipoProducto').value;
    const consola = document.getElementById('consola').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;
    
    let tipoCuenta = 'primaria';
    if (tipoProducto === 'juego') {
        tipoCuenta = document.getElementById('tipoCuenta').value;
    }

    let mensaje = '';

    if (tipoProducto === 'plus') {
        mensaje = `📢 ¡Gracias por tu compra de PS PLUS!

🔐 Instrucciones para configurar PS PLUS en ${consola.toUpperCase()}:
1️⃣ Ingresa a tu ${consola.toUpperCase()} con los datos proporcionados
2️⃣ Acepta las políticas de privacidad y configura como PRINCIPAL
3️⃣ Descarga PS PLUS desde la biblioteca
4️⃣ Activa licencias y cierra sesión para usar tu cuenta personal

👨‍💻 Datos de la cuenta:
Email: ${email}
Contraseña: ${password}
Código de seguridad: ${codigoSeguridad}

✅ Ventajas:
- Acceso completo a PS PLUS
- Funciona en tu cuenta personal
- Actualizaciones automáticas

📩 Soporte: @luxurygamesarg
¡Disfruta de tu PS PLUS! 🎮`;
    } else {
        if (tipoCuenta === 'primaria' && consola === 'ps4') {
            mensaje = `📢 ¡Gracias por tu compra!

⚠️ **MANDAR FOTO DEL JUEGO DESCARGANDO PARA GARANTÍA**  
Horarios Soporte: L-V 14-20hs  

---

### PASOS PARA PS4 (PRIMARIA):
1. Crear usuario nuevo
2. Ingresar:
   Email: ${email}
   Contraseña: ${password}
   Código: ${codigoSeguridad}
3. Biblioteca > Comprados > Descargar
4. Configuración > Activar como Principal
5. Cerrar sesión y verificar descarga

📌 Términos:
- No modificar datos de cuenta
- Solo 1 consola activa

📩 Soporte: @luxurygamesarg 🎮`;
        }
        else if (tipoCuenta === 'primaria' && consola === 'ps5') {
            mensaje = `📢 ¡Gracias por tu compra!

### INSTRUCTIVO PS5 (PRIMARIA):
1. Crear usuario (NO INVITADO)
2. Datos:
   Email: ${email}
   Contraseña: ${password}
   Código: ${codigoSeguridad}
3. Biblioteca > Descargar juego
4. Ajustes > Compartir consola > ACTIVAR
5. Cerrar sesión y disfrutar

🔒 Términos:
- No eliminar usuario
- No modificar datos
- No revender

📩 Soporte: @luxurygamesarg 🎮`;
        }
        else if (tipoCuenta === 'secundaria') {
            mensaje = `📢 ¡Gracias por tu compra!

🔐 Instrucciones Cuenta Secundaria (${consola.toUpperCase()}):
1. Nuevo usuario con datos:
   Email: ${email}
   Contraseña: ${password}
   Código: ${codigoSeguridad}
2. Descargar desde biblioteca
3. Jugar siempre desde este usuario

⚠️ Restricciones:
- No activar como principal
- No compartir cuenta

📩 Soporte: @luxurygamesarg 🎮`;
        }
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

// Inicializar visibilidad al cargar
window.onload = toggleAccountType;
