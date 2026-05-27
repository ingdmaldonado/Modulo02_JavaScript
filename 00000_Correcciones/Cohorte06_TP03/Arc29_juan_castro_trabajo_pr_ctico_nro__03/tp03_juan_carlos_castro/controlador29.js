/*

Ejercicio Nro. 29: 

Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana. 
Diplomatura Universitaria en Desarrollo Web 
Full Stack con JavaScript  
Módulo: JavaScript 
Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 
No puede utilizar métodos como includes() o indexOf(). 

Nota: Debe devolver un boolean (true ó false).

*/

import { fnCantidadS } from "./modelo29.js";
import { fnGuardar } from "./modelo29.js";
import { fnRecuperar } from "./modelo29.js";

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
        let resultado = fnCantidadS(estadoAplicacion.texto);
        idResultado.textContent = `Hay 2 "S" o mas en el texto: ${resultado} `
    };

};