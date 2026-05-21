/*

Ejercicio Nro. 31: 

Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no 
contiene ningún dígito numérico (del 0 al 9). 
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar 
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'. 
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor 
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”. 
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.

Nota: Debe devolver un boolean (true ó false). 
 

*/

import { fnNumeros} from "./modelo31.js";
import { fnGuardar } from "./modelo31.js";
import { fnRecuperar } from "./modelo31.js";

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
        let resultado = fnNumeros(estadoAplicacion.texto);
        idResultado.textContent = `Hay numeros en el texto: ${resultado} `
    };

};