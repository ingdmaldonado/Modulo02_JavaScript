/*

Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final.

*/ 

{

let importe = 0;
let descuento = 0;
let total = 0;

importe = Number(prompt(`Ingrese el monto de la compra:`));

descuento = (importe*15)/100;
total = importe - descuento;

console.log(`El importe a pagar es: ${total}, el descuento: ${descuento}`)
 
}