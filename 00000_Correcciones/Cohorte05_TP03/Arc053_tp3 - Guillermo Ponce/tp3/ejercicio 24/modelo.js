// Arrow function que recorre la cadena con for y devuelve true al encontrar el 3er espacio
export const contieneTresEspacios = (cadena) => {
  if (cadena === null || cadena === undefined) return false;
  const s = String(cadena);
  let contador = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      contador++;
      if (contador >= 3) return true; // romper y devolver true inmediatamente
    }
  }
  return false;
};