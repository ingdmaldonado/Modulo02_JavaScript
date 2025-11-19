export const tieneTresEspacios = (texto) => {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contador++;

            if (contador === 3) {
                break;
            }
        }
    }

    return contador >= 3;
};
