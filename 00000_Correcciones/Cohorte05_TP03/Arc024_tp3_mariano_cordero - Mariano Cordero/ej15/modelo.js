/*
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida 
como parámetro devuelva un texto que diga los siguientes mensajes. 
• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 
Nota: Debe Devolver un Texto 
*/

export const notaAlumno = (notaPromedio) =>{

    let mensaje;
    if(notaPromedio < 0)
    {
        console.log(`Usted a ingresado una nota negativa o indefinida`);
    }
    if(notaPromedio >= 0 && notaPromedio < 5){
        mensaje = "Desaprobado";
    }
    if(notaPromedio >=5 && notaPromedio < 8){
        mensaje = " Aprobado";
    }
    if(notaPromedio >= 8 && notaPromedio < 10){//De esta manera tomam incluso los decimales sin errores al tomar todos los rangos
        mensaje = "Muy Bueno";
    }
    if(notaPromedio === 10){
        mensaje = "Exelente";
    }
    if(notaPromedio > 10){
        console.log(`Su nota ingresada exede el 10`);
    }
    
    return mensaje;
};