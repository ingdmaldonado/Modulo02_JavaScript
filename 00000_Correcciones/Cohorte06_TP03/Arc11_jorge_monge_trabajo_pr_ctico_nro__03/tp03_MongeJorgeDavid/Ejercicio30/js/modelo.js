// Arrow Function
export const tieneTresEspacios = (cadena) => {

    let contadorEspacios = 0;

    // Recorrer cadena
    for (let i = 0; i < cadena.length; i++) {

        let caracter = cadena[i];

        // Verificar espacio
        if (caracter === ' ') {

            contadorEspacios++;
        }

        // Si encontró 3 espacios
        if (contadorEspacios === 3) {

            break;
        }
    }

    // Resultado final
    if (contadorEspacios >= 3) {

        return true;
    }

    return false;
};