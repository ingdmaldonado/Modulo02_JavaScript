// Arrow function que cuenta vocales recorriendo la cadena con for (no usa replace/split/regex)
export const contarVocales = (cadena) => {
  if (cadena === null || cadena === undefined) return 0;
  const s = String(cadena);
  let contador = 0;

  // Conjunto de vocales (mayúsculas, minúsculas, acentuadas y ü/Ü)
  const vocales = new Set([
    'a','A','e','E','i','I','o','O','u','U',
    'á','Á','é','É','í','Í','ó','Ó','ú','Ú','ü','Ü'
  ]);

  for (let i = 0; i < s.length; i++) {
    const ch = s[i]; // acceso por índice
    if (vocales.has(ch)) contador++;
  }

  return contador; // devuelve número
};