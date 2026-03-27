let compra = parseFloat(prompt("Ingrese el valor de su compra: "));

let descuento = compra * 0.5;

let tope = 80000;

if (descuento > tope) {
    descuento = tope
}

let totalFinal = compra - descuento

console.log("Importe de la compra: $" + compra.toFixed(2));
console.log("Descuento aplicado: $" + descuento.toFixed(2));
console.log("Total a pagar: $" + totalFinal.toFixed(2));