/* Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa */

a= Number(prompt("Ingrese un número:"));
b= Number(prompt("Ingrese otro número:"));

let suma = a+b;
let resta = a-b;
let producto = a*b;
let cociente = a/b;

console.log(`La suma de los números es: ${suma}`);
console.log(`La resta de los números es: ${resta}`);
console.log(`El producto de los números es: ${producto}`);
console.log(`El cociente de los números es: ${cociente}`);

// Si b es igual a cero, el resultado del cociente será Infinity (infinito) o -Infinity (negativo infinito) dependiendo del signo de a. Esto se debe a que la división por cero no está definida en matemáticas y en JavaScript se representa como infinito.




