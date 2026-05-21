/*Ejercicio Nro. 27:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.*/

import {cantidadVocales} from "./modelo27.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idCadena.value = estadoObjeto.cadena;
    }
};
window.onload = ()=> {
const estadoAplicacion = {
    cantidadVocales:0
};
const idCadena = document.querySelector("#idCadena");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idCadena.oninput = () => {
    estadoAplicacion.cantidadVocales = idCadena.value;
    fnguardarEstado(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let resultado = cantidadVocales(estadoAplicacion.cantidadVocales);
 
    idResultado.textContent = `La cantidad de vocales es: ${resultado}`
};
};
