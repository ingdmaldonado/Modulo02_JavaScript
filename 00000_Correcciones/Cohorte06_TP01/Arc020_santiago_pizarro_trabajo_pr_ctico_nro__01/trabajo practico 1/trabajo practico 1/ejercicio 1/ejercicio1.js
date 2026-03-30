{    
let A = Number(prompt("Ingrese el primer número:"));
let B = Number(prompt("Ingrese el segundo número:"));

// Operaciones
let suma = A + B;
let resta = A - B;
let producto = A * B;

console.log(`Suma: ${A} + ${B} = ${suma}`);
console.log(`Resta: ${A} - ${B} = ${resta}`);
console.log(`Producto: ${A} * ${B} = ${producto}`);

// En caso de no que se pida dividir por cero
if (B !== 0) {
    let cociente = A / B;
    console.log(`Cociente: ${A} / ${B} = ${cociente}`);
} else {
    console.log("No se puede dividir por cero (B = 0).");
}
}