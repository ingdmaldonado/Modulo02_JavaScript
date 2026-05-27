export const calcularImpuesto = (importe, tipo) => {

    let tasa = 0;

    if (tipo === 1) {
        tasa = 5 / 1000;
    } 
    else if (tipo === 2) {
        tasa = 1 / 1000;
    } 
    else if (tipo === 3) {
        tasa = 7 / 1000;
    } 
    else if (tipo === 4) {
        tasa = 2 / 1000;
    } 
    else if (tipo === 5) {
        tasa = 15 / 1000;
    } 
    else {
        tasa = 1 / 1000;
    }

    return importe * tasa;

}