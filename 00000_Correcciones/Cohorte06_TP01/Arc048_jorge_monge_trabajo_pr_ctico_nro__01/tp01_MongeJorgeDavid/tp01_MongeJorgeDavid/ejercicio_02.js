// Pedir importe al usuario
let totalCompra = parseFloat(prompt("Ingrese el importe total de la compra:"));

// Calcular descuento del 15%
let descuento = totalCompra * 0.15;

// Calcular importe final
let importeFinal = totalCompra - descuento;

// Mostrar resultados en consola
console.log("Importe total de la compra: $" + totalCompra.toFixed(2));
console.log("Descuento del 15%: $" + descuento.toFixed(2));
console.log("Importe final a pagar: $" + importeFinal.toFixed(2));