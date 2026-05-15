// models30.js

// función arrow
export const tieneTresEspacios = (texto) => {

    let contador = 0;

    // recorro el texto
    for (let i = 0; i < texto.length; i++) {

        // verifico si hay espacio
        if (texto[i] == " ") {

            contador++;
        }

        // cuando encuentra 3 corta el ciclo
        if (contador == 3) {

            break;
        }
    }

    // verifico resultado final
    if (contador == 3) {

        return true;

    } else {

        return false;
    }
};