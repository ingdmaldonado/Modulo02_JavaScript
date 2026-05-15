export const fnCalcularVocales = (cadenaTexto)=>{

    let contador = 0;
    let recorrer = 0;

    for(recorrer; recorrer < cadenaTexto.length; recorrer++){

        if(cadenaTexto[recorrer] === `a` || cadenaTexto[recorrer] === `A` || cadenaTexto[recorrer] === `e` || cadenaTexto[recorrer] === `E` || cadenaTexto[recorrer] === `i` || cadenaTexto[recorrer] === `I` || cadenaTexto[recorrer] === `o` || cadenaTexto[recorrer] === `O` || cadenaTexto[recorrer] === `u` || cadenaTexto[recorrer] === `U`){

            contador++;
        }
    }

    return contador;

};