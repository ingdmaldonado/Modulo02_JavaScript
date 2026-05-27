/*
    Ejercicio Nro. 06: Estructuras Condicionales (if/else)
    Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).

    Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.
*/

{
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`Ingrese el importe de la Compra.`));

    let descuento = importeDeCompra/2;

    descuento = descuento >= 80000? 80000 : descuento;

    let totalAPagar = importeDeCompra - descuento;

    console.log(`Tope Máximo de Descuento = $80.000,00`);

    console.log(`Importe de la Compra: $${importeDeCompra} | ONE SHOT (50% Descuento): $${descuento} | Total a Pagar: $${totalAPagar}`);
}