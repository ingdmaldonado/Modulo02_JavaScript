/*
Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada "one shot" que consta en realizar un importante descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00.
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
*/
{
    let valorCompra = 0;
    valorCompra = Number(prompt("Ingrese el valor de la compra:"));

    let descuento = 0;
    let totalPagar = 0;

    descuento = valorCompra * 0.50;

    if (descuento > 80000) {
        descuento = 80000;
    }

    totalPagar = valorCompra - descuento;

    console.log(`Valor de la compra: $${valorCompra}. Descuento aplicado: $${descuento}. Total final a pagar: $${totalPagar}`);
}