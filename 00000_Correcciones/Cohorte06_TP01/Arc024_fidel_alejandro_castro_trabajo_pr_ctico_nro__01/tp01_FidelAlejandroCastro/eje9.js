{
    let cantPasajes = Number(prompt("Cantidad de pasajes: "));
    let importePasaje = Number(prompt("Importe del pasaje: "));
    let totalCompra = cantPasajes * importePasaje;

    let cantDescuento = 0;
    let descuento = 0;
    let totalGeneral = totalCompra;
    let hayDescuento = false;

    if (cantPasajes > 3 && totalCompra > 500000) {
        cantDescuento = 15/100;
        descuento = cantDescuento * totalCompra;
        totalGeneral = totalCompra - descuento;
        hayDescuento = true;
    } else if (cantPasajes > 3 && totalCompra > 250000) {
        cantDescuento = 11/100;
        descuento = cantDescuento * totalCompra;
        totalGeneral = totalCompra - descuento;
        hayDescuento = true;
    }

    console.log(`Cantidad de pasajes: ${cantPasajes}`);
    console.log(`Importe por pasaje: $${importePasaje} c/u`);

    if (!hayDescuento) {
        console.log(`Total compra: $${totalGeneral}`);
    } else {
        console.log(`Total compra: $${totalGeneral} aplicando un ${cantDescuento * 100}% de descuento`);
    }
}