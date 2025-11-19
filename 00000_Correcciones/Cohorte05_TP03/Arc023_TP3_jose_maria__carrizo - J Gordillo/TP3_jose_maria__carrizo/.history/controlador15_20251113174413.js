import { evaluarNota } from "./modelo15.js";

const form = document.querySelector("#form-ej15");
const salida = document.querySelector("#resultado15");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    salida.textContent = "";

    const nota = convertirNumero(document.querySelector("#nota15").value);

    if (isNaN(nota)) {
        salida.textContent = "Ingresá una nota válida.";
        return;
    }

    const texto = evaluarNota(nota);

    salida.textContent = texto;
});
