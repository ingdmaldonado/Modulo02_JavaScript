export const verificarLetra = (cadena) => {
    let repeticiones = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === "s")
        {
            repeticiones++;
            if(repeticiones >= 2){
                break;
            }
        }
    }
    return repeticiones >= 2;
}