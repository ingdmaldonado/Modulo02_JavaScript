/*
    Ejercicio Nro. 06: Estructuras Condicionales (if/else)
    Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” 
    que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el 
    descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).

    Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
    sabiendo que no se puede pasar el límite establecido.
*/

{
    console.log('==============PROMOCION DESCUENTO ONE SHOT DE BANCO NACION================');

    let importeCompra = 0;
    let descuentoCompra = 0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`));

    //Calcular el descuento del 50% de la compra
    descuentoCompra = (importeCompra*50)/100;

    descuentoCompra = (descuentoCompra > 80000? 80000 : descuentoCompra);

    console.log(`Importe total de la compra: $${importeCompra}`);
    console.log(`Descuento del 50% con tope de reintegro de $80000: $${descuentoCompra}`);
    console.log(`Total a pagar: $${(importeCompra - descuentoCompra)}`);

}