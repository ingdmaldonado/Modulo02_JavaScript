
export const contarConsonantes = (texto) => {

    let contador = 0;

    
    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        if ((letra >= "a" && letra <= "z") ||(letra >= "A" && letra <= "Z")
        ) {

            if (

                letra != "a" &&
                letra != "e" &&
                letra != "i" &&
                letra != "o" &&
                letra != "u" &&

                letra != "A" &&
                letra != "E" &&
                letra != "I" &&
                letra != "O" &&
                letra != "U"
            ) {

                contador++;
            }
        }
    }

    return contador;
};