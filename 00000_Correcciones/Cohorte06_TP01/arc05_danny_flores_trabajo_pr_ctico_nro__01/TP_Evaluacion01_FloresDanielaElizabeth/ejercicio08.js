/* TP - EJERCICIO NRO. 08
   Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
   adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
*/

{
    let edad = 0;
    edad = Number(prompt(`Ingrese la edad de la persona`));

    if((edad >= 0) && (edad <= 12))
    {
        console.log(`La persona tiene ${edad} años y es un NIÑO`);
    }
    else
    {
        if((edad >= 13) && (edad <= 17))
        {
            console.log(`La persona tiene ${edad} años y es un ADOLESCENTE`);
        }
        else
        {
            if((edad >= 18) && (edad <= 64))
            {
                console.log(`La persona tiene ${edad} años y es un ADULTO`);
            }
            else
            {
                if(edad > 64)
                {
                    console.log(`La persona tiene ${edad} años y es un ADULTO MAYOR`);
                }
                else
                {
                    console.log(`Edad inválida. Ingrese un valor mayor o igual a 0`);
                }
            }
        }
    }
}
