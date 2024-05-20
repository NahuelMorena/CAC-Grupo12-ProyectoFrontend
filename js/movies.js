document.addEventListener("DOMContentLoaded", function() {
    var botonesExpandir = document.querySelectorAll('.btn-expandir');

    botonesExpandir.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var infoAdicional = this.parentElement.parentElement.querySelector('.expandir-info');
            if (infoAdicional.classList.contains('mostrar')) {
                infoAdicional.classList.remove('mostrar');
                // Reinicia la altura después de la transición
                setTimeout(function() {
                    infoAdicional.style.maxHeight = '0';
                }, 300); // Ajusto el tiempo para que coincida con la duración de la transición
            } else {
                infoAdicional.classList.add('mostrar');
                // Forzar el recálculo de la altura
                infoAdicional.style.maxHeight = infoAdicional.scrollHeight + 'px';
            }
        });
    });
});
