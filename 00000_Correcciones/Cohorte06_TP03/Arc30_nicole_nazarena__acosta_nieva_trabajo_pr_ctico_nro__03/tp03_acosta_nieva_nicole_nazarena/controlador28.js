/*Ejercicio Nro. 28:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.*/
import {cantidadConsonantes} from "./modelo28.js";


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
    cantidadConsonantes:0
};
const idCadena = document.querySelector("#idCadena");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idCadena.oninput = () => {
    estadoAplicacion.cantidadConsonantes = idCadena.value;
    fnguardarEstado(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let resultado = cantidadConsonantes(estadoAplicacion.cantidadConsonantes);
 
    idResultado.textContent = `La cantidad de consonantes es: ${resultado}`
};
};