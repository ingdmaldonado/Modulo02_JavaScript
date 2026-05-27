// Ejercicio Nro. 01: Operaciones Básicas

// Ingreso de 2 (dos) números (A y B)
let A = parseFloat(prompt("Ingrese el primer número (A):"));
let B = parseFloat(prompt("Ingrese el segundo número (B):"));

// Realizar y mostrar las operaciones
console.log("Números ingresados: A =", A, ", B =", B);

// Suma
let suma = A + B;
console.log("Suma (A + B):", suma);

// Resta
let resta = A - B;
console.log("Resta (A - B):", resta);

// Producto
let producto = A * B;
console.log("Producto (A * B):", producto);

// Cociente
if (B === 0) {
    console.log("Cociente (A / B): No se puede dividir por cero.");
} else {
    let cociente = A / B;
    console.log("Cociente (A / B):", cociente);
}