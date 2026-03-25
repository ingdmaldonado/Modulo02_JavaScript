
/* Realizar un programa en JavaScript que permita 
ingresar el número de día y evalúe y diga a que dia
de la semana corresponde 

    1 => lunes
    2 => martes
    3 => miercoles

    ...

    7 => Domingo


    * if/else
    * operadores ternarios
    * switch (hoy !!!)

*/

{
    // declaro e inicializo una variable en cero
    let numeroDeDia = 0; 

    numeroDeDia = prompt("Por favor ingrese el dia");

    // Nan => Not a number

    if(isNaN(numeroDeDia)) // Si no es un numero
    {
        console.log("por favor ingrese un valor correcto. numerico del 1 al 7");
    }
    else
    {
        /* aqui lo que hago es convertir
        la variable numero de dia a formato
        numerico y guardarlo en la misma variable
        */

        numeroDeDia = Number(numeroDeDia);

        console.log(numeroDeDia);

        switch(numeroDeDia)
        {
            case 1:
                {
                    console.log(`Lunes`);
                    break;
                }

            case 2:
                {
                    console.log(`Martes`);
                    break;
                }

            case 3:
                {
                    console.log(`Miercoles`);
                    break;
                }
            case 4:
                {
                    console.log(`Jueves`);
                    break;
                }

            case 5:
                {
                    console.log(`Viernes`);
                    break;
                }

            case 6:
                {
                    console.log(`Sábado`);
                    break;
                }

            case 7:
                {
                    console.log(`Domingo`);
                    break;
                }
            default:
                {
                    console.log(`No es un día válido`);
                }
        }
    }
}

/* Estructuras repetitivas o de
control de flujo

    (1ro) if/else => 
        esta pensado para todo
        tipo de evaluación lógica.

        if ((a > b) && (b > c) && (a + b <= d))
        {
            conjunto de instrucciones.
        }
        else
        {
            conjunto de instrucciones.
        }

    (2do) operador ternario => cuando quiero
    asignar el resultado de una operación
    lógica de comparación de solamente dos
    resultados posibles. me viene de diez
    el operador ternario.

        let resultado = 4%2 === 0 ? :;

    (3ro) switch => Genexus/SQL Server / Oracle => case

    switch(aquiVaUnaVariable)
    {
        case 1:
            {
                // por aqui puedo tener conjunto de
                instrucciones.
                break;
            }

        case 2:
            {}

        default:
            {}

    }

    Variables Discretas => switch

            1,2,3,4,5

            1,2,3,4,...

    Variables Continuas => if/else

        600.000,00  - 1.000.000,00

        if ((importe >= 600000) && (importe <= 1000000))

    compración muy simple y asignarla a una variable => operador ternario.
    
*/