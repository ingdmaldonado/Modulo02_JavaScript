{
  // Ejercicio 11


let importeDeCompra = 0;
let zonaCentro = 2500.00;
let zonaOeste = 3750.00;
let zonaNorte = 4225.00;
let zonaSur = 5222.50;
let zonaEste = 4288.50;

let zona = 0;
let costoEnvio = 0;


importeDeCompra = Number(prompt("Sr. Indique el Importe de Compra de la Comida Rápida"));


zona = Number(prompt(`Sr. Indique Zona (1 zonaCentro, 2 zonaOeste, 3 zonaNorte, 4 zonaSur, 5 zonaEste)`));


if (zona === 1) {
  costoEnvio = zonaCentro;
} else if (zona === 2) {
  costoEnvio = zonaOeste;
} else if (zona === 3) {
  costoEnvio = zonaNorte;
} else if (zona === 4) {
  costoEnvio = zonaSur;
} else if (zona === 5) {
  costoEnvio = zonaEste;
} else {
  console.log("Zona no encontrada");
}

let totalEnvio = costoEnvio + importeDeCompra;

console.log(`El importe del envío es ${costoEnvio}, el total a pagar es ${totalEnvio}, su importe de compra  es ${importeDeCompra}`);
  
}