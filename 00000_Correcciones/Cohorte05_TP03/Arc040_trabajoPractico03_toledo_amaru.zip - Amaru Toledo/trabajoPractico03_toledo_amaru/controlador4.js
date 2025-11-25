/**
 * EJERCICIO NRO. 17
 * Calcula el importe base a pagar por el cliente de Aguas de Catamarca según los metros cúbicos consumidos,
 * aplicando un esquema de facturación por bloques y un mínimo.
 * @param {number} metrosCubicosLeidos El total de metros cúbicos consumidos.
 * @returns {number} El importe base a pagar.
 */
Window.addEventListener('load', () => {
    console.log('controlador4 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const calcularImporteAgua = (metrosCubicosLeidos) => {
    const PRECIO_BLOQUE1 = 350.00; // Primeros 50 m³ [cite: 51]
    const PRECIO_BLOQUE2 = 555.20; // Siguientes 20 m³ (de 51 a 70 m³) [cite: 52]
    const PRECIO_EXCEDENTE = 1552.20; // Más de 70 m³ [cite: 53]
    const CONSUMO_MINIMO = 50; // Mínimo a facturar en m³ [cite: 57]

    let consumoReal = Math.max(metrosCubicosLeidos, CONSUMO_MINIMO); // Aplica el mínimo de 50 m³ [cite: 57]
    let importeBase = 0;
    console.log(`Consumo real considerado para facturación: ${consumoReal} m³`);
    // Bloque 1 (hasta 50 m³)
    const consumoB1 = Math.min(consumoReal, 50);
    importeBase += consumoB1 * PRECIO_BLOQUE1; // $50 \times 350.00$ [cite: 59]
    consumoReal -= consumoB1;
    console.log(`Después del Bloque 1: Importe Base = ${importeBase}, Consumo restante = ${consumoReal} m³`);
    // Bloque 2 (m³ 51 a 70, es decir, 20 m³)
    if (consumoReal > 0) {
        const consumoB2 = Math.min(consumoReal, 20);
        importeBase += consumoB2 * PRECIO_BLOQUE2; // $20 \times 555.20$ [cite: 59]
        consumoReal -= consumoB2;
    }

    // Bloque Excedente (más de 70 m³)
    if (consumoReal > 0) {
        const consumoExcedente = consumoReal;
        importeBase += consumoExcedente * PRECIO_EXCEDENTE; // $15 \times 1.552,20$ (ejemplo) [cite: 59]
    }
    console.log(`Importe Base calculado: ${importeBase}`);
    return importeBase;
};