{
    let cantidadPasajes = Number(prompt("Ingrese cantidad de pasajes:"));
    let importePasaje = Number(prompt("Ingrese importe por pasaje:"));

    let totalCompra = cantidadPasajes * importePasaje;
    let descuento = 0;
    let totalConDescuento = totalCompra;

    if (cantidadPasajes > 3) {
        if (totalCompra > 500000) {
            descuento = 15;
        } else if (totalCompra > 250000) {
            descuento = 11;
        }
    }

    if (descuento > 0) {
        let montoDescuento = (totalCompra * descuento) / 100;
        totalConDescuento = totalCompra - montoDescuento;
        console.log(`Se aplicó un descuento del ${descuento}%. Monto descontado: $${montoDescuento.toFixed(2)}`);
    } else {
        console.log("No se aplicó descuento.");
    }

    console.log(`Cantidad de pasajes: ${cantidadPasajes}`);
    console.log(`Importe por pasaje: $${importePasaje.toFixed(2)}`);
    console.log(`Total compra original: $${totalCompra.toFixed(2)}`);
    console.log(`Total a pagar con descuento: $${totalConDescuento.toFixed(2)}`);
}