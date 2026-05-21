export const fnContarS = (cadena) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena.charAt(i).toLowerCase();
        if(caracterActual === 's'){
            contador++;
        }
    }

    if (contador >= 2){
        return true;
    }else{
        return false;
    }
};