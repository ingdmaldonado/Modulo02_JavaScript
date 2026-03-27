/* Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

{
let numero = Number(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    console.log(`El número ${numero} es PAR.`);
} else {
    console.log(`El número ${numero}  es IMPAR.`);
}
}