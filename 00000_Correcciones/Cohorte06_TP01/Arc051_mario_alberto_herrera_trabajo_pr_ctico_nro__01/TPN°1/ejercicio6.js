/*
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido.
*/
let compra = Number(prompt("Ingrese el valor de la compra"));

let descuento = compra * 0.5;

if (descuento > 80000) {
    descuento = 80000;
}

let total = compra - descuento;

console.log("Importe de la compra: $" + compra);
console.log("Descuento aplicado: $" + descuento);
console.log("Importe final a pagar: $" + total);