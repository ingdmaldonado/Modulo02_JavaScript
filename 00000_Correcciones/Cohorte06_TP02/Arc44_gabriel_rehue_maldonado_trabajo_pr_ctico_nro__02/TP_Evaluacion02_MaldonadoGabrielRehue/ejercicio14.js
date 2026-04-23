/* TP2 - EJERCICIO NRO. 14

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

*/

{
    /* Precios fijos por tipo de vehículo */
    const PRECIO_CAMION    = 22000;
    const PRECIO_CAMIONETA = 12000;
    const PRECIO_AUTOMOVIL = 4000;
    const PRECIO_MOTO      = 1500;

    /* ANTES */
    let cantidadCamiones   = 0;
    let cantidadCamionetas = 0;
    let cantidadAutos      = 0;
    let cantidadMotos      = 0;

    let totalCamiones      = 0;
    let totalCamionetas    = 0;
    let totalAutos         = 0;
    let totalMotos         = 0;

    let continua = `S`;

    /* DURANTE */
    while(continua === `S` || continua === `s`)
    {
        let tipoVehiculo = 0;
        tipoVehiculo = Number(prompt(`Indique el tipo de vehículo:
1 - Camión      $22.000
2 - Camioneta   $12.000
3 - Automóvil    $4.000
4 - Moto         $1.500`));

        switch(tipoVehiculo)
        {
            case 1: // Camión
            {
                cantidadCamiones++;
                totalCamiones = totalCamiones + PRECIO_CAMION;
                console.log(`Camión registrado. Total cobrado: ${PRECIO_CAMION}`);
                break;
            }
            case 2: // Camioneta
            {
                cantidadCamionetas++;
                totalCamionetas = totalCamionetas + PRECIO_CAMIONETA;
                console.log(`Camioneta registrada. Total cobrado: ${PRECIO_CAMIONETA}`);
                break;
            }
            case 3: // Automóvil
            {
                cantidadAutos++;
                totalAutos = totalAutos + PRECIO_AUTOMOVIL;
                console.log(`Automóvil registrado. Total cobrado: ${PRECIO_AUTOMOVIL}`);
                break;
            }
            case 4: // Moto
            {
                cantidadMotos++;
                totalMotos = totalMotos + PRECIO_MOTO;
                console.log(`Moto registrada. Total cobrado: ${PRECIO_MOTO}`);
                break;
            }
            default:
            {
                console.log(`Tipo de vehículo inválido. Ingrese entre 1 y 4`);
                break;
            }
        }

        continua = prompt(`¿Desea registrar otro vehículo? (S/N)`);
    }

    /* FINAL */

    let totalGeneral = totalCamiones + totalCamionetas + totalAutos + totalMotos;

    console.log(`--- CIERRE DE JORNADA --- Peajes del SUR S.A. ---`);
    console.log(`Cantidad de Camiones:   ${cantidadCamiones}   |  Total Camiones:   ${totalCamiones}`);
    console.log(`Cantidad de Camionetas: ${cantidadCamionetas} |  Total Camionetas: ${totalCamionetas}`);
    console.log(`Cantidad de Automóviles:${cantidadAutos}      |  Total Automóviles:${totalAutos}`);
    console.log(`Cantidad de Motos:      ${cantidadMotos}      |  Total Motos:      ${totalMotos}`);
    console.log(`Total General Cobrado:  ${totalGeneral}`);

    /* Comparación final: ¿pasaron más camionetas o autos? */
    console.log(`--- Comparación: Camionetas vs Automóviles ---`);

    if(cantidadCamionetas > cantidadAutos)
    {
        console.log(`Pasaron MÁS CAMIONETAS que Automóviles`);
        console.log(`Camionetas: ${cantidadCamionetas}  |  Automóviles: ${cantidadAutos}`);
    }
    else
    {
        if(cantidadAutos > cantidadCamionetas)
        {
            console.log(`Pasaron MÁS AUTOMÓVILES que Camionetas`);
            console.log(`Automóviles: ${cantidadAutos}  |  Camionetas: ${cantidadCamionetas}`);
        }
        else
        {
            console.log(`Pasaron la MISMA CANTIDAD de Automóviles y Camionetas`);
            console.log(`Ambos: ${cantidadAutos}`);
        }
    }
}
