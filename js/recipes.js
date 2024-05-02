document.addEventListener('DOMContentLoaded', function() {
    const botonesDesplegar = document.querySelectorAll('.imagen-boton');
    const contenidosDesplegables = document.querySelectorAll('.contenido-desplegable');
    let botonActivoIndex = null; // Variable para almacenar el índice del botón activo

    botonesDesplegar.forEach((boton, index) => {
        boton.addEventListener('click', function() {
            if (botonActivoIndex !== null) {
                contenidosDesplegables[botonActivoIndex].style.display = 'none'; // Oculta el contenido anteriormente abierto         
            }

            if (contenidosDesplegables[index].style.display === 'none' || contenidosDesplegables[index].style.display === '') {
                contenidosDesplegables[index].style.display = 'block';
                botonActivoIndex = index; // Actualiza el índice del botón activo
            } else {
                contenidosDesplegables[index].style.display = 'none';
                botonActivoIndex = null; // No hay botón activo actualmente
            }
        });
    });
});



