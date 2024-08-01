
{
    /* 
        Enunciado 01
        "Dado un número, verifica si es positivo o negativo. Si es positivo, muestra 
        'El número es positivo', de lo contrario, muestra 'El número es negativo'."
    */

    /******************************************/
    /* Si lo hacemos con Operadores Ternarios */
    /******************************************/
    
        let numeroIngresado = 0;

        numeroIngresado = Number(prompt("Ingrese un numero por favor"));

        let resultadoEvaluacion = '';

        resultadoEvaluacion = numeroIngresado > 0 ? 'es positivo con el operador ternario' : 'es negativo con el operador ternario';

        console.log(resultadoEvaluacion);

    /*****************************************/
    /* Si lo hacemos con if/else tradicional */
    /*****************************************/

        if(numeroIngresado > 0)
        {
            console.log("es positivo por el if");
        }
        else
        {
            console.log("es negativo por el if");
        }


    /* no se puede hacer con switch porque solo se puede evaluar la condición de igualdad === */
    


}