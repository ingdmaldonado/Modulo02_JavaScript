/*

Ejercicio Nro. 28: 
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 
No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
Nota: Debe devolver un número.

*/

import { fnCantidadConsonantes } from "./modelo28.js";
import { fnGuardar } from "./modelo28.js";
import { fnRecuperar } from "./modelo28.js";

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
        let resultado = fnCantidadConsonantes(estadoAplicacion.texto);
        idResultado.textContent = `Hay ${resultado} consonantes en este texto `
    };

};