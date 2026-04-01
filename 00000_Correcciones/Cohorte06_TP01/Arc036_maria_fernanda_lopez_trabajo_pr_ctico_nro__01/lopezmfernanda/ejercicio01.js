/* Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
 */

{
let a = 0; 
a= Number(prompt(`Ingrese el valor de A`));
console.log(`valor de A`);
let b= 0;
b= Number(prompt(`Ingrese el valor de B`));
console.log(`valor de B`);

let suma= a + b;
console.log(`La suma de A + B es igual a: ${suma}`);
let resta= a - b;
console.log(`La resta de A - B es igual a:${resta}`);
let producto= a * b;
console.log(`El producto de A * B es igual a: ${producto}`);
let cociente= a / b;
console.log(`El cociente de A / B es igual a: ${cociente}`);


/* Cuando B es igual a 0 sale lo siguiente: El cociente de A / B es igual a: Infinity */
}