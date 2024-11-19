
/* 
    Ejercicio Nro. 05: 
    Realizar un programa que permita introducir un valor (X) 
    y determinar si el mismo es PAR ó IMPAR.    
*/

{
    let numeroX = 0;

    numeroX = Number(prompt(`Por favor ingrese un numero`));

    let resultadoDivision = numeroX / 2; // esto me devuelve el resultado de la división //

    let restoDivision = numeroX % 2; // guardar el resto de la división

    console.log(`el Numero ingresado es ${numeroX} y el resultado de la division es ${resultadoDivision}`);

    console.log(`el Numero ingresado es ${numeroX} y el resto ó modulo es ${restoDivision}`);

    if(restoDivision === 0)
    {
        console.log(`El numero ingresado es PAR`);
    }
    else
    {
        console.log(`El numero ingresado es IMPAR`);
    }
}