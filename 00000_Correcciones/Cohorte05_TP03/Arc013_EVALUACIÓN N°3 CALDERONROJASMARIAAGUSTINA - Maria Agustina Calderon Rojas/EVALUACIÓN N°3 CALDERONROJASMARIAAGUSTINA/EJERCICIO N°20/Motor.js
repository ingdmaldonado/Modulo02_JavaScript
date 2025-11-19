// =============================
// MODELO: Contiene todas las funciones de cálculo
// =============================

export const calcularDosisInsulina = (glucosa, peso, tipo) => {
    let dosis = 0;

    if (tipo === "1") {
        // Tipo 1
        dosis = (peso * 0.5) + (glucosa > 180 ? glucosa * 0.5 : 0);
    } 
    else if (tipo === "2") {
        // Tipo 2
        dosis = (peso * 0.2) + (glucosa > 180 ? glucosa * 0.5 : 0);
    } 
    else {
        return NaN; // tipo inválido
    }

    return dosis;
};