// Todas las funciones como arrow functions y exportadas

/**
 * calcularPrecioVenta
 * @param {number|string} importe - importe de compra
 * @param {number|string} margen - margen (%) a aplicar
 * @returns {number} precio de venta (importe * (1 + margen/100)) o NaN si entrada inválida
 */
export const calcularPrecioVenta = (importe, margen) => {
  const i = Number(importe);
  const m = Number(margen);
  if (!Number.isFinite(i) || !Number.isFinite(m)) return NaN;
  return i * (1 + m / 100);
};