
import { calcularInsulina } from "./modelo20.js";
const form = document.querySelector("#form-ej20");
const salida = document.querySelector("#resultado20");

function convertirNumero(v) {
    if (!v) return NaN;
    return parseFloat(v.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    salida.textContent = "";

    const glucosa = convertirNumero(document.querySelector("#glucosa20").value);
    const peso = convertirNumero(document.querySelector("#peso20").value);
    const tipo = parseInt(document.querySelector("#tipo20").value);

    if (isNaN(glucosa) || isNaN(peso) || isNaN(tipo)) {
        salida.textContent = "Faltan datos válidos.";
        return;
    }

    if (tipo !== 1 && tipo !== 2) {
        salida.textContent = "El tipo debe ser 1 o 2.";
        return;
    }

    const dosis = calcularInsulina(glucosa, peso, tipo);

    salida.textContent = "Dosis recomendada: " + dosis.toFixed(2) + " unidades.";
});
