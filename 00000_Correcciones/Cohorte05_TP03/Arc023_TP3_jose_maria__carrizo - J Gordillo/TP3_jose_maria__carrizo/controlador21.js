import { contarVocales } from "./modelo21.js";
const form = document.querySelector("#form-ej21");
const salida = document.querySelector("#resultado21");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = document.querySelector("#texto21").value;

    if (!texto) {
        salida.textContent = "Ingresá un texto.";
        return;
    }

    const total = contarVocales(texto);

    salida.textContent = "Cantidad de vocales: " + total;
});
