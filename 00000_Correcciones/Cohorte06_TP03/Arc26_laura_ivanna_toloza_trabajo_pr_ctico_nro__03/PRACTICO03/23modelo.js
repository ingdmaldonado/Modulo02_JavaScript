
export const calcularImporteAgua = (metrosCubicos) => {

    let importe = 0;

    if (metrosCubicos <= 50) {
        importe = 50 * 350;
    }
    else if (metrosCubicos <= 70) {
        importe = (50 * 350) + ((metrosCubicos - 50) * 555.20);
    }
    else {
        importe = (50 * 350) + (20 * 555.20) + ((metrosCubicos - 70) * 1552.20);
    }
    return importe;
};