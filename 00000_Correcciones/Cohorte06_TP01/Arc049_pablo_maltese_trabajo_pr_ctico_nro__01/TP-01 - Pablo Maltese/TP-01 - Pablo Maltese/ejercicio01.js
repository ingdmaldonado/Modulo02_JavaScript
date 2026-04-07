/*
    Ejercicio Nro. 01:
    Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando 
    variables y realice las siguientes operaciones.

    - Muestre la suma de ambos (A + B)
    - Muestre la resta (A – B)
    - Muestre el Producto de ambos (A * B)
    - Muestre el Cociente entre ambos (A / B)
    Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con 
    el programa
*/

{
    let numeroA = 0;
    let numeroB = 0;

    numeroA = Number(prompt(`Ingrese un número A: `));
    numeroB = Number(prompt(`Ingrese un número B: `));

    //Mostrar número ingresado
    console.log(`Número ingresado A = ${numeroA} y B = ${numeroB}`);

    console.log(`La suma de (A + B): ${numeroA + numeroB}`);
    console.log(`La resta de (A - B): ${numeroA - numeroB}`);
    console.log(`La multiplicación de (A * B): ${numeroA * numeroB}`);
    
    //Pregunto si el denomidador es distinto de cero
    if( numeroB !== 0)
    {
        console.log(`La division de (A / B): ${numeroA / numeroB}`);
    }else
    {
        console.log(`B = 0 Error, la division por cero es indeterminada`);
    }
}