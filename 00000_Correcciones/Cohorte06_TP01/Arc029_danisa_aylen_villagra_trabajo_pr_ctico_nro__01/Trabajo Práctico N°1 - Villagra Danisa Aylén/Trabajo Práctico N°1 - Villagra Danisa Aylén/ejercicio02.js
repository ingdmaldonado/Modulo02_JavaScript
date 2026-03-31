/*Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.*/

{
    let importeCompra= Number(prompt(`Ingrese el importe de la compra:`));
    let descuento = (importeCompra * 15) / 100;
    let importeAPagar = importeCompra - descuento;

    console.log (`Importe de la compra: ${importeCompra}`);
    console.log (`Descuento (-15%): ${descuento}`);
    console.log (`Total a pagar: ${importeAPagar}`);
}