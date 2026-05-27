export const fnCantidadDeVocales =(cadenaDeTexto)=>{
    let contadorVocales = 0;
    for(let i =0 ; i  < cadenaDeTexto.length ;i++)
        {
            let caracter = cadenaDeTexto.charAt(i).toUpperCase();
            console.log(caracter);
            if((caracter === `A`)||(caracter === `E`)||(caracter === `I`)||(caracter === `O`)||(caracter === `U`))
            {
                contadorVocales = contadorVocales +1;
            }
        }
        return contadorVocales;

};