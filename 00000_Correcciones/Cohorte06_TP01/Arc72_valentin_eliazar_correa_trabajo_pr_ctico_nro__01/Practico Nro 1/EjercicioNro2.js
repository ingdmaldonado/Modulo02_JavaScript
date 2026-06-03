/*
Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final. 
*/

{
    let importeDeCompra = 0;
    let descuento = 0;
    let totalAPagar = 0;

    importeDeCompra = Number(prompt(`Sr Cliente Ingrese el importe`));

    console.log(`El importe de la compra es de ${importeDeCompra}`)

    descuento = (importeDeCompra *15)/100;
    console.log (`El descuento es de ${descuento}`)

    totalAPagar = importeDeCompra - descuento;

    console.log(`Total a pagar ${ totalAPagar}`);

    


}