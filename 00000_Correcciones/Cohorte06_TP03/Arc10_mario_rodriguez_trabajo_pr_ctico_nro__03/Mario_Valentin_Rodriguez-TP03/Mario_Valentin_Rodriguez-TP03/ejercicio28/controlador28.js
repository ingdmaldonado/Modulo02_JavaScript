import {fnCalcularConstantes} from "./modelo28.js";

/*

Ejercicio Nro. 28: 

Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 

Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 

No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 

Nota: Debe devolver un número. 



*/


window.onload=()=>{

    const estadoAplicacion={

        cadenaTexto: "",

    };

    const idConstantes = document.querySelector("#idConstantes");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idConstantes.oninput=()=>{

        estadoAplicacion.cadenaTexto = idConstantes.value;

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick = ()=>{

        let resultado = fnCalcularConstantes(estadoAplicacion.cadenaTexto);

        console.log(resultado);

        idResultado.textContent= `Cantidad de Constantes: ${resultado}`;

    };

};