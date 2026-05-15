// controlador21.js

import { obtenerEstadoAlumno } from "./models21.js";


// estado de la aplicación
const estadoAplicacion = {

    promedio: ""
};


// variables
let promedio = document.getElementById("promedio");

let resultado = document.getElementById("resultado");

let btnEvaluar = document.getElementById("btnEvaluar");


// guardo el promedio en el estado
promedio.addEventListener("input", () => {

    estadoAplicacion.promedio = promedio.value;
});


// evento del botón
btnEvaluar.addEventListener("click", () => {

    let estado = obtenerEstadoAlumno(

        Number(promedio.value)
    );

    resultado.textContent = estado;
});