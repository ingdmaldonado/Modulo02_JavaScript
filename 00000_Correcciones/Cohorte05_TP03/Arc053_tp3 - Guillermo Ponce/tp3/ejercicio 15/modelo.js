
// Todas las funciones como arrow functions y exportadas

/**
 * evaluarNota
 * Recibe una nota (número o texto convertible) y devuelve el texto según las reglas:
 *  - nota <= 4           => "Desaprobado"
 *  - nota > 4 && <= 7    => "Aprobado"
 *  - nota > 7 && < 10    => "Muy Bueno"
 *  - nota === 10         => "Excelente"
 * Si la entrada no es un número válido (vacío, NaN, fuera de 0-10) devuelve "Entrada inválida"
 * @param {number|string} nota
 * @returns {string}
 */
export const evaluarNota = (nota) => {
  if (nota === null || nota === undefined) return "Entrada inválida";

  const str = String(nota).trim();
  if (str === "") return "Entrada inválida";

  const n = Number(str);
  if (!Number.isFinite(n) || n < 0 || n > 10) return "Entrada inválida";

  if (n === 10) return "Excelente";
  if (n > 7 && n < 10) return "Muy Bueno";
  if (n > 4 && n <= 7) return "Aprobado";
  return "Desaprobado";
};