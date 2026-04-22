let opcion;

let cantAutos = 0;
let cantCamiones = 0;
let cantCamionetas = 0;
let cantMotos = 0;

let totalAutos = 0;
let totalCamiones = 0;
let totalCamionetas = 0;
let totalMotos = 0;

do {
    opcion = prompt(
        "Ingrese tipo de vehículo:\n" +
        "1 - Camión ($22000)\n" +
        "2 - Camioneta ($12000)\n" +
        "3 - Automóvil ($4000)\n" +
        "4 - Moto ($1500)\n" +
        "0 - Finalizar"
    );

    if (opcion === "1") {
        cantCamiones++;
        totalCamiones += 22000;
    } else if (opcion === "2") {
        cantCamionetas++;
        totalCamionetas += 12000;
    } else if (opcion === "3") {
        cantAutos++;
        totalAutos += 4000;
    } else if (opcion === "4") {
        cantMotos++;
        totalMotos += 1500;
    } else if (opcion !== "0") {
        alert("Opción inválida");
    }

} while (opcion !== "0");

let totalGeneral = totalAutos + totalCamiones + totalCamionetas + totalMotos;

alert(
    "CIERRE DE CAJA\n\n" +
    "Autos: " + cantAutos + " - $" + totalAutos + "\n" +
    "Camiones: " + cantCamiones + " - $" + totalCamiones + "\n" +
    "Camionetas: " + cantCamionetas + " - $" + totalCamionetas + "\n" +
    "Motos: " + cantMotos + " - $" + totalMotos + "\n\n" +
    "TOTAL GENERAL: $" + totalGeneral
);

// Comparación
if (cantAutos > cantCamionetas) {
    alert("Pasaron más AUTOS que CAMIONETAS");
} else if (cantCamionetas > cantAutos) {
    alert("Pasaron más CAMIONETAS que AUTOS");
} else {
    alert("Pasaron la MISMA cantidad");
}