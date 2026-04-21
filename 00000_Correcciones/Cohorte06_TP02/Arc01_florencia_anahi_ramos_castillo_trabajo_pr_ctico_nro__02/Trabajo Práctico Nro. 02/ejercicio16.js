/* Ejercicio Nro. 16 */

function concesionaria() {

    // Selección del vehículo
    let opcion = Number(prompt("Seleccione vehículo: 1-Amarok V6, 2-TAOS, 3-Polo"));

    let precio = 0;
    let vehiculo = "";

    if (opcion === 1) {
        precio = 65000000;
        vehiculo = "Amarok V6";
    } else if (opcion === 2) {
        precio = 53000000;
        vehiculo = "TAOS";
    } else if (opcion === 3) {
        precio = 47000000;
        vehiculo = "Polo Nuevo";
    } else {
        console.log("Opción inválida");
        return;
    }

    // Ingreso del dinero disponible
    let entrega = Number(prompt("Ingrese el dinero disponible para la compra"));

    let minimo = precio * 30 / 100;

    // Validación
    if (entrega < minimo || entrega >= precio) {
        console.log("Monto inválido. Debe ser mayor al 30% y menor al valor del vehículo");
        return;
    }

    // Cálculo de deuda
    let deuda = precio - entrega;

    // Selección de financiación
    let cuotas = Number(prompt("Seleccione financiación: 12, 24 o 36 cuotas"));

    let interes = 0;

    if (cuotas === 12) {
        interes = 9.9 / 100;
    } else if (cuotas === 24) {
        interes = 22 / 100;
    } else if (cuotas === 36) {
        interes = 33 / 100;
    } else {
        console.log("Cantidad de cuotas inválida");
        return;
    }

    // Cálculo final
    let totalFinanciado = deuda + (deuda * interes);
    let valorCuota = totalFinanciado / cuotas;

    // Muestro resultados
    console.log(`Vehículo: ${vehiculo}`);
    console.log(`Precio: ${precio}`);
    console.log(`Entrega: ${entrega}`);
    console.log(`Deuda: ${deuda}`);
    console.log(`Total financiado: ${totalFinanciado}`);
    console.log(`Cantidad de cuotas: ${cuotas}`);
    console.log(`Valor por cuota: ${valorCuota}`);
}