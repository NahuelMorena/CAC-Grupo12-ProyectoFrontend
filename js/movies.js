document.addEventListener("DOMContentLoaded", function() {
    var botonesExpandir = document.querySelectorAll('.btn-expandir');

    botonesExpandir.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var infoAdicional = this.parentElement.parentElement.querySelector('.expandir-info');
            infoAdicional.classList.toggle('mostrar');
        });
    });
});
