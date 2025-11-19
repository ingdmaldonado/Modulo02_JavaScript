


export const cuentaSs= (cadena)=>{

   let cuentaSs = 0;
   let masDeDosS=false;

    

    for(let indice = 0;indice < cadena.length;indice = indice + 1)
    {
        let caracterExtraido = cadena[indice].toUpperCase();

        

        if((caracterExtraido === 'S') )
        {
           cuentaSs=cuentaSs+1;
        }
       
         




        
        
       

    }

          
    if (cuentaSs>=2){
        masDeDosS=true;

    }
    



    return masDeDosS;

};






