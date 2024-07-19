
{
    console.log("andando");


    /* CASO NRO. 01 - variables no inicializadas = undefined
    que participan de alguna formula, algún
    calculo o condicional 
    */

    let importeCompra;

    // con esta comparación lógica puedo saber si el valor es indefinido //
    if (importeCompra === undefined)
    {
        console.log("el importe de la compra es indefinido");
    }
    else
    {
        console.log("el importe está definido");
    }

    /* aqui puedo realizar una comparación y la comparación
    es incierta.
    */
    
    if (importeCompra > 200000)
        {

            let diezPorCiento = importeCompra * 10/100;

            console.log("entra por VERDADERO",importeCompra);

            console.log("El diez por ciento es ",diezPorCiento);
        }
    else
        {
            
            let diezPorCiento = importeCompra * 10/100;

            console.log("entra por FALSO",importeCompra);

            console.log("El diez por ciento es ",diezPorCiento);
        }

    /* CASO. NRO. 02 - equivocarse al colocar una
    variable inexistente, con un nombre parecido
    pero no el mismo */

    let TOTAL = 400000;

 //   let DiezPorCiento = TOTAl * 10/100; /* error, variable no definida */

 //   console.log(DiezPorCiento); 


    /* CASO NRO. 03 - olvidarse de poner la condición
    de comparación en un condicional */

    let ValorDeCompra = 2000

    if (ValorDeCompra)
        {
            console.log("entra por verdadero");
        }
    else
        {
            console.log("entra por falso");
        }

    
    /* CASO NRO. 04 - Olvidarse de cerrar paréntesis, comillas, llaves */

        // console.log("me estoy olvidando del cierre del parentesis";

        // console.log("me estoy olvidando de unas comillas a proposito);


    /* CASO NRO. 05 - CERRAR UN CONDICIONAL CON ; en la sentencia */

    let valor1 = 100;
    let valor2 = 300;

    if (valor1 > valor2);
        {
            console.log("el valor 1 es mayor que el valor 2");
        }
      

}