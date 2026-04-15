// Ingreso del importe total de la compra
let importeTotal = Number(prompt("Ingrese el importe total de la compra"));

// Calculo del descuento
let descuento = importeTotal * 0.15; 

// Calculo del importe final restando el descuento
let importeFinal = importeTotal - descuento;

// Muestro todos los resultados en la consola
console.log("Importe total de la compra: $" + importeTotal);
console.log("Descuento del 15%: $" + descuento);
console.log("Importe final a pagar: $" + importeFinal);