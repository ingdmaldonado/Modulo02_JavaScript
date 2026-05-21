export const fnBuscarEspacios = (texto)=>{

    let contador = 0;

    for(let i = 0; i < texto.length; i++)
    {
        let caracter = texto[i];

        if(caracter == " ")
        {
            contador++;
        }

        if(contador == 3)
        {
            break;
        }
    }

    if(contador >= 3)
    {
        return true;
    }
    else
    {
        return false;
    }

};