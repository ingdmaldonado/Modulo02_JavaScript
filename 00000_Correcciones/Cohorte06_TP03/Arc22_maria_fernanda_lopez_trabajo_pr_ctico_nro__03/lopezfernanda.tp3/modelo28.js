export const fncontarConsonantes = (cadenaDeTexto) => {

    let cantidad = 0;

    for (let letra of cadenaDeTexto) {

        if (
            (letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z')) 
            {

            if (
                letra != 'a' &&
                letra != 'e' &&
                letra != 'i' &&
                letra != 'o' &&
                letra != 'u' &&
                letra != 'A' &&
                letra != 'E' &&
                letra != 'I' &&
                letra != 'O' &&
                letra != 'U'
            ) {

                cantidad++;

            }
        }
    }

    return cantidad;
};