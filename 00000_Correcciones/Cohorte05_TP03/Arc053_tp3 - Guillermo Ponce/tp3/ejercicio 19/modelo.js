export const PORCENTAJE_ENRE = 1.2; // 1,2 %

/**
 * calcularTasaENRE
 * @param {number|string} importeBase
 * @returns {number} monto de la tasa ENRE (número) o NaN si entrada inválida
 */
export const calcularTasaENRE = (importeBase) => {
  const base = Number(importeBase);
  if (!Number.isFinite(base) || base < 0) return NaN;
  return base * (PORCENTAJE_ENRE / 100);
};