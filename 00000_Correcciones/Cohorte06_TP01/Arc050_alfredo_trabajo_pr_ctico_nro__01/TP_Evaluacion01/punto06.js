/*Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido. */

{

let montoCompra=0;


montoCompra=Number(prompt(`Ingrese el monto de la compra:`));


console.log(montoCompra);



let descuento=0;


descuento = (montoCompra*50)/100;


total=0;

if ( descuento > 80000)
{
descuento=80000;
}
else 
{
 descuento;   
}

total=montoCompra-descuento;
console.log(`El monto de la comopra es: ${montoCompra}, el descuento es: ${descuento} y el total a pagar es: ${total}`);

}