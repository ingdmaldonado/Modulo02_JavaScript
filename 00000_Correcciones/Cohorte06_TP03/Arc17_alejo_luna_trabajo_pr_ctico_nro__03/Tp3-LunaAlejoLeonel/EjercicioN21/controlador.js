import { evaluarNota } from "./modelo.js";

let nota = document.querySelector("#nota");
let boton = document.querySelector("#btnEvaluar");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let valor = Number(nota.value);

    let mensaje = evaluarNota(valor);

    resultado.textContent = mensaje;

}