// Arrow Function
export const contarConsonantes = (cadena) => {

    let cantidadConsonantes = 0;

    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        // Verifica si es letra
        if (
            (caracter >= 'a' && caracter <= 'z') ||
            (caracter >= 'A' && caracter <= 'Z')
        ) {

            // Verifica que NO sea vocal
            if (
                caracter !== 'a' && caracter !== 'A' &&
                caracter !== 'e' && caracter !== 'E' &&
                caracter !== 'i' && caracter !== 'I' &&
                caracter !== 'o' && caracter !== 'O' &&
                caracter !== 'u' && caracter !== 'U'
            ) {

                cantidadConsonantes++;
            }
        }
    }

    return cantidadConsonantes;
};