/*Ejercicio Nro. 09: Estructuras Condicionales (if/else)
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje */

{


    {
    let cantidadPasajes = 0;
    let precioPasaje = 0;
    let totalCompra = 0;

    
    cantidadPasajes = Number(prompt(`Por favor, ingrese  la Cantidad de Pasajes`));

   
    precioPasaje = Number(prompt(`Por favor, ingrese Precio del Pasaje`));

   
    totalCompra = cantidadPasajes * precioPasaje;

    
    let descuento = 0;



    if((cantidadPasajes > 3) && (totalCompra > 250000) && (totalCompra <= 500000))
    { 
        console.log(`caso de descuento 1`);
        descuento = (totalCompra * 11)/100;
    }
    else
    {
        if((cantidadPasajes > 3) && (totalCompra > 500000))
        { 
            console.log(`caso de descuento 2`);
            descuento = (totalCompra * 15)/100;
        }
        else
        { 
            console.log(`sin ningún descuento`);
            descuento = 0;
        }
    }

    let totalAPagar = 0;
    totalAPagar = totalCompra - descuento;

    console.log(`Cant. Boletos: ${cantidadPasajes} Precio: ${precioPasaje} Total Sin Descuento: ${totalCompra} Descuento: ${descuento}`);
    console.log(`Total a Pagar: ${totalAPagar}`);

  

}

    
}