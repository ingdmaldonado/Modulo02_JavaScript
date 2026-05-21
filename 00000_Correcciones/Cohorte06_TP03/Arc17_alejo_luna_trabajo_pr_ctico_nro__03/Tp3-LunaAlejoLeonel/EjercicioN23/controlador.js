import { calcularImporteAgua } from "./modelo.js";

let metros = document.querySelector("#metros");
let boton = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let m = Number(metros.value);

    let total = calcularImporteAgua(m);

    resultado.textContent = "Total a pagar: $" + total;

}