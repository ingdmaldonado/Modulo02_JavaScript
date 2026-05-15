// controlador.js

import { calcularImporteAgua } from "./models23.js";


// estado de la aplicación
const estadoAplicacion = {

    metros: ""
};


// variables
let metros = document.getElementById("metros");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");


// guardo los metros en el estado
metros.addEventListener("input", () => {

    estadoAplicacion.metros = metros.value;
});


// evento del botón
btnCalcular.addEventListener("click", () => {

    let importe = calcularImporteAgua(

        Number(metros.value)
    );

    resultado.textContent = "Importe total: $" + importe;
});