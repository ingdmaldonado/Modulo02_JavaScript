
/* 
    "Dado un día de la semana representado por un número del 1 al 7, muestra el nombre del día correspondiente. Por ejemplo, 1 es 'Lunes', 2 es 'Martes', y así sucesivamente."
    Ejemplo en código:
 */

    {
        let numeroDiaDeSemana = 0;

        numeroDiaDeSemana = Number(prompt("Ingrese el numero del día de la semana"));

        console.log(numeroDiaDeSemana);

        switch(numeroDiaDeSemana)
        {
            case 1:
                console.log("lunes");
               
                //este condicional no tiene ningún sentido, esta a modo de ejemplo. //
                if(1 > 2)
                {
                    console.log("es mayor");
                }
                else
                {
                    console.log("es menor");
                }

                break;

            case 2:
                console.log("martes");
                break;
            case 3:
                console.log("miercoles");
                break;
            case 4:
                console.log("jueves");
                break;
            case 5:
                console.log("viernes");
                break;
            case 6:
                console.log("sabado");
                break;
            case 7:
                console.log("domingo");
                break;
            default:
                console.log("dia no valido");
                break;
        }

    }