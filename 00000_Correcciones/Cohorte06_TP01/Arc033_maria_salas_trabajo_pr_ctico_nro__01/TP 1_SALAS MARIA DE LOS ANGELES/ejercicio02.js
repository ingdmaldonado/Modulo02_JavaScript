/*
Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final.
 */


{
    let importeCompra = 0;
    let descuento = 0;
    let importeTotal = 0;

    importeCompra = Number(prompt(`ingrese el monto de su compra`))
    descuento = (importeCompra*15)/100;
    importeTotal = importeCompra - descuento;

    console.log(`el importe de su compra fué de: ${importeCompra}, se aplicó el 15% de descuento: ${descuento}. El monto a pagar es de: ${importeTotal}`)

}