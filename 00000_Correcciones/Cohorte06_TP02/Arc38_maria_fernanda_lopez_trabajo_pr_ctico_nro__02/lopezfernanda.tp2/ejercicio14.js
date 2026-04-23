/* Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
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
DOM y cargar los datos de entrada por medio de prompt. */
{

let camion=22000;
let camioneta= 12000;
let automovil= 4000;
let motos= 1500;

let continuaAtendiendo= `S`;


let cantidadCamion= 0;
let totalCobroCamiones= 0;

let cantidadCamionetas= 0;
let totalCobroCamionetas= 0;

let cantidadAutomoviles= 0;
let totalCobroAutomoviles= 0;

let cantidadMotos= 0;
let totalCobroMotos= 0;

let totalGeneral= 0;

while (continuaAtendiendo === "S" || continuaAtendiendo === "s")
{
    let tipoVehiculo = Number(prompt("Ingrese el tipo de Vehiculo 1-Camion, 2-Camionetas, 3-Automoviles,4 Motos"));

    while(tipoVehiculo < 1 || tipoVehiculo > 4)
{
    console.log (`Ingrese una opción correcta`);
    tipoVehiculo = Number(prompt("Ingrese una opcion correcta"));
}

        
switch (tipoVehiculo)
{
    case 1:
        {
            cantidadCamion= cantidadCamion +1;
            totalCobroCamiones= totalCobroCamiones + camion;
            totalGeneral= totalGeneral + camion;
            console.log (`se registro un camión`)
            break;

        }
    case 2: 
        {
            cantidadCamionetas= cantidadCamionetas + 1;
            totalCobroCamionetas= totalCobroCamionetas + camioneta;
            totalGeneral= totalGeneral + camioneta;
            console.log (`Se registro una camioneta`);
            break;
        }
    case 3:
        {
            cantidadAutomoviles= cantidadAutomoviles + 1;
            totalCobroAutomoviles= totalCobroAutomoviles + automovil;
            totalGeneral= totalGeneral + automovil;
            console.log (`Se registro un automovil`);
            break;


        }
    case 4:
        {
            cantidadMotos= cantidadMotos + 1;
            totalCobroMotos= totalCobroMotos+ motos;
            totalGeneral= totalGeneral + motos;
            console.log (`Se registro una moto`);
            break;
        }
               
}
    continuaAtendiendo = prompt (`Continua atendiendo otro vehiculo? (S/N)`);
}
 

    /* CIERRE */
    console.log (`Total de camiones ${cantidadCamion}`);
    console.log (`Total cobrado de camiones $ ${totalCobroCamiones}`);
    console.log (`Total de camionetas ${cantidadCamionetas}`)
    console.log (`Total cobrado de camionetas $ ${totalCobroCamionetas}`);
    console.log (`Total de automoviles ${cantidadAutomoviles}`);
    console.log (`Total cobrado de automoviles $ ${totalCobroAutomoviles}`);
    console.log (`Total de motos  ${cantidadMotos}`);
    console.log (`Total cobrado de motos $ ${totalCobroMotos}`);
    console.log (`Total de ingresos generales al momento $  ${totalGeneral}`);

    if (cantidadCamionetas > cantidadAutomoviles)
{
    console.log(`Pasaron más camionetas ${cantidadCamionetas} que automóviles ${cantidadAutomoviles}`);
}
else if (cantidadAutomoviles > cantidadCamionetas)
{
    console.log(`Pasaron más automoviles ${cantidadAutomoviles} que camionetas ${cantidadCamionetas}`);
}
else
{
    console.log(`Pasaron la misma cantidad de camionetas ${cantidadCamionetas} y automóviles ${cantidadAutomoviles}`);
}
}
