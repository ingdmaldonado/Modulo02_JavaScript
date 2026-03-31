/*
Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

// Valor del usuario
let x = 0;
x = Number(prompt('Ingrese un numero (X):'));

// Verificacion del numero
if(x % 2 ) {
    console.log(`El numero ${x} es par`)
}
else {
    console.log(`El numero ${x} es impar`)
}