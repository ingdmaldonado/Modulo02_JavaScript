

{

    console.log("el controlador esta funcionando");


    /******************************************************************/
    /**************  Estructura Repetitiva FOR = PARA  ****************/
    /******************************************************************/

        // (variable de iteración, condición de fin, incremento de la variable de iteración)

    /*
        EJEMPLO NRO. 01
        variable de iteración i: comienza en 0
        condición de permanencia en el ciclo: i < 10;
        incremento de la variable de iteración: i++ => significa i = i + 1;
    */   

        for(let i = 0; i < 10;i=i+1)
        {
            console.log(`Este es un Paso a Paso del ciclo For ${i}`);
        }

    /* 
        EJEMPLO NRO. 02 
        variable de iteración j: comienza en 1
        condición de permanencia dentro del ciclo: j <= 10;
        incremento de la variable de iteración: i+2;
    */

        for(let j = 1; j <= 10; j=j+2)
        {
            console.log(`Este es el Segundo Ciclo For ${j}`);
        }

    /******************************************************************/
    /***********  Estructura Repetitiva WHILE = MIENTRAS **************/
    /******************************************************************/

        /* variable inicializada específicamente
        con la intención de ponerla como condición
        de finalización del ciclo repetitivo while */

        let DeseaContinuar = 'SI'; 
        
        while(DeseaContinuar === 'SI')
            {

                console.log("Esto se ejecuta dentro del ciclo, es una iteración");

                DeseaContinuar = prompt("Desea Continuar (SI/NO) ?");

            }

        console.log("por aquí finalicé el ciclo repetitivo while");


    /******************************************************************/
    /*********  Estructura Repetitiva DO WHILE = MIENTRAS *************/
    /******************************************************************/

            /* este ciclo, siempre ejecutará una iteración, por mas
            condiciones que uno coloque, siempre ejecutará una instrucción, paso, ó
            iteración*/

            do 
            {
                console.log("esto se ejecuta dentro del ciclo do while");
                DeseaContinuar = prompt("Desea Continuar (SI/NO) ?");

            }while(DeseaContinuar ==="SI");


}