export const calcularInsulina = (glucosa, peso, tipo) => {

    let dosis = 0;

    if (tipo === 1) {

        dosis = peso * 0.5;

        if (glucosa > 180) {
            dosis = dosis + (glucosa * 0.5);
        }

    } 
    else if (tipo === 2) {

        dosis = peso * 0.2;

        if (glucosa > 180) {
            dosis = dosis + (glucosa * 0.5);
        }

    }

    return dosis;

}