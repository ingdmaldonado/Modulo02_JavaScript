/*
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final. 
*/

let importeTotal = 0;
let descuento = 0;
let importeRestante = 0;

importeTotal = Number (prompt (`Ingrese el Importe total de la compra:`));

descuento = (importeTotal * 15) / 100;

importeRestante = importeTotal - descuento;

console.log (`El Importe total de la compra es de: $${importeTotal}`);
console.log (`El descuento aplicado es del 15% resultando en un monto de: $${descuento}`);
console.log (`El importe Restante (total final) es de: $${importeRestante}`);

