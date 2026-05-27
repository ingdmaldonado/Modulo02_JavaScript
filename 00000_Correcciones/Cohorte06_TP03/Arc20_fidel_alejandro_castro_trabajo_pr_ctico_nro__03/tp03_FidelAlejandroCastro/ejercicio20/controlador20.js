/* 20 - Realizar una arrow function que reciba como parámetro las 3 notas que
obtuvo un alumno en los istintos trabajos prácticos de una materia y que a partir
de esas notas obtenga el promedio de las mismas
*/

import { fnPromedioDeTres } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (nota1,nota2,nota3)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        nota1.value = estadoOBJETO.nota1;
        nota2.value = estadoOBJETO.nota2;
        nota3.value = estadoOBJETO.nota3;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        nota1: 0,
        nota2: 0,
        nota3: 0,
    };

    const nota1 = document.querySelector("#number1");
    const nota2 = document.querySelector("#number2");
    const nota3 = document.querySelector("#number3");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(nota1, nota2, nota3);

    nota1.oninput = () => {
        estadoAplicacion.nota1 = Number(nota1.value);
        console.log(estadoAplicacion);
    };

    nota2.oninput = () => {
        estadoAplicacion.nota2 = Number(nota2.value);
        console.log(estadoAplicacion);
    };

    nota3.oninput = () => {
        estadoAplicacion.nota3 = Number(nota3.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnPromedioDeTres(estadoAplicacion.nota1,estadoAplicacion.nota2,estadoAplicacion.nota3);
        idResultado.textContent = `${resultado.toFixed(2)}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(nota1, nota2, nota3);    
    };
}

