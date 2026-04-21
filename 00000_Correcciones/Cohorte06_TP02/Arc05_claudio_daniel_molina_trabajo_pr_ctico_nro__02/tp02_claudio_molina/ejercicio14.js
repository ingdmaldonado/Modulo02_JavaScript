
let cantidadCamiones = 0;
let totalCobradoCamiones = 0;

let cantidadCamionetas = 0;
let totalCobradoCamionetas = 0;

let cantidadAutomoviles = 0;
let totalCobradoAutomoviles = 0;

let cantidadMotos = 0;
let totalCobradoMotos = 0;

let totalGeneral = 0;

let continuar = true;

while (continuar) {
    let tipoVehiculo = prompt('Ingrese el tipo de vehículo (CAMION=1, CAMIONETA=2, AUTOMOVIL=3, MOTOS=4, SALIR=5):');
    if (tipoVehiculo === "5") {
        continuar = false;
    } else {
        switch (tipoVehiculo) {
            case "1":
                cantidadCamiones = cantidadCamiones + 1;
                totalCobradoCamiones = totalCobradoCamiones + 22000;
                totalGeneral = totalGeneral + 22000;
                break;
            case "2":
                cantidadCamionetas = cantidadCamionetas + 1;
                totalCobradoCamionetas = totalCobradoCamionetas + 12000;
                totalGeneral = totalGeneral + 12000;
                break;
            case "3":
                cantidadAutomoviles = cantidadAutomoviles + 1;
                totalCobradoAutomoviles = totalCobradoAutomoviles + 4000;
                totalGeneral = totalGeneral + 4000;
                break;
            case "4":
                cantidadMotos = cantidadMotos + 1;
                totalCobradoMotos = totalCobradoMotos + 1500;
                totalGeneral = totalGeneral + 1500;
                break;
            default:
                alert('Tipo de vehículo no válido.');
        }
    }
}

// Mostrar información de cierre

console.log('Cierre de jornada laboral:');
console.log(`Cantidad de AUTOS es: ${cantidadAutomoviles}`);
console.log(`Total Cobrado de AUTOS es : ${totalCobradoAutomoviles}`);
console.log(`Cantidad de CAMIONETAS es: ${cantidadCamionetas}`);
console.log(`Total Cobrado de CAMIONETAS es: ${totalCobradoCamionetas}`);
console.log(`Cantidad de CAMIONES es: ${cantidadCamiones}`);
console.log(`Total Cobrado de Camiones es: ${totalCobradoCamiones}`);
console.log(`Cantidad de MOTOS es: ${cantidadMotos}`);
console.log(`Total Cobrado de MOTOS es: ${totalCobradoMotos}`);
console.log(`Total GENERAL cobrado es: ${totalGeneral}`);


// Comparar cantidades entre autos y camionetas
if (cantidadCamionetas > cantidadAutomoviles) {
    console.log('Pasaron más camionetas que autos.');
} else if (cantidadAutomoviles > cantidadCamionetas) {
    console.log('Pasaron más autos que camionetas.');
} else {
    console.log('Pasaron la misma cantidad de autos y camionetas.');
}

