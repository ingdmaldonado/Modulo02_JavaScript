/*
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/


let x = 0;

x = Number(prompt(`Ingrese un numero:`));

if (x % 2 == 0) {
    console.log (`el numero ${x} es PAR`);
}else {
    console.log (`el numero ${x} es Impar`);
}
