/*Ejercicio Nro. 20:  
Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número
*/

import { calcularPromedio } from "./modelo.js";


const estadoAplicacion = {

nota1: "",
nota2: "",
nota3: ""

};


window.onload = () => {

    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");



    idNota1.oninput = () =>{


        estadoAplicacion.nota1 = idNota1.value;

    };

    idNota2.oninput = () =>{

        estadoAplicacion.nota2 = idNota2.value;


    };

    idNota3.oninput = () =>{

        estadoAplicacion.nota3 = idNota3.value;


    };


    idBtnCalcular.onclick = () => {

        let nota1 =Number(estadoAplicacion.nota1);
        let nota2 = Number(estadoAplicacion.nota2);
        let nota3 = Number(estadoAplicacion.nota3);

        let promedio = calcularPromedio(nota1, nota2, nota3);

        idResultado.textContent = "Promedio:" + promedio;

    };


    idBtnGuardar.onclick= () => {

        let datosJSON = JSON.stringify(estadoAplicacion);

        console.log(datosJSON);


        localStorage.setItem (`datosAPP`,datosJSON);


    };



    idBtnRecuperar.onclick = () =>{

        let datosJSON = localStorage.getItem(`datosAPP`);

        let datosObjeto = JSON.parse(datosJSON);

        console.log(datosJSON);
        console.log(datosObjeto);




    };





};
