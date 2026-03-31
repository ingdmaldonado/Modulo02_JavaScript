/*Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.*/

{
    let valorDeCompra = 0;

    valorDeCompra = Number(prompt(`Sr ingrese el  valor de la compra`));

    let descuento = 0;

    let totalAPagar = 0;

    descuento = (valorDeCompra * 50) /100;

    totalAPagar = valorDeCompra - descuento;

    if(descuento > 80000)
    {
        descuento = 80000
    }
    console.log(`El valor de la compra ${valorDeCompra},el descuento es:${descuento}, total a pagar:${totalAPagar}`);
}