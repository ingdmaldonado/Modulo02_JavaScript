/*Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final. */

{

let totalCompra=0;

totalCompra=Number(prompt(`Ingrese el monto toal de la compra`));

descuento=0;

descuento=(totalCompra*15)/100;

importeAPagar=(totalCompra-descuento);


console.log(`El importe total de la compra es: ${totalCompra}, descuento: ${descuento}, y el importe final a pagar es: ${importeAPagar}`);




}