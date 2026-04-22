/*
let cantAutos = 0 
let totalAutos = 0;
let cantCamionetas = 0
let totalCamionetas = 0;
let cantCamiones = 0
let totalCamiones = 0;
let cantMotos = 0
let totalMotos = 0;

let continuar = true;

while (continuar) {
    let tipo = prompt("Ingrese el tipo de vehículo:\n1 - CAMION\n2 - CAMIONETA\n3 - AUTOMOVIL\n4 - MOTOS\n0 - CERRAR JORNADA")
} 

switch (tipo) {
    case "1":
        cantCamiones++;
        totalCamiones += 22000;
        alert("Barrera levantada. Cobre: $22.000");
        break;
        
    case "2":
        cantCamionetas++;
        totalCamionetas += 12000;
        alert("Barrera levantada. Cobre: $12.000");
        break;
        
    case "3":
        cantAutos++;
        totalAutos += 4000;
        alert("Barrera levantada. Cobre: $4.000");
        break;
        
    case "4":
        cantMotos++;
        totalMotos += 1500;
        alert("Barrera levantada. Cobre: $1.500");
        break;
        
    case "0":
        continuar = false;
        break;
        
    default:
        alert("Opcion no valida. Intente de nuevo.")
}

let totalGeneral = totalAutos + totalCamiones + totalCamionetas + totalMotos;

console.log("---CIERRE DE LA JORNADA---")
console.log("Cantidad de CAMIONES:" + cantCamiones);
console.log("Total cobrado en CAMIONES: $" + totalCamiones);
console.log("Cantidad de CAMIONESTAS:" + cantCamionetas);
console.log("Total cobrado en CAMIONESTAS: $" + totalCamionetas);
console.log("Cantidad de AUTOMOVILES:" + cantAutos);
console.log("Total cobrado en AUTOMOVILES: $" + totalAutos);
console.log("Cantidad de MOTOS:" + cantMotos);
console.log("Total cobrado en MOTOS: $" + totalMotos);
console.log("---TOTAL GENERAL COBRADO: $" + totalGeneral);

if(cantAutos > cantCamionetas) {
    console.log("Pasaron mas camiones que autos");
} else if(cantCamionetas > cantAutos) {
    console.log("Pasaron mas autos que camionetas");
} else {
    console.log("Pasaron la misma cantidad de autos que camionestas");
}
    */

let cantAutos = 0;
let totalAutos = 0;
let cantCamionetas = 0;
let totalCamionetas = 0;
let cantCamiones = 0;
let totalCamiones = 0;
let cantMotos = 0;
let totalMotos = 0;

let continuar = true;

while (continuar) {
    let tipo = prompt("Ingrese el tipo de vehículo:\n1 - CAMION\n2 - CAMIONETA\n3 - AUTOMOVIL\n4 - MOTO\n0 - CERRAR JORNADA");

    switch (tipo) {
        case "1":
            cantCamiones++;
            totalCamiones += 22000;
            alert("Barrera levantada. Cobre: $22.000");
            break;

        case "2":
            cantCamionetas++;
            totalCamionetas += 12000;
            alert("Barrera levantada. Cobre: $12.000");
            break;

        case "3":
            cantAutos++;
            totalAutos += 4000;
            alert("Barrera levantada. Cobre: $4.000");
            break;

        case "4":
            cantMotos++;
            totalMotos += 1500;
            alert("Barrera levantada. Cobre: $1.500");
            break;

        case "0":
            continuar = false;
            break;

        default:
            alert("Opción no válida. Intente de nuevo.");
    }
}

let totalGeneral = totalAutos + totalCamiones + totalCamionetas + totalMotos;

console.log("--- CIERRE DE LA JORNADA ---");
console.log("Cantidad de CAMIONES: " + cantCamiones);
console.log("Total cobrado en CAMIONES: $" + totalCamiones);
console.log("Cantidad de CAMIONETAS: " + cantCamionetas);
console.log("Total cobrado en CAMIONETAS: $" + totalCamionetas);
console.log("Cantidad de AUTOMOVILES: " + cantAutos);
console.log("Total cobrado en AUTOMOVILES: $" + totalAutos);
console.log("Cantidad de MOTOS: " + cantMotos);
console.log("Total cobrado en MOTOS: $" + totalMotos);
console.log("TOTAL GENERAL: $" + totalGeneral);

// Comparación correcta
if (cantAutos > cantCamionetas) {
    console.log("Pasaron más autos que camionetas");
} else if (cantCamionetas > cantAutos) {
    console.log("Pasaron más camionetas que autos");
} else {
    console.log("Pasaron la misma cantidad de autos y camionetas");
}