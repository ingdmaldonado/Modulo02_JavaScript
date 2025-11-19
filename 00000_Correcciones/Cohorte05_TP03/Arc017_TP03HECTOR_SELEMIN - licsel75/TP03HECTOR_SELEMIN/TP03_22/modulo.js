


export const cuentaConsonantes= (cadena)=>{

   let cuentaConsonantes = 0;

    let cuentaLetras = 0;

    for(let indice = 0;indice < cadena.length;indice = indice + 1)
    {
        let caracterExtraido = cadena[indice].toUpperCase();

        

        if((caracterExtraido === 'A') )
        {
           
        }
        else{
            if((caracterExtraido === 'E') )
            {
            
            }
            else{
                 if((caracterExtraido === 'I') )
                {
                
                }
                else{
                     if((caracterExtraido === 'O') )
                    {
                        
                    }
                    else{
                          if((caracterExtraido === 'U') )
                            {
                                
                            }
                            else{
                                cuentaConsonantes=cuentaConsonantes+1
                            }

                    }

                }

            }
        }
         




        
        
       

    }
    



    return cuentaConsonantes;

};






