import { calcularTasaENRE } from "./modelo.js";

let importe = document.querySelector("#importe");
let boton = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let valor = Number(importe.value);

    let tasa = calcularTasaENRE(valor);

    resultado.textContent = "Tasa ENRE: $" + tasa;

}