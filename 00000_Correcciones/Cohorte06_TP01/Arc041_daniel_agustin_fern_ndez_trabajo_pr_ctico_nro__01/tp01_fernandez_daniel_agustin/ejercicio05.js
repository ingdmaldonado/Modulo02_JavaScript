/*

Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.

*/

{
    let numeroIngresado = 0;

    numeroIngresado = Number(prompt(`Ingrese un numero`));

    if(numeroIngresado % 2 === 0)
    {
        console.log(`El numero es Par`);
    }
    else
    {
        console.log(`El numero es Impar`);
    }
}