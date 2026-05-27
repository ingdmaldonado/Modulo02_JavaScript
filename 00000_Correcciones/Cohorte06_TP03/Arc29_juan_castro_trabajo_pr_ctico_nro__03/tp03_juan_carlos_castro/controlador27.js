/*

Ejercicio Nro. 27: 

Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 

Nota: Debe devolver un número.

*/
import { fnCantidadVocales } from "./modelo27.js";
import { fnGuardar } from "./modelo27.js";
import { fnRecuperar } from "./modelo27.js";

window.onload = () => {

    const estadoAplicacion = {
        texto: `texto`
    }

    const idTexto = document.querySelector("#idTexto");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    fnRecuperar();

    idTexto.oninput = () => {
        estadoAplicacion.texto = idTexto.value;
        fnGuardar(estadoAplicacion);
    };

    idBtnCalcular.onclick = () => {
        let resultado = fnCantidadVocales(estadoAplicacion.texto);
        idResultado.textContent = `Hay ${resultado} vocales en este texto `
    };

};