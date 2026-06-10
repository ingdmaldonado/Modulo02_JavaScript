const cantidadPasajes = Number(prompt("Ingrese la cantidad de pasajes:"));
const importePasaje = Number(prompt("Ingrese el importe de cada pasaje:"));

const totalCompra = cantidadPasajes * importePasaje;
let porcentajeDescuento = 0;

if (cantidadPasajes > 3 && totalCompra > 500000) {
  porcentajeDescuento = 15;
} else if (cantidadPasajes > 3 && totalCompra > 250000) {
  porcentajeDescuento = 11;
}

const descuento = totalCompra * porcentajeDescuento / 100;
const totalFinal = totalCompra - descuento;

console.log("Cantidad de pasajes:", cantidadPasajes);
console.log("Importe por pasaje: $", importePasaje);
console.log("Total de compra: $", totalCompra);
console.log("Descuento aplicado:", porcentajeDescuento + "%");
console.log("Importe descontado: $", descuento);
console.log("Total final a pagar: $", totalFinal);
