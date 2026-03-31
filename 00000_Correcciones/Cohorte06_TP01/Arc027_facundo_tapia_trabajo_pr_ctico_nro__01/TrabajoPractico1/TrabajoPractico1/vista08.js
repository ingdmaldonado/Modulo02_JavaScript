/*Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).*/

{
    let edad = 0;

    edad = Number(prompt(`Ingrese su edad porfavor`));

    if(edad <= 12)
    {
        console.log(`Es niño`);
    }
    else
    {
        if (edad <=17)
        {
            console.log(`es un adolecente`)
        }
        else
        {
            if (edad <=64)
            {
                console.log(`Es un adulto`);
            }
            else
            {
                console.log(`Es un adulto mayor`);
            }
        }
    }
}