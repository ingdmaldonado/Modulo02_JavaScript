/* Ejercicio Nro. 14:
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número */

import {calcularPromedioNotas} from "./datos14.js";
window.onload = () => {
    console.log("running");

    // Obtengo las referencias a los elementos del DOM
    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idBtnCalcularPromedio = document.querySelector("#idBtnCalcularPromedio");
    const idResultadoPromedio = document.querySelector("#idResultadoPromedio");
    console.log(idNota1, idNota2, idNota3, idBtnCalcularPromedio, idResultadoPromedio);

    /* Cuando se dispara el evento click sobre el botón Calcular Promedio,
    se delega en una arrow function */
    idBtnCalcularPromedio.onclick = () => {
        let nota1 = Number(idNota1.value);
        let nota2 = Number(idNota2.value);
        let nota3 = Number(idNota3.value);

        console.log(`Nota 1: ${nota1}`);
        console.log(`Nota 2: ${nota2}`);
        console.log(`Nota 3: ${nota3}`);

        // Llamo a la arrow function para calcular el promedio
        let promedio = calcularPromedioNotas(nota1, nota2, nota3);

        console.log(`Promedio: ${promedio}`);

        // Muestro el resultado en el DOM
        idResultadoPromedio.textContent = `El Promedio es: ${promedio.toFixed(2)}`;

    };
}