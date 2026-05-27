import { fnCantidadVocales } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
------Ejercicio Nro. 27------
Realizar una arrow function que reciba como parámetro 
una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter
hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. 
No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 

*/

window.onload = () => {

    const estadoAplicacion = {
        cadenaTexto: ""
    };

    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idCantidad = document.querySelector("#idCantidad");
    const idResultadoVocales = document.querySelector("#idResultadoVocales");
    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio27");

    idCadenaTexto.oninput = () => {

        estadoAplicacion.cadenaTexto = idCadenaTexto.value;
        fnGuardar("ejercicio27", estadoAplicacion);
    };

    idCantidad.onclick = () => {

        let cantidadVocales = fnCantidadVocales(estadoAplicacion.cadenaTexto);

        console.log(cantidadVocales);

        idResultadoVocales.textContent = `Cantidad de vocales: ${cantidadVocales}`;
    };
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio27", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio27");

        if (datos) {

            estadoAplicacion.cadenaTexto = datos.cadenaTexto;

            idCadenaTexto.value = datos.cadenaTexto;
        }
    };
};