// Ejercicio Nro. 06: Promoción "One Shot" Banco Nación

// Definir el descuento y el tope máximo
const porcentajeDescuento = 0.50; // 50%
const descuentoTope = 80000; // $80.000,00

// Ingresar el valor de la compra
let valorCompra = parseFloat(prompt("Ingrese el valor total de la compra:"));

// Calcular el descuento potencial
let descuentoCalculado = valorCompra * porcentajeDescuento;

// Verificar si el descuento calculado supera el tope
let descuentoFinal;
if (descuentoCalculado > descuentoTope) {
    descuentoFinal = descuentoTope;
} else {
    descuentoFinal = descuentoCalculado;
}

// Calcular el importe final a pagar
let importeFinal = valorCompra - descuentoFinal;

// Mostrar resultados
console.log("Valor de la compra:", valorCompra.toFixed(2));
console.log("Descuento aplicado:", descuentoFinal.toFixed(2));
console.log("Importe final a pagar:", importeFinal.toFixed(2));