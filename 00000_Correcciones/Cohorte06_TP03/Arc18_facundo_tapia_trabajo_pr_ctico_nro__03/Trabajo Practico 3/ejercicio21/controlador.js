/*Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/



import { fnAnalizarNota } from "./modelo.js";

window.onload = () => {

    const estadoAplicacion = {

        nota: 0,

    };

    const idNumero = document.querySelector("#idNumero");
    const idBtnAceptar = document.querySelector("#idBtnAceptar");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");


    // Guardar estado en tiempo real
    idNumero.oninput = () => {

        estadoAplicacion.nota = Number(idNumero.value);

        console.log(estadoAplicacion);

    };


    // Analizar nota
    idBtnAceptar.onclick = () => {

        let resultado = fnAnalizarNota(estadoAplicacion.nota);

        console.log(resultado);

        idResultado.textContent =
        `Nota ingresada: ${estadoAplicacion.nota} - Resultado: ${resultado}`;

    };


    // Guardar
    idBtnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion);

        console.log(datosJSON);

        localStorage.setItem("datosAPP", datosJSON);

    };


    // Recuperar
    idBtnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("datosAPP");

        let datosObjeto = JSON.parse(datosJSON);

        console.log(datosJSON);
        console.log(datosObjeto);

        // Completar formulario
        idNumero.value = datosObjeto.nota;

        // Actualizar estado
        estadoAplicacion.nota = datosObjeto.nota;

    };

};



