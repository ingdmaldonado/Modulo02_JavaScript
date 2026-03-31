/*
Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.
*/

// Importe total de compra

let importeTotal = 0;
importeTotal = Number(prompt('Ingrese importe total de compra:'));
console.log('El importe total de compra es: '+ importeTotal);

// Calculo descuento
let descuento = importeTotal * 0.15;
console.log(`El descuento del 15% es: ${descuento}`);

// Calculo importe restante
let importeRestante = importeTotal - descuento;
console.log('El impporte restante es: ' + importeRestante);

