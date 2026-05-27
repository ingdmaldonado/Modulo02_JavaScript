/*Ejercicio Nro. 31:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no contiene ningún dígito numérico (del 0 al 9).
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'.
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor lógico false, ya que la cadena deja de cumplir la condición “no contiene números”.
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true.
Nota: Debe devolver un boolean (true ó false).*/

import { contieneNumeros} from "./modelo31.js";

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idDigitos.value = estadoObjeto.digitos;
    }
};
window.onload = ()=> {
const estadoAplicacion = {
    digitos:0
};
const idDigitos = document.querySelector("#idDigitos");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idDigitos.oninput = () => {
    estadoAplicacion.digitos = idDigitos.value;
    guardarEstado(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let resultado = contieneNumeros(estadoAplicacion.digitos);
 
    idResultado.textContent = `La cadena contiene numeros ${resultado}`;
};
};