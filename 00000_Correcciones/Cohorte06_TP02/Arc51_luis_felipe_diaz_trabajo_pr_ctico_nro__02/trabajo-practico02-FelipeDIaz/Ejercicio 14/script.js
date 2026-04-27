{
    // Definición de constantes de precio
    const PRECIO_CAMION = 22000;
    const PRECIO_CAMIONETA = 12000;
    const PRECIO_AUTOMOVIL = 4000;
    const PRECIO_MOTOS = 1500;

    // Inicialización de contadores y acumuladores 
    let cantAutos = 0, totalAutos = 0;
    let cantCamionetas = 0, totalCamionetas = 0;
    let cantCamiones = 0, totalCamiones = 0;
    let cantMotos = 0, totalMotos = 0;
    let totalGeneral = 0;

    let continuar = true;

    while (continuar) {
        // Menú de selección 
        let opcion = prompt(
            "Seleccione el tipo de vehículo:\n" +
            "1 - CAMION ($22.000)\n" +
            "2 - CAMIONETA ($12.000)\n" +
            "3 - AUTOMOVIL ($4.000)\n" +
            "4 - MOTOS ($1.500)\n" +
            "0 - Finalizar jornada"
        );

        switch (opcion) {
            case "1":
                cantCamiones++;
                totalCamiones += PRECIO_CAMION;
                totalGeneral += PRECIO_CAMION;
                alert("Barrera levantada para CAMION");
                break;
            case "2":
                cantCamionetas++;
                totalCamionetas += PRECIO_CAMIONETA;
                totalGeneral += PRECIO_CAMIONETA;
                alert("Barrera levantada para CAMIONETA");
                break;
            case "3":
                cantAutos++;
                totalAutos += PRECIO_AUTOMOVIL;
                totalGeneral += PRECIO_AUTOMOVIL;
                alert("Barrera levantada para AUTOMOVIL");
                break;
            case "4":
                cantMotos++;
                totalMotos += PRECIO_MOTOS;
                totalGeneral += PRECIO_MOTOS;
                alert("Barrera levantada para MOTO");
                break;
            case "0":
                continuar = false;
                break;
            default:
                alert("Opción no válida");
        }
    }

    // Informe final 
    console.log("--- CIERRE DE JORNADA ---");
    console.log("Cantidad de AUTOS: " + cantAutos); 
    console.log("Total Cobrado de AUTOS: $" + totalAutos); 
    console.log("Cantidad de CAMIONETAS: " + cantCamionetas);
    console.log("Total de CAMIONETAS: $" + totalCamionetas); 
    console.log("Cantidad de CAMIONES: " + cantCamiones); 
    console.log("Total de CAMIONES: $" + totalCamiones); 
    console.log("Cantidad de MOTOS: " + cantMotos); 
    console.log("Total de MOTOS: $" + totalMotos); 
    console.log("Total GENERAL cobrado: $" + totalGeneral); 

    // Comparación entre autos y camionetas 
    if (cantCamionetas > cantAutos) {
        console.log("Pasaron más camionetas que autos.");
    } else if (cantAutos > cantCamionetas) {
        console.log("Pasaron más autos que camionetas.");
    } else {
        console.log("Pasó la misma cantidad de autos y camionetas.");
    }
}