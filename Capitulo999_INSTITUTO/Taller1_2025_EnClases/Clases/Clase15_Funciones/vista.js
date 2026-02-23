

/* forma clasica */

/* DEFINICIÓN DE LA FUNCIÓN */

function cuadradoDeUnNumero(numero)
{
    let auxiliar = 0;

    auxiliar = numero * numero;

    return auxiliar;
}

{
    console.log(`programa principal`);

    /* vamos a ver todas las formas
    de INVOCAR una función */

    /* forma 1 - invocacion directa */
    console.log(cuadradoDeUnNumero(7));

    /* forma 2 - invocar y guardar el resultado en una variable */
    let resultado1 = cuadradoDeUnNumero(5);

    console.log(resultado1);

    /* forma 3 - invocar dentro de una expresiona matematica */

    let resultado3 = cuadradoDeUnNumero(3)*2-1;

    console.log(resultado3);

    /* forma 3 - dentro de una expresión matematica */

    let resultado4 = cuadradoDeUnNumero(cuadradoDeUnNumero(-3))*(-1) + 3 * cuadradoDeUnNumero(7);

    console.log(resultado4);



}

/* 
    MOMENTO DE LA DEFINICIÓN

    MOMENTO DE LA INVOCACIÓN 
    
*/