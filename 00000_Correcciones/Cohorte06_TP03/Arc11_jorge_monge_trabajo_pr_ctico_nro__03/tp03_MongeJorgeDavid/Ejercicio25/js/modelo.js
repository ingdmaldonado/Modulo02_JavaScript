// Arrow Function
export const calcularTasaENRE = (importeBase) => {

    const PORCENTAJE = 0.012;

    let tasaENRE =
        importeBase * PORCENTAJE;

    return tasaENRE;
};