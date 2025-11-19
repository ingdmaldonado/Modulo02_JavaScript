// Modelo.js

// Arrow function que cuenta las vocales (mayúsculas y minúsculas)
const contarVocales = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }