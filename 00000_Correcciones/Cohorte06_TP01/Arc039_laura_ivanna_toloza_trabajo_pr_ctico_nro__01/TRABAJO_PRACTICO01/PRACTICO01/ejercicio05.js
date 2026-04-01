/* Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR. */

let i = 0;

while (i < 10) {
    let numero = Number(prompt('Ingrese un numero: '));
    if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par.`);}  
    else {
    console.log(`El numero ${numero} es impar.`);}
    i++;
}