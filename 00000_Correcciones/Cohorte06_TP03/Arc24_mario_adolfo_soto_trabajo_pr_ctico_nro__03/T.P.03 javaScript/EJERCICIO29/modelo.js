export const fnCantidadLetraS =(cadenaDeTexto)=>{
    let letraS = false
    let contador = 0;
    for(let i =0 ; i  < cadenaDeTexto.length ;i++)
        {
            let caracter = cadenaDeTexto.charAt(i).toUpperCase();
            
            if(caracter ===`S`)
            {
                contador ++;
            };
        }
        if(contador >=2){
            letraS = true;
        };
        return letraS;

};