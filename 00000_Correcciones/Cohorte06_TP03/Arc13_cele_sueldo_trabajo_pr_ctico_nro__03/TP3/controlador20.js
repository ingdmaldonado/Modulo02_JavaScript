// controlador20.js

import { calcularPromedio } from "./models20.js";


// estado de la aplicación
const estadoAplicacion = {

    nota1: "",
    nota2: "",
    nota3: ""
};


// variables
let nota1 = document.getElementById("nota1");

let nota2 = document.getElementById("nota2");

let nota3 = document.getElementById("nota3");

let resultado = document.getElementById("resultado");

let btnCalcular = document.getElementById("btnCalcular");


// guardo los cambios en el estado
nota1.addEventListener("input", () => {

    estadoAplicacion.nota1 = nota1.value;
});


nota2.addEventListener("input", () => {

    estadoAplicacion.nota2 = nota2.value;
});


nota3.addEventListener("input", () => {

    estadoAplicacion.nota3 = nota3.value;
});


// evento del botón
btnCalcular.addEventListener("click", () => {

    let promedio = calcularPromedio(

        Number(nota1.value),

        Number(nota2.value),

        Number(nota3.value)
    );

    resultado.textContent = "Promedio: " + promedio;
});