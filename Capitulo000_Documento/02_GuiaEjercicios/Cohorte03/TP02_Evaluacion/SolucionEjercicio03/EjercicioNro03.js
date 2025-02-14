

{
    /* esto serían los precios */
    const precioCamion = 22000;
    const precioCamioneta = 12000;
    const precioAutomotor = 4000;
    const precioMotocicleta = 1500;

    /* esto sería la declaración e inicialización de los contadores
    de cada tipo de vehiculo */

    let contadorCamion = 0;
    let contadorCamioneta = 0;
    let contadorAutomotor = 0;
    let contadorMotos = 0;
    let contadorErrores = 0;

    /* en este caso lo que haría es generar variables que me
    permitan totabilizar cada una de las opciones */

    let totalCamiones = 0;
    let totalCamionetas = 0;
    let totalAutomotor = 0;
    let totalMotos = 0;
    
    let continua = "";

    continua = prompt("Desea Abrir la caja y comenzar su jornada ? (SI/NO)")

    while(continua ==='SI')
    {

        let tipoVehiculo = Number(prompt("Ingrese el vehículo a cobrar - 1 (CAMION) - 2 (CAMIONETA) - 3 (AUTOMOVIL) - 4 (MOTOS)"));

        console.log(tipoVehiculo);
        
        switch (tipoVehiculo)
        {
            // cuando venga un camion
            case 1:{
                contadorCamion = contadorCamion + 1;
                totalCamiones = totalCamiones + precioCamion;
                console.log(`Cantidad de Camiones ${contadorCamion} - ${totalCamiones}`);
                break;
            }
            // cuando venga una camioneta
            case 2:{
                    contadorCamioneta++;
                    totalCamionetas = totalCamionetas + precioCamioneta;
                    console.log(`Cantidad de Camionetas ${contadorCamioneta} - ${totalCamionetas}`);
                    break;
                }

            // cuando venga un auto
            case 3:{
                    contadorAutomotor++;
                    totalAutomotor = totalAutomotor + precioAutomotor;
                    console.log(`Cantidad de Automotor ${contadorAutomotor} - ${totalAutomotor}`);
                    break;
                }

            // cuando venga una motocicleta
            case 4:{
                    contadorMotos++;
                    totalMotos = totalMotos + precioMotocicleta;
                    console.log(`Cantidad de Motos ${contadorMotos} - ${totalMotos}`);
                    break;
                }

            /* cuando el operador se equivoque e ingrese cualquier otro valor que no sea
                1,2,3 y 4
            */
            default:{
                    contadorErrores++;
                    console.log(`Cantidad de errores ${contadorErrores}`);
                    break;
                }
        }

        let totalCobrado = 0;

        totalCobrado = totalCamiones + totalCamionetas + totalAutomotor + totalMotos;

        console.log(`El Total Cobrado en la fecha es ${totalCobrado}`);

        continua = prompt("Desea continuar cobrando ? (SI/NO)");

        if(contadorAutomotor > contadorCamioneta)
        {
            console.log(`Pasaron mas Autos ${contadorAutomotor} que camionetas ${contadorCamioneta}`);
        }
        else
        {
            if(contadorAutomotor < contadorCamioneta)
            {
                console.log(`Pasaron mas Camionetas ${contadorCamioneta} que autos ${contadorAutos}`);
            }
            else
            {
                console.log("son iguales las cantidades");
            }
        }


    }

    console.log("Esto ocurriría al Cierre de Caja");


}

/*

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar
 los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, 
para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro
 y levantado de la barrera.

Los precios establecidos son los siguientes

•	1 CAMION = 22.000,00 PESOS
•	2 CAMIONETA = 12.000,00 PESOS
•	3 AUTOMOVIL = 4.000,00 PESOS
•	4 MOTOS = 1.500,00 PESOS

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.

•	Cantidad de AUTOS 
•	Total Cobrado de AUTOS

•	Cantidad de CAMIONETAS
•	Total de CAMIONETAS

•	Cantidad de AUTOMOVILES
•	Total de Automóviles

•	Cantidad de MOTOS
•	Total de MOTOS

•	Total GENERAL cobrado.

Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas.


*/