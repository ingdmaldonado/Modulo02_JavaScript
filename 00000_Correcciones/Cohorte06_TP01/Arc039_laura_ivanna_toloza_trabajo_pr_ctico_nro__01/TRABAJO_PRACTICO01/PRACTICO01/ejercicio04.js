/* Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario. */

let numero = Number(prompt("Ingrese un numero:"));
if(numero > 0) {
    console.log("El numero es positivo.");
} else if(numero < 0) {
    console.log(`El numero es negativo. ${numero}`);
} else {
    console.log("El numero es cero.");
}

// Utilizando un operador ternario

let numeroTernario = Number(prompt("Ingrese un numero:"));
let resultado = numeroTernario > 0 ? "El numero es positivo." : numeroTernario < 0 ? "El numero esnegativo." : "El numero es cero.";
console.log(resultado);