export const contieneNumeros = texto => {

    let tieneNumero = false;

    for (let i = 0; i < texto.length; i++) {

        let caracter = texto.charAt(i);

        if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
            break; 
        }
    }

    return !tieneNumero;
};