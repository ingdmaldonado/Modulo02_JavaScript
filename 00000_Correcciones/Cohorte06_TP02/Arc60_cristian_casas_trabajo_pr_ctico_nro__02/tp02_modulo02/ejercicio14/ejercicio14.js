/*
Ejercicio Nro. 14:
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
*/

// cantidad de vehiculos
let cantidadAutos=0;
let cantidadCamionetas=0;
let cantidadCamiones=0;
let cantidadMotos=0;

// total por vehiculo
let totalAutos=0;
let totalCamionetas=0;
let totalCamiones=0;
let totalMotos=0;
let totalGeneral=0;

// precios establecidos
const precioCamion=22000;
const precioCamioneta=12000;
const precioAutomovil=4000;
const precioMoto=1500;

// operaciones
let continuar=true;
while(continuar){
    let tipoVehiculo=Number(prompt(`Ingrese el tipo de vehículo: (1) CAMION (2) CAMIONETA (3) AUTOMOVIL (4) MOTO (0) SALIR para finalizar:`));
    
    switch(tipoVehiculo){
        case 1:
            cantidadCamiones++;
            totalCamiones+=precioCamion;
            console.log("CAMIÓN registrado");
            break;
        case 2:
            cantidadCamionetas++;
            totalCamionetas+=precioCamioneta;
            console.log("CAMIONETA registrada");
            break;
        case 3:
            cantidadAutos++;
            totalAutos+=precioAutomovil;
            console.log("AUTOMÓVIL registrado");
            break;
        case 4:
            cantidadMotos++;
            totalMotos+=precioMoto;
            console.log("MOTO registrada");
            break;
        case 0:
            continuar=false;
            break;
        default:
            console.log("Error: Opción no válida. Intente nuevamente.");
    }
}    

// total general cobrado
totalGeneral=totalCamiones+totalCamionetas+totalAutos+totalMotos;

// cierre de caja
console.log(`========== CIERRE DE JORNADA ==========`);
console.log(`Cantidad de CAMIONES: ${cantidadCamiones}`);
console.log(`Total Cobrado de CAMIONES: $${totalCamiones}`);
console.log(`Cantidad de CAMIONETAS: ${cantidadCamionetas}`);
console.log(`Total Cobrado de CAMIONETAS: $${totalCamionetas}`);
console.log(`Cantidad de AUTOMÓVILES: ${cantidadAutos}`);
console.log(`Total Cobrado de AUTOMÓVILES: $${totalAutos}`);
console.log(`Cantidad de MOTOS: ${cantidadMotos}`);
console.log(`Total Cobrado de MOTOS: $${totalMotos}`);
console.log(`========================================`);
console.log(`TOTAL GENERAL COBRADO: $${totalGeneral}`);
console.log(`========================================`);

// Comparación entre AUTOS y CAMIONETAS
console.log(`COMPARACIÓN AUTOS vs CAMIONETAS:`);
if(cantidadAutos > cantidadCamionetas){
    console.log(`Pasaron ${cantidadAutos - cantidadCamionetas} más AUTOMÓVILES que CAMIONETAS.`);
}
else if(cantidadCamionetas > cantidadAutos){
    console.log(`Pasaron ${cantidadCamionetas - cantidadAutos} más CAMIONETAS que AUTOMÓVILES.`);
}
else{
    console.log(`Pasó la misma cantidad de AUTOMÓVILES y CAMIONETAS.`);
}
console.log(`Total de MOTOS: $${totalMotos}`);
console.log(`Total GENERAL cobrado: $${totalGeneral}`);
