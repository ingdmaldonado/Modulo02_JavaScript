// models31.js

// función arrow
export const noTieneNumeros = (texto) => {

    let tieneNumero = false;

    // recorro el texto
    for (let i = 0; i < texto.length; i++) {

        let caracter = texto[i];

        // verifico si es un número
        if (

            caracter >= "0" &&

            caracter <= "9"
        ) {

            tieneNumero = true;

            // corto el ciclo
            break;
        }
    }

    // si encontró número devuelve false
    if (tieneNumero) {

        return false;

    } else {

        return true;
    }
};