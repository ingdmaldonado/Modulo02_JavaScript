

export const cueuntaNumeros= (cadena)=>{

   
   let masDeUnDigito=false;

    

    for(let indice = 0;indice < cadena.length;indice = indice + 1)
    {
        let caracterExtraido = cadena[indice];

        

         if (!isNaN(caracterExtraido) )
        {
            if (caracterExtraido !== ' ')
            {
            masDeUnDigito=true;            
            break;

            }

            

            
        }    

    }     
      



    return masDeUnDigito;

};
