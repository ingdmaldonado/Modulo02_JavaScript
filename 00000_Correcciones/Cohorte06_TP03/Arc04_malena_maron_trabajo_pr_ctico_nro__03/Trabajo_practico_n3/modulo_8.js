export const calcular =(pesoCorporal,nivelGlucosa,tipo)=>{
            
          let dosis =0;

        if (tipo === 1 ){
            dosis = pesoCorporal * 0.5;
            if( nivelGlucosa > 180){
                dosis += nivelGlucosa * 0.5;
            }
           
        }


        if (tipo === 2){
            dosis = pesoCorporal * 0.2;
            if( nivelGlucosa > 180){
                dosis+=nivelGlucosa * 0.5
            }

            
        };
        return dosis
    }