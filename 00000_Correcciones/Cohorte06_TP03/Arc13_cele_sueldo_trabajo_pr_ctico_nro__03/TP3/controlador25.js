// controlador25.js

import { calcularTasaENRE } from "./models25.js";


// estado de la aplicación
const estadoAplicacion = {

    importe: ""
};


// variables
let importe = document.getElementById("importe");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");


// guardo el valor en el estado
importe.addEventListener("input", () => {

    estadoAplicacion.importe = importe.value;
});


// evento del botón
btnCalcular.addEventListener("click", () => {

    let tasa = calcularTasaENRE(

        Number(importe.value)
    );

    resultado.textContent = "Tasa ENRE: $" + tasa;
});