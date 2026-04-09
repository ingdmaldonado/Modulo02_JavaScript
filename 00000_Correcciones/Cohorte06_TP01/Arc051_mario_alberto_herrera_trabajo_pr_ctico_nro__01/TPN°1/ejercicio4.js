/*
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.
*/
let numero = Number(prompt("Ingrese un número"));

//if / else
if (numero >= 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

//operador ternario
numero >= 0
    ? console.log("El número es positivo")
    : console.log("El número es negativo");