// Arrow Function
export const tieneTresEspacios = (cadena) => {

    let contadorEspacios = 0;

    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        if (caracter === " ") {

            contadorEspacios++;

            if (contadorEspacios === 3) {

                break;
            }
        }
    }

    if (contadorEspacios >= 3) {
        return true;
    }

    return false;
};