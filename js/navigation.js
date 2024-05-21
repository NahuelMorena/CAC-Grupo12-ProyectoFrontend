// navigation.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbarContainer");
    const currentPage = window.location.pathname.split("/").pop(); // Obtener el nombre del archivo actual
    //currentPage = '/'+currentPage;

    // Fetch the navbar content
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            // Set the fetched HTML as the content of the navbar container
            navbarContainer.innerHTML = html;
            
            highlightLink(navbarContainer, '/'+currentPage);

            // Acceder al botón hamburguesa después de cargar el contenido del navbar
            const menuBtn = navbarContainer.querySelector('.hamburger-menu');
            const navMenu = navbarContainer.querySelector('.nav-menu');

            menuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('show');
            });
        });
});

function highlightLink(navbarContainer, currentPage){
    const menuItems = navbarContainer.querySelectorAll('.nav-menu-item');

    menuItems.forEach(function(item) {
        const link = item.querySelector('.nav-menu-link');
        
        let linkHref = link.getAttribute('href');
        linkHref = replaceLink(linkHref);

        let pageWithoutExtension = replaceLink(currentPage);

        pageWithoutExtension = '/'+pageWithoutExtension;

        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function replaceLink(str){
    if (str.endsWith('.html')) {
        return str.replace('.html','');
    }
    return str;
}