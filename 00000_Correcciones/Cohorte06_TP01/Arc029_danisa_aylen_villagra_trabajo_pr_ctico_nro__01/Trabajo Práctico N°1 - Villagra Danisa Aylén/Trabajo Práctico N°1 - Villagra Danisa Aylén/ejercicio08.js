/*Ejercicio Nro. 08: Estructuras Condicionales (if/else) 
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).*/

{
    let edad = Number(prompt(`Ingrese edad:`));

    if((edad >= 0 && edad <= 12))
    {
        console.log(`Es niño/a, tiene ${edad} años.`);
    }
    else
    {
        if(edad >= 13 && edad <= 17)
        {
            console.log(`Es adolescente, tiene ${edad} años.`)
        }
        else
        {
            if(edad >= 18 && edad <= 64)
            {
                console.log(`Es adulto, tiene ${edad} años.`)
            }
            else
                {
                    console.log(`Es adulto mayor, tiene ${edad} años`)
                }
        }
    }
}