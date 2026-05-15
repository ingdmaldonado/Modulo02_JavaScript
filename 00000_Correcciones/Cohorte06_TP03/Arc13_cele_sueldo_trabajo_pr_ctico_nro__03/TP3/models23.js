// models23.js

export const calcularImporteAgua = (metrosCubicos) => {

    let importe = 0;

    // si consume menos de 50 igual paga mínimo
    if (metrosCubicos < 50) {

        importe = 50 * 350;

    } else if (metrosCubicos <= 70) {

        // primeros 50 metros
        importe = 50 * 350;

        // calculo lo que sobra
        importe = importe + ((metrosCubicos - 50) * 555.20);

    } else {

        // primeros 50 metros
        importe = 50 * 350;

        // siguientes 20 metros
        importe = importe + (20 * 555.20);

        // excedente
        importe = importe + ((metrosCubicos - 70) * 1552.20);
    }

    return importe;
};