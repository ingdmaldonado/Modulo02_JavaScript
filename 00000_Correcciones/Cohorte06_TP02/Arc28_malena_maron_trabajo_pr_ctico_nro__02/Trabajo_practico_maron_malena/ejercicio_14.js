/*Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los 
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
cantidad. Compare estas cantidades únicamente entre autos y camionetas. */

{ 
    let cantCamion = 0;
    let cantCamioneta = 0;
    let cantAuto = 0;
    let cantMoto = 0;
    let totalCamion = 0;
    let totalCamioneta = 0;
    let totalAuto = 0;
    let totalMoto = 0;
    let finalJornada = 0;
    let seguirCargando = "s";

    while (seguirCargando === "s") {

        let opcion = Number(prompt(`Ingrese tipo de vehiculo:1. Camión (22000)2. Camioneta (12000)3. Auto (4000)4. Moto (1500)`));

        switch (opcion) {
         case 1:{
            cantCamion++;
            totalCamion += 22000;
            finalJornada += 22000;
            break;
        }
         case 2:{
            cantCamioneta++;
            totalCamioneta += 12000;
            finalJornada += 12000;
            break;
        }

         case 3:{
            cantAuto++;
            totalAuto += 4000;
            finalJornada += 4000;
            break;
        }

        case 4:{
            cantMoto++;
            totalMoto += 1500;
            finalJornada += 1500;
            break;
        }

            default:
            console.log("Opción incorrecta");
            break;
    }

    seguirCargando = prompt("¿Desea ingresar otro vehículo? s/n");
}

    console.log(`Cantidad de camiones: ${cantCamion}`);
    console.log(`Total de camiones: ${totalCamion}`);
    console.log(`Cantidad de camionetas: ${cantCamioneta}`);
    console.log(`Total de camionetas: ${totalCamioneta}`);
    console.log(`Cantidad de autos: ${cantAuto}`);
    console.log(`Total de autos: ${totalAuto}`);
    console.log(`Cantidad de motos: ${cantMoto}`);
    console.log(`Total de motos: ${totalMoto}`);
    console.log(`Total de la jornada: ${finalJornada}`);
}
