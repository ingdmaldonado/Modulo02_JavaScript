/*  Ejercicio Nro. 14:
Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes
 CAMION = 22.000,00 PESOS
 CAMIONETA = 12.000,00 PESOS
 AUTOMOVIL = 4.000,00 PESOS
 MOTOS = 1.500,00 PESOS
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el cierre donde le deberá mostrar la siguiente información.
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
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt. */

{
    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAutomovil = 4000;
    let precioMoto = 1500;

    let cantCamiones = 0;
    let totalCamiones = 0;
    let cantCamionetas = 0;
    let totalCamionetas = 0;
    let cantAutos = 0;
    let totalAutos = 0;
    let cantMotos = 0;
    let totalMotos = 0;

    let continua = `S`;
    let opcion = 0;

    while (continua === `S` || continua === `s`)
    {
        let opcion = Number(prompt(`Ingrese el tipo de vehículo:\n1 - CAMION\n2 - CAMIONETA\n3 - AUTOMOVIL\n4 - MOTO`));
        switch (opcion) 
        {
            case 1: // CAMION
            {
                cantCamiones++;
                totalCamiones += precioCamion;
                break;
            }
            case 2: // CAMIONETA
            {
                cantCamionetas++;
                totalCamionetas += precioCamioneta;
                break;
            }
            case 3: // AUTOMOVIL
            {
                cantAutos++;
                totalAutos += precioAutomovil;
                break;
            }
            case 4: // MOTO
            {
                cantMotos++;
                totalMotos += precioMoto;
                break;
            }
            default:
            {
                console.log(`Opción inválida. Intente nuevamente.`);
                break;
            }
        }
        continua = prompt(`Desea Continuar ?. (S/N)`); 
    }
    let totalGeneral = totalCamiones + totalCamionetas + totalAutos + totalMotos;

    console.log(`Cantidad de CAMIONES: ${cantCamiones} - Total: $${totalCamiones}`);
    console.log(`Cantidad de CAMIONETAS: ${cantCamionetas} - Total: $${totalCamionetas}`);
    console.log(`Cantidad de AUTOMOVILES: ${cantAutos} - Total: $${totalAutos}`);
    console.log(`Cantidad de MOTOS: ${cantMotos} - Total: $${totalMotos}`);
    console.log(`TOTAL GENERAL: $ ${totalGeneral}`);

    if (cantCamionetas > cantAutos)
    {
        console.log(`Pasaron más CAMIONETAS que AUTOMOVILES.`);
    } 
    else 
    {
        if (cantAutos > cantCamionetas) 
        {
            console.log(`Pasaron más AUTOMOVILES que CAMIONETAS.`);
        } 
        else 
        {
            console.log(`Pasaron la misma cantidad de AUTOMOVILES y CAMIONETAS.`);
        }
    }
}