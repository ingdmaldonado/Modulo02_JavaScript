// Pedir valor de la compra
let compra = parseFloat(prompt("Ingrese el valor de la compra:"));

// Calcular descuento inicial (50%)
let descuento = compra * 0.5;

// Validar límite máximo de descuento ($80.000)
if (descuento > 80000) {
    descuento = 80000;
}

// Calcular importe final
let totalPagar = compra - descuento;

// Mostrar resultados
console.log("Valor de la compra: $" + compra.toFixed(2));
console.log("Descuento aplicado: $" + descuento.toFixed(2));
console.log("Importe final a pagar: $" + totalPagar.toFixed(2));