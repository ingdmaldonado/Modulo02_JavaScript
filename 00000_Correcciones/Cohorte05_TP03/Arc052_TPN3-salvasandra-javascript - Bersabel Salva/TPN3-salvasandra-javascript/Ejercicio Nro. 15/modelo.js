/* Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida como parámetro devuelva un texto que diga los siguientes mensajes.
•
Si la nota <= 4 debe devolver “Desaprobado”
•
Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
•
Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
•
Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto
*/

export const calificacionFinal = (notaPromedio) => {
    let mensaje; // variable sin valor inicial
  
    if (notaPromedio <= 4) {
      mensaje = "Desaprobado";
    } else if (notaPromedio > 4 && notaPromedio <= 7) {
      mensaje = "Aprobado";
    } else if (notaPromedio > 7 && notaPromedio <= 9) {
      mensaje = "Muy Bueno";
    } else if (notaPromedio === 10) {
      mensaje = "Excelente";
    } else {
      mensaje = "Nota inválida"; // por si el número no está dentro del rango esperado
    }
  
    return mensaje;
  };
  