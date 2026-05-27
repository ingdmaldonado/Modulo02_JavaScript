import { fnVerificarDigitos } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
-----Ejercicio Nro. 31--------- 
Definir una arrow function que reciba como parámetro 
una cadena de texto y determine si la misma no 
contiene ningún dígito numérico (del 0 al 9). 
La función debe recorrer la cadena carácter por carácter 
utilizando un ciclo for. Durante el recorrido, analizar 
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'. 
Si se detecta algún número, se debe interrumpir 
inmediatamente el bucle con break y devolver el valor 
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”. 
En caso de recorrer la cadena completa sin encontrar ningún número, 
la función deberá devolver true.

*/

window.onload = () => {

    const estadoAplicacion = {
        cadenaDig: ""
    };

    const idCadenaNumerica = document.querySelector("#idCadenaNumerica");
    const idDigitos = document.querySelector("#idDigitos");
    const idResultadoDigito = document.querySelector("#idResultadoDigito");


    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio31");

    idCadenaNumerica.oninput = () => {

        estadoAplicacion.cadenaDig = idCadenaNumerica.value;
        fnGuardar("ejercicio31", estadoAplicacion);
        console.log(estadoAplicacion);

    }

    idDigitos.onclick = () => {

        let contieneDigitos = fnVerificarDigitos(estadoAplicacion.cadenaDig);

        idResultadoDigito.textContent = `- Esta cadena de texto contiene dígitos? ${contieneDigitos}`;
    }
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio31", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio31");

        if (datos) {

            estadoAplicacion.cadenaDig = datos.cadenaDig;

            idCadenaNumerica.value = datos.cadenaDig;
        }
    };
};

