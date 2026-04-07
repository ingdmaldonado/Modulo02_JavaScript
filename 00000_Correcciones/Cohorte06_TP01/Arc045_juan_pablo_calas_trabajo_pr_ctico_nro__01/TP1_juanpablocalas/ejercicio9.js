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

    let MontoPasaje = 0;
    let CantidadDePasajes = 0;
    let MontoTotalaAbonar = 0; 

    let PorcentajePromocion1 = 11;
    let PorcentajePromocion2 = 15;

    MontoPasaje = Number(prompt(`Ingrese el Monto del Pasaje`));
    CantidadDePasajes = Number(prompt(`Ingrese la Cantidad de Pasajes`));
    
    MontoTotalaAbonar = MontoPasaje * CantidadDePasajes;
    if(MontoTotalaAbonar > 0 )
    {
/*        MontoTotalaAbonar = MontoPasaje * CantidadDePasajes*/
        if((CantidadDePasajes > 3) && (MontoTotalaAbonar > 250000) && (MontoTotalaAbonar <= 500000))
        {
            console.log(`Se cumple regla de Descuento del 11%`);
            MontoTotalaAbonar = MontoTotalaAbonar - ((MontoTotalaAbonar * PorcentajePromocion1)/100);
        }
        else
        {
            if((CantidadDePasajes > 3) && (MontoTotalaAbonar > 500000))
            {
                console.log(`Se cumple regla de Descuento del 15%`);
                MontoTotalaAbonar = MontoTotalaAbonar - (MontoTotalaAbonar * PorcentajePromocion2)/100;
            }
            else
            {
                console.log(`No se cumple alguna de las Reglas de Promocion - NO HAY DESCUENTO`);
            }
        }
    }
    else
    {
        MontoTotalaAbonar = MontoPasaje * CantidadDePasajes;
        console.log(`La CANTIDAD ni el MONTO  de Pasajes pueden ser < a 1 - Ingrese NUEVAMENTE los datos`);
    }

    console.log(`La cantidad de Pasejes ingresados es ${CantidadDePasajes} // El Monto de cada Pasaje es ${MontoPasaje} // El total a PAGAR es ${MontoTotalaAbonar} `);
}