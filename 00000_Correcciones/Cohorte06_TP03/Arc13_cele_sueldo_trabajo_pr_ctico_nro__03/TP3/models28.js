// models28.js

// función arrow
export const contarConsonantes = (texto) => {

    let contador = 0;

    // recorro letra por letra
    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        // verifico si es letra
        if (

            (letra >= "a" && letra <= "z") ||

            (letra >= "A" && letra <= "Z")
        ) {

            // verifico que no sea vocal
            if (

                letra != "a" &&
                letra != "e" &&
                letra != "i" &&
                letra != "o" &&
                letra != "u" &&

                letra != "A" &&
                letra != "E" &&
                letra != "I" &&
                letra != "O" &&
                letra != "U"
            ) {

                contador++;
            }
        }
    }

    return contador;
};