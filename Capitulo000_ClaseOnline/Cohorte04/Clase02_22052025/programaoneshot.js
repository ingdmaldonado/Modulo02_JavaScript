
/* 
    1) entrada => totalDeCompra

    2) proceso => analizar

        calcular el 50% de descuento

        fijarme si el descuento es mayor a 80.000

        si el descuento es mayor o igual a 80.000 => aplico el tope
        si es descuento es menor => tomo el descuento 

        tope de descuento => 80.000

        1) no hay limite en el importe de la compra
        2) hay descuento del 50% pero con tope de 80.000

        totalAPagar = importeCompra - descuentoDefinitivo;

 
*/

{
    console.log(`Programa One Shot`);

    // aqui me declaro la variable de la compra //
    let importeTotalDeCompra = 0; // declaro e inicializo en cero.
    
    // aqui le pido al usuario que ingrese el importe de la compra y lo convierto a numeros
    importeTotalDeCompra = Number(prompt(`Sr. Ingrese el valor de la compra `));
    
    // aqui calculo el descuento
    let descuento = (importeTotalDeCompra * 50)/100;
    
    /* voy a declarar una variable donde deje 
    el descuento definitivo a descontar */

    let descuentoDefinitivo = 0; // declaro e inicializo en cero

    if(descuento >= 80000)
    { //1 => ingresa cuando la condición se cumple => lado verdadero

        console.log(`tu descuento llego al tope maximo de descuento`);

        descuentoDefinitivo = 80000; // este es el TOPE MAXIMO DE DESCUENTO

    }
    else
    {//2 => ingresa cuando no se cumple => lado falso

        console.log(`tu descuento no llego al tope`);

        descuentoDefinitivo = descuento; // aplico el 50% del importe
    }

    let importeNetoAPagar = 0; // declaro e inicializo

    importeNetoAPagar = importeTotalDeCompra - descuentoDefinitivo;

    console.log(`el total de la compra es ${importeTotalDeCompra} y el descuento ${descuento} y descuento definitivo ${descuentoDefinitivo} total a pagar ${importeNetoAPagar}`);

}

/*
    el total a pagar 

    1)   importe total de la compra - descuento

    2)    importe total de la compra - descuento definitivo

*/

/* LOGICA DE PROGRAMACION */

/* 1 HORA X DIA */

