import {fnCalcularVocales} from "./modelo27.js";

/*

Ejercicio Nro. 27:

Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  

Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 


Nota: Debe devolver un número.


*/


window.onload=()=>{

    const estadoAplicacion={

        cadenaTexto: "",

    };

    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idCadenaTexto.oninput =()=>{

        estadoAplicacion.cadenaTexto = idCadenaTexto.value;

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick=()=>{

        let resultado = fnCalcularVocales (estadoAplicacion.cadenaTexto);

        console.log(resultado);

        idResultado.textContent=(`Cantidad de Vocales: ${resultado}`);


    };



};