/*
Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras 
del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente 
a 80.000,00 (ochenta mil pesos argentinos). Realice un programa que permita introducir el valor 
de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.
*/

//solicitar el valor de la compra//
let valorCompra = 0;
valorCompra = Number(prompt("Ingrese el valor de la compra:"));
//calculo del descuento con tope máximo de 80.000//
let descuento = (valorCompra * 50) / 100 >= 80000 ? 80000 : (valorCompra * 50) / 100;
//mostrar resultados//
console.log(`El valor de la compra es: ${valorCompra}`);
console.log(`El descuento aplicado (50% con tope) es: ${descuento}`);
console.log(`El total a pagar con el descuento es: ${valorCompra - descuento}`);