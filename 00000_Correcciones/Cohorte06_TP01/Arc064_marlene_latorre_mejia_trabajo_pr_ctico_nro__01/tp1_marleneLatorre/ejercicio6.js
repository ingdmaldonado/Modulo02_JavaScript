/*
Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento sabiendo que no se puede pasar el límite establecido.

*/
{
    let importeDeCompra = 0;

    importeDeCompra = Number(prompt(`Ingrese el importe de compra`));

    console.log(`El importe de compra es: ${importeDeCompra}`);

    let descuento = 0;

    if((importeDeCompra*50)/100 > 80000)
    { 
        descuento = 80000
    }
    else
    {
        descuento = (importeDeCompra * 50)/100
    }

    let totalAPagar = 0;

    totalAPagar = importeDeCompra - descuento;
    
    console.log(`Tiene un descuento de $ ${descuento} el total a pagar es $ ${totalAPagar}`);

}

