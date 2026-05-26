// ============================================
// EJERCICIO 06 - One Shot (Banco Nación)
// ============================================

const DESCUENTO_PORCENTAJE = 0.50;
const DESCUENTO_TOPE       = 80000;

let valorCompra = parseFloat(prompt("Ingrese el valor de la compra:"));

let descuentoCalculado = valorCompra * DESCUENTO_PORCENTAJE;
let descuentoAplicado;

if (descuentoCalculado > DESCUENTO_TOPE) {
    descuentoAplicado = DESCUENTO_TOPE;
    console.log("El descuento supera el tope. Se aplica el tope máximo de $80.000.");
} else {
    descuentoAplicado = descuentoCalculado;
}

let totalFinal = valorCompra - descuentoAplicado;

console.log("=== EJERCICIO 06 - ONE SHOT ===");
console.log("Valor de la compra:  $", valorCompra);
console.log("Descuento aplicado:  $", descuentoAplicado);
console.log("Total a pagar:       $", totalFinal);
