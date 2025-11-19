import { calcularTasaSubsuelo } from "./modelo18.js";
const form = document.querySelector("#form-ej18");
const salida = document.querySelector("#resultado18");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    salida.textContent = "";

    const importe = convertirNumero(document.querySelector("#importe18").value);

    if (isNaN(importe) || importe < 0) {
        salida.textContent = "Ingresá un importe válido.";
        return;
    }

    const tasa = calcularTasaSubsuelo(importe);

    salida.textContent = "Tasa de Subsuelo: $" + tasa.toFixed(2);
});
