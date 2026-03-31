/*Ejercicio Nro. 06: Estructuras Condicionales (if/else)

Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
*/ 

let totalCompra= 0;
totalCompra = Number(prompt("Ingrese el importe de la compra:"));

let descuento = totalCompra * 0.5;

if (descuento > 80000) {
    descuento = 80000;
}

let totalFinal = totalCompra - descuento;

console.log("Importe de la compra:", totalCompra);
console.log("Descuento aplicado:", descuento);
console.log("Total a pagar:", totalFinal);