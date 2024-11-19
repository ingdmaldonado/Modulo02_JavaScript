
/* vamos a realizar un programa 
que permita introducir el dia 
de la semana. siendo 1 = lunes, 2 = martes
... y que el programa determine el nombre de dia
*/
{

    /* en que caso utilizo switch 
    
        - cuando quiero evaluar una sola variable
        y los casos que asume esa variable.

        - generalmente se utsa cuando las opciones
        y los valores que asume esa variable son 
        valores discretos. 
            1,2,3,4
            "lunes"

        (importe >=2000) && (importe <= 4000)

        - muy legible

        - las opciones están claramente identificadas

        - es que cada opción, puedo abrir un bloque de código


    
    */


    let numeroDeDia = 0;

    numeroDeDia = Number(prompt("por favor ingrese el numero dia"));

    // nace y se declara y se inicializa en cero
    let numeroEntero = 0;

    switch(numeroDeDia)
    {
        case 1:
            console.log("lunes");
            break;
        case 2:
            {
                console.log("martes");

                // declarando la variable //
                numeroEntero = 200;

                break;
            }
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
            console.log("no corresponde a un dia válido");
            break;

    }

    console.log(numeroEntero);

    /*
    if(numeroDeDia === 1)
    {
        
    }*/


   // console.log("funcionando");

}