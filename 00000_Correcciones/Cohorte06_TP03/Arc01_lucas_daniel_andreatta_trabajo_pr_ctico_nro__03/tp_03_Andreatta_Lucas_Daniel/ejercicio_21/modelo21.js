
 /* 
Ejercicio Nro. 21: 
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida 
como parámetro devuelva un texto que diga los siguientes mensajes. 
• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 
Nota: Debe Devolver un Texto
*/

export const fnDevolucionNota = (nota) => {

    let resultado = "";

    if ((nota >= 0) && (nota <= 4)) {
            resultado = "Desaprobado";  // Desaprobados
        } else {
            if ((nota > 4) && (nota <= 7)) {
                resultado = "Aprobado"; // Aprobados
            } else {
                if ((nota > 7) && (nota < 10)) {
                    resultado = "Muy Bueno"; // Muy buenos
                } else {
                    if (nota === 10) {
                        resultado = "Excelente"; // Exelente
                    } else {
                        resultado = "Error!, ingrese una nota correcta!"; // nota mal ingresada
                    }
                }
            }
        }
        
    return resultado;
};
