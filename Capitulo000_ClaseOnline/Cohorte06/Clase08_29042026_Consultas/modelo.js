

/* 
* Si la nota <= 4 debe devolver “Desaprobado”
* Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
* Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
* Si la nota = 10 debe devolver “Excelente”
*/

export const fnAnalizarNota = nota=>{

    if(nota >= 0 && nota <= 4) return "Desaprobado";
    if(nota > 4 && nota <= 7) return "Aprobado";
    if(nota > 7 && nota <= 9) return "Muy bueno";
    if(nota === 10) return "Excelente";

    return "Nota Invalida";

};
