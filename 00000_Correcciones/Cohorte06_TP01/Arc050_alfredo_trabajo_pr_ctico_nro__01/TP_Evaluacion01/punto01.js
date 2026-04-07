/*Ejercicio Nro. 01:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las
siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa
 */

{

let A=0;
let B=0;
let suma=0;
let resta=0;
let producto=0;
let cociente=0;

A = Number(prompt(`Ingrese el primer numero`));
B= Number(prompt(`Ingrese el segundo numero`));

suma= (A+B);
console.log(`La suma entre A y B es: ${suma}`);

resta=(A-B);
console.log(`La resta entre A y B es: ${resta}`);

producto=(A*B);
console.log(`El producto entre A y B es: ${producto}`);
if(B===0){

    console.log(`No se puede dividir por cero`);
}
else
{
   cociente=(A/B);
console.log(`El cociente entre A y B es: ${cociente}`); 
}







}