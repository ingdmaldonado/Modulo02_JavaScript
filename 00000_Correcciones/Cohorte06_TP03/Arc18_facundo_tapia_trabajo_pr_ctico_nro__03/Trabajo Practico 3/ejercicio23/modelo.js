

export const calcularImporteAgua = metrosCubicos => {


    const valorBloque1 = 350;
    const valorBloque2 = 555.20;
    const valorBloque3 = 1552.20;

    let importe = 0;


    if(metrosCubicos <=50)
    {
        importe = 50 * valorBloque1;
    }

    else if(metrosCubicos <=70)
    {
        let excedente = metrosCubicos - 50;

        importe = (50 * valorBloque1) + (excedente * valorBloque2);
    }

    else{

        let excedenteBloque2 = 20;
        let excedentebloque3 = metrosCubicos - 70 ;

        importe = (50 * valorBloque1) + (excedenteBloque2 * valorBloque2) + (excedentebloque3 * valorBloque2);

    }

    return  Number(importe.toFixed(2));
    














};