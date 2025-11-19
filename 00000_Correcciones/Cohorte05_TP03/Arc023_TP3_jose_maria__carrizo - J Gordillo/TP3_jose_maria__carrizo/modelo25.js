export const noTieneNumeros = (texto) => {
    for (let i = 0; i < texto.length; i++) {
        const c = texto[i];

        if (c >= "0" && c <= "9") {
            return false;
        }
    }
    return true;
};
