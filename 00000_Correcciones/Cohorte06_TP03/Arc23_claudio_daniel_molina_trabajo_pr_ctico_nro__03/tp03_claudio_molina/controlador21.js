/* Ejercicio Nro. 21*/

import {evaluarNota} from "./modelo.js";


window.onload = () => {
    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {   
        idNota:0,
    };

    const idNota = document.querySelector("#idNota");
    const idBtnEvaluar = document.querySelector("#idBtnEvaluar");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    idNota.oninput = () => {
        estadoAplicacion.idNota = Number(idNota.value);
        console.log(`Nota ingresada: ${estadoAplicacion.idNota}`);
    };

    // delegando el evento click del boton en una arrow function //
    idBtnEvaluar.onclick = () => {
        let resultadoEvaluacion = evaluarNota(estadoAplicacion.idNota);
        idResultado.textContent = resultadoEvaluacion;
        console.log(resultadoEvaluacion);
    };

    idBtnGuardar.onclick = () => {

        /* convertir a JSON el valor de idNota para guardarlo en el localStorage */
        
        let notaAguardar = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datoListo", notaAguardar);
        console.log(notaAguardar);
    };

    idBtnRecuperar.onclick = () => {
        let notaAguardar = localStorage.getItem("datoListo");
        console.log(notaAguardar);
        
        /* convertir a objeto el valor recuperado del localStorage */
        
        let notaRecuperada = JSON.parse(notaAguardar);
        console.log(notaRecuperada);
               
       /* Acá restauro los valores en el estado de la aplicación y en el input para que se vea reflejado lo recuperado del localStorage */ 
        
       idNota.value = notaRecuperada.idNota;
       
    };

};









