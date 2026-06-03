export const calculoDosisRecomendada = (nivelGlucosa, pesoCorporal, tipoDiabetes) => {
let resultado = 0;
    if (tipoDiabetes == 1){

        if (nivelGlucosa > 180){
            resultado = (nivelGlucosa * 0.5)+ (pesoCorporal * 0.5);
        } else {
            resultado = pesoCorporal * 0.5;
        }
    } else if (tipoDiabetes == 2){
        if (nivelGlucosa > 180){
            resultado = (nivelGlucosa * 0.2) + (pesoCorporal * 0.5);
        } else {
            resultado = pesoCorporal * 0.2;
        }
    }
    return resultado;
}