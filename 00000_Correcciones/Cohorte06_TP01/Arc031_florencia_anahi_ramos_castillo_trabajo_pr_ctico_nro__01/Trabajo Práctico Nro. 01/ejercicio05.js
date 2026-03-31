/* Ejercicio Nro. 05: 
Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/


function verificarParImpar() {

    // Ingreso el número
    let numero = Number(prompt("Ingrese un número"));

    // Verifico si es par o impar
    if (numero % 2 === 0) {
        console.log("El número es PAR");
    } else {
        console.log("El número es IMPAR");
    }
}
