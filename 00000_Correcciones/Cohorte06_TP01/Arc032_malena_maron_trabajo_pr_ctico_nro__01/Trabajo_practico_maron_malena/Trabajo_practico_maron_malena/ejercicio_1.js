/*Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las 
siguientes operaciones. -          -          -          -          
Muestre la suma de ambos (A + B) 
Muestre la resta (A – B) 
Muestre el Producto de ambos (A * B) 
Muestre el Cociente entre ambos (A / B)*/


{
 let a = 0;
 let b = 0;
 
 a = Number(prompt("Ingrese número a"));
 b = Number(prompt("Ingrese número b"));

 let suma = a + b ;
 let resta = a - b; 
 let producto = a * b;
 let cociente = a / b; 

 console.log(`La suma de a y b es :${suma}`);
 console.log(`La resta de a y b es: ${resta}`);
 console.log(`El producto de a y b es : ${producto}`);
 console.log(`El cociente entre a y b es : ${cociente}`);

if( b === 0)
 {
    console.log(`No se puede dividir por cero`);
 }
}