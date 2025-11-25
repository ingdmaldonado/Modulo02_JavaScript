/**
 * EJERCICIO NRO. 21
 * Recibe una cadena de texto y devuelve la cantidad de vocales (mayúsculas y/o minúsculas) que tiene.
 * NO utiliza métodos de strings como replace(), split() o expresiones regulares. [cite: 91]
 * @param {string} cadena La cadena de texto a analizar.
 * @returns {number} La cantidad de vocales.
 */
window.addEventListener('load', () => {
    console.log('controlador8 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const contarVocales = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";
    console.log(`Analizando la cadena: "${cadena}"`);
    // Recorre la cadena con un ciclo for [cite: 90]
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        // Determina si el caracter es una vocal
        // Se itera sobre la lista de vocales para verificar si el caracter está incluido
        for (let j = 0; j < vocales.length; j++) {
            if (caracter === vocales[j]) {
                contador++;
                break; // Una vez que se encuentra la vocal, pasa al siguiente carácter de la cadena
            }
        }
    }
    return contador;
    console.log(`Total de vocales encontradas: ${contador}`);
};