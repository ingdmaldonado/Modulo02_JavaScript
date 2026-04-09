/*
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
*/
let A = Number(prompt("Ingrese el número A"));
let B = Number(prompt("Ingrese el número B"));

console.log("Suma:", A + B);
console.log("Resta:", A - B);
console.log("Producto:", A * B);

if (B === 0) {
    console.log("No se puede dividir por cero");
} else {
    console.log("Cociente:", A / B);
}