
import { calcularTasaENRE } from "./modelo19.js";
const form = document.querySelector("#form-ej19");
const salida = document.querySelector("#resultado19");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    salida.textContent = "";

    const importe = convertirNumero(document.querySelector("#importe19").value);

    if (isNaN(importe) || importe < 0) {
        salida.textContent = "Ingresá un importe válido.";
        return;
    }

    const tasa = calcularTasaENRE(importe);

    salida.textContent = "Tasa ENRE: $" + tasa.toFixed(2);
});
