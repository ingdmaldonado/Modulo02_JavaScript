/* TP - EJERCICIO NRO. 04
   Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
   también resuelva el mismo problema utilizando un operador ternario.
*/

{
    let numero = 0;
    numero = Number(prompt(`Ingrese un número`));

    /* SOLUCIÓN 1: if / else */

    console.log(`--- Solución con if/else ---`);

    if(numero >= 0)
    {
        console.log(`El número ${numero} es POSITIVO`);
    }
    else
    {
        console.log(`El número ${numero} es NEGATIVO`);
    }

    /* SOLUCIÓN 2: Operador Ternario */
    
    console.log(`--- Solución con Operador Ternario ---`);

    let resultado = numero >= 0 ? `POSITIVO` : `NEGATIVO`;

    console.log(`El número ${numero} es ${resultado}`);
}
