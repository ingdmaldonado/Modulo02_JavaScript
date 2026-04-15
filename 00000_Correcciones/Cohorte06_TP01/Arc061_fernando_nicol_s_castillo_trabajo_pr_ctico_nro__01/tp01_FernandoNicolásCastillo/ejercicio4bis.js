/*Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.*/

{
let numero = 0;

numero = Number(prompt('Ingrese un numero'));

let determinacion = numero > 0 ? `POSITIVO` : `NEGATIVO`;

console.log('Resultado', determinacion);

} 