export const contarConsonantes = (texto) => {
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        const c = texto[i];

        if (
            (c >= "A" && c <= "Z") ||
            (c >= "a" && c <= "z")
        ) {
            if (
                c !== "a" && c !== "A" &&
                c !== "e" && c !== "E" &&
                c !== "i" && c !== "I" &&
                c !== "o" && c !== "O" &&
                c !== "u" && c !== "U"
            ) {
                total++;
            }
        }
    }

    return total;
};
