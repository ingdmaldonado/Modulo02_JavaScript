export const espacio = texto =>{

    let contador =0;

    for(let i =0; i < texto.length; i++){
        if(texto.charAt(i) === " "){
            contador ++;
        }
        if(contador===3){
            break;
        }
    }
    return contador >= 3;

}