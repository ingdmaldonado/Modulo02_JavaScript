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
    let tipoVehiculo = 0;

    let continua = `S`;

    while (continua === `S` || continua === `s`) {

        tipoVehiculo = Number(prompt(`Ingrese el tipo de vehiculo: 1-Camion 2-Camioneta 3-Auto 4-Moto`));

        switch (tipoVehiculo) {
            case 1:
                cantidadCamion = cantidadCamion + 1;
                totalCamion = totalCamion + precioCamion;
                break;
            case 2:
                cantidadCamioneta = cantidadCamioneta + 1;
                totalCamioneta = totalCamioneta + precioCamioneta;
                break;
            case 3:
                cantidadAuto = cantidadAuto + 1;
                totalAuto = totalAuto + precioAuto;
                break;
            case 4:
                cantidadMoto = cantidadMoto + 1;
                totalMoto = totalMoto + precioMoto;
                break;
            default:
                console.log(`Ingrese una opcion valida.`);
                break;
        }


        continua = prompt(`Continuar cobrando peaje? S/N`);
    }

    totalGeneral = totalCamion + totalCamioneta + totalAuto + totalMoto;

    console.log(`La cantidad de camiones: ${cantidadCamion}, total cobrado: ${totalCamion}`);
    console.log(`La cantidad de camionetas: ${cantidadCamioneta}, total cobrado: ${totalCamioneta}`);
    console.log(`La cantidad de autos: ${cantidadAuto}, total cobrado: ${totalAuto}`);
    console.log(`La cantidad de motos: ${cantidadMoto}, total cobrado: ${totalMoto}`);

    console.log(`El monto total cobrado es: ${totalGeneral}`);

    if (cantidadAuto === cantidadCamioneta) {
        console.log(`la cantidad de autos es igual a la de camionetas`);
    } else if (cantidadAuto < cantidadCamioneta) {
        console.log(`la cantidad de camionetas es mayor a la de autos`);
    } else {
        console.log(`la cantidad de autos es mayor a la de camionetas`);
    }

}