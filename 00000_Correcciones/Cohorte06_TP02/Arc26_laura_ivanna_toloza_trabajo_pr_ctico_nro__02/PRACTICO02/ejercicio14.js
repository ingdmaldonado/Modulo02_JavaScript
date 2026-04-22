/* Ejercicio Nro. 14:
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
DOM y cargar los datos de entrada por medio de prompt. */

let cantidadAutos = 0;
let totalCobradoAutos = 0;
let cantidadCamionetas = 0;
let totalCobradoCamionetas = 0;
let cantidadCamiones = 0;
let totalCobradoCamiones = 0;
let cantidadMotos = 0;
let totalCobradoMotos = 0;
let totalGeneralCobrado = 0;
let continua = "s";

while (continua !== "n") {
    let vehiculo = Number(prompt(`Ingrese el tipo de vehiculo: auto: 1, camioneta: 2, camion: 3, moto: 4`));
    switch (vehiculo) {
        case 1: 
        cantidadAutos ++;
        totalCobradoAutos += 4000;
        break;
        case 2:
        cantidadCamionetas ++;
        totalCobradoCamionetas += 12000;
        break;
        case 3:
        cantidadCamiones ++;
        totalCobradoCamiones += 22000;
        break;
        case 4:
        cantidadMotos ++;
        totalCobradoMotos += 1500;
        break;
        default:
        alert(`Tipo de vehiculo no valido`);
    }
    continua = (prompt(`Desea continuar s/n))`)).toLowerCase();
}
totalGeneralCobrado = totalCobradoAutos + totalCobradoCamionetas + totalCobradoCamiones + totalCobradoMotos;
console.log(`Cantidad de AUTOS: ${cantidadAutos}`);
console.log(`Total Cobrado de AUTOS: ${totalCobradoAutos}`);
console.log(`Cantidad de CAMIONETAS: ${cantidadCamionetas}`); 
console.log(`Total de CAMIONETAS: ${totalCobradoCamionetas}`);
console.log(`Cantidad de CAMIONES: ${cantidadCamiones}`);
console.log(`Total de CAMIONES: ${totalCobradoCamiones}`);
console.log(`Cantidad de MOTOS: ${cantidadMotos}`);
console.log(`Total de MOTOS: ${totalCobradoMotos}`);
console.log(`Total GENERAL cobrado: ${totalGeneralCobrado}`);

if (cantidadAutos > cantidadCamionetas) {
    console.log(`Pasaron más autos que camionetas`);
}   else if (cantidadCamionetas > cantidadAutos) {
    console.log(`Pasaron más camionetas que autos`);
}   else{
    console.log(`Pasaron la misma cantidad de autos y camionetas`);
}