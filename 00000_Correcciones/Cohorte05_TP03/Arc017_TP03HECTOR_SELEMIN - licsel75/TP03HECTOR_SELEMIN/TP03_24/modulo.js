


export const cuentaEspaciosEnBlanco= (cadena)=>{

   let cuentaBlaco = 0;
   let masDeTresBlancos=false;

    

    for(let indice = 0;indice < cadena.length;indice = indice + 1)
    {
        let caracterExtraido = cadena[indice].toUpperCase();

        

        if((caracterExtraido === ' ') )
        {
           cuentaBlaco=cuentaBlaco+1;
            if (cuentaBlaco>=3)
             {
            masDeTresBlancos=true;
            break;

            }
        }
       
         


       

        
        
       

    }     
      



    return masDeTresBlancos;

};






