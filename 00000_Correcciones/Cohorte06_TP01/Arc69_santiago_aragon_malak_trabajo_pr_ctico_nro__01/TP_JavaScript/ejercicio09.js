// ============================================
// EJERCICIO 09 - Venta de pasajes terrestres
// ============================================

let cantidadPasajes = parseInt(prompt("Ingrese la cantidad de pasajes:"));
let importePasaje   = parseFloat(prompt("Ingrese el importe por pasaje:"));

let totalCompra = cantidadPasajes * importePasaje;

let descuento   = 0;
let porcentaje  = 0;

// Se evalúa primero la condición más restrictiva (mayor descuento)
if (cantidadPasajes > 3 && totalCompra > 500000) {
    porcentaje = 15;
    descuento  = totalCompra * 0.15;
} else if (cantidadPasajes > 3 && totalCompra > 250000) {
    porcentaje = 11;
    descuento  = totalCompra * 0.11;
}

let totalFinal = totalCompra - descuento;

console.log("=== EJERCICIO 09 - VENTA DE PASAJES ===");
console.log("Cantidad de pasajes: ", cantidadPasajes);
console.log("Importe por pasaje:  $", importePasaje);
console.log("Total de compra:     $", totalCompra);

if (porcentaje > 0) {
    console.log("Descuento aplicado:  " + porcentaje + "% → $", descuento);
} else {
    console.log("Descuento aplicado:  Sin descuento.");
}

console.log("Total final a pagar: $", totalFinal);
