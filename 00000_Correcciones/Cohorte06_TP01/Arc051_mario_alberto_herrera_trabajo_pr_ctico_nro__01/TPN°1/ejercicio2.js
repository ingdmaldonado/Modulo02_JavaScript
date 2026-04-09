/*
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final.
*/
let totcomp = Number(prompt("Ingrese el importe total de la compra"));

let descuento = totcomp * 0.15;
let impfinal = totcomp - descuento;

console.log("Importe total de la compra: " + totcomp);
console.log("Descuento del 15%: " + descuento);
console.log("Importe final a pagar: " + impfinal);