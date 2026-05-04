export const fnCalcularDosS=(palabra)=>{

    let contador=0;
    let recorrer=0;

    for(recorrer; recorrer < palabra.length; recorrer++){
        if(palabra[recorrer] === `s` || palabra[recorrer] === `S`){
            contador++;
        }
        
    }

    return contador >= 2;
};
