export const fnNotaPromedio = (nota)=>{

    if(nota < 0){
        return `Intente Nuevamente`;
    }
    else if(nota <= 4){
        return `Desaprobado`;
    }
    else if((nota > 4) && (nota <= 7)){
        return `Aprobado`;
    }
    else if((nota > 7) && (nota <= 9)){
        return `Muy Bueno`; 
    }
    else if(nota === 10){
        return `Excelente`;
    }
    else{
        return `Intente Nuevamente`;
    }

};