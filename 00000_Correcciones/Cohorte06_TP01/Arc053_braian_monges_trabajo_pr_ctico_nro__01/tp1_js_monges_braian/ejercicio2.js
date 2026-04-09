/*Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final. */

{
    // inicializacion

    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`ingrese el importe de compra`));

    let descuento = (importeDeCompra * 15)/100;
    let totalAPagar = 0;

    totalAPagar = importeDeCompra - descuento;

    console.log(`importe de compra: ${importeDeCompra} descuento: ${descuento} total a pagar: ${totalAPagar}`);




}