
//Guardamos los costos de envío en variables
let costoCentro = 2500;
let costoOeste = 3750;
let costoNorte = 4225;
let costoSur = 5222.50;
let costoEste = 4288.50;

// 2. Ingreso del importe de la comida
let importeCompra = Number(prompt("Ingrese el importe de la compra"));

// 3. Menu para que el usuario elija su zona
let zona = Number(prompt("Seleccione su zona de envío:\n1 - Centro\n2 - Oeste\n3 - Norte\n4 - Sur\n5 - Este"));

// Variable en cero para guardar el costo de envío que sea
let costoEnvio = 0;

// Evaluamos la zona elegida
if (zona === 1) {
    costoEnvio = costoCentro;
    console.log("Envío a Zona Centro.");
} else if (zona === 2) {
    costoEnvio = costoOeste;
    console.log("Envío a Zona Oeste.");
} else if (zona === 3) {
    costoEnvio = costoNorte;
    console.log("Envío a Zona Norte.");
} else if (zona === 4) {
    costoEnvio = costoSur;
    console.log("Envío a Zona Sur.");
} else if (zona === 5) {
    costoEnvio = costoEste;
    console.log("Envío a Zona Este.");
} else {
    console.log("Error: Zona no válida. Sin costo de envío por defecto.");
    costoEnvio = 0;
}

// S la comida más el envío
let totalFinal = importeCompra + costoEnvio;

// Mostramos el ticket final 
console.log("Importe de la comida: $" + importeCompra);
console.log("Costo de envío: $" + costoEnvio);
console.log("Total FINAL a pagar: $" + totalFinal);