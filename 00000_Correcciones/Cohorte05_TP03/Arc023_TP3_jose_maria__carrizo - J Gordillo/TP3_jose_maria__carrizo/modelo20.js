export const calcularInsulina = (glucosa, peso, tipo) => {
    let dosis = 0;

    if (tipo === 1) {
        dosis = peso * 0.50;
        if (glucosa > 180) {
            dosis += glucosa * 0.50;
        }
    } else if (tipo === 2) {
        dosis = peso * 0.20;
        if (glucosa > 180) {
            dosis += glucosa * 0.50;
        }
    }

    return dosis;
};
