export const fnVerificarNumeros = (texto)=>{

    let tieneNumero = false;

    for(let i = 0; i < texto.length; i++)
    {
        let caracter = texto[i];

        if(
            caracter >= "0" && caracter <= "9"
        )
        {
            tieneNumero = true;

            break;
        }
    }

    if(tieneNumero)
    {
        return false;
    }
    else
    {
        return true;
    }

};