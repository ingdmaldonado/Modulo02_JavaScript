// models22.js

export const calcularSobreTasa = (importeBase, tipoBebida) => {

    let impuesto = 0;

    // voy evaluando el tipo de bebida
    if (tipoBebida == 1) {

        impuesto = importeBase * (5 / 1000);

    } else if (tipoBebida == 2) {

        impuesto = importeBase * (1 / 1000);

    } else if (tipoBebida == 3) {

        impuesto = importeBase * (7 / 1000);

    } else if (tipoBebida == 4) {

        impuesto = importeBase * (2 / 1000);

    } else if (tipoBebida == 5) {

        impuesto = importeBase * (15 / 1000);

    } else {

        impuesto = importeBase * (1 / 1000);
    }

    return impuesto;
};