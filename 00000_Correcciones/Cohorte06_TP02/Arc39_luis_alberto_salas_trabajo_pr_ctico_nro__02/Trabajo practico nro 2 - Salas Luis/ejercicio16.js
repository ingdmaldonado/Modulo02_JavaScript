{
    let continua = `SI`
    let vehiculoElegido = ``
    
    const precioAmarokV6 = 65000000;
    const precioTaos = 53000000;
    const precioPolo = 47000000 ;

    let autoElegido = 0;
    let minimoPermitido = 0;
    let dineroAEntregar = 0;
    let valorVehiculo = 0;
    let diferencia = 0;
    let opcionCuotas = 0;
    let totalFinanciado = 0;
    let valorCuota = 0;
    let totalAPagar = 0;
    let cuotas = 0;

    autoElegido = Number(prompt(`Escoja su auto de preferencia:
        1 - Amarok v6
        2 - Taos
        3 - Polo`))

    switch(autoElegido)
    {
        case 1:
        {
            vehiculoElegido = `Amarok v6`
            valorVehiculo = precioAmarokV6
            break;
        }
        case 2:
        {
            vehiculoElegido = `TAOS`
            valorVehiculo = precioTaos
            break;
        }
        case 3:
        {
            vehiculoElegido = `POLO`
            valorVehiculo = precioPolo
            break;
        }
        default:
        {
            valorVehiculo = 0;
            break;
        }
    }

    minimoPermitido = (valorVehiculo * 30) / 100

    while(continua === `SI` || continua === `si`)
    {
        dineroAEntregar = Number(prompt(`Ingrese el dinero a entregar para la compra del vehiculo`))

        if((dineroAEntregar > minimoPermitido) && (dineroAEntregar < valorVehiculo))
        {
            console.log(`Monto válido`);
            continua = "NO";
        }
        else
        {
            console.log(`El monto debe ser mayor al 30% y menor al valor total`);
        } 
    }

    diferencia = valorVehiculo - dineroAEntregar

    opcionCuotas = Number(prompt(`Financiacion deseada:
        1: 12 cuotas - 9.9% anual
        2: 24 cuotas - 22% anual
        3: 36 cuotas - 33% anual`))

    switch(opcionCuotas)
    {
        case 1: // 12 cuotas 9.9% anual
        {
            totalFinanciado = (diferencia * 9.9) / 100
            totalAPagar = diferencia + totalFinanciado
            valorCuota = totalAPagar / 12
            cuotas = 12
            break;
        }
        case 2: // 24 cuotas  22% anual
        {
            totalFinanciado = (diferencia * 44) / 100
            totalAPagar = diferencia + totalFinanciado
            valorCuota = totalAPagar / 24
            cuotas = 24
            break;
        }
        case 3: // 36 cuotas → 33% anual
        {
            totalFinanciado = (diferencia * 99) / 100
            totalAPagar = diferencia + totalFinanciado
            valorCuota = totalAPagar / 36
            cuotas = 36
            break;
        }
        default:
        {
            console.log(`Tipo de financiacion no valida`)
            break;
        }

    }

    console.log(`Usted eligio: ${vehiculoElegido}`)
    console.log(`Usted dio una entrega de: ${dineroAEntregar}`)
    console.log(`Monto a financiar: ${diferencia}`)
    console.log(`Cantidad de cuotas: ${cuotas}`)
    console.log(`Total con interes: ${totalAPagar}`)
    console.log(`Valor de cada cuota: ${valorCuota}`)
}