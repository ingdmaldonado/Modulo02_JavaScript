// Programa para registrar vehículos estacionados durante el día y calcular el total cobrado
{
    // Definimos los precios de cada tipo de vehículo
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAutomovil = 4000;   // Cambiado de precioAuto a precioAutomovil
    const precioMoto = 1500;

    // Inicializamos contadores para cada tipo de vehículo
    let cantidadCamion = 0;
    let cantidadCamioneta = 0;
    let cantidadAutomovil = 0;      // Cambiado de cantidadAuto
    let cantidadMoto = 0;
    
    // Variable para almacenar el total cobrado en el día
    let totalGeneralCombrado = 0;    

    // Variable de control del bucle while
    let finDia = true;

    // Bucle que se ejecuta mientras no sea fin de día
    while (finDia) {
        // Solicitamos el tipo de vehículo al usuario
        let tipoVehiculo = prompt(" Tipo de vehículo (1-> camion, 2-> camioneta, 3-> automóvil, 4-> moto , 5-> fin Dia) :  ");
        // Según el tipo de vehículo, incrementamos el contador correspondiente
        switch (tipoVehiculo) {
            case "1":
                cantidadCamion++;
                break;
            case "2":
                cantidadCamioneta++;
                break;
            case "3":
                cantidadAutomovil++;
                break;
            case "4":
                cantidadMoto++;
                break;
            case "5":
                finDia = false;
                // Calculamos el total cobrado en el día sumando todos los ingresos
                totalGeneralCombrado = (cantidadCamion * precioCamion) + (cantidadCamioneta * precioCamioneta) + (cantidadAutomovil * precioAutomovil) + (cantidadMoto * precioMoto);
                break;
            default:
                alert("Opción no válida.");
        }
    }   

    // Información de automóviles
    console.log(`Cantidad de AUTOMÓVILES: ${cantidadAutomovil}`);
    console.log(`Total Cobrado de AUTOMÓVILES: ${cantidadAutomovil * precioAutomovil}`);
    
    // Información de camiones (no pedido pero lo muestro igual)
    console.log(`Cantidad de Camiones: ${cantidadCamion}`);
    console.log(`Total Cobrado de Camiones: ${cantidadCamion * precioCamion}`);
    
    // Información de camionetas
    console.log(`Cantidad de Camionetas: ${cantidadCamioneta}`);
    console.log(`Total Cobrado de Camionetas: ${cantidadCamioneta * precioCamioneta}`);
    
    // Información de motos
    console.log(`Cantidad de Motos: ${cantidadMoto}`);
    console.log(`Total Cobrado de Motos: ${cantidadMoto * precioMoto}`);
    
    // Total general del día
    console.log(`Total General Cobrado: ${totalGeneralCombrado}`);
    
    // Comparación entre camionetas y autos
    if (cantidadCamioneta > cantidadAutomovil){
        console.log(`Pasaron más Camionetas que Automóviles`);
    }
    else if (cantidadCamioneta < cantidadAutomovil){
        console.log(`Pasaron más Automóviles que Camionetas`);
    }
    else{
        console.log(`Pasaron la misma cantidad de Camionetas y Automóviles`);
    }
}