export const fnCalcularInsulina = (glucosa,peso,tipoDiabetes)=>{

    let dosis = 0;

    /* tipo 1 */

    if(tipoDiabetes == 1)
    {
        dosis = (peso * 50) / 100;

        if(glucosa > 180)
        {
            dosis = dosis + ((glucosa * 50) / 100);
        }

        return dosis;
    }

    /* tipo 2 */

    if(tipoDiabetes == 2)
    {
        dosis = (peso * 20) / 100;

        if(glucosa > 180)
        {
            dosis = dosis + ((glucosa * 50) / 100);
        }

        return dosis;
    }

};