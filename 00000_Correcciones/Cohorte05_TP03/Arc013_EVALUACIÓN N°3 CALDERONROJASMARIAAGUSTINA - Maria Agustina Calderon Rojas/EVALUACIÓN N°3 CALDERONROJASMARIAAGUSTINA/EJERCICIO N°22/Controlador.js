// Controlador.js

function procesarCadena() {
    const texto = document.getElementById("texto").value;
    const resultado = contarConsonantes(texto);

    document.getElementById("resultado").textContent =
        `La cadena tiene ${resultado} consonante(s).`;
}