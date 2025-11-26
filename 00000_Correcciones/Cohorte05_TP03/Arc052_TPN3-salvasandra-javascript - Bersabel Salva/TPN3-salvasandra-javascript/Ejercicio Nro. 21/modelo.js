/* Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad de vocales “mayúsculas y/o minúsculas” que tiene la misma.
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o expresiones regulares.
Nota: Debe devolver un número.
*/

export const contarVocales = (textoAnalizar) => {
    let cantidadVocales = 0;
    let vocales = "aeiouAEIOU";
  
    for (let posicion = 0; posicion < textoAnalizar.length; posicion++) {
      let caracterActual = textoAnalizar[posicion];
      for (let i = 0; i < vocales.length; i++) {
        if (caracterActual === vocales[i]) {
          cantidadVocales++;
          break; // para no seguir revisando si ya sabemos que es vocal
        }
      }
    }
  
    return cantidadVocales;
  };
  