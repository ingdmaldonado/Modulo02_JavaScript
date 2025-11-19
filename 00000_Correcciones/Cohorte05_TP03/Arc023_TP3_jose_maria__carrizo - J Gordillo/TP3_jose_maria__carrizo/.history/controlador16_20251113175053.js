import { calcularSobretasa } from "./modelo16.js";

const form = document.querySelector("#form-ej16");
const salida = document.querySelector("#resultado16");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    salida.textContent = "";

    const tipo = parseInt(document.querySelector("#tipo16").value);
    const importe = convertirNumero(document.querySelector("#importe16").value);

    if (isNaN(tipo) || isNaN(importe)) {
        salida.textContent = "Ingresá datos válidos.";
        return;
    }

    const impuesto = calcularSobretasa(tipo, importe);

    salida.textContent = "La sobretasa es: $" + impuesto.toFixed(2);
});
