// controlador24.js

import { calcularTasaSubsuelo } from "./models24.js";


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

    let tasa = calcularTasaSubsuelo(

        Number(importe.value)
    );

    resultado.textContent = "Tasa de Subsuelo: $" + tasa;
});