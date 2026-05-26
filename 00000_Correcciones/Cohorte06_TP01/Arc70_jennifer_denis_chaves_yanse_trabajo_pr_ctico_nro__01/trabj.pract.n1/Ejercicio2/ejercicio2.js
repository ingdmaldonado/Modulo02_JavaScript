
let compra = parseFloat(prompt("importe de la compra:"));
let descuento = compra * 0.25;
let totalfinal = compra - descuento;

console.log("total:", compra);
console.log("descuento:", descuento);
console.log("total a pagar:", totalfinal);