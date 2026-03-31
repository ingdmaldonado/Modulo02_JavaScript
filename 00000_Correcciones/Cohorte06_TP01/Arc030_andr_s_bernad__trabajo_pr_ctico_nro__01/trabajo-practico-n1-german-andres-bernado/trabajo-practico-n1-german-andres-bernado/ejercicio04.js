/* Ejercicio Nro. 04: Estructuras Condicionales (if/else)

Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.
*/ 


let numero = 0;
numero = Number(prompt("Ingrese un numero:"));


if (numero >= 0) {
    console.log("El numero es positivo");
} else {
    console.log("El numero es negativo");
}

let valor = 0;
valor = parseFloat(prompt("Ingrese otro numero:"));

console.log(valor >= 0 ? "El numero es positivo" : "El numero es negativo");