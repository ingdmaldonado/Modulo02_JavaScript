const diaCompra = prompt("Ingrese el dia de la compra:").toLowerCase();
const importeCompra = Number(prompt("Ingrese el importe de la compra:"));

const diaNormalizado = diaCompra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const esDiaValido = diaNormalizado === "viernes"
  || diaNormalizado === "sabado"
  || diaNormalizado === "domingo";

let reintegro = 0;

if (esDiaValido) {
  const reintegroCalculado = importeCompra * 0.50;
  const topeReintegro = 80000;
  reintegro = reintegroCalculado > topeReintegro ? topeReintegro : reintegroCalculado;
} else {
  console.log("No se aplica el beneficio porque la compra no fue realizada viernes, sabado o domingo.");
}

const importeFinal = importeCompra - reintegro;

console.log("Dia de la compra:", diaCompra);
console.log("Importe de la compra: $", importeCompra);
console.log("Reintegro obtenido: $", reintegro);
console.log("Importe final pagado por el cliente: $", importeFinal);
