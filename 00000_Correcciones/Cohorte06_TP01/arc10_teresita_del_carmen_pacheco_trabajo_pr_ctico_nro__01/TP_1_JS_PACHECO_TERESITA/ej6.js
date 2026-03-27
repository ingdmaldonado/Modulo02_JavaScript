// Ingreso de datos
let compra = parseFloat(prompt("Ingrese el monto de la compra:"));

// Cálculo del descuento (fórmula)
let descuento = compra * 0.50;

// Aplicación del tope máximo
if (descuento > 80000) {
    descuento = 80000;
}

// Cálculo del total final (fórmula)
let total = compra - descuento;

// Mostrar resultados
console.log("Importe de la compra:", compra);
console.log("Descuento aplicado:", descuento);
console.log("Total a pagar:", total);