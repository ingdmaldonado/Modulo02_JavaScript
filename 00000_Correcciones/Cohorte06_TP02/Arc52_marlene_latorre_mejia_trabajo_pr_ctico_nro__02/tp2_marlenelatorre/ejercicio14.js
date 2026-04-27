/*
Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes
 CAMION = 22.000,00 PESOS
 CAMIONETA = 12.000,00 PESOS
 AUTOMOVIL = 4.000,00 PESOS
 MOTOS = 1.500,00 PESOS
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.
 Cantidad de AUTOS
 Total Cobrado de AUTOS
 Cantidad de CAMIONETAS
 Total de CAMIONETAS
 Cantidad de AUTOMOVILES
 Total de Automóviles
 Cantidad de MOTOS
 Total de MOTOS
 Total GENERAL cobrado.
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{

let precioCamion = 22000;
let precioCamioneta = 12000;
let precioAuto = 4000;
let precioMoto = 1500;

let cantidadCamion = 0;
let cantidadCamioneta = 0;
let cantidadAuto = 0;
let cantidadMoto = 0;

let totalCamion = 0;
let totalCamioneta = 0;
let totalAuto = 0;
let totalMoto = 0;
let totalGeneral = 0;

let continua ="S"

while ( continua === "S" || continua == "s" )
{
        let tipo = Number(prompt(`Ingrese el tipo de vehiculo 1-camion 2-camioneta 3-auto 4-moto`));

        switch(tipo)
        {
            case 1:
            {
                cantidadCamion ++;
                totalCamion = cantidadCamion * precioCamion;
                break;
            }
            case 2: 
            {
                cantidadCamioneta ++;
                totalCamioneta = cantidadCamioneta * precioCamioneta;
                break;
            }
            case 3:
            {
                cantidadAuto ++;
                totalAuto = cantidadAuto * precioAuto;
                break;
            }
            case 4: 
            {
                cantidadMoto ++;
                totalMoto = cantidadMoto * precioMoto;
                break;
            }
            default:
            {
                console.log(`Opcion incorrecta`);
                break;
            }

        }

        continua = prompt(`Desea continuar? S/N`);

}
totalGeneral = totalCamion + totalCamioneta + totalAuto + totalMoto;

        console.log(`Cantidad de Camiones: ${cantidadCamion}`);
        console.log(`Total cobrado a Camiones: ${totalCamion}`);
        console.log(`Cantidad de Camionetas: ${cantidadCamioneta}`);
        console.log(`Total cobrado a Camionetas: ${totalCamioneta}`);
        console.log(`Cantidad de Autos: ${cantidadAuto}`);
        console.log(`Total cobrado a Autos: ${totalAuto}`);
        console.log(`Cantidad de Motos: ${cantidadMoto}`);
        console.log(`Total cobrado a Motos: ${totalMoto}`);
        console.log(`Total general $: ${totalGeneral}`);

    if(cantidadAuto > cantidadCamioneta)
    {
        console.log(`Pasaron mas autos ${cantidadAuto} que camionetas ${cantidadCamioneta} `);
    }
    else
    {
        if(cantidadAuto < cantidadCamioneta)
        {
            console.log(`Pasaron mas camionetas ${cantidadCamioneta} que autos ${cantidadAuto} `);
        }
        else
        {
            console.log(`Pasaron la misma cantidad de autos y camionetas`);
        }
    }

}