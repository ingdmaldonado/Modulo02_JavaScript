/*
Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR Ó IMPAR.
*/
{
    let x = 0;
    x = Number(prompt("Ingrese un valor para X:"));

    let resultado = "";

    if (x % 2 === 0) {
        resultado = "PAR";
    } else {
        resultado = "IMPAR";
    }

    console.log(`El valor introducido (${x}) es un número ${resultado}`);
}