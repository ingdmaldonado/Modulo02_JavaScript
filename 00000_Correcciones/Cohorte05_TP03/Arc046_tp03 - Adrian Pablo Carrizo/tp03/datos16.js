export const calcularImpuestoBebida = (tipoBebida, importeBase) => {
    let tasaImpuesto = 0;
    switch (tipoBebida) {
        case 1:
            tasaImpuesto = 5;
            break;
        case 2:
            tasaImpuesto = 1;
            break;
        case 3:
            tasaImpuesto = 7;
            break;
        case 4:
            tasaImpuesto = 2;
            break;
        case 5:
            tasaImpuesto = 15;
            break;
        default:
            tasaImpuesto = 1;
            break;
    }
    return (importeBase * tasaImpuesto) / 1000;
}