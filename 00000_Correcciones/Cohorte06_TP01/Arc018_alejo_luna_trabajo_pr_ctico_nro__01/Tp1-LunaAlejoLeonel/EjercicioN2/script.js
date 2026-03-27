let total = Number(prompt("Ingrese el importe total de la compra"));

let descuento = total * 0.15;
let totalFinal = total - descuento;

console.log("Importe total: " + total);
console.log("Descuento (15%): " + descuento);
console.log("Total a pagar: " + totalFinal);