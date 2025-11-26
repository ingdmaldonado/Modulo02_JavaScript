/* Ejercicio Nro. 13:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número
*/

import {calcularPrecioVenta} from "./datos13.js";

/* Delegación de Eventos */
window.onload = () => {
    console.log("running");

    // Obtengo las referencias a los elementos del DOM
    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargenGanancia = document.querySelector("#idMargenGanancia");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");

    console.log(idImporteCompra, idMargenGanancia, idBtnCalcular, idResultado);

    /* Cuando se dispara el evento click sobre el botón Calcular,
    se delega en una arrow function */
    idBtnCalcular.onclick = () => {
        
        let importeCompra = Number(idImporteCompra.value);
        let margenGanancia = Number(idMargenGanancia.value);

        console.log(`Importe: ${importeCompra}`);
        console.log(`Margen: ${margenGanancia}%`);

        // Llamo a la arrow function para calcular el precio de venta
        let precioVenta = calcularPrecioVenta(importeCompra, margenGanancia);

        console.log(`Precio de venta: ${precioVenta}`);

        // Muestro el resultado en el DOM
        idResultado.textContent = `El Precio de Venta es: $${precioVenta.toFixed(2)}`;
    };
}