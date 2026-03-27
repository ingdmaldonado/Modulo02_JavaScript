/*
-----------Ejercicio Nro. 02--------
Realizar un programa que permita ingresar el importe total 
de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. 
-----Mostrar por consola el importe
total de la compra y el descuento del
15% como así también el importe restante final.
*/
{
    let importeDeCompra = 0;
    let importeTotal = 0;

    importeDeCompra = Number(prompt(`Ingrese su importe de compra:`));

    let descuento = (importeDeCompra * 15)/100;
    importeTotal = importeDeCompra - descuento;

    console.log (`Importe de compra: $${importeDeCompra} Descuento: ${descuento} Total de la compra: $${importeTotal}`);
}