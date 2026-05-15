// Arrow Function
export const calcularSobreTasa = (importeBase, tipoBebida) => {

    let tasa = 0;

    switch (tipoBebida) {

        case 1:
            tasa = 5 / 1000;
            break;

        case 2:
            tasa = 1 / 1000;
            break;

        case 3:
            tasa = 7 / 1000;
            break;

        case 4:
            tasa = 2 / 1000;
            break;

        case 5:
            tasa = 15 / 1000;
            break;

        case 6:
            tasa = 1 / 1000;
            break;

        default:
            tasa = 0;
    }

    let sobreTasa = importeBase * tasa;

    return sobreTasa;
};