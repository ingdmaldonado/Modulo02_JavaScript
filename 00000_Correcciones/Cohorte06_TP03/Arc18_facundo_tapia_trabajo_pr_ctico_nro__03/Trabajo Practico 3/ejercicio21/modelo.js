
export const fnAnalizarNota =nota =>{

    if(nota >= 0 && nota <=4) return "desaprobado";
    if(nota > 4 && nota <=7) return "aprobado";
    if(nota > 7 && nota <=9) return "muy bueno";
    if(nota === 10) return "Excelente";

    return "nota Invalida";




};