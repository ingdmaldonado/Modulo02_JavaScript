const valorCompra = Number(prompt("Ingrese el valor de la compra:"));

const porcentajeDescuento = 50;
const topeDescuento = 80000;
const descuentoCalculado = valorCompra * porcentajeDescuento / 100;
const descuentoAplicado = descuentoCalculado > topeDescuento ? topeDescuento : descuentoCalculado;
const totalFinal = valorCompra - descuentoAplicado;

console.log("Valor de la compra: $", valorCompra);
console.log("Descuento calculado del 50%: $", descuentoCalculado);
console.log("Descuento aplicado: $", descuentoAplicado);
console.log("Total final a pagar: $", totalFinal);
