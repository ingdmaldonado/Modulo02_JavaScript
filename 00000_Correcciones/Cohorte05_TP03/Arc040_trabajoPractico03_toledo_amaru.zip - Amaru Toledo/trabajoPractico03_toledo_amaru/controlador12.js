/**
 * EJERCICIO NRO. 25
 * Recibe una cadena de texto y determina si NO contiene ningún dígito numérico (del 0 al 9).
 * Interrumpe el bucle con 'break' y devuelve false si detecta un número. [cite: 118]
 * @param {string} cadena La cadena de texto a analizar.
 * @returns {boolean} true si no contiene ningún dígito, false si contiene al menos uno.
 */
window.addEventListener('load', () => {
    console.log('controlador12 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const noContieneDigitos = (cadena) => {
    // Recorre la cadena carácter por carácter utilizando un ciclo for [cite: 116]
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Analizar si el carácter está dentro del rango de los números '0' a '9' [cite: 117]
        // Las cadenas de un solo carácter se pueden comparar directamente.
        if (caracter >= '0' && caracter <= '9') {
            // Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver false [cite: 118]
            return false;
            // No se necesita 'break' ya que 'return' sale de la función inmediatamente.
        }
    }
    
    // En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true [cite: 119]
    return true;
    console.log(`La cadena analizada fue: "${cadena}"`);
};