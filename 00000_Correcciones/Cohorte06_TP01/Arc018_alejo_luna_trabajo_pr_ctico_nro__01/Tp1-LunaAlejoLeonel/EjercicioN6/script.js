let compra = Number(prompt("Ingrese el importe de la compra"));

// calculo el 50%
let descuento = compra * 0.5;

// aplico tope
if (descuento > 80000) {
    descuento = 80000;
}

//calculo el total final
let totalFinal = compra - descuento;

//muestro por pantalla
console.log("Importe de compra: " + compra);
console.log("Descuento aplicado: " + descuento);
console.log("Total a pagar: " + totalFinal);