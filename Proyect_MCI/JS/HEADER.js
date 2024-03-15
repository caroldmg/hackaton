// Bienvenida.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Código que se ejecutará cuando el DOM esté completamente cargado

//     // Función para manejar el clic en el enlace
//     function abrirPagina() {
//         // Cambiar el contenido dinámico al hacer clic en el enlace
//         var contenidoDinamico = document.getElementById("contenidoDinamico");
//         contenidoDinamico.innerHTML = "<p>¡Has hecho clic en Inicio! Este es el nuevo contenido.</p>";
//     }

//     // Obtener el elemento del enlace
//     var enlaceInicio = document.getElementById("enlaceInicio");

//     // Agregar un evento de clic al enlace para llamar a la función abrirPagina
//     enlaceInicio.addEventListener("click", abrirPagina);
// });

document.addEventListener("DOMContentLoaded", function () {
    const imagenesFondo = [
        './img/MCI.jpeg',
        './img/MCI_Fondo.jpeg',
        // Añade más rutas según sea necesario
    ];

    let indexImagen = 0;
    const fondoElement = document.getElementById('fondo');

    function cambiarFondo() {
        fondoElement.style.backgroundImage = `url('${imagenesFondo[indexImagen]}')`;

        indexImagen = (indexImagen + 1) % imagenesFondo.length;
    }

    cambiarFondo(); // Cambia el fondo inicialmente

    setInterval(cambiarFondo, 5000); // Cambia el fondo cada 5 segundos
});
