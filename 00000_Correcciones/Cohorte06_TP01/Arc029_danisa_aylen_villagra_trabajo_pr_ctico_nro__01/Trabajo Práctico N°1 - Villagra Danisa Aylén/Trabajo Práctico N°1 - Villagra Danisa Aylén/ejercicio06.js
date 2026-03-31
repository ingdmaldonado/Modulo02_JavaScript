/*Ejercicio Nro. 06: Estructuras Condicionales (if/else) 
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos). 
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.*/

{
    let valorDeCompra = Number(prompt(`Ingrese el valor de la compra:`));
    let valorDescuento = (valorDeCompra * 50) / 100;

    console.log(`El valor de la compra es: ${valorDeCompra}`);

    if(valorDescuento > 80000)
    {
        let descuento = 80000;
        let totalAPagar = valorDeCompra - descuento;
        console.log(`Total a pagar: ${totalAPagar}`);

        let calculoporcentajeDescuento = (totalAPagar * 100) / valorDeCompra;
        let porcentajeDescuentoFinal = 100 - calculoporcentajeDescuento;
        console.log(`Se realizó un descuento de ${porcentajeDescuentoFinal}% del precio final.`)
    }
    else
    {
        let totalAPagar = valorDeCompra - valorDescuento;
        console.log(`Total a pagar: ${totalAPagar}`);
    }
}