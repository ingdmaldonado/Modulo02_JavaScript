/*

Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones. 
-          Muestre la suma de ambos (A + B) 
-          Muestre la resta (A – B) 
-          Muestre el Producto de ambos (A * B) 
-          Muestre el Cociente entre ambos (A / B) 
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa

*/

{
    
let a = 0;
let b = 0;
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;

a = Number(prompt(`Ingrese un valor A`))
b = Number(prompt(`Ingrese un valor B`))

suma = a + b;
resta = a - b;
multiplicacion = a * b;
division = a / b;

console.log(`La suma es: ${suma}, la resta es: ${resta}, la multiplicacion es: ${multiplicacion}, la division es: ${division}`);
 
}