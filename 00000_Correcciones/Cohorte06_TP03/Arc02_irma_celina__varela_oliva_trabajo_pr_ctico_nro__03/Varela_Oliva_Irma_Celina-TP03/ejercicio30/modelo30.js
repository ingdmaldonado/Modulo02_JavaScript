export const fnCalcularEspacios = (cadenaTexto)=>{

    let contador = 0;
    let recorrer = 0;

    for(recorrer; recorrer < cadenaTexto.length; recorrer++){

        if(cadenaTexto[recorrer] === ` `){

            contador++;

        }
        
        if(contador === 3){

            return true;

        }

    }

    return false;
};