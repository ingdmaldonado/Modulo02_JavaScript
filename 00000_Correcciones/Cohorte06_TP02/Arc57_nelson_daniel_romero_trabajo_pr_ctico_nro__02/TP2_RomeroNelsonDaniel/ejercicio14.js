const precioCamion = 22000;
const precioCamioneta = 12000;
const precioAutomovil = 4000;
const precioMoto = 1500;

let cantidadCamiones = 0;
let totalCobradoCamiones = 0;
let cantidadCamionetas = 0;
let totalCobradoCamionetas = 0;
let cantidadAutomoviles = 0;
let totalCobradoAutomoviles = 0;
let cantidadMotos = 0;
let totalCobradoMotos = 0;

let cobroGeneralTotal = 0;
let vehiculoEntrante = 0;
let continuar = "s";

while (continuar === "s" || continuar === "S") {
    vehiculoEntrante = Number(prompt("Seleccione vehículo entrante: 1-Camion, 2-Camioneta, 3-Automovil, 4-Moto"));

    switch (vehiculoEntrante) {
        case 1:
            cantidadCamiones++;
            totalCobradoCamiones += precioCamion;
            break;
        case 2:
            cantidadCamionetas++;
            totalCobradoCamionetas += precioCamioneta;
            break;
        case 3:
            cantidadAutomoviles++;
            totalCobradoAutomoviles += precioAutomovil;
            break;
        case 4:
            cantidadMotos++;
            totalCobradoMotos += precioMoto;
            break;
        default:
            console.log("Ingrese un vehículo válido");
            break;
    }

    continuar = prompt("¿Desea ingresar otro vehículo? S/N");
}

console.log("Cantidad de camiones:", cantidadCamiones);
console.log("Total cobrado en camiones:", totalCobradoCamiones);
console.log("-------------------------------------------------");
console.log("Cantidad de camionetas:", cantidadCamionetas);
console.log("Total cobrado en camionetas:", totalCobradoCamionetas);
console.log("-------------------------------------------------");
console.log("Cantidad de automóviles:", cantidadAutomoviles);
console.log("Total cobrado en automóviles:", totalCobradoAutomoviles);
console.log("-------------------------------------------------");
console.log("Cantidad de motos:", cantidadMotos);
console.log("Total cobrado en motos:", totalCobradoMotos);
console.log("-------------------------------------------------");

cobroGeneralTotal = totalCobradoAutomoviles + totalCobradoCamiones + totalCobradoCamionetas + totalCobradoMotos;
console.log("Total general cobrado:", cobroGeneralTotal);
console.log("-------------------------------------------------");

if (cantidadAutomoviles == cantidadCamionetas) {
    console.log(`Ingresaron la misma cantidad de automóviles que camionetas: ${cantidadAutomoviles} automóviles, ${cantidadCamionetas} camionetas`);
} else {
    if(cantidadAutomoviles > cantidadCamionetas)
    {
        console.log(`Ingresaron más automóviles que camionetas: ${cantidadAutomoviles} automóviles, ${cantidadCamionetas} camionetas`);
    }
    else
    {
        console.log(`Ingresaron más camionetas que automóviles: ${cantidadCamionetas} camionetas, ${cantidadAutomoviles} automóviles`);
    }
}