// PEDIR LOS NUMEROS AL USUARIO
let a = parseFloat(prompt("Ingresa el número A"));
let b = parseFloat(prompt("Ingresa el número B"));

// OPERACIONES
let suma = a + b;
let resta = a - b;
let producto = a * b;
let cociente = a / b;

// MOSTRAR RESULTADOS
console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Producto: ", producto);
console.log("Cociente: ", cociente);

// ¿QUE SUCEDE CUANDO B ES IGUAL A 0?
if (b !== 0) {
    let division = a / b;
    console.log("Division: ", division)
} else {
    console.log("No se puede dividir por 0")
}

