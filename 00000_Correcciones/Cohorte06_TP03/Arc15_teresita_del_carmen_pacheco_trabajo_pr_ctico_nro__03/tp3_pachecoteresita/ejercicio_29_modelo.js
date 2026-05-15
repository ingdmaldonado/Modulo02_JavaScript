// Arrow Function
export const contieneDosLetrasS = (palabra) => {

    let contadorS = 0;

    for (let i = 0; i < palabra.length; i++) {

        let caracter = palabra[i];

        if (caracter === 's' || caracter === 'S') {

            contadorS++;

            if (contadorS >= 2) {
                return true;
            }
        }
    }

    return false;
};