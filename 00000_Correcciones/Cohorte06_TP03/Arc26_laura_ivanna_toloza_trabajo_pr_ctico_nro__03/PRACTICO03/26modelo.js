
export const calcularInsulina = (glucosa, peso, tipo) => {
    let dosis = 0;

    if (tipo === 1) {
        (dosis = peso * 50) / 100;

    if (glucosa > 180) {
        dosis = dosis + (glucosa * 50) / 100;
        }
    }

    if (tipo === 2) {
        dosis = peso * 0.20;

    if (glucosa > 180) {
        dosis = dosis + (glucosa * 50) / 100;
        }
    }
    return dosis;
};