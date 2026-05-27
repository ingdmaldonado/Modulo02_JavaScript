/*Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas
Nota: Debe devolver un número*/

import { fnNotaAlumno } from "./modelo20.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = (idtp1, idtp2, idtp3) => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idtp1.value = estadoObjeto.tp1;
        idtp2.value = estadoObjeto.tp2;
        idtp3.value = estadoObjeto.tp3;
    }
};

window.onload = () => {

    const estadoAplicacion = {
        tp1: 0,
        tp2: 0,
        tp3: 0
    }

    const idtp1 = document.querySelector("#idTp1");
    const idtp2 = document.querySelector("#idTp2");
    const idtp3 = document.querySelector("#idTp3");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    recuperarEstado();

    idtp1.oninput = () => {
        estadoAplicacion.tp1 = Number(idtp1.value);
    }
    idtp2.oninput = () => {
        estadoAplicacion.tp2 = Number(idtp2.value);
    }
    idtp3.oninput = () => {
        estadoAplicacion.tp3 = Number(idtp3.value);
    }

    idBtnCalcular.onclick = () => {
        let nota1 = Number(idtp1.value);
        let nota2 = Number(idtp2.value);
        let nota3 = Number(idtp3.value);
        let resultado = fnNotaAlumno(nota1, nota2, nota3);
        guardarEstado(estadoAplicacion);
        idResultado.textContent = `El promedio es : ${resultado}`;
    }
}