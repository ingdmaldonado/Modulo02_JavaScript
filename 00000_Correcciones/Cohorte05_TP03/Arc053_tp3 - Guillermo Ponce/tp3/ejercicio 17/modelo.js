// Todas las funciones como arrow functions y exportadas

export const TARIFA_BLOQUE_1 = 350.00;    // primeros 50 m³
export const TARIFA_BLOQUE_2 = 555.20;    // siguientes 20 m³ (51-70)
export const TARIFA_BLOQUE_3 = 1552.20;   // >70 m³

/**
 * calcularImporteAgua
 * Recibe total de m3 leídos y devuelve el importe base a pagar (número).
 * Aplica mínimo de 50 m3.
 * @param {number|string} metros3
 * @returns {number} importe (number) o NaN si entrada inválida
 */
export const calcularImporteAgua = (metros3) => {
  const raw = Number(metros3);
  if (!Number.isFinite(raw) || raw < 0) return NaN;

  const consumo = Math.max(raw, 50); // mínimo facturable 50 m³
  let total = 0;

  // Bloque 1: hasta 50 m³
  const b1 = Math.min(consumo, 50);
  total += b1 * TARIFA_BLOQUE_1;

  // Bloque 2: metros 51 a 70 => hasta 20 m³
  if (consumo > 50) {
    const b2 = Math.min(consumo - 50, 20);
    total += b2 * TARIFA_BLOQUE_2;
  }

  // Bloque 3: consumo > 70
  if (consumo > 70) {
    const b3 = consumo - 70;
    total += b3 * TARIFA_BLOQUE_3;
  }

  return Number(total);
};