/*

Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.

*/

{
    let numeroIngresado = 0;

    numeroIngresado = Number(prompt(`Ingrese un numero`));

    if(numeroIngresado >= 0)
    {
        console.log(`El numero es Positivo`);
    }
    else
    {
        console.log(`El numero es Negativo`);
    }
}

{
    let numeroIngresado = 0;

    numeroIngresado = Number(prompt(`Ingrese un numero`));

    let resultado = numeroIngresado >= 0 ? (`El numero es Positivo`) : (`El numero es Negativo`);

    console.log(resultado);
}