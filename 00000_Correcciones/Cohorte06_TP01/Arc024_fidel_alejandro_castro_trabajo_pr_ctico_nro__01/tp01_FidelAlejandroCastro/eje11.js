{
    let importeCompra = Number(prompt("Ingrese importe de la compra: "));
    let idZona = Number(prompt("Ingrese la id de su zona: "));
    let costoEnvio = 0;
    let zona = "";
    console.log(zona)
    switch (idZona) {
        case 1:
            zona = "Centro";
            costoEnvio = 2500;
            break;
        case 2:
            zona = "Oeste";
            costoEnvio = 3750;
            break;
        case 3:
            zona = "Norte";
            costoEnvio = 4225;
            break;
        case 4:
            zona = "Sur";
            costoEnvio = 5222.50;
            break;
        case 5:
            zona = "Este";
            costoEnvio = 4288.50;
            break;
        default:
            console.log(`Zona invalida`);
            break;
    }
    if (zona != ""){
        let totalPedido = importeCompra+costoEnvio;
        console.log(`---- Envio a Zona ${zona} ($${costoEnvio}) ----`)
        console.log(`Importe de compra $${importeCompra}`)
        console.log(`Total a Abonar: $${totalPedido}`)
    }
    
}

