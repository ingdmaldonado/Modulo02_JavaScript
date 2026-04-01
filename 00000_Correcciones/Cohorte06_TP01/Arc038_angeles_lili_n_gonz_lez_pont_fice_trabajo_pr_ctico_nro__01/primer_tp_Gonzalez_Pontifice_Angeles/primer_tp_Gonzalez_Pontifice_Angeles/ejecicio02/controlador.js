/*
Ejercicio02 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
 el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.
*/

//importe de compra total//
let importeCompratotal = 0;
importeTotal = Number(prompt("Ingrese importe de compra:"));
let descuento = importeCompra * 0.15;
let importeTotal = importeCompra - descuento;
console.log ("Importe de la compra con descuento del 15% es:" + importeTotal );