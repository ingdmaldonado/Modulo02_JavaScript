/*
-----------Ejercicio Nro. 08----------- 
----Estructuras Condicionales (if/else)------

Realizar un programa que permita ingresar 
la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), 
adulto mayor (más de 64 años).
*/
{
    let edadPersona = 0;

    edadPersona = Number(prompt(`Ingrese su edad:`));

    if ((edadPersona > 0) && (edadPersona <= 12))
    {
        console.log(`${edadPersona} - Categoria: niño`);
    }
    else
    {
        if ((edadPersona >= 13) && (edadPersona <= 17))
        {
            console.log(`${edadPersona} - Categoria: adolescente`);
        }
        else
        {
            if ((edadPersona >= 18) && (edadPersona <= 64))
            {
                console.log(`${edadPersona} - Categoria: adulto`);
            }
            else
            {
                console.log(`${edadPersona} - Categoria: adulto mayor`);
            }
        }
    }


}