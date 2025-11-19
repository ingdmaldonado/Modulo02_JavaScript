export const calcularSobretasa = (tipo, importe) => {

    let tasa = 0;

    switch (tipo) {
        case 1: tasa = 0.005; break;
        case 2: tasa = 0.001; break;
        case 3: tasa = 0.007; break;
        case 4: tasa = 0.002; break;
        case 5: tasa = 0.015; break;
        default: tasa = 0.001;
    }

    return importe * tasa;  
};
