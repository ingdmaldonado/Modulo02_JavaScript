
{
    console.log(`Aplicación is running`);

    /* Estructuras repetitivas 
    
        for
        while
        do while
    
    */

    /*
    
        1ra. indice con el que voy a manejar las iteraciones
        2da. condición de permanencia dentro del ciclo for
        3ra. incremento del indice

    */

    let totalFacturado1 = 300; // aqui la defino y le asigno un valor

    for(let i = 0;i <= 10;i = i+1)
    {
        /* las variables que se declaran
        aqui en el bloque de codigos del
        ciclo for. son únicas y exclusivas
        del ciclo. es decir, que a fuera
        NO EXISTEN.
        */
        console.log(`iteración ${i}`);

        /* cambiando el valor de una variable 
        que  ya existe previamente */
        totalFacturado1 = 500; 
       
        /* esta variable, nace y se asigna un valor. 
        pero muere a la salida del ciclo */
        
        let totalFacturado2 = 200; 

        /* cada vuelta que da el ciclo le decimos

            iteracion
            recorrido del bucle
            paso o step 
        */

    }

    //console.log(totalFacturado);



}