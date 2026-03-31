
let = importeCompra = (Number(prompt("Ingrese el importe de la compra:")));
console.log(`Importe de la compra ingresado es: ${importeCompra}`);


let zona = (Number(prompt("Ingrese la zona en la que vive el cliente: 1-Centro, 2-Oeste, 3-Norte, 4-Sur o 5-Este:")));
console.log(`Zona ingresada: ${zona}`);


let costoEnvio;

if (zona === 1) {
    costoEnvio = 2500;
} 
else 
    if (zona == 2) {
    costoEnvio = 3750;
} 
else 
    if (zona === 3) {
    costoEnvio = 4225;
} 
else 
    if (zona === 4) {
    costoEnvio = 5222.50;
} 
else 
    if (zona === 5) {
    costoEnvio = 4288.50;
}

let precioTotal = (importeCompra) + costoEnvio;

console.log(`El precio total de la compra es: ${precioTotal}`);
