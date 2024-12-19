


    /* (1ro) Visualizar todos los datos del 
    Vector a traves de la Consola */

    //console.log(PadronElectoral);

    /* (2do) Realizar un forEach completo */

    
    PadronElectoral.forEach((element,indice)=>
        {
            console.log(element);
        })
          
        
            

    /* (3ro) Realizar un forEach con una arrow function corta 
    
        1ro) tiene que tener un solo parametro
        2do) tiene que tener una sola instrucción en el cuerpo
    
    */
    
    PadronElectoral.forEach(element => console.log(element.NOMBRE ));

    /* find = buscar = encontrar */
