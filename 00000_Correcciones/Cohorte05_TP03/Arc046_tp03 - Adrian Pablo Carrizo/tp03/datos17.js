export const calcularImporteAgua = (metrosCubicos) => {
    let importe = 0;
    if (metrosCubicos <= 50) {
        importe = metrosCubicos * 350;
    } else if (metrosCubicos <= 70) {
        importe = (50 * 350) + ((metrosCubicos - 50) * 555.20);
    } else {
        importe = (50 * 350) + (20 * 555.20) + ((metrosCubicos - 70) * 1552.20);
    }
    return importe;
};

export const calcularImpuesto = (importeBase, categoria) => {
    let tasa = 0;
    switch (categoria) {
        case 1:
            tasa = 0.1;
            break;
        case 2:
            tasa = 0.15;
            break;
        case 3:
            tasa = 0.2;
            break;
        default:
            tasa = 0;
    }
    return importeBase * tasa;
};
