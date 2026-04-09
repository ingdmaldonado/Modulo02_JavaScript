/*
Ejercicio Nro. 08: Estructuras Condicionales (if/else) 
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), 
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
*/

{
    let edad = 0;
    edad = Number(prompt(`ingrese su edad`));

    if (edad >= 0 && edad <= 12)
    {
        console.log(`niño`);
    }
    else if (edad >= 13 && edad <= 17)
    {
        console.log(`adolescente`);
    }
    else if (edad >= 18 && edad <= 64)
    {
        console.log(`adulto`);
    }
    else if (edad > 64)
    {
        console.log(`adulto mayor`);
    }
}