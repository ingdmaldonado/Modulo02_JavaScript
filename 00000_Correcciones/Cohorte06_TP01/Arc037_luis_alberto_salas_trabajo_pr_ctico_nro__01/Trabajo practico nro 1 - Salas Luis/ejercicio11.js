{
    let importeCompra = 0;
    let domicilioCliente = 0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`))
    domicilioCliente = Number(prompt(`Ingrese de que zona es el domicilio del cliente
        1 - Zona Centro
        2 - Zona Oeste
        3 - Zona Norte
        4 - Zona Sur
        5 - Zona Este`))
    let zonaCentro = 2500
    let zonaOeste = 3750
    let zonaNorte = 4225
    let zonaSur = 5222.50
    let zonaEste = 4288.50

    let costoEnvioAplicado = 0;
    let totalAPagar = 0

    if(domicilioCliente === 1)
    {
        costoEnvioAplicado = zonaCentro
        totalAPagar = importeCompra + costoEnvioAplicado
    }
    else if(domicilioCliente === 2)
    {
        costoEnvioAplicado = zonaOeste
        totalAPagar = importeCompra + costoEnvioAplicado
    }
    else if(domicilioCliente === 3)
    {
        costoEnvioAplicado = zonaNorte
        totalAPagar = importeCompra + costoEnvioAplicado
    }
    else if(domicilioCliente === 4)
    {
        costoEnvioAplicado = zonaSur
        totalAPagar = importeCompra + costoEnvioAplicado
    }
    else if(domicilioCliente === 5)
    {
        costoEnvioAplicado = zonaEste
        totalAPagar = importeCompra + costoEnvioAplicado
    }
    else
    {
        console.log(`Zona invalida, por favor intente otra vez`)
    }
   

    console.log(`Importe de la compra: $${importeCompra} envio: $${costoEnvioAplicado} total a pagar: $${totalAPagar}`)


    
}