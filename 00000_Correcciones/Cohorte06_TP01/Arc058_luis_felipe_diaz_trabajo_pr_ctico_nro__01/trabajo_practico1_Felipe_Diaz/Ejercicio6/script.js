// Ingreso el valor total de la compra
let valorCompra = Number(prompt("Ingrese el valor total de la compra"));

// Se calcula el 50% de descuento de forma normal
let descuento = (valorCompra * 50) / 100;

// Ahora uso el if para verificar si ese descuento se pasa del tope máximo
if (descuento > 80000) {
    // Si el descuento es mayor a 80.000, lo limito al tope
    descuento = 80000;
    console.log("Aviso: Se aplicó el tope máximo de descuento ($80.000).");
} else {
    console.log("Aviso: Se aplicó el 50% de descuento completo.");
}

// Calculo cuanto queda por pagar al final
let totalAPagar = valorCompra - descuento;

// Muestro todos los resultados en consola
console.log("Valor de la compra: $" + valorCompra);
console.log("Descuento aplicado: $" + descuento);
console.log("Total final a pagar: $" + totalAPagar);