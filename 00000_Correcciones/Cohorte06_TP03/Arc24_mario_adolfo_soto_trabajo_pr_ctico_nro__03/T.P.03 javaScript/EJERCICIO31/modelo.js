export const fnNumero =(cadenaDeTexto)=>{
    let contieneNumero = false
    let contador = 0;
    for(let i =0 ; i  < cadenaDeTexto.length ;i++)
        {
            let caracter = cadenaDeTexto.charAt(i);
            
            if((caracter >="0")&&(caracter<="9"))
            {
                contieneNumero =true;
                break;
            };

        }
        
        return contieneNumero;

};