
 /* 
Ejercicio Nro. 28: 
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 
No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
Nota: Debe devolver un número.
*/

export const fnContarConsonantes = (cadenaTexto) => {
    
    let cantVocales = 0;

    let cantCaracteres = cadenaTexto.length;

    //console.log(cantCaracteres); 

    for (let i = 0; i < cadenaTexto.length; i++) {
        
        //console.log(cadenaTexto[i]); 
        
        if ((cadenaTexto[i]==="a") || (cadenaTexto[i]==="e") || (cadenaTexto[i]==="i") || (cadenaTexto[i]==="o") || (cadenaTexto[i]==="u") || (cadenaTexto[i]==="A") || (cadenaTexto[i]==="E") || (cadenaTexto[i]==="I") || (cadenaTexto[i]==="O") || (cadenaTexto[i]==="U") ) {
            cantVocales++;
            //console.log(cantVocales); 
        }
        
    }

    return cantCaracteres-cantVocales;
};
