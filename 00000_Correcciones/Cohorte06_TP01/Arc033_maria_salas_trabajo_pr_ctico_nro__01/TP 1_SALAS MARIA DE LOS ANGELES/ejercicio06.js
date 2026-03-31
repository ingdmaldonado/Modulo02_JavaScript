/*
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos). 
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido. 
 */

{
    let montoDeCompra = 0;
    let descuento = 0;
    let montoTope = 80000;
    let reintegro = 0;

    montoDeCompra = Number(prompt(`ingrese el monto de compra`))

    descuento = (montoDeCompra*50)/100;

    reintegro = descuento > montoTope ? montoTope : descuento;

    let totalAPagar = montoDeCompra - reintegro;

    console.log(`el reintegro es del: $${reintegro}
    el descuento aplicado fué del: $${descuento}
    el total a pagar es de: $${totalAPagar}`)


   
}