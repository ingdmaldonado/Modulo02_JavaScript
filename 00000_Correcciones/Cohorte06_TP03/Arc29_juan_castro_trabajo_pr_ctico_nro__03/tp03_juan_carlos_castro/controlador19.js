/*

Ejercicio Nro. 19: 

Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de 
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función 
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar 
el precio de venta (sin impuestos). 

Nota: Debe devolver un número

*/

import { fnPrecioVenta } from "./modelo19.js"
import { fnGuardar } from "./modelo19.js"
import { fnRecuperar } from "./modelo19.js"

window.onload = () => {

    const estadoAplicacion = {
        importe: 0,
        margen: 0,
    };

    const idImporte = document.querySelector("#idImporte");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    fnRecuperar();

    idImporte.oninput = () => {
        estadoAplicacion.importe = Number(idImporte.value);
        fnGuardar(estadoAplicacion);
    };

    idMargen.oninput = () => {
        estadoAplicacion.margen = Number(idMargen.value);
        fnGuardar(estadoAplicacion);
    };


    idBtnCalcular.onclick = () => {

        let resultado = fnPrecioVenta(estadoAplicacion.importe, estadoAplicacion.margen);
        idResultado.textContent = `El importe de al compra es ${estadoAplicacion.importe} - el margen es ${estadoAplicacion.margen}% - el total de la compra es ${resultado}`;

    };

};


