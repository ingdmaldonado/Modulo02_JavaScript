


export const tieneTresEspacios = (texto) => {

    let contador = 0;

    for (let i = 0; i < texto.length; i++) {

        
        if (texto[i] == " ") 
        {
            contador++;
        }

        
        if (contador == 3) 
        {
            break;
        }
    }

    if (contador == 3) 
    {
        return true;

    } else {

        return false;
    }
};