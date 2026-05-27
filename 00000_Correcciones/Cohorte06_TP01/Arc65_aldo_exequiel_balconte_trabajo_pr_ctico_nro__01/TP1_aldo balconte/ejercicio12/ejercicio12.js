// Ejercicio Nro. 12: Programa "One Shot Plus" (Catamarca)

// Definir constantes del beneficio
const porcentajeReintegro = 0.50; // 50%
const topeReintegro = 80000; // $80.000

// Solicitar día de la compra y importe
let diaCompra = prompt("Ingrese el día de la compra (ej. Viernes, Sábado, Domingo):").toLowerCase();
let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));

let reintegroObtenido = 0;
let importeFinalPagado = importeCompra;
let aplicaBeneficio = false;

// Verificar si la compra fue realizada en un día válido
if (diaCompra === "viernes" || diaCompra === "sábado" || diaCompra === "sabado" || diaCompra === "domingo") {
    aplicaBeneficio = true;
}

if (aplicaBeneficio) {
    // Calcular el 50% del importe de la compra
    let reintegroCalculado = importeCompra * porcentajeReintegro;

    // Verificar si el reintegro supera el tope
    if (reintegroCalculado > topeReintegro) {
        reintegroObtenido = topeReintegro; // Aplicar solo el tope
    } else {
        reintegroObtenido = reintegroCalculado;
    }

    importeFinalPagado = importeCompra - reintegroObtenido;
} else {
    console.log("La compra no fue realizada en un día válido (viernes, sábado o domingo). No se aplica el beneficio.");
}

// Mostrar resultados
console.log("Día de la compra:", diaCompra.charAt(0).toUpperCase() + diaCompra.slice(1));
console.log("Importe de la compra:", importeCompra.toFixed(2));
console.log("Reintegro obtenido:", reintegroObtenido.toFixed(2));
console.log("Importe final pagado por el cliente:", importeFinalPagado.toFixed(2));