/* 

Ejercicio Nro. 14: 
 
Una  empresa  de  Peajes  del  SUR  S.A.  desea  realizar  una  aplicación  que  permita  cobrar  y  otorgar  los 
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita 
realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera. 
 
Los precios establecidos son los siguientes 
 
 CAMION = 22.000,00 PESOS 
 CAMIONETA = 12.000,00 PESOS 
 AUTOMOVIL = 4.000,00 PESOS 
 MOTOS = 1.500,00 PESOS 
 
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el 
cierre donde le deberá mostrar la siguiente información. 
 
 Cantidad de AUTOS  
 Total Cobrado de AUTOS 
 
 Cantidad de CAMIONETAS 
 Total de CAMIONETAS 
 
 Cantidad de AUTOMOVILES 
 Total de Automóviles 
 
 Cantidad de MOTOS 
 Total de MOTOS 
 
 Total GENERAL cobrado. 
 
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma 
cantidad. Compare estas cantidades únicamente entre autos y camionetas. 
 
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/

{

    let continuarCargando = `si`;
    let tipoVehiculo = 0;

    let cantidadCamion = 0;
    let cantidadCamioneta = 0;
    let cantidadAutomivil = 0;
    let cantidadMotos = 0;

    let totalCobradoCamion = 0;
    let totalCobradoCamioneta = 0;
    let totalCobradoAutomovil = 0;
    let totalCobradoMotos = 0;


    while ((continuarCargando === `si`) || (continuarCargando === `SI`)) {

        // preguntamos tipo de vehículo
        tipoVehiculo = Number(prompt(`Ingrese tipo de vehículo, (1-Camión, 2-Camioneta, 3-Automovil. 4-Moto):`));

        switch (tipoVehiculo) {
            case 1: // CAMIÓN 22000
                {
                    cantidadCamion++;
                    totalCobradoCamion = totalCobradoCamion + 22000;
                    break;
                }
            case 2: // CAMIONETA 12000
                {
                    cantidadCamioneta++;
                    totalCobradoCamioneta = totalCobradoCamioneta + 12000;
                    break;
                }
            case 3: // AUTOMOVIL 4000
                {
                    cantidadAutomivil++;
                    totalCobradoAutomovil = totalCobradoAutomovil + 4000;
                    break;
                }
            case 4: // MOTOS 1500
                {
                    cantidadMotos++;
                    totalCobradoMotos = totalCobradoMotos + 1500;
                    break;
                }
            default:
                {
                    console.log(`Error!, ingrese una opción correcta`);
                    break;
                }
        }


        // preguntamos si quiere seguir cargando vehículos
        continuarCargando = prompt(`Desea seguir cargando vehículos? (SI/NO)`);
    }


    // Mostramos los datos y hacemos comparación entre autos y camionetas


    // informacion del cierre de jornada
    console.log(`Cantidad de CAMIÓN: ${cantidadCamion}`);
    console.log(`Total Cobrado de CAMIÓN: ${totalCobradoCamion}`);
    console.log(`Cantidad de CAMIONETAS: ${cantidadCamioneta}`);
    console.log(`Total Cobrado de CAMIONETAS: ${totalCobradoCamioneta}`);
    console.log(`Cantidad de AUTOMOVILES: ${cantidadAutomivil}`);
    console.log(`Total Cobrado de AUTOMOVILES: ${totalCobradoAutomovil}`);
    console.log(`Cantidad de MOTOS: ${cantidadMotos}`);
    console.log(`Total Cobrado de MOTOS: ${totalCobradoMotos}`);

    // comparación autos y camionetas
    if (cantidadAutomivil > cantidadCamioneta) {  // Mas autos

        console.log(`Pasaron mas autos que camionetas, un total de ${cantidadAutomivil}`);
    } else {
        if (cantidadAutomivil < cantidadCamioneta) { // Mas camionetas

            console.log(`Pasaron mas camionetas que autos, un total de ${cantidadCamioneta}`);

        } else { // igual cantidad

            console.log(`Pasaron la misma cantidad de autos y camionetas, un total de ${cantidadAutomivil}`);
        }
    }




} // FIN BLOQUE CÓDIGO
