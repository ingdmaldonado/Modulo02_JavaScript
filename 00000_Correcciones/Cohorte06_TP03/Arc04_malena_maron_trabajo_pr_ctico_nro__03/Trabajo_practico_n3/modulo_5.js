export const calcularImporteAgua =(metroCubico)=>{

 let importe = 0;

    if (metroCubico <= 50) {
        importe = 50 * 350;
    } 
     else if (metroCubico > 50 && metroCubico <= 70) {
        importe =(50 * 350.00) + (5 * 555.20);
    } 
    else {
        importe = (50 * 350.00) + (20 * 555.20) + (15 * 1552.20);
    }

    return importe;
};



