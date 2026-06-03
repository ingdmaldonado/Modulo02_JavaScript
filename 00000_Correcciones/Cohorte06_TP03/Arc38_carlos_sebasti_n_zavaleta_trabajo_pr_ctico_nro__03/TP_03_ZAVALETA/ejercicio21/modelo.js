/* Debe retornar la calificación de la nota */
export const calificacion = (nota) => {
    let calificacion = "";
     if (nota > 0 & nota <= 4){
        calificacion = "Desaprobado";
     } else if (nota > 4 & nota <= 7) {
        calificacion = "Aprobado"
     } else if (nota > 7 & nota <= 9 ){
        calificacion = "Muy Bueno"
     } else if (nota == 10){
        calificacion = "Excelente"
     } else {
      calificacion = "La nota debe ser de 0 a 10"
     }
    
     return calificacion;

    }