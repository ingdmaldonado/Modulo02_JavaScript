export const dosisInsulina = (nivelGlucosa, peso, tipoDiabetes) => {
    let dosis = 0;

    if (tipoDiabetes === 1) { 
     
        if (nivelGlucosa > 180) {                      
          dosis = (peso * 50 /100 )+ (nivelGlucosa * 50 / 100);
        }
    }
    if (tipoDiabetes === 2) {                      

        if (nivelGlucosa > 180) {                       
            dosis = (peso * 20 / 100)+ (nivelGlucosa * 50 / 100);
        }
        else {
            dosis = (peso * 20 / 100);
        }
    }

 return dosis;
};
