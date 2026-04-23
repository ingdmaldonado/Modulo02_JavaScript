{
    let deseaContinuar = `SI`

    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAuto = 4000;
    const precioMoto = 1500;

    let contadorCamiones = 0;
    let acumuladorCamiones = 0;

    let contadorCamioneta = 0;
    let acumuladorCamioneta = 0;

    let contadorAuto = 0;
    let acumuladorAuto = 0;

    let contadorMotos = 0;
    let acumuladorMotos = 0;

    let totalCobrado = 0;
    let tipoVehiculo = 0;

    while(deseaContinuar === `SI` || deseaContinuar === `si`)
    {
        tipoVehiculo = Number(prompt(` Ingrese el numero correspondiente dependiendo que tipo de vehiculo atenderá
            1 - Camion
            2 - Camioneta
            3 - Auto
            4 - Moto`))

        switch(tipoVehiculo)
            {
                case 1: // camiones
                {
                    contadorCamiones = contadorCamiones + 1;
                    acumuladorCamiones = acumuladorCamiones + precioCamion;
                    break;
                }
                case 2: // camionetas
                {
                    contadorCamioneta = contadorCamioneta + 1;
                    acumuladorCamioneta = acumuladorCamioneta + precioCamioneta;
                    break;
                }
                case 3: // autos
                {
                    contadorAuto = contadorAuto + 1;
                    acumuladorAuto = acumuladorAuto + precioAuto
                    break;
                }
                case 4: // motos
                {
                    contadorMotos = contadorMotos + 1;
                    acumuladorMotos = acumuladorMotos + precioMoto
                    break;
                }
                default:
                {
                    console.log(`Error, ingrese un numero correcto`)
                    break;
                }
            }
        
        deseaContinuar = prompt(`Si para continuar. NO para terminar`)
    }

    totalCobrado = acumuladorCamiones + acumuladorCamioneta + acumuladorAuto + acumuladorMotos

    if(contadorAuto > contadorCamioneta)
    {
        console.log(`Pasaron mas autos que camionetas`)
    }
    else if(contadorCamioneta > contadorAuto)
    {
        console.log(`Pasaron mas camionetas que autos`)
    }
    else
    {
        console.log(`Pasaron la misma cantidad`)
    }
    
    console.log(`Pasaron un total de ${contadorCamiones} camiones`)
    console.log(`Total cobrado camiones ${acumuladorCamiones}`)
    
    console.log(`Pasaron un total de ${contadorCamioneta} camionetas`)
    console.log(`Total cobrado camionetas ${acumuladorCamioneta}`)

    console.log(`Pasaron un total de ${contadorAuto} autos`)
    console.log(`Total cobrado autos ${acumuladorAuto}`)

    console.log(`Pasaron un total de ${contadorMotos} motos`)
    console.log(`Total cobrado motos ${acumuladorMotos}`)
    
    console.log(`Total general cobrado ${totalCobrado}`)
    
}