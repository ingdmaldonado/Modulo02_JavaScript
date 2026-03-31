/* Ejercicio Nro. 01:

Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)

Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa

*/

let A = Number(prompt("Ingrese el valor de A:"));
let B = Number(prompt("Ingrese el valor de B:"));

console.log("Suma:", A + B);
console.log("Resta:", A - B);
console.log("Multiplicación:", A * B);
console.log("División:", A / B);

/* Cuando el valor de B es 0 y se divide el programa da como valor "Infinity". */