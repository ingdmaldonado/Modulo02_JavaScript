export const fnDosisRecomendada = (nivelDeGlucosa, pesoCorporal, opciones) =>{

let glucosaMaxima = 180;
let extraGlucosa = 0;

if (nivelDeGlucosa>glucosaMaxima){
    extraGlucosa = nivelDeGlucosa * 0.50
}

switch (opciones) {
    case 1:
        return (pesoCorporal * 0.50) + extraGlucosa;
        break;
    case 2:
        return (pesoCorporal * 0.20) + extraGlucosa;
        break;
    default:
        return "tipo inválido";
        break;
}

};