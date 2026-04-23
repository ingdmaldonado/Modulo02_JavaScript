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