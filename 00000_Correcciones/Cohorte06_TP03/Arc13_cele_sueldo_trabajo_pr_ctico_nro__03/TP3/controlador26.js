// controlador.js

import { calcularInsulina } from "./models26.js";


// estado de la aplicación
const estadoAplicacion = {

    glucosa: "",
    peso: "",
    tipoDiabetes: ""
};


// variables
let glucosa = document.getElementById("glucosa");

let peso = document.getElementById("peso");

let tipoDiabetes = document.getElementById("tipoDiabetes");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");


// guardo glucosa
glucosa.addEventListener("input", () => {

    estadoAplicacion.glucosa = glucosa.value;
});


// guardo peso
peso.addEventListener("input", () => {

    estadoAplicacion.peso = peso.value;
});


// guardo tipo diabetes
tipoDiabetes.addEventListener("change", () => {

    estadoAplicacion.tipoDiabetes = tipoDiabetes.value;
});


// evento botón
btnCalcular.addEventListener("click", () => {

    let dosis = calcularInsulina(

        Number(glucosa.value),

        Number(peso.value),

        Number(tipoDiabetes.value)
    );

    resultado.textContent =
    "Dosis recomendada: " + dosis;
});