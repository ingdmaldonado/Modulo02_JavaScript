/*TRABAJO PRÁCTICO NRO. 02 - JAVASCRIPT
Ejercicio Nro. 14:
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
cantidad. Compare estas cantidades únicamente entre autos y camionetas.*/

{

    let continua = `S`;
    let tipoDeVehiculo = 0;

    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAuto = 4000;
    let precioMoto = 1500;
    let cantidadAutos = 0;
    let cantidadCamionetas = 0;
    let cantidadCamiones = 0;
    let cantidadMotos = 0;
    let totalCobradoAutos = 0;
    let totalCobradoCamionetas = 0;
    let totalCobradoCamiones = 0;
    let totalCobradoMotos = 0;
    let totalGeneralCobrado = 0;

    while (continua === `S` || continua === `s`) {

        tipoDeVehiculo = Number(prompt(`Ingrese el tipo de vehiculo que desea registrar: 1- Auto, 2- Camioneta, 3- Camion, 4- Moto`));
        switch (tipoDeVehiculo) {
            case 1:
                cantidadAutos = cantidadAutos + 1;
                totalCobradoAutos = totalCobradoAutos + precioAuto;
                break;
            case 2:
                cantidadCamionetas = cantidadCamionetas + 1;
                totalCobradoCamionetas = totalCobradoCamionetas + precioCamioneta;
                break;
            case 3:
                cantidadCamiones = cantidadCamiones + 1;
                totalCobradoCamiones = totalCobradoCamiones + precioCamion;
                break;
            case 4:
                cantidadMotos = cantidadMotos + 1;
                totalCobradoMotos = totalCobradoMotos + precioMoto;

                break;
            default:
                console.log(`Tipo de vehículo inválido, ingrese nuevamente`);
                break;
        }
        continua = prompt(`Desea seguir cobrando? S/N`);
    }

    totalGeneralCobrado = totalCobradoAutos + totalCobradoCamionetas + totalCobradoCamiones + totalCobradoMotos;

    if (cantidadAutos > cantidadCamionetas) {
        console.log(`Pasaron más autos que camionetas`);
    }
    else if (cantidadCamionetas > cantidadAutos) {
        console.log(`Pasaron más camionetas que autos`);
    }
    else {
        console.log(`Pasaron la misma cantidad de autos y camionetas`);
    }

    console.log(`Cantidad de autos registrados ${cantidadAutos} `);
    console.log(`Cantidad de camionetas registrados ${cantidadCamionetas} `);
    console.log(`Cantidad de camiones registrados ${cantidadCamiones} `);
    console.log(`Cantidad de motos registrados ${cantidadMotos} `);
    console.log(`Total general cobrado: ${totalGeneralCobrado} `);
    console.log(`Total cobrado por autos: ${totalCobradoAutos} `);
    console.log(`Total cobrado por camionetas: ${totalCobradoCamionetas} `);
    console.log(`Total cobrado por camiones: ${totalCobradoCamiones} `);
    console.log(`Total cobrado por motos: ${totalCobradoMotos} `);
}