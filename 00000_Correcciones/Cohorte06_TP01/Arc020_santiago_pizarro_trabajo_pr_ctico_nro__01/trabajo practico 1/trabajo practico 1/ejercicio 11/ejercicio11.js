{
    const zona_Centro = 2500.00;
    const zona_Oeste = 3750.00;
    const zona_Norte = 4220.00;
    const zona_Sur = 5222.50;
    const zona_Este = 4288.50;

    let importeDeCompra = Number(prompt("Ingrese el importe de la compra:"));

    let eleccionDeZona = Number(prompt("A continuación, seleccione la zona donde se enviará: 1 - Zona Centro, 2 - Zona Oeste, 3 - Zona Norte, 4 - Zona Sur, 5 - Zona Este"));

    let costoDeEnvio;

    let zonaSeleccionada;

    switch(eleccionDeZona){
        case 1: 
        costoDeEnvio = zona_Centro
        zonaSeleccionada = "Centro";
        break;

        case 2:
        costoDeEnvio = zona_Oeste;
        zonaSeleccionada = "Zona Oeste"
        break;

        case 3:
        costoDeEnvio = zona_Norte;
        zonaSeleccionada = "Zona Norte";
        break;

        case 4:
        costoDeEnvio = zona_Sur;
        zonaSeleccionada = "Zona Sur";
        break;

        case 5:
        costoDeEnvio = zona_Este;
        zonaSeleccionada = "Zona Este";
        break;

        default:
        console.log("No se ha seleccionado una zona en contreto");
        costoDeEnvio= 0;
        zonaSeleccionada = "El cliente pasa a buscar el pedido";
    }

    let importeFinal = importeDeCompra + costoDeEnvio;

    console.log(`Zona seleccionada: ${zonaSeleccionada}`);
    console.log(`Importe de la compra: $${importeDeCompra.toFixed(2)}`);
    console.log(`Costo de envío: $${costoDeEnvio.toFixed(2)}`);
    console.log(`Total a pagar: $${importeFinal.toFixed(2)}`);
}