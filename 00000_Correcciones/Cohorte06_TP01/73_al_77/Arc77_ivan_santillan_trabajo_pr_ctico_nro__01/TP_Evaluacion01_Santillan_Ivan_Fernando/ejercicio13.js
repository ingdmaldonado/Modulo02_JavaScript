const rubroIngresado = prompt("Ingrese el rubro del comercio:").toLowerCase();
const importeCompra = Number(prompt("Ingrese el importe de la compra:"));

const rubro = rubroIngresado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

let porcentajeDescuento = 0;
let topeDescuento = 0;

if (rubro === "vestimenta") {
  porcentajeDescuento = 20;
  topeDescuento = 80000;
} else if (rubro === "perfumeria") {
  porcentajeDescuento = 20;
  topeDescuento = 80000;
} else if (rubro === "libreria") {
  porcentajeDescuento = 30;
  topeDescuento = 90000;
} else if (rubro === "electrodomesticos") {
  porcentajeDescuento = 15;
  topeDescuento = 70000;
} else if (rubro === "calzado") {
  porcentajeDescuento = 20;
  topeDescuento = 80000;
} else {
  console.log("Rubro invalido. No se aplica descuento.");
}

const descuentoCalculado = importeCompra * porcentajeDescuento / 100;
const descuentoAplicado = descuentoCalculado > topeDescuento ? topeDescuento : descuentoCalculado;
const importeFinal = importeCompra - descuentoAplicado;

console.log("Rubro:", rubroIngresado);
console.log("Importe de la compra: $", importeCompra);
console.log("Descuento aplicado: $", descuentoAplicado);
console.log("Importe final a pagar: $", importeFinal);
