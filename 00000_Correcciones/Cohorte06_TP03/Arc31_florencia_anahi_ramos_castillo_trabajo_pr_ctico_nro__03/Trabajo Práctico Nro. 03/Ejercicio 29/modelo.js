export const fnBuscarLetraS = (palabra)=>{

    let contador = 0;

    for(let i = 0; i < palabra.length; i++)
    {
        let letra = palabra[i];

        if(
            letra == "s" || letra == "S"
        )
        {
            contador++;
        }
    }

    if(contador >= 2)
    {
        return true;
    }
    else
    {
        return false;
    }

};