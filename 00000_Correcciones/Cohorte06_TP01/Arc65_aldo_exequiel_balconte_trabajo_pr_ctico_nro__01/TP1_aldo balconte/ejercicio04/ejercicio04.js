// Ejercicio Nro. 04: Positivo o Negativo (if/else y ternario)

// Ingresar un número
let numero = parseFloat(prompt("Ingrese un número para determinar si es positivo o negativo:"));

console.log("Número ingresado:", numero);

// Usando estructura condicional if/else
console.log("\n--- Usando if/else ---");
if (numero > 0) {
    console.log("El número es POSITIVO.");
} else if (numero < 0) {
    console.log("El número es NEGATIVO.");
} else {
    console.log("El número es CERO.");
}

// Usando operador ternario
console.log("\n--- Usando operador ternario ---");
let resultadoTernario = (numero > 0) ? "POSITIVO" : (numero < 0 ? "NEGATIVO" : "CERO");
console.log("El número es", resultadoTernario + ".");