/* TP - EJERCICIO NRO. 05
   Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

{
    let X = 0;
    X = Number(prompt(`Ingrese un número`));

    if(X % 2 === 0)
    {
        console.log(`El número ${X} es PAR`);
    }
    else
    {
        console.log(`El número ${X} es IMPAR`);
    }
}
