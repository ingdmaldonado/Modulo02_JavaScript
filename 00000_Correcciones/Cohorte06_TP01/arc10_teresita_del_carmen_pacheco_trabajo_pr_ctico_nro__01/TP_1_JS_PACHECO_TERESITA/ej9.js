// Ingreso de datos
let cantidad = parseInt(prompt("Cantidad de pasajes:"));
let precio = parseFloat(prompt("Precio por pasaje:"));

// Cálculo del total (fórmula)
let total = cantidad * precio;

let descuento = 0;

// Aplicación de condiciones
if (cantidad > 3 && total > 500000) {
    descuento = total * 0.15; // 15% de descuento
} else if (cantidad > 3 && total > 250000) {
    descuento = total * 0.11; // 11% de descuento
}

// Cálculo del total final (fórmula)
let totalFinal = total - descuento;

// Mostrar resultados
console.log("Cantidad de pasajes:", cantidad);
console.log("Precio por pasaje:", precio);
console.log("Total sin descuento:", total);
console.log("Descuento aplicado:", descuento);
console.log("Total final a pagar:", totalFinal);