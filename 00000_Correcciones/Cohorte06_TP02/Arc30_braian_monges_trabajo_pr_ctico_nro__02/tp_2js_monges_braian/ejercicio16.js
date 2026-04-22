{
    let tipoDeVehiculo = 0;
    let dineroDisponible = 0;
    let dineroAPagar = 0;
    let precioDeVehiculo = 0;

    tipoDeVehiculo = Number(prompt(`1 - Amarok v6, 2 - TAOS, 3 - Polo Nuevo.`));

    switch(tipoDeVehiculo)
    {
        case 1:
            precioDeVehiculo = 65000000;
            console.log(`usted eligio amarok`);
            break;
        case 2:
            precioDeVehiculo = 53000000;
            console.log(`usted eligio TAOS`);
            break;
        case 3:
            precioDeVehiculo = 47000000;
            console.log(`usted eligio polo nuevo`);
            break;
        default:
            console.log(`eliga una opcion correcta`);
            break;
    }

    dineroDisponible = Number(prompt(`ingrese el dinero disponible`));

    let dineroMinimo = (precioDeVehiculo * 30) / 100;

    if(dineroDisponible > dineroMinimo && dineroDisponible < precioDeVehiculo)
    {
        console.log(`dinero minimo aprobado`);

        dineroAPagar = precioDeVehiculo - dineroDisponible;

        let financiacion = Number(prompt(`eliga la financiazion deseada:
        1- 12 cuotas,
        2- 24 cuotas,
        3- 36 cuotas`));

        let interes = 0;
        let cuotas = 0;
        let totalFinal = 0;
        let valorCuota = 0;

        switch(financiacion)
        {
            case 1:
                interes = (dineroAPagar * 9.9) / 100;
                cuotas = 12;
                console.log(`usted eligio 12 cuotas`);
                break;
            case 2:
                interes = (dineroAPagar * 22) / 100;
                cuotas = 24;
                console.log(`usted eligio 24 cuotas`);
                break;
            case 3:
                interes = (dineroAPagar * 33) / 100;
                cuotas = 36;
                console.log(`usted eligio 36 cuotas`);
                break;
            default:
                console.log(`usted eligio una opcion incorrecta`);
                break;
        }

        totalFinal = dineroAPagar + interes;
        valorCuota = totalFinal / cuotas;

        console.log(`Dinero a financiar: ${dineroAPagar}`);
        console.log(`Interes aplicado: ${interes}`);
        console.log(`Total a pagar: ${totalFinal}`);
        console.log(`Valor de cada cuota: ${valorCuota}`);
    }
    else
    {
        console.log(`dinero minimo rechazado`);
    }
}