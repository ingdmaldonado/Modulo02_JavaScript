

let A = Number(prompt(`Ingrese el primer número (A):`));
let B = Number(prompt(`Ingrese el segundo número (B):`));

let suma = A + B;
let resta = A - B;
let producto = A * B;


console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Producto: ${producto}`);

if (B === 0) {
    console.log(`Error: No se puede dividir por cero.`);
} 
else {
    cociente = A / B;
}

console.log(`Cociente: ${cociente}`);