// Ejercicio Nro. 02: Descuento en Compra

// Ingresar importe total de la compra
let importeTotal = parseFloat(prompt("Ingrese el importe total de la compra:"));

// Calcular descuento del 15%
const porcentajeDescuento = 0.15;
let descuento = importeTotal * porcentajeDescuento;

// Calcular importe restante final
let importeFinal = importeTotal - descuento;

// Mostrar resultados por consola
console.log("Importe total de la compra:", importeTotal.toFixed(2));
console.log("Descuento (15%):", descuento.toFixed(2));
console.log("Importe restante final:", importeFinal.toFixed(2));