
{
    /* for 
    
        se compone de 3 partes

        parte 1 : una variable indice que establece el inicio del ciclo => let indice = 1;

        parte 2: una evaluación o expresión lógica que indica la condición de permanencia dentro del ciclo

        parte 3: como se incrementa paso a paso el indice => indice = indice + 1;

        cuando conozco de anticipación donde comienzo y donde termino
        una iteración.

    */

    /*
    for(let indice = 1;indice <= 10;indice = indice+1)
    {
        console.log(`esto se repite ${indice}`);
    }
    */
    

    /* 
        - no tiene un principio y un final establecido previamente
        - mientras se cumpla una condición nos quedamos dentro
        del ciclo.
        - cuando la condición no se cumpla, salimos del ciclo

    */

    let continua = `S`;

    /* la única forma de permanecer dentro
    del ciclo iterativo while, es que
    responda S mayúscula ó s minúscula
    */

    /* 
    
        (sueldo > 2500) && (edad > 30)

        

    */

        

    while(continua === 'S' || continua === 's')
    {
        console.log(`Esto esta por dentro del ciclo`);

        continua = prompt(`Desea continuar ? (S/N)`);
    }

    /* donde puedo cambiar el valor de la variable continua ? */
    console.log(`Finalizó el ciclo. terminé el proceso`);

}
