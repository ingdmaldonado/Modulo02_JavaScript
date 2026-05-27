export const calcularInsulina = (glucosaEnSangre, pesoCorporal, tipoDiabetes) =>{

    let dosis = 0;

    if (tipoDiabetes===1){
        dosis = pesoCorporal * 0.5;

    if (glucosaEnSangre> 180){ 
         dosis = dosis + (glucosaEnSangre *0.5);
    }
    }

    else if (tipoDiabetes===2)
    {
        dosis = pesoCorporal * 0.2;

    if (glucosaEnSangre > 180)
    {
        dosis= dosis + (glucosaEnSangre * 0.5);
    
    }
    }
    else
    {
        return  "Tipo de diabetes invalido";
    }
    
    return dosis;
    };
