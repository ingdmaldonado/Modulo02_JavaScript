/* Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje */
{
    let cantidadPasajes= 0;
    cantidadPasajes= Number(prompt( `Ingrese la cantidad de pasajes`));
    console.log (`Cantidad de pasajes:`, cantidadPasajes)

    let importePasajes=0;
    importePasajes= Number( prompt(`Ingrese el importe de los pasajes`));
    console.log(`Importe de pasaje $`, importePasajes);

    let totalCompra= cantidadPasajes * importePasajes;

    let descuento= 0;

    if (cantidadPasajes > 3 && totalCompra > 500000)
        descuento= (totalCompra * 15)/100;
    else if (cantidadPasajes > 3 && totalCompra >250000)
        descuento= (totalCompra * 11)/100;
    
    let totalPagar= totalCompra - descuento;

    console.log (`Descuento de $`,descuento);
    console.log (`Total a pagar $`, totalPagar);
}