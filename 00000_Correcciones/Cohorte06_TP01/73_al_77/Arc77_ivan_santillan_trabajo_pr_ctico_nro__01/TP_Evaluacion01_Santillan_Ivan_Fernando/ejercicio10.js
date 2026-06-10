const importeCompra = Number(prompt("Ingrese el importe de la compra:"));
const formaPago = Number(prompt("Ingrese forma de pago: 1) Efectivo 2) Debito 3) Credito"));

let porcentajeDescuento = 0;

switch (formaPago) {
  case 1:
    porcentajeDescuento = 10;
    break;
  case 2:
    porcentajeDescuento = 5;
    break;
  case 3:
    porcentajeDescuento = 0;
    break;
  default:
    console.log("Forma de pago invalida. No se aplica descuento.");
}

const descuento = importeCompra * porcentajeDescuento / 100;
const totalFinal = importeCompra - descuento;

console.log("Importe de compra: $", importeCompra);
console.log("Descuento aplicado:", porcentajeDescuento + "%");
console.log("Importe descontado: $", descuento);
console.log("Total final a pagar: $", totalFinal);
