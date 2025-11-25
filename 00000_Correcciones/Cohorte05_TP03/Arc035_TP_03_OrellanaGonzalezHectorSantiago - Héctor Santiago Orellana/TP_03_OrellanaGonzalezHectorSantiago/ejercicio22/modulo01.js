/*Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.*/


/*declaración y definición de la arrow fuction*/
export const fncontidadConsonantes=(texto) =>
    
{
    let cantidadConsonante=0;/*definicion y declaracion de las variables*/
    let cantidadEspacio=0;

    for(let i=0;i<texto.length;i++) /*iteraccion cona la cadena*/

   
     {
        let caracter=texto[i];/* aqui extraigo el caracter de la interacción*/
        /*bloque que me permite definir las consonantes*/

        if((caracter.toUpperCase()===`B`)||(caracter.toUpperCase()===`C` )||(caracter.toUpperCase()===`D` )||(caracter.toUpperCase()===`F` )||(caracter.toUpperCase()===`G`)||(caracter.toUpperCase()===`H`)||(caracter.toUpperCase()===`J`)||(caracter.toUpperCase()===`K`)|| (caracter.toUpperCase()===`L`)||(caracter.toUpperCase()===`L`)||(caracter.toUpperCase()===`M`)||(caracter.toUpperCase()===`N`)||(caracter.toUpperCase()===`Ñ`)||(caracter.toUpperCase()===`P`)||(caracter.toUpperCase()===`Q`)||(caracter.toUpperCase()===`R`)||(caracter.toUpperCase()===`S`)||(caracter.toUpperCase()===`T`)||(caracter.toUpperCase()===`V`)||(caracter.toUpperCase()===`W`)||(caracter.toUpperCase()===`X`)||(caracter.toUpperCase()===`Y`)||(caracter.toUpperCase()===`Z`) ) 
        {
            cantidadConsonante++;/*contador de consonates*/
            cantidadEspacio++/*contador de espacios en blanco*/
        }

        console.log(texto);
       
     }   
    
        return cantidadConsonante; /* retorno del valor de la arrow fuction*/
   
    
};

   

       
