/*
Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.

*/

{
    let importeTotal = 0;

    importeTotal =Number(prompt(`Ingrese el importe total`));

    let descuento = 0;

    descuento = (importeTotal * 15 ) / 100;

    let totalAPagar = 0;

    totalAPagar = importeTotal - descuento;

    console.log(`Importe total: ${importeTotal} descuento 15%: ${descuento} Total a pagar ${totalAPagar}`)
}