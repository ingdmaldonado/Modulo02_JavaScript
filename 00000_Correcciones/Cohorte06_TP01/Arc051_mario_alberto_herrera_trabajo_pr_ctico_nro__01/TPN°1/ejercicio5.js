/*
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR..
*/
let x = Number(prompt("Ingrese un número"));

if (x % 2 === 0) {
    console.log("El número es Par");
} else {
    console.log("El número es Impar");
}