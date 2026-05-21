/*Ejercicio Nro. 28:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número. */


export const fnContadorConsonantes = (cadenaTexto) => {

    let contadorCaracter = 0;

    for (let i = 0; i < cadenaTexto.length; i++){
        let caracter = cadenaTexto.charAt(i).toUpperCase();

        console.log(caracter);

        if (caracter !== "A" && caracter !== "E" && caracter !== "I" && caracter !== "O" && caracter !== "U" && caracter >= "A" && caracter <= "Z"){

            contadorCaracter = contadorCaracter + 1;
    
    }
    
}
return contadorCaracter;
}