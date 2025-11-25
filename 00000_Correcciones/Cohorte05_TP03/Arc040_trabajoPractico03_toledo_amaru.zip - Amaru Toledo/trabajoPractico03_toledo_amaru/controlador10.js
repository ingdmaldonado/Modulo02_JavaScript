/**
 * EJERCICIO NRO. 23
 * Recibe una palabra y determina si contiene al menos dos letras "s" (mayúsculas o minúsculas).
 * NO utiliza métodos como includes() o indexOf(). [cite: 104]
 * @param {string} palabra La cadena de texto a analizar.
 * @returns {boolean} true si contiene al menos dos 's'/'S', false en caso contrario.
 */
window.addEventListener('load', () => {
    console.log('controlador10 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const contieneDosLetrasS = (palabra) => {
    let contadorS = 0;
    console.log(`Analizando la palabra: "${palabra}"`);
    // Recorre la palabra con un ciclo for [cite: 101]
    for (let i = 0; i < palabra.length; i++) {
        const caracter = palabra[i];
        // Determina si el caracter es 's' o 'S' [cite: 100]
        if (caracter === 's' || caracter === 'S') {
            contadorS++;
            // Devolver true si se cumplen las dos apariciones [cite: 102]
            if (contadorS >= 2) {
                return true;
            }
        }
    }
    // Devolver false si no se encontraron dos 's'/'S' [cite: 102]
    return false;
    console.log(`Total de letras 's' encontradas: ${contadorS}`);
};