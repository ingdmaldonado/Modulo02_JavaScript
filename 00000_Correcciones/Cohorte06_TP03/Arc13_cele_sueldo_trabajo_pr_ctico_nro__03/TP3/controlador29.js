// controlador.js

import { tieneDosS } from "./models29.js";


// estado de la aplicación
const estadoAplicacion = {

    palabra: ""
};


// variables
let palabra = document.getElementById("palabra");

let resultado = document.getElementById("resultado");

let btnVerificar = document.getElementById("btnVerificar");


// guardo palabra
palabra.addEventListener("input", () => {

    estadoAplicacion.palabra = palabra.value;
});


// evento botón
btnVerificar.addEventListener("click", () => {

    let respuesta = tieneDosS(

        palabra.value
    );

    resultado.textContent =
    "Resultado: " + respuesta;
});