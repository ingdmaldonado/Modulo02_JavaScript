/*Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los distintos trabajos prácticos
de una materia y que a partir de esas notas obtenga el promedio de las mismas */


import {calcularPromedio} from "./20modelo.js";

const idNota1 = document.querySelector("#idNota1");
const idNota2 = document.querySelector("#idNota2");
const idNota3 = document.querySelector("#idNota3");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");

const estadoAplicacion = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
    promedio: 0,
};

idNota1.oninput = () => {
    estadoAplicacion.nota1 = Number(idNota1.value);
    console.log(estadoAplicacion);
};

idNota2.oninput = () => {
    estadoAplicacion.nota2 = Number(idNota2.value);
    console.log(estadoAplicacion);
};

idNota3.oninput = () => {
    estadoAplicacion.nota3 = Number(idNota3.value);
    console.log(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let promedio = calcularPromedio(estadoAplicacion.nota1,estadoAplicacion.nota2,estadoAplicacion.nota3);
    estadoAplicacion.promedio = promedio;
    idResultado.textContent = `El promedio es: ${promedio.toFixed(2)}`;
};


idBtnGuardar.onclick = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("datosAPP", datosJSON);
};

idBtnRecuperar.onclick = () => {
    let datosJSON = localStorage.getItem("datosAPP");
    let datosObjeto = JSON.parse(datosJSON);
    estadoAplicacion.nota1 = datosObjeto.nota1;
    estadoAplicacion.nota2 = datosObjeto.nota2;
    estadoAplicacion.nota3 = datosObjeto.nota3;
    estadoAplicacion.promedio = datosObjeto.promedio;

    idNota1.value = estadoAplicacion.nota1;
    idNota2.value = estadoAplicacion.nota2;
    idNota3.value = estadoAplicacion.nota3;

    idResultado.textContent = `El promedio es: ${estadoAplicacion.promedio.toFixed(2)}`;

};