import { calcularImpuesto } from "./modelo.js";

let importe = document.querySelector("#importe");
let tipo = document.querySelector("#tipo");
let boton = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let imp = Number(importe.value);
    let t = Number(tipo.value);

    let impuesto = calcularImpuesto(imp, t);

    resultado.textContent = "Impuesto: $" + impuesto;

}