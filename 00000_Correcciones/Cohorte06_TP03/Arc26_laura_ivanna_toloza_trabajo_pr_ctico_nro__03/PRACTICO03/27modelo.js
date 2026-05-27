
export const contarVocales = (texto) => {
    let contador = 0;

    for (
        let i = 0;
        i < texto.length;
        i++ ) {
            let letra = texto[i];

        if (
            letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U"
        ) {contador++;
        }
    }
    return contador;
};