/*Ejercicio Nro. 01: 
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones. -          -          -          -          
Muestre la suma de ambos (A + B) 
Muestre la resta (A – B) 
Muestre el Producto de ambos (A * B) 
Muestre el Cociente entre ambos (A / B) 
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa */
{
//inicializacion
let A = 0;
let B = 0;

A = Number(prompt(`ingrese el número A`));
B = Number(prompt(`ingrese el número B`));

// operaciones

let suma = A + B;
let resta = A - B;
let producto = A * B;
let cociente = 0;

// mostrar resultados

console.log(`suma: ${suma}`);
console.log(`resta: ${resta}`);
console.log(`producto: ${producto}`);

// verificacion cuando b = 0

if(B)
{
    let cociente = A / B;
    console.log(`cociente: ${cociente}`);
}
else{
    console.log(`no se puede didivir por cero`);
}




}