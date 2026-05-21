/*Ejercicio Nro. 29:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false). */

import {cantidadS} from "./modelo29.js"; 

const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idPalabra.value = estadoObjeto.palabra;
    }
};
window.onload = ()=> {
const estadoAplicacion = {
    cantidadS:0
};
const idPalabra = document.querySelector("#idPalabra");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idPalabra.oninput = () => {
    estadoAplicacion.cantidadS = idPalabra.value;
    guardarEstado(estadoAplicacion);
};

idBtnCalcular.onclick = () => {
    let resultado = cantidadS(estadoAplicacion.cantidadS);
 
    idResultado.textContent = `La cantidad de letras "s" es: ${resultado}`
};
};