export const fncalcularImporteAgua = (consumo)=>{

    let importeBase= 0;
    
    if (consumo <= 50)
    {
        importeBase= 50 * 350.00;
    }
    else if (consumo  <=70)
    {
        importeBase= (50* 350.00) + ((consumo-50)*555.20);
    }
   else {
    const excedente = consumo - 70;
    importeBase = (50 * 350)
                + (20 * 555.20)
                + ((consumo - 70) * 1552.20);
}
    return importeBase;
    console.log("Consumo en función:", consumo);
};
