/*Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa*/
{



let variableA = 0; // declaro e inicializo la variable A
let variableB = 0;  //declaro e inicializo la variable B

variableA = Number(prompt(`Ingrese un valor A`));

variableB = Number(prompt(`Ingrese un valor B`));

// SUMA
let suma = variableA + variableB;
console.log("La suma es: " + suma);

// RESTA
let resta = variableA - variableB;
console.log("La resta es: " + resta);

// PRODUCTO
let producto = variableA * variableB;
console.log("El producto es: " + producto);

// COCIENTE
if (variableB === 0) {
    console.log("No se puede dividir por cero");
} else {
    let cociente = variableA / variableB;
    console.log("El cociente es: " + cociente);
}  
}