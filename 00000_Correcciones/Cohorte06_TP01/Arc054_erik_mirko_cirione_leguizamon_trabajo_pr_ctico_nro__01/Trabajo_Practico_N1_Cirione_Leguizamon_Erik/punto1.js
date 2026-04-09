/*
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones. -          -          -          -          Muestre la suma de ambos (A + B) Muestre la resta (A – B) Muestre el Producto de ambos (A * B) Muestre el Cociente entre ambos (A / B) Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa 
*/

let a = 0;
let b = 0;
let suma = 0;
let resta =0;
let producto = 0;
let cociente = 0;


a = Number (prompt (`Ingrese el valor del numero A:`));
b = Number (prompt (`Ingrese el valor del numero B:`));

suma = a+b;

resta = a-b;

producto = a*b;

if (b=0){
    cociente = a/b;
}

console.log(`El numero A: ${a}`);
console.log(`El numero B: ${b}`);

console.log(`La suma de ambos es: ${suma}`);
console.log(`La resta de ambos es: ${resta}`);
console.log(`El producto de ambos es: ${producto}`);

if (b=0){
    console.log(`El cociente de ambos es: ${cociente}`);
}

/*
En el caso de que: "B=0" el programa me arroja por consola un "infynite" esto es porque matematicamente la divicion por 0 no se puede resolver
*/





