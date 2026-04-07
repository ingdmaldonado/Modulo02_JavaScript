// Pedir datos al usuario
let cantidad = parseInt(prompt("Ingrese la cantidad de pasajes:"));
let importePasaje = parseFloat(prompt("Ingrese el importe de cada pasaje:"));

// Calcular total de la compra
let totalCompra = cantidad * importePasaje;

// Inicializar descuento
let descuento = 0;

// Aplicar reglas de descuento
if (cantidad > 3 && totalCompra > 500000) {
    descuento = totalCompra * 0.15; // 15%
} else if (cantidad > 3 && totalCompra > 250000) {
    descuento = totalCompra * 0.11; // 11%
}

// Calcular total a pagar
let totalPagar = totalCompra - descuento;

// Mostrar resultados
console.log("Cantidad de pasajes: " + cantidad);
console.log("Importe por pasaje: $" + importePasaje.toLocaleString());
console.log("Total de la compra: $" + totalCompra.toLocaleString());
console.log("Descuento aplicado: $" + descuento.toLocaleString());
console.log("Total a pagar: $" + totalPagar.toLocaleString());