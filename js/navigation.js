
//Este codigo sirve para marcar el item del navbar que se encuentre activo

document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL de la página actual
    const currentPageUrl = window.location.href;

    // Obtener todos los elementos del menú
    const menuItems = document.querySelectorAll('.nav-menu-item');

    // Iterar sobre cada elemento del menú
    menuItems.forEach(function(item) {
        // Obtener el enlace dentro del elemento del menú
        const link = item.querySelector('.nav-menu-link');

        // Verificar si la URL del enlace coincide con la URL de la página actual
        if (link.href === currentPageUrl) {
            // Agregar la clase 'active' al elemento del menú correspondiente a la página actual
            link.classList.add('active');
        }
    });
});