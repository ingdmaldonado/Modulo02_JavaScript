


export const calcularInsulina = (
    glucosa,
    peso,
    tipoDiabetes
) => {

    let dosis = 0;


    if(tipoDiabetes === 1){

        dosis = peso * 0.50;

        if(glucosa > 180){

            dosis += glucosa * 0.50;

        }

    }


    else if(tipoDiabetes === 2){

        dosis = peso * 0.20;

        if(glucosa > 180){

            dosis += glucosa * 0.50;

        }

    }


    return Number(dosis.toFixed(2));

};