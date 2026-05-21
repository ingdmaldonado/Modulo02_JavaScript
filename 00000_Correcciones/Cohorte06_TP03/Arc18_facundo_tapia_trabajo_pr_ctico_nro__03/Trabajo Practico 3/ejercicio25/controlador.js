

export const calcularTasaENRE = importeBase => {

    let tasaENRE =
    importeBase * 0.012;

    return Number(
        tasaENRE.toFixed(2)
    );

};