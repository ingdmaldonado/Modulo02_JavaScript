  export  const contarVocales= texto => {
    
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        let letra = texto.charAt(i);

        if (
            letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
            letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"
        ) {
            contador++;
        }
    }

    return contador;

 }