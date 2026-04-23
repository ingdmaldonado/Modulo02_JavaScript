// Precios
const PRECIO_CAMION = 22000;
const PRECIO_CAMIONETA = 12000;
const PRECIO_AUTOMOVIL = 4000;
const PRECIO_MOTO = 1500;

// Contadores
let cantCamion = 0;
let cantCamioneta = 0;
let cantAutomovil = 0;
let cantMoto = 0;

// Acumuladores
let totalCamion = 0;
let totalCamioneta = 0;
let totalAutomovil = 0;
let totalMoto = 0;

// Control del bucle
let continuar = true;

while (continuar) {
    let tipo = prompt(
        "Ingrese tipo de vehículo:\n1-Camión\n2-Camioneta\n3-Automóvil\n4-Moto\n0-Salir"
    );

    switch (tipo) {
        case "1":
            cantCamion++;
            totalCamion += PRECIO_CAMION;
            break;
        case "2":
            cantCamioneta++;
            totalCamioneta += PRECIO_CAMIONETA;
            break;
        case "3":
            cantAutomovil++;
            totalAutomovil += PRECIO_AUTOMOVIL;
            break;
        case "4":
            cantMoto++;
            totalMoto += PRECIO_MOTO;
            break;
        case "0":
            continuar = false;
            break;
        default:
            console.log("Tipo de vehículo inválido");
    }
}

// Total general
let totalGeneral = totalCamion + totalCamioneta + totalAutomovil + totalMoto;

// Mostrar resultados
console.log("=== CIERRE DE CAJA ===");

console.log("Camiones: " + cantCamion + " | Total: $" + totalCamion.toLocaleString());
console.log("Camionetas: " + cantCamioneta + " | Total: $" + totalCamioneta.toLocaleString());
console.log("Automóviles: " + cantAutomovil + " | Total: $" + totalAutomovil.toLocaleString());
console.log("Motos: " + cantMoto + " | Total: $" + totalMoto.toLocaleString());

console.log("TOTAL GENERAL: $" + totalGeneral.toLocaleString());

// Comparación entre autos y camionetas
if (cantAutomovil > cantCamioneta) {
    console.log("Pasaron más AUTOMÓVILES que CAMIONETAS");
} else if (cantCamioneta > cantAutomovil) {
    console.log("Pasaron más CAMIONETAS que AUTOMÓVILES");
} else {
    console.log("Pasaron la MISMA cantidad de AUTOMÓVILES y CAMIONETAS");
}