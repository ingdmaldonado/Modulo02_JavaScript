// Arrow Function
export const calcularImporteAgua = (metrosCubicos) => {

    let importe = 0;

    // Consumo mínimo
    if (metrosCubicos < 50) {
        importe = 50 * 350;
    }

    // Entre 50 y 70 m³
    else if (metrosCubicos <= 70) {

        importe =
            (50 * 350) +
            ((metrosCubicos - 50) * 555.20);
    }

    // Más de 70 m³
    else {

        importe =
            (50 * 350) +
            (20 * 555.20) +
            ((metrosCubicos - 70) * 1552.20);
    }

    return importe;
};