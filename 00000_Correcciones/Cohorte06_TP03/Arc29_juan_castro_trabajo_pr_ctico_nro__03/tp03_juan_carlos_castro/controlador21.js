/*

Ejercicio Nro. 21: 

Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida 
como parámetro devuelva un texto que diga los siguientes mensajes. 
• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 

Nota: Debe Devolver un Texto

*/

import { fnEstadoAlumno } from "./modelo21.js";
import { fnGuardar } from "./modelo21.js";
import { fnRecuperar } from "./modelo21.js";

window.onload = () => {

    const estadoAplicacion = {
        nota: 0
    };

    const idNota = document.querySelector("#idNota");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idEstado = document.querySelector("#idEstado");

    fnRecuperar();

    idNota.oninput = () => {
        estadoAplicacion.nota = Number(idNota.value);
        fnGuardar(estadoAplicacion);
    };

    idBtnCalcular.onclick = () => {
        let resultado = fnEstadoAlumno(estadoAplicacion.nota);
        idEstado.textContent = `El estado del alumno es ${resultado}`;

    };

};