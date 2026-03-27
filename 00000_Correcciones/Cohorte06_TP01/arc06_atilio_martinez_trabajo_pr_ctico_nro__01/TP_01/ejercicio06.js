/* Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.
*/

{
let importeCompra = Number(prompt("Ingrese el valor de la compra:"));

let descuento = (importeCompra * 50) / 100;

let tope = 80000;

if (descuento > tope) 
{
    descuento = tope;
}

let importeFinal = importeCompra - descuento;

console.log(`Valor de la compra: ${importeCompra}`);
console.log(`Descuento aplicado: ${descuento}`);
console.log(`Importe final a pagar: ${importeFinal}`);
}