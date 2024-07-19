

/* declaración de una función - Forma clásica */


    /*
        1 - la palabra reservada function 
        2 - el nombre de la función
        3 - los parametros de entrada entre () parentesis
        4 - {} el cuerpo de la función
        5 - el retorno de una función
    */

function Cuadrado(numero)
{
    return numero * numero;
}

// ejemplo de invocación de la función 
let Resultado = Cuadrado(5);

{
    /********************************************/
    /* DIFERENTES FORMAS DE INVOCAR UNA FUNCIÓN */
    /********************************************/

    /* Ejemplo Inovocación 1 - Invocarla y asignar su salida 
    a una variable. luego mostrar la variable 
    */

        let Resultado = Cuadrado(5);
        console.log(`El Resultado del Cuadrado es ${Resultado}`);

    /* Ejemplo Inovocación 2 - Puedo invocarla dentro de un console.log 
    directamente puedo invicarla dentro de un console.log
    */

        console.log(`El Cuadrado de un Numero es: ${Cuadrado(5)}`);

    /* Ejemplo Invocación 3 - puedo llamarla dentro de una expresión matemática 
    y participará del cálculo
    */

        let Resultado2 = 2 * Cuadrado(9) - 3

        console.log(`El Resultado de 2 * 9 al cuadrado - 3 = ${Resultado2} `);

    /* Ejemplo Invocación 4 - obtener un resultado a partir de una invocación
    y a ese resultado volverlo a pasar como parámetro nuevamente de la función */

   
    
        let Resultado3 = Cuadrado(3); //aqui obtengo el cuadrado de 3

        let Resultado4 = Cuadrado(Resultado3);// a ese resultado lo paso como parametro

        console.log(`El Resultado de 3 elevado a la cuarta potencia es = ${Resultado4}`);

        // Esto sería exáctamente igual a realizar lo siguiente //

        let Resultado5 = Cuadrado(Cuadrado(3));

        console.log(`El Resultadodo de 3 elevado a la cuarta potencia es = ${Resultado5}`);



}