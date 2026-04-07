/*
    Ejercicio Nro. 09: Estructuras Condicionales (if/else)
    Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
    permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
    de promover las ventas.
         Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
            se aplicará un descuento del 11% sobre el total de la compra.
         Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
            se aplicará un descuento del 15% sobre el total de la compra.
    El Sistema debe registrar mínimamente estas variables:
         cantidad de pasajes
         importe pasaje
         total compra = cantidad de pasajes * importe pasaje
*/

{
    let cantidadPasajes = 0;
    let importePasaje = 0;
    let totalCompra = 0;

    cantidadPasajes = Number(prompt(`Ingrese la cantidad de pasaje a comprar`));
    importePasaje = Number(prompt(`Ingrese el importe de cada pasaje`));

    totalCompra = (importePasaje * cantidadPasajes);
    
    if((cantidadPasajes > 3) && ((totalCompra > 250000) && (totalCompra < 500000)))
    {
        totalCompra = (totalCompra - (totalCompra*11)/100);
    }else
    {
        if((cantidadPasajes > 3) && (totalCompra > 500000) )
        {
            totalCompra = (totalCompra - (totalCompra*15)/100);
        }
    }

    console.log('====================DETALLE DE LA COMPRA===================');
    console.log(`Cantidad de pasajes comprados ${cantidadPasajes} y importe de cada pasaje $${importePasaje}`);
    console.log(`Total de la compra es $${totalCompra}`);
}