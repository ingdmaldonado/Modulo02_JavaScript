/*Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.
*/

{
    let ingreseNumero = 0;

    ingreseNumero = Number(prompt(`Ingrese el numero `));

    if(ingreseNumero >=0)
    {
        console.log(`el numero es positivo`)
    }
    else
    {
        console.log(`el numero es negativo`)
    }
}

{
    let = ingreseNumero = 0;

    ingreseNumero = Number(prompt(`Ingrese el numero `));

    let resultado = (ingreseNumero >=0)?"El numero es positivo":"El numero es negativo";

    console.log(resultado)
}