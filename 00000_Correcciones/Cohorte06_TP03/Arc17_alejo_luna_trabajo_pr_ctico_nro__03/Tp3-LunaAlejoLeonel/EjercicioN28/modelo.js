export const contarConsonantes = (texto) => {

    let contador = 0;

    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i];

        if (
            letra >= "a" && letra <= "z" && 
            letra !== "a" &&
            letra !== "e" &&
            letra !== "i" &&
            letra !== "o" &&
            letra !== "u"
        ) {
            contador++;
        }
    }

    return contador;

}