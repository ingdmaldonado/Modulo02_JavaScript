// Arrow Function
export const calcularTasaSubsuelo = (importeBase) => {

    const PORCENTAJE = 0.03;

    let tasaSubsuelo =
        importeBase * PORCENTAJE;

    return tasaSubsuelo;
};