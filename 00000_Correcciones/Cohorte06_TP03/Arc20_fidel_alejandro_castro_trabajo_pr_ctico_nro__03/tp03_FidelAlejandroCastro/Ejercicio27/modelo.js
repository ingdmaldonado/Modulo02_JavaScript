export const fnContarVocales = (cadena, vocales) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena.charAt(i).toLowerCase();

        for (let j = 0; j < vocales.length; j++) {
            if(caracterActual === vocales.charAt(j)){
                contador++;
                break
            }
        }
    }
    return contador;
};