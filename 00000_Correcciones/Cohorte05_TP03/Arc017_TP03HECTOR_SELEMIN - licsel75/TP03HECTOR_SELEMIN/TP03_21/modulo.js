


export const contarVocales= (cadena)=>{

   let cuentaVocales = 0;

    let cuentaLetras = 0;

    for(let indice = 0;indice < cadena.length;indice = indice + 1)
    {
        let caracterExtraido = cadena[indice];

        

        if((caracterExtraido === 'A') || (caracterExtraido === 'a'))
        {
            cuentaVocales = cuentaVocales + 1;
        }
         if((caracterExtraido === 'E') || (caracterExtraido === 'e'))
        {
            cuentaVocales = cuentaVocales + 1;
        }
         if((caracterExtraido === 'I') || (caracterExtraido === 'i'))
        {
           cuentaVocales = cuentaVocales + 1;
        }
         if((caracterExtraido === 'O') || (caracterExtraido === 'o'))
        {
            cuentaVocales = cuentaVocales + 1;
        }
         if((caracterExtraido === 'U') || (caracterExtraido === 'u'))
        {
            cuentaVocales = cuentaVocales + 1;
        }

    }
    



    return cuentaVocales;

};






