/* Ejercicio Nro. 06: 

Estructuras Condicionales (if/else) 
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos). 
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido.

*/

{
    let valorCompra = 0;
    valorCompra = Number(prompt(`Ingrese el valor total de la compra:`));
    console.log(`Valor de la compra: ${valorCompra}`);

    let descuento = 0;
    descuento = (valorCompra * 50) / 100;

    descuento = descuento > 80000  ? 80000:descuento;

    let importeFinal = 0;
    importeFinal = valorCompra - descuento;

    console.log(`Descuento: ${descuento} - Importe final a pagar: ${importeFinal}`);

}