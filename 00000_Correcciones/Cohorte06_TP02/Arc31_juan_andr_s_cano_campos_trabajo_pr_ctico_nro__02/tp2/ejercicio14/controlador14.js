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
cantidad. Compare estas cantidades únicamente entre autos y camionetas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.*/


let camion = 22000;
let camioneta = 12000;
let auto = 4000;
let motos = 1500;


let cantidadTotal = 0;
let cantidadAuto = 0;
let cantidadCamionetas = 0;
let cantidadCamion = 0;
let cantidadMotos = 0;
let totalCobrado = 0;



let pasaje = "s";

while (pasaje === "s" || pasaje === "S"){
    let vehiculo = prompt("Que tipo de Vehiculo es (1-moto,2-auto,3-camioneta,4-camion): ")
    if (vehiculo == 1){
        cantidadMotos += 1;
    }
    else if (vehiculo == 2){
        cantidadAuto += 1;
    }
    else if (vehiculo == 3){
        cantidadCamionetas += 1;
    }
    else if (vehiculo == 4) {
        cantidadCamion += 1;
    }
    else {
        console.log("Error...")
        let vehiculo = prompt("Que tipo de Vehiculo es (1-moto,2-auto,3-camioneta,4-camion): ")
    }

    pasaje = prompt("Hay mas vehiculos (s o n): ");
    
}
if ( cantidadAuto > cantidadCamionetas){
    console.log("Pasaron mas autos que camionetas");

}
else if ( cantidadAuto < cantidadCamionetas){
    console.log("Pasaron mas camionetas que autos");
}
else{
    console.log("pasaron la misma cantidad de caminetas y autos")
}

totalCobrado = (cantidadAuto*auto)+(cantidadMotos*motos)+(cantidadCamionetas*camioneta)+(cantidadCamion*camion);

console.log("La Cantidad de Moto que pasaron por el peajes fueron", cantidadMotos);
console.log("El monto total de Motos que pasaron por el peaje es de: $", cantidadMotos * motos);
console.log("La Cantidad de Autos que pasaron por el peajes fueron", cantidadAuto);
console.log("El monto total de autos que pasaron por el peaje es de: $", cantidadAuto * auto);
console.log("La Cantidad de camioneta que pasaron por el peajes fueron", cantidadCamionetas);
console.log("El monto total de camionetas que pasaron por el peaje es de: $", cantidadCamionetas * camioneta);
console.log("La Cantidad de camones que pasaron por el peajes fueron", cantidadCamion);
console.log("El monto total de autos que pasaron por el peaje es de: $", cantidadCamion * camion);
console.log(`El total cobrado es:${totalCobrado}`);
