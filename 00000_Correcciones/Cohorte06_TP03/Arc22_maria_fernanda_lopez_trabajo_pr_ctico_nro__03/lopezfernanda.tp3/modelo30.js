export const fnTresEspacios = (cadenaDeTexto) => {

    let contador = 0;

    for (let caracter of cadenaDeTexto) {

        if (caracter === ' ') {

            contador++;

            if (contador === 3) {

                break;
            }
        }
    }

    if (contador === 3) {

        return true;

    } else {

        return false;
    }
};