/*

Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).

Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.

*/

{
    let valorDeLaCompra = 0;

    valorDeLaCompra = Number(prompt(`Ingrese el valor de la compra`));

    let descuento = (valorDeLaCompra * 50)/100;

    if(descuento <= 80000)
    {
        let importeFinal= (valorDeLaCompra-descuento)
        console.log(`El importe total es: ${importeFinal}`);
    }
    else
    {
        let importeFinal= (valorDeLaCompra-80000)
        console.log(`El importe total es: ${importeFinal}`);
    }
}