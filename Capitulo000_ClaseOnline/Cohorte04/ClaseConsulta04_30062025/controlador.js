
/* 

EJERCICIO NRO. 09: GUIA NÚMERO 2.

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita
cobrar y otorgar los comprobantes a los clientes que 
circulan por las autopistas concesionadas por la empresa, para ello se necesita
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

    console.log(`la Aplicación esta corriendo`);

    /* 
    aqui voy a crear constantes donde voy a guardar los precios
    de cada uno de los tipos de vehiculos que vienen
    */

    const precioAuto = 4000;
    const precioMoto = 1500;
    const precioCamioneta = 12000;
    const precioCamion = 22000;


    let contadorGeneralVehiculos = 0;

    let contadorAutos = 0;
    let totalAutos = 0;

    let contadorMotos = 0;
    let totalMotos = 0;

    let contadorCamionetas = 0;
    let totalCamionetas = 0;

    let contadorCamiones = 0;
    let totalCamiones = 0;

    let continuaCargando = 'SI';

    /* Patron dentro de la informática => un proceso,
    un esquema dentro de la programación. que se repite */

    while (continuaCargando.toUpperCase() === 'SI')
    {
        // dentro del ciclo while debería ir registrando
        contadorGeneralVehiculos = contadorGeneralVehiculos + 1;

        console.log(`Estoy registrando el vehiculo ${contadorGeneralVehiculos}`);

        // preguntarle al operador que ingrese un tipo de vehiculo //
        let tipoVehiculo = Number(prompt(`Indique Vehiculo 1 - Autos, 2- Moto, 3 - Camioneta, 4 - Camion`));

        switch(tipoVehiculo)
        {
            case 1: // auto
                {
                    contadorAutos = contadorAutos + 1;
                    totalAutos = totalAutos + precioAuto;
                    break;
                }
            case 2: // moto
                {
                    contadorMotos = contadorMotos + 1;
                    totalMotos = totalMotos + precioMoto;
                    break;
                }

            case 3: // camioneta
                {
                    contadorCamionetas = contadorCamionetas + 1;
                    totalCamionetas = totalCamionetas + precioCamioneta;
                    break;
                }

            case 4: // camion
                {
                    contadorCamiones = contadorCamiones + 1;
                    totalCamiones = totalCamiones + precioCamion;
                    break;
                }
            default: // vehiculo no registrado
                {
                    console.log(`Vehiculo no registrado`);
                }

        }

        console.log(`Cant Autos: ${contadorAutos} Total Autos: ${totalAutos} Cant Motos: ${contadorMotos} y TotalMotos: ${totalMotos}
            Cant Camionetas: ${contadorCamionetas} y Total Camionetas: ${totalCamionetas} Cant Camiones: ${contadorCamiones} Total Camiones: ${totalCamiones}`);

        let totalCobrado = totalAutos + totalMotos + totalCamionetas + totalCamiones;

        console.log(`El total Cobrado es: ${totalCobrado}`);

        /* donde yo voy a contabilizar y registrar si 
        pasaron mas autos que camionetas */

        if(contadorAutos > contadorCamionetas)
        {
            console.log(`Pasaron mas Autos que camionetas`);
        }
        else
        {
            if(contadorCamionetas > contadorAutos)
            {
                console.log(`Pasaron mas Camionetas que autos`);
            }
            else
            {
                console.log(`Pasaron la misma cantidad de Autos que camionetas`)
            }
        }

            continuaCargando = prompt(`Desea continuar ?. (SI/NO)`);
    }
}