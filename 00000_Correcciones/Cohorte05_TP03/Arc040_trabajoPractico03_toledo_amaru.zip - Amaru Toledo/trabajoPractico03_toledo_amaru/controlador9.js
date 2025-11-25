/**
 * EJERCICIO NRO. 22
 * Recibe una cadena de texto y devuelve cuántas consonantes contiene (mayúsculas o minúsculas).
 * Considera consonante a todo carácter que NO SEA VOCAL. [cite: 95]
 * NO utiliza métodos de strings como replace(), split() o expresiones regulares. [cite: 97]
 * @param {string} cadena La cadena de texto a analizar.
 * @returns {number} La cantidad de consonantes.
 */
window.addEventListener('load', () => {
    console.log('controlador9 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const contarConsonantes = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    console.log(`Analizando la cadena: "${cadena}"`);

    // Recorre la cadena con un ciclo for [cite: 96]
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Verifica si el carácter es una letra (para excluir espacios, números, etc.)
        // Se puede hacer una verificación simple para letras del alfabeto (a-z, A-Z)
        const esLetra = (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');
        console.log(`Carácter analizado: '${caracter}' - Es letra: ${esLetra}`);
        if (esLetra) {
            let esVocal = false;
            // Verifica si es vocal
            for (let j = 0; j < vocales.length; j++) {
                if (caracter === vocales[j]) {
                    esVocal = true;
                    break;
                }
            }
            
            // Si es una letra y NO es vocal, es una consonante [cite: 95]
            if (!esVocal) {
                contador++;
            }
        }
    }
    console.log(`Total de consonantes encontradas: ${contador}`);
    return contador;
};