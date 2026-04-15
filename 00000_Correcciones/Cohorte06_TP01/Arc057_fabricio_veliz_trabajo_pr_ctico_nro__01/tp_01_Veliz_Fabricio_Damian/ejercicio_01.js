/*
Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
Muestre la suma de ambos (A+B)
Muestre la resta (A-B)
Muestre el Producto de ambos (A*B)
Muestre el Cociente entre ambos (A/B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/
{
    let numeroA = 0;
    let numeroB = 0;

    numeroA = Number(prompt("Ingrese el número A:"));
    numeroB = Number(prompt("Ingrese el número B:"));

    let suma = 0;
    let resta = 0;
    let producto = 0;
    let cociente = 0;

    suma = numeroA + numeroB;
    resta = numeroA - numeroB;
    producto = numeroA * numeroB;
    
    cociente = numeroB !== 0 ? (numeroA / numeroB) : "Indefinido (No se puede dividir por Cero)";

    console.log(`El resultado de la suma es: ${suma}, de la resta ${resta}, del producto ${producto} y del cociente ${cociente}`);
}