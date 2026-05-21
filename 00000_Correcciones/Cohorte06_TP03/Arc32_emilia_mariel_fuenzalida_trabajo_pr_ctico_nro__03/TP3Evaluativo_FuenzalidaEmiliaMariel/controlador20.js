import { fnCalcularNotas } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";

/*
-----Ejercicio Nro. 20------

Realizar una arrow function que reciba como parámetro las 3 notas 
que obtuvo un alumno en los distintos trabajos prácticos de una materia
y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número
*/


window.onload = () => {

    const estadoAplicacion = {
        nota1: 0,
        nota2: 0,
        nota3: 0
    };

    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idCalculoNotas = document.querySelector("#idCalculoNotas");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio20");

    idNota1.oninput = () => {

        estadoAplicacion.nota1 = Number(idNota1.value);
        fnGuardar("ejercicio20", estadoAplicacion);
    };

    idNota2.oninput = () => {
        estadoAplicacion.nota2 = Number(idNota2.value);
        fnGuardar("ejercicio20", estadoAplicacion);
    };

    idNota3.oninput = () => {

        estadoAplicacion.nota3 = Number(idNota3.value);
        fnGuardar("ejercicio20", estadoAplicacion);
    };

    idCalculoNotas.onclick = () => {

        let promedioTotal = fnCalcularNotas(estadoAplicacion.nota1, estadoAplicacion.nota2, estadoAplicacion.nota3);

        console.log(promedioTotal.toFixed(2));
    }

    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio20", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio20");

        if (datos) {

            estadoAplicacion.nota1 = datos.nota1;
            estadoAplicacion.nota2 = datos.nota2;
            estadoAplicacion.nota3 = datos.nota3;

            idNota1.value = datos.nota1;
            idNota2.value = datos.nota2;
            idNota3.value = datos.nota3;
        }
    };

}