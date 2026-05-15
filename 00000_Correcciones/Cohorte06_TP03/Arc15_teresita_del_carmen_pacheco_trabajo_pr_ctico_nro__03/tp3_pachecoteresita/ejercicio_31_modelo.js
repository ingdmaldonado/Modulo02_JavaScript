// Arrow Function
export const noContieneNumeros = (cadena) => {

    let sinNumeros = true;

    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        if (caracter >= '0' && caracter <= '9') {

            sinNumeros = false;

            break;
        }
    }

    return sinNumeros;
};