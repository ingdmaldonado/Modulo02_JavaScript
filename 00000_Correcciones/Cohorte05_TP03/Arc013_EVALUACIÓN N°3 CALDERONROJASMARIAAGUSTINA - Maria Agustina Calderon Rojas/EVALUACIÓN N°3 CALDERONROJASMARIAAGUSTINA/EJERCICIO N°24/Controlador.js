// Controlador.js

function verificarEspacios() {
    const texto = document.getElementById("texto").value;
    const resultado = tieneTresEspacios(texto);

    if (resultado) {
        document.getElementById("resultado").textContent =
            "✅ La cadena contiene al menos tres espacios en blanco.";
    } else {
        document.getElementById("resultado").textContent =
            "❌ La cadena NO contiene tres espacios en blanco.";
    }
}