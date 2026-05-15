// controlador22.js

import { calcularSobreTasa } from "./models22.js";


// estado de la aplicación
const estadoAplicacion = {

    importeBase: "",
    tipoBebida: ""
};


// variables
let importeBase = document.getElementById("importeBase");

let tipoBebida = document.getElementById("tipoBebida");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");


// guardo el importe
importeBase.addEventListener("input", () => {

    estadoAplicacion.importeBase = importeBase.value;
});


// guardo el tipo de bebida
tipoBebida.addEventListener("change", () => {

    estadoAplicacion.tipoBebida = tipoBebida.value;
});


// evento del botón
btnCalcular.addEventListener("click", () => {

    let impuesto = calcularSobreTasa(

        Number(importeBase.value),

        Number(tipoBebida.value)
    );

    resultado.textContent = "Impuesto: $" + impuesto;
});