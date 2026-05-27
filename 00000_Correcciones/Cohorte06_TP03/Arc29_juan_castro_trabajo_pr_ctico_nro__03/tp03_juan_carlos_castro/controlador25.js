/*

Ejercicio Nro. 25: 

Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de 
la arrow function.

Nota: Debe devolver un número 

*/

import { fnTasaEnre } from "./modelo25.js";
import { fnGuardar } from "./modelo25.js";
import { fnRecuperar } from "./modelo25.js";


window.onload = () => {

    const estadoAplicacion = {
        importe: 0
    };

    const idImporteTasa = document.querySelector("#idImporteTasa");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    fnRecuperar();

    idImporteTasa.oninput = () => {
        estadoAplicacion.importe = Number(idImporteTasa.value);
        fnGuardar(estadoAplicacion);
    };

    idBtnCalcular.onclick = () => {
        let resultado = fnTasaEnre(estadoAplicacion.importe);
        idResultado.textContent = `El valor de la Tasa ENRE es ${resultado}`;
    };
};