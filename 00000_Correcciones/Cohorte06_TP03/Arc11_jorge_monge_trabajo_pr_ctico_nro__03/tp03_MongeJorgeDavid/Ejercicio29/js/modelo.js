// Arrow Function
export const tieneDosLetrasS = (palabra) => {

    let contadorS = 0;

    // Recorrer palabra
    for (let i = 0; i < palabra.length; i++) {

        let caracter = palabra[i];

        // Verificar letra s o S
        if (
            caracter === 's' ||
            caracter === 'S'
        ) {

            contadorS++;
        }
    }

    // Validar cantidad
    if (contadorS >= 2) {

        return true;
    }

    return false;
};