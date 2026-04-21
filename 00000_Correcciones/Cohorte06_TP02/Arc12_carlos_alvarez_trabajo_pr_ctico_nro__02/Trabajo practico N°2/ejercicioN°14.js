// Ejercicio N° 14


let cantidadCamion = 0;
let cantidadCamioneta = 0;
let cantidadAutomovil = 0;
let cantidadMoto = 0;

let totalCamion = 0;
let totalCamioneta = 0;
let totalAutomovil = 0;
let totalMoto = 0;

let continuar = "s";

const PRECIO_CAMION = 22000;
const PRECIO_CAMIONETA = 12000;
const PRECIO_AUTOMOVIL = 4000;
const PRECIO_MOTO = 1500;

while (continuar === "s" || continuar === "S") {
    let tipo = prompt("Ingrese el tipo de vehículo (1, 2, 3, 4):");
    switch(tipo) {
        case "1":
            cantidadCamion++;
            totalCamion += PRECIO_CAMION;
            alert("Cobro: $" + PRECIO_CAMION);
            break;
        case "2":
            cantidadCamioneta++;
            totalCamioneta += PRECIO_CAMIONETA;
            alert("Cobro: $" + PRECIO_CAMIONETA);
            break;
        case "3":
            cantidadAutomovil++;
            totalAutomovil += PRECIO_AUTOMOVIL;
            alert("Cobro: $" + PRECIO_AUTOMOVIL);
            break;
        case "4":
            cantidadMoto++;
            totalMoto += PRECIO_MOTO;
            alert("Cobro: $" + PRECIO_MOTO);
            break;
        default:
            alert("Tipo de vehículo no válido. Intente nuevamente.");
            continue;
    }
    continuar = prompt("¿Desea registrar otro vehículo? (s/n)");
}

let totalGeneral = totalCamion + totalCamioneta + totalAutomovil + totalMoto;

console.log(" Fin de Jornada ");
console.log("Cantidad de CAMIONES:", cantidadCamion);
console.log("Total cobrado CAMIONES: $", totalCamion);
console.log("Cantidad de CAMIONETAS:", cantidadCamioneta);
console.log("Total cobrado CAMIONETAS: $", totalCamioneta);
console.log("Cantidad de AUTOMOVILES:", cantidadAutomovil);
console.log("Total cobrado AUTOMOVILES: $", totalAutomovil);
console.log("Cantidad de MOTOS:", cantidadMoto);
console.log("Total cobrado MOTOS: $", totalMoto);
console.log("Monto total cobrado: $", totalGeneral);