// Arrow Function
export const contarConsonantes = (cadena) => {

    let cantidadConsonantes = 0;

    // Recorrer cadena
    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        // Verificar si es letra
        if (
            (caracter >= 'a' && caracter <= 'z') ||
            (caracter >= 'A' && caracter <= 'Z')
        ) {

            // Verificar que NO sea vocal
            if (
                caracter !== 'a' &&
                caracter !== 'e' &&
                caracter !== 'i' &&
                caracter !== 'o' &&
                caracter !== 'u' &&

                caracter !== 'A' &&
                caracter !== 'E' &&
                caracter !== 'I' &&
                caracter !== 'O' &&
                caracter !== 'U'
            ) {

                cantidadConsonantes++;
            }
        }
    }

    return cantidadConsonantes;
};