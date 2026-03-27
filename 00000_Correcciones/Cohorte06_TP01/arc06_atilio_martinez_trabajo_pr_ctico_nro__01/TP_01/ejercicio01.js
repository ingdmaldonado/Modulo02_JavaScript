/* Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/

{
// Ingreso de los números
let A = Number(prompt("Ingrese el primer número (A):"));
let B = Number(prompt("Ingrese el segundo número (B):"));

// Operaciones
let suma = A + B;
let resta = A - B;
let producto = A * B;
let cociente = A / B;

// Mostrar resultados
console.log("La suma de A + B es: " + suma);
console.log("La resta de A - B es: " + resta);
console.log("El producto de A * B es: " + producto);
console.log("El cociente de A / B es: " + cociente);
}

//En el cociente, cuando B es igual a 0 el programa se ejecuta igual pero sale la palabra Infinity