/*Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa*/

{let numeroA = Number(prompt(`ingrese el número A`));

let numeroB = Number(prompt(`ingrese el número B`));

let suma = 0;

let resta = 0;

let producto = 0;

let cociente = 0;

suma = numeroA + numeroB;

resta = numeroA - numeroB ;

producto = numeroA * numeroB;

cociente = numeroA / numeroB;

if (numeroB === 0) { 

    console.log(`El cociente no se puede calcular porque el número B es igual a cero`);

} 
else {

    console.log(`El cociente es:${cociente}`);

}
console.log(`La suma es:${suma}`);

console.log(`La resta es:${resta}`);

console.log(`El producto es:${producto}`);

console.log(`El cociente es:${cociente}`);
}

