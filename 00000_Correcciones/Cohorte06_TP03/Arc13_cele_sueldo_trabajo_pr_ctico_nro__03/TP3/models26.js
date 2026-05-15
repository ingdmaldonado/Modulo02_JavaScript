// models26.js

// función arrow
export const calcularInsulina = (

    glucosa,
    peso,
    tipoDiabetes

) => {

    let dosis = 0;

    // diabetes tipo 1
    if (tipoDiabetes == 1) {

        // saco el 50% del peso
        dosis = peso * 0.50;

        // agrego glucosa solo si es mayor a 180
        if (glucosa > 180) {

            dosis = dosis + (glucosa * 0.50);
        }

    } else if (tipoDiabetes == 2) {

        // saco el 20% del peso
        dosis = peso * 0.20;

        // agrego glucosa si supera 180
        if (glucosa > 180) {

            dosis = dosis + (glucosa * 0.50);
        }
    }

    return dosis;
};