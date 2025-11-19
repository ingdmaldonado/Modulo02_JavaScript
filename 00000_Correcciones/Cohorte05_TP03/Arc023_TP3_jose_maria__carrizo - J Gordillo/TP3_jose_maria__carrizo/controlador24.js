
import { tieneTresEspacios } from "./modelo24.js";

const form = document.querySelector("#form-ej24");
const salida = document.querySelector("#resultado24");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = document.querySelector("#texto24").value;

    if (!texto) {
        salida.textContent = "Ingresá una cadena.";
        return;
    }

    const r = tieneTresEspacios(texto);

    salida.textContent = "¿Tiene al menos 3 espacios? → " + r;
});
