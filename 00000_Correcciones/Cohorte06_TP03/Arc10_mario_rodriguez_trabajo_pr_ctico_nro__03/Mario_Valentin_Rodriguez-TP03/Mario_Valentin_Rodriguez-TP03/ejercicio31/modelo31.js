export const fnCalcularDigitoN = (cadenaTexto) =>{

    let recorrer = 0;

    for(recorrer; recorrer < cadenaTexto.length; recorrer++){

        if((cadenaTexto[recorrer] >= `0`) && (cadenaTexto[recorrer] <= `9` )){

            return false;

        }
        
    }

    return true;

};