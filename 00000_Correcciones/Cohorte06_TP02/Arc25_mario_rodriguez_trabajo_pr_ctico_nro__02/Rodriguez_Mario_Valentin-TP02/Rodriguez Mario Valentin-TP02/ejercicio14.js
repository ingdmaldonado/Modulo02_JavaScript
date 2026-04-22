/*

Ejercicio Nro. 14: 

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los 
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita 
realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera. 

Los precios establecidos son los siguientes 
- CAMION = 22.000,00 PESOS 
- CAMIONETA = 12.000,00 PESOS 
- AUTOMOVIL = 4.000,00 PESOS 
- MOTOS = 1.500,00 PESOS 

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el 
cierre donde le deberá mostrar la siguiente información. 
- Cantidad de AUTOS  
- Total Cobrado de AUTOS 
- Cantidad de CAMIONETAS 
- Total de CAMIONETAS 
- Cantidad de AUTOMOVILES 
- Total de Automóviles 
- Cantidad de MOTOS 
- Total de MOTOS 
- Total GENERAL cobrado. 


Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma 
cantidad. Compare estas cantidades únicamente entre autos y camionetas. 

*/

{
    //parte 1 - inicializacion 

    let camion = 22000;
    let camioneta = 12000;
    let automovil = 4000;
    let motos = 1500;

    let cantidadCamion = 0;
    let cantidadCamionetas = 0;
    let cantidadAutomoviles = 0;
    let cantidadMotos = 0;

    let continua = `S`;
    let opcion = 0;

    //parte 2 - bucle while para cargar las cantidades

    while(continua === `S` || continua === `s`){

        opcion = Number(prompt(`Ingrese el vehiculo: 1 - Camion ; 2 - Camioneta ; 3 - Automovil ; 4 - Motos`));

        if (opcion === 1){

            cantidadCamion = cantidadCamion + 1; // cantidad de camiones

        }

        if(opcion === 2){

            cantidadCamionetas = cantidadCamionetas + 1; // cantidad de camionetas

        }

        if(opcion === 3){

            cantidadAutomoviles = cantidadAutomoviles + 1; // cantidad de automoviles

        }

        if(opcion === 4){

            cantidadMotos = cantidadMotos + 1; // cantidad de motos

        }

        continua = prompt(`¿Desea agregar otro vehiculo? (S/N)`);

    }

    // parte 3 - cobro

    let totalCobroCamion = 0;
    let totalCobroCamionetas = 0;
    let totalCobroAutomoviles = 0;
    let totalCobroMotos = 0;

    let totalGeneralCobrado = 0;

    totalCobroCamion = cantidadCamion * camion;
    totalCobroCamionetas = cantidadCamionetas * camioneta;
    totalCobroAutomoviles = cantidadAutomoviles * automovil;
    totalCobroMotos = cantidadMotos * motos;

    totalGeneralCobrado = totalCobroCamion + totalCobroCamionetas + totalCobroAutomoviles + totalCobroMotos;

    console.log(`Cantidad de Camiones: ${cantidadCamion}`);
    console.log(`Total cobrado de Camiones: ${totalCobroCamion}`);

    console.log(`Cantidad de Camionetas: ${cantidadCamionetas}`);
    console.log(`Total cobrado de Camionetas: ${totalCobroCamionetas}`); 

    console.log(`Cantidad de Automoviles: ${cantidadAutomoviles}`);
    console.log(`Total cobrado de Automoviles: ${totalCobroAutomoviles}`);

    console.log(`Cantidad de Motos: ${cantidadMotos}`);
    console.log(`Total cobrado de Motos: ${totalCobroMotos}`);

    console.log(`Total GENERAL cobrado: ${totalGeneralCobrado}`);

    // parte 4 - comparar las cantidades de autos y camionetas

    if (cantidadCamionetas > cantidadAutomoviles){
        console.log("Pasaron mas camionetas que automoviles");
    } 
    else if (cantidadAutomoviles > cantidadCamionetas){
        console.log("Pasaron mas automoviles que camionetas");
    } 
    else {
        console.log("Pasaron la misma cantidad de camionetas y automoviles");
    }

}