export const noContieneDigitos = (cadena) => {
for (let i = 0; i < cadena.length; i++) {
const ch = cadena[i];
if (ch >= '0' && ch <= '9') return false;
}
return true;
};