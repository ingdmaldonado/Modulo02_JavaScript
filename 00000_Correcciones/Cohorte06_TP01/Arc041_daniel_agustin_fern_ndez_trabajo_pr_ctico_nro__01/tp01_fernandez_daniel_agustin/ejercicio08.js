/*

Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años), adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).

*/

{
    let edadDeLaPersona = 0;

    edadDeLaPersona = Number(prompt(`Ingrese la edad`));

    if (edadDeLaPersona >= 65)
    {
        console.log(`Es un Adulto Mayor`);
    }
    else
    {
        if (edadDeLaPersona >= 18)
        {
            console.log(`Es un Adulto`);
        }
        else
        {
            if (edadDeLaPersona >= 13)
            {
                console.log(`Es un Adolescente`);
            }
            else
            {
                console.log(`Es un Niño`);
            }
        }
    }
}