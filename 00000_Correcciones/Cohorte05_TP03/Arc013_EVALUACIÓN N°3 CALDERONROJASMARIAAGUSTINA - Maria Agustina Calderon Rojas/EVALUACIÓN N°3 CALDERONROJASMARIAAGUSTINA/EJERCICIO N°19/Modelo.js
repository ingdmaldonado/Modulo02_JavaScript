// =============================
// MODELO: Contiene todas las funciones lógicas
// =============================

// Arrow function que calcula la Tasa de Fiscalización ENRE (1,2% del importe base)
export const calcularTasaENRE = (importeBase) => {
    const tasa = importeBase * 0.012;
    return tasa; // debe devolver un número
};