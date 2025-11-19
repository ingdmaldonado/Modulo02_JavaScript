// =============================
// MODELO: Contiene todas las funciones lógicas
// =============================

// Arrow function que calcula la Tasa de Subsuelo (3% del importe base)
export const calcularTasaSubsuelo = (importeBase) => {
    const tasa = importeBase * 0.03;
    return tasa; // debe devolver un número
};