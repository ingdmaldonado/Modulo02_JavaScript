// controlador.js

import { contarConsonantes } from "./models28.js";


// estado de la aplicación
const estadoAplicacion = {

    texto: ""
};


// variables
let texto = document.getElementById("texto");

let resultado = document.getElementById("resultado");

let btnContar = document.getElementById("btnContar");


// guardo el texto
texto.addEventListener("input", () => {

    estadoAplicacion.texto = texto.value;
});


// evento botón
btnContar.addEventListener("click", () => {

    let cantidad = contarConsonantes(

        texto.value
    );

    resultado.textContent =
    "Cantidad de consonantes: " + cantidad;
});