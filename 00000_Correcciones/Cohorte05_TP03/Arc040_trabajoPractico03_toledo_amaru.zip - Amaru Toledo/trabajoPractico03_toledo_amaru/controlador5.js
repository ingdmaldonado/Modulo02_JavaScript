/**
 * EJERCICIO NRO. 18
 * Calcula la Tasa de Subsuelo, que es el 3% del Importe Base de la factura de Aguas de Catamarca.
 * @param {number} importeBase El importe base de la factura de agua.
 * @returns {number} El monto de la Tasa de Subsuelo.
 */

window.addEventListener('load', () => {
    console.log('controlador5 cargado y listo.');
});

// VARIABLE PRINCIPAL

export const calcularTasaSubsuelo = (importeBase) => {
    // 3% equivale a 0.03
    const tasaSubsuelo = importeBase * 0.03; [cite: 62]
    return tasaSubsuelo;
    console.log(`Tasa de Subsuelo calculada: ${tasaSubsuelo}`);

};