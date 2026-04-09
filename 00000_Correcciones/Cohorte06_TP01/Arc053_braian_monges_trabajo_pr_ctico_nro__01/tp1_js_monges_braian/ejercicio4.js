/*Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario. */

{
    let número = 0;
    número = Number(prompt(`ingrese un número`))

    if(número >= 0)
        {console.log(`positivo`)
    }
    else
    {
        console.log(`negativo`)
    }
    
    let resultado = número >= 0 ? `positivo` : `negativo`
    console.log(`resultado: ${resultado}`)
}