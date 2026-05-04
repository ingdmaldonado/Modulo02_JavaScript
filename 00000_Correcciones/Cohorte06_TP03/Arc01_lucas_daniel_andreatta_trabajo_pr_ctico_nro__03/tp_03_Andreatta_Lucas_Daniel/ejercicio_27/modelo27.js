
 /* 
Ejercicio Nro. 27: 
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 
Nota: Debe devolver un número.
*/

export const fnContarVocales = (cadenaTexto) => {
    
    let cantVocales = 0;

    //console.log(cadenaTexto.length); 

    for (let i = 0; i < cadenaTexto.length; i++) {
        
        //console.log(cadenaTexto[i]); 
        
        if ((cadenaTexto[i]==="a") || (cadenaTexto[i]==="e") || (cadenaTexto[i]==="i") || (cadenaTexto[i]==="o") || (cadenaTexto[i]==="u") || (cadenaTexto[i]==="A") || (cadenaTexto[i]==="E") || (cadenaTexto[i]==="I") || (cadenaTexto[i]==="O") || (cadenaTexto[i]==="U") ) {
            cantVocales++;
            //console.log(cantVocales); 
        }
        
    }

    return cantVocales;
};
