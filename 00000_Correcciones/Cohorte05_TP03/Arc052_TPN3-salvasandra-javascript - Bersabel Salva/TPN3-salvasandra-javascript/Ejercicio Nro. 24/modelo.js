/* Ejercicio Nro. 24:
Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma contiene al menos tres espacios en blanco.
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for.
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren.
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el ciclo mediante la instrucción break y devolver el valor lógico true.
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false.
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneTresEspacios = (cadenaTexto) => {
    let contadorEspacios = 0;
  
    for (let i = 0; i < cadenaTexto.length; i++) {
      if (cadenaTexto[i] === " ") {
        contadorEspacios++;
      }
  
      if (contadorEspacios === 3) {
        return true; // se encontraron tres espacios, termina la función
      }
    }
  
    // si termina el bucle sin alcanzar los tres espacios
    return false;
  };
  