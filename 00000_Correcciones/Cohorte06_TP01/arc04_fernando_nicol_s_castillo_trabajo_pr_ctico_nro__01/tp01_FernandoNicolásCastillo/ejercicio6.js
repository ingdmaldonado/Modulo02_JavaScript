/*Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido*/
{

let valorCompra = 0;
let descuento = 0;

valorCompra = Number(prompt('Ingrese el valor comprado:'));

descuento = (valorCompra * 50)/100;

if (descuento >= 80000)
{
    descuento = 80000;
} 

console.log (`Importe de Compra ${valorCompra}, Descuento: ${descuento}, Total a Pagar: ${valorCompra - descuento}` );

}
