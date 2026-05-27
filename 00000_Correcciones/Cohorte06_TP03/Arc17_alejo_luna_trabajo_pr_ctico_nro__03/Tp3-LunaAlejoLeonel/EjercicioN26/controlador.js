import { calcularInsulina } from "./modelo.js";

let glucosa = document.querySelector("#glucosa");
let peso = document.querySelector("#peso");
let tipo = document.querySelector("#tipo");

let boton = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resultado");

boton.onclick = function () {

    let g = Number(glucosa.value);
    let p = Number(peso.value);
    let t = Number(tipo.value);

    let dosis = calcularInsulina(g, p, t);

    resultado.textContent = "Dosis recomendada: " + dosis;

}