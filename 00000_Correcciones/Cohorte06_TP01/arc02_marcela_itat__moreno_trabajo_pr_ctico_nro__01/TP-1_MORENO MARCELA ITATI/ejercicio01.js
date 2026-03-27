let numeroA = 0;
let numeroB = 0;

numeroA = Number(prompt(`Ingrese numero A`));
numeroB = Number(prompt(`Ingrese numero B`));

console.log(`1er numero ingresado A: ${numeroA}`);
console.log(`2do numero ingresado B: ${numeroB}`);


// Muestre la suma de ambos (A + B)

let suma = 0;

suma = numeroA + numeroB;

console.log(`La suma de A + B es ${suma}`);

// Muestre la resta (A – B)

let resta = 0;

resta = numeroA - numeroB;

console.log(`La resta de A - B es ${resta}`);

// Muestre el Producto de ambos (A * B)

let producto = 0;

producto = numeroA * numeroB;

console.log(`El producto de A * B es ${producto}`);

// Muestre el Cociente entre ambos (A / B)

let cociente = 0;

cociente = numeroA / numeroB;

console.log(`El cociente de A / B es ${cociente}`);


//En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa 
// ------>  El cociente de A / B es Infinity