const importeCompra = Number(prompt("Ingrese el importe total de la compra:"));

const porcentajeDescuento = 15;
const descuento = importeCompra * porcentajeDescuento / 100;
const importeFinal = importeCompra - descuento;

console.log("Importe total de la compra: $", importeCompra);
console.log("Descuento del 15%: $", descuento);
console.log("Importe final a pagar: $", importeFinal);
