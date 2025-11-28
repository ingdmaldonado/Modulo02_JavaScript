// Todas las funciones de cálculo como arrow functions y exportadas

/**
 * promedioNotas
 * Recibe tres valores (n1, n2, n3) y devuelve el promedio (número).
 * Si alguna entrada no es convertible a número, devuelve NaN.
 */
export const promedioNotas = (n1, n2, n3) => {
  const nums = [n1, n2, n3].map(Number);
  if (nums.some((x) => Number.isNaN(x))) return NaN;
  return (nums[0] + nums[1] + nums[2]) / 3;
};