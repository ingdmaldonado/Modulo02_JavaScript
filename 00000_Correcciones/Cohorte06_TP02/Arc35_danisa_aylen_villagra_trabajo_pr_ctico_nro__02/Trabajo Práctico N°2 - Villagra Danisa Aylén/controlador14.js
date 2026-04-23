/*Ejercicio Nro. 14: 
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera. 

Los precios establecidos son los siguientes:
CAMION = 22.000,00 PESOS 
CAMIONETA = 12.000,00 PESOS 
AUTOMOVIL = 4.000,00 PESOS 
MOTOS = 1.500,00 PESOS 

La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información. 
- Cantidad de AUTOS  
- Total Cobrado de AUTOS 
- Cantidad de CAMIONETAS 
- Total de CAMIONETAS 
- Cantidad de AUTOMOVILES 
- Total de Automóviles 
- Cantidad de MOTOS 
- Total de MOTOS 
- Total GENERAL cobrado. 

Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma cantidad. Compare estas cantidades únicamente entre autos y camionetas. 

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.*/
{
    let opcion = Number(prompt(
    "Ingrese tipo de vehículo: 1 - Camión; 2 - Camioneta; 3 - Automóvil; 4 - Moto; 0 - Finalizar"));

    let contadorAutos = 0;
    let contadorCamionetas = 0;
    let contadorCamiones = 0;
    let contadorMotos = 0;

    let totalAutos = 0;
    let totalCamionetas = 0;
    let totalCamiones = 0;
    let totalMotos = 0;

    let totalGeneral = 0;

    // Mientras el usuario no ingrese 0
    while(opcion !== 0) 
        {

            switch(opcion) 
            {
                case 1:
                    {
                        contadorCamiones= contadorCamiones + 1;
                        totalCamiones = totalCamiones + 22000;
                        break;
                    }
                

                case 2:
                    {
                        contadorCamionetas = contadorCamionetas + 1;
                        totalCamionetas = totalCamionetas + 12000;
                        break;
                    }

                case 3:
                    {
                        contadorAutos = contadorAutos + 1;
                        totalAutos = totalAutos + 4000;
                        break;
                    }
            
                case 4:
                    {
                        contadorMotos = contadorMotos + 1;
                        totalMotos = totalMotos + 1500;
                        break;
                    }
            
                default:
                    {
                        alert("Opción inválida");
                    }
            
            }

            // Volvemos a pedir la opción dentro del ciclo
            opcion = Number(prompt("Ingrese tipo de vehículo: 1 - Camión; 2 - Camioneta; 3 - Automóvil; 4 - Moto; 0 - Finalizar"));
        }

    // Calculo del total de los vehículos
    totalGeneral = totalAutos + totalCamionetas + totalCamiones + totalMotos;

    // Mostrar resultados
    console.log("AUTOS:", contadorAutos, "Total:", totalAutos);

    console.log("CAMIONETAS:", contadorCamionetas, "Total:", totalCamionetas);

    console.log("CAMIONES:", contadorCamiones, "Total:", totalCamiones);

    console.log("MOTOS:", contadorMotos, "Total:", totalMotos);

    console.log("TOTAL GENERAL:", totalGeneral);

    // Comparación entre autos y camionetas
    if (contadorAutos > contadorCamionetas) 
        {
            console.log("Pasaron más autos que camionetas.");
        } 
        else if (contadorCamionetas > contadorAutos) 
            {
                console.log("Pasaron más camionetas que autos.");
            }
    else 
        {
            console.log("Pasaron la misma cantidad de autos y camionetas.");
        }
}