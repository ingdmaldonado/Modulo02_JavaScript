
import { tieneDosS } from "./modelo23.js";

const form = document.querySelector("#form-ej23");
const salida = document.querySelector("#resultado23");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const palabra = document.querySelector("#texto23").value;

    if (!palabra) {
        salida.textContent = "Ingresá una palabra.";
        return;
    }

    const resultado = tieneDosS(palabra);

    salida.textContent = "¿Tiene al menos dos 's'? → " + resultado;
});
