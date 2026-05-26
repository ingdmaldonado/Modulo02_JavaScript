// ============================================
// EJERCICIO 02 - Descuento del 15%
// ============================================

let importeTotal = parseFloat(prompt("Ingrese el importe total de la compra:"));

let descuento = importeTotal * 0.15;
let importeFinal = importeTotal - descuento;

console.log("=== EJERCICIO 02 ===");
console.log("Importe total de la compra: $", importeTotal);
console.log("Descuento del 15%:          $", descuento);
console.log("Importe final a pagar:      $", importeFinal);
