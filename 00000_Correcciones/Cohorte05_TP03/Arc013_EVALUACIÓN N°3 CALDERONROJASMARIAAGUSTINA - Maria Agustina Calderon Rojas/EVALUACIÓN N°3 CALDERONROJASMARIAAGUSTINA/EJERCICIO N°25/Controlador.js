// Controlador.js

function verificarCadena() {
    const texto = document.getElementById("texto").value;
    const resultado = noContieneNumeros(texto);

    if (resultado) {
        document.getElementById("resultado").textContent =
            "✅ La cadena NO contiene ningún número.";
    } else {
        document.getElementById("resultado").textContent =
            "❌ La cadena contiene al menos un número.";
    }
}