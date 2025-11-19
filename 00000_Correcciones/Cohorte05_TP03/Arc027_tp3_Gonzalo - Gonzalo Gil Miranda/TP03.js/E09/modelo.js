export const contarVocales = (cadena) => {
let cnt = 0;
for (let i = 0; i < cadena.length; i++) {
const ch = cadena[i].toLowerCase();
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') cnt++;
}
return cnt;
};