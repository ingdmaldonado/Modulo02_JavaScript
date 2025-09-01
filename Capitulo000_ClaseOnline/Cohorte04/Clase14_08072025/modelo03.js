
/* el objetivo de esta función es contar
la cantidade vocales. debería recibir
como parametro de entrada una cadena de texto */

export const fnContarVocalesDeCadena = (cadena)=>
    {
        let contadorDeVocales = 0;

        for(let i = 0;i < cadena.length;i = i + 1)
            {
                /* aqui extraigo el caracter que está
                en la posición "i" de la frase ingresada */

                let caracter = cadena.charAt(i);
                
                /* mostrar ese caracter */
                console.log(caracter);

                /* preguntando si eso es una vocal */
                if((caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U'))
                {
                    /* contar la cantidad de vocales */
                    contadorDeVocales = contadorDeVocales + 1;
                }
            }

        return contadorDeVocales;

    }