
import { calcularCuadradoYRaiz } from "./modelo15.js";
const form = document.querySelector("#form-ej15");
const salida = document.querySelector("#resultado15");

function convertirNumero(valor) {
    if (!valor) return NaN;
    return parseFloat(valor.replace(",", ".").trim());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    salida.textContent = "";

    const numero = convertirNumero(document.querySelector("#num15").value);

    if (isNaN(numero)) {
        salida.textContent = "Ingresá un número válido.";
        return;
    }

    const r = calcularCuadradoYRaiz(numero);

    salida.textContent = `Cuadrado: ${r.cuadrado} | Raíz: ${r.raiz.toFixed(2)}`;
});
