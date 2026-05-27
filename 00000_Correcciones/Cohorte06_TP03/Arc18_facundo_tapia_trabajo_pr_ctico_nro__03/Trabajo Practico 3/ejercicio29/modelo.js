

export const tieneDosS = (palabra) => {

    let contador = 0;

    // recorro letra por letra
    for (let i = 0; i < palabra.length; i++) {

        let letra = palabra[i];

    
        if (letra == "s" || letra == "S") {

            contador++;
        }

        
        if (contador >= 2) 
        {
            return true;
        }
    }

    return false;
};