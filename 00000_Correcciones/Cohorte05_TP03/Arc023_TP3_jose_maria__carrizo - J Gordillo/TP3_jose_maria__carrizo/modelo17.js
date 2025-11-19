export const calcularImporteAgua = (consumo) => {

    const precio1 = 350;    
    const precio2 = 555.20;   
    const precio3 = 1552.20;  

    let total = 0;

    if (consumo <= 50) {
        total = 50 * precio1;
        return total;
    }

    total = 50 * precio1;

    if (consumo > 50 && consumo <= 70) {
        const resto = consumo - 50;
        total += resto * precio2;
        return total;
    }

    total += 20 * precio2; 
    const excedente = consumo - 70;
    total += excedente * precio3;

    return total;
};
