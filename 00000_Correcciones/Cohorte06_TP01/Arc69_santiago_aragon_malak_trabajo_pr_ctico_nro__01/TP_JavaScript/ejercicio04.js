// ============================================
// EJERCICIO 04 - Positivo o Negativo
// ============================================

let numero = parseFloat(prompt("Ingrese un número:"));

console.log("=== EJERCICIO 04 ===");
console.log("Número ingresado:", numero);

// Con estructura if/else
console.log("--- Con if/else ---");
if (numero >= 0) {
    console.log("El número es POSITIVO.");
} else {
    console.log("El número es NEGATIVO.");
}

// Con operador ternario
console.log("--- Con operador ternario ---");
let resultado = numero >= 0 ? "POSITIVO" : "NEGATIVO";
console.log("El número es:", resultado);
