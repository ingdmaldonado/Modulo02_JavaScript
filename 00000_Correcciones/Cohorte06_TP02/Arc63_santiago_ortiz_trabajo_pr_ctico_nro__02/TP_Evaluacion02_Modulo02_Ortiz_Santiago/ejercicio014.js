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
cantidad. Compare estas cantidades únicamente entre autos y camionetas. */

// Variables definidas.
let camion = 22000.00;
let camioneta = 12000.00;
let automovil = 4000.00;
let motos = 1500.00;

// Cantidades

let cantidadCamion = 0;
let cantidadCamioneta = 0;
let cantidadAutomovil = 0;
let cantidadMotos = 0;

// Acumuladores. 

let totalCamion = 0;
let totalCamioneta = 0;
let totalAutomovil = 0;
let totalMotos = 0;
let totalGeneral = 0;

// Operaciones

let continuarlaCobranza = "si"

do {

let vehiculo = prompt("Elija el tipo de vehiculo: CAMION/CAMIONETA/AUTOMOVIL/MOTOS").toLowerCase();

if(vehiculo === "camion".toLowerCase()) {
    console.log ("Precio del camion:   " + camion);
    totalCamion += camion;
} else if (vehiculo === "camioneta".toLowerCase()) {
    console.log ("Precio de la camioneta:   " + camioneta);
    totalCamioneta += camioneta;
} else if (vehiculo === "automovil".toLowerCase()) {
    console.log ("Precio del automovil: " + automovil) 
    totalAutomovil += automovil;
} else if (vehiculo === "motos".toLowerCase()) {
    console.log ("Precio del automovil: " + motos) 
    totalMotos += motos;
}
    else {
        console.log ("Vehiculo no registrado.")
    }


continuarlaCobranza = prompt("Desea continuar? SI/NO".toLowerCase())
} while (continuarlaCobranza === "si".toLowerCase()); 

console.log("Cantidad de camiones:", cantidadCamion);
console.log("Total camiones:", totalCamion);

console.log("Cantidad de camionetas:", cantidadCamioneta);
console.log("Total camionetas:", totalCamioneta);

console.log("Cantidad de automóviles:", cantidadAutomovil);
console.log("Total automóviles:", totalAutomovil);

console.log("Cantidad de motos:", cantidadMotos);
console.log("Total motos:", totalMotos);

console.log("TOTAL GENERAL:", totalGeneral);

// Comparaciones

if (cantidadCamioneta > cantidadAutomovil) {

    console.log("Pasaron más camionetas.");

} else if (cantidadAutomovil > cantidadCamioneta) {

    console.log("Pasaron más automóviles.");

} else {

    console.log("Pasó la misma cantidad.");

}