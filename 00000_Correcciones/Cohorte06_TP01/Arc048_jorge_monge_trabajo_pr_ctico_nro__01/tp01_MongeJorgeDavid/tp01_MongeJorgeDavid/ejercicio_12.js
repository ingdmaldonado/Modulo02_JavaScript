// Definir tope de reintegro
const topeReintegro = 80000;

// Pedir datos al usuario
let diaCompra = prompt("Ingrese el día de la compra (ej: viernes, sábado, domingo, lunes, etc.):").toLowerCase();
let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));

// Inicializar reintegro
let reintegro = 0;

// Verificar si el día aplica al beneficio
if (diaCompra === "viernes" || diaCompra === "sabado" || diaCompra === "domingo") {
    // Calcular 50% de reintegro
    reintegro = importeCompra * 0.5;

    // Verificar tope máximo
    if (reintegro > topeReintegro) {
        reintegro = topeReintegro;
    }
}

// Calcular importe final a pagar
let totalFinal = importeCompra - reintegro;

// Mostrar resultados
console.log("Día de la compra: " + diaCompra);
console.log("Importe de la compra: $" + importeCompra.toFixed(2));
console.log("Reintegro obtenido: $" + reintegro.toFixed(2));
console.log("Importe final a pagar: $" + totalFinal.toFixed(2));