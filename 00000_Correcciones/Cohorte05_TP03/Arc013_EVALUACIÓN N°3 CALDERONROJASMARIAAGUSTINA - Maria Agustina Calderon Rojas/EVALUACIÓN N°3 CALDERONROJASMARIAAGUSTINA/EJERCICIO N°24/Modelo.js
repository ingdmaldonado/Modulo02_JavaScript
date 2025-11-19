// Modelo.js

// Arrow function que verifica si hay al menos tres espacios en blanco
const tieneTresEspacios = (cadena) => {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " ") {
            contador++;
        }

        // Si se encontraron tres espacios, se corta el bucle y se devuelve true
        if (contador === 3) {
            return true;
        }
    }

    // Si el bucle termina y no se encontraron 3 espacios, devuelve false
    return false;
};