// Arrow function que verifica si una palabra contiene al menos dos letras 's' (mayúscula o minúscula)
export const tieneDosEss = (palabra) => {
  if (palabra === null || palabra === undefined) return false;
  const s = String(palabra);
  let contador = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === 's' || ch === 'S') {
      contador++;
      if (contador >= 2) return true; // retorno temprano cuando se cumple
    }
  }
  return false;
};