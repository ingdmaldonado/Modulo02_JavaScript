{ 
    let edadNiño = 0;

    let edadadolescente = 0;

    let edadadulto = 0;

    let edadadultomayor = 0;

    edad = Number(prompt(`ingrese su edad`));
    
    console.log(edad);

    if ((edad >= 0) && (edad <= 12))
    {
        console.log(`usted es un niño`);
    }
    else
    
        if((edad >= 13) && (edad <= 17 ))
    {
        {console.log(`usted es un adolescente`)}
     }
    else 
        
            if((edad >= 18) && (edad <= 64) )
            {console.log(`usted es adulto`)}
    
    else 
         
           if(edad > 64)  
            {console.log(`usted es adulto mayor`)}

}