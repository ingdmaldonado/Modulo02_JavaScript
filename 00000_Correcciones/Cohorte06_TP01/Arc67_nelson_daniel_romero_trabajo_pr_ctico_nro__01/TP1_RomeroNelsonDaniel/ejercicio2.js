let importeTotal = Number(prompt("Ingrese importe total"));
let montoDescuento = 0, importeFinal = 0;

montoDescuento = (15 * importeTotal) / 100;
importeFinal = importeTotal - montoDescuento;

console.log(`Importe total de la compra: ${importeTotal}`);
console.log(`Monto de descuento: ${montoDescuento}`);
console.log(`Importe final: ${importeFinal}`);