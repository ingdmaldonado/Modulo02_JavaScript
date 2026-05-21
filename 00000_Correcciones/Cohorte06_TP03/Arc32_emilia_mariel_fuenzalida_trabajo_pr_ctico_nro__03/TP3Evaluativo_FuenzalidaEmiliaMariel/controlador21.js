import { fnEstadoAlumno } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
-----Ejercicio Nro. 21-----

Realizar una arrow function que reciba como parámetro una nota promedio
y que según la nota recibida como parámetro 
devuelva un texto que diga los siguientes mensajes. 

• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 

*/


window.onload = () => {


    const estadoAplicacion = {
        notaPromedio: 0
    };

    const idNota = document.querySelector("#idNota");
    const idVerEstado = document.querySelector("#idVerEstado");
    const idResultadoAlumno = document.querySelector("#idResultadoAlumno");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio21");
    idNota.oninput = () => {

        estadoAplicacion.notaPromedio = Number(idNota.value);
        fnGuardar("ejercicio21", estadoAplicacion);
    };

    idVerEstado.onclick = () => {

        let verEstado = fnEstadoAlumno(estadoAplicacion.notaPromedio);

        idResultadoAlumno.textContent = `- Su estado: ${verEstado}`;
    }
    /* GUARDAR */
        idGuardar.onclick = () => {
    
            fnGuardar("ejercicio21", estadoAplicacion);
        };
    
        /* RECUPERAR */
        idRecuperar.onclick = () => {
    
            let datos = fnRecuperar("ejercicio21");
    
            if (datos) {
    
                estadoAplicacion.notaPromedio = datos.notaPromedio;
    
                idNota.value = datos.notaPromedio;
            }
        };
};