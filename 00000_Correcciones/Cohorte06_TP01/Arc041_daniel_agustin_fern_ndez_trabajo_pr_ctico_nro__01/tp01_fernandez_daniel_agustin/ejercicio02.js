/*

Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.

*/

{
    let importeTotal = 0;

    importeTotal = Number(prompt(`Ingrese el importe total`));

    let descuento = (importeTotal * 15)/100;

    let importeFinal= (importeTotal-descuento)

    console.log(`El importe total es: ${importeTotal}`);
    console.log(`El descuento es: ${descuento}`);
    console.log(`Su importe final es: ${importeFinal}`);
}