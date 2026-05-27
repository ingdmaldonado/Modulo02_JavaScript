/*Ejercicio Nro. 30:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).*/

import {espacios} from "./modelo30.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idEspacio.value = estadoObjeto.espacio;
    }
};
window.onload = ()=> {
const estadoAplicacion = {
    cantidadEspacios:0
};
const idEspacio = document.querySelector("#idEspacio");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idEspacio.oninput = () => {
    estadoAplicacion.cantidadEspacios = idEspacio.value;
    fnguardarEstado(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let resultado = espacios(estadoAplicacion.cantidadEspacios);
 
    idResultado.textContent = `La cantidad de espacios es: ${resultado}`
};
};