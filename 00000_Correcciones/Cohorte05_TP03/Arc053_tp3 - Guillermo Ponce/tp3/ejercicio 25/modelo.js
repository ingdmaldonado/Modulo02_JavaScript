// Arrow function que verifica si una cadena NO contiene dígitos (0-9).
export const noContieneDigitos = (cadena) => {
  if (cadena === null || cadena === undefined) return true;
  const s = String(cadena);
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch >= '0' && ch <= '9') {
      // se encontró un dígito: interrumpir y devolver false
      return false;
    }
  }
  // recorrido completo sin dígitos
  return true;
};