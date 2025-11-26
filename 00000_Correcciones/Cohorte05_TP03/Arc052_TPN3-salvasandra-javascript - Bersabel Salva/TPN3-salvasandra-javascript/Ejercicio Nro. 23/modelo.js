/* Ejercicio Nro. 23:
Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” (mayúsculas o minúsculas).
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario.No puede utilizar métodos como includes() o indexOf().
Nota: Debe devolver un boolean (true ó false).
*/

export const contieneDosS = (palabraAnalizar) => {
    let contadorS = 0;
  
    for (let posicion = 0; posicion < palabraAnalizar.length; posicion++) {
      let letraActual = palabraAnalizar[posicion];
  
      // verificamos si la letra actual es una 's' o 'S'
      if (letraActual === 's' || letraActual === 'S') {
        contadorS++;
      }
  
      // si ya encontramos al menos 2, no hace falta seguir
      if (contadorS >= 2) {
        return true;
      }
    }
  
    // si termina el bucle sin llegar a 2 apariciones
    return false;
  };
  