/**
 * EJERCICIO NRO. 24
 * Recibe una cadena de texto y determina si contiene al menos tres espacios en blanco.
 * Interrumpe el ciclo con 'break' al encontrar el tercer espacio. [cite: 111]
 * @param {string} cadena La cadena de texto a analizar.
 * @returns {boolean} true si tiene al menos tres espacios, false en caso contrario.
 */
window.addEventListener('load', () => {
    console.log('controlador11 cargado y listo.');
});
// VARIABLE PRINCIPAL
export const contieneTresEspacios = (cadena) => {
    let contadorEspacios = 0;
     console.log(`Analizando la cadena: "${cadena}"`);
    // Recorre la cadena carácter por carácter utilizando un ciclo for [cite: 109]
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        
        // Comprobar si es un espacio en blanco [cite: 110]
        if (caracter === ' ') {
            contadorEspacios++;
        }
        
        // En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir el ciclo y devolver true [cite: 111]
        if (contadorEspacios === 3) {
            return true;
            // No se necesita 'break' ya que 'return' sale de la función inmediatamente.
        }
    }
    
    // Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false [cite: 112]
    return false;
    console.log(`Total de espacios encontrados: ${contadorEspacios}`);
};