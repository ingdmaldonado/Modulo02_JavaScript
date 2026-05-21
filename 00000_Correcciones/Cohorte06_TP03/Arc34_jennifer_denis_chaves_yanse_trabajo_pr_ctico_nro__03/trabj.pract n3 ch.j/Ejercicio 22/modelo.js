export const fnCalcularSobreTasa = (importe,tipoBebida)=>{

    if(tipoBebida == 1)
    {
        return (importe * 5) / 1000;
    }

    if(tipoBebida == 2)
    {
        return (importe * 1) / 1000;
    }

    if(tipoBebida == 3)
    {
        return (importe * 7) / 1000;
    }

    if(tipoBebida == 4)
    {
        return (importe * 2) / 1000;
    }

    if(tipoBebida == 5)
    {
        return (importe * 15) / 1000;
    }

    if(tipoBebida == 6)
    {
        return (importe * 1) / 1000;
    }

};