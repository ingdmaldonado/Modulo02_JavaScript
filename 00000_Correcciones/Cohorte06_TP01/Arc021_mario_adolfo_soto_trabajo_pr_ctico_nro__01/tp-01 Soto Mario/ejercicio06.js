/*Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido. */


{
let valorDeLaCompra = 0;
valorDeLaCompra = Number(prompt(`Ingrese el valor de la compra`));

console.log(`ingrese el valor de la compra`);

//descuento

let descuento = (valorDeLaCompra*50)/100; 
descuento = descuento > 80000 ? 80000 : descuento;
console.log(`El descuento de la compra es ${descuento}`);
//tota a pagar 

let totalApagar = valorDeLaCompra - descuento;
console.log(`el importe a pagar es ${totalApagar}`);

}