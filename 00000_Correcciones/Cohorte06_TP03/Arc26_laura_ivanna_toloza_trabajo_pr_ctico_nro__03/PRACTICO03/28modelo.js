

export const contarConsonantes = (texto) => {
    let contador = 0;

    for (
        let i = 0;
        i < texto.length;
        i++) {
        let letra = texto[i];
        if (
            letra !== "a" && letra !== "A" && letra !== "e" && letra !== "E" && letra !== "i" && letra !== "I" && letra !== "o" && letra !== "O" && letra !== "u" && letra !== "U" &&
            (
                (letra >= "a" && letra <= "z") || (letra >= "A" && letra <= "Z")
            )
        ) {contador++;
        }
    }
    return contador;
};