/*Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s”
(mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.
No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false). */
const tieneDosS = (palabra) => {
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        let c = palabra[i];

        if (c === 's' || c === 'S') {
            contador++;
        }

        if (contador === 2) {
            return true; // Ya encontramos 2, no hace falta seguir
        }
    }

    return false; // Si terminó el for y no llegó a 2
};