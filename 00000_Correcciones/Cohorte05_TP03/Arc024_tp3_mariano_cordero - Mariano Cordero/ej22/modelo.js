 /* 
 Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 
No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
Nota: Debe devolver un número.
 
 */
/* 
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no..
 No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 
Nota: Debe devolver un número.
*/

export const consonantesMayusculasMinusculas = (texto) =>
{

    let contadorConsonantes = 0;
                //mientras i sea menor a la longitud del "texto", incrementamos
    for(let i=0; i <texto.length;i++)
    {
        let caracteres = texto[i]; //[i] Significa en que posicion del "texto" se encuentra(obviamente incrementado por el ciclo en cada vuelta)

        let esConsonante = "Es consonante";
        let noEsConsonante = "No es consonante";
        let consonante;

        if(caracteres === "A" || caracteres === "a" || caracteres === "E" || caracteres === "e" || caracteres === "I" || caracteres === "i"  || caracteres === "O" || caracteres === "o" || caracteres === "U" || caracteres === "u" )
        {
            consonante = noEsConsonante;// de esta manera vuelco la variable esVocal y su contenido dentro de vocal, a la salida del ciclo lo muestro
            
        }else{
            contadorConsonantes = contadorConsonantes + 1;
            consonante = esConsonante;
            
        }

       console.log(`El caracter ${i}-[ ${caracteres} ]-${consonante}`);

    };

    console.log(`El texto ingresada tiene ${contadorConsonantes} consonantes`);

    return contadorConsonantes;

};