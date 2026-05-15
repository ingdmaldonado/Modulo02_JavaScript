export const fnCalcularInsulina = (nivelGlucosa, pesoCorporal, tipoDiabetes) =>{

    let dosisInsulina = 0;

    switch(tipoDiabetes){

        case 1:{

            // PARA TIPO 1
            if(nivelGlucosa <= 180){
            dosisInsulina = (pesoCorporal * 0.50);
            }
            else{
            dosisInsulina = (pesoCorporal * 0.50) + (nivelGlucosa * 0.50);
            }

            break;
        }

        case 2:{

            // PARA TIPO 2
            if(nivelGlucosa <= 180){
            dosisInsulina = (pesoCorporal * 0.20);
            }
            else{
            dosisInsulina = (pesoCorporal * 0.20) + (nivelGlucosa * 0.50);
            }

            break;
        }

        default:{

            dosisInsulina = 0;

            break;
        }
    }

    return dosisInsulina;

};