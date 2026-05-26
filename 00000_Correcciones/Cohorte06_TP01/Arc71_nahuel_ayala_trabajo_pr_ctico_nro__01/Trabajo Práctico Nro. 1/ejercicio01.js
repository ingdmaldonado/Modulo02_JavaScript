/*
    Ejercicio Nro. 01:
    Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
        - Muestre la suma de ambos (A + B)
        - Muestre la resta (A – B)
        - Muestre el Producto de ambos (A * B)
        - Muestre el Cociente entre ambos (A / B)

    Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/

{
    let numero1 = 0;
    numero1 = Number(prompt(`Ingrese el 1er Número:`));

    let numero2 = 0;
    numero2 = Number(prompt(`Ingrese el 2do Número:`));

    let suma = numero1 + numero2;

    let resta = numero1 - numero2;

    let producto = numero1 * numero2;

    let cociente = numero1 / numero2; // Cuando el divisor es 0, el resultado de la operación es Infinito.

    if(numero2 === 0){
        console.log(`Resultados de las Operaciones: Suma: ${suma} | Resta: ${resta} | Producto: ${producto} | Cociente: NO se puede dividir por cero.`);
    }
    else{
        console.log(`Resultados de las Operaciones: Suma: ${suma} | Resta: ${resta} | Producto: ${producto} | Cociente: ${cociente}`);
    }
}