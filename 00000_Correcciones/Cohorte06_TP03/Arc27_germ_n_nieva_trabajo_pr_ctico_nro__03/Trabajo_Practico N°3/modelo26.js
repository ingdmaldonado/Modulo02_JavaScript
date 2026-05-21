export const calcularDosisInsulina = (glucosa, peso, tipoDiabetes) => {
    const g = Number(glucosa)
    const p = Number(peso)
    let dosis = 0

    if (tipoDiabetes === "1") {
        dosis = p * 0.5
        if (g > 180) dosis += g * 0.5
    } else {
        dosis = p * 0.2
        if (g > 180) dosis += g * 0.5
    }

    return dosis
}
