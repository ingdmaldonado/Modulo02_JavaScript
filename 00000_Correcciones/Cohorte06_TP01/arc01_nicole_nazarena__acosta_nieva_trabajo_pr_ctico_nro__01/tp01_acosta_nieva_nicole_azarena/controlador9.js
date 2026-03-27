/*Ejercicio Nro. 09: Estructuras Condicionales (if/else)
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
 total compra = cantidad de pasajes * importe pasaje*/

{
    let cantidadPasajes = Number(prompt(`ingrese la cantidad ede pasajes`));

    let importePasajes = Number(prompt(`ingrese el importe de loa pasajes`));

    let descuento = 0;

    let totalDescuento = 0;

    let totalPagar = 0;
    
    let totalCompra = cantidadPasajes * importePasajes;

    if (cantidadPasajes > 3 && totalCompra > 500000) {
        descuento = 15;
        totalPagar = totalCompra - (totalCompra * descuento) / 100;
        totalDescuento = (totalCompra * descuento) / 100;
    }
    else if (cantidadPasajes > 3 && totalCompra > 250000) {
        descuento = 11;
        totalPagar = totalCompra - ((totalCompra * descuento) / 100);
        totalDescuento = (totalCompra * descuento) / 100;
    }
    else {
        totalPagar = totalCompra;
    }

    console.log(`el total de la compra es ${totalCompra}`);
    console.log(`el descuento es ${totalDescuento}`);
    console.log(`el total a pagar es ${totalPagar}`);
}