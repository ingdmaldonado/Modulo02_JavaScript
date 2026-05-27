/*Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro 
devuelva un texto que diga los siguientes mensajes.
•
Si la nota <= 4 debe devolver “Desaprobado”
•
Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
•
Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
•
Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/

import {fnNotas} from "./21modelo.js";

window.onload = ()=>{

    const estadoAplicacion = {
        nota:0,
    };

    const idNota = document.querySelector("#idNota");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    idNota.oninput = ()=>{
        estadoAplicacion.nota = Number(idNota.value);
        console.log(estadoAplicacion);
    };

    idBtnAceptar.onclick = ()=>{
        let resultado = fnNotas(estadoAplicacion.nota);
        console.log(resultado);
        idResultado.textContent = `la nota ingresada es: ${estadoAplicacion.nota} y la calificacion es: ${resultado}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem ("datosAPP",datosJSON);
    };
    
    idBtnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("datosAPP");
        let datosObjeto = JSON.parse(datosJSON);
        idNota.nota = datosObjeto.nota;
    };
    
};