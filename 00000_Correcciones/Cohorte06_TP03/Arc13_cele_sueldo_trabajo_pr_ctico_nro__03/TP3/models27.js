// models27.js

// función arrow
export const contarVocales = (texto) => {

    let contador = 0;

    // recorro letra por letra
    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        // verifico si es vocal
        if (

            letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u" ||

            letra == "A" ||
            letra == "E" ||
            letra == "I" ||
            letra == "O" ||
            letra == "U"
        ) {

            contador++;
        }
    }

    return contador;
};