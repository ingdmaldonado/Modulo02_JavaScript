export const fnCantidadConsonantes = (texto)=>{

    let cantidadConsonantes = 0;

    for(let i = 0; i < texto.length; i++)
    {
        let letra = texto[i];

        if(
            letra != "a" && letra != "e" && letra != "i" && letra != "o" && letra != "u" &&
            letra != "A" && letra != "E" && letra != "I" && letra != "O" && letra != "U" &&
            letra != " "
        )
        {
            cantidadConsonantes++;
        }
    }

    return cantidadConsonantes;

};