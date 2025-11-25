/**
 * EJERCICIO NRO. 19
 * Calcula la Tasa de Fiscalización ENRE, que es el 1.2% del Importe Base de la factura de Aguas de Catamarca.
 * @param {number} importeBase El importe base de la factura de agua.
 * @returns {number} El monto de la Tasa de Fiscalización ENRE.
 */
window.addEventListener('load', () => {
    console.log('controlador6 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const calcularTasaFiscalizacionENRE = (importeBase) => {
    // 1.2% equivale a 0.012
    const tasaENRE = importeBase * 0.012; [cite: 65]
    return tasaENRE;
    console.log(`Tasa de Fiscalización ENRE calculada: ${tasaENRE}`); 
};