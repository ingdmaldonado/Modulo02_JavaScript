/* TP - EJERCICIO NRO. 06
   Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
   denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
   teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
   pesos argentinos).
   Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
   sabiendo que no se puede pasar el límite establecido
*/

{
    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`));

    let descuento = 0;

    descuento = (importeCompra * 50) / 100;

    if(descuento > 80000)
    {
        descuento = 80000;
        console.log(`Se aplicó el tope máximo de descuento`);
    }
    else
    {
        console.log(`Se aplicó el 50% de descuento`);
    }

    let totalAPagar = 0;
    totalAPagar = importeCompra - descuento;

    console.log(`Importe de Compra: ${importeCompra}`);
    console.log(`Descuento Aplicado: ${descuento}`);
    console.log(`Total a Pagar: ${totalAPagar}`);
}
