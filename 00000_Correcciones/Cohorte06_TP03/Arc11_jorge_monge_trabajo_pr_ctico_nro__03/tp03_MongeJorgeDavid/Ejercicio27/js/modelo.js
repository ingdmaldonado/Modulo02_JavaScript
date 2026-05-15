// Arrow Function
export const contarVocales = (cadena) => {

    let cantidadVocales = 0;

    // Recorrer cadena
    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        // Verificar vocales
        if (
            caracter === 'a' ||
            caracter === 'e' ||
            caracter === 'i' ||
            caracter === 'o' ||
            caracter === 'u' ||

            caracter === 'A' ||
            caracter === 'E' ||
            caracter === 'I' ||
            caracter === 'O' ||
            caracter === 'U'
        ) {

            cantidadVocales++;
        }
    }

    return cantidadVocales;
};