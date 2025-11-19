// Modelo.js

// Arrow function que verifica si hay al menos dos 's' o 'S' en la palabra
const tieneDosS = (palabra) => {
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        
        // Verificamos si el carácter es 's' o 'S'
        if (letra === 's' || letra === 'S') {
            contador++;
        }

        // Si ya encontramos 2, no hace falta seguir
        if (contador === 2) {
            return true;
        }
    }

    // Si termina el bucle y no hay 2 's', devuelve false
    return false;
};