
import { contarConsonantes } from "./modelo22.js";

const form = document.querySelector("#form-ej22");
const salida = document.querySelector("#resultado22");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const txt = document.querySelector("#texto22").value;

    if (!txt) {
        salida.textContent = "Ingresá una cadena.";
        return;
    }

    const cantidad = contarConsonantes(txt);

    salida.textContent = "Consonantes: " + cantidad;
});
