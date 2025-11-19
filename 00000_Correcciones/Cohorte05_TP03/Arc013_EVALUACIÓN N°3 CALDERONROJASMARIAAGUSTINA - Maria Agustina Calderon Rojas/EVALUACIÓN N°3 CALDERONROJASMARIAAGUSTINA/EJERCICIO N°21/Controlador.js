// Controlador.js

// Función que se ejecuta al hacer clic en el botón
function procesarCadena() {
    const texto = document.getElementById("texto").value;
    const resultado = contarVocales(texto);

    document.getElementById("resultado").textContent =
        `La cadena tiene ${resultado} vocal(es).`;
}