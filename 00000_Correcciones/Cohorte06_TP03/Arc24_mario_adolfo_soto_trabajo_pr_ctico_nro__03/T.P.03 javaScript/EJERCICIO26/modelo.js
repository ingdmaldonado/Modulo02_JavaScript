export const fnInsulinaRecomendad = (tipoDiabetes,pesoCorporal,nivelGlucosa)=>{
    
    let dosisInsulina = 0;
    switch(tipoDiabetes){

        case 1:{
            if(nivelGlucosa>180) {
                dosisInsulina = (pesoCorporal * 50)/100 + (nivelGlucosa*50)/100;
                
            }
            else 
                {
                    dosisInsulina = (pesoCorporal * 50)/100;

                }
                
            break;
        };
        case 2:{
            if(nivelGlucosa>180) {
                dosisInsulina = (pesoCorporal * 20)/100 + (nivelGlucosa*50)/100;
                
            }
            else 
                {
                   dosisInsulina= (pesoCorporal * 20)/100;

                }
                
            break;
        };
    }
        return dosisInsulina;

};