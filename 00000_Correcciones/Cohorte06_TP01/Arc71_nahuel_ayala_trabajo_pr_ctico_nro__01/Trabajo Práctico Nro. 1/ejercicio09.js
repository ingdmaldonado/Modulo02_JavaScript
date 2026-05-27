/*
    Ejercicio Nro. 09: Estructuras Condicionales (if/else)
    Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.
     Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra.
     Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra.

    El Sistema debe registrar mínimamente estas variables:
     cantidad de pasajes
     importe pasaje
     total compra = cantidad de pasajes * importe pasaje
*/

{
    let cantidadDePasajes = 0;
    cantidadDePasajes = Number(prompt(`Cuántos pasajes desea comprar?`));

    let precioDePasaje = 0;
    precioDePasaje = Number(prompt(`Ingrese el precio individual del pasaje`));

    let totalCompra = cantidadDePasajes * precioDePasaje;

    let descuento = 0;

    if((cantidadDePasajes > 3) && (totalCompra > 250000 && totalCompra <= 500000)){
        descuento = (totalCompra * 11)/100;
    }
    else{
        if(cantidadDePasajes > 3 && totalCompra > 500000){
            descuento = (totalCompra * 15)/100;
        }
        else{
            descuento = 0;
        }
    }

    let totalAPagar = totalCompra - descuento;

    console.log(`Cantidad de Pasajes: ${cantidadDePasajes} | Precio Individual de Pasaje: $${precioDePasaje} | Importe de Compra: $${totalCompra} | Descuento: $${descuento} | Total a Pagar: $${totalAPagar}`);
}