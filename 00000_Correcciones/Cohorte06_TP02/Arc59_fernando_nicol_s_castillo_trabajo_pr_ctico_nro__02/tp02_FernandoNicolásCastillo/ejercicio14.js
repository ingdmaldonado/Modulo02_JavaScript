/* Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los 
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
let ingresaOtroVehiculo = `S` ;
let vehiculo = 0;
let valorCamion = 22000;
let cantidadCamion = 0;
let totalCamion = 0;
let valorCamioneta = 12000;
let cantidadCamioneta = 0;
let totalCamioneta = 0;
let valorAuto = 4000;
let cantidadAuto = 0;
let totalAuto = 0;
let valorMoto = 1500;
let cantidadMoto = 0;
let totalMoto = 0;
let valorAPagar = 0;
let totalGeneral = 0;

while (ingresaOtroVehiculo === 'S' || ingresaOtroVehiculo === 's')
    {
    vehiculo = Number(prompt(`¿Que Vehiculo Ingresa?: (1)CAMION - (2)CAMIONETA - (3)AUTO - (4)MOTO`));
   
    switch (vehiculo)
        {
        case 1:
            {
            console.log (`Seleccionó Camión`);
            valorAPagar = (valorCamion);
            cantidadCamion = cantidadCamion +1;
            totalCamion = (cantidadCamion * valorCamion);
            console.log(`TOTAL A PAGAR: ${valorAPagar}`);
            break;}

         case 2:
           {
            console.log (`Seleccionó Camioneta`);
            valorAPagar = (valorCamioneta);
            cantidadCamioneta = cantidadCamioneta +1; 
            totalCamioneta = (cantidadCamioneta * valorCamioneta);    
            console.log(`TOTAL A PAGAR: ${valorAPagar}`);
            break;}
            
        case 3:
            console.log (`Seleccionó Auto`);
            {valorAPagar = (valorAuto);
            cantidadAuto = cantidadAuto +1;
            totalAuto = (cantidadAuto * valorAuto);
            console.log(`TOTAL A PAGAR: ${valorAPagar}`);
            break;}

        case 4:
            console.log (`Seleccionó Moto`);
            {valorAPagar = (valorMoto);
            cantidadMoto = cantidadMoto +1;
            totalMoto = (cantidadMoto * valorMoto);
            console.log(`TOTAL A PAGAR: ${valorAPagar}`);
            break;}
        
        default:
            {console.log('Ingrese una Valor Válido. Gracias'); 
            break;}
         }
    
    ingresaOtroVehiculo = prompt (`Ingresa Otro Vehículo? S/N`); 
    }
    {
    totalGeneral = (totalCamion + totalCamioneta + totalAuto + totalMoto);
    console.log("CIERRE")
    console.log(`CANTIDAD CAMIONES: ${cantidadCamion} // TOTAL COBRADO CAMIONES: ${totalCamion}`);
    console.log(`CANTIDAD CAMIONETAS: ${cantidadCamioneta} // TOTAL COBRADO CAMIONETAS: ${totalCamioneta}`);
    console.log(`CANTIDAD AUTOS: ${cantidadAuto} // TOTAL COBRADO AUTOS: ${totalAuto}`);
    console.log(`CANTIDAD MOTOS: ${cantidadMoto} // TOTAL COBRADO MOTOS: ${totalMoto}`);    
    }
    
    if (cantidadAuto > cantidadCamioneta)
        console.log(`Pasaron más autos (${cantidadAuto}) que camionetas (${cantidadCamioneta})`) ;
    else if(cantidadAuto < cantidadCamioneta)
        console.log(`Pasaron más camionetas (${cantidadCamioneta}) que autos (${cantidadAuto})`);
    else if(cantidadAuto === cantidadCamioneta)
        console.log(`pasaron la misma cantidad de autos (${cantidadAuto}) y camionetas (${cantidadCamioneta})`); 
    
} 



