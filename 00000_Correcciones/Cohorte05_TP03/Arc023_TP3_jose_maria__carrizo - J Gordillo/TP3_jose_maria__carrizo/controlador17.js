import { calcularImporteAgua } from "./modelo17.js";
const form = document.querySelector("#form-ej17");
const salida = document.querySelector("#resultado17");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    salida.textContent = "";

    const consumo = convertirNumero(document.querySelector("#consumo17").value);

    if (isNaN(consumo) || consumo < 0) {
        salida.textContent = "Ingresá un número válido de m³.";
        return;
    }

    const importe = calcularImporteAgua(consumo);

    salida.textContent = "Importe base: $" + importe.toFixed(2);
});
