/*Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes:

 CAMION = 22.000,00 PESOS
 CAMIONETA = 12.000,00 PESOS
 AUTOMOVIL = 4.000,00 PESOS
 MOTOS = 1.500,00 PESOS


La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información:


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
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.*/

{







    contadorAuto = 0;
    contadorCamioneta = 0;
    contadorCamion = 0;
    contadorMoto = 0;

    totalAuto=0;
    totalCamionetas=0;
    totalCamiones=0;
    totalMotos=0;

    ingresoRodado = "S";
    ingresoTipoVehiculo = 0;

    ingresoRodado = prompt(`Desea ingresar un vehiculo? S/ N`);







    while (ingresoRodado === `S` || ingresoRodado === `s`) {
        ingresoTipoVehiculo = Number(prompt(`Ingrese Tipo de vehiculo: 1- Auto, 2- Camioneta, 3- Automoviles y 4- Motos.`));



        switch (ingresoTipoVehiculo) {

            case 1:
                {
                    console.log('Usted selecciono Auto');

                    contadorAuto = contadorAuto + 1;
                    totalAuto=totalAuto + 4000;

                    break;
                }
            case 2:
                {
                    console.log('Usted selecciono Camioneta');

                    contadorCamioneta = contadorCamioneta + 1;
                    totalCamionetas=totalCamionetas + 12000;

                    break;
                }
            case 3:
                {
                    console.log('Usted selecciono Camiones');

                    contadorCamion = contadorCamion + 1;
                    totalCamiones=totalCamiones + 22000;

                    break;
                }
            case 4:
                {
                    console.log('Usted selecciono Moto');

                    contadorMoto = contadorMoto + 1;
                    totalMotos=totalMotos + 1500;

                    break;

                }
            default:
                {
                    console.log(`El valor ingresado es incorrecto, vuelva a intentarlo.`)

                }
            }

                ingresoRodado = prompt(`Dese ingresar otro vehiculo? S/N`)
        }


        console.log(`El total de autos ingresados es: ${contadorAuto}`);
        console.log(`El total de camionetas ingresados es: ${contadorCamioneta}`);
        console.log(`El total de Camiones ingresados es: ${contadorCamion}`);
        console.log(`El total de motos ingresados es: ${contadorMoto}`);

        if (contadorAuto === contadorCamioneta)
        {
            console.log (`Ingresaron misma cantidad de autos y camionestas`)
        }
        else if (contadorAuto > contadorCamioneta)
        {
            console.log (`Ingresaron más autos que camionetas.`)
        }
        else
        {
            console.log (`Ingresaron más camionestas que autos`)
        }

            
    

        console.log(`El total recaudado de autos es: $${totalAuto}`);
        console.log(`El total recaudado de camionestas es: $${totalCamionetas}`);
        console.log(`El total recaudado de camiones es: $${totalCamiones}`);
        console.log(`El total recaudado de motos es: $${totalMotos}`);

    
}
