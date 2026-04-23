/*
-------Ejercicio Nro. 14--------

-Una empresa de Peajes del SUR S.A. 
desea realizar una aplicación que permita 
cobrar y otorgar los comprobantes a los clientes 
que circulan por las autopistas concesionadas 
por la empresa, para ello se necesita realizar
un programa que el cajero del puesto 
pueda realizar el cobro y levantado de la barrera.

Los precios establecidos son los siguientes

- CAMION = 22.000,00 PESOS 
- CAMIONETA = 12.000,00 PESOS 
- AUTOMOVIL = 4.000,00 PESOS 
- MOTOS = 1.500,00 PESOS 

La aplicación debe permitirle al cajero registrar 
todas las operaciones y al finalizar su jornada 
laboral realizar el cierre donde le deberá 
mostrar la siguiente información.

- Cantidad de AUTOS  
- Total Cobrado de AUTOS 
- Cantidad de CAMIONETAS 
- Total de CAMIONETAS 
- Cantidad de AUTOMOVILES 
- Total de Automóviles 
- Cantidad de MOTOS 
- Total de MOTOS 
- Total GENERAL cobrado. 

Compare al final si pasaron más camionetas que autos
o fue al revés ¿?. O quizás hayan pasado la misma 
cantidad. Compare estas cantidades únicamente 
entre autos y camionetas. 
Consideraciones: para realizar el ejercicio debe 
utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/

{
    let vehiculos = 0;
    let continua = `S`;
    
    /* PRECIOS */

    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAuto = 4000;
    let precioMoto = 1500;

    /*ACUMULADORES*/

    let totalCamiones = 0;
    let totalCamionetas = 0;
    let totalAutos = 0;
    let totalMotos = 0;

    /*CONTADORES*/

    let cantidadCamiones = 0;
    let cantidadCamionetas = 0;
    let cantidadAutos = 0;
    let cantidadMotos = 0;


    while ((continua === `S`) || (continua === `s`)) {

        vehiculos = Number(prompt(`Ingrese vehiculo:
        1_CAMION 
        2_CAMIONETA
        3_AUTOS
        4_MOTOS `));

        switch (vehiculos) {
            case 1:
                {
                    totalCamiones = totalCamiones + precioCamion;

                    cantidadCamiones++;
                    break;
                }
            case 2:
                {

                    totalCamionetas = totalCamionetas + precioCamioneta;

                    cantidadCamionetas++;
                    break;
                }
            case 3:
                {
                    totalAutos = totalAutos + precioAuto;

                    cantidadAutos++;
                    break;
                }
            case 4:
                {
                    totalMotos = totalMotos + precioMoto;

                    cantidadMotos++;
                    break;
                }

            default:
                {
                    console.log(`Ingrese una opción válida`);
                    break;
                }

        }

        continua = prompt(`Quiere seguir?(S/N)`);
    }
    let totalVehiculos = totalCamiones + totalCamionetas + totalAutos + totalMotos;

    console.log(`Total de Camiones $${totalCamiones}`);
    console.log(`Total de Camionetas $${totalCamionetas}`);
    console.log(`Total de Autos $${totalAutos}`);
    console.log(`Total de Motos $${totalMotos}`);


    console.log(`Total General $${totalVehiculos}`);

    /*
    Compare al final si pasaron más camionetas que autos
o fue al revés ¿?. O quizás hayan pasado la misma 
cantidad. Compare estas cantidades únicamente 
entre autos y camionetas. 
Consideraciones: para realizar el ejercicio debe 
utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.
*/
    if (cantidadCamionetas > cantidadAutos)
    {
        console.log(`Cantidad de Camionetas ${cantidadCamionetas}`);
    }
    else
    {
        if (cantidadCamionetas === cantidadAutos)
        {
            console.log(`Cantidad de Camionetas: ${cantidadAutos} Cantidad Autos: ${cantidadAutos}`);
        }
        else
        {
            console.log(`Cantidad de Autos ${cantidadCamionetas}`);
        }
    }
}