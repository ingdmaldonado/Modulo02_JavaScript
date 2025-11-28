/*Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto*/

export const condicionDeNota=(nota)=>{ //exporta la funcion.
    // segun el valor del parametro devuelve la condicion de la nota.
    if (nota<=4){
        return "Desaprobado";
    }
    else{
        if((nota>4)&& (nota<=7)){
            return "Aprobado";
        }
        else{
            if((nota>7)&& (nota<=9)){
                return "Muy Bueno";
            }
            else{
              return "Excelente";
            }
        }
    }
};