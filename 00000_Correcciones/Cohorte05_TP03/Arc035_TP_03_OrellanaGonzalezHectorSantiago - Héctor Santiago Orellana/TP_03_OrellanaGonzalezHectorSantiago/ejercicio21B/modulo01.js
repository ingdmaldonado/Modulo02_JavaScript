/*Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.*/

/* en este sector declaro y defino la arrow fuction*/

export const fncontidadVocal=(texto) =>
    
{
    
    let cantidadVocal=0; /* aqui declaro y defino las variables que contiene los caracteres de la cadena*/
    let cantidadEspacio=0; /* aqui declaro la variable para contar los espacios en blanco*/

    for(let i=0;i<texto.length;i++) /* aqui realizo la interación y recorrido de la cadena*/

   
     {
        let caracter=texto[i]; /* aqui declaro la variable que me  permite */

        /* blque que me permite establer las vocales */

        if((caracter.toUpperCase()===`A`)||(caracter.toUpperCase()===`E` )||(caracter.toUpperCase()===`I` )||(caracter.toUpperCase()===`O` )|| (caracter.toUpperCase()===`U`  )|| (caracter.toUpperCase() ===`` ))
        {
             
             cantidadVocal++ /* contador de vocales*/
             cantidadEspacio++/*contador de espacios en blanco*/
        }

        console.log(texto);
       
     }   
    
        return cantidadVocal; /* aqui retorno el valor de la funcion*/
   
    
};

   

       
