export const fnCalcularImporteAgua = (consumoAgua) => {

    if (consumoAgua < 50) {
        consumoAgua = 50;
    }

    let total = 50 * 350;

    if (consumoAgua > 70) {
        total += (20 * 555.20) + ((consumoAgua - 70) * 1552.20);
    } else if (consumoAgua > 50) {
        total += (consumoAgua - 50) * 555.20;
    }

    return total;
};