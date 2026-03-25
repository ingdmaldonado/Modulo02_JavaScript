
{
    let numeroIngresado = 0;

    numeroIngresado = 8;

    let restoDivision = numeroIngresado % 2;

    /* haciendolo con un if/else tradicional */
    if(restoDivision === 0)
    {
        console.log("el numero es par");
    }
    else
    {
        console.log("el numero es impar");
    }


    let esParOImpar = 0;

    /* forma 1. donde pregunto por el valor de 
    una variable */
    esParOImpar = restoDivision === 0 ? 'es par':'es impar';

    /* forma 2. donde evaluo la expresión 
    dentro del operador ternario  */

    esParOImpar = (numeroIngresado % 2) === 0 ? 'es par':'es impar';


    console.log(esParOImpar);


    /*

        + sumo valores
        - resto valores
        * multiplico valores
        ** potencia de valores 2 ** 2
        a/b


        a % 2 => resto ó modulo.

        5 / 2 => 2 = 2 * 2 + (1) => El resto de la division


        8 / 2 => resto es cero. => 4 * 2 = 8.




    */


}