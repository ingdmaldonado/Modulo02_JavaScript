// Ejercicio 2 - Descuento del 15%

// Ingreso de datos
let importe = parseFloat(prompt("Ingrese importe de la compra:"));

// Cálculo del descuento (fórmula)
let descuento = importe * 0.15;

// Cálculo del total final (fórmula)
let totalFinal = importe - descuento;

// Mostrar resultados
console.log("Importe de la compra:", importe);
console.log("Descuento (15% del importe):", descuento);
console.log("Total final a pagar:", totalFinal);