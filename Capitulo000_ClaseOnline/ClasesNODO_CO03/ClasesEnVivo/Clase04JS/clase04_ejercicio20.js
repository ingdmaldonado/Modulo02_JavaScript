/* 

Ejercicio Nro.20: Estructuras condicionales if/else
Realizar un programa que permita el 
ingreso de dos números (A, B) y 
determine si la suma de ambos es mayor a 500.
 En ese caso mostrar un cartel diciendo que la 
 suma de ambos superó a 500.

*/

{
    let numero1 = 0;
    let numero2 = 0;

    numero1 = Number(prompt("Ingrese numero 1"));
    numero2 = Number(prompt("Ingrese numero 2"));

    console.log(numero1,numero2);

    /* variante 1 => declarar una
    variable. sumar y luego preguntar
    por la variable */

    let suma = 0;
    suma = numero1 + numero2;

    if(suma > 500)
    {
        console.log("variante 1 - la suma es mayor a 500");
    }
    else
    {
        console.log("variante 1 - la suma es menor a 500");
    }

    /* variante 2 - operador ternario */

    let mensaje = (numero1 + numero2) > 500 ? 'variante 2 - es mayor':'variante 2 - es menor';
    console.log(mensaje);


}