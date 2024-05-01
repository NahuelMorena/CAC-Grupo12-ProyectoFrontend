document.addEventListener('DOMContentLoaded', function() {
    const botonesDesplegar = document.querySelectorAll('.imagen-boton');
    const contenidosDesplegables = document.querySelectorAll('.contenido-desplegable');

    botonesDesplegar.forEach((boton, index) => {
        boton.addEventListener('click', function() {
            if (contenidosDesplegables[index].style.display === 'none' || contenidosDesplegables[index].style.display === '') {
                contenidosDesplegables[index].style.display = 'block';
            } else {
                contenidosDesplegables[index].style.display = 'none';
            }
        });
    });
});



