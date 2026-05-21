export const fnContarConsonantes = (cadena, consonantes) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena.charAt(i).toLowerCase();

        for (let j = 0; j < consonantes.length; j++) {
            if(caracterActual === consonantes.charAt(j)){
                contador++;
                break
            }
        }
    }
    return contador;
};