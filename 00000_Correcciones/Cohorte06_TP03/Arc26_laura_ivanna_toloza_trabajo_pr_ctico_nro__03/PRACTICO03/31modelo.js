
export const verificarSinNumeros = (texto) => {
    let resultado = true;

    for (
        let i = 0;
        i < texto.length;
        i++
    ) {
        let caracter = texto[i];

        if (
            caracter >= "0" && caracter <= "9"
        ) {
            resultado = false;
            break;
        }
    }
    return resultado;
};