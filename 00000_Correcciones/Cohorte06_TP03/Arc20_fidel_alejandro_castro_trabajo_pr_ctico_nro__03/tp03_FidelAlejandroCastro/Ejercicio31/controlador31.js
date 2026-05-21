/* 28 - Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.

Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.

No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
*/

import { fnContieneNumero } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (cadena)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        cadena.value = estadoOBJETO.cadena;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        cadena: ""
    };

    const cadena = document.querySelector("#cadena");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");
    let digitosNumericos = "0123456789";

    fnRecuperarEstado(cadena);

    cadena.oninput = () => {
        estadoAplicacion.cadena = cadena.value;
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnContieneNumero(estadoAplicacion.cadena, digitosNumericos);
        idResultado.textContent = `Resultado: ${resultado}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(cadena);    
    };
}

