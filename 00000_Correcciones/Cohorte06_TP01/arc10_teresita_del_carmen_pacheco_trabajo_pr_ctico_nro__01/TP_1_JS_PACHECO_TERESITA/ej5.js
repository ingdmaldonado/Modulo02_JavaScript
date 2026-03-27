// Ingreso de datos
let num = parseInt(prompt("Ingrese un número:"));

// Fórmula para determinar si es par
let esPar = num % 2 === 0;

// Resultado
if (esPar) {
    console.log("El número es PAR");
} else {
    console.log("El número es IMPAR");
}