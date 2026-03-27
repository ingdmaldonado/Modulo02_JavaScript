/*
----------Ejercicio Nro. 04---------------- 
-------Estructuras Condicionales (if/else)---------

Ingrese un número y determine si es positivo o negativo 
usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando 
un operador ternario.


*/
{
    let numero = 0;
    let resultado = 0;

    numero = Number(prompt(`Ingrese un número:`));

    if (numero >= 0)
    {
        console.log(`${numero} es un número positivo!`);
    }
    else
    {
        console.log(`${numero} es un número negativo!`);
    }

    /*operador ternario*/
    resultado = numero <= 0 ? console.log(`${numero} es un número positivo!`): console.log(`${numero} es un número positivo!`);
    
    console.log (resultado);
}