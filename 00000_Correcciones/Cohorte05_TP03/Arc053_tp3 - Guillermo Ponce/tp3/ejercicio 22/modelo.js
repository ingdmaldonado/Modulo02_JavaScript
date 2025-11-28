// Arrow function que cuenta consonantes recorriendo la cadena con for (no usa replace/split/regex)
export const contarConsonantes = (cadena) => {
  if (cadena === null || cadena === undefined) return 0;
  const s = String(cadena);
  let contador = 0;

  // Vocales en minúscula (incluye acentuadas y ü). Comprobamos letras con toLowerCase/toUpperCase.
  const vocales = new Set(['a','e','i','o','u','á','é','í','ó','ú','ü']);

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    // determinar si es letra: en letras alfa Unicode toLowerCase() !== toUpperCase()
    const isLetter = ch.toLowerCase() !== ch.toUpperCase();
    if (!isLetter) continue;

    const lower = ch.toLowerCase();
    if (!vocales.has(lower)) contador++;
  }

  return contador; // devuelve número
};