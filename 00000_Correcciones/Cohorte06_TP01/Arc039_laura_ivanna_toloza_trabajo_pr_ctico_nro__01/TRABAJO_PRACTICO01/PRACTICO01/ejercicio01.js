/* Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa */

let A = Number(prompt("Ingrese el primer número (A):"));
let B = Number(prompt("Ingrese el segundo número (B):"));
let suma = A + B;
console.log("La suma de A y B es: " + suma);
let resta = A - B;
console.log("La resta de A y B es: " + resta);
let producto = A * B;
console.log("El producto de A y B es: " + producto);
let cociente = A / B;
console.log("El cociente de A y B es: " + cociente);
console.log("Si B es igual a cero, el resultado del cociente será Infinity");