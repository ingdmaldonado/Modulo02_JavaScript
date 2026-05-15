// controlador.js

import { tieneTresEspacios } from "./models30.js";


// estado de la aplicación
const estadoAplicacion = {

    texto: ""
};


// variables
let texto = document.getElementById("texto");

let resultado = document.getElementById("resultado");

let btnVerificar = document.getElementById("btnVerificar");


// guardo el texto
texto.addEventListener("input", () => {

    estadoAplicacion.texto = texto.value;
});


// evento botón
btnVerificar.addEventListener("click", () => {

    let respuesta = tieneTresEspacios(

        texto.value
    );

    resultado.textContent =
    "Resultado: " + respuesta;
});