/* 
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no..
 No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 
Nota: Debe devolver un número.
*/

export const vocalesMayusculasMinusculas = (texto) =>
{

    let contadorDeVocales = 0;
                //mientras i sea menor a la longitud del "texto", incrementamos
    for(let i=0; i <texto.length;i++)
    {
        let caracteres = texto[i]; //[i] Significa en que posicion del "texto" se encuentra(obviamente incrementado por el ciclo en cada vuelta)

        let esVocal = "Es vocal";
        let noEsVocal = "No es vocal";
        let vocal;

        if(caracteres === "A" || caracteres === "a" || caracteres === "E" || caracteres === "e" || caracteres === "I" || caracteres === "i"  || caracteres === "O" || caracteres === "o" || caracteres === "U" || caracteres === "u" )
        {
            contadorDeVocales = contadorDeVocales + 1;
            vocal = esVocal;// de esta manera vuelco la variable esVocal y su contenido dentro de vocal, a la salida del ciclo lo muestro
            // console.logs aqui no es eficiente
        }else{
            vocal = noEsVocal;
            // console.logs aqui no es eficiente
        }

       console.log(`El caracter ${i}-[ ${caracteres} ]-${vocal}`);

    };

    console.log(`El texto ingresada tiene ${contadorDeVocales} vocales`);

    return contadorDeVocales;

};