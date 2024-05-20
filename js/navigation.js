// navigation.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbarContainer");
    let currentPage = window.location.pathname.split("/").pop(); // Obtener el nombre del archivo actual
    console.log('Current Page:', currentPage);

    if(!currentPage) {
        currentPage = "/";
    }

    console.log('Current Page:', currentPage);

    // Fetch the navbar content
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            // Set the fetched HTML as the content of the navbar container
            navbarContainer.innerHTML = html;
            
            const menuItems = navbarContainer.querySelectorAll('.nav-menu-item');

            menuItems.forEach(function(item) {
                const link = item.querySelector('.nav-menu-link');
                
                let linkHref = link.getAttribute('href');
                if (linkHref.endsWith('.html')){
                    linkHref = linkHref.replace('.html','');
                }

                let pageWithoutExtension = currentPage;
                if (currentPage.endsWith('.html')) {
                    pageWithoutExtension = currentPage.replace('.html','');
                    pageWithoutExtension = '/'+pageWithoutExtension;
                }

                console.log('Comparing:', linkHref, pageWithoutExtension);

                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });

            // Acceder al botón hamburguesa después de cargar el contenido del navbar
            const menuBtn = navbarContainer.querySelector('.hamburger-menu');
            const navMenu = navbarContainer.querySelector('.nav-menu');

            menuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('show');
            });
        });
});