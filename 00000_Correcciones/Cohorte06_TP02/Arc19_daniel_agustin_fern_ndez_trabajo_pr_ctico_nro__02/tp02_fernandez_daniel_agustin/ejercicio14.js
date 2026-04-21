/*

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.

Los precios establecidos son los siguientes:

-CAMION = 22.000,00 PESOS
-CAMIONETA = 12.000,00 PESOS
-AUTOMOVIL = 4.000,00 PESOS
-MOTOS = 1.500,00 PESOS

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.

-Cantidad de CAMION
-Total Cobrado de CAMION

-Cantidad de CAMIONETAS
-Total de CAMIONETAS

-Cantidad de AUTOMOVILES
-Total de AUTOMOVILES

-Cantidad de MOTOS
-Total de MOTOS

-Total GENERAL cobrado.

Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.

*/

{
    let cantidadDeCamiones = 0;
    let totalDeCobroCamiones = 0;
    
    let cantidadDeCamionetas = 0;
    let totalDeCobroCamionetas = 0;
    
    let cantidadDeAutomoviles = 0;
    let totalDeCobroAutomoviles = 0;
    
    let cantidadDeMotos = 0;
    let totalDeCobroMotos = 0;
    
    let cobroGeneral = 0;

    // Precios establecidos
    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAutomovil = 4000;
    let precioMoto = 1500;

    // Variables temporales
    let vehiculo = 0;
    let cantidadIngresada = 0;
    let continua = 'S';

    while (continua === 'S' || continua === 's')
    {

        vehiculo = Number(prompt(`Seleccione el vehículo que pasa: 1 = Camion, 2 = Camioneta, 3 = Auto, 4 = Moto`));
        
        switch (vehiculo)
        {
            case 1: {
                        cantidadIngresada = Number(prompt(`Cuántos camiones son?`));
                        cantidadDeCamiones = cantidadDeCamiones + cantidadIngresada;
                        totalDeCobroCamiones = totalDeCobroCamiones + (cantidadIngresada * precioCamion);
                        console.log(`El monto es de : $${cantidadIngresada * precioCamion}`);
                        break;
                    }
                
            case 2: {
                        cantidadIngresada = Number(prompt(`Cuántas camionetas son?`));
                        cantidadDeCamionetas = cantidadDeCamionetas + cantidadIngresada;
                        totalDeCobroCamionetas = totalDeCobroCamionetas + (cantidadIngresada * precioCamioneta);
                        console.log(`El monto es de : $${cantidadIngresada * precioCamioneta}`);
                        break;
                    }
                
            case 3: {
                        cantidadIngresada = Number(prompt(`Cuántos autos son?`));
                        cantidadDeAutomoviles = cantidadDeAutomoviles + cantidadIngresada;
                        totalDeCobroAutomoviles = totalDeCobroAutomoviles + (cantidadIngresada * precioAutomovil);
                        console.log(`El monto es de : $${cantidadIngresada * precioAutomovil}`);
                        break;
                    }
                
            case 4: {
                        cantidadIngresada = Number(prompt(`Cuántas motos son?`));
                        cantidadDeMotos = cantidadDeMotos + cantidadIngresada;
                        totalDeCobroMotos = totalDeCobroMotos + (cantidadIngresada * precioMoto);
                        console.log(`El monto es de : $${cantidadIngresada * precioMoto}`);
                        break;
                    }

            default: {
                        console.log(`Opción incorrecta.`);
                        break;
                    }
        }

        continua = prompt(`Quiere registrar otro vehículo? (S/N)`);

    }

    console.log(`Cantidad de Camiones: ${cantidadDeCamiones} - Total cobrado: $${totalDeCobroCamiones}`);
    console.log(`Cantidad de Camionetas: ${cantidadDeCamionetas} - Total cobrado: $${totalDeCobroCamionetas}`);
    console.log(`Cantidad de Automóviles: ${cantidadDeAutomoviles} - Total cobrado: $${totalDeCobroAutomoviles}`);
    console.log(`Cantidad de Motos: ${cantidadDeMotos} - Total cobrado: $${totalDeCobroMotos}`);

    cobroGeneral = totalDeCobroCamiones + totalDeCobroCamionetas + totalDeCobroAutomoviles + totalDeCobroMotos;
    console.log(`TOTAL GENERAL RECAUDADO: $${cobroGeneral}`);


    if(cantidadDeCamionetas > cantidadDeAutomoviles)
    {
        console.log(`Pasaron más Camionetas que Automóviles.`);
    }
    else
    {
        if(cantidadDeCamionetas < cantidadDeAutomoviles)
        {
            console.log(`Pasaron más Automóviles que Camionetas.`);
        }
        else
        {
            console.log(`Pasó la misma cantidad de Camionetas y Automóviles.`);
        }
    }
}