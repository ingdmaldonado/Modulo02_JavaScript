{
    let cantidadAutos = 0;
    let cantidadCobradoAutos = 0;
    let cantidadDeCamion = 0;
    let cantidadCobradoCamion = 0;
    let cantidadCamionetas = 0;
    let cantidadCamionetasCobrado = 0;
    let cantidadMotos = 0;
    let cantidadMotosCobrados = 0;
    let generalCobrado = 0;
    let tipoDeVehiculo = 0;
    let sigueAtendiendo = "S";

    while (sigueAtendiendo === "S" || sigueAtendiendo === "s") {

        tipoDeVehiculo = Number(prompt(`Ingrese tipo de vehículo:
        1 - Camión
        2 - Camioneta
        3 - Automóvil
        4 - Moto`));

        switch (tipoDeVehiculo) {
            case 1:
                cantidadCobradoCamion += 22000;
                cantidadDeCamion++;
                generalCobrado += 22000;
                console.log(`Usted eligió camión`);
                break;

            case 2:
                cantidadCamionetasCobrado += 12000;
                cantidadCamionetas++;
                generalCobrado += 12000;
                console.log(`Usted eligió camioneta`);
                break;

            case 3:
                cantidadCobradoAutos += 4000;
                cantidadAutos++;
                generalCobrado += 4000;
                console.log(`Usted eligió automóvil`);
                break;

            case 4:
                cantidadMotosCobrados += 1500;
                cantidadMotos++;
                generalCobrado += 1500;
                console.log(`Usted eligió moto`);
                break;

            default:
                console.log(`Elija una opción correcta`);
                break;
        }

        sigueAtendiendo = prompt(`¿Desea continuar? (S/N)`);
    }

    console.log(`Cantidad de camiones: ${cantidadDeCamion}`);
    console.log(`Total cobrado camiones: $${cantidadCobradoCamion}`);

    console.log(`Cantidad de camionetas: ${cantidadCamionetas}`);
    console.log(`Total cobrado camionetas: $${cantidadCamionetasCobrado}`);

    console.log(`Cantidad de automóviles: ${cantidadAutos}`);
    console.log(`Total cobrado automóviles: $${cantidadCobradoAutos}`);

    console.log(`Cantidad de motos: ${cantidadMotos}`);
    console.log(`Total cobrado motos: $${cantidadMotosCobrados}`);

    console.log(`Total general cobrado: $${generalCobrado}`);

    // Comparación final
    if (cantidadAutos > cantidadCamionetas) {
        console.log(`Pasaron más automóviles que camionetas`);
    } else if (cantidadCamionetas > cantidadAutos) {
        console.log(`Pasaron más camionetas que automóviles`);
    } else {
        console.log(`Pasaron la misma cantidad de automóviles y camionetas`);
    }
}