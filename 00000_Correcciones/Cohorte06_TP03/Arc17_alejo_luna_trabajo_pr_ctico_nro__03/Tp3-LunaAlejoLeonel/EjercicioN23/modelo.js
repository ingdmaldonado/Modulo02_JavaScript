export const calcularImporteAgua = (metros) => {

    let total = 0;

    // mínimo 50
    if (metros <= 50) {

        total = 50 * 350;

    } 
    else if (metros <= 70) {

        let excedente = metros - 50;

        total = (50 * 350) + (excedente * 555.20);

    } 
    else {

        let excedente = metros - 70;

        total = (50 * 350) + (20 * 555.20) + (excedente * 1552.20);

    }

    return total;

}