export const fnCalcularPromedio = (nota1,nota2,nota3)=>{

    let promedio = 0;

    promedio = (nota1 + nota2 + nota3) / 3;

    return promedio;

};

export const fnEvaluarNota = (nota)=>{

    if(nota <= 4)
    {
        return "Desaprobado";
    }

    if(nota > 4 && nota <= 7)
    {
        return "Aprobado";
    }

    if(nota > 7 && nota <= 9)
    {
        return "Muy Bueno";
    }

    if(nota == 10)
    {
        return "Excelente";
    }

};