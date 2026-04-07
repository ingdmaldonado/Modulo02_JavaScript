// Pedir valores al usuario
let A = parseFloat(prompt("Ingrese el valor de A:"));
let B = parseFloat(prompt("Ingrese el valor de B:"));

// Operaciones
let suma = A + B;
let resta = A - B;
let producto = A * B;

// Mostrar resultados
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Producto: " + producto);

// División con validación
if (B !== 0) {
    let division = A / B;
    console.log("División: " + division);
} else {
    console.log("No se puede dividir por cero");
}