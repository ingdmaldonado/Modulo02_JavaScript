import {fnCalcularEspacios} from "./modelo30.js";

/*

Ejercicio Nro. 30: 

Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma 
contiene al menos tres espacios en blanco. 

La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. 

Durante el recorrido, deberá contar la cantidad de espacios que se encuentren. 

En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el 
ciclo mediante la instrucción break y devolver el valor lógico true. 

Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false. 

Nota: Debe devolver un boolean (true ó false).


*/


window.onload=()=>{

    const estadoAplicacion ={
        cadenaTexto:"",
    };

    const idCadenaTexto = document.querySelector("#idCadenaTexto");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");

    idCadenaTexto.oninput = ()=>{

        estadoAplicacion.cadenaTexto=idCadenaTexto.value;

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick=()=>{

        let resultado= fnCalcularEspacios(estadoAplicacion.cadenaTexto);

        console.log(resultado);

        idResultado.textContent = `${resultado}`;
    };

};