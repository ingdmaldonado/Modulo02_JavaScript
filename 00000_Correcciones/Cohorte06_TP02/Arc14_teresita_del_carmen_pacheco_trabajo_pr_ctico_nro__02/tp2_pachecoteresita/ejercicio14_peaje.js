// PRECIOS
const CAMION = 22000;
const CAMIONETA = 12000;
const AUTOMOVIL = 4000;
const MOTO = 1500;

// CONTADORES
let cantCamion = 0;
let cantCamioneta = 0;
let cantAuto = 0;
let cantMoto = 0;

// TOTALES
let totalCamion = 0;
let totalCamioneta = 0;
let totalAuto = 0;
let totalMoto = 0;

let opcion;

do {
    opcion = prompt(
        "Ingrese tipo de vehículo:\n" +
        "1 - Camión\n" +
        "2 - Camioneta\n" +
        "3 - Automóvil\n" +
        "4 - Moto\n" +
        "0 - Finalizar jornada"
    );

    switch(opcion) {
        case "1":
            cantCamion++;
            totalCamion += CAMION;
            alert("Camión registrado - $ " + CAMION);
            break;

        case "2":
            cantCamioneta++;
            totalCamioneta += CAMIONETA;
            alert("Camioneta registrada - $ " + CAMIONETA);
            break;

        case "3":
            cantAuto++;
            totalAuto += AUTOMOVIL;
            alert("Automóvil registrado - $ " + AUTOMOVIL);
            break;

        case "4":
            cantMoto++;
            totalMoto += MOTO;
            alert("Moto registrada - $ " + MOTO);
            break;

        case "0":
            alert("Cierre de jornada...");
            break;

        default:
            alert("Opción inválida");
    }

} while(opcion !== "0");

// TOTAL GENERAL
let totalGeneral = totalCamion + totalCamioneta + totalAuto + totalMoto;

// RESULTADOS
alert(
    "=== CIERRE DE CAJA ===\n\n" +
    "Camiones: " + cantCamion + " | Total: $" + totalCamion + "\n" +
    "Camionetas: " + cantCamioneta + " | Total: $" + totalCamioneta + "\n" +
    "Automóviles: " + cantAuto + " | Total: $" + totalAuto + "\n" +
    "Motos: " + cantMoto + " | Total: $" + totalMoto + "\n\n" +
    "TOTAL GENERAL: $" + totalGeneral
);

// COMPARACIÓN
if (cantAuto > cantCamioneta) {
    alert("Pasaron más AUTOMÓVILES que CAMIONETAS");
} else if (cantCamioneta > cantAuto) {
    alert("Pasaron más CAMIONETAS que AUTOMÓVILES");
} else {
    alert("Pasaron la MISMA cantidad");
}