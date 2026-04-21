{
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAuto = 4000;
    const precioMoto = 1500;

    let cantidadCamion = 0;
    let cantidadCamioneta = 0;
    let cantidadAuto = 0;
    let cantidadMoto = 0;
    let totalGeneralCombrado = 0;    

    let finDia = true;

    while (finDia) {
        let tipoVehiculo = prompt("Tipo de vehículo (1->camion, 2->camioneta, 3->auto, 4->moto , 5->fin Dia):");
        switch (tipoVehiculo) {
            case "1":
                cantidadCamion++;
                break;
            case "2":
                cantidadCamioneta++;
                break;
            case "3":
                cantidadAuto++;
                break;
            case "4":
                cantidadMoto++;
                break;
            case "5":
                finDia = false;
                totalGeneralCombrado = (cantidadCamion * precioCamion) + (cantidadCamioneta * precioCamioneta) + (cantidadAuto * precioAuto) + (cantidadMoto * precioMoto);
                break;
            default:
                alert("Opción no válida.");
        }
    }   

    // Mostrar los resultados
    console.log(`Cantidad de Autos: ${cantidadAuto}`);
    console.log(`Total Cobrado de Autos: ${cantidadAuto * precioAuto}`);
    console.log(`Cantidad de Camiones: ${cantidadCamion}`);
    console.log(`Total Cobrado de Camiones: ${cantidadCamion * precioCamion}`);
    console.log(`Cantidad de Camionetas: ${cantidadCamioneta}`);
    console.log(`Total Cobrado de Camionetas: ${cantidadCamioneta * precioCamioneta}`);
    console.log(`Cantidad de Motos: ${cantidadMoto}`);
    console.log(`Total Cobrado de Motos: ${cantidadMoto * precioMoto}`);
    console.log(`Total General Cobrado: ${totalGeneralCombrado}`);
    if (cantidadCamioneta > cantidadAuto){
        console.log(`Pasaron más Camionetas que Autos`);
        }
    else if (cantidadCamioneta < cantidadAuto){
        console.log(`Pasaron más Autos que Camionetas`);
    }
    else{
        console.log(`Pasaron la misma cantidad de Camionetas y Autos`);
    }

}