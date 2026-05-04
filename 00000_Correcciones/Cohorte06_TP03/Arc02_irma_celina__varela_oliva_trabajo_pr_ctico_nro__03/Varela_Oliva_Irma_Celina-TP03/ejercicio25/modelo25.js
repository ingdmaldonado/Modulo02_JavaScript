export const fnCalcularTasaFiscalizacionENRE = (importeBase)=>{

    let tasaFisENRE=0;

    tasaFisENRE = (importeBase * 1.2)/100;

    return tasaFisENRE;

};