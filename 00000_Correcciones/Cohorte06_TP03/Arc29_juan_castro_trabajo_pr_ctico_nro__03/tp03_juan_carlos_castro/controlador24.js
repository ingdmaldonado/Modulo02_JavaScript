/*

Ejercicio Nro. 24: 

Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function. 

Nota: Debe devolver un número

*/

import { fnGuardar } from "./modelo24.js";
import { fnRecuperar } from "./modelo24.js";
import { fnCalculoTasaSub } from "./modelo24.js";


window.onload = () => {

    const estadoAplicacion = {
        importe: 0
    };

    const idImporte = document.querySelector("#idImporte");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    fnRecuperar();

    idImporte.oninput = () => {
        estadoAplicacion.importe = Number(idImporte.value);
        fnGuardar(estadoAplicacion);
    };

    idBtnCalcular.onclick = () => {
        let resultado = fnCalculoTasaSub(estadoAplicacion.importe);
        idResultado.textContent = `El importe de Tasa de Subsuelo es ${resultado}`;
    };


};