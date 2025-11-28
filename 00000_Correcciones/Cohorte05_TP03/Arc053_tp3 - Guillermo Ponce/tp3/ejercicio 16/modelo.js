// Todas las funciones como arrow functions y exportadas

// Mapa de tasas en por mil (‰)
export const tasasPorMil = {
  1: 5,   // Agua envase plástico
  2: 1,   // Agua envase retornable
  3: 7,   // Gaseosas azucaradas plástico
  4: 2,   // Gaseosas azucaradas retornable
  5: 15,  // Bebidas energéticas
  6: 1    // Otras no clasificadas
};

/**
 * obtenerTasaPorMil
 * @param {number|string} codigo - código de clasificación (1..6)
 * @returns {number|null} tasa en por mil o null si inválido
 */
export const obtenerTasaPorMil = (codigo) => {
  const key = Number(codigo);
  if (!Number.isFinite(key)) return null;
  return Object.prototype.hasOwnProperty.call(tasasPorMil, key) ? tasasPorMil[key] : null;
};

/**
 * calcularSobreTasa
 * @param {number|string} importeBase - importe base de la bebida
 * @param {number|string} codigoClasificacion - código de clasificación (1..6)
 * @returns {number} monto de la sobre tasa (número). Devuelve NaN si entradas inválidas.
 */
export const calcularSobreTasa = (importeBase, codigoClasificacion) => {
  const base = Number(importeBase);
  if (!Number.isFinite(base) || base < 0) return NaN;

  const tasa = obtenerTasaPorMil(codigoClasificacion);
  if (tasa === null) return NaN;

  // por mil => dividir por 1000
  return base * (tasa / 1000);
};