// Arrow Function
export const contarVocales = (cadena) => {

    let cantidadVocales = 0;

    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        if (
            caracter === 'a' || caracter === 'A' ||
            caracter === 'e' || caracter === 'E' ||
            caracter === 'i' || caracter === 'I' ||
            caracter === 'o' || caracter === 'O' ||
            caracter === 'u' || caracter === 'U'
        ) {
            cantidadVocales++;
        }
    }

    return cantidadVocales;
};