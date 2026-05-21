export const fnEspaciosEnBlanco =(cadenaDeTexto)=>{
    let espacio = false
    let contador = 0;
    for(let i =0 ; i  < cadenaDeTexto.length ;i++)
        {
            let caracter = cadenaDeTexto.charAt(i).toUpperCase();
            
            if(caracter ===` `)
            {
                contador ++;
            };



            if(contador >=3){
            espacio = true;
            break;
        };
        }
        
        return espacio;

};