// Todas las funciones como arrow functions y exportadas

export const PORCENTAJE_ENRE = 1.2; // 1,2 %

/**
 * calcularTasaENRE
 * Recibe el importe base de la factura y devuelve la Tasa de Fiscalización ENRE (1,2%).
 * @param {number|string} importeBase
 * @returns {number} monto de la tasa ENRE (número) o NaN si entrada inválida
 */
export const calcularTasaENRE = (importeBase) => {
  const base = Number(importeBase);
  if (!Number.isFinite(base) || base < 0) return NaN;

  // 1,2 % = 1,2 / 100
  return base * (PORCENTAJE_ENRE / 100);
};