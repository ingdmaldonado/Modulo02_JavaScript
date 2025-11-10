

// ======== Módulo de validaciones ========

// Función genérica que valida si un campo NO está vacío
export function validarCampo(valor) {
  const limpio = valor.trim();           // quitamos espacios
  // Si la longitud es 0 → false, si no → true
  return limpio.length === 0 ? false : true;
}
