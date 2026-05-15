// models29.js

// función arrow
export const tieneDosS = (palabra) => {

    let contador = 0;

    // recorro letra por letra
    for (let i = 0; i < palabra.length; i++) {

        let letra = palabra[i];

        // verifico si es s
        if (

            letra == "s" ||

            letra == "S"
        ) {

            contador++;
        }

        // si ya encontró dos termina
        if (contador >= 2) {

            return true;
        }
    }

    return false;
};