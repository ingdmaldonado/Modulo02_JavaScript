const importeCompra = Number(prompt("Ingrese el importe de la compra:"));
const zona = prompt("Ingrese la zona del cliente: centro, oeste, norte, sur o este").toLowerCase();

const envioCentro = 2500;
const envioOeste = 3750;
const envioNorte = 4225;
const envioSur = 5222.50;
const envioEste = 4288.50;

let costoEnvio = 0;

if (zona === "centro") {
  costoEnvio = envioCentro;
} else if (zona === "oeste") {
  costoEnvio = envioOeste;
} else if (zona === "norte") {
  costoEnvio = envioNorte;
} else if (zona === "sur") {
  costoEnvio = envioSur;
} else if (zona === "este") {
  costoEnvio = envioEste;
} else {
  console.log("Zona invalida. No se suma costo de envio.");
}

const totalFinal = importeCompra + costoEnvio;

console.log("Importe de compra: $", importeCompra);
console.log("Zona:", zona);
console.log("Costo de envio: $", costoEnvio);
console.log("Total final a pagar: $", totalFinal);
