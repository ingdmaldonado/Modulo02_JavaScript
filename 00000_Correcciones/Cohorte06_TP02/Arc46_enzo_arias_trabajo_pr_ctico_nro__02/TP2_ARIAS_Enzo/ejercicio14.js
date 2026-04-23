{

    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAutomovil = 4000;
    let precioMoto = 1500;
    
    let cantidadCamiones = 0;
    let recaudacionTotalCamiones = 0;
    
    let cantidadCamionetas = 0;
    let recaudacionTotalCamionetas = 0;
    
    let cantidadAutomoviles = 0;
    let recaudacionTotalAutomoviles = 0;
    
    let cantidadMotos = 0;
    let recaudacionTotalMotos = 0;
    
    let jornadaLaboralAbierta = true;
    
    while (jornadaLaboralAbierta) {
        let tipoDeVehiculoIngresado = prompt("Ingrese el tipo de vehículo (camion, camioneta, automovil, moto) o escriba 'cerrar' para finalizar la jornada:");
        tipoDeVehiculoIngresado = tipoDeVehiculoIngresado.toLowerCase();
    
        if (tipoDeVehiculoIngresado === "camion") {
            cantidadCamiones++;
            recaudacionTotalCamiones += precioCamion;
            console.log(`Cobrar al camión: $${precioCamion}`);
        } else if (tipoDeVehiculoIngresado === "camioneta") {
            cantidadCamionetas++;
            recaudacionTotalCamionetas += precioCamioneta;
            console.log(`Cobrar a la camioneta: $${precioCamioneta}`);
        } else if (tipoDeVehiculoIngresado === "automovil" || tipoDeVehiculoIngresado === "auto") {
            cantidadAutomoviles++;
            recaudacionTotalAutomoviles += precioAutomovil;
            console.log(`Cobrar al automóvil: $${precioAutomovil}`);
        } else if (tipoDeVehiculoIngresado === "moto") {
            cantidadMotos++;
            recaudacionTotalMotos += precioMoto;
            console.log(`Cobrar a la moto: $${precioMoto}`);
        } else if (tipoDeVehiculoIngresado === "cerrar") {
            jornadaLaboralAbierta = false;
        } else {
            console.log("Vehículo no reconocido en el sistema. Intente nuevamente.");
        }
    }
    
    let resultadoComparacionVehiculos = "";
    if (cantidadCamionetas > cantidadAutomoviles) {
        resultadoComparacionVehiculos = "Pasaron más camionetas que automóviles.";
    } else if (cantidadAutomoviles > cantidadCamionetas) {
        resultadoComparacionVehiculos = "Pasaron más automóviles que camionetas.";
    } else {
        resultadoComparacionVehiculos = "Pasaron exactamente la misma cantidad de automóviles y camionetas.";
    }
    
    let recaudacionTotalGeneral = recaudacionTotalCamiones + recaudacionTotalCamionetas + recaudacionTotalAutomoviles + recaudacionTotalMotos;
    
    console.log(`
    --- REPORTE FINAL DE CIERRE DE CAJA ---
    Cantidad de Automóviles: ${cantidadAutomoviles} | Total cobrado: $${recaudacionTotalAutomoviles}
    Cantidad de Camionetas: ${cantidadCamionetas} | Total cobrado: $${recaudacionTotalCamionetas}
    Cantidad de Motos: ${cantidadMotos} | Total cobrado: $${recaudacionTotalMotos}
    Cantidad de Camiones: ${cantidadCamiones} | Total cobrado: $${recaudacionTotalCamiones}
    
    TOTAL GENERAL COBRADO: $${recaudacionTotalGeneral}
    
    Análisis de flujo: ${resultadoComparacionVehiculos}
    `);
    
    }