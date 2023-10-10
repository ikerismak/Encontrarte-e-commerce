$(document).ready(function() {
    // Captura el botón y el fondo oscuro
    var boton = $("#boton");
    var fondoOscuro = $("#fondo-oscuro");

    // Muestra el fondo oscuro cuando se hace clic en el botón
    boton.on("click", function() {
        fondoOscuro.show();
    });

    // Oculta el fondo oscuro cuando se hace clic en cualquier parte fuera del menú desplegable
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".dropdown").length) {
            fondoOscuro.hide();
        }
    });
});