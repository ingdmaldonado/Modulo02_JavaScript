export const fnTresEspacios = (cadena, caracterVacio) => {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        let caracterActual = cadena.charAt(i).toLowerCase();

        for (let j = 0; j < caracterVacio.length; j++) {
            if (caracterActual === caracterVacio.charAt(j)) {
                contador++;
                break
            }
        }

        if (contador === 3) {
            return true;
        }
    }
    return false;
};