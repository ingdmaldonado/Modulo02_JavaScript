{ 
    let cantidadPasajes = 0;
    let precioPasaje = 0;
    let totalCompra = 0;

    cantidadPasajes = Number(prompt(`Ing. la Cantidad de Pasajes`));
    precioPasaje = Number(prompt(`Ing. Precio del Pasaje`));
    
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
