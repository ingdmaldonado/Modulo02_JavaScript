
/* 
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los 
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita 
realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera. 
Los precios establecidos son los siguientes 
* CAMION = 22.000,00 PESOS 
* CAMIONETA = 12.000,00 PESOS 
* AUTOMOVIL = 4.000,00 PESOS 
* MOTOS = 1.500,00 PESOS 
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el 
cierre donde le deberá mostrar la siguiente información. 
* Cantidad de AUTOS  
* Total Cobrado de AUTOS 
* Cantidad de CAMIONETAS 
* Total de CAMIONETAS 
* Cantidad de AUTOMOVILES 
* Total de Automóviles 
* Cantidad de MOTOS 
* Total de MOTOS 
* Total GENERAL cobrado. 
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma 
cantidad. Compare estas cantidades únicamente entre autos y camionetas.
*/

{
    /*
    * CAMION = 22.000,00 PESOS 
    * CAMIONETA = 12.000,00 PESOS 
    * AUTOMOVIL = 4.000,00 PESOS 
    * MOTOS = 1.500,00 PESOS 
    */

    let ContinuaCargando = "SI";

    // declarar los precios como constante //
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAuto = 4000;
    const precioMoto = 1500;

    // declarar las variables contabilizadoras y totabilizadoras //
    let cantidadCamion = 0;
    let totalCamion = 0;
    let cantidadCamioneta = 0;
    let totalCamioneta = 0;
    let cantidadAuto = 0;
    let totalAuto = 0;
    let cantidadMoto = 0;
    let totalMoto = 0;

    let totalGeneral = 0;

    while (ContinuaCargando === "SI")
    {
        /* primer bloque es ver
        que vehiculo llego al puesto
        y cobrar el importe correspondiente 
        
        1 - camion
        2 - camioneta
        3 - auto
        4 - moto
        */

        let tipoVehiculo = 0;
        tipoVehiculo = Number(prompt("Ingrese Tipo Vehiculo (1,2,3,4)"));
        console.log(tipoVehiculo);

        /* con un switch podriamos manejar los tipos de vehiculo */

         /* acumular los totales dependiendo
        del tipo de vehiculo que venga */

        switch(tipoVehiculo)
        {
            case 1: // camion
                {
                    cantidadCamion = cantidadCamion + 1; // cuenta
                    totalCamion = totalCamion + precioCamion; // acumula
                    console.log(`Cantidad Camion ${cantidadCamion} y Total ${totalCamion}`);
                    break;

                }
            case 2: // camioneta
                {
                    cantidadCamioneta++;
                    totalCamioneta = totalCamioneta + precioCamioneta;
                    console.log(`Cantidad Camioneta ${cantidadCamioneta} y Total ${totalCamioneta}`);
                    break;
                }

            case 3: // autos
                {
                    cantidadAuto++;
                    totalAuto = totalAuto + precioAuto;
                    console.log(`Cantidad autos ${cantidadAuto} y Total ${totalAuto}`);
                    break;
                }
            case 4: // motos
                {
                    cantidadMoto++;
                    totalMoto = totalMoto + precioMoto;
                    console.log(`Cantidad Motos ${cantidadMoto} y Total ${totalMoto}`);
                    break;
                }

            default:
                {
                    console.log("valor ingresado incorrecto de vehiculo");
                }
        }

        ContinuaCargando = prompt("desea continuar con otro vehiculo (SI/NO) ?");

    }

    /* haga una rendición de los totales
    que cobro la cajera o el cajero */

    totalGeneral = totalCamion + totalCamioneta + totalAuto + totalMoto;

    console.log("********** TOTALES *********");
    console.log(`Cantidad Camion ${cantidadCamion} y Total ${totalCamion}`);
    console.log(`Cantidad Camioneta ${cantidadCamioneta} y Total ${totalCamioneta}`);
    console.log(`Cantidad autos ${cantidadAuto} y Total ${totalAuto}`);
    console.log(`Cantidad Motos ${cantidadMoto} y Total ${totalMoto}`);

    /* A Y B  A > B, A < B, A = B */
    /************ SABER SI PASARON MAS AUTOS QUE CAMIONETAS 
     * 
     **********/

    if(cantidadCamioneta > cantidadAuto)
    {
        console.log("pasaron mas camionetas que autos");
    }
    else
    {
        if(cantidadCamioneta < cantidadAuto)
        {
            console.log("pasaron mas autos que camionetas");
        }
        else
        {
            console.log("pasaron la misma cantidad de autos y de camionetas");
        }
    }

}



