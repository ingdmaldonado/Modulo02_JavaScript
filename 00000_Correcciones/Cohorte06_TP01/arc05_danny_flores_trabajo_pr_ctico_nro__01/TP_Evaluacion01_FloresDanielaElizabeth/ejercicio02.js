/* TP - EJERCICIO NRO. 02
   Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
   el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
   15% como así también el importe restante final.
*/

{
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`Sr. Ingrese el importe de la compra`));

    let descuento = 0;
    descuento = (importeDeCompra * 15) / 100;

    let importeTotalAPagar = 0;
    importeTotalAPagar = importeDeCompra - descuento;

    console.log(`El importe de la compra es: ${importeDeCompra}`);
    console.log(`El descuento calculado es: ${descuento}`);
    console.log(`El Importe a Pagar es: ${importeTotalAPagar}`);
}
