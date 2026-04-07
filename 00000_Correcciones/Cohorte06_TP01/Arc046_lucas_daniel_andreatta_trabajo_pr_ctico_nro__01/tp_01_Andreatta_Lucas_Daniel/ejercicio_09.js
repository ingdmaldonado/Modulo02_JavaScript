/* 

Ejercicio Nro. 09: Estructuras Condicionales (if/else) 
 Una  plataforma  de  venta  de  pasajes  (terrestres)  desea  realizar  una  aplicación  web  que 
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
    let importeTotalPorPasaje = 0;
    let descuento = 0;

    cantidadPasajes = Number(prompt(`Ingrese cantidad de pasajes:`));

    importeTotalPorPasaje = Number(prompt(`Ingrese importe de pasajes:`));

    console.log(`Cantidad de pasajes: ${cantidadPasajes}`);
    console.log(`Importe por cada pasaje: ${importeTotalPorPasaje}`);
    

    let totalCompra = (cantidadPasajes * importeTotalPorPasaje);
    console.log(`Importe total de compra *sin descuentos aplicados: ${totalCompra}`);


    if ((cantidadPasajes>3) && ((totalCompra>=250000 && totalCompra<500000 ))) // opcion 1, valor total entre 250000 y 500000 y mas de 3 pasajes comprados -> descuento del 11% al total compra
    {
        descuento = (totalCompra * 11)/100;
        console.log(`Se aplicara un descuento del 11%`);
        totalCompra = totalCompra - descuento;
        console.log(`Total compra pasajes: ${totalCompra}`);
    } 
    else 
    {
        if ((cantidadPasajes>3) && (totalCompra>=500000)) // opcion 2, compra total mayor a 500000 y mas de 3 pasajes comprados -> descuento del 15% al total compra
        {
            descuento = (totalCompra * 15)/100;
            console.log(`Se aplicara un descuento del 15%`);
            totalCompra = totalCompra - descuento;
            console.log(`Total compra pasajes: ${totalCompra}`);
        } 
        else // opcion para cuando la compra sea menor a 250000, no se aplican descuentos
        {
            console.log(`No se ha aplicado descuento`);
            console.log(`Total de la compra: ${totalCompra}`);
        } 
    }
}