/* Ejercicio Nro. 21:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto */

export const fnNotaPromedio = (nota)=>{
    let resultado= "";
    
    if (nota <=4) 
        {
        resultado= "desaprobado";
        } 

    else if ((nota >4) && (nota <=7)) 
        {
        resultado= "aprobado";
        }
    else if ((nota >7) && (nota <=9))
        {
        resultado= "muy Bueno";
        }
    else if (nota ===10)
        {
        resultado= "excelente";
        }
        return resultado;
    };