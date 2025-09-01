
/* importar desde un MODULO una funcion que encapsula logica
del calculo del IVA */

import {fnCalcularIVA,fnCalcularIB} from "./modelo.js";


/* onload se carga una sola vez */
window.onload = function()
{
    console.log("la aplicación esta corriendo");

    const idImporteBaseFactura = document.querySelector("#idImporteBaseFactura");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    console.log(idImporteBaseFactura,idBtnCalcular,idResultado);

    idBtnCalcular.onclick = function()
    {
       
        let importeBaseFactura = Number(idImporteBaseFactura.value);

        /* invocando a la función que calcula el iva y lo devuelve
        y como lo devuelve. lo que hago es guardarlo a ese valor
        en una variable */

        let importeIVA = fnCalcularIVA(importeBaseFactura);

        let totalAPagar = 0;

        totalAPagar = importeBaseFactura + importeIVA;

        idResultado.textContent = `Base: ${importeBaseFactura} IVA: ${importeIVA} TOTAL: ${totalAPagar}`;

        console.log(`Base: ${importeBaseFactura} IVA: ${importeIVA} TOTAL: ${totalAPagar}`);
    }
}