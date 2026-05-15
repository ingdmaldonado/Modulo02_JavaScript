// Arrow Function
export const calcularImporteAgua = (metrosCubicos) => {

    // Tarifas
    const BLOQUE1 = 350;
    const BLOQUE2 = 555.20;
    const BLOQUE3 = 1552.20;

    let importe = 0;

    // Consumo mínimo
    if (metrosCubicos < 50) {

        importe = 50 * BLOQUE1;

    } else if (metrosCubicos <= 70) {

        // Primer bloque
        importe =
            (50 * BLOQUE1) +
            ((metrosCubicos - 50) * BLOQUE2);

    } else {

        // Primer bloque
        importe =
            (50 * BLOQUE1) +

            // Segundo bloque
            (20 * BLOQUE2) +

            // Excedente
            ((metrosCubicos - 70) * BLOQUE3);
    }

    return importe;
};