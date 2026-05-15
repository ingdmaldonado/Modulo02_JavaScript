// Arrow Function
export const noContieneNumeros = (cadena) => {

    let contieneNumero = false;

    // Recorrer cadena
    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        // Verificar si es número
        if (
            caracter >= '0' &&
            caracter <= '9'
        ) {

            contieneNumero = true;

            // Cortar recorrido
            break;
        }
    }

    // Resultado final
    if (contieneNumero) {

        return false;
    }

    return true;
};