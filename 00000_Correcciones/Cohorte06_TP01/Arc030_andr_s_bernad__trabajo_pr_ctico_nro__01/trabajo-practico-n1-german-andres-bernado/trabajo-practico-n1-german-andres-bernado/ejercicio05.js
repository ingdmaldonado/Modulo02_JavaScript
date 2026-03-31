/* Ejercicio Nro. 05: Estructuras Condicionales (if/else)

Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

let X
X = parseInt(prompt("Ingrese un numero:"));


if (X % 2 === 0) {
    console.log("El numero es PAR");
} else {
    console.log("El numero es IMPAR");
}