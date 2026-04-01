/*
Ejercicio N°1. :
Realizar un programa que permita el ingreso de 2 (dos numeros) (A y B)utilizando variables y realice las siguientes operaciones.
 -Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa 
*/


let A = 0;
let B = 0;
A = Number(prompt("Ingrese Valor de A: "));
B = Number(prompt("Ingrese Valor de B: "));

//realizar operaciones de suma, resta, multiplicación y división//

let suma = (A+B);
let resta = (A-B);
let producto = (A*B);
let division = (A/B);

 //resultados//

console.log("La suma de A + B es:" + suma);
console.log("La resta de A - B es:" + resta);
console.log("El producto de A * B es:" + producto);

// verificar la operación su B es igual a 0//

    if(B === 0)
{
    console.log("Esta Operación no es posible");
}
else{
    console.log("La división de A / B es:" + division)
}