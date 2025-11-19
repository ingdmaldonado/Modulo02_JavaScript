// Controlador.js

function verificarPalabra() {
    const palabra = document.getElementById("palabra").value;
    const resultado = tieneDosS(palabra);

    if (resultado) {
        document.getElementById("resultado").textContent =
            "✅ La palabra contiene al menos dos letras 's' o 'S'.";
    } else {
        document.getElementById("resultado").textContent =
            "❌ La palabra NO contiene dos letras 's' o 'S'.";
    }
}