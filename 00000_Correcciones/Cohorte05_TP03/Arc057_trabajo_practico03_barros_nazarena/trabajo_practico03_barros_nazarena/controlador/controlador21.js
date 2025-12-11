/*Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.*/

const texto1 = "Hola Mundo";
const texto2 = "Profesor";
const texto3 = "Diplomatura en Desarrollo Web";

console.log("Texto 1:", contarVocales(texto1));
console.log("Texto 2:", contarVocales(texto2));
console.log("Texto 3:", contarVocales(texto3));