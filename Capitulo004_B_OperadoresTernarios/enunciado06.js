
/*
"Dado un número del 1 al 4, muestra la estación del año
 correspondiente:
1 es 'Primavera', 2 es 'Verano', 3 es 'Otoño', 4 es 'Invierno'."
*/

{

    let numeroDeEstacionDelAnio = 0;
    numeroDeEstacionDelAnio = Number(prompt("Ingrese un día que represente a la estación del año"));
    console.log(numeroDeEstacionDelAnio);

    let nombreEstacionDelAnio = "";

    switch(numeroDeEstacionDelAnio)
    {
        case 1:
            {
                nombreEstacionDelAnio = "Primavera";
                break;
            }

        case 2:
            {
                nombreEstacionDelAnio = "Verano";
                break;
            }

        case 3:
            {
                nombreEstacionDelAnio = "Otoño";
                break;
            }

        case 4:
            {
                nombreEstacionDelAnio = "Invierno";
                break;
            }

        default:
            {
                nombreEstacionDelAnio = "valor inválido";
                break;
            }

    }

    console.log(nombreEstacionDelAnio);

}