{
    // inicializacion

    let cantidadDePasajes = 0;
    let importeDePasajes = 0;
    let descuento = 0;
    let totalCompra = 0;

    cantidadDePasajes = Number(prompt(`ingrese cantidad de pasajes`));
    importeDePasajes = Number(prompt(`ingrese importe de pasajes`));

    totalCompra = cantidadDePasajes * importeDePasajes;

    if(cantidadDePasajes > 3 && totalCompra > 500000)
    {
        descuento = (totalCompra * 15)/100;
        console.log(`se aplico un descuento del 15%`);
        totalCompra = totalCompra - descuento;
    }
    else if (cantidadDePasajes > 3 && totalCompra > 250000)
    {
        descuento = (totalCompra * 11)/100;
        console.log(`se aplico un descuento del 11%`);
        totalCompra = totalCompra - descuento;
    }

    console.log(`totalCompra: ${totalCompra}`);
}




