import { tieneDosS } from "./modelo.js";

let texto = document.querySelector("#texto");
let boton = document.querySelector("#btnContar");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let valor = texto.value;

    let cumple = tieneDosS(valor);

    resultado.textContent = cumple;

}