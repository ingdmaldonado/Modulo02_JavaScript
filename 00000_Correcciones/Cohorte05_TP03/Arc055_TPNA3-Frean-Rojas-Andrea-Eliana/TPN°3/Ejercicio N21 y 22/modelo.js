                   /*---------EJERCICIO N°21---------*/

/*Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad
de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o
expresiones regulares.
Nota: Debe devolver un número.*/

export const calculoCantidadVocales=(cadenaTexto)=>{
    let vocales=0;
    for(let i=0; i<cadenaTexto.length; i++){
        let v=cadenaTexto[i].toLowerCase(); // Convierte el carácter a minúscula.
        // Verifica si el carácter es una vocal
        if(v==="a" || v==="e" || v==="i" || v==="o" || v==="u"){
            vocales++;
        }
    }
    return vocales; // Devuelve la cantidad de vocales encontradas.
};

                   /*---------EJERCICIO N°22---------*/

/*Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO
SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.*/

export const calculoConsonantes=(cadenaTexto)=>{
    let consonante=0;
    for(let j=0; j<cadenaTexto.length; j++){
        let c=cadenaTexto[j].toLowerCase();
        // Verifica si el carácter NO es una vocal.
        if(c!=="a" && c!=="e"&& c!=="i" && c!=="o" && c!=="u"){
            // comprueba que el carácter sea una letra entre 'a' y 'z'
            if(c>="a" && c<="z"){
                consonante++;
            }
        }
    }
    return consonante; // Devuelvela cantidad de consonantes encontradas.
};