/* Ejercicio Nro. 20 */

import {calcularPromedio} from "./modelo.js";

/*Funciones para guardar y recuperar el estado*/

const fnGuardarEstado = (estadoAplicacion)=>{
    // convierte el estado a JSON //
    let estadoApp = JSON.stringify(estadoAplicacion);
    // persiste en el navegador en el local Storage //
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = ()=>{
      // aqui recupero //
        let datoRecuperado = localStorage.getItem("estadoApp");
        if(datoRecuperado)
        {
            let estadoOBJETO = JSON.parse(datoRecuperado);
            console.log(datoRecuperado);
            console.log(estadoOBJETO);
            /* aqui tendria que actualizar los datos
            en el input */
            idNota1.value = estadoOBJETO.idNota1;
            idNota2.value = estadoOBJETO.idNota2;
            idNota3.value = estadoOBJETO.idNota3;
        }
}


window.onload = () => {
    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {
       
        idNota1:0,
        idNota2:0,
        idNota3:0
        
    };

    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    
    fnRecuperarEstado();
    console.log(idNota1, idNota2, idNota3, idBtnCalcular, idResultado);

    idNota1.oninput = () => {

        estadoAplicacion.idNota1 = Number(idNota1.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idNota2.oninput = () => {
        estadoAplicacion.idNota2 = Number(idNota2.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idNota3.oninput = () => {
        estadoAplicacion.idNota3 = Number(idNota3.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idBtnCalcular.onclick = ()=>{
        let resultado = calcularPromedio(estadoAplicacion.idNota1, estadoAplicacion.idNota2, estadoAplicacion.idNota3);
        console.log(resultado.toFixed(2));
        idResultado.textContent = `Nota 1 ${estadoAplicacion.idNota1} - Nota 2 ${estadoAplicacion.idNota2} - Nota 3 ${estadoAplicacion.idNota3} - Promedio:= ${resultado.toFixed(2)}`;
    }

    idBtnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    }
    
    idBtnRecuperar.onclick = ()=>{
        fnRecuperarEstado();
        console.log(estadoAplicacion);
        idNota1.value = estadoAplicacion.idNota1;
        idNota2.value = estadoAplicacion.idNota2;
        idNota3.value = estadoAplicacion.idNota3;
    }

};


