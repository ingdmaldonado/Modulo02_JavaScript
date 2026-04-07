/*
    Ejercicio Nro. 04: Estructuras Condicionales (if/else)
    Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también 
    resuelva el mismo problema utilizando un operador ternario.
*/

{
    let numeroX = 0;

    numeroX = Number(prompt(`Ingrese un número X`));

    console.log(`Número ingresado ${numeroX}`);

    console.log('============CON SENTENCIAS IF/ELSE===============');

    if( numeroX >=0 )
    {
        console.log('Número positivo');
    }else
    {
        console.log('Número negativo');
    }

    console.log('============CON OPERADOR TERNARIO===============');
    numeroX >= 0 ?  console.log('Número positivo'):console.log('Número negativo');
}