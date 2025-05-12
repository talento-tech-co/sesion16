// Función para mostrar la imagen seleccionada
function mostrarImagen(event) {
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = 'block';
}

// Obtener referencias a los elementos del formulario
const formulario = document.getElementById('formulario-registro');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const imagen = document.getElementById('imagen');

// Validación del formulario al enviarlo
formulario.addEventListener('submit', function(event) {
    // Prevenir el envío por defecto
    event.preventDefault();
    
    // Bandera para validación
    let esValido = true;
    
    // Validar que el nombre no esté vacío
    if (nombre.value.trim() === '') {
        alert('Por favor, ingresa tu nombre');
        nombre.focus();
        esValido = false;
        return;
    }
    
    // Validar que el email tenga un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, ingresa un correo electrónico válido');
        email.focus();
        esValido = false;
        return;
    }
    
    // Validar que la contraseña tenga al menos 6 caracteres
    if (password.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        password.focus();
        esValido = false;
        return;
    }
    
    // Validar que se haya subido una imagen
    if (imagen.files.length > 0) {
        // Obtener el tipo de archivo
        const tipoArchivo = imagen.files[0].type;
        
        // Verificar que sea una imagen válida (JPEG o PNG)
        if (tipoArchivo !== 'image/jpeg' && tipoArchivo !== 'image/png') {
            alert('Por favor, sube una imagen en formato JPG o PNG');
            imagen.focus();
            esValido = false;
            return;
        }
    }
    
    // Si todo es válido, mostrar mensaje de éxito
    if (esValido) {
        alert('¡Registro exitoso!');
        // Aquí podrías enviar el formulario al servidor
        formulario.reset();
        document.getElementById('ver-imagen').style.display = 'none';
    }
});
