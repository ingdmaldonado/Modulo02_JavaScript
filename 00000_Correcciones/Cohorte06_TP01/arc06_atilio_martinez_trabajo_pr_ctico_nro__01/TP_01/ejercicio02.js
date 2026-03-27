/* Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.
*/

{
let importeTotal = Number(prompt("Ingrese el importe total de la compra:"));

let descuento = (importeTotal * 15)/100;

let importeFinal = importeTotal - descuento;

console.log("Importe total de la compra: $" + importeTotal);
console.log("Descuento aplicado (15%): $" + descuento);
console.log("Importe final a pagar: $" + importeFinal);
}