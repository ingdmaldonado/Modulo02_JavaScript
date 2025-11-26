/* Ejercicio Nro. 22:
Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO SEA VOCAL.
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal.
No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarConsonantes = (textoAnalizar) => {
    let cantidadConsonantes = 0;
    let vocales = "aeiouAEIOU";
  
    for (let posicion = 0; posicion < textoAnalizar.length; posicion++) {
      let caracterActual = textoAnalizar[posicion];
  
      // comprobamos si es una letra
      if (
        (caracterActual >= "A" && caracterActual <= "Z") ||
        (caracterActual >= "a" && caracterActual <= "z")
      ) {
        let esVocal = false;
  
        // verificamos si es vocal
        for (let i = 0; i < vocales.length; i++) {
          if (caracterActual === vocales[i]) {
            esVocal = true;
            break;
          }
        }
  
        // si es letra y no es vocal => es consonante
        if (!esVocal) {
          cantidadConsonantes++;
        }
      }
    }
  
    return cantidadConsonantes;
  };
  