// ============================================
// EJERCICIO 12 - One Shot Plus (Catamarca)
// ============================================

const PORCENTAJE_REINTEGRO = 0.50;
const TOPE_REINTEGRO       = 80000;

let dia     = prompt("Ingrese el día de la compra (ej: lunes, viernes):").toLowerCase();
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

console.log("=== EJERCICIO 12 - ONE SHOT PLUS ===");
console.log("Día de la compra:    ", dia);
console.log("Importe de la compra:$", importe);

// Verificar si el día es válido para el beneficio
if (dia === "viernes" || dia === "sabado" || dia === "sábado" || dia === "domingo") {

    let reintegroCalculado = importe * PORCENTAJE_REINTEGRO;
    let reintegroFinal;

    if (reintegroCalculado > TOPE_REINTEGRO) {
        reintegroFinal = TOPE_REINTEGRO;
        console.log("El reintegro supera el tope. Se aplica el máximo de $80.000.");
    } else {
        reintegroFinal = reintegroCalculado;
    }

    let importeFinal = importe - reintegroFinal;

    console.log("Reintegro obtenido:  $", reintegroFinal);
    console.log("Importe final pagado:$", importeFinal);

} else {
    console.log("El beneficio One Shot Plus NO aplica para el día:", dia);
    console.log("Solo es válido los días viernes, sábado y domingo.");
    console.log("Importe final pagado:$", importe);
}
