{
    let precioCamion = 22000;
    let contadorCamion = 0
    let precioCamioneta = 12000;
    let contadorCamioneta = 0
    let precioAutomovil = 4000;
    let contadorAutomovil = 0
    let precioMoto = 1500;
    let contadorMoto = 0
    let entrada = 1;
    let totalGeneral = 0;

    while (entrada === 1){
            entrada = Number(prompt(`¿Quiere cargar un vehiculo? 1. Si | 2. No`));
            if (entrada === 1) {
                vehiculo = Number(prompt(`1. Camion | 2. Camioneta | 3. Auto | 4. Moto`));
                switch (vehiculo) {
                    case 1: // Camion
                        contadorCamion+=1
                        totalGeneral = totalGeneral + precioCamion;
                        break;
                    case 2:// Camioneta
                        contadorCamioneta+=1
                        totalGeneral = totalGeneral + precioCamioneta;
                        break;
                    case 3: // Automovil
                        contadorAutomovil+=1
                        totalGeneral = totalGeneral + precioAutomovil;
                        break;
                    case 4:// Moto
                        contadorMoto+=1
                        totalGeneral = totalGeneral + precioMoto;
                        break;
                    default:
                        break;
                }
            }else{
                console.log(`Turno finalizado`);
                break;
            }
            
    }

    console.log(`----- Camión -----`);
    console.log(`Cantidad: ${contadorCamion}`);
    console.log(`Total cobrado: $${contadorCamion * precioCamion}`);

    console.log(`----- Camionetas -----`);
    console.log(`Cantidad: ${contadorCamioneta}`);
    console.log(`Total cobrado: $${contadorCamioneta * precioCamioneta}`);

    console.log(`----- Automovil -----`);
    console.log(`Cantidad: ${contadorAutomovil}`);
    console.log(`Total cobrado: $${contadorAutomovil * precioAutomovil}`);

    console.log(`----- Moto -----`);
    console.log(`Cantidad: ${contadorMoto}`);
    console.log(`Total cobrado: $${contadorMoto * precioMoto}`);
    console.log(`----- FIN DE LA JORNADA -----`);
    console.log(`Total general: $${totalGeneral}`);

    if (contadorAutomovil != contadorCamioneta){
        if (contadorAutomovil > contadorCamioneta){
            console.log(`Pasaron mas Autos que camionetas`);
        }else{
            console.log(`Pasaron mas Camionetas que autos`);
        }
    }else{
    console.log(`Pasaron la misma cantidad de Autos y Camionetas`);
    }
}