export const fnDosLetrasS = (palabra) => {

    let contador = 0;

    for (let letra of palabra) {

        if (
            letra === 's' || letra === 'S'
        ) {

            contador++;
        }
    }

    if (contador >= 2) {

        return true;

    } else {

        return false;
    }
};