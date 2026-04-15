/*Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.*/

{
 let numero = 0;

numero = Number(prompt('Ingrese un numero'));

let respuesta = (numero % 2) === 0 ? `El número es PAR`:`El número es IMPAR`;

console.log(respuesta);

}
