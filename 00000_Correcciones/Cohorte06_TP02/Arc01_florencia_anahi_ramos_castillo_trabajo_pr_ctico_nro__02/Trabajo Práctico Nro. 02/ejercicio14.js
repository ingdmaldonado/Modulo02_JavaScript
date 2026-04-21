/* Ejercicio Nro. 14 */

function peaje() {

    // Precios
    let precioCamion = 22000;
    let precioCamioneta = 12000;
    let precioAuto = 4000;
    let precioMoto = 1500;

    // Contadores
    let cantCamion = 0;
    let cantCamioneta = 0;
    let cantAuto = 0;
    let cantMoto = 0;

    // Acumuladores
    let totalCamion = 0;
    let totalCamioneta = 0;
    let totalAuto = 0;
    let totalMoto = 0;

    let opcion;

    // Bucle para registrar operaciones
    do {
        opcion = prompt("Ingrese tipo de vehículo: camion, camioneta, auto, moto (o 'fin' para terminar)");

        if (opcion === "camion") {
            cantCamion++;
            totalCamion += precioCamion;

        } else if (opcion === "camioneta") {
            cantCamioneta++;
            totalCamioneta += precioCamioneta;

        } else if (opcion === "auto") {
            cantAuto++;
            totalAuto += precioAuto;

        } else if (opcion === "moto") {
            cantMoto++;
            totalMoto += precioMoto;

        } else if (opcion === "fin") {
            break;

        } else {
            console.log("Vehículo inválido");
        }

    } while (opcion !== "fin");

    // Total general
    let totalGeneral = totalCamion + totalCamioneta + totalAuto + totalMoto;

    // Mostrar resultados
    console.log(`Cantidad de Camiones: ${cantCamion}`);
    console.log(`Total Camiones: ${totalCamion}`);

    console.log(`Cantidad de Camionetas: ${cantCamioneta}`);
    console.log(`Total Camionetas: ${totalCamioneta}`);

    console.log(`Cantidad de Autos: ${cantAuto}`);
    console.log(`Total Autos: ${totalAuto}`);

    console.log(`Cantidad de Motos: ${cantMoto}`);
    console.log(`Total Motos: ${totalMoto}`);

    console.log(`Total General: ${totalGeneral}`);

    // Comparación entre autos y camionetas
    if (cantAuto > cantCamioneta) {
        console.log("Pasaron más autos que camionetas");
    } else if (cantCamioneta > cantAuto) {
        console.log("Pasaron más camionetas que autos");
    } else {
        console.log("Pasaron la misma cantidad de autos y camionetas");
    }
}