export const verificarEspacios = (cadena) => {
    let repeticiones = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ")
        {
            repeticiones++;
            if(repeticiones == 3){
                break;
            }
        }
    }
    return repeticiones >= 3;
}