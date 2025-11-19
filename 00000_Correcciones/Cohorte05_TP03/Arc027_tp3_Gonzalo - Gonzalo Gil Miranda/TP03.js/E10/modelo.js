export const contarConsonantes = (cadena) => {
let cnt = 0;
for (let i = 0; i < cadena.length; i++) {
const ch = cadena[i];
const lower = ch.toLowerCase();
const code = lower.charCodeAt(0);
const esLetra = code >= 97 && code <= 122; // a..z
if (esLetra && !(lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u')) cnt++;
}
return cnt;
};