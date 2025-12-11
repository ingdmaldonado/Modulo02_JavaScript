/*Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número. */


const contarConsonantes = (cadena) => {
    let contador = 0;
    const vocales = "aeiouAEIOU";

    for (let i = 0; i < cadena.length; i++) {
        let c = cadena[i];

        // Verificar que es una letra (A-Z o a-z)
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {

            // Si NO es vocal → es consonante
            if (!vocales.includes(c)) {
                contador++;
            }
        }
    }

    return contador;
};