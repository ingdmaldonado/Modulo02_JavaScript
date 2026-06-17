/* 

EJERCICIO NRO. 05:
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.

 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra.

 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje
*/

/* 
    cantidad de pasajes
    importe del pasaje (individual)

    Catamarca Bs. = 120.000 pesos

    3 pasajes

    3 pasajes * 120.000,00 = 360.000 => no habría descuento

    4 pasajes * 120.000,00 = 480.000 => aqui tengo que aplicar un descuento del 11%

    --------------------------------------------

    6 pasajes * 120.000,00 = 720.000 => 15%

    total compra = cantidad de pasajes * importe del pasaje.
*/

{
    let cantidadPasajes = 0;
    let precioPasaje = 0;
    let totalCompra = 0;

    /* (1ro) Pedimos la Cantidad de Pasajes */
    cantidadPasajes = Number(prompt(`Ing. la Cantidad de Pasajes`));

    /* (2do) Pedimos el Precio del pasaje */
    precioPasaje = Number(prompt(`Ing. Precio del Pasaje`));

    /* (3ro) Calculamos el total de la compra */
    totalCompra = cantidadPasajes * precioPasaje;

    /* (4to) - Version con if/else */
    let descuento = 0;

    // caso 1 => cantidad > 3 y total > 250.000 => 11%

    // caso 2 => cantidad > 3 y total > 500.000 => 15%

    /* 
        alguien que compro 4 pasajes x 200.000,00 => 800.000,00
    */

    /* 
        cantidad > 3 y total compra > 250.000 y compra <= 500.000 => 11%
    
    */

    if((cantidadPasajes > 3) && (totalCompra > 250000) && (totalCompra <= 500000))
    { // caso 1
        console.log(`caso de descuento 1`);
        descuento = (totalCompra * 11)/100;
    }
    else
    {
        if((cantidadPasajes > 3) && (totalCompra > 500000))
        { // caso 2
            console.log(`caso de descuento 2`);
            descuento = (totalCompra * 15)/100;
        }
        else
        { // todos los otros casos donde no hay descuentos
            console.log(`sin ningún descuento`);
            descuento = 0;
        }
    }

    let totalAPagar = 0;
    totalAPagar = totalCompra - descuento;

    console.log(`Cant. Boletos: ${cantidadPasajes} Precio: ${precioPasaje} Total Sin Descuento: ${totalCompra} Descuento: ${descuento}`);
    console.log(`Total a Pagar: ${totalAPagar}`);

   // console.log(cantidadPasajes,precioPasaje,totalCompra,descuento);

}