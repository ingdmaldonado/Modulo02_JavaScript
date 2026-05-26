// ============================================
// EJERCICIO 01 - Operaciones entre dos números
// ============================================

let A = parseFloat(prompt("Ingrese el número A:"));
let B = parseFloat(prompt("Ingrese el número B:"));

console.log("=== EJERCICIO 01 ===");
console.log("Número A:", A);
console.log("Número B:", B);
console.log("-------------------");
console.log("Suma      (A + B):", A + B);
console.log("Resta     (A - B):", A - B);
console.log("Producto  (A * B):", A * B);

// Verificación división por cero
if (B === 0) {
    console.log("Cociente  (A / B): No se puede dividir por cero.");
    console.log("Nota: JavaScript devolvería 'Infinity' sin esta verificación.");
} else {
    console.log("Cociente  (A / B):", A / B);
}
