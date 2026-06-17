
/* 

Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.

*/

/* Ahora tengo en una función, encapsulada 
una lógica ó algoritmo que dada cualquier
cadena de texto, me permita recorrerla y contar
la cantidad de vocales que tiene y devolverlas */

const fnCantidadVocales = (cadenaDeTexto)=>{

    let cantidadVocales = 0;
    for(let i = 0; i < cadenaDeTexto.length;i++)
    {
        let caracter = cadenaDeTexto.charAt(i).toUpperCase();
        //console.log(caracter);

        if ((caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U'))
        {
            cantidadVocales = cantidadVocales + 1;
        }
    }

    return cantidadVocales;

};

{
    let cadenaDeTexto = "ESTA MUY Lindo este EJERCICIO porque tiene mucha logica interesante";

    let cadenaDeTexto2 = "HOY ES MIERCOLES";

    let cadenaDeTexto3 = "ESTAMOS EN CLASES DE PROGRAMACION";

    console.log(fnCantidadVocales(cadenaDeTexto));

    console.log(fnCantidadVocales(cadenaDeTexto2));

    console.log(fnCantidadVocales(cadenaDeTexto3));

    let totalVocales = fnCantidadVocales(cadenaDeTexto) + fnCantidadVocales(cadenaDeTexto2) + fnCantidadVocales(cadenaDeTexto3);

    console.log(totalVocales);

    /* 
        f(x) = 2*x + 1 

        f(cadena) = el algoritmo sería el cuerpo de la función
            
    */

    /* 
        FONDOS BUITRES => compran deuda

        CLAUDIO MOLINA => 12.000.000,00 => 7.000.000,00
        JUAN ANDRES CANO => 22.000.000,00 => 
        GERMAN NIEVA => 44.000.000,00
        CRISTIAN CASAS => 77.000.000,00

        25.000.000 => 45.000.000,00
    
    */



    /* trabajar caracter x caracter */

    /*

    console.log(cadenaDeTexto.charAt(0));
    console.log(cadenaDeTexto.charAt(1));
    console.log(cadenaDeTexto.charAt(2));

    let caracter05 = cadenaDeTexto.charAt(5);
    let caracter06 = cadenaDeTexto.charAt(6);

    console.log(caracter05);
    console.log(caracter06);

    console.log("-------------------------------");

    console.log(cadenaDeTexto.length);

    // iterando sobre la cadena y extrayendo caracter x caracter //
    let cantidadVocales = 0;
    for(let i = 0; i < cadenaDeTexto.length;i++)
    {
        let caracter = cadenaDeTexto.charAt(i).toUpperCase();
        console.log(caracter);

        if ((caracter === 'A') || (caracter === 'E') || (caracter === 'I') || (caracter === 'O') || (caracter === 'U'))
        {
            cantidadVocales = cantidadVocales + 1;
        }
    }

    console.log(`La Cantidad de Vocales de la cadena es: ${cantidadVocales}`);
    */


}