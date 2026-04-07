/*

Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.

*/
{

    let ImportedeCompra = 0;
    let PorcentajeDescuento = 15;
    let TotalDescuento = 0;
    let ImporteaPagar = 0;

    ImportedeCompra = Number(prompt(`Ingrese el Importe de la COMPRA`));
    console.log(`El Importe de la Compra es: ${ImportedeCompra}`);

    TotalDescuento = (ImportedeCompra * PorcentajeDescuento) / 100;
    console.log(`El Descuento del 15% es: ${TotalDescuento}`);

    ImporteaPagar = ImportedeCompra - TotalDescuento;
    console.log(`El Monto Total a PAGAR es: ${ImporteaPagar}`);


}