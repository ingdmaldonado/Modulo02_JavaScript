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

    -Pasajes >3 y compra > 250000 = 11%
    - pasajes > 3 y compra > 500000 = 15%
    -cantidad de pasajes
    -importe del pasaje
    - total de la compra =  cantidad de pasajes * importe del pasaje
*/

{
    let cantidadDePasajes = 0;
    let importeDelPasaje = 0;
    let totalCompra = 0;
    let descuento = 0;
    let totalFinal = 0;

    cantidadDePasajes = Number(prompt(`Ingrese cantidad de pasajes`));

    importeDelPasaje = Number(prompt(`Ingrese importe del pasaje`));

    totalCompra = cantidadDePasajes * importeDelPasaje;

    if ((cantidadDePasajes > 3) && (totalCompra > 500000))
    {
        descuento = (totalCompra * 15) / 100;
    }
    if ((cantidadDePasajes > 3) && (totalCompra > 250000))
    {
        descuento = (totalCompra * 11) / 100;
    }

    totalFinal = totalCompra - descuento;

    console.log(`Importe: ${totalCompra}`);
    console.log(`Descuento: ${descuento}`);
    console.log(`Monto a pagar: ${totalFinal}`);
}