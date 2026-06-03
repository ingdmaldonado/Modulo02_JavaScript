/*Ejercicio Nro. 14: 
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
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt. 

Me pide 
    -compar si pasaron mas camionetas o mas autos
    -al final de la jornada mostrar 
 Cantidad de AUTOS  
 Total Cobrado de AUTOS 

        Esta mal aqui, va camion o camionetas, no autos, ya esta la opcion de automoviles    

 Cantidad de CAMIONETAS 
 Total de CAMIONETAS 
 Cantidad de AUTOMOVILES 
 Total de Automoviles 
 Cantidad de MOTOS 
 Total de MOTOS 
 Total GENERAL cobrado. 
*/

{
    let camion = 22000;
    let camioneta = 12000;
    let automovil = 4000; 
    let motos = 1500;
    let transporte = 0;

    let cantidadCamiones = 0;
    let totalCobradoCamiones = 0;

    let cantidadCamionetas = 0; 
    let totalCobradoCamionetas = 0; 

    let cantidadAutomoviles = 0; 
    let totalCobradoAutomoviles = 0; 

    let cantidadMotos = 0;
    let totalCobradoMotos = 0;

    let totalGeneralCobrado = 0;
    let continuar = `S`;

    while(continuar == `S`)
    {

        transporte = Number(prompt(`Indique su medio de transporte: 1.Camion - 2.Camioneta - 3.Automovil - 4.Moto`));

        switch(transporte)
        {
            case 1:
            {
                cantidadCamiones = cantidadCamiones + 1;
                totalCobradoCamiones = totalCobradoCamiones + camion; // aqui anidamos cada camion que pase, lo mismo para los otros
                console.log(`Camion registrado`); // aqui mostramos el ticket, que fue registrado
                break;
            }
            case 2:
            {
                cantidadCamionetas = cantidadCamionetas + 1;
                totalCobradoCamionetas = totalCobradoCamionetas + camioneta;
                console.log(`Camioneta registrada`);
                break;
            }
            case 3:
            {
                cantidadAutomoviles = cantidadAutomoviles + 1;
                totalCobradoAutomoviles = totalCobradoAutomoviles + automovil;
                console.log(`Automovil registrado`);
                break;
            }
            case 4:
            {
                cantidadMotos = cantidadMotos + 1;
                totalCobradoMotos = totalCobradoMotos + motos;
                console.log(`Moto registrada`);
                break;
            }
            default:
            {
                console.log(`Opcion invalida`);
                break;
            }
        }
        continuar = prompt(`quiere continuar (S/N)`);
    }

    console.log(`Cantidad de Camiones: ${cantidadCamiones}`);
    console.log(`Total Camiones: ${totalCobradoCamiones}`);

    console.log(`Cantidad de Camionetas: ${cantidadCamionetas}`);
    console.log(`Total Camionetas: ${totalCobradoCamionetas}`);

    console.log(`Cantidad de Automoviles: ${cantidadAutomoviles}`);
    console.log(`Total Automoviles: ${totalCobradoAutomoviles}`);

    console.log(`Cantidad de Motos: ${cantidadMotos}`);
    console.log(`Total Motos: ${totalCobradoMotos}`);

    totalGeneralCobrado = (totalCobradoCamiones + totalCobradoCamionetas + totalCobradoAutomoviles + totalCobradoMotos)
    console.log(`Total General Cobrado: ${totalGeneralCobrado}`);

    if(cantidadAutomoviles > cantidadCamionetas)
    {
        console.log(`Pasaron mas automoviles que camionetas`);
    }
    if(cantidadAutomoviles < cantidadCamionetas)
    {
        console.log(`Pasaron mas camionetas que automoviles`);
    }
    if(cantidadAutomoviles === cantidadCamionetas)
        //TUVE PROBLEMAS POR PONER = Y NO === QUE ERA LA FORMA CORRECTA 
    {
        console.log(`Paso la misma cantidad de automoviles y camionetas`);
    }
    
}

