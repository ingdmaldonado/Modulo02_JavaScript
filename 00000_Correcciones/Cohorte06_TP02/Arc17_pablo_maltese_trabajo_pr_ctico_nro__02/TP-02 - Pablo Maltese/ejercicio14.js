/*
Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a 
los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un 
programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.

Los precios establecidos son los siguientes

     CAMION = 22.000,00 PESOS
     CAMIONETA = 12.000,00 PESOS
     AUTOMOVIL = 4.000,00 PESOS
     MOTOS = 1.500,00 PESOS

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral 
realizar el cierre donde le deberá mostrar la siguiente información.

     Cantidad de AUTOS
     Total Cobrado de AUTOS

     Cantidad de CAMIONETAS
     Total de CAMIONETAS

     Cantidad de AUTOMOVILES
     Total de Automóviles

     Cantidad de MOTOS
     Total de MOTOS

     Total GENERAL cobrado.

Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. 
Compare estas cantidades únicamente entre autos y camionetas.

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM 
y cargar los datos de entrada por medio de prompt.
*/

{
    let tipoVehiculo = 0;
    let jorndaVigente = true;

    let cantidadMotos = 0;
    let totalCobradoMoto = 0;

    let cantidadAutomovil = 0;
    let totalCobradoAutomovil = 0;

    let cantidadCamionetas = 0;
    let totalCobradoCamionetas = 0;

    let cantidadCamion = 0;
    let totalCobradoCamion = 0;

    let totalGeneralCobrado = 0;

    while(jorndaVigente)
    {
        tipoVehiculo  = Number(prompt(`Seleccione el tipo de vehículo: 1 - CAMION; 2 - CAMIONETA; 3 - AUTOMOVIL; 4 - MOTOS`));

        //Seleccion de vehiculo
        switch( tipoVehiculo)
        {
            case 1:{
                cantidadCamion = cantidadCamion + 1;
                totalCobradoCamion = totalCobradoCamion + 22000;
                break;
            }
            case 2:{
                cantidadCamionetas = cantidadCamionetas + 1;
                totalCobradoCamionetas = totalCobradoCamionetas + 12000;
                break;
            }
            case 3:{
                cantidadAutomovil = cantidadAutomovil + 1;
                totalCobradoAutomovil = totalCobradoAutomovil + 4000;
                break;
            }
            case 4:{
                cantidadMotos = cantidadMotos + 1;
                totalCobradoMoto = totalCobradoMoto + 1500;
                break;
            }
            default:{
                jorndaVigente = false;
                break;
            }
            
        }//Fin switch
    } // Fin while

    console.log(`Cantidad de CAMION: ${cantidadCamion}`);
    console.log(`Total cobrado de CAMION: ${totalCobradoCamion}`);
    console.log(`==================================================`);

    console.log(`Cantidad de CAMIONETAS: ${cantidadCamionetas}`);
    console.log(`Total cobrado de CAMIONETAS: ${totalCobradoCamionetas}`);
    console.log(`==================================================`);

    console.log(`Cantidad de AUTOMOVILES: ${cantidadAutomovil}`);
    console.log(`Total cobrado de AUTOMOVILES: ${totalCobradoAutomovil}`);
    console.log(`==================================================`);

    console.log(`Cantidad de MOTOS: ${cantidadMotos}`);
    console.log(`Total cobrado de MOTOS: ${totalCobradoMoto}`);
    console.log(`==================================================`);

    totalGeneralCobrado = (totalCobradoCamion + totalCobradoCamionetas + totalCobradoAutomovil + totalCobradoMoto);
    console.log(`Total general cobrado: ${totalGeneralCobrado}`);

    //Comparamos si pasaron mas camionetas que autos o al reves
    if( cantidadCamionetas === cantidadAutomovil)
    {
        console.log(`Pasarón la misma cantidad de camionetas que autos`);
    }else
    {
       console.log((cantidadCamionetas > cantidadAutomovil? 'Pasarón mas camionetas que autos':'Pasarón mas autos que camionetas'));
    }
}

