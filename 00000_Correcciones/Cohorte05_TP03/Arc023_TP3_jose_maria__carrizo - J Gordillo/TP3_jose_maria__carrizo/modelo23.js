export const tieneDosS = (palabra) => {
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        const c = palabra[i];

        if (c === "s" || c === "S") {
            contador++;
        }

        if (contador === 2) {
            return true;
        }
    }

    return false;
};
