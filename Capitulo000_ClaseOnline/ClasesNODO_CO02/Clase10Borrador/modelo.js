
export const fnCalcularNivelDeInsulina = (tipoDeDiabetes,pesoCorporal,nivelDeGlucosa)=>
    {
        let calculoNivelInsulina= 0;
        if(tipoDeDiabetes === 1)
        {
            if(nivelDeGlucosa > 180)
            {
                calculoNivelInsulina = (pesoCorporal*50)/100 + (nivelDeGlucosa * 50)/100;
            }
            else
            {
                calculoNivelInsulina = (pesoCorporal*50)/100;
            }
        }
        if(tipoDeDiabetes ===2)
        {
            if(nivelDeGlucosa > 180)
            {
                calculoNivelInsulina = (pesoCorporal*20)/100 + (nivelDeGlucosa * 50)/100;
            }
            else
            {
                calculoNivelInsulina = (pesoCorporal*20)/100;
            }    
        }

        return calculoNivelInsulina;
    }