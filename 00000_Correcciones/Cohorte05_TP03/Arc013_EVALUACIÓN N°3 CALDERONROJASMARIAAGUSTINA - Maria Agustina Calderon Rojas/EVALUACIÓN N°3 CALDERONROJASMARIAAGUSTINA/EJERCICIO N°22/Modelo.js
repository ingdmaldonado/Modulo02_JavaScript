// Modelo.js

// Arrow function que cuenta las consonantes (mayúsculas y minúsculas)
const contarConsonantes = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        // Verificamos si es una letra (A-Z o a-z)
        if ((caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z')) {
            // Si NO es vocal, entonces es consonante
            if (!vocales.includes(caracter)) {
                contador++;
            }
        }
    }

    return contador;
};