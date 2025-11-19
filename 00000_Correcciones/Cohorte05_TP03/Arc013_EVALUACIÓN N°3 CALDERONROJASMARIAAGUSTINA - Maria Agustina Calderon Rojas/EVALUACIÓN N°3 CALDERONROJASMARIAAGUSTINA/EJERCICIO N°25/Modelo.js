// Modelo.js

// Arrow function que determina si una cadena NO contiene números
const noContieneNumeros = (cadena) => {
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        // Verifica si el carácter está entre '0' y '9'
        if (caracter >= '0' && caracter <= '9') {
            // Si se encuentra un número, corta el ciclo y devuelve false
            return false;
        }
    }

    // Si termina el recorrido sin encontrar números, devuelve true
    return true;
};