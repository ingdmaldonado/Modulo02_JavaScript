
/*
Ejercicio Nro. 05: 
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.

*/


{
    /* cuando abro llaves estoy creando un bloque
    de codigo 
    */

    let numeroIngresado = 0;
    numeroIngresado = Number(prompt("ingrese un numero"));

    /* aqui lo que estoy haciendo es dividir por 2 y 
    guardar el resultado */
    let resultadoCociente = 0;
    resultadoCociente = numeroIngresado / 2;

    /* aqui lo que estoy haciendo es dividir por 2
    y quedarme con el resto de la divisón */

    let restoDivision = 0;
    restoDivision = numeroIngresado % 2; // modulo de la division

    console.log(resultadoCociente);

    if(numeroIngresado % 2 === 0)
    {
        console.log(`El numero ingresado ${numeroIngresado} es PAR`);
    }
    else
    {
        console.log(`El numero ingresado ${numeroIngresado} es IMPAR`);
    }




}