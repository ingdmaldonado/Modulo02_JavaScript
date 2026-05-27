/*Ejercicio Nro. 27:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número. */

export const fnContadorVocales = (cadenaDeTexto)=> {

    let contadorVocales = 0;

    for (let i = 0; i < cadenaDeTexto.length; i++){

     let caraterActual = cadenaDeTexto.charAt(i).toUpperCase();

     console.log (`Caracter actual: ${caraterActual}`);


     if (caraterActual === "A" || caraterActual === "E" || caraterActual === "I" || caraterActual === "O" || caraterActual === "U"){

        contadorVocales = contadorVocales + 1;
        
    }
}
return contadorVocales;
}