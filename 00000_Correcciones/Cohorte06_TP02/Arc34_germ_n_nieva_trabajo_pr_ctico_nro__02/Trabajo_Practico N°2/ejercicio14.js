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


let cantidadAutos=0;
let totalAutos=0;
let cantidadCamionetas=0;
let totalCamionetas=0;
let cantidadCamiones=0;
let totalCamiones=0;
let cantidadMotos=0;
let totalMotos=0;
let totalGeneral=0;

let tipoVehiculo=Number(prompt("Ingrese el tipo de vehículo: 1:Auto 2:Camioneta 3:Camión 4:Moto 5:Finalizar"));
while(tipoVehiculo!= 5){
    switch(tipoVehiculo){
        case 1:
            cantidadAutos++;
            totalAutos+=4000;
            break;
        case 2:
            cantidadCamionetas++;
            totalCamionetas+=12000;
            break;
        case 3:
            cantidadCamiones++;
            totalCamiones+=22000;
            break;
        case 4:
            cantidadMotos++;
            totalMotos+=1500;
            break;
    }
    tipoVehiculo=Number(prompt("Ingrese una opcion si desea continuar o ingrese 5 para finalizar. 1:Auto 2:Camioneta 3:Camión 4:Moto 5:Finalizar"));
}
totalGeneral=totalAutos+totalCamionetas+totalCamiones+totalMotos;
console.log("Cantidad de Autos: "+cantidadAutos);
console.log("Total Cobrado de Autos: "+totalAutos);
console.log("Cantidad de Camionetas:"+cantidadCamionetas);
console.log("Total de Camionetas: "+totalCamionetas);
console.log("Cantidad de Camiones: "+cantidadCamiones);
console.log("Total de Camiones: "+totalCamiones);
console.log("Cantidad de Motos: "+cantidadMotos);
console.log("Total de Motos: "+totalMotos);
console.log("Total General Cobrado: "+totalGeneral);
if(cantidadAutos>cantidadCamionetas){
    console.log("Pasaron más autos que camionetas");
}else if(cantidadAutos<cantidadCamionetas){
    console.log("Pasaron más camionetas que autos");
}else{
    console.log("Pasaron la misma cantidad de autos y camionetas");
}

