
export const fnSinNumeros = (cadena) => {

    let tieneNumero = false;

    for (let caracter of cadena) {

        if (caracter >= "0" && caracter <= "9") {

            tieneNumero = true;

            break;
        }
    }

    if (tieneNumero === true) {

        return false;

    } else {

        return true;
    }
};