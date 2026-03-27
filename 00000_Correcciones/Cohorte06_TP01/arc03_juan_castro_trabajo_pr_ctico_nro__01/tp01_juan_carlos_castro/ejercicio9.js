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

    let cantidadDePasajes = 0;
    let importePasajes = 0;
    let descuento = 0;
    let totalDescuento = 0;
    let totalFinal = 0;

    cantidadDePasajes = Number(prompt(`Cantidad de pasajes:`));
    importePasajes = Number(prompt(`Importe de pasajes`));

    let totalCompra = cantidadDePasajes * importePasajes;

    if (cantidadDePasajes > 3 && totalCompra > 500000) {
        descuento = 15;
        totalFinal = totalCompra - (totalCompra * descuento) / 100;
        totalDescuento = totalCompra * descuento / 100;
    }
    else if (cantidadDePasajes > 3 && totalCompra > 250000) {
        descuento = 11;
        totalFinal = totalCompra - (totalCompra * descuento) / 100;
        totalDescuento = totalCompra * descuento / 100;
    }
    else {
        totalFinal = totalCompra;
    }

    console.log(`Cantidad de pasajes: `, cantidadDePasajes);
    console.log(`El total de la compra es: `, totalCompra);
    console.log(`El importe a pagar es de: $`, totalFinal);

}