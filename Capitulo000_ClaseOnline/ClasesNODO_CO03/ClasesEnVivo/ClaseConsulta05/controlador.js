
/* 

Ejercicio Nro. 16:
Realizar un programa que permita ingresar el importe total de una compra y aplicar
 descuentos según los totales de compra.
Si el monto es menor a $10.000, no tiene descuento.
Si el monto está entre $10.000 y $50.000, se aplica un 10% de descuento.
Si el monto es mayor a $50.000, se aplica un 20% de descuento.
Nota: puede construir una arrow function que reciba como parámetro el importe total 
y que retorne el descuento.
Mostrar el importe final a pagar luego del descuento.

*/

import {fnDescuentoDeCompra} from "./funciones.js";

window.addEventListener("load",()=>
    {
        const idImporteDeCompra = document.querySelector("#idImporteDeCompra");
        const idCalcularDescuento = document.querySelector("#idCalcularDescuento");
        const idResultado = document.querySelector("#idResultado");
        const idTotalDeCompra = document.querySelector("#idTotalDeCompra");
        const idDescuento = document.querySelector("#idDescuento");

        console.log(idImporteDeCompra,idCalcularDescuento,idResultado);

        idCalcularDescuento.addEventListener("click",()=>
            {
                /* 1ro es acceder al input y sacar su valor */
                let importeDeCompra = Number(idImporteDeCompra.value);

                /* 2do deberíamos validar que el importe sea un
                valor correcto. es decir un importe > 0 */

                if(importeDeCompra > 0)
                {
                     /* 3ro debería realizar una función que reciba
                    como parametro el importe de la compra. y en función
                    de la compra, devuelva el descuento. */

                    let descuento = 0;

                    descuento = fnDescuentoDeCompra(importeDeCompra);

                    let totalDeCompra = 0;

                    totalDeCompra = importeDeCompra - descuento;

                    console.log(importeDeCompra);
                    console.log(descuento);
                    console.log(totalDeCompra);

                    /* mostrar en el DOM => documento HTML 
                    los importes de las compras */

                    idTotalDeCompra.textContent = `Importe de Compra: ${importeDeCompra.toFixed(2)}` ;
                    idDescuento.textContent = `Descuento: ${descuento}` ;
                    idResultado.textContent = `Total a pagar: ${totalDeCompra}`;

                }
                else
                {
                    alert("por ingrese un valor correcto. mayor que cero");
                }

               

               

            })

    })